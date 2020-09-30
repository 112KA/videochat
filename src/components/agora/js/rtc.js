import AgoraRTC from 'agora-rtc-sdk'
import { EventDispatcher } from './core/EventDispatcher'


export default class RTCClient extends EventDispatcher {
  constructor() {
    super()

    // Options for joining a channel
    this.option = {
      appid: '',
      channel: '',
      uid: '',
      token: '',
    }
    this.client = null
    this.shareClient = null
    this.localStream = null
    this.shareStream = null
    this.shareId = 1
  }

  clientInit(client, option) {

    return new Promise((resolve, reject) => {

      client.init(option.appid, () => {
        console.log("init success")

        client.join(
          option.token ? option.token : null,
          option.channel,
          option.uid,
          uid => {
            console.log("join channel: " + option.channel + " success, uid: ", uid)
            resolve(uid)
          }, (err) => {
            console.error("client join failed", err)
          }
        )
      }, (err) => {
        reject(err)
        console.error(err)
      })
      console.log("[agora-vue] appId", option.appid)
    })
  }

  //init client and Join a channel
  joinChannel(option) {
    this.client = AgoraRTC.createClient({ mode: "rtc", codec: "h264" })
    this.clientListener()

    return new Promise((resolve, reject) => {

      this.clientInit(this.client, option).then(uid => {
        this.option = {
          appid: option.appid,
          token: option.token,
          channel: option.channel,
          uid,
        }
        resolve()
      })
    })
  }

  publishStream(audio, video) {
    return new Promise((resolve, reject) => {
      // Create a local stream
      this.localStream = AgoraRTC.createStream({
        streamID: this.option.uid,
        audio,
        video,
        screen: false,
      })
      console.log("createStream", audio, video)

      // Initialize the local stream
      this.localStream.init(() => {
        console.log("init local stream success")

        // Publish the local stream
        this.client.publish(this.localStream, (err) => {
          console.log("publish failed")
          console.error(err)
        })

        resolve(this.localStream)
      }, (err) => {
        reject(err)
        console.error("init local stream failed ", err)
      })
    })
  }

  clientListener() {
    const client = this.client

    client.on('stream-added', e => {
      // The stream is added to the channel but not locally subscribed
      this.dispatch('stream-added', e)
    })
    client.on('stream-subscribed', e => {
      this.dispatch('stream-subscribed', e)
    })
    client.on('stream-removed', e => {
      this.dispatch('stream-removed', e)
    })
    client.on('peer-online', e => {
      this.dispatch('peer-online', e)
    })
    client.on('peer-leave', e => {
      this.dispatch('peer-leave', e)
    })
  }

  leaveChannel() {

    return new Promise((resolve, reject) => {
      // Leave the channel
      this.client.unpublish(this.localStream, (err) => {
        console.log(err)
      })

      this.client.leave(() => {
        // Stop playing the local stream
        if (this.localStream.isPlaying()) {
          this.localStream.stop()
        }
        // Close the local stream
        this.localStream.close()

        this.client = null

        resolve()

        console.log("client leaves channel success");
      }, (err) => {
        reject(err)
        console.log("channel leave failed");
        console.error(err);
      })
    })
  }

  shareStart(shareid) {
    this.shareClient = AgoraRTC.createClient({ mode: "rtc" });

    return new Promise((resolve, reject) => {
      this.clientInit(this.shareClient, {
        uid: shareid,
        appid: this.option.appid,
        token: this.option.token,
        channel: this.option.channel,
      }).then(uid => {
        console.log("share start uid", uid)

        this.shareStream = AgoraRTC.createStream({
          streamID: uid,
          audio: false,
          video: false,
          screen: true
        })
        console.log("shareStart >>> createStream", this.shareStream)

        // Initialize the local stream
        this.shareStream.init(
          () => {
            console.log("init local stream success")

            // this.shareStream.on("stopScreenSharing", () => {
            //   this.shareEnd();
            //   console.log("Stop Screen Sharing at" + new Date());
            // });

            this.shareClient.publish(this.shareStream, err => {
              console.log("Publish share stream error: " + err);
              console.log("getUserMedia failed", err);

            });

            resolve(this.shareStream)
          },
          err => {
            console.log("shareStart >>> getUserMedia failed")
            resolve(null)
          }
        );
      })
    })
  }

  shareEnd() {
    try {
      this.shareClient.unpublish(this.shareStream);
      this.shareStream.close();
      this.shareClient.leave(
        () => {
          console.log("Share client succeed to leave.");
        },
        () => {
          console.log("Share client failed to leave.");
        }
      );
    } finally {
      this.shareClient = null;
      this.shareStream = null;
    }
  }
}