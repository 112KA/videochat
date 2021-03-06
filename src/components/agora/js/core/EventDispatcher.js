



export class EventDispatcher {

	constructor() {
		this._listeners = {};
		this._properties = {};
	}

	get listeners() {
		return this._listeners;
	}

	get(key) {
		return this._properties[key];
	}

	set(properties) {
		if(!properties) return;

		for(let key in properties) {

			if(this._properties[key] == undefined || this._properties[key] != properties[key]) {
				let v0 = this._properties[key];
				this._properties[key] = properties[key]

				this.dispatch(key, {
					type : key,
					value : this._properties[key],
					value0 : v0
				});
			}

		}
	}

	dispatch(type, options) {
		if(this._listeners.hasOwnProperty(type)) {
			for(let i=0; this._listeners[type] && i<this._listeners[type].length; i++) {
				let o = this._listeners[type][i];
				let tmp = options || {type:type};
				o.listener(tmp);
			}
		}
	}

	on(type, listener) {

		this.off(type, listener);
		
		if(!this._listeners.hasOwnProperty(type)) {
			this._listeners[type] = [];
		}

		this._listeners[type].push({type:type, listener:listener});

		return this;
	}

	off(type, listener) {
		if(type) {
			if(!listener) {
				delete this._listeners[type];
			}
			else if(this._listeners.hasOwnProperty(type)) {
				this._listeners[type].some((elem, i) => {
					if(elem.listener == listener) this._listeners[type].splice(i,1);
				});
				if(this._listeners[type].length == 0) {
					delete this._listeners[type];
				}
			}
		}
		else {
			for(let type in this._listeners) {
				delete this._listeners[type];
			}
		}
		
		return this;
	}
};
