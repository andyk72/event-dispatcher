!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._events={}}var t,n,i;return t=e,(n=[{key:"subscribe",value:function(e,t){this._events[e]||(this._events[e]={});var n=this._getSubscriptionId(e);return this._events[e][n]=t,n}},{key:"unsubscribe",value:function(e){var t=e.split("-")[0];this._events[t]&&this._events[t][e]&&delete this._events[t][e]}},{key:"dispatch",value:function(e,t){if(this._noEvents(e))this._log("warn","Received a ".concat(e," event dispatch, but no ").concat(e," subscription is registered."));else for(var n in this._events[e])(0,this._events[e][n])(t)}},{key:"getEventSubscriptions",value:function(e){return this._events[e]?this._events[e]:null}},{key:"_getSubscriptionId",value:function(e){return e+"-"+Date.now()+"-"+Math.random()}},{key:"_noEvents",value:function(e){return!this._events[e]||0===Object.keys(this._events[e]).length}},{key:"_log",value:function(e,t){console[e](t)}}])&&r(t.prototype,n),i&&r(t,i),e}();t.default=i}]);