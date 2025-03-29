"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var d=u(function(z,s){
var j=require('@stdlib/stats-base-dmeanvarpn/dist');function l(e,r,a,i,n,t){return j(e,r,a,i,n,t)}s.exports=l
});var m=u(function(A,q){
var R=require('@stdlib/stats-base-dmeanvarpn/dist').ndarray;function _(e,r,a,i,n,t,x,f){return R(e,r,a,i,n,t,x,f)}q.exports=_
});var c=u(function(B,p){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=d(),O=m();E(o,"ndarray",O);p.exports=o
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=c(),v,y=g(b(__dirname,"./native.js"));h(y)?v=k:v=y;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
