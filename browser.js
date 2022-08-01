// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,f=n.__lookupSetter__,l=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var l,c,_,d;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(i.call(r,e)||f.call(r,e)?(l=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=l):r[e]=t.value),_="get"in t,d="set"in t,c&&(_||d))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(r,e,t.get),d&&u&&u.call(r,e,t.set),r};function c(r,e,t){l(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function _(r){return r!=r}var d=Math.floor;function p(r,e,t,n){var o,a,u,i,f,l,c,_,y,N,b,s,v;if(r<=0)return 0;if(1===r||0===t)return e[n];if(o=n,r<8){for(b=0,v=0;v<r;v++)b+=e[o],o+=t;return b}if(r<=128){for(a=e[o],u=e[o+t],i=e[o+2*t],f=e[o+3*t],l=e[o+4*t],c=e[o+5*t],_=e[o+6*t],y=e[o+7*t],o+=8*t,N=r%8,v=8;v<r-N;v+=8)a+=e[o],u+=e[o+t],i+=e[o+2*t],f+=e[o+3*t],l+=e[o+4*t],c+=e[o+5*t],_+=e[o+6*t],y+=e[o+7*t],o+=8*t;for(b=a+u+(i+f)+(l+c+(_+y));v<r;v++)b+=e[o],o+=t;return b}return s=d(r/2),p(s-=s%8,e,t,o)+p(r-s,e,t,o+s*t)}function y(r,e,t){var n,o,a;if(r<=0)return 0;if(1===r||0===t)return e[0];if(n=t<0?(1-r)*t:0,r<8){for(o=0,a=0;a<r;a++)o+=e[n],n+=t;return o}return p(r,e,t,n)}function N(r,e,t,n,o,a){var u,i,f,l,c,d,p,N,b;if(i=n<0?(1-r)*n:0,f=a<0?-a:0,r<=0)return o[f]=NaN,o[f+a]=NaN,o;if(N=r-e,1===r||0===n)return o[f]=t[i],o[f+a]=N<=0?NaN:0,o;if(_(u=y(r,t,n)/r))return o[f]=NaN,o[f+a]=NaN,o;for(l=0,c=0,b=0;b<r;b++)l+=(d=t[i]-u)*d,c+=d,i+=n;return p=c/r,o[f]=u+p,o[f+a]=N<=0?NaN:l/N-p*(c/N),o}function b(r,e,t,n,o,a,u,i){var f,l,c,d,y,N,b,s,v;if(l=o,c=i,r<=0)return a[c]=NaN,a[c+u]=NaN,a;if(s=r-e,1===r||0===n)return a[c]=t[l],a[c+u]=s<=0?NaN:0,a;if(_(f=p(r,t,n,o)/r))return a[c]=NaN,a[c+u]=NaN,a;for(d=0,y=0,v=0;v<r;v++)d+=(N=t[l]-f)*N,y+=N,l+=n;return b=y/r,a[c]=f+b,a[c+u]=s<=0?NaN:d/s-b*(y/s),a}function s(r,e,t,n,o,a){return N(r,e,t,n,o,a)}function v(r,e,t,n,o,a,u,i){return b(r,e,t,n,o,a,u,i)}c(y,"ndarray",p),c(N,"ndarray",b),c(s,"ndarray",v),r.default=s,r.ndarray=v,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((r="undefined"!=typeof globalThis?globalThis:r||self).dmeanvar={});
//# sourceMappingURL=browser.js.map
