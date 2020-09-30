import {env} from './Environment'

export const Event = {
	CHANGE : 'change',
	ORIENTATION : navigator.userAgent.match(/(iPhone|iPod|iPad)/) ? 'orientationchange' : 'resize',
	WHEEL : 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll'
};

const types = [];
if(env.support.touch) {
	types.push('touchstart','touchmove','touchend');
}
else if(env.support.pointer) {
	types.push('pointerdown','pointermove','pointerup');
}
else if(env.support.MSPointer) {
	types.push('MSPointerDown','MSPointerMove','MSPointerUp');
}
else {
	types.push('mousedown','mousemove','mouseup');
}

export const TouchEvent = {
	START : types[0],
	MOVE : types[1],
	END : types[2],
};
