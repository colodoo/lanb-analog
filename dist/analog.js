!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["lanb-analog"]=n():t["lanb-analog"]=n()}("undefined"!=typeof self?self:this,function(){return function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/dist/",e(e.s=0)}([function(t,n,e){const o=e(1);t.exports=(()=>{function t(t,n){let e=function(t,n){var e=new RegExp("(^|&)"+n+"=([^&]*)(&|$)","i"),o=t.substr(1).match(e);return null!=o?o[2]:null}("?"+n.responseURL.split("?")[1],"url");for(let o=0;o<t.data.length;o++)t.data[o].url==e&&(n.responseText=JSON.stringify(t.data[o].data))}let n={onreadystatechange:t=>{console.log("onreadystatechange called: %O",t)},onload:n=>{if("undefined"==typeof analog){let e={data:[]};t(e,n)}else t(analog,n)},open:(t,n)=>{console.log("open called: %O",n)},onerror:t=>{console.log("onerror called: %O",t)}};o.hookAjax(n),window.Analog=o,Analog.fn=(t=>{let e=Object.assign(n,t);Analog.hookAjax(e)})})()},function(t,n,e){e(2)(t.exports)},function(t,n){t.exports=function(t){t.hookAjax=function(t){function n(t){return function(){return this.hasOwnProperty(t+"_")?this[t+"_"]:this.xhr[t]}}function e(n){return function(e){var o=this.xhr,r=this;0==n.indexOf("on")?t[n]?o[n]=function(){t[n](r)||e.apply(o,arguments)}:o[n]=e:this[n+"_"]=e}}function o(n){return function(){var e=[].slice.call(arguments);if(!t[n]||!t[n].call(this,e,this.xhr))return this.xhr[n].apply(this.xhr,e)}}return window._ahrealxhr=window._ahrealxhr||XMLHttpRequest,XMLHttpRequest=function(){for(var t in this.xhr=new window._ahrealxhr,this.xhr){var r="";try{r=typeof this.xhr[t]}catch(t){}"function"===r?this[t]=o(t):Object.defineProperty(this,t,{get:n(t),set:e(t)})}},window._ahrealxhr},t.unHookAjax=function(){window._ahrealxhr&&(XMLHttpRequest=window._ahrealxhr),window._ahrealxhr=void 0},t.default=t}}])});