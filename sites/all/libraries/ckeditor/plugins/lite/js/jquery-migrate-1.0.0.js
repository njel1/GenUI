﻿(function(b,t){function g(a){l[a]||(l[a]=!0,b.migrateWarnings.push(a),t.console&&(console.warn&&!b.migrateMute)&&console.warn("JQMIGRATE: "+a))}function j(a,c,d,f){if(Object.defineProperty)try{Object.defineProperty(a,c,{configurable:!0,enumerable:!0,get:function(){g(f);return d},set:function(a){g(f);d=a}});return}catch(e){}b._definePropertyBroken=!0;a[c]=d}var l={};b.migrateWarnings=[];b.migrateReset=function(){l={};b.migrateWarnings.length=0};"BackCompat"===document.compatMode&&g("jQuery is not compatible with Quirks Mode");
var u=b.attr,v=b.attrHooks.value&&b.attrHooks.value.get||function(){return null},w=b.attrHooks.value&&b.attrHooks.value.set||function(){},x=/^(?:input|button)$/i,y=/^[238]$/,z=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,A=/^(?:checked|selected)$/i;j(b,"attrFn",{},"jQuery.attrFn is deprecated");b.attr=function(a,c,d,f){var e=c.toLowerCase(),h=a&&a.nodeType;if(f&&(g("jQuery.fn.attr( props, pass ) is deprecated"),a&&!y.test(h)&&
b.isFunction(b.fn[c])))return b(a)[c](d);"type"===c&&(void 0!==d&&x.test(a.nodeName))&&g("Can't change the 'type' of an input or button in IE 6/7/8");!b.attrHooks[e]&&z.test(e)&&(b.attrHooks[e]={get:function(a,c){var d,e=b.prop(a,c);return!0===e||"boolean"!==typeof e&&(d=a.getAttributeNode(c))&&!1!==d.nodeValue?c.toLowerCase():void 0},set:function(a,c,d){!1===c?b.removeAttr(a,d):(c=b.propFix[d]||d,c in a&&(a[c]=!0),a.setAttribute(d,d.toLowerCase()));return d}},A.test(e)&&g("jQuery.fn.attr("+e+") may use property instead of attribute"));
return u.call(b,a,c,d)};b.attrHooks.value={get:function(a,b){var d=(a.nodeName||"").toLowerCase();if("button"===d)return v.apply(this,arguments);"input"!==d&&"option"!==d&&g("property-based jQuery.fn.attr('value') is deprecated");return b in a?a.value:null},set:function(a,b){var d=(a.nodeName||"").toLowerCase();if("button"===d)return w.apply(this,arguments);"input"!==d&&"option"!==d&&g("property-based jQuery.fn.attr('value', val) is deprecated");a.value=b}};var k,i,m=b.fn.init,B=/^(?:.*(<[\w\W]+>)[^>]*|#([\w\-]*))$/;
b.fn.init=function(a,c,d){var f;if(a&&"string"===typeof a&&!b.isPlainObject(c)&&(f=B.exec(a))&&f[1])if("<"!==a.charAt(0)&&g("$(html) HTML strings must start with '<' character"),c&&c.context&&(c=c.context),b.parseHTML)return m.call(this,b.parseHTML(b.trim(a),c,!0),c,d);return m.apply(this,arguments)};b.fn.init.prototype=b.fn;b.uaMatch=function(a){a=a.toLowerCase();a=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||
0>a.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}};k=b.uaMatch(navigator.userAgent);i={};k.browser&&(i[k.browser]=!0,i.version=k.version);i.chrome?i.webkit=!0:i.webkit&&(i.safari=!0);b.browser=i;j(b,"browser",i,"jQuery.browser is deprecated");b.sub=function(){function a(b,c){return new a.fn.init(b,c)}b.extend(true,a,this);a.superclass=this;a.fn=a.prototype=this();a.fn.constructor=a;a.sub=this.sub;a.fn.init=function(d,f){f&&(f instanceof
b&&!(f instanceof a))&&(f=a(f));return b.fn.init.call(this,d,f,c)};a.fn.init.prototype=a.fn;var c=a(document);g("jQuery.sub() is deprecated");return a};var C=b.fn.data;b.fn.data=function(a){var c,d;if((d=this[0])&&a==="events"&&arguments.length===1){c=b.data(d,a);d=b._data(d,a);if((c===void 0||c===d)&&d!==void 0){g("Use of jQuery.fn.data('events') is deprecated");return d}}return C.apply(this,arguments)};var D=/\/(java|ecma)script/i,E=b.fn.andSelf||b.fn.addBack,n=b.buildFragment;b.fn.andSelf=function(){g("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()");
return E.apply(this,arguments)};b.clean||(b.clean=function(a,c,d,f){c=c||document;c=!c.nodeType&&c[0]||c;c=c.ownerDocument||c;g("jQuery.clean() is deprecated");var e,h=[];b.merge(h,b.buildFragment(a,c).childNodes);if(d){c=function(a){if(!a.type||D.test(a.type))return f?f.push(a.parentNode?a.parentNode.removeChild(a):a):d.appendChild(a)};for(a=0;(e=h[a])!=null;a++)if(!b.nodeName(e,"script")||!c(e)){d.appendChild(e);if(typeof e.getElementsByTagName!=="undefined"){e=b.grep(b.merge([],e.getElementsByTagName("script")),
c);h.splice.apply(h,[a+1,0].concat(e));a=a+e.length}}}return h});b.buildFragment=function(a,c,d,f){var e,c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c;try{e=n.call(b,a,c,d,f)}catch(h){e=n.call(b,a,c.nodeType?[c]:c[0],d,f);g("jQuery.buildFragment() is deprecated")}if(!e.fragment){j(e,"fragment",e,"jQuery.buildFragment() is deprecated");j(e,"cacheable",false,"jQuery.buildFragment() is deprecated")}return e};var F=b.event.add,G=b.event.remove,H=b.event.trigger,I=b.fn.toggle,o=b.fn.live,p=
b.fn.die,q=/\b(?:ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess)\b/,r=/(?:^|\s)hover(\.\S+|)\b/,s=function(a){if(typeof a!="string"||b.event.special.hover)return a;r.test(a)&&g("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'");return a&&a.replace(r,"mouseenter$1 mouseleave$1")};b.event.props&&"attrChange"!==b.event.props[0]&&b.event.props.unshift("attrChange","attrName","relatedNode","srcElement");j(b.event,"handle",b.event.dispatch,"jQuery.event.handle is undocumented and deprecated");
b.event.add=function(a,b,d,f,e){a!==document&&q.test(b)&&g("AJAX events should be attached to document: "+b);F.call(this,a,s(b||""),d,f,e)};b.event.remove=function(a,b,d,f,e){G.call(this,a,s(b)||"",d,f,e)};b.fn.error=function(){var a=Array.prototype.slice.call(arguments,0);g("jQuery.fn.error() is deprecated");a.splice(0,0,"error");if(arguments.length)return this.bind.apply(this,a);this.triggerHandler.apply(this,a);return this};b.fn.toggle=function(a,c){if(!b.isFunction(a)||!b.isFunction(c))return I.apply(this,
arguments);g("jQuery.fn.toggle(handler, handler...) is deprecated");var d=arguments,f=a.guid||b.guid++,e=0,h=function(c){var f=(b._data(this,"lastToggle"+a.guid)||0)%e;b._data(this,"lastToggle"+a.guid,f+1);c.preventDefault();return d[f].apply(this,arguments)||false};for(h.guid=f;e<d.length;)d[e++].guid=f;return this.click(h)};b.fn.live=function(a,c,d){g("jQuery.fn.live() is deprecated");if(o)return o.apply(this,arguments);b(this.context).on(a,this.selector,c,d);return this};b.fn.die=function(a,c){g("jQuery.fn.die() is deprecated");
if(p)return p.apply(this,arguments);b(this.context).off(a,this.selector||"**",c);return this};b.event.trigger=function(a,b,d,f){!d&!q.test(a)&&g("Global events are undocumented and deprecated");return H.call(this,a,b,d||document,f)};b.each("ajaxStart ajaxStop ajaxSend ajaxComplete ajaxError ajaxSuccess".split(" "),function(a,c){b.event.special[c]={setup:function(){var a=this;if(a!==document){b.event.add(document,c+"."+b.guid,function(){b.event.trigger(c,null,a,true)});b._data(this,c,b.guid++)}return false},
teardown:function(){this!==document&&b.event.remove(document,c+"."+b._data(this,c));return false}}})})(jQuery,window);