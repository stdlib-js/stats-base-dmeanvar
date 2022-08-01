// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((r="undefined"!=typeof globalThis?globalThis:r||self).dmeanvar={})}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,e){var n,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(f.call(r,t)||c.call(r,t)?(n=r.__proto__,r.__proto__=o,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),s="get"in e,p="set"in e,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(r,t,e.get),p&&a&&a.call(r,t,e.set),r};var l=e;function s(r,t,e){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function p(r){var t=function(r){return"/"===r.charAt(0)}(r),e="/"===d(r,-1);return(r=function(r,t){for(var e=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}(b(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&e&&(r+="/"),(t?"/":"")+r}function y(){var r=Array.prototype.slice.call(arguments,0);return p(b(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function b(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}var d="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)},v=/./;function j(r){return"boolean"==typeof r}var m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function _(){return m&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;var h,N="function"==typeof Symbol?Symbol.toStringTag:"";h=_()?function(r){var t,e,n,o,u;if(null==r)return g.call(r);e=r[N],u=N,t=null!=(o=r)&&w.call(o,u);try{r[N]=void 0}catch(t){return g.call(r)}return n=g.call(r),t?r[N]=e:delete r[N],n}:function(r){return g.call(r)};var O=h,E=Boolean.prototype.toString;var S=_();function A(r){return"object"==typeof r&&(r instanceof Boolean||(S?function(r){try{return E.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===O(r)))}function P(r){return j(r)||A(r)}function T(){return new Function("return this;")()}s(P,"isPrimitive",j),s(P,"isObject",A);var x="object"==typeof self?self:null,B="object"==typeof window?window:null,k="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},M="object"==typeof k?k:null;var V=function(r){if(arguments.length){if(!j(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return T()}if(x)return x;if(B)return B;if(M)return M;throw new Error("unexpected error. Unable to resolve global object.")}(),C=V.document&&V.document.childNodes,F=Int8Array;function G(){return/^\s*function\s*([^(]*)/i}var L,q=/^\s*function\s*([^(]*)/i;s(G,"REGEXP",q),L=Array.isArray?Array.isArray:function(r){return"[object Array]"===O(r)};var I=L;function J(r){return null!==r&&"object"==typeof r}var R=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!I(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(J);function U(r){var t,e,n,o;if(("Object"===(e=O(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=q.exec(n.toString()))return t[1]}return J(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}s(J,"isObjectLikeArray",R);var X="function"==typeof v||"object"==typeof F||"function"==typeof C?function(r){return U(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?U(r).toLowerCase():t};var z,D,H=Object.getPrototypeOf;D=Object.getPrototypeOf,z="function"===X(D)?H:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===O(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var K=z;function Q(r){return null==r?null:(r=Object(r),K(r))}function W(r){try{return require(r)}catch(r){return function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===O(r))return!0;r=Q(r)}return!1}(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}function Y(r){return r!=r}var Z,$=Math.floor;function rr(r,t,e,n){var o,u,i,a,f,c,l,s,p,y,b,d,v;if(r<=0)return 0;if(1===r||0===e)return t[n];if(o=n,r<8){for(b=0,v=0;v<r;v++)b+=t[o],o+=e;return b}if(r<=128){for(u=t[o],i=t[o+e],a=t[o+2*e],f=t[o+3*e],c=t[o+4*e],l=t[o+5*e],s=t[o+6*e],p=t[o+7*e],o+=8*e,y=r%8,v=8;v<r-y;v+=8)u+=t[o],i+=t[o+e],a+=t[o+2*e],f+=t[o+3*e],c+=t[o+4*e],l+=t[o+5*e],s+=t[o+6*e],p+=t[o+7*e],o+=8*e;for(b=u+i+(a+f)+(c+l+(s+p));v<r;v++)b+=t[o],o+=e;return b}return d=$(r/2),rr(d-=d%8,t,e,o)+rr(r-d,t,e,o+d*e)}function tr(r,t,e){var n,o,u;if(r<=0)return 0;if(1===r||0===e)return t[0];if(n=e<0?(1-r)*e:0,r<8){for(o=0,u=0;u<r;u++)o+=t[n],n+=e;return o}return rr(r,t,e,n)}s(tr,"ndarray",rr);var er=W(y("/home/runner/work/stats-base-dmeanvar/stats-base-dmeanvar/node_modules/@stdlib/blas-ext-base-dsumpw/lib","./native.js")),nr=Z=er instanceof Error?tr:er;const{ndarray:or}=Z;function ur(r,t,e,n,o,u){var i,a,f,c,l,s,p,y,b;if(a=n<0?(1-r)*n:0,f=u<0?-u:0,r<=0)return o[f]=NaN,o[f+u]=NaN,o;if(y=r-t,1===r||0===n)return o[f]=e[a],o[f+u]=y<=0?NaN:0,o;if(Y(i=nr(r,e,n)/r))return o[f]=NaN,o[f+u]=NaN,o;for(c=0,l=0,b=0;b<r;b++)c+=(s=e[a]-i)*s,l+=s,a+=n;return p=l/r,o[f]=i+p,o[f+u]=y<=0?NaN:c/y-p*(l/y),o}var ir;s(ur,"ndarray",(function(r,t,e,n,o,u,i,a){var f,c,l,s,p,y,b,d,v;if(c=o,l=a,r<=0)return u[l]=NaN,u[l+i]=NaN,u;if(d=r-t,1===r||0===n)return u[l]=e[c],u[l+i]=d<=0?NaN:0,u;if(Y(f=or(r,e,n,o)/r))return u[l]=NaN,u[l+i]=NaN,u;for(s=0,p=0,v=0;v<r;v++)s+=(y=e[c]-f)*y,p+=y,c+=n;return b=p/r,u[l]=f+b,u[l+i]=d<=0?NaN:s/d-b*(p/d),u}));var ar=W(y("/home/runner/work/stats-base-dmeanvar/stats-base-dmeanvar/node_modules/@stdlib/stats-base-dmeanvarpn/lib","./native.js")),fr=ir=ar instanceof Error?ur:ar;const{ndarray:cr}=ir;function lr(r,t,e,n,o,u){return fr(r,t,e,n,o,u)}function sr(r,t,e,n,o,u,i,a){return cr(r,t,e,n,o,u,i,a)}s(lr,"ndarray",sr),r.default=lr,r.ndarray=sr,Object.defineProperty(r,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
