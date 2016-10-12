"use strict";function Component(t){this._appendData=t}function setData(t){let n=this.parent.data[this.key]||{},i=Object.assign(n);for(let a in t)t.hasOwnProperty(a)&&(i[a]=t[a]);let e={};e[this.key]=i,this.data=i,this.parent.setData(e)}function bindHandlers(t,n){Object.keys(n).forEach(function(i){if(n.hasOwnProperty(i)){let a=n[i];Object.getOwnPropertyNames(a.constructor.prototype).concat(Object.getOwnPropertyNames(a)).forEach(function(n){if("handle"===n.substr(0,6)){let i=a.path.replace(/\./g,"_")+"_"+n;t[i]=function(){a[n].apply(a,arguments)}}}),a.children&&bindHandlers(t,a.children)}})}var exports=module.exports={};Component.prototype.init=function(t,n){t=t||"",n=n||null,this.key=t,this.parent=n,n&&(this.setData=setData),t&&n&&n.path?this.path=n.path+"."+t:this.path=t,this.data||(this.data={});const i=this;if(Object.getOwnPropertyNames(this.constructor.prototype).forEach(function(t){"constructor"!==t&&(i[t]=i.constructor.prototype[t])}),this._appendData)for(let a in this._appendData)this._appendData.hasOwnProperty(a)&&(this.data[a]=this._appendData[a]);if(!this.children)return void(this.children=null);for(let e in this.children)if(this.children.hasOwnProperty(e)){let o=this.children[e];o.init(e,this),this.data[e]=o.data}n||bindHandlers(this,this.children);let s=this.onLoad;this.onLoad=function(){for(let t in this.children)if(this.children.hasOwnProperty(t)){let n=this.children[t];n.parent=this,n.onLoad&&n.onLoad.apply(n,arguments)}s&&s.apply(this,arguments)},["onReady","onShow","onHide","onUnload","onPullDownRefreash"].forEach(function(t){let n=i[t];i[t]=function(){for(let i in this.children){let a=this.children[i];a[t]&&a[t].apply(a,arguments)}n&&n.apply(this,arguments)}})},module.exports=Component["default"]=Component;