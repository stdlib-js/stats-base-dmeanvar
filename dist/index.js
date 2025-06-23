"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=s(function(B,d){
var j=require('@stdlib/stats-strided-dmeanvarpn/dist').ndarray;function l(e,r,v,i,n,a,t,u){return j(e,r,v,i,n,a,t,u)}d.exports=l
});var c=s(function(C,m){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=o();function E(e,r,v,i,n,a){var t=R(e,i),u=a>=0?0:-a;return _(e,r,v,i,t,n,a,u),n}m.exports=E
});var f=s(function(D,y){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=c(),g=o();b(p,"ndarray",g);y.exports=p
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=f(),q,x=k(h(__dirname,"./native.js"));w(x)?q=z:q=x;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
