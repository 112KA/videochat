(function(e){function t(t){for(var r,o,s=t[0],c=t[1],l=t[2],h=0,d=[];h<s.length;h++)o=s[h],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2709:function(e,t,n){},"2a35":function(e,t,n){"use strict";var r=n("35eb"),a=n.n(r);a.a},"308d":function(e,t,n){"use strict";var r=n("2709"),a=n.n(r);a.a},"35eb":function(e,t,n){},"412f":function(e,t,n){},"479a":function(e,t,n){},"48c9":function(e,t,n){"use strict";var r=n("6284"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.isJoin?e._e():n("ReadyPage",{on:{join:e.onClickJoin}}),n("Meeting",{directives:[{name:"show",rawName:"v-show",value:e.isJoin,expression:"isJoin"}],ref:"meeting",attrs:{appid:e.appid,shareid:e.shareid},on:{leave:e.onClickLeave}})],1)},i=[],o=(n("a15b"),n("96cf"),n("1da1")),s=n("5530"),c=n("2f62"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ready"},[n("div",[e._m(0),n("UI",{attrs:{disableShareScreenButton:""},on:{enableVideo:e.onEnableVideo,enableAudio:e.onEnableAudio,join:e.onClickJoin}})],1)])},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://jp.vcube.com/service/agora",target:"_blank"}},[e._v("Agora SDK")]),e._v("を使ったビデオチャットサンプル(画面共有も可) ")]),n("li",[e._v(" URLのchannelクエリを指定すると、任意の通話チャンネルをつくれる。 "),n("br"),e._v("例) https://112ka.github.io/videochat/?channel=test ")]),n("li",[n("a",{attrs:{href:"https://docs.agora.io/cn/faq/browser_support",target:"_blank"}},[e._v("ブラウザサポート")]),n("br"),e._v("※画面共有については "),n("a",{attrs:{href:"https://docs.agora.io/en/Video/screensharing_web?platform=Web",target:"_blank"}},[e._v("Safariは非サポート")])]),n("li",[n("a",{attrs:{href:"https://github.com/112KA/videochat",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub")])])])}],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"meeting_ui"},[n("ul",[e.disableVideoButton?e._e():n("li",[n("ToggleButton",{ref:"btn01",attrs:{selected:e.selectedVideo,imageUrlBase:"./img/btn_video",label:"カメラ"},on:{click:e.onClickVideo}})],1),e.disableMicButton?e._e():n("li",[n("ToggleButton",{ref:"btn02",attrs:{selected:e.selectedAudio,imageUrlBase:"./img/btn_mic",label:"マイク"},on:{click:e.onClickMic}})],1),e.disableShareScreenButton?e._e():n("li",[n("ToggleButton",{ref:"btn03",attrs:{selected:e.selectedShareScreen,imageUrlBase:"./img/btn_screen",label:"画面共有"},on:{click:e.onClickShareScreen}})],1),n("li",[n("ToggleButton",{ref:"btn04",attrs:{selected:!e.isJoin,imageUrlBase:"./img/btn_join",label:"通話"},on:{click:e.onClickJoin}})],1)])])},d=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{class:{toggleButton:!0,disabled:!e.enabled},on:{click:e.onClick}},[n("img",{attrs:{src:e.imageUrl,alt:""}}),e._v(" "+e._s(e.label)+" ")])},f=[],p={props:{label:String,selected:Boolean,imageUrlBase:String},data:function(){return{_selected:!0,enabled:!0,imageUrl:void 0}},mounted:function(){this.setSelected(this.selected)},methods:{setSelected:function(e){this._selected=e;var t=this._selected?"_on":"_off";this.imageUrl=this.imageUrlBase+t+".png"},onClick:function(e){this.setSelected(!this._selected),this.$emit("click")},_enabled:function(e){this.enabled=e}},watch:{selected:function(e,t){this.setSelected(e)}}},v=p,g=(n("f053"),n("2877")),b=Object(g["a"])(v,m,f,!1,null,"dee66936",null),S=b.exports,w={components:{ToggleButton:S},props:{disableVideoButton:Boolean,disableMicButton:Boolean,disableShareScreenButton:Boolean},computed:Object(s["a"])(Object(s["a"])({},Object(c["c"])("rtc",{selectedVideo:function(e){return e.video},selectedAudio:function(e){return e.audio},selectedShareScreen:function(e){return e.shareScreen}})),Object(c["b"])("rtc",["isJoin"])),methods:{onClickVideo:function(e){this.$emit("enableVideo",this.$refs.btn01._selected)},onClickMic:function(e){this.$emit("enableAudio",this.$refs.btn02._selected)},onClickShareScreen:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$emit("enableShareScreen",t.$refs.btn03._selected);case 1:case"end":return e.stop()}}),e)})))()},onClickJoin:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$refs.btn04._selected?t.$emit("leave"):t.$emit("join");case 1:case"end":return e.stop()}}),e)})))()}},watch:{disableShareScreenButton:function(e){console.log("disableShareScreenButton",e)}}},k=w,y=(n("f65e"),Object(g["a"])(k,h,d,!1,null,"2a7b92a6",null)),_=y.exports,j={components:{UI:_},computed:{},methods:{onEnableVideo:function(e){this.$store.commit("rtc/video",e)},onEnableAudio:function(e){this.$store.commit("rtc/audio",e)},onClickJoin:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$emit("join");case 1:case"end":return e.stop()}}),e)})))()}}},O=j,R=(n("63a9"),Object(g["a"])(O,l,u,!1,null,"a4a09fc6",null)),C=R.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"meeting"},[n("UI",{ref:"ui",staticClass:"meeting_ui",on:{enableVideo:e.onEnableVideo,enableAudio:e.onEnableAudio,enableShareScreen:e.onEnableShareScreen,leave:e.onClickLeave}}),n("ScreenView",{ref:"screen"})],1)},$=[],P=(n("a9e3"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"screen"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.mainStream,expression:"mainStream"}],staticClass:"screen_share"},[e.mainStream?n("StreamPlayer",{attrs:{stream:e.mainStream,domId:e.mainStream.getId()}}):e._e()],1),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.mainStream,expression:"!mainStream"}]},[n("p",[e._v("Local stream")]),n("div",{staticClass:"agora-video"},[e.localStream?n("StreamPlayer",{attrs:{stream:e.localStream,domId:e.localStream.getId()}}):e._e()],1),n("p",[e._v("Remote stream")]),n("div",{staticClass:"screen_remote"},e._l(e.remoteStreams,(function(e,t){return n("div",{key:t,staticClass:"agora-video"},[n("StreamPlayer",{attrs:{stream:e,domId:e.getId()}})],1)})),0)])])}),I=[],E=(n("7db0"),n("d81d"),n("a434"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"player",staticClass:"agora-video-player",attrs:{id:e.domId}},[n("p",{staticClass:"agora-video-label"},[e._v(e._s(e.domId))])])}),M=[],B={name:"stream-player",props:["stream","domId"],mounted:function(){console.log("mounted "),this.$nextTick((function(){this.stream&&!this.stream.isPlaying()&&(console.log("mounted ",this.stream.getId()),this.stream.play("".concat(this.domId),{fit:"cover"},(function(e){e&&"aborted"!==e.status&&console.warn("trigger autoplay policy")})))}))},beforeDestroy:function(){console.log("beforeDestroy ",this.stream.getId())}},A=B,U=(n("2a35"),Object(g["a"])(A,E,M,!1,null,"09f757fc",null)),V=U.exports,J={components:{StreamPlayer:V},data:function(){return{remoteStreams:[]}},computed:Object(s["a"])({},Object(c["c"])("rtc",{localStream:function(e){return e.localStream},mainStream:function(e){return e.mainStream}})),methods:{clearRemoteStreams:function(){this.remoteStreams=[]},addRemoteStream:function(e){this.remoteStreams.find((function(t){return t.getId()===e.getId()}))||this.remoteStreams.push(e)},removeRemoteStream:function(e){var t=this;this.remoteStreams.map((function(n,r){return n.getId()===e?(t.remoteStreams[r].close(),t.remoteStreams.splice(r,1),1):0}))}}},T=J,L=(n("48c9"),Object(g["a"])(T,P,I,!1,null,"4de215cf",null)),N=L.exports,q={components:{ScreenView:N,UI:_},props:{appid:String,shareid:Number},data:function(){return{}},mounted:function(){},computed:Object(s["a"])({},Object(c["c"])("rtc",{rtc:function(e){return e.client},localStream:function(e){return e.localStream},shareStream:function(e){return e.shareStream},selectedVideo:function(e){return e.video},selectedAudio:function(e){return e.audio}})),methods:{join:function(e,t){var n=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n.rtc.on("stream-added",n.onAdded),n.rtc.on("stream-subscribed",n.onSubscribed),n.rtc.on("stream-removed",n.onRemoved),n.rtc.on("peer-online",n.onPeerOnline),n.rtc.on("peer-leave",n.onPeerLeave),r.next=7,n.$store.dispatch("rtc/joinChannel",{appid:n.appid,channel:e,token:t});case 7:return r.next=9,n.$store.dispatch("rtc/publishStream");case 9:case"end":return r.stop()}}),r)})))()},leave:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$refs.screen.clearRemoteStreams(),e.$store.commit("rtc/mainStream",null),e.shareScreenEnd(),t.next=5,e.$store.dispatch("rtc/leaveChannel");case 5:e.rtc.off("stream-added",e.onAdded),e.rtc.off("stream-subscribed",e.onSubscribed),e.rtc.off("stream-removed",e.onRemoved),e.rtc.off("peer-online",e.onPeerOnline),e.rtc.off("peer-leave",e.onPeerLeave);case 10:case"end":return t.stop()}}),t)})))()},onEnableVideo:function(e){this.$store.commit("rtc/video",e),console.log("this.localStream",this.localStream),e?this.localStream.enableVideo():this.localStream.disableVideo()},onEnableAudio:function(e){this.$store.commit("rtc/audio",e),e?this.localStream.enableAudio():this.localStream.disableAudio()},onEnableShareScreen:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(console.log("onEnableShareScreen",e),!e){n.next=5;break}t.shareScreenEnd(),n.next=9;break;case 5:return n.next=7,t.$store.dispatch("rtc/shareScreenStart",{shareid:t.shareid});case 7:r=n.sent,r||t.shareScreenEnd();case 9:case"end":return n.stop()}}),n)})))()},shareScreenEnd:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.shareStream){t.next=3;break}return t.next=3,e.$store.dispatch("rtc/shareScreenEnd");case 3:case"end":return t.stop()}}),t)})))()},onClickLeave:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$emit("leave");case 1:case"end":return e.stop()}}),e)})))()},onAdded:function(e){var t=e.stream;console.log("[agora] [stream-added] stream-added",t.getId()),t.getId()===this.shareid&&(this.shareStream||this.$refs.ui.$refs.btn03._enabled(!1),this.$store.commit("rtc/mainStream",t)),this.rtc.client.subscribe(t)},onSubscribed:function(e){var t=e.stream;console.log("[agora] [stream-subscribed] stream-added",t.getId()),this.$refs.screen.addRemoteStream(t)},onRemoved:function(e){var t=e.stream;console.log("[agora] [stream-removed] stream-removed",t.getId()),console.log("onRemoved",t.getId()),t.getId()===this.shareid&&(this.$refs.ui.$refs.btn03._enabled(!0),this.$refs.ui.$refs.btn03.setSelected(!0),this.$store.commit("rtc/mainStream",null)),this.$refs.screen.removeRemoteStream(t.getId())},onPeerOnline:function(e){console.log("Peer ".concat(e.uid," is online"))},onPeerLeave:function(e){console.log("Peer ".concat(e.uid," already leave")),this.$refs.screen.removeRemoteStream(e.uid)}},watch:{shareStream:function(e){console.log("***************************"),console.log(">>>>> shareStream",e),console.log("***************************"),e&&this.shareStream.on("stopScreenSharing",this.shareScreenEnd)}}},D=q,z=(n("308d"),Object(g["a"])(D,x,$,!1,null,"11d35ccc",null)),G=z.exports,K=(n("fb6a"),n("d3b7"),n("ac1f"),n("841c"),n("1276"),{delay:function(e){return new Promise((function(t,n){setTimeout(t,e)}))},string:{zeropad:function(e,t){return(Array(t+1).join("0")+e).slice(-t)}},getQuery:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this._query||!t){this._query={};for(var n=window.location.search.substring(1),r=n.split("&"),a=0;a<r.length;a++){var i=r[a].split("="),o=decodeURIComponent(i[0]),s=decodeURIComponent(i[1]);this._query[o]=s}}return this._query[e]}}),Q=(n("99af"),n("4160"),n("25f0"),n("d4ec")),F=n("bee2"),H=n("262e"),W=n("2caf"),X=n("6f91"),Y=n.n(X),Z=(n("45fc"),function(){function e(){Object(Q["a"])(this,e),this._listeners={},this._properties={}}return Object(F["a"])(e,[{key:"get",value:function(e){return this._properties[e]}},{key:"set",value:function(e){if(e)for(var t in e)if(void 0==this._properties[t]||this._properties[t]!=e[t]){var n=this._properties[t];this._properties[t]=e[t],this.dispatch(t,{type:t,value:this._properties[t],value0:n})}}},{key:"dispatch",value:function(e,t){if(this._listeners.hasOwnProperty(e))for(var n=0;this._listeners[e]&&n<this._listeners[e].length;n++){var r=this._listeners[e][n],a=t||{type:e};r.listener(a)}}},{key:"on",value:function(e,t){return this.off(e,t),this._listeners.hasOwnProperty(e)||(this._listeners[e]=[]),this._listeners[e].push({type:e,listener:t}),this}},{key:"off",value:function(e,t){var n=this;if(e)t?this._listeners.hasOwnProperty(e)&&(this._listeners[e].some((function(r,a){r.listener==t&&n._listeners[e].splice(a,1)})),0==this._listeners[e].length&&delete this._listeners[e]):delete this._listeners[e];else for(var r in this._listeners)delete this._listeners[r];return this}},{key:"listeners",get:function(){return this._listeners}}]),e}()),ee=function(e){Object(H["a"])(n,e);var t=Object(W["a"])(n);function n(){var e;return Object(Q["a"])(this,n),e=t.call(this),e.channels={},e._logined=!1,e}return Object(F["a"])(n,[{key:"init",value:function(e){this.client=Y.a.createInstance(e),this.subscribeClientEvents()}},{key:"subscribeClientEvents",value:function(){var e=this,t=["ConnectionStateChanged","MessageFromPeer"];t.forEach((function(t){e.client.on(t,(function(){for(var n,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];(n=console).log.apply(n,["emit ",t].concat(a)),e.dispatch.apply(e,[t].concat(a))}))}))}},{key:"subscribeChannelEvents",value:function(e){var t=this,n=["ChannelMessage","MemberJoined","MemberLeft"];n.forEach((function(n){t.channels[e].channel.on(n,(function(){for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];console.log("emit ",n,a),t.dispatch(n,{channelName:e,args:a})}))}))}},{key:"login",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.accountName=t,e.abrupt("return",this.client.login({uid:this.accountName,token:n}));case 2:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"logout",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.client.logout());case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"joinChannel",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("joinChannel",t),n=this.client.createChannel(t),this.channels[t]={channel:n,joined:!1},this.subscribeChannelEvents(t),e.abrupt("return",n.join());case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"leaveChannel",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("leaveChannel",t),this.channels[t]&&(!this.channels[t]||this.channels[t].joined)){e.next=3;break}return e.abrupt("return");case 3:return e.abrupt("return",this.channels[t].channel.leave());case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"sendChannelMessage",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.channels[n]&&this.channels[n].joined){e.next=2;break}return e.abrupt("return");case 2:return e.abrupt("return",this.channels[n].channel.sendMessage({text:t}));case 3:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"sendPeerMessage",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("sendPeerMessage",t,n),e.abrupt("return",this.client.sendMessageToPeer({text:t},n.toString()));case 2:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"queryPeersOnlineStatus",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("queryPeersOnlineStatus",t),e.abrupt("return",this.client.queryPeersOnlineStatus([t]));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"uploadImage",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.client.createMediaMessageByUploading(t,{messageType:"IMAGE",fileName:"agora.jpg",description:"send image",thumbnail:t});case 2:return r=e.sent,e.abrupt("return",this.client.sendMessageToPeer(r,n));case 4:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"sendChannelMediaMessage",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("sendChannelMessage",t,n),this.channels[n]&&this.channels[n].joined){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,this.client.createMediaMessageByUploading(t,{messageType:"IMAGE",fileName:"agora.jpg",description:"send image",thumbnail:t});case 5:return r=e.sent,e.abrupt("return",this.channels[n].channel.sendMessage(r));case 7:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"cancelImage",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new AbortController,setTimeout((function(){return n.abort()}),1e3),e.next=4,this.client.downloadMedia(t.mediaId,{cancelSignal:n.signal,onOperationProgress:function(e){var t=e.currentSize,n=e.totalSize;console.log(t,n)}});case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getChannelMemberCount",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.client.getChannelMemberCount([t]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),n}(Z),te={name:"App",components:{ReadyPage:C,Meeting:G},data:function(){return{appid:"c02b8a27221e4c40a290aead0cfd6af8",shareid:777}},mounted:function(){this.rtm=new ee,this.rtm.init(this.appid),this.rtm.login("U0001")},computed:Object(s["a"])({},Object(c["b"])("rtc",["isJoin"])),methods:{onClickJoin:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=K.getQuery("channel")||"test",r=null,t.next=3,e.$refs.meeting.join(n,r);case 3:case"end":return t.stop()}}),t)})))()},onClickLeave:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.meeting.leave();case 2:case"end":return t.stop()}}),t)})))()}}},ne=te,re=(n("5c0b"),Object(g["a"])(ne,a,i,!1,null,null,null)),ae=re.exports,ie=n("6b5f"),oe=n.n(ie),se=function(e){Object(H["a"])(n,e);var t=Object(W["a"])(n);function n(){var e;return Object(Q["a"])(this,n),e=t.call(this),e.option={appid:"",channel:"",uid:"",token:""},e.client=null,e.shareClient=null,e.localStream=null,e.shareStream=null,e.shareId=1,e}return Object(F["a"])(n,[{key:"clientInit",value:function(e,t){return new Promise((function(n,r){e.init(t.appid,(function(){console.log("init success"),e.join(t.token?t.token:null,t.channel,t.uid,(function(e){console.log("join channel: "+t.channel+" success, uid: ",e),n(e)}),(function(e){console.error("client join failed",e)}))}),(function(e){r(e),console.error(e)})),console.log("[agora-vue] appId",t.appid)}))}},{key:"joinChannel",value:function(e){var t=this;return this.client=oe.a.createClient({mode:"rtc",codec:"h264"}),this.clientListener(),new Promise((function(n,r){t.clientInit(t.client,e).then((function(r){t.option={appid:e.appid,token:e.token,channel:e.channel,uid:r},n()}))}))}},{key:"publishStream",value:function(e,t){var n=this;return new Promise((function(r,a){n.localStream=oe.a.createStream({streamID:n.option.uid,audio:e,video:t,screen:!1}),console.log("createStream",e,t),n.localStream.init((function(){console.log("init local stream success"),n.client.publish(n.localStream,(function(e){console.log("publish failed"),console.error(e)})),r(n.localStream)}),(function(e){a(e),console.error("init local stream failed ",e)}))}))}},{key:"clientListener",value:function(){var e=this,t=this.client;t.on("stream-added",(function(t){e.dispatch("stream-added",t)})),t.on("stream-subscribed",(function(t){e.dispatch("stream-subscribed",t)})),t.on("stream-removed",(function(t){e.dispatch("stream-removed",t)})),t.on("peer-online",(function(t){e.dispatch("peer-online",t)})),t.on("peer-leave",(function(t){e.dispatch("peer-leave",t)}))}},{key:"leaveChannel",value:function(){var e=this;return new Promise((function(t,n){e.client.unpublish(e.localStream,(function(e){console.log(e)})),e.client.leave((function(){e.localStream.isPlaying()&&e.localStream.stop(),e.localStream.close(),e.client=null,t(),console.log("client leaves channel success")}),(function(e){n(e),console.log("channel leave failed"),console.error(e)}))}))}},{key:"shareStart",value:function(e){var t=this;return this.shareClient=oe.a.createClient({mode:"rtc"}),new Promise((function(n,r){t.clientInit(t.shareClient,{uid:e,appid:t.option.appid,token:t.option.token,channel:t.option.channel}).then((function(e){console.log("share start uid",e),t.shareStream=oe.a.createStream({streamID:e,audio:!1,video:!1,screen:!0}),console.log("shareStart >>> createStream",t.shareStream),t.shareStream.init((function(){console.log("init local stream success"),t.shareClient.publish(t.shareStream,(function(e){console.log("Publish share stream error: "+e),console.log("getUserMedia failed",e)})),n(t.shareStream)}),(function(e){console.log("shareStart >>> getUserMedia failed"),n(null)}))}))}))}},{key:"shareEnd",value:function(){try{this.shareClient.unpublish(this.shareStream),this.shareStream.close(),this.shareClient.leave((function(){console.log("Share client succeed to leave.")}),(function(){console.log("Share client failed to leave.")}))}finally{this.shareClient=null,this.shareStream=null}}}]),n}(Z),ce=new se,le={namespaced:!0,state:{client:ce,mainStream:null,localStream:null,shareStream:null,audio:!0,video:!0,shareScreen:!0},mutations:{mainStream:function(e,t){console.log("commit/mainStream",t),e.mainStream=t},localStream:function(e,t){e.localStream=t},shareStream:function(e,t){e.shareStream=t},video:function(e,t){console.log("video",t),e.video=t},audio:function(e,t){console.log("audio",t),e.audio=t}},actions:{joinChannel:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.next=3,ce.joinChannel(t);case 3:case"end":return n.stop()}}),n)})))()},publishStream:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.state,t.next=3,ce.publishStream(r.audio,r.video);case 3:a=t.sent,console.log(">>> publishStream",a),n("localStream",a);case 6:case"end":return t.stop()}}),t)})))()},leaveChannel:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,ce.leaveChannel();case 3:n("localStream",null);case 4:case"end":return t.stop()}}),t)})))()},shareScreenStart:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=t.shareid,n.next=4,ce.shareStart(a);case 4:return i=n.sent,console.log("shareScreenStart",i),r("shareStream",i),n.abrupt("return",null!=i);case 8:case"end":return n.stop()}}),n)})))()},shareScreenEnd:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,ce.shareEnd();case 3:n("shareStream",null);case 4:case"end":return t.stop()}}),t)})))()}},getters:{isJoin:function(e){return void 0!=e.localStream}}};r["a"].use(c["a"]);var ue=new c["a"].Store({state:{},mutations:{},actions:{},modules:{rtc:le}});r["a"].config.productionTip=!1,new r["a"]({store:ue,render:function(e){return e(ae)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},6284:function(e,t,n){},"63a9":function(e,t,n){"use strict";var r=n("479a"),a=n.n(r);a.a},"9c0c":function(e,t,n){},c411:function(e,t,n){},f053:function(e,t,n){"use strict";var r=n("412f"),a=n.n(r);a.a},f65e:function(e,t,n){"use strict";var r=n("c411"),a=n.n(r);a.a}});
//# sourceMappingURL=app.85d3d7c3.js.map