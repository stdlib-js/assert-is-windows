// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).IS_WINDOWS=t()}(this,(function(){"use strict";function e(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var n=function e(){if(this instanceof e){var n=[null];n.push.apply(n,arguments);var r=Function.bind.apply(t,n);return new r}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}var t="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}var o=n,i=r;function u(e){if(o===setTimeout)return setTimeout(e,0);if((o===n||!o)&&setTimeout)return o=setTimeout,setTimeout(e,0);try{return o(e,0)}catch(t){try{return o.call(null,e,0)}catch(t){return o.call(this,e,0)}}}"function"==typeof t.setTimeout&&(o=setTimeout),"function"==typeof t.clearTimeout&&(i=clearTimeout);var f,a=[],c=!1,l=-1;function s(){c&&f&&(c=!1,f.length?a=f.concat(a):l=-1,a.length&&p())}function p(){if(!c){var e=u(s);c=!0;for(var t=a.length;t;){for(f=a,a=[];++l<t;)f&&f[l].run();l=-1,t=a.length}f=null,c=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===r||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function d(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new h(e,t)),1!==a.length||c||u(p)}function h(e,t){this.fun=e,this.array=t}h.prototype.run=function(){this.fun.apply(null,this.array)};var m="browser",w="browser",v={},y=[],g={},b={},T={};function _(){}var O=_,j=_,k=_,L=_,D=_,E=_,N=_;function x(e){throw new Error("process.binding is not supported")}function M(){return"/"}function A(e){throw new Error("process.chdir is not supported")}function P(){return 0}var z=t.performance||{},I=z.now||z.mozNow||z.msNow||z.oNow||z.webkitNow||function(){return(new Date).getTime()};function S(e){var t=.001*I.call(z),n=Math.floor(t),r=Math.floor(t%1*1e9);return e&&(n-=e[0],(r-=e[1])<0&&(n--,r+=1e9)),[n,r]}var W=new Date;function F(){return(new Date-W)/1e3}var q={nextTick:d,title:m,browser:true,env:v,argv:y,version:"",versions:g,on:O,addListener:j,once:k,off:L,removeListener:D,removeAllListeners:E,emit:N,binding:x,cwd:M,chdir:A,umask:P,hrtime:S,platform:w,release:b,config:T,uptime:F};return"win32"===e(Object.freeze({__proto__:null,addListener:j,argv:y,binding:x,browser:true,chdir:A,config:T,cwd:M,default:q,emit:N,env:v,hrtime:S,nextTick:d,off:L,on:O,once:k,platform:w,release:b,removeAllListeners:E,removeListener:D,title:m,umask:P,uptime:F,version:"",versions:g})).platform}));
//# sourceMappingURL=browser.js.map
