import { EventDispatcher } from './EventDispatcher'

class Environment extends EventDispatcher {
	constructor() {
		super();
	}

	get dev() {
		return /dev/.test(location.hostname);
	}

	get stg() {
		return /stg/.test(location.hostname);
	}

	get prd() {
		return !(this.local || this.dev || this.stg);
	}

	get local() {
		return /localhost|192.168/.test(location.hostname);
	}

	get ios() {
		return /iPhone|iPod|iPad/.test(navigator.userAgent);
	}

	get android() {
		return /Android/.test(navigator.userAgent);
	}

	get pc() {
		return !(this.ios || this.android);
	}

	get support() {
		return Environment.support;
	}

	get ie() {
		return /msie|trident/i.test(navigator.userAgent);
	}

	get edge() {
		return /edg/i.test(navigator.userAgent)
	}
}

Environment.support = {
	touch: ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch,
	pointer: window.navigator.pointerEnabled,
	MSPointer: window.navigator.msPointerEnabled,
};

export const env = new Environment();