!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["lanb-analog"]=t():n["lanb-analog"]=t()}("undefined"!=typeof self?self:this,function(){return function(n){var t={};function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:o})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="/dist/",e(e.s=0)}([function(n,t,e){const o=e(1);n.exports=(()=>{let n={onreadystatechange:n=>{console.log("onreadystatechange called: %O",n)},onload:n=>{var t=function(n,t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),o=n.substr(1).match(e);return null!=o?o[2]:null}("?"+n.responseURL.split("?")[1],"url");for(let e=0;e<analog.data.length;e++)analog.data[e].url==t&&(n.responseText=JSON.stringify(analog.data[e].data))},open:(n,t)=>{console.log("open called: %O",t)},onerror:function(n){console.log("onerror called: %O",n)}};o.hookAjax(n),window.Analog=o,Analog.fn=(t=>{let e=Object.assign(n,t);Analog.hookAjax(e)})})()},function(n,t,e){e(2)(n.exports)},function(n,t){n.exports=function(n){n.hookAjax=function(n){function t(n){return function(){return this.hasOwnProperty(n+"_")?this[n+"_"]:this.xhr[n]}}function e(t){return function(e){var o=this.xhr,r=this;0==t.indexOf("on")?n[t]?o[t]=function(){n[t](r)||e.apply(o,arguments)}:o[t]=e:this[t+"_"]=e}}function o(t){return function(){var e=[].slice.call(arguments);if(!n[t]||!n[t].call(this,e,this.xhr))return this.xhr[t].apply(this.xhr,e)}}return window._ahrealxhr=window._ahrealxhr||XMLHttpRequest,XMLHttpRequest=function(){for(var n in this.xhr=new window._ahrealxhr,this.xhr){var r="";try{r=typeof this.xhr[n]}catch(n){}"function"===r?this[n]=o(n):Object.defineProperty(this,n,{get:t(n),set:e(n)})}},window._ahrealxhr},n.unHookAjax=function(){window._ahrealxhr&&(XMLHttpRequest=window._ahrealxhr),window._ahrealxhr=void 0},n.default=n}}])});