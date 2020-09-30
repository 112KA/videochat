import { Event, TouchEvent } from './Event'
import { InteractiveObject } from './InteractiveObject'
import { env } from './Environment'
import { Ticker } from './Ticker'

class Stage extends InteractiveObject {

	constructor() {
		super();

		this.ticker = new Ticker();

		this.set({ target: window });
	}

	_defineHandlers() {

		super._defineHandlers();

		this._on.discard = (e) => {
			e.preventDefault();
		}

		this._on.wheel = (e) => {
			e.delta = e.deltaY ? e.deltaY : e.wheelDelta ? -e.wheelDelta : e.detail;
			this.dispatch(e.type, e);
		}
	}

	ready() {
		return new Promise((resolve, reject) => {

			const loaded = () => {
				console.log('ready: ');
				document.removeEventListener('DOMContentLoaded', loaded);

				resolve();
			};

			if (document.readyState === 'complete') {
				resolve();
			}
			else {
				document.addEventListener('DOMContentLoaded', loaded);
			}
		})
	}

	loaded() {
		return new Promise((resolve, reject) => {

			const loaded = () => {
				console.log('loaded: ');
				window.removeEventListener('load', loaded);

				resolve();
			};

			window.addEventListener('load', loaded);
		})
	}

	get width() {
		return (window.innerWidth || document.documentElement.clientWidth || 0);
	}

	get height() {
		return (window.innerHeight || document.documentElement.clientHeight || 0);
	}

	_autoAddListener(target, type) {

		if (!target) return;

		super._autoAddListener(target, type);

		if (this._listeners[type].length == 1) {
			switch (type) {
				case 'tick':
					this.ticker.on('tick', this._on.bubble);
					this.ticker.start();
					break;
				case 'resize':
				case 'scroll':
					target.addEventListener(type, this._on.bubble, { passive: false });
					break;
				case Event.WHEEL:
					document.addEventListener(type, this._on.wheel);
					break;
			}
		}
	}

	_autoRemoveListener(target, type) {

		if (!target) return;

		super._autoRemoveListener(target, type);

		if (!this._listeners[type] || this._listeners[type].length == 0) {
			switch (type) {
				case 'tick':
					this.ticker.off('tick', this._on.bubble);
					this.ticker.stop();
					break;
				case 'resize':
				case 'scroll':
					target.removeEventListener(type, this._on.bubble);
					break;
				case Event.WHEEL:
					document.removeEventListener(type, this._on.wheel);
					break;
			}
		}
	}

	set scrollEnabled(flag) {
		this._scrollEnabled = flag;
		if (flag) {
			document.removeEventListener(Event.WHEEL, this._on.discard);
			document.removeEventListener(TouchEvent.MOVE, this._on.discard);
		}
		else {
			document.addEventListener(Event.WHEEL, this._on.discard, { passive: false });
			document.addEventListener(TouchEvent.MOVE, this._on.discard, { passive: false });
		}
	}

	get scrollEnabled() {
		return this._scrollEnabled === true;
	}

}

//singleton
export const stage = new Stage;

