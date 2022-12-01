// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).IS_WINDOWS=t()}(this,(function(){"use strict";function e(e){var t=e.default;if("function"==typeof t){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}var t="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}var o=n,i=r;function u(e){if(o===setTimeout)return setTimeout(e,0);if((o===n||!o)&&setTimeout)return o=setTimeout,setTimeout(e,0);try{return o(e,0)}catch(t){try{return o.call(null,e,0)}catch(t){return o.call(this,e,0)}}}"function"==typeof t.setTimeout&&(o=setTimeout),"function"==typeof t.clearTimeout&&(i=clearTimeout);var f,c=[],a=!1,l=-1;function s(){a&&f&&(a=!1,f.length?c=f.concat(c):l=-1,c.length&&d())}function d(){if(!a){var e=u(s);a=!0;for(var t=c.length;t;){for(f=c,c=[];++l<t;)f&&f[l].run();l=-1,t=c.length}f=null,a=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===r||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function p(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new m(e,t)),1!==c.length||a||u(d)}function m(e,t){this.fun=e,this.array=t}m.prototype.run=function(){this.fun.apply(null,this.array)};var h="browser",w="browser",v={},y=[],g={},b={},T={};function O(){}var _=O,j=O,k=O,L=O,D=O,E=O,N=O;function x(e){throw new Error("process.binding is not supported")}function A(){return"/"}function M(e){throw new Error("process.chdir is not supported")}function P(){return 0}var z=t.performance||{},I=z.now||z.mozNow||z.msNow||z.oNow||z.webkitNow||function(){return(new Date).getTime()};function S(e){var t=.001*I.call(z),n=Math.floor(t),r=Math.floor(t%1*1e9);return e&&(n-=e[0],(r-=e[1])<0&&(n--,r+=1e9)),[n,r]}var W=new Date;function q(){return(new Date-W)/1e3}var B={nextTick:p,title:h,browser:true,env:v,argv:y,version:"",versions:g,on:_,addListener:j,once:k,off:L,removeListener:D,removeAllListeners:E,emit:N,binding:x,cwd:A,chdir:M,umask:P,hrtime:S,platform:w,release:b,config:T,uptime:q};return"win32"===e(Object.freeze({__proto__:null,addListener:j,argv:y,binding:x,browser:true,chdir:M,config:T,cwd:A,default:B,emit:N,env:v,hrtime:S,nextTick:p,off:L,on:_,once:k,platform:w,release:b,removeAllListeners:E,removeListener:D,title:h,umask:P,uptime:q,version:"",versions:g})).platform}));
//# sourceMappingURL=browser.js.map