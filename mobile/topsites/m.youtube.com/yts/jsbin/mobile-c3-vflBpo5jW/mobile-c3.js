(function(){var h,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ba="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ca(){ca=function(){};
ba.Symbol||(ba.Symbol=da)}
var da=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function ea(){ca();var a=ba.Symbol.iterator;a||(a=ba.Symbol.iterator=ba.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(this)}});
ea=function(){}}
function fa(a){var b=0;return ha(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}
function ha(a){ea();a={next:a};a[ba.Symbol.iterator]=function(){return this};
return a}
function ia(a){ea();var b=a[Symbol.iterator];return b?b.call(a):fa(a)}
var ja="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var ma={Qb:!0},na={};try{na.__proto__=ma;la=na.Qb;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=ka;
function qa(a,b){a.prototype=ja(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.U=b.prototype}
function ra(a){if(!(a instanceof Array)){a=ia(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function sa(a,b){if(b){for(var c=ba,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&aa(c,d,{configurable:!0,writable:!0,value:f})}}
function ta(a,b){ea();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d}
function ua(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var va="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ua(d,e)&&(a[e]=d[e])}return a};
sa("Object.assign",function(a){return a||va});
sa("WeakMap",function(a){function b(a){this.b=(f+=Math.random()+1).toString();if(a){ca();ea();a=ia(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(a){ua(a,e)||aa(a,e,{value:{}})}
function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(p){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random();d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!ua(a,e))throw Error("WeakMap key fail: "+a);a[e][this.b]=b;return this};
b.prototype.get=function(a){return ua(a,e)?a[e][this.b]:void 0};
b.prototype.has=function(a){return ua(a,e)&&ua(a[e],this.b)};
b.prototype["delete"]=function(a){return ua(a,e)&&ua(a[e],this.b)?delete a[e][this.b]:!1};
return b});
sa("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.b;return ha(function(){if(c){for(;c.head!=a.b;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.f[c];if(d&&ua(a.f,c))for(var e=0;e<d.length;e++){var k=d[e];if(b!==b&&k.key!==k.key||b===k.key)return{id:c,list:d,index:e,B:k}}return{id:c,list:d,index:-1,B:void 0}}
function e(a){this.f={};this.b=b();this.size=0;if(a){a=ia(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(ia([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(O){return!1}}())return a;
ca();ea();var f=new WeakMap;e.prototype.set=function(a,b){a=0===a?0:a;var c=d(this,a);c.list||(c.list=this.f[c.id]=[]);c.B?c.B.value=b:(c.B={next:this.b,previous:this.b.previous,head:this.b,key:a,value:b},c.list.push(c.B),this.b.previous.next=c.B,this.b.previous=c.B,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.B&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.f[a.id],a.B.previous.next=a.B.next,a.B.next.previous=a.B.previous,a.B.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.f={};this.b=this.b.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).B};
e.prototype.get=function(a){return(a=d(this,a).B)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
sa("Array.prototype.entries",function(a){return a?a:function(){return ta(this,function(a,c){return[a,c]})}});
sa("Set",function(a){function b(a){this.b=new Map;if(a){a=ia(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.b.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(ia([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
ca();ea();b.prototype.add=function(a){a=0===a?0:a;this.b.set(a,a);this.size=this.b.size;return this};
b.prototype["delete"]=function(a){a=this.b["delete"](a);this.size=this.b.size;return a};
b.prototype.clear=function(){this.b.clear();this.size=0};
b.prototype.has=function(a){return this.b.has(a)};
b.prototype.entries=function(){return this.b.entries()};
b.prototype.values=function(){return this.b.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.b.forEach(function(d){return a.call(b,d,d,c)})};
return b});
sa("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});
sa("Array.prototype.includes",function(a){return a?a:function(a,c){var b=this;b instanceof String&&(b=String(b));var e=b.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=b[f];if(g===a||Object.is(g,a))return!0}return!1}});
sa("String.prototype.includes",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==(this+"").indexOf(a,c||0)}});
(function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=ja(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}})();
sa("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
sa("Object.values",function(a){return a?a:function(a){var b=[],d;for(d in a)ua(a,d)&&b.push(a[d]);return b}});
var l=this;function wa(a){return void 0!==a}
function xa(a){return"string"==typeof a}
function n(a,b,c){a=a.split(".");c=c||l;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&wa(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
var ya=/^[\w+/_-]+[=]{0,2}$/,za=null;function q(a,b){for(var c=a.split("."),d=b||l,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function r(){}
function Aa(a){a.wa=void 0;a.da=function(){return a.wa?a.wa:a.wa=new a}}
function Ba(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function Ca(a){return"array"==Ba(a)}
function Da(a){var b=Ba(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ea(a){return"function"==Ba(a)}
function Fa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var Ga="closure_uid_"+(1E9*Math.random()>>>0),Ha=0;function Ia(a,b,c){return a.call.apply(a.bind,arguments)}
function Ja(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function Ka(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ka=Ia:Ka=Ja;return Ka.apply(null,arguments)}
function La(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var Ma=Date.now||function(){return+new Date};
function Na(a,b){function c(){}
c.prototype=b.prototype;a.U=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Oc=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var Oa=document,Pa=window;function Qa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Qa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
Na(Qa,Error);Qa.prototype.name="CustomError";var Ra;var Sa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(xa(a))return xa(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},t=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=xa(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ta=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=xa(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var k=f[g];
b.call(void 0,k,g,a)&&(d[e++]=k)}return d},Ua=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=xa(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Va=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
t(a,function(c,f){d=b.call(void 0,d,c,f,a)});
return d},Wa=Array.prototype.every?function(a,b){return Array.prototype.every.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=xa(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&!b.call(void 0,d[e],e,a))return!1;
return!0};
function Xa(a,b){var c=Ya(a,b);return 0>c?null:xa(a)?a.charAt(c):a[c]}
function Ya(a,b){for(var c=a.length,d=xa(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return e;return-1}
function Za(a,b){var c=Sa(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function $a(a,b){var c=Ya(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function ab(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function bb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Da(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function cb(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function db(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(Ca(d))for(var e=0;e<d.length;e+=8192){var f=cb(d,e,e+8192);f=db.apply(null,f);for(var g=0;g<f.length;g++)b.push(f[g])}else b.push(d)}return b}
;function eb(a,b){return 0==a.lastIndexOf(b,0)}
function fb(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}
var gb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function hb(a){if(!ib.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(jb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(kb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(lb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(mb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(nb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(ob,"&#0;"));return a}
var jb=/&/g,kb=/</g,lb=/>/g,mb=/"/g,nb=/'/g,ob=/\x00/g,ib=/[\x00&<>"']/;function pb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var qb;a:{var rb=l.navigator;if(rb){var sb=rb.userAgent;if(sb){qb=sb;break a}}qb=""}function u(a){return-1!=qb.indexOf(a)}
;function tb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function ub(a,b){var c=Da(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function vb(a){var b=wb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function xb(a){for(var b in a)return!1;return!0}
function yb(){var a=zb,b={},c;for(c in a)b[c]=a[c];return b}
var Ab="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Bb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ab.length;f++)c=Ab[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Cb(){return u("iPhone")&&!u("iPod")&&!u("iPad")}
;function Db(a){Db[" "](a);return a}
Db[" "]=r;var Eb=u("Opera"),Fb=u("Trident")||u("MSIE"),Gb=u("Edge"),Hb=u("Gecko")&&!(-1!=qb.toLowerCase().indexOf("webkit")&&!u("Edge"))&&!(u("Trident")||u("MSIE"))&&!u("Edge"),Ib=-1!=qb.toLowerCase().indexOf("webkit")&&!u("Edge"),Jb=Cb()||u("iPad")||u("iPod"),Kb=-1!=qb.toLowerCase().indexOf("kaios");function Lb(){var a=l.document;return a?a.documentMode:void 0}
var Mb;a:{var Nb="",Ob=function(){var a=qb;if(Hb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Gb)return/Edge\/([\d\.]+)/.exec(a);if(Fb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ib)return/WebKit\/(\S+)/.exec(a);if(Eb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Ob&&(Nb=Ob?Ob[1]:"");if(Fb){var Pb=Lb();if(null!=Pb&&Pb>parseFloat(Nb)){Mb=String(Pb);break a}}Mb=Nb}var Qb=Mb,Rb;var Sb=l.document;Rb=Sb&&Fb?Lb()||("CSS1Compat"==Sb.compatMode?parseInt(Qb,10):5):void 0;var Tb=Cb()||u("iPod"),Ub=u("iPad");function Vb(a){this.b=a||{cookie:""}}
h=Vb.prototype;h.isEnabled=function(){return navigator.cookieEnabled};
h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');wa(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Ma()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
h.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=gb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
h.remove=function(a,b,c){var d=wa(this.get(a));this.set(a,"",0,b,c);return d};
h.isEmpty=function(){return!this.b.cookie};
h.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=gb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Wb=new Vb("undefined"==typeof document?null:document);Wb.f=3950;var Xb=function(a){return function(){return a}}(!1);
function Yb(a){return a}
function Zb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var $b=!Fb||9<=Number(Rb);function ac(a,b){this.b=a===bc&&b||"";this.f=cc}
ac.prototype.J=!0;ac.prototype.G=function(){return this.b};
ac.prototype.toString=function(){return"Const{"+this.b+"}"};
function dc(a){return a instanceof ac&&a.constructor===ac&&a.f===cc?a.b:"type_error:Const"}
function ec(a){return new ac(bc,a)}
var cc={},bc={};function fc(){this.b=hc}
fc.prototype.J=!0;var hc={};fc.prototype.G=function(){return""};function ic(){this.b="";this.f=jc}
ic.prototype.J=!0;ic.prototype.G=function(){return this.b};
ic.prototype.va=!0;ic.prototype.ua=function(){return 1};
function kc(a,b){var c=lc(a);if(/#/.test(c))throw Error("Found a hash in url ("+c+"), appending not supported.");var d=/\?/.test(c)?"&":"?",e;for(e in b)for(var f=Ca(b[e])?b[e]:[b[e]],g=0;g<f.length;g++)null!=f[g]&&(c+=d+encodeURIComponent(e)+"="+encodeURIComponent(String(f[g])),d="&");return mc(c)}
function lc(a){return a instanceof ic&&a.constructor===ic&&a.f===jc?a.b:"type_error:TrustedResourceUrl"}
var jc={};function mc(a){var b=new ic;b.b=a;return b}
;function nc(){this.b="";this.f=oc}
nc.prototype.J=!0;nc.prototype.G=function(){return this.b};
nc.prototype.va=!0;nc.prototype.ua=function(){return 1};
function pc(a){return a instanceof nc&&a.constructor===nc&&a.f===oc?a.b:"type_error:SafeUrl"}
var qc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function rc(a){if(a instanceof nc)return a;a="object"==typeof a&&a.J?a.G():String(a);qc.test(a)||(a="about:invalid#zClosurez");return sc(a)}
function tc(a){if(a instanceof nc)return a;a="object"==typeof a&&a.J?a.G():String(a);qc.test(a)||(a="about:invalid#zClosurez");return sc(a)}
var oc={};function sc(a){var b=new nc;b.b=a;return b}
sc("about:blank");function uc(){this.b=vc}
uc.prototype.J=!0;var vc={};uc.prototype.G=function(){return""};function wc(){this.b="";this.g=xc;this.f=null}
wc.prototype.va=!0;wc.prototype.ua=function(){return this.f};
wc.prototype.J=!0;wc.prototype.G=function(){return this.b};
function yc(a){return a instanceof wc&&a.constructor===wc&&a.g===xc?a.b:"type_error:SafeHtml"}
var xc={};function zc(a,b){var c=new wc;c.b=a;c.f=b;return c}
zc("<!DOCTYPE html>",0);zc("",0);zc("<br>",0);function Ac(a,b){var c=b instanceof nc?b:tc(b);a.href=pc(c)}
function Bc(a,b){var c=b instanceof nc?b:tc(b);a.src=pc(c)}
function Cc(a,b){a.src=lc(b);if(null===za){a:{var c=l.document;if((c=c.querySelector&&c.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&ya.test(c))break a;c=null}za=c||""}(c=za)&&a.setAttribute("nonce",c)}
function Dc(a,b){var c=b instanceof nc?b:tc(b);a.href=pc(c)}
function Ec(a){a=a instanceof nc?a:tc(a);window.open(pc(a),"",void 0,void 0)}
;function Fc(a){var b=ec("Express consent url provided by the server");dc(b);dc(b);return mc(a)}
;function Gc(a,b){this.x=wa(a)?a:0;this.y=wa(b)?b:0}
Gc.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
Gc.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
Gc.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Hc(a,b){this.width=a;this.height=b}
h=Hc.prototype;h.Sb=function(){return this.width*this.height};
h.aspectRatio=function(){return this.width/this.height};
h.isEmpty=function(){return!this.Sb()};
h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ic(a,b){tb(b,function(b,d){b&&"object"==typeof b&&b.J&&(b=b.G());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Jc.hasOwnProperty(d)?a.setAttribute(Jc[d],b):eb(d,"aria-")||eb(d,"data-")?a.setAttribute(d,b):a[d]=b})}
var Jc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Kc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!$b&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',hb(g.name),'"');if(g.type){f.push(' type="',hb(g.type),'"');var k={};Bb(k,g);delete k.type;g=k}f.push(">");f=f.join("")}f=e.createElement(f);g&&(xa(g)?f.className=g:Ca(g)?f.className=g.join(" "):Ic(f,g));2<d.length&&Lc(e,f,d,2);return f}
function Lc(a,b,c,d){function e(c){c&&b.appendChild(xa(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var f=c[d];if(!Da(f)||Fa(f)&&0<f.nodeType)e(f);else{a:{if(f&&"number"==typeof f.length){if(Fa(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if(Ea(f)){g="function"==typeof f.item;break a}}g=!1}t(g?ab(f):f,e)}}}
function Mc(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Nc(a,b){if(!b)return null;var c=b?String(b).toUpperCase():null;return Oc(a,function(a){return(!c||a.nodeName==c)&&!0},void 0)}
function Oc(a,b,c){for(var d=0;a&&(null==c||d<=c);){if(b(a))return a;a=a.parentNode;d++}return null}
function Qc(a){this.b=a||l.document||document}
Qc.prototype.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
Qc.prototype.createElement=function(a){return this.b.createElement(String(a))};
Qc.prototype.append=function(a,b){Lc(Mc(a),a,arguments,1)};
Qc.prototype.canHaveChildren=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0};function Rc(a){Sc();return mc(a)}
var Sc=r;function Tc(){var a=Uc;try{var b;if(b=!!a&&null!=a.location.href)a:{try{Db(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}
function Vc(a){var b=Wc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Xc(){var a=[];Vc(function(b){a.push(b)});
return a}
var Wc={yc:"allow-forms",zc:"allow-modals",Ac:"allow-orientation-lock",Bc:"allow-pointer-lock",Cc:"allow-popups",Dc:"allow-popups-to-escape-sandbox",Ec:"allow-presentation",Fc:"allow-same-origin",Gc:"allow-scripts",Hc:"allow-top-navigation",Ic:"allow-top-navigation-by-user-activation"},Yc=Zb(function(){return Xc()});
function Zc(){var a=document.createElement("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};t(Yc(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;var $c=!!window.google_async_iframe_id,Uc=$c&&window.parent||window;var ad=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function bd(a){return a?decodeURI(a):a}
function cd(a){return bd(a.match(ad)[3]||null)}
function dd(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]}
function ed(a,b,c){if(Ca(b))for(var d=0;d<b.length;d++)ed(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function fd(a){var b=[],c;for(c in a)ed(c,a[c],b);return b.join("&")}
function gd(a,b){var c=fd(b);return dd(a,c)}
function hd(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return dd(a,b+c)}
var id=/#|$/;function jd(a,b){var c=a.search(id);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;var kd=null;function ld(){var a=l.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Ma()}
function md(){var a=void 0===a?l:a;return(a=a.performance)&&a.now?a.now():null}
;function nd(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0}
;var od=l.performance,pd=!!(od&&od.mark&&od.measure&&od.clearMarks),qd=Zb(function(){var a;if(a=pd){var b;if(null===kd){kd="";try{a="";try{a=l.top.location.hash}catch(c){a=l.location.hash}a&&(kd=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=kd;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
function rd(){var a=sd;this.events=[];this.f=a||l;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.b=qd()||(null!=b?b:1>Math.random())}
function td(a){a&&od&&qd()&&(od.clearMarks("goog_"+a.uniqueId+"_start"),od.clearMarks("goog_"+a.uniqueId+"_end"))}
rd.prototype.start=function(a,b){if(!this.b)return null;var c=md()||ld();c=new nd(a,b,c);var d="goog_"+c.uniqueId+"_start";od&&qd()&&od.mark(d);return c};
rd.prototype.end=function(a){if(this.b&&"number"==typeof a.value){var b=md()||ld();a.duration=b-a.value;b="goog_"+a.uniqueId+"_end";od&&qd()&&od.mark(b);this.b&&this.events.push(a)}};if($c&&!Tc()){var ud="."+Oa.domain;try{for(;2<ud.split(".").length&&!Tc();)Oa.domain=ud=ud.substr(ud.indexOf(".")+1),Uc=window.parent}catch(a){}Tc()||(Uc=window)}var sd=Uc,vd=new rd;function wd(){sd.google_measure_js_timing||(vd.b=!1,vd.events!=vd.f.google_js_reporting_queue&&(qd()&&t(vd.events,td),vd.events.length=0))}
if("complete"==sd.document.readyState)wd();else if(vd.b){var xd=function(){wd()},yd=sd;
yd.addEventListener&&yd.addEventListener("load",xd,!1)};var zd=(new Date).getTime();function Ad(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Bd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;D=p=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],k=e[3],m=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var p=k^d&(f^k);var D=1518500249}else p=d^f^k,D=1859775393;else 60>c?(p=d&f|k&(d|f),D=2400959708):(p=d^f^k,D=3395469782);p=((a<<5|a>>>27)&4294967295)+p+m+D+b[c]&4294967295;m=k;k=f;f=(d<<30|d>>>2)&4294967295;d=a;a=p}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+k&4294967295;e[4]=e[4]+m&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==p)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,D+=64;for(;d<c;)if(f[p++]=a[d++],D++,64==p)for(p=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,D+=64}
function d(){var a=[],d=8*D;56>p?c(k,56-p):c(k,64-(p-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var m=24;0<=m;m-=8)a[d++]=e[g]>>m&255;return a}
for(var e=[],f=[],g=[],k=[128],m=1;64>m;++m)k[m]=0;var p,D;a();return{reset:a,update:c,digest:d,Wb:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Cd(a,b,c){var d=[],e=[];if(1==(Ca(c)?2:1))return e=[b,a],t(d,function(a){e.push(a)}),Dd(e.join(" "));
var f=[],g=[];t(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];t(d,function(a){e.push(a)});
a=Dd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Dd(a){var b=Bd();b.update(a);return b.Wb().toLowerCase()}
;function Ed(a,b){this.g=a;this.m=b;this.f=0;this.b=null}
Ed.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.g();return a};
function Fd(a,b){a.m(b);100>a.f&&(a.f++,b.next=a.b,a.b=b)}
;function Gd(a){l.setTimeout(function(){throw a;},0)}
function Hd(a){a=Id(a);!Ea(l.setImmediate)||l.Window&&l.Window.prototype&&!u("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(Jd||(Jd=Kd()),Jd(a)):l.setImmediate(a)}
var Jd;
function Kd(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!u("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=Ka(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!u("Trident")&&!u("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(wa(c.next)){c=c.next;var a=c.La;c.La=null;a()}};
return function(a){d.next={La:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){l.setTimeout(a,0)}}
var Id=Yb;function Ld(){this.f=this.b=null}
var Nd=new Ed(function(){return new Md},function(a){a.reset()});
Ld.prototype.add=function(a,b){var c=Nd.get();c.set(a,b);this.f?this.f.next=c:this.b=c;this.f=c};
Ld.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Md(){this.next=this.scope=this.b=null}
Md.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Md.prototype.reset=function(){this.next=this.scope=this.b=null};function Od(a,b){Pd||Qd();Rd||(Pd(),Rd=!0);Sd.add(a,b)}
var Pd;function Qd(){if(l.Promise&&l.Promise.resolve){var a=l.Promise.resolve(void 0);Pd=function(){a.then(Td)}}else Pd=function(){Hd(Td)}}
var Rd=!1,Sd=new Ld;function Td(){for(var a;a=Sd.remove();){try{a.b.call(a.scope)}catch(b){Gd(b)}Fd(Nd,a)}Rd=!1}
;function Ud(a){return 1==a.length?"0"+a:a}
;function Vd(){this.g=this.g;this.m=this.m}
Vd.prototype.g=!1;Vd.prototype.dispose=function(){this.g||(this.g=!0,this.ia())};
Vd.prototype.ia=function(){if(this.m)for(;this.m.length;)this.m.shift()()};var Wd="StopIteration"in l?l.StopIteration:{message:"StopIteration",stack:""};function Xd(){}
Xd.prototype.next=function(){throw Wd;};
Xd.prototype.M=function(){return this};
function Yd(a){if(a instanceof Xd)return a;if("function"==typeof a.M)return a.M(!1);if(Da(a)){var b=0,c=new Xd;c.next=function(){for(;;){if(b>=a.length)throw Wd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Zd(a,b){if(Da(a))try{t(a,b,void 0)}catch(c){if(c!==Wd)throw c;}else{a=Yd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Wd)throw c;}}}
function $d(a){if(Da(a))return ab(a);a=Yd(a);var b=[];Zd(a,function(a){b.push(a)});
return b}
;function ae(a,b){this.f={};this.b=[];this.m=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof ae)for(c=be(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function be(a){ce(a);return a.b.concat()}
h=ae.prototype;h.isEmpty=function(){return 0==this.g};
h.clear=function(){this.f={};this.m=this.g=this.b.length=0};
h.remove=function(a){return Object.prototype.hasOwnProperty.call(this.f,a)?(delete this.f[a],this.g--,this.m++,this.b.length>2*this.g&&ce(this),!0):!1};
function ce(a){if(a.g!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Object.prototype.hasOwnProperty.call(a.f,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.g!=a.b.length){var e={};for(c=b=0;b<a.b.length;)d=a.b[b],Object.prototype.hasOwnProperty.call(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
h.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.f,a)?this.f[a]:b};
h.set=function(a,b){Object.prototype.hasOwnProperty.call(this.f,a)||(this.g++,this.b.push(a),this.m++);this.f[a]=b};
h.forEach=function(a,b){for(var c=be(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
h.M=function(a){ce(this);var b=0,c=this.m,d=this,e=new Xd;e.next=function(){if(c!=d.m)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw Wd;var e=d.b[b++];return a?e:d.f[e]};
return e};function de(a){a.preventDefault()}
;var ee=l.JSON.stringify;function fe(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
function ge(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function he(a,b){this.b=0;this.K=void 0;this.m=this.f=this.g=null;this.C=this.F=!1;if(a!=r)try{var c=this;a.call(b,function(a){ie(c,2,a)},function(a){ie(c,3,a)})}catch(d){ie(this,3,d)}}
function je(){this.next=this.context=this.onRejected=this.f=this.b=null;this.g=!1}
je.prototype.reset=function(){this.context=this.onRejected=this.f=this.b=null;this.g=!1};
var ke=new Ed(function(){return new je},function(a){a.reset()});
function le(a,b,c){var d=ke.get();d.f=a;d.onRejected=b;d.context=c;return d}
function me(a){if(a instanceof he)return a;var b=new he(r);ie(b,2,a);return b}
function ne(a){return new he(function(b,c){c(a)})}
function oe(a,b,c){pe(a,b,c,null)||Od(La(b,a))}
function qe(a){return new he(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},g=function(a){c(a)},k=0,m;k<a.length;k++)m=a[k],oe(m,La(f,k),g);
else b(e)})}
he.prototype.then=function(a,b,c){return re(this,Ea(a)?a:null,Ea(b)?b:null,c)};
fe(he);function se(a,b){return re(a,null,b,void 0)}
he.prototype.cancel=function(a){0==this.b&&Od(function(){var b=new te(a);ue(this,b)},this)};
function ue(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.g||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?ue(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):ve(c),we(c,e,3,b)))}a.g=null}else ie(a,3,b)}
function xe(a,b){a.f||2!=a.b&&3!=a.b||ye(a);a.m?a.m.next=b:a.f=b;a.m=b}
function re(a,b,c,d){var e=le(null,null,null);e.b=new he(function(a,g){e.f=b?function(c){try{var e=b.call(d,c);a(e)}catch(p){g(p)}}:a;
e.onRejected=c?function(b){try{var e=c.call(d,b);!wa(e)&&b instanceof te?g(b):a(e)}catch(p){g(p)}}:g});
e.b.g=a;xe(a,e);return e.b}
he.prototype.ya=function(a){this.b=0;ie(this,2,a)};
he.prototype.Ca=function(a){this.b=0;ie(this,3,a)};
function ie(a,b,c){0==a.b&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.b=1,pe(c,a.ya,a.Ca,a)||(a.K=c,a.b=b,a.g=null,ye(a),3!=b||c instanceof te||ze(a,c)))}
function pe(a,b,c,d){if(a instanceof he)return xe(a,le(b||r,c||null,d)),!0;if(ge(a))return a.then(b,c,d),!0;if(Fa(a))try{var e=a.then;if(Ea(e))return Ae(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function Ae(a,b,c,d,e){function f(a){k||(k=!0,d.call(e,a))}
function g(a){k||(k=!0,c.call(e,a))}
var k=!1;try{b.call(a,g,f)}catch(m){f(m)}}
function ye(a){a.F||(a.F=!0,Od(a.T,a))}
function ve(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.m=null);return b}
he.prototype.T=function(){for(var a;a=ve(this);)we(this,a,this.b,this.K);this.F=!1};
function we(a,b,c,d){if(3==c&&b.onRejected&&!b.g)for(;a&&a.C;a=a.g)a.C=!1;if(b.b)b.b.g=null,Be(b,c,d);else try{b.g?b.f.call(b.context):Be(b,c,d)}catch(e){Ce.call(null,e)}Fd(ke,b)}
function Be(a,b,c){2==b?a.f.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function ze(a,b){a.C=!0;Od(function(){a.C&&Ce.call(null,b)})}
var Ce=Gd;function te(a){Qa.call(this,a)}
Na(te,Qa);te.prototype.name="cancel";function v(a){Vd.call(this);this.K=1;this.C=[];this.F=0;this.b=[];this.f={};this.T=!!a}
Na(v,Vd);h=v.prototype;h.Ta=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.K;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.K=e+3;d.push(e);return e};
h.qa=function(a){var b=this.b[a];if(b){var c=this.f[b];0!=this.F?(this.C.push(a),this.b[a+1]=r):(c&&Za(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
h.cb=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.T)for(e=0;e<c.length;e++){var g=c[e];De(this.b[g+1],this.b[g+2],d)}else{this.F++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.F--,0<this.C.length&&0==this.F)for(;c=this.C.pop();)this.qa(c)}}return 0!=e}return!1};
function De(a,b,c){Od(function(){a.apply(b,c)})}
h.clear=function(a){if(a){var b=this.f[a];b&&(t(b,this.qa,this),delete this.f[a])}else this.b.length=0,this.f={}};
h.ia=function(){v.U.ia.call(this);this.clear();this.C.length=0};function Ee(a){this.b=a}
Ee.prototype.set=function(a,b){wa(b)?this.b.set(a,ee(b)):this.b.remove(a)};
Ee.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ee.prototype.remove=function(a){this.b.remove(a)};function Fe(a){this.b=a}
Na(Fe,Ee);function Ge(a){this.data=a}
function He(a){return!wa(a)||a instanceof Ge?a:new Ge(a)}
Fe.prototype.set=function(a,b){Fe.U.set.call(this,a,He(b))};
Fe.prototype.f=function(a){a=Fe.U.get.call(this,a);if(!wa(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Fe.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!wa(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Ie(a){this.b=a}
Na(Ie,Fe);Ie.prototype.set=function(a,b,c){if(b=He(b)){if(c){if(c<Ma()){Ie.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ma()}Ie.U.set.call(this,a,b)};
Ie.prototype.f=function(a){var b=Ie.U.f.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ma()||c&&c>Ma())Ie.prototype.remove.call(this,a);else return b}};function Je(){}
;function Ke(){}
Na(Ke,Je);Ke.prototype.clear=function(){var a=$d(this.M(!0)),b=this;t(a,function(a){b.remove(a)})};function Le(a){this.b=a}
Na(Le,Ke);h=Le.prototype;h.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
h.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
h.get=function(a){a=this.b.getItem(a);if(!xa(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.b.removeItem(a)};
h.M=function(a){var b=0,c=this.b,d=new Xd;d.next=function(){if(b>=c.length)throw Wd;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!xa(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
h.clear=function(){this.b.clear()};
h.key=function(a){return this.b.key(a)};function Me(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
Na(Me,Le);function Ne(a,b){this.f=a;this.b=null;if(Fb&&!(9<=Number(Rb))){Oe||(Oe=new ae);this.b=Oe.get(a);this.b||(b?this.b=document.getElementById(b):(this.b=document.createElement("userdata"),this.b.addBehavior("#default#userData"),document.body.appendChild(this.b)),Oe.set(a,this.b));try{this.b.load(this.f)}catch(c){this.b=null}}}
Na(Ne,Ke);var Pe={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Oe=null;function Qe(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return Pe[a]})}
h=Ne.prototype;h.isAvailable=function(){return!!this.b};
h.set=function(a,b){this.b.setAttribute(Qe(a),b);Re(this)};
h.get=function(a){a=this.b.getAttribute(Qe(a));if(!xa(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.b.removeAttribute(Qe(a));Re(this)};
h.M=function(a){var b=0,c=this.b.XMLDocument.documentElement.attributes,d=new Xd;d.next=function(){if(b>=c.length)throw Wd;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!xa(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
h.clear=function(){for(var a=this.b.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Re(this)};
function Re(a){try{a.b.save(a.f)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Se(a,b){this.f=a;this.b=b+"::"}
Na(Se,Ke);Se.prototype.set=function(a,b){this.f.set(this.b+a,b)};
Se.prototype.get=function(a){return this.f.get(this.b+a)};
Se.prototype.remove=function(a){this.f.remove(this.b+a)};
Se.prototype.M=function(a){var b=this.f.M(!0),c=this,d=new Xd;d.next=function(){for(var d=b.next();d.substr(0,c.b.length)!=c.b;)d=b.next();return a?d.substr(c.b.length):c.f.get(d)};
return d};function Te(){}
Aa(Te);Te.prototype.b=0;var Ue=/^[\w+/_-]+[=]{0,2}$/;function Ve(){this.f=[];this.b=-1}
Ve.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.f[a]!=b&&(this.f[a]=b,this.b=-1)};
Ve.prototype.get=function(a){return!!this.f[a]};
function We(a){-1==a.b&&(a.b=Va(a.f,function(a,c,d){return c?a+Math.pow(2,d):a},0));
return a.b}
;/*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
/*

 Copyright 2018 The Incremental DOM Authors. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS-IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var Xe={"default":"__default"};var Ye=Object.prototype.hasOwnProperty;function Ze(){}
Ze.prototype=Object.create(null);/*

 Copyright 2018 The Incremental DOM Authors. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS-IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

*/
function $e(a,b,c){if(null==c)a.removeAttribute(b);else{var d=0===b.lastIndexOf("xml:",0)?"http://www.w3.org/XML/1998/namespace":0===b.lastIndexOf("xlink:",0)?"http://www.w3.org/1999/xlink":void 0;d?a.setAttributeNS(d,b,String(c)):a.setAttribute(b,String(c))}}
var af=new Ze;af[Xe["default"]]=function(a,b,c){var d=typeof c;"object"===d||"function"===d?a[b]=c:$e(a,b,c)};
af.style=function(a,b,c){if("string"===typeof c)a.style.cssText=c;else{a.style.cssText="";a=a.style;for(var d in c)if(Ye.call(c,d)){b=d;var e=c[d];0<=b.indexOf("-")?a.setProperty(b,e):a[b]=e}}};
function bf(a,b,c){(af[b]||af[Xe["default"]])(a,b,c)}
;function cf(){this.created=[];this.b=[]}
;var df=Node.prototype.getRootNode||function(){for(var a=this,b=a;a;)b=a,a=a.parentNode;return b};function ef(a,b,c){this.b=null;this.g=!1;this.f=a;this.key=b;this.text=c}
function ff(a){a=a.b;return!a||!a.length}
function gf(a,b,c,d){b=new ef(b,c,d);return a.__incrementalDOMData=b}
function hf(a,b){if(a.__incrementalDOMData)return a.__incrementalDOMData;var c=1===a.nodeType?a.localName:a.nodeName,d=1===a.nodeType?a.getAttribute("key")||b:null;c=gf(a,c,d,3===a.nodeType?a.data:void 0);if(1===a.nodeType){d=a.attributes;var e=d.length;if(e)for(var f=c.b||(c.b=Array(e)),g=0,k=0;g<e;g+=1,k+=2){var m=d[g],p=m.value;f[k]=m.name;f[k+1]=p}}return c}
;var jf=null,w=null,x=null,kf=null,lf=[],mf=[];function nf(a){return function(b,c,d){var e=jf,f=kf,g=lf,k=mf,m=w,p=x;jf=new cf;kf=b.ownerDocument;mf=[];var D=x=b.parentNode,O,M=df.call(b);if((O=11===M.nodeType||9===M.nodeType?M.activeElement:null)&&b.contains(O)){for(M=[];O!==D;)M.push(O),O=O.parentNode;D=M}else D=[];lf=D;try{return a(b,c,d)}finally{kf=f,mf=k,w=m,x=p,lf=g,jf=e}}}
var pf=nf(function(a,b,c){x=w=a;w=null;b(c);of();return a}),rf=nf(function(a,b,c){var d={nextSibling:a};
w=d;b(c);x&&qf(a.nextSibling);return d===w?null:w});
function sf(a,b,c){a=hf(a,c);return b==a.f&&c==a.key}
function tf(a,b){var c=w;if(!c)return null;if(sf(c,a,b))return c;if(b)for(;c=c.nextSibling;)if(sf(c,a,b))return c;return null}
function uf(a,b){var c;if(!(c=tf(a,b))){if("#text"===a)c=kf.createTextNode(""),gf(c,"#text",null);else{c=kf;var d=x;a instanceof Function?c=new a:c=(d="svg"===a?"http://www.w3.org/2000/svg":null==d||"foreignObject"===hf(d,void 0).f?null:d.namespaceURI)?c.createElementNS(d,a):c.createElement(a);gf(c,a,b)}jf.created.push(c)}if(c!==w){if(0<=lf.indexOf(c)){d=x;for(var e=c.nextSibling,f=w;null!==f&&f!==c;){var g=f.nextSibling;d.insertBefore(f,e);f=g}}else x.insertBefore(c,w);w=c}}
function qf(a){for(var b=x,c=w?w.nextSibling:x.firstChild;c!==a;){var d=c.nextSibling;b.removeChild(c);jf.b.push(c);c=d}}
function of(){qf(null);w=x;x=x.parentNode}
function vf(){w=x.lastChild}
;var wf=new Ze;
function xf(a,b,c,d){for(var e=3;e<arguments.length;++e);w=w?w.nextSibling:x.firstChild;uf(a,b);x=w;w=null;e=x;var f=hf(e,void 0);if(!f.g&&(f.g=!0,c&&c.length))if(ff(f))for(var g=0;g<c.length;g+=2)bf(e,c[g],c[g+1]);else{for(var k=0;k<c.length;k+=2)wf[c[k]]=k+1;k=f.b||(f.b=[]);for(var m=0,p=0;p<k.length;p+=2){var D=k[p],O=k[p+1],M=wf[D];M?c[M]===O&&delete wf[D]:(k[m]=D,k[m+1]=O,m+=2)}for(;k.length>m;)k.pop();for(g in wf)bf(e,g,c[wf[g]]),delete wf[g]}g=Math.max(0,arguments.length-3);m=ff(f);if(!g&&
m)return e;f=f.b||(f.b=Array(g));g=3;for(k=0;g<arguments.length;g+=2,k+=2){p=arguments[g];if(m)f[k]=p;else if(f[k]!==p)break;D=arguments[g+1];if(m||f[k+1]!==D)f[k+1]=D,bf(e,p,D)}if(g<arguments.length||k<f.length){for(m=k;k<f.length;k+=2)wf[f[k]]=f[k+1];for(k=m;g<arguments.length;g+=2,k+=2)m=arguments[g],p=arguments[g+1],wf[m]!==p&&bf(e,m,p),f[k]=m,f[k+1]=p,delete wf[m];for(g=k;f.length>g;)f.pop();for(var oa in wf)bf(e,oa,void 0),delete wf[oa]}return e}
function y(a,b){for(var c=1;c<arguments.length;++c);w=w?w.nextSibling:x.firstChild;uf("#text",null);c=w;var d=hf(c,void 0);if(d.text!==a){d=d.text=a;for(var e=1;e<arguments.length;e+=1)d=(0,arguments[e])(d);c.data=d}return c}
;/*

 Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at
 http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at
 http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at
 http://polymer.github.io/PATENTS.txt
*/
function yf(a,b,c){if(Object.hasOwnProperty.call(zf,a)&&(a=zf[a],Object.hasOwnProperty.call(a,b)&&(a=a[b],a instanceof Array))){for(var d=null,e=!1,f=0,g=a.length;f<g;++f){var k=a[f],m=k.u;if(!m)return k.h;null===d&&(d={});m=Object.hasOwnProperty.call(d,m)?d[m]:d[m]=c(m);if(m===k.w)return k.h;null==m&&(e=!0)}if(e)return null}b=Af[b];return"number"===typeof b?b:null}
var Af={align:1,alt:1,"aria-activedescendant":10,"aria-atomic":1,"aria-autocomplete":1,"aria-busy":1,"aria-checked":1,"aria-disabled":1,"aria-dropeffect":1,"aria-expanded":1,"aria-haspopup":1,"aria-hidden":1,"aria-invalid":1,"aria-label":1,"aria-level":1,"aria-live":1,"aria-multiline":1,"aria-multiselectable":1,"aria-orientation":1,"aria-posinset":1,"aria-pressed":1,"aria-readonly":1,"aria-relevant":1,"aria-required":1,"aria-selected":1,"aria-setsize":1,"aria-sort":1,"aria-valuemax":1,"aria-valuemin":1,
"aria-valuenow":1,"aria-valuetext":1,autocapitalize:1,autocomplete:1,autocorrect:1,autofocus:1,bgcolor:1,border:1,checked:1,"class":1,color:1,cols:1,colspan:1,dir:8,disabled:1,draggable:1,face:1,"for":10,frameborder:1,height:1,hidden:1,href:4,hreflang:1,id:10,ismap:1,label:1,lang:1,list:10,loop:1,max:1,maxlength:1,min:1,multiple:1,muted:1,name:10,placeholder:1,preload:1,rel:1,required:1,reversed:1,role:1,rows:1,rowspan:1,selected:1,shape:1,size:1,sizes:1,span:1,spellcheck:1,src:4,start:1,step:1,style:5,
summary:1,tabindex:1,target:8,title:1,translate:1,valign:1,value:1,width:1,wrap:1},zf={a:{href:[{h:3}]},area:{href:[{h:3}]},audio:{src:[{h:3}]},blockquote:{cite:[{h:3}]},button:{formaction:[{h:3}],formmethod:[{h:1}],type:[{h:1}]},command:{type:[{h:1}]},del:{cite:[{h:3}]},form:{action:[{h:3}],method:[{h:1}]},iframe:{srcdoc:[{h:2}]},img:{src:[{h:3}]},input:{formaction:[{h:3}],formmethod:[{h:1}],pattern:[{h:1}],readonly:[{h:1}],src:[{h:3}],type:[{h:1}]},ins:{cite:[{h:3}]},li:{type:[{h:1}]},link:{href:[{h:3,
u:"rel",w:"alternate"},{h:3,u:"rel",w:"author"},{h:3,u:"rel",w:"bookmark"},{h:3,u:"rel",w:"canonical"},{h:3,u:"rel",w:"cite"},{h:3,u:"rel",w:"help"},{h:3,u:"rel",w:"icon"},{h:3,u:"rel",w:"license"},{h:3,u:"rel",w:"next"},{h:3,u:"rel",w:"prefetch"},{h:3,u:"rel",w:"prerender"},{h:3,u:"rel",w:"preconnect"},{h:3,u:"rel",w:"preload"},{h:3,u:"rel",w:"prev"},{h:3,u:"rel",w:"search"},{h:3,u:"rel",w:"subresource"}],media:[{h:1}],nonce:[{h:1}],type:[{h:1}]},menuitem:{icon:[{h:3}]},ol:{type:[{h:1}]},q:{cite:[{h:3}]},
script:{nonce:[{h:1}]},source:{media:[{h:1}],src:[{h:3}]},style:{media:[{h:1}],nonce:[{h:1}]},time:{datetime:[{h:1}]},video:{autoplay:[{h:1}],controls:[{h:1}],poster:[{h:3}],src:[{h:3}]}},Bf=[{auto:!0,ltr:!0,rtl:!0},{_self:!0,_blank:!0}],Cf={"*":{dir:0,target:1}};function Df(a,b,c){a.timeOfStartCall=(new Date).getTime();var d=c||l,e=d.document;a:{var f=(d||l).document;if((f=f.querySelector&&f.querySelector("script[nonce]"))&&(f=f.nonce||f.getAttribute("nonce"))&&Ue.test(f))break a;f=void 0}f&&(a.nonce=f);if("help"==a.flow){var g=q("document.location.href",d);!a.helpCenterContext&&g&&(a.helpCenterContext=g.substring(0,1200));g=!0;if(b&&JSON&&JSON.stringify){var k=JSON.stringify(b);(g=1200>=k.length)&&(a.psdJson=k)}g||(b={invalidPsd:!0})}b=[a,b,c];d.GOOGLE_FEEDBACK_START_ARGUMENTS=
b;c=a.serverUri||"//www.google.com/tools/feedback";if(g=d.GOOGLE_FEEDBACK_START)g.apply(d,b);else{d=c+"/load.js?";for(var m in a)b=a[m],null!=b&&!Fa(b)&&(d+=encodeURIComponent(m)+"="+encodeURIComponent(b)+"&");a=(e?new Qc(Mc(e)):Ra||(Ra=new Qc)).createElement("SCRIPT");f&&a.setAttribute("nonce",f);Cc(a,Rc(d));e.body.appendChild(a)}}
n("userfeedback.api.startFeedback",Df,void 0);var z=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var Ef=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};n("yt.config_",Ef,void 0);function A(a){var b=arguments;if(1<b.length)Ef[b[0]]=b[1];else{b=b[0];for(var c in b)Ef[c]=b[c]}}
function B(a,b){return a in Ef?Ef[a]:b}
;function Ff(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Gf(b)}}:a}
function Gf(a,b,c,d,e){var f=q("yt.logging.errors.log");f?f(a,b,c,d,e):(f=B("ERRORS",[]),f.push([a,b,c,d,e]),A("ERRORS",f))}
function Hf(a,b,c,d,e){var f=!1,g;if((g=(g=Ef.EXPERIMENT_FLAGS)?g.log_window_onerror_fraction:void 0)&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var k=0,m=g.length;k<m;k++)if(0<g[k].src.indexOf("/debug-")){f=!0;break}}f&&(e||(xa(a)?f=a:ErrorEvent&&a instanceof ErrorEvent?(f=a.message,b=a.filename,c=a.lineno,d=a.colno):(f="Unknown error",b="Unknown file",c=0),e=If(f,"UnhandledWindowError"),e.message=f,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=
d),Gf(e))}
function Jf(a){if(a instanceof Error)Gf(a);else{var b=Fa(a)?JSON.stringify(a):String(a),c;a||(c="WARNING");Gf(If(b,"RejectedPromiseError"),c)}}
function If(a,b){var c=Error(a);c.name=b;return c}
;function Kf(a){return a?a.dataset?a.dataset[Lf()]:a.getAttribute("data-loaded"):null}
var Mf={};function Lf(){return Mf.loaded||(Mf.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function Nf(a,b){Ea(a)&&(a=Ff(a));return window.setTimeout(a,b)}
function Of(a,b){Ea(a)&&(a=Ff(a));return window.setInterval(a,b)}
;var Pf=q("ytPubsubPubsubInstance")||new v;v.prototype.subscribe=v.prototype.Ta;v.prototype.unsubscribeByKey=v.prototype.qa;v.prototype.publish=v.prototype.cb;v.prototype.clear=v.prototype.clear;n("ytPubsubPubsubInstance",Pf,void 0);var Qf=q("ytPubsubPubsubSubscribedKeys")||{};n("ytPubsubPubsubSubscribedKeys",Qf,void 0);var Rf=q("ytPubsubPubsubTopicToKeys")||{};n("ytPubsubPubsubTopicToKeys",Rf,void 0);var Sf=q("ytPubsubPubsubIsSynchronous")||{};n("ytPubsubPubsubIsSynchronous",Sf,void 0);
function Tf(a,b){var c=Uf();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){Qf[d]&&b.apply(window,c)};
try{Sf[a]?f():Nf(f,0)}catch(g){Gf(g)}},void 0);
Qf[d]=!0;Rf[a]||(Rf[a]=[]);Rf[a].push(d)}}
function Vf(a,b){var c=Uf();c&&c.publish.apply(c,arguments)}
function Wf(a){var b=Uf();if(b)if(b.clear(a),a)Xf(a);else for(var c in Rf)Xf(c)}
function Uf(){return q("ytPubsubPubsubInstance")}
function Xf(a){Rf[a]&&(a=Rf[a],t(a,function(a){Qf[a]&&delete Qf[a]}),a.length=0)}
;var Yf=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Zf=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function $f(a,b,c){c=void 0===c?null:c;if(window.spf){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Yf,""),c=c.replace(Zf,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else ag(a,b,c)}
function ag(a,b,c){c=void 0===c?null:c;var d=bg(a),e=document.getElementById(d),f=e&&Kf(e),g=e&&!f;f?b&&b():(b&&(Tf(d,b),b[Ga]||(b[Ga]=++Ha)),g||(e=cg(a,d,function(){if(!Kf(e)){var a=e;a&&(a.dataset?a.dataset[Lf()]="true":a.setAttribute("data-loaded","true"));Vf(d);Nf(La(Wf,d),0)}},c)))}
function cg(a,b,c,d){d=void 0===d?null:d;var e=document.createElement("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Cc(e,Rc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function bg(a){var b=document.createElement("a");Ac(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+pb(a)}
;function dg(){this.f=!1;this.b=null}
function eg(a){var b=fg,c=B("BG_I",null),d=B("BG_IU",null),e=gg;d?(b.f=!0,$f(d,function(){this.f=!1;if(window.botguard)hg(this,a,e);else{var b=bg(d),c=document.getElementById(b);c&&(Wf(b),c.parentNode.removeChild(c));Gf(Error("Unable to load Botguard from "+d),"WARNING")}}.bind(b),void 0)):c&&(eval(c),window.botguard?hg(b,a,e):Gf(Error("Unable to load Botguard from JS"),"WARNING"))}
function hg(a,b,c){try{a.b=new window.botguard.bg(b)}catch(d){Gf(d,"WARNING",void 0,void 0,void 0)}c&&c(b)}
dg.prototype.invoke=function(){return this.b?this.b.invoke():null};
dg.prototype.dispose=function(){this.b=null};function ig(a,b){var c=C(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function C(a){return B("EXPERIMENT_FLAGS",{})[a]}
;var fg=new dg,jg=!1,kg=0,lg="";function gg(a){C("botguard_periodic_refresh")?kg=z():C("botguard_always_refresh")&&(lg=a)}
function mg(a){if(a){if(fg.f)return!1;if(C("botguard_periodic_refresh"))return 72E5<z()-kg;if(C("botguard_always_refresh"))return lg!=a}else return!1;return!jg}
function ng(){return null!==fg.b}
function og(){return fg.invoke()}
;Ma();var pg=wa(XMLHttpRequest)?function(){return new XMLHttpRequest}:wa(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function qg(){if(!pg)return null;var a=pg();return"open"in a?a:null}
function rg(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function sg(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Ca(b[f])?bb(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
;var tg={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ug=!1;
function vg(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(ad)[1]||null,e=cd(a);d&&e?(d=c,c=a.match(ad),d=d.match(ad),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?cd(c)==e&&(Number(c.match(ad)[4]||null)||null)==(Number(a.match(ad)[4]||null)||null):!0;for(var f in tg)(d=B(tg[f]))&&(c||wg(a,f))&&(b[f]=d);if(c||wg(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();return b}
function wg(a,b){var c=B("CORS_HEADER_WHITELIST")||{},d=cd(a);return d?(c=c[d])?0<=Sa(c,b):!1:!0}
function xg(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=yg(a,b);var d=zg(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(a){if(!e){e=!0;f&&window.clearTimeout(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||l;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.za&&b.za.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.Ya&&0<b.timeout&&(f=Nf(function(){e||(e=!0,window.clearTimeout(f),b.Ya.call(b.context||l))},b.timeout))}else Ag(a,b)}
function Ag(a,b){var c=b.format||"JSON";a=yg(a,b);var d=zg(a,b),e=!1,f,g=Bg(a,function(a){if(!e){e=!0;f&&window.clearTimeout(f);var d=rg(a),g=null,k=400<=a.status&&500>a.status,O=500<=a.status&&600>a.status;if(d||k||O)g=Cg(c,a,b.Pc);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||{};k=b.context||l;d?b.onSuccess&&b.onSuccess.call(k,a,g):b.onError&&b.onError.call(k,a,g);b.za&&b.za.call(k,a,g)}},b.method,d,b.headers,
b.responseType,b.withCredentials);
b.ea&&0<b.timeout&&(f=Nf(function(){e||(e=!0,g.abort(),window.clearTimeout(f),b.ea.call(b.context||l,g))},b.timeout));
return g}
function yg(a,b){b.gc&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=B("XSRF_FIELD_NAME",void 0),d=b.wc;if(d){d[c]&&delete d[c];d=d||{};var e=a.split("#",2);c=e[0];e=1<e.length?"#"+e[1]:"";var f=c.split("?",2);c=f[0];f=sg(f[1]||"");for(var g in d)f[g]=d[g];a=gd(c,f)+e}return a}
function zg(a,b){var c=B("XSRF_FIELD_NAME",void 0),d=B("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.H,g=B("XSRF_FIELD_NAME",void 0),k;b.headers&&(k=b.headers["Content-Type"]);b.Qc||cd(a)&&!b.withCredentials&&cd(a)!=document.location.hostname||"POST"!=b.method||k&&"application/x-www-form-urlencoded"!=k||b.H&&b.H[g]||(f||(f={}),f[c]=d);f&&xa(e)&&(e=sg(e),Bb(e,f),e=b.Za&&"JSON"==b.Za?JSON.stringify(e):fd(e));f=e||f&&!xb(f);!ug&&f&&"POST"!=b.method&&(ug=!0,Gf(Error("AJAX request with postData should use POST")));
return e}
function Cg(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Dg(b):null)d={},t(b.getElementsByTagName("*"),function(a){d[a.tagName]=Eg(a)})}c&&Fg(d);
return d}
function Fg(a){if(Fa(a))for(var b in a)if("html_content"==b||fb(b,"_html")){var c=b;var d=a[b];var e=ec("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");dc(e);dc(e);d=zc(d,null);a[c]=d}else Fg(a[b])}
function Dg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Eg(a){var b="";t(a.childNodes,function(a){b+=a.nodeValue});
return b}
function Gg(a,b){b.method="POST";b.H||(b.H={});Ag(a,b)}
function Bg(a,b,c,d,e,f,g){function k(){4==(m&&"readyState"in m?m.readyState:0)&&b&&Ff(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=qg();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",k,!1):m.onreadystatechange=k;m.open(c,a,!0);f&&(m.responseType=f);g&&(m.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=vg(a,e))for(var p in e)m.setRequestHeader(p,e[p]),"content-type"==p.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);return m}
;function Hg(){var a=yb(),b;return se(new he(function(c,d){a.onSuccess=function(a){rg(a)?c(a):d(new Ig("Request failed, status="+a.status,"net.badstatus",a))};
a.onError=function(a){d(new Ig("Unknown request error","net.unknown",a))};
a.ea=function(a){d(new Ig("Request timed out","net.timeout",a))};
b=Ag("//googleads.g.doubleclick.net/pagead/id",a)}),function(a){a instanceof te&&b.abort();
return ne(a)})}
function Ig(a,b){Qa.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
qa(Ig,Qa);function Jg(a){this.g=void 0===a?null:a;this.b=0;this.f=null}
Jg.prototype.then=function(a,b,c){return this.g?this.g.then(a,b,c):1===this.b&&a?(a=a.call(c,this.f),ge(a)?a:Kg(a)):2===this.b&&b?(a=b.call(c,this.f),ge(a)?a:Lg(a)):this};
fe(Jg);function Lg(a){var b=new Jg;a=void 0===a?null:a;b.b=2;b.f=void 0===a?null:a;return b}
function Kg(a){var b=new Jg;a=void 0===a?null:a;b.b=1;b.f=void 0===a?null:a;return b}
;function Mg(a){Qa.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Ng;this.isTimeout=a instanceof Ig&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof te}
qa(Mg,Qa);Mg.prototype.name="BiscottiError";function Ng(){Qa.call(this,"Biscotti ID is missing from server")}
qa(Ng,Qa);Ng.prototype.name="BiscottiMissingError";var zb={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Og=null;function Pg(){if("1"===ub(B("PLAYER_CONFIG",{}),"args","privembed"))return ne(Error("Biscotti ID is not available in private embed mode"));Og||(Og=se(Hg().then(Qg),function(a){return Rg(2,a)}));
return Og}
function Qg(a){a=a.responseText;if(!eb(a,")]}'"))throw new Ng;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Ng;a=a.id;Sg(a);Og=Kg(a);Tg(18E5,2);return a}
function Rg(a,b){var c=new Mg(b);Sg("");Og=Lg(c);0<a&&Tg(12E4,a-1);throw c;}
function Tg(a,b){Nf(function(){se(Hg().then(Qg,function(a){return Rg(b,a)}),r)},a)}
function Sg(a){n("yt.ads.biscotti.lastId_",a,void 0)}
function Ug(){try{var a=q("yt.ads.biscotti.getId_");return a?a():Pg()}catch(b){return ne(b)}}
;function Vg(a,b,c,d,e){Wb.set(""+a,b,c,"/",void 0===d?"youtube.com":d,void 0===e?!1:e)}
;var Wg={"consent.google.com":!0,"consent.youtube.com":!0,"consent-daily-0.sandbox.youtube.com":!0,"consent-daily-1.sandbox.youtube.com":!0,"consent-daily-2.sandbox.youtube.com":!0,"consent-daily-3.sandbox.youtube.com":!0,"consent-daily-4.sandbox.youtube.com":!0,"consent-daily-5.sandbox.youtube.com":!0,"consent-daily-6.sandbox.youtube.com":!0,"consent-autopush.sandbox.youtube.com":!0,"daily-0.consent.corp.youtube.com":!0,"daily-1.consent.corp.youtube.com":!0,"daily-2.consent.corp.youtube.com":!0,"daily-3.consent.corp.youtube.com":!0,
"daily-4.consent.corp.youtube.com":!0,"daily-5.consent.corp.youtube.com":!0,"daily-6.consent.corp.youtube.com":!0,"autopush.consent.corp.youtube.com":!0,"dev.consent.corp.youtube.com":!0,"consent-daily-0.sandbox.google.com":!0,"consent-daily-1.sandbox.google.com":!0,"consent-daily-2.sandbox.google.com":!0,"consent-daily-3.sandbox.google.com":!0,"consent-daily-4.sandbox.google.com":!0,"consent-daily-5.sandbox.google.com":!0,"consent-daily-6.sandbox.google.com":!0,"consent-autopush.sandbox.google.com":!0,
"daily-0.consent.corp.google.com":!0,"daily-1.consent.corp.google.com":!0,"daily-2.consent.corp.google.com":!0,"daily-3.consent.corp.google.com":!0,"daily-4.consent.corp.google.com":!0,"daily-5.consent.corp.google.com":!0,"daily-6.consent.corp.google.com":!0,"autopush.consent.corp.google.com":!0,"dev.consent.corp.google.com":!0};function Xg(a){a=cd(a);(a=Wg[a]&&Wg.hasOwnProperty(a))||(a=String(C("consent_url_override")||""));return a}
;var Yg=0,Zg=Ib?"webkit":Hb?"moz":Fb?"ms":Eb?"o":"";function $g(){var a=document;if("visibilityState"in a)return a.visibilityState;var b=Zg+"VisibilityState";if(b in a)return a[b]}
n("ytDomDomGetNextId",q("ytDomDomGetNextId")||function(){return++Yg},void 0);var ah={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function bh(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in ah||(this[b]=a[b]);this.rotation=a.rotation;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=
null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.b=a.pageX;this.f=a.pageY}}
function ch(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.b=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.f=a.clientY+b}}
bh.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
bh.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
bh.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var wb=q("ytEventsEventsListeners")||{};n("ytEventsEventsListeners",wb,void 0);var dh=q("ytEventsEventsCounter")||{count:0};n("ytEventsEventsCounter",dh,void 0);
function eh(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return vb(function(e){var f="boolean"==typeof e[4]&&e[4]==!!d,g;if(g=Fa(e[4])&&Fa(d))a:{g=e[4];for(var k in g)if(!(k in d)||g[k]!==d[k]){g=!1;break a}for(k in d)if(!(k in g)){g=!1;break a}g=!0}return!!e.length&&e[0]==a&&e[1]==b&&e[2]==
c&&(f||g)})}
function fh(a){a&&("string"==typeof a&&(a=[a]),t(a,function(a){if(a in wb){var b=wb[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?gh()||"boolean"==typeof b?d.removeEventListener(e,f,b):d.removeEventListener(e,f,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete wb[a]}}))}
var gh=Zb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function hh(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=eh(a,b,c,d);if(e)return e;e=++dh.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new bh(d);if(!Oc(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new bh(b);
b.currentTarget=a;return c.call(a,b)};
g=Ff(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),gh()||"boolean"==typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);wb[e]=[a,b,c,g,d];return e}
;function ih(a){this.ya=a;this.b=null;this.F=0;this.T=null;this.K=0;this.f=[];for(a=0;4>a;a++)this.f.push(0);this.C=0;this.xc=hh(window,"mousemove",Ka(this.kb,this));this.mb=Of(Ka(this.Ca,this),25)}
Na(ih,Vd);ih.prototype.kb=function(a){wa(a.b)||ch(a);var b=a.b;wa(a.f)||ch(a);this.b=new Gc(b,a.f)};
ih.prototype.Ca=function(){if(this.b){var a=z();if(0!=this.F){var b=this.T,c=this.b,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.F);this.f[this.C]=.5<Math.abs((d-this.K)/this.K)?1:0;for(c=b=0;4>c;c++)b+=this.f[c]||0;3<=b&&this.ya();this.K=d}this.F=a;this.T=this.b;this.C=(this.C+1)%4}};
ih.prototype.ia=function(){window.clearInterval(this.mb);fh(this.xc)};var jh={},kh=0;function lh(){t(B("ERRORS")||[],function(a){mh.apply(null,a)});
A("ERRORS",[])}
function mh(a,b,c,d,e,f){f=f||{};f.name=c||B("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||B("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=kh)){e=a.stacktrace;c=a.columnNumber;a.hasOwnProperty("params")&&(f.params=JSON.stringify(a.params).substr(0,500));d=q("window.location.href");if(xa(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:d,stack:"Not available"};
else{var g=!1;try{var k=a.lineNumber||a.line||"Not available"}catch(O){k="Not available",g=!0}try{var m=a.fileName||a.filename||a.sourceURL||l.$googDebugFname||d}catch(O){m="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:k,fileName:m,stack:a.stack||"Not available"}}e=e||a.stack;k=a.lineNumber.toString();isNaN(k)||isNaN(c)||(k=k+":"+c);if(!(jh[a.message]||0<=e.indexOf("/YouTubeCenter.js")||
0<=e.indexOf("/mytube.js"))){m=e;k={wc:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:k,level:b,"client.name":f.name},H:{url:B("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(k["client.version"]=f.version);m&&(k.H.stack=m);for(var p in f)k.H["client."+p]=f[p];if(p=B("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var D in p)k.H[D]=p[D];Ag(B("ECATCHER_REPORT_HOST","")+"/error_204",k);jh[a.message]=!0;kh++}}}
;var nh=Math.pow(2,16)-1,oh=null,ph=0,qh={log_event:"events",log_interaction:"interactions"},rh=Object.create(null);rh.log_event="GENERIC_EVENT_LOGGING";rh.log_interaction="INTERACTION_LOGGING";var sh=new Set(["log_event"]),th={},uh=0,vh=q("ytLoggingTransportLogPayloadsQueue_")||{};n("ytLoggingTransportLogPayloadsQueue_",vh,void 0);var wh=q("ytLoggingTransportTokensToCttTargetIds_")||{};n("ytLoggingTransportTokensToCttTargetIds_",wh,void 0);var xh=q("ytLoggingTransportDispatchedStats_")||{};
n("ytLoggingTransportDispatchedStats_",xh,void 0);var yh=q("ytLoggingTransportCapturedTime_")||{};n("ytytLoggingTransportCapturedTime_",yh,void 0);function zh(){window.clearTimeout(uh);if(!xb(vh)){for(var a in vh){var b=th[a];b&&(Ah(a,b),delete vh[a])}xb(vh)||Bh()}}
function Ch(){var a=[];for(e in vh){var b=xh[e]||{};xh[e]=b;for(var c in vh[e]){var d=Dh(e,c);b.storedEventsCount=b.storedEventsCount||0;b.storedEventsCount+=d.length}}var e=Math.round(z());for(var f in xh)b=xh[f],b.eventType=f in rh?rh[f]:"UNKNOWN_TYPE",c=yh[f],b.metricIntervalMs=c?e-c:e-NaN,a.push(b),yh[f]=e,delete xh[f];return a}
function Bh(){window.clearTimeout(uh);uh=Nf(zh,B("LOGGING_BATCH_TIMEOUT",1E4))}
function Dh(a,b){b=void 0===b?"":b;vh[a]=vh[a]||{};vh[a][b]=vh[a][b]||[];return vh[a][b]}
function Ah(a,b){var c=qh[a],d=xh[a]||{};xh[a]=d;var e=Math.round(z());for(p in vh[a]){var f=b.b;f={client:{hl:f.kc,gl:f.jc,clientName:f.ic,clientVersion:f.innertubeContextClientVersion}};var g=window.devicePixelRatio;g&&1!=g&&(f.client.screenDensityFloat=String(g));B("DELEGATED_SESSION_ID")&&!C("pageid_as_header_web")&&(f.user={onBehalfOfUser:B("DELEGATED_SESSION_ID")});f={context:f};f[c]=Dh(a,p);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(g=wh[p])a:{var k=
p;if(g.videoId)var m="VIDEO";else if(g.playlistId)m="PLAYLIST";else break a;f.credentialTransferTokenTargetId=g;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:k,scope:m}]}delete wh[p];f.requestTimeMs=e;if(g=B("EVENT_ID",void 0))m=(B("BATCH_CLIENT_COUNTER",void 0)||0)+1,m>nh&&(m=1),A("BATCH_CLIENT_COUNTER",m),g={serializedEventId:g,clientCounter:m},f.serializedClientEventId=g,oh&&ph&&C("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:oh,
roundtripMs:ph}),oh=g,ph=0;Eh(b,a,f,{retry:sh.has(a),onSuccess:Fh.bind(this,z())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var p=d.diffCount||0;d.averageTimeBetweenDispatchesMs=p?(d.averageTimeBetweenDispatchesMs*p+c)/(p+1):c;d.diffCount=p+1}d.previousDispatchMs=e}
function Fh(a){ph=Math.round(z()-a)}
;function Gh(){}
function Hh(a,b){Ih(a,1,b)}
;function Jh(){}
qa(Jh,Gh);function Ih(a,b,c){isNaN(c)&&(c=void 0);var d=q("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Nf(a,c||0)}
function Kh(a){if(!isNaN(a)){var b=q("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}
Jh.prototype.start=function(){var a=q("yt.scheduler.instance.start");a&&a()};
Aa(Jh);Jh.da();var Lh={};
function Mh(a){var b=void 0===a?{}:a;a=void 0===b.Ua?!0:b.Ua;b=void 0===b.ab?!1:b.ab;if(null==q("_lact",window)){var c=parseInt(B("LACT"),10);c=isFinite(c)?Ma()-Math.max(c,0):-1;n("_lact",c,window);n("_fact",c,window);-1==c&&Nh();hh(document,"keydown",Nh);hh(document,"keyup",Nh);hh(document,"mousedown",Nh);hh(document,"mouseup",Nh);a&&(b?hh(window,"touchmove",function(){Oh("touchmove",200)},{passive:!0}):(hh(window,"resize",function(){Oh("resize",200)}),hh(window,"scroll",function(){Oh("scroll",200)})));
new ih(function(){Oh("mouse",100)});
hh(document,"touchstart",Nh,{passive:!0});hh(document,"touchend",Nh,{passive:!0})}}
function Oh(a,b){Lh[a]||(Lh[a]=!0,Hh(function(){Nh();Lh[a]=!1},b))}
function Nh(){null==q("_lact",window)&&Mh();var a=Ma();n("_lact",a,window);-1==q("_fact",window)&&n("_fact",a,window);(a=q("ytglobal.ytUtilActivityCallback_"))&&a()}
function Ph(){var a=q("_lact",window);return null==a?-1:Math.max(Ma()-a,0)}
;function Qh(a,b,c,d){var e=Rh,f={};f.eventTimeMs=Math.round(c||z());f[a]=b;f.context={lastActivityMs:String(c?-1:Ph())};d?(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),wh[d.token]=a,d=Dh("log_event",d.token)):d=Dh("log_event");d.push(f);th.log_event=new e;d.length>=(ig("web_logging_max_batch")||20)?zh():Bh()}
;function Sh(a,b){var c={"X-Goog-Visitor-Id":B("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return c;if(a)var d="Bearer "+q("gapi.auth.getToken")().Nc;else a:{d=[];var e=Ad(String(l.location.href)),f=l.__OVERRIDE_SID;null==f&&(f=(new Vb(document)).get("SID"));if(f&&(e=(f=0==e.indexOf("https:")||0==e.indexOf("chrome-extension:"))?l.__SAPISID:l.__APISID,null==e&&(e=(new Vb(document)).get(f?"SAPISID":"APISID")),e)){f=f?"SAPISIDHASH":"APISIDHASH";var g=String(l.location.href);d=g&&
e&&f?[f,Cd(Ad(g),e,d||null)].join(" "):null;break a}d=null}d&&(c.Authorization=d,c["X-Goog-AuthUser"]=B("SESSION_INDEX",0),C("pageid_as_header_web")&&(c["X-Goog-PageId"]=B("DELEGATED_SESSION_ID")));return c}
;function Th(a){var b=new Me;(b=b.isAvailable()?a?new Se(b,a):b:null)||(a=new Ne(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.b=(a=b)?new Ie(a):null;this.f=document.domain||window.location.hostname}
Th.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.b)try{this.b.set(a,b,Ma()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(ee(b))}catch(f){return}else e=escape(b);Vg(a,e,c,this.f)};
Th.prototype.get=function(a,b){var c=void 0,d=!this.b;if(!d)try{c=this.b.get(a)}catch(e){d=!0}if(d&&(c=Wb.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Th.prototype.remove=function(a){this.b&&this.b.remove(a);var b=this.f;Wb.remove(""+a,"/",void 0===b?"youtube.com":b)};new Th("yt.innertube");function Rh(a){this.b=a||{innertubeApiKey:B("INNERTUBE_API_KEY",void 0),innertubeApiVersion:B("INNERTUBE_API_VERSION",void 0),ic:B("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:B("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),kc:B("INNERTUBE_CONTEXT_HL",void 0),jc:B("INNERTUBE_CONTEXT_GL",void 0),lc:B("INNERTUBE_HOST_OVERRIDE",void 0)||"",mc:!!B("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}}
function Eh(a,b,c,d){!B("VISITOR_DATA")&&.01>Math.random()&&Gf(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");c={headers:{"Content-Type":"application/json"},method:"POST",H:c,Za:"JSON",ea:function(){d.ea()},
Ya:d.ea,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
Sc:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
Rc:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0};var e="",f=a.b.lc;f&&(e=f);f=Sh(a.b.mc||!1,e);Object.assign(c.headers,f);c.headers.Authorization&&!e&&(c.headers["x-origin"]=window.location.origin);a=""+e+("/youtubei/"+a.b.innertubeApiVersion+"/"+b)+"?alt=json&key="+a.b.innertubeApiKey;try{C("use_fetch_for_op_xhr")?xg(a,c):Gg(a,c)}catch(g){if("InvalidAccessError"==g)Gf(Error("An extension is blocking network request."),"WARNING");else throw g;}}
;function Uh(){C("log_web_meta")&&Ch().forEach(function(a){Qh("delayedEventMetricCaptured",a,void 0,void 0)})}
;function Vh(a){this.b=a}
function Wh(a){return new Vh({trackingParams:a})}
function Xh(a){var b={};void 0!==a.b.trackingParams?b.trackingParams=a.b.trackingParams:(b.veType=a.b.veType,null!=a.b.veCounter&&(b.veCounter=a.b.veCounter),null!=a.b.elementIndex&&(b.elementIndex=a.b.elementIndex));void 0!==a.b.dataElement&&(b.dataElement=Xh(a.b.dataElement));void 0!==a.b.youtubeData&&(b.youtubeData=a.b.youtubeData);return b}
;function Yh(a,b){t(b,function(b){Qh("visualElementShown",{csn:a,ve:Xh(b),eventType:1})})}
function Zh(a,b){t(b,function(b){Qh("visualElementShown",{csn:a,ve:Xh(b),eventType:4})})}
function $h(a,b){t(b,function(b){Qh("visualElementHidden",{csn:a,ve:Xh(b),eventType:8})})}
;var ai=q("ytLoggingLatencyUsageStats_")||{};n("ytLoggingLatencyUsageStats_",ai,void 0);var bi=0;function ci(a,b){var c=Object.keys(a).join("");di("info_"+c+"_"+b)||(a.clientActionNonce=b,Qh("latencyActionInfo",a,void 0,void 0))}
function di(a){ai[a]=ai[a]||{count:0};var b=ai[a];b.count++;b.time=z();bi||(bi=Ih(ei,0,5E3));return 10<b.count?(11==b.count&&mh(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1}
function ei(){var a=z(),b;for(b in ai)6E4<a-ai[b].time&&delete ai[b];bi=0}
;var fi=Ma().toString();
function gi(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Ma();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(fi)for(a=1,b=0;b<fi.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^fi.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var hi=!1,ii=[],ji=gi(),ki=0,li=null,mi=null;function ni(){if("hidden"==$g())var a="FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND";else"visible"==$g()&&(a="FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND",li=null);a&&oi(a)}
function oi(a){if("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"==a||"FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND"==a){if(mi==a)return;mi=a}var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(Ph()>b)&&"visible"==$g()){b=-1;li&&(b=Math.round(z()-li));var c=String;var d=q("_fact",window);d=null==d||-1==d?-1:Math.max(Ma()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:ji,index:String(ki),lastEventDeltaMs:String(b),trigger:a};Qh("foregroundHeartbeat",a);n("_fact",-1,window);
ki++;li=z()}}
function qi(a){a&&Qh("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:ji,clientScreenNonce:a})}
;function ri(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function si(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
n("yt.logging.screen.getRootVeType",function(a){return B(si(void 0===a?0:a),void 0)},void 0);
function ti(a){a=void 0===a?0:a;var b=B(ri(a));b||0!=a||(b=B("EVENT_ID"));return b?b:null}
n("yt.logging.screen.getCurrentCsn",ti,void 0);function ui(a,b,c){c=void 0===c?0:c;A(ri(c),a);A(si(c),b);0==c&&(b=function(){setTimeout(function(){qi(a)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())}
n("yt.logging.screen.setCurrentScreen",ui,void 0);function vi(a,b){b=void 0===b?null:b;var c={youThereEventType:a};b||(b=ti());b&&(c.clientScreenNonce=b);Qh("youThere",c,void 0,void 0)}
;var wi=0;var xi=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};n("yt.msgs_",xi,void 0);function E(a){var b=void 0===b?{}:b;a=(a=a in xi?xi[a]:void 0)||"";var c={},d;for(d in b)c.la=d,a=a.replace(new RegExp("\\$"+c.la,"gi"),function(a){return function(){return b[a.la]}}(c)),c={la:c.la};
return a}
;var yi=Tb||Ub;var zi={},Ai=0;
function Bi(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=qb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(b=pc(rc(a)),"about:invalid#zClosurez"===b?a="":(b instanceof wc?a=b:(d="object"==typeof b,a=null,d&&b.va&&(a=b.ua()),b=hb(d&&b.J?b.G():String(b)),a=zc(b,a)),a=yc(a),a=encodeURIComponent(String(ee(a)))),/^[\s\xa0]*$/.test(a)||(a=Kc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),Mc(a).body.appendChild(a))):e?Bg(a,b,"POST",e,d):B("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||
d?Bg(a,b,"GET","",d):Ci(a,b))}
function Di(a){if(a)for(var b=0;b<a.length;b++)Bi(a[b],void 0,void 0)}
function Ci(a,b){var c=new Image,d=""+Ai++;zi[d]=c;c.onload=c.onerror=function(){b&&zi[d]&&b();delete zi[d]};
c.src=a}
;var Ei;var Fi=qb,Gi=Fi.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!Gi||2>Gi.length)Ei=void 0;else{var Hi=Fi.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);Ei=Hi&&6==Hi.length?Number(Hi[5].replace("_",".")):0}var Ii=Ei,Ji=0<=Ii;Ji&&0<=qb.search("Safari")&&qb.search("Version");function Ki(){}
var Li=Ji&&4>Ii?.1:0,Mi=new Ki;Ki.prototype.b=null;Ki.prototype.f=function(){this.hasAttribute("controls")&&this.setAttribute("controls","true")};function Ni(){this.b=[];this.f=[];this.g=[]}
Aa(Ni);var Oi=q("ytPlayerUtilsVideoTagPoolInstance")||Ni.da();n("ytPlayerUtilsVideoTagPoolInstance",Oi,void 0);h=Ni.prototype;h.Sa=function(a){if(!(this.b.length>=a)){a-=this.b.length;for(var b=0;b<a;b++)Pi(this)}};
function Pi(a,b,c){c=document.createElement(String(c?"AUDIO":"VIDEO"));for(var d in Mi)c[d]=Mi[d];hh(c,"loadeddata",Ka(c.f,c));Tb&&6<=Ii&&hh(c,"webkitbeginfullscreen",Ka(c.play,c));a.f.push(c);b?a.g.push(c):Qi(a,c);return c}
function Qi(a,b){0<=Sa(a.f,b)&&!(0<=Sa(a.b,b))&&(b.src||b.load(),Za(a.g,b)||a.b.push(b))}
h.Zb=function(a,b){if(this.b.length)return this.b.pop();var c=Pi(this,a,b);a||Za(this.b,c);return c};
h.sc=function(a){if(a&&0<=Sa(this.f,a)){a.src&&(yi&&0<a.readyState&&(a.currentTime=Math.max(Li,0)),a.removeAttribute("src"),a.load(),!a.b||!a.b.b()||a.b&&a.b.f(null)||(a.b&&a.b.dispose(),a.b=null));for(var b in wb)wb[b][0]==a&&fh(b);Za(this.f,a);Za(this.g,a)}};
h.fc=function(a){return this.b.length>=(a||1)};
h.Rb=function(){for(var a=this.g.length-1;0<=a;a--)Qi(this,this.g[a]);this.b.length==this.f.length&&4<=this.b.length||(4>this.f.length?this.Sa(4):(this.b=[],t(this.f,function(a){Qi(this,a)},this)))};
Ni.prototype.fillPool=Ni.prototype.Sa;Ni.prototype.getTag=Ni.prototype.Zb;Ni.prototype.releaseTag=Ni.prototype.sc;Ni.prototype.hasTags=Ni.prototype.fc;Ni.prototype.activateTags=Ni.prototype.Rb;var Ri=q("ytglobal.prefsUserPrefsPrefs_")||{};n("ytglobal.prefsUserPrefsPrefs_",Ri,void 0);function Si(){this.b=B("ALT_PREF_COOKIE_NAME","PREF");var a=Wb.get(""+this.b,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Ri[d]=c.toString())}}}
h=Si.prototype;h.get=function(a,b){Ti(a);Ui(a);var c=void 0!==Ri[a]?Ri[a].toString():null;return null!=c?c:b?b:""};
h.set=function(a,b){Ti(a);Ui(a);if(null==b)throw Error("ExpectedNotNull");Ri[a]=b.toString()};
function Vi(){Si.da();return!!((Wi("f"+(Math.floor(140/31)+1))||0)&65536)}
h.remove=function(a){Ti(a);Ui(a);delete Ri[a]};
h.save=function(){Vg(this.b,this.dump(),63072E3)};
h.clear=function(){for(var a in Ri)delete Ri[a]};
h.dump=function(){var a=[],b;for(b in Ri)a.push(b+"="+encodeURIComponent(String(Ri[b])));return a.join("&")};
function Ui(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Ti(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Wi(a){a=void 0!==Ri[a]?Ri[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
function Xi(a,b,c){var d=Wi(a)||0;d=c?d|b:d&~b;0==d?delete Ri[a]:Ri[a]=d.toString(16).toString()}
Aa(Si);function Yi(a,b){this.version=a;this.args=b}
;function Zi(a){this.topic=a}
Zi.prototype.toString=function(){return this.topic};var $i=q("ytPubsub2Pubsub2Instance")||new v;v.prototype.subscribe=v.prototype.Ta;v.prototype.unsubscribeByKey=v.prototype.qa;v.prototype.publish=v.prototype.cb;v.prototype.clear=v.prototype.clear;n("ytPubsub2Pubsub2Instance",$i,void 0);n("ytPubsub2Pubsub2SubscribedKeys",q("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);n("ytPubsub2Pubsub2TopicToKeys",q("ytPubsub2Pubsub2TopicToKeys")||{},void 0);n("ytPubsub2Pubsub2IsAsync",q("ytPubsub2Pubsub2IsAsync")||{},void 0);
n("ytPubsub2Pubsub2SkipSubKey",null,void 0);function aj(a,b){var c=q("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;function bj(a,b,c){a="ST-"+pb(a).toString(36);b=b?fd(b):"";Vg(a,b,c||5)}
;var cj=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function dj(a){if(cj.getEntriesByType){var b=cj.getEntriesByType("paint");if(b=Xa(b,function(a){return"first-paint"==a.name}))return Math.round(a.navigationStart+b.startTime)}if(a.msFirstPaint)return Math.max(0,a.msFirstPaint);
if(b=window.chrome)if(b=b.loadTimes,Ea(b)){b=b();var c=1E3*Math.min(b.requestTime||Infinity,b.startLoadTime||Infinity);c=Infinity===c?0:a.navigationStart-c;return Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0)}return 0}
;var ej={};function fj(){var a=B("TIMING_TICK_EXPIRATION");a||(a={},A("TIMING_TICK_EXPIRATION",a));return a}
function gj(){var a=fj(),b;for(b in a)Kh(a[b]);A("TIMING_TICK_EXPIRATION",{})}
;function hj(a,b){Yi.call(this,1,arguments)}
qa(hj,Yi);function ij(a,b){Yi.call(this,1,arguments)}
qa(ij,Yi);var jj=new Zi("aft-recorded"),kj=new Zi("timing-sent");var lj={vc:!0},mj={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_selective_initialization_home"]':"dpsihh",'link[rel="import"][name="desktop_polymer_selective_initialization_watch"]':"dpsiwh",'link[rel="import"][name="desktop_polymer_sel_auto_home"]':"dpsahh",
'link[rel="import"][name="desktop_polymer_sel_auto_watch"]':"dpsawh",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-phone/base"]':"mcppj",'script[name="player-plasma-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",
'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"},F={},nj=(F.ad_allowed="adTypesAllowed",F.yt_abt="adBreakType",F.ad_cpn="adClientPlaybackNonce",F.ad_docid="adVideoId",F.yt_ad_an="adNetworks",F.ad_at="adType",F.p="httpProtocol",F.t="transportProtocol",F.cpn="clientPlaybackNonce",F.csn="clientScreenNonce",F.docid=
"videoId",F.is_nav="isNavigation",F.yt_lt="loadType",F.yt_ad="isMonetized",F.nr="webInfo.navigationReason",F.ncnp="webInfo.nonPreloadedNodeCount",F.paused="playerInfo.isPausedOnLoad",F.fmt="playerInfo.itag",F.yt_pl="watchInfo.isPlaylist",F.yt_ad_pr="prerollAllowed",F.yt_red="isRedSubscriber",F.st="serverTimeMs",F.vph="viewportHeight",F.vpw="viewportWidth",F.yt_vis="isVisible",F),oj="ap c cver ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),
pj={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS",channel:"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.copyright":"LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT","channel.monetization":"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION","channel.translations":"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS","channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",
embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",prebuffer:"LATENCY_ACTION_PREBUFFER",prefetch:"LATENCY_ACTION_PREFETCH",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",tenx:"LATENCY_ACTION_TENX",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH","watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH",
wn_comments:"LATENCY_ACTION_LOAD_COMMENTS","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS","video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT","video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS","video.video_editor":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR","video.video_editor_async":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC"},qj="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),
rj=!1;function sj(a){tj(a);uj();vj(!1,a);a||(B("TIMING_ACTION")&&A("PREVIOUS_ACTION",B("TIMING_ACTION")),A("TIMING_ACTION",""))}
function G(a,b,c){if(!b&&"_"!=a[0]){var d=a;cj.mark&&(eb(d,"mark_")||(d="mark_"+d),c&&(d+=" ("+c+")"),cj.mark(d))}d=wj(c);var e=b||z();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;d=fj();if(e=d[a])Kh(e),d[a]=0;xj(a,b,c)||yj(c)}
function zj(a){Aj("yt_sts","n",void 0);G("_start",a,void 0)}
function Aj(a,b,c){Bj(c)[a]=b;Cj(a,b,c)}
function Dj(a){var b=wj(a);if(b.aft)return b.aft;a=B((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function yj(a){if(!Ej(a)){var b=B((a||"")+"TIMING_ACTION",void 0),c=wj(a);if(q("ytglobal.timing"+(a||"")+"ready_")&&b&&c._start&&(b=Dj(a)))if(rj||(aj(jj,new hj(Math.round(b-c._start),a)),rj=!0),a)Fj(a);else{b=!0;var d=B("TIMING_WAIT",[]);if(d.length)for(var e=0,f=d.length;e<f;++e)if(!(d[e]in c)){b=!1;break}b&&Fj(a)}}}
function Gj(){switch($g()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1}
function Hj(a){if(!Ej(void 0)){var b=B("CSI_SERVICE_NAME","youtube");B("TIMING_ACTION",void 0)&&b&&(G("aa",void 0,void 0),Aj("ap",1,void 0),Aj("yt_fss",a,void 0),Fj(void 0))}}
var uj=Ka(cj.clearResourceTimings||cj.webkitClearResourceTimings||cj.mozClearResourceTimings||cj.msClearResourceTimings||cj.oClearResourceTimings||r,cj);function xj(a,b,c){Ij(c)["tick_"+a]=b;c||b||z();return Jj(c)?(c=Kj(c),"_start"==a?di("baseline_"+c)||Qh("latencyActionBaselined",{clientActionNonce:c},b,void 0):di("tick_"+a+"_"+c)||Qh("latencyActionTicked",{tickName:a,clientActionNonce:c},b,void 0),!0):!1}
function Cj(a,b,c){Ij(c)["info_"+a]=b;if(Jj(c))if(a in nj){var d=nj[a];0<=Sa(qj,d)&&(b=!!b);a=b;if(Jj(c)){b={};d=d.split(".");for(var e=b,f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];e[d[d.length-1]]=a;c=Kj(c);ci(b,c)}}else 0<=Sa(oj,a)||Gf(Error("Unknown label "+a+" logged with GEL CSI."))}
function Lj(a){return Math.round(cj.timing.navigationStart+a)}
function Mj(){var a=window.location.protocol,b=cj.getEntriesByType("resource");b=Ta(b,function(b){return 0==b.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=Va(b,function(a,b){return b.duration>a.duration?b:a},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(G("wffs",Lj(b.startTime)),G("wffe",Lj(b.responseEnd)))}
function Nj(a,b){var c=document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=cj.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,G("rsf_"+b,d+Math.round(c.fetchStart)),G("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&("rc"in Bj(void 0)||Aj("rc",""),0===c.transferSize))?!0:!1:!1}
function Oj(a){n("ytglobal.timingready_",a,void 0)}
function Kj(a){var b=Pj(a).nonce;b||(b=gi(),Pj(a).nonce=b);return b}
function wj(a){return Pj(a).tick}
function Bj(a){return Pj(a).info}
function Ij(a){a=Pj(a);"gel"in a||(a.gel={});return a.gel}
function Pj(a){return q("ytcsi."+(a||"")+"data_")||tj(a)}
function tj(a){var b={tick:{},info:{}};n("ytcsi."+(a||"")+"data_",b,void 0);return b}
function Ej(a){return!!q("yt.timing."+(a||"")+"pingSent_")}
function vj(a,b){n("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Qj(a){var b=wj(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==Bj(a).yt_pvis}
function Jj(a){return!!C("csi_on_gel")||!!Pj(a).useGel}
var Rj=Aj;function Fj(a){gj();if(!Jj(a)){var b=wj(a),c=Bj(a),d=b._start;for(g in b)if(eb(g,"_")&&Ca(b[g])){var e=g.slice(1);if(e in lj){var f=Ua(b[g],function(a){return Math.round(a-d)});
c["all_"+e]=f.join()}delete b[g]}var g=!!c.ap;if(e=q("ytglobal.timingReportbuilder_")){if(b=e(b,c,a))Sj(b,g),sj(a)}else{var k=B("CSI_SERVICE_NAME","youtube");e={v:2,s:k,action:B((a||"")+"TIMING_ACTION",void 0)};f=Aj.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var m=window.location.protocol+q("ytplayer.config.assets.js");(m=cj.getEntriesByName?cj.getEntriesByName(m)[0]:null)?c.h5jse=Math.round(c.h5jse-m.responseEnd):delete c.h5jse}b.aft=Dj(a);Qj(a)&&"youtube"==k&&(Aj("yt_lt","hot_bg",a),k=b.vc,m=
b.pbs,delete b.aft,c.aft=Math.round(m-k));for(var p in c)"_"!=p.charAt(0)&&(e[p]=c[p]);b.ps=z();c={};p=[];for(var D in b)"_"!=D.charAt(0)&&(k=Math.round(b[D]-d),c[D]=k,p.push(D+"."+k));e.rt=p.join(",");(b=q("ytdebug.logTiming"))&&b(e,c);Sj(e,g,a);aj(kj,new ij(c.aft+(f||0),a))}}}
function Sj(a,b,c){if(C("debug_csi_data")){var d=q("yt.timing.csiData");d||(d=[],n("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||Bi(a,void 0,void 0,void 0,f)}catch(g){Bi(a,void 0,void 0,void 0,f)}}else Bi(a);vj(!0,c)}
;function Tj(a){a=[(a&16711680)>>>16,(a&65280)>>>8,a&255,(a&4278190080)>>>24];var b=Wa(a,function(a){return a==(a&255)});
a[3]=(a[3]/255).toFixed(3);if(!b)throw Error('"('+a.join(",")+'") is not a valid RGBA color');return"rgba("+a.join(",")+")"}
;function Uj(a){if("1"!==ub(B("PLAYER_CONFIG",{}),"args","privembed")){a&&!q("yt.ads.biscotti.getId_")&&n("yt.ads.biscotti.getId_",Pg,void 0);try{Ug().then(function(a){var b={};b.dt=zd;b.flash="0";a:{try{var d=window.top.location.href}catch(Pc){d=2;break a}d=null!=d?d==window.document.location.href?0:1:2}b=(b.frm=d,b);b.u_tz=-(new Date).getTimezoneOffset();var e=void 0===e?Pa:e;try{var f=e.history.length}catch(Pc){f=0}b.u_his=f;b.u_java=!!Pa.navigator&&"unknown"!==typeof Pa.navigator.javaEnabled&&
!!Pa.navigator.javaEnabled&&Pa.navigator.javaEnabled();Pa.screen&&(b.u_h=Pa.screen.height,b.u_w=Pa.screen.width,b.u_ah=Pa.screen.availHeight,b.u_aw=Pa.screen.availWidth,b.u_cd=Pa.screen.colorDepth);Pa.navigator&&Pa.navigator.plugins&&(b.u_nplug=Pa.navigator.plugins.length);Pa.navigator&&Pa.navigator.mimeTypes&&(b.u_nmime=Pa.navigator.mimeTypes.length);b.ca_type="image";if(C("enable_server_side_search_pyv")||C("enable_server_side_mweb_search_pyv")){f=window;try{var g=f.screenX;var k=f.screenY}catch(Pc){}try{var m=
f.outerWidth;var p=f.outerHeight}catch(Pc){}try{var D=f.innerWidth;var O=f.innerHeight}catch(Pc){}g=[f.screenLeft,f.screenTop,g,k,f.screen?f.screen.availWidth:void 0,f.screen?f.screen.availTop:void 0,m,p,D,O];k=window.top;try{var M=(k||window).document,oa="CSS1Compat"==M.compatMode?M.documentElement:M.body;var gc=(new Hc(oa.clientWidth,oa.clientHeight)).round()}catch(Pc){gc=new Hc(-12245933,-12245933)}M={};oa=new Ve;l.SVGElement&&l.document.createElementNS&&oa.set(0);k=Zc();k["allow-top-navigation-by-user-activation"]&&
oa.set(1);k["allow-popups-to-escape-sandbox"]&&oa.set(2);oa=We(oa);gc=(M.bc=oa,M.bih=gc.height,M.biw=gc.width,M.brdim=g.join(),M.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[Oa.visibilityState||Oa.webkitVisibilityState||Oa.mozVisibilityState||""]||0,M.wgl=!!Pa.WebGLRenderingContext,M);for(var pi in gc)b[pi]=gc[pi]}b.bid=a;b.bsq=Vj++;Gg("/ad_data_204",{gc:!0,H:b,withCredentials:!0})},function(){}),Nf(Uj,18E5)}catch(b){Gf(b)}}}
var Vj=0;var Wj=new Th("yt.autonav");function Xj(){if(this.constructor===Xj)throw new TypeError("VisibilityObserver cannot be instantiated directly.");}
Xj.prototype.dispose=function(){};
Xj.prototype.observe=function(){};
Xj.prototype.pa=function(){};function Yj(a,b){b=void 0===b?0:b;Xj.call(this);this.f=new IntersectionObserver(this.cc.bind(this),a?{root:a,rootMargin:"-0.1px"}:{rootMargin:"-0.1px"});var c="-0.1px -0.1px "+b+"px -0.1px";this.g=new IntersectionObserver(this.dc.bind(this),a?{root:a,rootMargin:c}:{rootMargin:c});this.b=new Map}
qa(Yj,Xj);h=Yj.prototype;h.dispose=function(){this.f.disconnect();this.g.disconnect();this.b.clear()};
h.cc=function(a){var b=this;a.forEach(function(a){var c=b.b.get(a.target);if(c){var e=a.isIntersecting;c=ia(c);for(var f=c.next();!f.done;f=c.next()){var g=ia(f.value);f=g.next().value;g=g.next().value;if("visible"==f.state&&e||"hidden"==f.state&&!e)g(a.target,f.state),f.ha&&b.pa({element:a.target,option:f})}}})};
h.dc=function(a){var b=this;a.forEach(function(a){var c=b.b.get(a.target);if(c&&a.isIntersecting){c=ia(c);for(var e=c.next();!e.done;e=c.next()){var f=ia(e.value);e=f.next().value;f=f.next().value;"prescan"==e.state&&(f(a.target,e.state),e.ha&&b.pa({element:a.target,option:e}))}}})};
h.observe=function(a,b,c){var d=(d=this.b.get(a))&&d.has(c)?{element:a,option:c}:void 0;if(d)return d;d={element:a,option:c};this.b.has(a)||this.b.set(a,new Map);var e=this.b.get(a);e.has(c)||e.set(c,b);"prescan"==c.state&&this.g.observe(a);this.f.observe(a);return d};
h.pa=function(a){var b=this.b.get(a.element);b&&b.has(a.option)&&(b["delete"](a.option),"prescan"==a.option&&this.g.unobserve(a.element),0==b.size&&(this.b["delete"](a.element),this.f.unobserve(a.element)))};var Zj={};var ak=[];function bk(){var a=ak.slice();ak.length=0;a.forEach(function(a){try{a()}catch(c){ne(c)}})}
function H(a){0==ak.length&&requestAnimationFrame(function(){setTimeout(bk)});
ak.push(a)}
;var ck=Object.freeze?Object.freeze(Object.create(null)):{};function dk(a,b,c,d){a[b]!=c&&(a[b]=c,d())}
function I(a){try{return a()}catch(b){return null}}
var ek=window.requestIdleCallback||function(a){H(function(){return setTimeout(a,500)})};var fk=!1;function gk(){var a=Zj.response.playerResponse;return I(function(){return a.attestation.playerAttestationRenderer.botguardData})}
function hk(){var a=gk();a&&setTimeout(function(){a.program&&A({BG_P:a.program});a.interpreterUrl&&A({BG_IU:a.interpreterUrl});a.b&&A({BG_I:a.b});var b=q("yt.abuse.player.invokeBotguard")||og;n("yt.abuse.player.botguardInitialized",q("yt.abuse.player.botguardInitialized")||ng,void 0);n("yt.abuse.player.invokeBotguard",b,void 0);b=B("BG_P",void 0);mg(b)&&(B("BG_I")||B("BG_IU"))&&(jg=!0,eg(b))},1E3)}
function ik(a){1!=a.detail.state||fk||(fk=!0,hk())}
function jk(){hk()}
function kk(){fk=!1}
;var J={Fa:E("AD_BADGE_TEXT"),Ea:E("ADD_TO_DROPDOWN_LABEL"),lb:E("AUTONAV_TOGGLE"),ra:E("CANCEL"),nb:E("CHANNEL_SWITCHER_LABEL"),ob:E("CLOSE_SEARCH_LABEL"),Ga:E("CONFIRM_OK"),pb:E("COPIED_TO_CLIPBOARD"),Ha:E("COPY_DEBUG_INFO"),qb:E("FLAG_CONFIRM"),rb:E("FLAG_CONTENT"),sb:E("FLAG_LABEL"),tb:E("FLAG_TITLE"),ub:E("HOME"),vb:E("INVALID_RESPONSE_RECEIVED"),Jb:E("PLAYLIST_NAME_MISSING"),Kb:E("PLAYLIST_NAME_TOO_LONG"),Ib:E("PLAYLIST_NAME_INVALID_CHARACTERS"),wb:E("MENU_DESKTOP"),xb:E("MENU_EXIT"),yb:E("MENU_FEEDBACK"),
zb:E("MENU_HELP"),Ab:E("MENU_IMPRESSUM"),Bb:E("MENU_NETZDG"),Cb:E("MENU_SETTINGS"),Db:E("MENU_SIGN_IN"),Eb:E("MENU_TERMS"),Fb:E("MORE_OPTIONS"),Gb:E("NEXT_VIDEO"),Jc:E("NOTIFICATION_ERROR_MESSAGE"),Hb:E("OPEN_APP"),Lb:E("PREVIOUS_VIDEO"),Mb:E("SEARCH_LABEL"),Nb:E("SETTINGS_LABEL"),W:E("SIGN_IN_LABEL")};var lk=B("PAGE_BUILD_LABEL",void 0),mk=B("SBOX_JS_URL",void 0),nk=B("SBOX_SETTINGS"),ok=B("SHOW_OPEN_APP_BUTTON");var pk=document.getElementById("theme-meta"),qk=document.getElementById("app"),rk=document.getElementById("player");function K(){return window.location}
;function sk(a){var b=document.createElement("A");Ac(b,a);return b}
function tk(a){a=sk(a).pathname;return eb(a,"/")?a:"/"+a}
;function uk(a){a=tk(a);return"/"==a?3:eb(a,"/results")?1:eb(a,"/watch")?2:eb(a,"/user/")||eb(a,"/channel/")?4:eb(a,"/experiments")?5:0}
;var vk=Te.da();function wk(){this.b=""}
wk.prototype.toString=function(){return this.b};
function xk(a){var b=new wk;a=dc(a);var c=":"+(vk.b++).toString(36);b.b=a+c;return b}
;var yk={},zk=(yk[1]={filter:null,I:null,L:null},yk[2]={filter:function(a,b,c){return hb(c)},
I:wc,L:yc},yk[3]={filter:function(a,b,c){return rc(c).G()},
I:nc,L:pc},yk[4]={filter:function(){return"about:invalid#zClosurez"},
I:ic,L:lc},yk[5]={filter:function(){return"zClosurez"},
I:uc,L:function(a){return a instanceof uc&&a.constructor===uc&&a.b===vc?"":"type_error:SafeStyle"}},yk[7]={filter:function(){return" /*zClosurez*/ "},
I:fc,L:function(a){return a instanceof fc&&a.constructor===fc&&a.b===hc?"":"type_error:SafeScript"}},yk[8]={filter:function(a,b,c){c=String(c).toLowerCase();
a:{var d=null;(a=Cf[a])&&(d=a[b]);if("number"!=typeof d&&((a=Cf["*"])&&(d=a[b]),"number"!=typeof d)){b=!1;break a}b=!0===Bf[d][String(c).toLowerCase()]}return b?c:"zClosurez"},
I:null,L:null},yk[9]={filter:function(){return" /*zClosurez*/ "},
I:ac,L:dc},yk[10]={filter:function(a,b,c){return"id"!=b&&"name"!=b||""==c?String(c):"zClosurez"},
I:wk,L:function(a){if(!(a instanceof wk&&a.constructor===wk))throw Error("Unwrap non-TrustedId");return a.b}},yk);
function Ak(a,b,c){if(null==c)return c;var d=yf(a.tagName,b,function(){throw Error("Contingent attribute/property lookups are not supported.");});
if(null==d)return c;d=zk[d];if(d.I&&c instanceof d.I)return d.L(c);if(d.I==wk&&c instanceof ac)return dc(c);c=c&&c.J?c.G():c;return d.filter?d.filter(a.tagName,b,String(c)):c}
;af[Xe["default"]]=function(a,b,c){var d="$"!=b[b.length-1];c=Ak(a,b,c);d?a[b]=c:$e(a,b.slice(0,-1),null==c?null:String(c))};
function Bk(a,b){var c=b&&b.key,d=mf;d[0]=a;d[1]=c;d[2]=void 0;for(var e in b)c=b[e],d=mf,d.push(e),d.push(c);e=mf;for(xf.apply(null,e);0<e.length;)e.pop()}
function Ck(a,b){a?b():vf()}
function Dk(a,b){var c=x;c._playlistPanelVideoData==a?vf():(c._playlistPanelVideoData=a,b())}
;function L(a,b,c){c=void 0===c?r:c;Bk(a,b);c(x);of()}
function Ek(a){var b=String(a).toLowerCase();return function(a,d){L(b,a,d)}}
var Fk=Ek("A"),Gk=Ek("BUTTON"),N=Ek("DIV"),Hk=Ek("FORM"),Ik=Ek("H1"),Jk=Ek("H2"),Kk=Ek("H3"),Lk=Ek("H4"),Mk=Ek("HEADER"),Nk=Ek("IMG"),Ok=Ek("INPUT"),Pk=Ek("LABEL"),Qk=Ek("OPTION"),Rk=Ek("P"),Sk=Ek("SELECT"),P=Ek("SPAN"),Tk=Ek("TEXTAREA");var Uk=J.Hb;function Vk(){2==uk(K().href)&&Gk({className:"open-app-button",onclick:Wk},function(a){H(function(){Xk(a)});
N({className:"open-app-button-inner"},function(){y(Uk)})})}
function Xk(a){C("mweb_webview_open_app_logging")&&dk(a,"_seenBool",!0,function(){Bi("/gen_204?action=c3_open_app_impression",void 0)})}
function Wk(){var a=K();var b=C("mweb_webview_open_app_logging")?kc(mc(dc(ec("/redirect_deep_link"))),{v:jd(location.href,"v"),feature:"mweb_c3_open_app"}):kc(mc(dc(ec("http://m.youtube.com/watch"))),{v:jd(location.href,"v"),feature:"mweb_c3_open_app",itc_campaign:"mweb_c3_open_app",redirect_app_store_ios:"1",app:"desktop"});b=sc(lc(b));Dc(a,b)}
;function Yk(){var a=K().href;return jd(a,"search_query")||jd(a,"q")||""}
;function Zk(a,b){window.dispatchEvent(new CustomEvent(a,{detail:b}))}
;function $k(a,b,c,d){Zk("navigate",{href:a,params:b,uc:c,target:d})}
;function al(a,b){return function(c,d){L(a,d,function(a){var d=a.Ia,e=a.Ja||b(a,function(){pf(a,a.Ja.O,a.Ia)}),k=e.O,m=void 0===e.V?r:e.V,p=void 0===e.Pa?r:e.Pa;
d&&m(d,c);k(c);p(d,c);a.Ja=e;a.Ia=c})}}
;function bl(a,b){L("svg",{viewBox$:"0 0 "+a+" "+a,preserveAspectRatio$:"xMidYMid meet"},b)}
function Q(a){bl(24,function(){L("path",{d$:a})})}
function cl(){bl(68,function(){L("path",{d$:"M66.5,7.7c-0.8-2.9-2.5-5.4-5.4-6.2C55.8,0.1,34,0,34,0S12.2,0.1,6.9,1.5C4,2.3,2.3,4.8,1.5,7.7C0.1,13,0,24,0,24s0.1,11,1.5,16.3c0.8,2.9,2.5,5.4,5.4,6.2C12.2,47.9,34,48,34,48s21.8-0.1,27.1-1.5c2.9-0.8,4.6-3.3,5.4-6.2C67.9,35,68,24,68,24S67.9,13,66.5,7.7z M27,34V14l18,10L27,34z",transform$:"translate(0, 10)"})})}
function dl(){Q("M8 5v14l11-7z")}
var el={ADD_TO_PLAYLIST:function(){Q("M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z")},
ARROW_DROP_DOWN:function(){Q("M7 10l5 5 5-5z")},
AVATAR_CIRCLE_BLUE:function(){bl(96,function(){L("circle",{fill$:"#C6DAFC",cx$:"48",cy$:"48",r$:"48"});L("path",{fill$:"#5E97F6",d$:"M48,23c-8.28,0-15,6.72-15,15c0,8.28,6.72,15,15,15c8.28,0,15-6.72,15-15C63,29.72,56.28,23,48,23z"});L("path",{fill$:"#5E97F6",d$:"M48,61c-10.33,0-31,5.17-31,15.5v8.13C25.36,91.72,36.18,96,48,96s22.64-4.28,31-11.37V76.5      C79,66.17,58.33,61,48,61z"})})},
CHECK:function(){Q("M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z")},
CHEVRON_RIGHT:function(){Q("M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z")},
CONSENT_SHIELD:function(){bl(24,function(){L("path",{fill$:"#4285F4",d$:"M12 24c6.264-2.945 8.227-8.545 8.8-12.396.12-.813.2-2.085.2-2.604V3.75L12 0 3 3.75V9c0 .52.08 1.79.2 2.604.573 3.85 2.536 9.45 8.8 12.396z"});L("circle",{cx$:"12",cy$:"11",r$:"6",overflow$:"visible",fill$:"#3362B5"});L("path",{fill$:"#FFF",d$:"M17 16.063c-1.17 1.434-2.975 2.354-5 2.354s-3.83-.92-5-2.354v-.7c0-1.277 2.324-2.316 5-2.363 2.676.046 5 1.086 5 2.363v.7zm-5-4.313c1.242 0 2.25-1.006 2.25-2.25 0-1.242-1.008-2.25-2.25-2.25S9.75 8.258 9.75 9.5c0 1.244 1.008 2.25 2.25 2.25z"})})},
DISLIKE:function(){Q("M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z")},
DISMISSAL:function(){Q("M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z")},
EXPAND_LESS:function(){Q("M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z")},
EXPAND_MORE:function(){Q("M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z")},
FAB_UPLOAD:function(){Q("M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z")},
FLAG:function(){Q("M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z")},
FULL_HEART:function(){Q("M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z")},
HAPPY:function(){bl(24,function(){L("circle",{cx$:"15.5",cy$:"9.5",r$:"1.5"});L("circle",{cx$:"8.5",cy$:"9.5",r$:"1.5"});L("path",{d$:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-4c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.7 1.19-1.97 2-3.45 2z"})})},
KEEP:function(){Q("M16 5h.99L17 3H7v2h1v7l-2 2v2h5v6l1 1 1-1v-6h5v-2l-2-2V5z")},
LIKE:function(){Q("M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z")},
LOGO:cl,MEH:function(){bl(24,function(){L("path",{d$:"M9 14h6v1.5H9z"});L("circle",{cx$:"15.5",cy$:"9.5",r$:"1.5"});L("circle",{cx$:"8.5",cy$:"9.5",r$:"1.5"});L("path",{d$:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})})},
MIX:function(){Q("M20.3 11.95c0 2.46-.95 4.7-2.47 6.32l1.07 1.13c1.8-1.92 2.9-4.55 2.9-7.45 0-2.9-1.12-5.54-2.9-7.45l-1.07 1.13c1.52 1.62 2.46 3.86 2.46 6.32zm-17 0c0-2.46.93-4.7 2.45-6.32L4.7 4.5c-1.8 1.9-2.9 4.54-2.9 7.45 0 2.9 1.1 5.53 2.9 7.45l1.05-1.13C4.23 16.64 3.3 14.4 3.3 11.95zm3 0c0-1.6.6-3.03 1.57-4.08L6.8 6.75c-1.24 1.34-2 3.17-2 5.2 0 2.03.76 3.86 2 5.2l1.07-1.12c-.97-1.06-1.58-2.5-1.58-4.08zm10.47-5.2L15.7 7.87c1 1.05 1.6 2.5 1.6 4.08 0 1.6-.6 3.02-1.6 4.08l1.07 1.12c1.25-1.34 2.02-3.17 2.02-5.2 0-2.03-.8-3.86-2.05-5.2zm-6.64 2.93l4.16 2.3-4.2 2.3v-4.6z")},
MORE_CHEVRON:function(){Q("M 18.006339,7.96 12.003622,13.962717 6.0009055,7.96 4,9.960906 12.003622,18 20.007244,9.960906 18.006339,7.96 l 0,0 z")},
MORE_HORIZ:function(){Q("M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z")},
MORE_VERT:function(){Q("M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z")},
OPEN_IN_NEW:function(){Q("M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z")},
PLAYLISTS:function(){Q("M19 9H2v2h17V9zm0-4H2v2h17V5zM2 15h13v-2H2v2zm15-2v6l5-3-5-3z")},
PLAYLIST_ADD:function(){Q("M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z")},
PLAYLIST_ADD_CHECK:function(){Q("M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z")},
PLAY_ALL:dl,PLAY_ARROW:dl,PRIVACY_PRIVATE:function(){Q("M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z")},
PRIVACY_PUBLIC:function(){Q("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z")},
PRIVACY_UNLISTED:function(){Q("M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z")},
PURCHASES:function(){Q("M19.84 11.65l-7.5-7.5c-.3-.3-.7-.48-1.17-.48H5.33c-.9 0-1.66.75-1.66 1.66v5.84c0 .45.18.87.5 1.18l7.5 7.5c.3.3.7.48 1.16.48.46 0 .88-.18 1.18-.5L19.87 14c.3-.3.5-.7.5-1.16 0-.46-.2-.88-.5-1.18zM6.58 7.83c-.7 0-1.25-.55-1.25-1.25s.56-1.25 1.25-1.25c.7 0 1.25.56 1.25 1.25 0 .7-.55 1.25-1.25 1.25z")},
SAD:function(){bl(24,function(){L("circle",{cx$:"15.5",cy$:"9.5",r$:"1.5"});L("circle",{cx$:"8.5",cy$:"9.5",r$:"1.5"});L("path",{d$:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z"})})},
SEARCH:function(){Q("M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z")},
SHARE_ARROW:function(){Q("M14 9V5l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11z")},
SKIP_NEXT:function(){Q("M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z")},
SKIP_PREVIOUS:function(){Q("M6 6h2v12H6zm3.5 6l8.5 6V6z")},
SUBSCRIBE:function(){cl()},
TAB_ACCOUNT:function(){Q("M12 10.8c2.6 0 4.7-2.2 4.7-5 0-2.6-2-4.8-4.7-4.8-2.6 0-4.7 2.2-4.7 5 0 2.6 2 4.8 4.7 4.8zm-10 8v3.7c0 .3.2.5.5.5h19c.3 0 .5-.2.5-.5V19c0-4-6.7-6-10-6S2 15 2 19z")},
TAB_HOME:function(){Q("M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},
TAB_SUBSCRIPTIONS:function(){Q("M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4l-6-3.27v6.53L16 16z")},
TAB_TRENDING:function(){Q("M19.642 10.63c-.314-.395-.658-.767-1.026-1.11-.87-.808-1.884-1.375-2.724-2.22-1.72-1.73-2.3-4.183-1.546-6.496.123-.375-.23-.72-.584-.566-.822.36-1.606.873-2.285 1.425-3.43 2.79-4.704 7.446-3.115 11.645.038.144.09.3.09.45 0 .3-.182.57-.448.687-.3.133-.62.044-.856-.175-.072-.068-.137-.143-.197-.222-1.11-1.452-1.52-3.386-1.21-5.19.08-.456-.49-.713-.77-.35-1.4 1.802-2.09 4.21-1.95 6.48.04.68.158 1.355.34 2.008.23.82.57 1.607 1.01 2.33 1.4 2.31 3.854 3.977 6.49 4.31 2.805.355 5.836-.162 7.997-2.15 2.408-2.217 3.285-5.74 2-8.823-.052-.123-.106-.243-.163-.363-.285-.596-.64-1.154-1.045-1.67m-4.288 8.098c-.366.324-.95.645-1.415.797-1.32.435-2.62-.083-3.516-.814-.13-.1-.084-.3.073-.35 1.37-.44 2.173-1.49 2.41-2.542.23-1.015-.182-1.885-.354-2.878-.14-.827-.128-1.544.135-2.297.047-.13.226-.147.283-.02.82 1.825 3.136 2.63 3.534 4.64.037.18.058.367.063.55.034 1.06-.427 2.226-1.21 2.92")},
UPLOADS:function(){Q("M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z")},
VERY_HAPPY:function(){Q("M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-10.06L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12zm-4.12 0L9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z")},
VERY_SAD:function(){Q("M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4.18-12.24l-1.06 1.06-1.06-1.06L13 8.82l1.06 1.06L13 10.94 14.06 12l1.06-1.06L16.18 12l1.06-1.06-1.06-1.06 1.06-1.06zM7.82 12l1.06-1.06L9.94 12 11 10.94 9.94 9.88 11 8.82 9.94 7.76 8.88 8.82 7.82 7.76 6.76 8.82l1.06 1.06-1.06 1.06zM12 14c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z")},
WARNING:function(){Q("M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z")},
WATCH_HISTORY:function(){Q("M11.9 3.75c-4.55 0-8.23 3.7-8.23 8.25H.92l3.57 3.57.04.13 3.7-3.7H5.5c0-3.54 2.87-6.42 6.42-6.42 3.54 0 6.4 2.88 6.4 6.42s-2.86 6.42-6.4 6.42c-1.78 0-3.38-.73-4.54-1.9l-1.3 1.3c1.5 1.5 3.55 2.43 5.83 2.43 4.58 0 8.28-3.7 8.28-8.25 0-4.56-3.7-8.25-8.26-8.25zM11 8.33v4.6l3.92 2.3.66-1.1-3.2-1.9v-3.9H11z")},
WATCH_LATER:function(){Q("M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z")},
UNLIMITED:cl,YOUTUBE:cl},fl={CHEVRON_RIGHT:!0};function R(a,b){var c=el[a];c&&L("c3-icon",b,function(b){b.setAttribute("flip-for-rtl",a in fl);c()})}
function gl(a,b,c,d){c=void 0===c?r:c;Gk({className:"icon-button","aria-label$":b,"aria-haspopup$":d,onclick:c},function(){R(a)})}
function hl(a,b,c){c=void 0===c?r:c;N({className:"icon-button",role$:"button","aria-label$":b,"aria-haspopup$":void 0,onclick:c},function(){R(a)})}
function il(){N({className:"icon-button"},function(){R("CHEVRON_RIGHT")})}
;var jl={CLEAR_HISTORY:E("CLEAR_HISTORY"),CONFIRM_CLEAR_HISTORY:E("CONFIRM_CLEAR_HISTORY"),SUGGESTION_DISMISS_LABEL:E("SUGGESTION_DISMISS_LABEL"),SUGGESTION_DISMISSED_LABEL:E("SUGGESTION_DISMISSED_LABEL")},kl=E("SEARCH_LABEL"),ll=E("SEARCH_CLEAR_LABEL"),ml=al("ytm-searchbox",function(a,b){function c(){$f(mk,function(){(0,window.ytsboxinstall)(a.querySelector("form"),k,a.querySelector('input[type="submit"]'),nk,jl,function(){e();return!1},a.querySelector(".searchbox-dropdown"))})}
function d(a){m=a.target.value;b()}
function e(){m=k.value;if(!m.trim())return!1;var a="/results?search_query="+encodeURIComponent(m).replace(/%20/g,"+");$k(a);k.blur();return!1}
function f(a){a.preventDefault();k.focus();m="";b()}
var g=!1,k=null,m="",p="";return{V:function(){var a=K();a=a.pathname+a.search;p!=a&&(p=a,m=Yk())},
O:function(){Hk({action:"/results",className:"searchbox-form cbox",onsubmit:e},function(){N({className:"searchbox-input-wrapper"},function(){Ok({className:"searchbox-input title",name:ec("search"),placeholder:kl,autocomplete:"off",autocorrect$:"off",spellcheck:"false",oninput:d},function(a){k=a;k.value!=m&&(k.value=m)})});
Ok({type:"submit",hidden:!0});m&&hl("DISMISSAL",ll,f);hl("SEARCH",kl,e)});
N({className:"searchbox-dropdown"},function(){vf()})},
Pa:function(a,b){b.fa&&a&&!a.fa?k.focus():!b.fa&&a&&a.fa&&k.blur();!g&&b.fa&&(g=!0,c())}}});function nl(){return hd("/signin","next",location.pathname+location.search)}
function ol(){return!!B("ID_TOKEN")}
function pl(){location.assign(nl())}
;function ql(){var a={productId:"77522",locale:B("HTML_LANG","en"),allowNonLoggedInFeedback:!0,bucket:"C3"},b={experiments:rl(),logged_in:ol(),Device:qb};Df(a,b)}
function rl(){try{return Zj.response.response.responseContext.serviceTrackingParams.filter(function(a){return"GFEEDBACK"==a.service})[0].params.filter(function(a){return"e"==a.key})[0].value}catch(a){}}
;function sl(a,b,c){L("c3-material-button",a,function(){L("button",{className:"c3-material-button-button",disabled:b&&b.disabled,onclick:b&&b.onclick,"aria-label$":b&&b.N,"aria-pressed$":b&&b.Tb},function(){N({className:"cbox"},c)})})}
;function tl(a,b){var c=window;c.addEventListener(a,function f(e){c.removeEventListener(a,f,void 0);b(e)},void 0)}
;var ul=me(),vl=!1;function wl(){ul=new he(function(a){function b(){window.removeEventListener("popstate",b);window.removeEventListener("hashchange",b);a()}
window.addEventListener("popstate",b);window.addEventListener("hashchange",b)});
tl("popstate",function(){setTimeout(function(){vl=!1})});
setTimeout(function(){vl=!0;history.back()})}
function xl(){return ul}
;function S(){Zk("updateui")}
;function yl(a){K().hash=a;S()}
;function zl(a){return new he(function(b){H(function(){return b(a)})})}
function Al(a){a=a.map(Bl);return qe(a).then(zl)}
function Bl(a){return a.complete?me("load"):new he(function(b){function c(d){a.removeEventListener("load",c);a.removeEventListener("error",c);b(d.type)}
a.addEventListener("load",c);a.addEventListener("error",c)})}
;var Cl=0,Dl=null,El=0;function Fl(a,b){[].concat(ra(a.parentNode.children)).filter(function(b){return b!=a}).forEach(function(a){b?a.setAttribute("aria-hidden",!0):a.removeAttribute("aria-hidden")})}
function Gl(a){El+=1;1==El&&(Cl=(document.body||document.documentElement).scrollTop||window.pageYOffset||0,Dl=document.activeElement,Fl(a,!0),requestAnimationFrame(function(){document.body.setAttribute("modal-open-body","");document.body.style.top="-"+Cl+"px"}))}
function Hl(a){--El;0==El&&(Fl(a,!1),requestAnimationFrame(function(){document.body.removeAttribute("modal-open-body");document.body.style.top="";window.scrollTo(0,Cl);Dl&&Dl.focus()}))}
;function Il(a,b){L("c3-overlay",{onclick:b,ontouchmove:de},function(){Gk({className:"overlay-button","aria-label$":a})})}
;var Jl,Kl;function Ll(){wl();Kl.Na&&Kl.Na()}
function Ml(){window.removeEventListener("updateui",Nl);Hl(Jl);document.body.removeChild(Jl);Kl=Jl=null}
function Ol(){Jl&&"#dialog"!=K().hash&&Ml()}
function Pl(a){(a=Nc(a.target,"button"))&&!a.disabled&&Ll()}
function Nl(){var a=Kl,b=a.buttons,c=a.content,d=a.header,e=a.tc,f=xk(ec("dialog-header")),g=xk(ec("dialog-body"));pf(Jl,function(){L("c3-dialog",{role$:"dialog","aria-labelledby$":d?f:g,className:"dialog"},function(){d&&N({id:f,className:"dialog-header",tabIndex:"-1"},function(){d()});
N({id:g,className:"dialog-body user-text",tabIndex:"-1"},function(){c()});
N({className:"dialog-buttons",onclick:e?null:Pl},function(){b()})});
Il("close",Ll)})}
function Ql(a){zl().then(xl).then(function(){yl("dialog");Jl&&Ml();Kl=a;Jl=document.createElement("div");Jl.className="dialog-container";document.body.appendChild(Jl);Gl(Jl);window.addEventListener("updateui",Nl);Nl();document.querySelector(".dialog-header, .dialog-body").focus()})}
window.addEventListener("state-change",Ol);window.addEventListener("hashchange",Ol);var Rl,Sl="out",Tl=[],Ul;function Vl(a){L("c3-toast",{dir$:Sl,role$:"in"==Sl?"alert":""},function(){a&&a()})}
function Wl(){Tl.shift();0<Tl.length?Xl():pf(Rl,Vl,null)}
function Yl(){Sl="out";pf(Rl,Vl,Tl[0].content);setTimeout(Wl,195)}
function Xl(){Sl="in";var a=Tl[0],b=a.durationMs;pf(Rl,Vl,a.content);Ul=setTimeout(Yl,225+b)}
function Zl(a,b,c){b=void 0===b?2E3:b;c=void 0===c?!1:c;Rl||(Rl=document.createElement("div"),Rl.id="toasts",document.body.appendChild(Rl),pf(Rl,Vl,null));b=b||2E3;c&&0<Tl.length?(clearTimeout(Ul),H(function(){Tl[0]={content:a,durationMs:b};Xl()})):(Tl.push({content:a,
durationMs:b}),1==Tl.length&&H(Xl))}
;var $l=J.Ga,am=J.pb,bm=J.Ha;function cm(a){a=a.target;a.focus();a.setSelectionRange(0,a.value.length);try{var b=document.execCommand("copy")}catch(c){}b&&(Zl(function(){y(am)}),Ll())}
function dm(a){Ql({header:function(){Jk(null,function(){y(bm)})},
buttons:function(){sl({className:"compact"},null,function(){y($l)})},
content:function(){Tk({className:"player-debug-info",onclick:cm},function(){y(a)})}})}
function em(){var a=window.getPlayer();a&&(a=a.getDebugText(!0))&&dm(a)}
;function fm(a,b){L("ytm-menu-item",a,function(){L("button",{className:"menu-item-button"},b)})}
;var gm;function hm(){wl()}
function im(){gm&&"#menu"!=K().hash&&(Hl(gm),document.body.removeChild(gm),gm=null)}
function jm(a){pf(gm,function(){N({className:"menu-content",onclick:hm},function(){a();fm(null,function(){y(J.ra)})});
Il("close",hm)})}
function km(a){yl("menu");gm=document.createElement("div");gm.className="menu-container";document.body.appendChild(gm);Gl(gm);jm(a);gm.querySelector("button").focus()}
function lm(a){var b=a.icon,c=a.label,d=a.content;L("ytm-menu",void 0,function(){gl(b,c,function(){km(d)},!0)})}
window.addEventListener("state-change",im);window.addEventListener("hashchange",im);function mm(a,b){H(function(){return Ac(a,b)})}
function nm(a,b,c){c=void 0===c?r:c;Fk(b,function(b){dk(b,"_href",a,function(){return mm(b,a)});
c()})}
;var om=J.Nb,pm=J.Ha,qm=J.Db,rm=J.Cb,sm=J.Eb,tm=J.yb,um=J.zb,vm=J.wb,wm=J.Ab,xm=J.Bb,ym=J.xb;function zm(){switch(K().pathname){case "/feed/trending":return"yt_trending_web";case "/feed/subscriptions":return"yt_subscriptions_mweb";case "/feed/account":return"yt_account_mweb";case "/":return"yt_home_mweb";default:return"yt_mobile_mweb"}}
function Am(a,b){nm(a,null,function(){fm(null,function(){return y(b)})})}
function Bm(){L("ytm-top-menu",void 0,function(){lm({icon:"MORE_VERT",label:om,content:function(){ol()||Am(nl(),qm);C("mweb_copy_player_debug_info")&&2==uk(K().href)&&fm({onclick:em},function(){return y(pm)});
Am("/select_site",rm);Am("/terms",sm);fm({onclick:ql},function(){return y(tm)});
Am(gd("//support.google.com/youtube/",{src:"web",p:zm(),hl:B("HTML_LANG","en")}),um);!Kb&&Am(gd("//www.youtube.com"+K().pathname+K().search,{app:"desktop",persist_app:"1"}),vm);B("SHOW_IMPRESSUM")&&Am("https://www.youtube.com/t/impressum?hl=de&gl=DE",wm);B("SHOW_NETZDG_TRANSPARENZBERICHT")&&Am("https://transparencyreport.google.com/netzdg/youtube",xm);Kb&&window.sendCloseKaiOsAppMessage&&fm({onclick:Cm},function(){return y(ym)})}})})}
function Cm(){window.sendCloseKaiOsAppMessage&&window.sendCloseKaiOsAppMessage()}
;function Dm(a){return a?a.simpleText?a.simpleText:a.runs.map(function(a){return a.text}).join(""):""}
;function Em(a,b){if("search"==a)return Yk()||"YouTube";var c=b&&b.header;if(!c)return"YouTube";var d=c.feedTabbedHeaderRenderer;return d?Dm(d.title):(c=c.c4TabbedHeaderRenderer)?c.title:"YouTube"}
;function Fm(){this.f=[];this.b=null}
function Gm(a,b){a.b=b;a.f.forEach(function(a){b(a)});
a.f=null}
Fm.prototype.push=function(a){this.b?this.b(a):this.f.push(a)};var Hm={clickTrackingParams:r},Im=new Fm;function Jm(a,b){Im.push({action:a,context:b})}
;var Km=[],Lm=new Fm;function Mm(a){return I(function(){return a.commandMetadata.webCommandMetadata.url})||I(function(){return a.webNavigationEndpointData.url})}
function Nm(a,b){var c=Km.reduce(function(b,c){return b||a[c.i]&&c.j},void 0);
if(!c)throw Error("Unhandled command: "+Object.keys(a));c(a,{o:Zj.response,l:b})}
function T(a,b){Lm.push({command:a,l:b})}
;function Om(a,b){"TARGET_NEW_WINDOW"==I(function(){return b.urlEndpoint.target})&&(a.target="_blank")}
function Pm(a){(I(function(){return a.loggingUrls})||[]).map(function(a){return a.baseUrl}).filter(function(a){return a}).forEach(function(a){return Bi(a)})}
function Qm(){Pm(this._data)}
function Rm(){var a=this.href,b=this.params,c=8,d=B("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=cd(window.location.href);e&&d.push(e);e=cd(a);if(0<=Sa(d,e)||!e&&eb(a,"/"))if(C("autoescape_tempdata_url")&&(d=document.createElement("a"),Ac(d,a),a=d.href),a){e=a.match(ad);a=e[5];d=e[6];e=e[7];var f="";a&&(f+=a);d&&(f+="?"+d);e&&(f+="#"+e);a=f;d=a.indexOf("#");if(a=0>d?a:a.substr(0,d)){if(b.itct||b.ved)b.csn=b.csn||ti();c?(c=parseInt(c,10),isFinite(c)&&0<c&&bj(a,b,c)):bj(a,b)}}}
function U(a,b,c){c=void 0===c?r:c;Fk(b,function(b){dk(b,"_data",a,function(){a?(b.addEventListener("touchstart",Rm,{passive:!0}),b.addEventListener("click",Qm),b.removeEventListener("click",de)):(b.removeEventListener("touchstart",Rm,{passive:!0}),b.removeEventListener("click",Qm),b.addEventListener("click",de));a&&(b.params={itct:a.clickTrackingParams},Om(b,a),Ac(b,Mm(a)||""))});
c()})}
function Sm(a,b,c){c=void 0===c?r:c;sl({className:"icon"},{N:a&&a.N,disabled:a&&a.disabled,onclick:function(){b&&(Pm(b),T(b))}},c)}
;var Tm=J.ob,Um=J.ub,Vm=J.Mb,Wm={webNavigationEndpointData:{url:"/"}};function Xm(){wl()}
function Ym(){yl("searching")}
function Zm(a){H(function(){pk.content=getComputedStyle(a).backgroundColor})}
function $m(a,b){var c="#searching"==K().hash,d=c?"searching":a,e=c?de:null,f=Em(a,b)||"";L("ytm-header-bar",null,function(){c&&Il(Tm,Xm);Mk({className:"header-bar cbox",key:"header","data-mode$":d,ontouchmove:e},function(a){document.title=f+("YouTube"==f?"":" - YouTube");dk(a,"mode",d,function(){return Zm(a)});
U(Wm,{className:"header-bar-endpoint cbox","aria-label$":Um},function(){R("LOGO",{className:"header-bar-logo"})});
ml({fa:c},{className:"header-bar-content search-mode"});N({className:"header-bar-content non-search-mode cbox"},function(){Ik({className:"title","aria-label$":f},function(){y(f)});
N({className:"header-bar-buttons cbox"},function(){ok&&Vk();gl("SEARCH",Vm,Ym);Bm()})})})})}
;var bn="IntersectionObserver"in window?new IntersectionObserver(function(a,b){a.filter(function(a){return a.intersectionRect.height}).forEach(function(a){a=a.target;
an(a);b.unobserve(a)})},{rootMargin:"50%",
threshold:.01}):{observe:function(a){H(function(){return an(a)})}};
function an(a){var b=a.b(a.lazyData,a);Bc(a,b)}
function cn(a,b){dn(a,Yb,b)}
function dn(a,b,c){Nk(c,function(c){dk(c,"lazyData",a||ck,function(){c.removeAttribute("src");a&&(c.b=b,bn.observe(c))})})}
;function en(a,b,c){var d=C("enable_new_thumbnail_picking")?l.devicePixelRatio||2:2,e=c||b.getBoundingClientRect().width*d;a=a.thumbnails;if(C("enable_new_thumbnail_picking")){b=0;c=Number.MAX_SAFE_INTEGER;d=0;for(var f=-Number.MAX_SAFE_INTEGER,g=0;g<a.length;g++){var k=a[g].width-e;0<=k&&k<=c?(b=g,c=k):0>k&&k>f&&(d=g,f=k)}var m=[];a.forEach(function(a){m.push(a.url)});
return 100>c||c<-f?a[b].url:a[d].url}return a.slice().sort(function(a,b){return Math.abs(a.width-e)-Math.abs(b.width-e)})[0].url}
function fn(a){var b=I(function(){return a.thumbnails[0].url});
return b?pc(rc(b)):null}
function gn(a,b,c){dn(a,function(a,b){return en(a,b,c)},b)}
;var hn=!1,jn=null,kn=[];function ln(a,b,c){if(!hn||jn)jn?jn.observe(a,b,c):kn.push({element:a,Ub:b,option:c})}
function mn(a){jn?jn.pa(a):kn=kn.filter(function(b){return b.element!=a.element||b.option!=a.option})}
function nn(a){jn||hn||(hn=!0,(jn=a())&&kn.forEach(function(a){ln(a.element,a.Ub,a.option)}),kn.length=0)}
;var on={ha:!0,state:"visible"},pn={ha:!1,state:"visible"},qn={ha:!1,state:"hidden"};function rn(a,b){a.oa&&a.oa!=b&&a.ga&&a.ga.forEach(function(b){mn({element:a,option:b})})}
function sn(a,b,c){var d=b.trackingParams;b.visibility&&b.visibility.types&&0!=(b.visibility.types&4)&&(ln(a,function(){d&&Zh(c,[Wh(d)])},pn),a.ga=[pn]);
b.visibility&&b.visibility.types&&0!=(b.visibility.types&8)&&(ln(a,function(){d&&$h(c,[Wh(d)])},qn),a.ga[a.ga.length]=qn)}
function tn(a,b,c){var d=c?c.trackingParams:b,e=ti();!e||!d||a.oa&&a.oa==b||(rn(a,d),c?sn(a,c,e):(ln(a,function(){e&&d&&Yh(e,[Wh(d)])},on),a.ga=[on]),a.oa=d)}
function un(){jn&&jn.dispose();kn.length=0}
function vn(){"IntersectionObserver"in window&&nn(function(){return new Yj});
window.addEventListener("state-responsestart",un)}
;function V(a,b,c,d){d=void 0===d?r:d;var e=a._replacingContent;e?e(c):L(b,c,function(b){b.data=a;d(b);(a.trackingParams||a.loggingDirectives)&&H(function(){tn(b,a.trackingParams,a.loggingDirectives)})})}
function wn(a){return a&&(a.data||wn(a.parentNode))}
function xn(a,b){a._replacingContent=b}
;function yn(a){if(a)return a.label?a.label:yn(a.accessibilityData)}
;function zn(a){a.bold&&Bk("strong");a.deemphasize&&Bk("span",{className:"formatted-string-deemphasize"});a.italics&&Bk("em");if(a.textColor){var b=a.textColor;b&=16777215;var c=[(b&16711680)>>16,(b&65280)>>8,b&255];b=c[0];var d=c[1];c=c[2];b=Number(b);d=Number(d);c=Number(c);if(b!=(b&255)||d!=(d&255)||c!=(c&255))throw Error('"('+b+","+d+","+c+'") is not a valid RGB color');Bk("span",{style:"color: "+("#"+Ud(b.toString(16))+Ud(d.toString(16))+Ud(c.toString(16)))})}a.strikethrough&&Bk("s")}
function An(a){a.strikethrough&&of();a.textColor&&of();a.italics&&of();a.deemphasize&&of();a.bold&&of()}
function Bn(a,b){var c=a.text;zn(a);a.navigationEndpoint&&!b?U(a.navigationEndpoint,null,function(){return y(c)}):y(c);
An(a)}
function W(a,b){var c=(void 0===b?ck:b).D;if(a){a.accessibility&&Bk("span",{"aria-label$":yn(a.accessibility)});if(a.simpleText)y(a.simpleText);else if(a.runs)for(var d=0;d<a.runs.length;d++)Bn(a.runs[d],!!c);a.accessibility&&of()}}
;function Cn(a,b,c,d,e,f,g,k){k=void 0===k?!1:k;sl({className:"button-renderer compact","data-style$":void 0===g?"":g,"data-icon-only$":!b,"is-busy$":!!k,"aria-busy$":!!k},{N:c,Tb:d,disabled:e,onclick:f},function(){a&&R(a,{className:"button-renderer-icon"});N({className:"button-renderer-text"},function(){W(b)});
k&&N({className:"button-with-icon-spinner spinner"})})}
;function X(a){if(a){var b=I(function(){return a.icon.iconType});
Cn(b,a.text,yn(a.accessibilityData||a.accessibility),null,a.isDisabled,function(){if(!a.Y){var b=a.serviceEndpoint||a.navigationEndpoint;b&&T(b,a)}},a.style,a.Y)}}
;function Dn(a){var b=I(function(){return a.toggledIcon.iconType}),c=I(function(){return a.defaultIcon.iconType});
return a.isToggled&&b||c}
function En(a){if(a){var b=Dn(a);Cn(b,a.isToggled&&a.toggledText||a.defaultText,yn(a.accessibilityData),!!a.isToggled,a.isDisabled,function(){var b=a.isToggled?a.toggledServiceEndpoint:a.defaultServiceEndpoint,d=a.defaultNavigationEndpoint;b?T(b,a):d&&T(d)},a.style,a.Y)}}
;function Y(a){return function(b,c){for(var d=Array.isArray(b)?b:[b],e=0;e<d.length;e++){var f=void 0,g=d[e],k=c;for(f in g)(a[f]||r)(g[f],k)}}}
;var Fn=E("PLAY_ALL"),Gn=Y({buttonRenderer:X,toggleButtonRenderer:En,heroPlaylistThumbnailRenderer:function(a,b){V(a,"ytm-hero-playlist-thumbnail-renderer",b,function(){N({style:{"padding-bottom":100*a.maxRatio+"%"}},function(){gn(a.thumbnail,{className:"cover",alt:""})})})}});
function Hn(a){N(null,function(){Jk(null,function(){W(a.title)});
U(a.ownerEndpoint,{className:"playlist-channel-link"},function(){W(a.ownerText,{D:!0})});
Rk({className:"subhead small-text"},function(){W(a.descriptionText)})})}
function In(a){N({className:"playlist-header-stats"},function(){P({className:"text-info"},function(){W(a.numVideosText)});
P({className:"text-info"},function(){W(a.viewCountText)});
P({className:"text-info"},function(){W(a.totalLength)})})}
function Jn(a){N({className:"playlist-header-actions cbox"},function(){Gn(a.saveButton);Gn(a.shareButton)})}
;function Kn(a){L("ytm-channel-link",void 0,function(){a.icon&&gn(a.icon,{className:"channel-link-icon",alt:""});U(a.navigationEndpoint,{className:"channel-link-link"},function(){a.title?W(a.title):y(I(function(){return a.navigationEndpoint.urlEndpoint.url})||"")})})}
;function Ln(a,b){a.subscribed||(void 0===b?0:b)||N({className:"subscribe-button-count secondary-text"},function(){W(a.subscriberCountText)})}
function Mn(a,b,c){function d(){T(a.serviceEndpoints[a.subscribed?1:0],a)}
c=void 0===c?!1:c;var e=a.subscribedButtonText,f=a.unsubscribedButtonText,g=a.subscribed,k=a.enabled,m=g?e:f,p=g?"STYLE_TEXT":"STYLE_BRAND",D=!!g;V(a,"ytm-subscribe-button-renderer",b,function(){N({className:"cbox"},function(){Cn("LOGO",m,null,D,!k,d,p);Ln(a,c)})})}
;function Nn(a,b){var c=I(function(){return a.thumbnails[0].url});
L("ytm-profile-icon",b,function(){cn(c,{className:"profile-icon-img",alt:""})})}
;var On=Y({buttonRenderer:X,channelHeaderLinksRenderer:function(a,b){V(a,"ytm-channel-header-links-renderer",b,function(){a.primaryLinks.forEach(function(a){return Kn(a)})})},
subscribeButtonRenderer:Mn});function Pn(a){var b=I(function(){return a.banner.thumbnails[0].url});
if(b){var c=yn(a.banner.accessibility)||"",d=I(function(){return a.bannerLinkEndpoint}),e={alt:c,
className:"c4-tabbed-header-banner-img"};N({className:"c4-tabbed-header-banner"},function(){d?U(d,{},function(){cn(b,e)}):cn(b,e)})}}
function Qn(a){N({className:"c4-tabbed-header-details"},function(){Ik({className:"c4-tabbed-header-title"},function(){y(a.title||"")});
N({className:"c4-tabbed-header-subscibe cbox"},function(){On(a.subscribeButton);P({className:"c4-tabbed-header-subscriber-count secondary-text"},function(){W(a.subscriberCountText)})});
On(a.headerLinks)})}
;var Rn=Y({headerFabRenderer:function(a){V(a,"ytm-header-fab-renderer",{className:"center"},function(){U(a.navigationEndpoint,{"aria-label$":yn(a.accessibility)},function(){R(a.icon.iconType)})})}});
function Sn(a){var b=I(function(){return a.unlimitedStatus});
b&&N({className:"unlimited-status small-text"},function(){b.forEach(function(a){W(a)})})}
;var Tn=Y({buttonRenderer:X});var Un=Y({channelListSubMenuAvatarRenderer:function(a,b){V(a,"ytm-channel-list-sub-menu-avatar-renderer",b,function(b){a:switch(a.status){case "CHANNEL_STATUS_UNREAD":var c="unread";break a;case "CHANNEL_STATUS_LIVE":c="live";break a;default:c=""}b.setAttribute("status",c);U(a.navigationEndpoint,{"aria-label$":yn(a.accessibility)},function(){Nn(a.thumbnail,{className:"channel-list-sub-menu-avatar-profile-icon"})})})}});function Vn(a,b,c){var d=b&&b.id||void 0;L("ytm-select",a,function(){Sk({className:"select",id:d},c);R("ARROW_DROP_DOWN",{className:"select-icon"})})}
;function Wn(a){if(a){var b=-1;a.forEach(function(a,d){a.selected&&(b=d)});
Vn({onchange:function(a){a=a.target;a.selectedIndex!=b&&T(a.options[a.selectedIndex].endpoint,{})}},null,function(){a.forEach(function(a){Qk({className:"option",
endpoint:a.endpoint,selected:a.selected},function(){y(a.title)})})})}}
;function Xn(a,b){L("ytm-badge",a,b)}
;function Yn(a,b){V(a,"ytm-metadata-badge-renderer",b,function(){Xn({className:"metadata-badge soft-background","data-type$":a.style},function(){R(I(function(){return a.icon.iconType}));
y(a.label||"")})})}
;var Zn=Y({metadataBadgeRenderer:Yn});function $n(a,b){a&&L("ytm-badge-supported-renderer",b,function(){Zn(a)})}
;var ao=Y({buttonRenderer:X,menuServiceItemRenderer:function(a,b){V(a,"ytm-menu-service-item-renderer",b,function(){fm({onclick:function(){T(a.serviceEndpoint,a)}},function(){W(a.text,{D:!0})})})},
toggleButtonRenderer:En,toggleMenuServiceItemRenderer:function(a,b){V(a,"ytm-toggle-menu-service-item-renderer",b,function(){fm({onclick:function(){T(a.isToggled?a.toggledServiceEndpoint:a.defaultServiceEndpoint,a)}},function(){W(a.isToggled?a.toggledText:a.defaultText)})})},
menuNavigationItemRenderer:function(a,b){V(a,"ytm-menu-navigation-item-renderer",b,function(){fm({onclick:function(){T(a.navigationEndpoint,a)}},function(){W(a.text)})})}});
function bo(a){a.items&&a.items.length&&lm({icon:"MORE_VERT",label:yn(a.accessibility)||"",content:function(){ao(a.items)}})}
function co(a,b){V(a,"ytm-menu-renderer",b,function(){ao(a.topLevelButtons);bo(a)})}
function eo(a){km(function(){ao(a.items)})}
;function fo(a,b,c){N({className:"cover video-thumbnail-img video-thumbnail-bg"});gn(a,{alt:"",className:"cover video-thumbnail-img"},c);b&&b()}
function go(a,b){N({className:"video-thumbnail-container-large center"},function(){fo(a,b)})}
function ho(a,b,c){N({className:"video-thumbnail-container-compact center"},function(){fo(a,b,c)})}
;var io=Y({menuRenderer:co});function jo(a){var b=a.thumbnail,c=a.navigationEndpoint,d=a.headline,e=void 0===a.A?[]:a.A,f=void 0===a.fb?[]:a.fb,g=a.na,k=a.ca,m=a.overlay,p=a.N,D=a.menu,O=a.jb,M=void 0===a.extraContent?r:a.extraContent;N({className:"compact-media-item"},function(){U(c,{className:"compact-media-item-image","aria-hidden$":!m},function(){ho(b,m,O)});
N({className:"compact-media-item-metadata","data-has-badges$":!(!k&&!g)},function(){U(c,{className:"compact-media-item-metadata-content","aria-label$":p},function(){$n(g);Lk({className:"compact-media-item-headline"},function(){W(d)});
N({className:"subhead","aria-hidden$":!!p},function(){e.filter(function(a){return a}).forEach(function(a){N({className:"compact-media-item-byline small-text"},function(){W(a,{D:!0})})});
f.filter(function(a){return a}).forEach(function(a){N({className:"compact-media-item-stats small-text"},function(){W(a,{D:!0})})})});
$n(k);M()});
io(D,{className:"compact-media-item-menu"})})})}
;function ko(a,b){V(a,"ytm-thumbnail-overlay-resume-playback-renderer",b,function(){N({className:"thumbnail-overlay-resume-playback-progress",style$:"width: "+a.percentDurationWatched+"%;"})})}
;function lo(a,b){V(a,"ytm-thumbnail-overlay-time-status-renderer",b,function(b){b.setAttribute("data-style",a.style);W(a.text)})}
;function mo(a){N({className:"video-thumbnail-overlay-side center vbox"},a)}
function no(a){N({className:"video-thumbnail-overlay-bottom-group"},a)}
;var oo=Y({thumbnailOverlayResumePlaybackRenderer:ko,thumbnailOverlayTimeStatusRenderer:lo});var po=E("SHOW_MORE");function qo(a){a=a.currentTarget;a.hasAttribute("loading")||(a.setAttribute("loading",""),a.dispatchEvent(new CustomEvent("ytm-load-more",{bubbles:!0,detail:a})))}
function ro(a,b,c){var d=b.nextContinuationData;d&&L("c3-next-continuation",{onclick:qo,container:a,nextContinuationData:d,Oa:c},function(a){dk(a,"data",d,function(){a.removeAttribute("loading")});
sl({className:"nextcontinuation-button"},null,function(){d.label?W(d.label):y(po)});
N({className:"spinner nextcontinuation-spinner"})})}
;var so=Y({playlistVideoRenderer:function(a,b){V(a,"ytm-playlist-video-renderer",b,function(){jo({thumbnail:a.thumbnail,navigationEndpoint:a.navigationEndpoint,lengthText:a.lengthText,headline:a.title,A:[a.shortBylineText,I(function(){return a.upcomingEventData.upcomingEventText})],
ca:a.badges,overlay:function(){no(function(){return oo(a.thumbnailOverlays)})},
menu:a.menu})})}});
function to(a){a.continuations&&N({className:"vbox"},function(){a.continuations.forEach(function(b){return ro(a,b)})})}
;function uo(a){var b=a.title,c=a.subtitle,d=void 0===a.header?r:a.header,e=void 0===a.footer?r:a.footer,f=a.thumbnail.thumbnails[0];L("ytm-promo",{className:"vbox"},function(){d();cn(f.url,{className:"promo-img",alt:""});N({className:"promo-title"},function(){W(b)});
N({className:"promo-subtitle"},function(){W(c)});
e()})}
;function vo(a){switch(I(function(){return a.presentationStyle.style})){case "NEW_CONTENT":return"new-content";
case "GREYED_OUT":return"greyed-out";default:return""}}
;var wo=E("SEARCH_CHANNEL"),xo=E("SEARCH_CLEAR_LABEL"),yo=al("ytm-channel-search-box-renderer",function(a,b){function c(a){g=a.target.value;b()}
function d(a){g=f.value;if(!g.trim())return!1;a=Mm(a.endpoint);$k(hd(a,"query",g));f.blur();return!1}
function e(a){a.preventDefault();f.focus();g="";b()}
var f=null,g=jd(K().href,"query")||"";return{O:function(a){Hk({className:"channel-searchbox-form cbox",onsubmit:function(){return d(a)}},function(){N({className:"channel-searchbox-input-wrapper cbox"},function(){Ok({className:"channel-searchbox-input  title",
placeholder:wo,autocomplete:"off",autocorrect$:"off",spellcheck:"false",oninput:c},function(a){f=a;f.value!=g&&(f.value=g)})});
Ok({type:"submit",hidden:!0});g&&hl("DISMISSAL",xo,e);hl("SEARCH",wo,function(){return d(a)})})}}});var zo=Y({menuRenderer:co});function Ao(a,b){V(a,"ytm-clarification-renderer",b,function(){Bo(a,function(){a.image&&gn(a.image,{className:"clarification-image-small",alt:""});N({className:"clarification-body"},function(){N({className:"clarification-text subhead"},function(){W(a.text)});
Co(a)})})})}
function Do(a,b){V(a,"ytm-clarification-renderer",b,function(){Bo(a,function(){a.image&&gn(a.image,{className:"clarification-image",alt:""});N({className:"clarification-body"},function(){Lk({className:"clarification-content-title"},function(){W(a.contentTitle)});
N({className:"clarification-text subhead"},function(){W(a.text)});
Co(a)})})})}
function Eo(a,b){V(a,"ytm-clarification-renderer",b,function(){Bo(a,function(){N({className:"clarification-body"},function(){N({className:"clarification-section-header cbox"},function(){a.image&&gn(a.image,{className:"clarification-image-small",alt:""});Lk({className:"clarification-section-title title"},function(){W(a.sectionTitle)})});
N({className:"clarification-content-title"},function(){W(a.contentTitle)});
N({className:"clarification-text-large-style subhead"},function(){W(a.text)});
Co(a)})})})}
function Bo(a,b){N({className:"clarification-container"},function(){U(a.endpoint,{className:"cbox clarification-endpoint"},b);zo(a.menu)})}
function Co(a){N({className:"clarification-source secondary-text cbox"},function(){W(a.source);R("OPEN_IN_NEW",{className:"clarification-source-icon"})})}
;var Fo=window.setAutonavStateInPlayer,Go=!1,Ho=!1,Io=!1,Jo=0,Ko=!Vi(),Lo=!1;function Mo(){setTimeout(function(){var a=Lo;Fo(Ko?a?3:2:1)})}
function No(){Lo=Go||Io||Ho;Mo()}
function Oo(){Ho=!0;No()}
function Po(){Ho=!1;clearTimeout(Jo);Jo=setTimeout(Oo,18E5);No()}
function Qo(){var a=rk.getBoundingClientRect();Go=a.top<-(2*a.height/3);No()}
function Ro(a){var b=a.detail.videoData;a={itct:b.sessionData.itct};var c=b.sessionData;c={autonav:c.autonav,playnext:c.playnext};b=hd("/watch","v",b.videoId);$k(b,a,c)}
function So(){wl()}
function To(){var a=K().hash;Io=eb(a,"#")&&!eb(a,"#fauxfullscreen");No()}
;var Uo={landscape:"(min-width: 800px) and (min-device-height: 550px) and (orientation: landscape)",portrait:"(min-width: 550px) and (min-device-height: 800px) and (orientation: portrait)"},Vo=void 0,Wo=window.innerWidth,Xo=window.innerHeight;function Yo(){if(!wa(Vo)){var a="matchMedia"in window?window.matchMedia(Uo.landscape+","+Uo.portrait).matches:void 0;Vo=wa(a)?a:800<=Wo&&550<=Xo||550<=Wo&&800<=Xo}return Vo}
window.addEventListener("resize",function(){Vo=void 0});var Zo=Y({thumbnailOverlayResumePlaybackRenderer:ko,thumbnailOverlayTimeStatusRenderer:lo});function $o(a,b){V(a,"ytm-compact-video-renderer",b,function(){jo({thumbnail:a.thumbnail,navigationEndpoint:a.navigationEndpoint,headline:a.title,A:[a.shortBylineText,I(function(){return a.upcomingEventData.upcomingEventText})],
fb:[a.shortViewCountText,a.publishedTimeText],na:a.topStandaloneBadge,ca:a.badges,overlay:function(){no(function(){return Zo(a.thumbnailOverlays)})},
menu:a.menu,jb:Yo()?340:void 0})})}
;function ap(a){L("c3-material-toggle-button",{className:"ytm-autonav-toggle"},function(){L("button",{className:"c3-material-toggle-button","aria-label$":a.N,"aria-pressed$":a.checked,onclick:a&&a.onclick},function(){N({className:"c3-material-toggle-button-track"});N({className:"c3-material-toggle-button-circle"})})})}
;var bp=Y({compactVideoRenderer:$o});function cp(){var a=Ko=!Ko;if(a!=!Vi()){var b=fd({state:a?"enabled":"disabled"});Bi("/gen_204?a=autoplay"+(b?"&"+b:""),void 0);b=Si.da();a||Xi("f"+(Math.floor(141/31)+1),131072,!0);Xi("f"+(Math.floor(140/31)+1),65536,!a);b.save();Wj.set("autonav_disabled",!a)}if(B("AUTONAV_EXTRA_CHECK")){a=!Vi();b=!Wj.get("autonav_disabled");var c="";a!=b&&(c="Cookie does not match localstorage value cookie:"+a+" LocalStorage:"+b);c&&Gf(Error(c),"WARNING")}Mo();S()}
function dp(a){var b=Ko;N({className:"ytm-autonav-bar cbox"},function(){N({className:"ytm-autonav-title"},function(){W(a.title)});
N({className:"ytm-autonav-toggle-wrapper"},function(){N({className:"ytm-autonav-toggle-description","aria-hidden$":"true"},function(){W(a.toggleDescription)});
ap({N:J.lb,checked:b,onclick:cp})})})}
;function ep(a,b){V(a,"ytm-compact-channel-renderer",b,function(){jo({thumbnail:a.thumbnail,navigationEndpoint:a.navigationEndpoint,headline:a.displayName,A:[a.videoCountText,a.subscriberCountText]})})}
;function fp(a,b){var c=I(function(){return a.icon.iconType});
V(a,"ytm-compact-link-renderer",b,function(){U(a.navigationEndpoint,{className:"compact-link-endpoint"},function(){R(c,{className:"compact-link-icon"});W(a.title)})})}
;function gp(a){mo(function(){N(null,function(){W(a.videoCountShortText)});
R("PLAYLISTS")})}
function hp(a,b){V(a,"ytm-compact-playlist-renderer",b,function(){jo({thumbnail:a.thumbnail,navigationEndpoint:a.navigationEndpoint,headline:a.title,A:[a.shortBylineText,a.viewCountText],overlay:function(){return gp(a)},
menu:a.menu})})}
;function ip(a,b){V(a,"ytm-visit-site-cta-renderer",b,function(){W(a.text)})}
;var jp=Y({visitSiteCtaRenderer:ip});function kp(a){a.impressionUrls&&H(function(){Di(a.impressionUrls)})}
;function lp(a){mo(function(){N(null,function(){W(a.videoCountShortText)});
R("MIX")})}
function mp(a,b){V(a,"ytm-compact-radio-renderer",b,function(){jo({thumbnail:a.thumbnail,navigationEndpoint:a.navigationEndpoint,headline:a.title,A:[a.longBylineText],overlay:function(){return lp(a)},
menu:a.menu})})}
;function np(a){var b=I(function(){return a.thumbnailOverlays[0].thumbnailOverlayBottomPanelRenderer.text});
N({className:"video-thumbnail-overlay-bottom"},function(){W(b)})}
function op(a,b){V(a,"ytm-compact-show-renderer",b,function(){jo({thumbnail:a.thumbnailRenderer.showCustomThumbnailRenderer.thumbnail,navigationEndpoint:a.navigationEndpoint,headline:a.title,A:[a.shortBylineText],overlay:function(){return np(a)},
menu:a.menu})})}
;var pp=Y({compactChannelRenderer:ep,compactPlaylistRenderer:hp,compactRadioRenderer:mp,compactShowRenderer:op,compactVideoRenderer:$o});function qp(a){var b=fn(a.thumbnail);L("ytm-simple-card",null,function(){U(a.endpoint,{className:"simple-card-endpoint"},function(){N({className:"simple-card-thumbnail background-image",style$:"background-image: url("+b+");"});Lk({className:"simple-card-title"},function(){W(a.title)})})})}
;var rp=Y({thumbnailOverlayTimeStatusRenderer:lo,menuRenderer:co});var sp=Y({richListHeaderRenderer:function(a,b){V(a,"ytm-rich-list-header-renderer",b,function(){Lk({className:"rich-list-header-title"},function(){W(a.title)})})},
searchRefinementCardRenderer:function(a,b){V(a,"ytm-search-refinement-card-renderer",b,function(){qp({endpoint:a.searchEndpoint,thumbnail:a.thumbnail,title:a.query})})},
videoCardRenderer:function(a,b){var c=[a.bylineText,a.metadataText];V(a,"ytm-video-card-renderer",b,function(){var b=a.thumbnailOverlays;U(a.navigationEndpoint,{className:"video-card-image","aria-hidden$":!a.thumbnailOverlays},function(){ho(a.thumbnail,function(){no(function(){return rp(b)})})});
N({className:"video-card-metadata"},function(){N({className:"video-card-title-container"},function(){U(a.navigationEndpoint,{},function(){Lk({},function(){W(a.title)})});
rp(a.menu,{className:"video-card-menu"})});
U(a.navigationEndpoint,{className:"video-card-metadata-content"},function(){N({className:"subhead"},function(){c.filter(function(a){return a}).forEach(function(a){N({className:"small-text"},function(){W(a,{D:!0})})})})})})})},
albumCardRenderer:function(a,b){V(a,"ytm-album-card-renderer",b,function(){qp({endpoint:a.navigationEndpoint,thumbnail:a.thumbnail,title:a.title})})}});var tp=Y({buttonRenderer:X,toggleButtonRenderer:En});var up=Y({buttonRenderer:X});var vp=Y({buttonRenderer:X});var wp=Y({menuRenderer:co});function xp(a,b,c){a&&b&&U(b,{"aria-label$":c},function(){Nn(a,{className:"large-media-icon","aria-hidden$":!!c})})}
function yp(a){var b=a.accessibility,c=a.thumbnail,d=a.channelThumbnail,e=a.channelEndpoint,f=a.Ma,g=a.navigationEndpoint,k=a.headline,m=void 0===a.A?[]:a.A,p=a.na,D=a.ca,O=a.overlay,M=void 0===a.menu?null:a.menu,oa=void 0===a.extraContent?r:a.extraContent;L("ytm-large-media-item",null,function(){U(g,{"aria-hidden$":!0,className:"large-media-item-thumbnail-container"},function(){go(c,O)});
N({className:"details"},function(){N({className:"large-media-channel"},function(){xp(d,e,f);U(g,{className:"large-media-item-extra-endpoint","aria-hidden$":!0})});
N({className:"large-media-item-info cbox"},function(){U(g,{className:"large-media-item-metadata","aria-label$":b},function(){Kk(null,function(){W(k)});
$n(p,{className:"large-media-item-top-badges"});N({className:"subhead","aria-hidden":!!b},function(){m.forEach(function(a){P({className:"text-info small-text"},function(){W(a,{D:!0})})})});
$n(D);oa()});
wp(M,{className:"large-media-item-menu"})})})})}
;function zp(a){a.impressionUrls?H(function(){Di(a.impressionUrls);C("mweb_gen_204_for_masthead_ads")&&Bi("/gen_204?action=mweb_ads_imp&masthead=true")}):C("mweb_gen_204_for_masthead_ads")&&Bi("/gen_204?action=mweb_ads_imp&masthead=false")}
;function Ap(a,b){a.onclick=function(a){(a=Nc(a.target,"a"))&&"/watch"==tk(a.href)&&Di(b.clickTrackingUrls)}}
;var Bp=Y({thumbnailOverlayResumePlaybackRenderer:ko,thumbnailOverlayTimeStatusRenderer:lo,visitSiteCtaRenderer:ip});var Cp=Y({menuRenderer:co});var Dp={compactChannelRenderer:ep,compactPlaylistRenderer:hp,compactRadioRenderer:mp,compactShowRenderer:op,compactStationRenderer:function(a,b){V(a,"ytm-compact-station-renderer",b,function(){jo({thumbnail:a.thumbnail,navigationEndpoint:a.navigationEndpoint,headline:a.title,A:[a.description,a.videoCountText]})})},
compactVideoRenderer:$o};var Ep=E("SHOW_MORE"),Fp=Y(Dp);function Gp(a){N({className:"center"},function(){gl("MORE_CHEVRON",Ep,a)})}
function Hp(a){V(a,"ytm-vertical-list-renderer",null,function(b){var c=b.hasAttribute("aria-expanded")?void 0:a.collapsedItemCount,d=a.items.length>c;Fp(a.items.slice(0,c),{className:"item"});d&&Gp(function(){b.setAttribute("aria-expanded","true");rf(b,Hp,a)})})}
;var Jp=Y({menuRenderer:co,verticalListRenderer:Hp,shelfFeaturedTextBadgeRenderer:Ip});function Ip(a){Xn({className:"shelf-featured-badge"},function(){W(a.label)})}
function Kp(a){a.thumbnail&&Nn(a.thumbnail,{className:"shelf-icon"});N({className:"shelf-title-bar"},function(){Kk(null,function(){W(a.title,{D:!0})});
Jp(a.badges);W(a.titleAnnotation,{D:!0})})}
function Lp(a){N({className:"shelf-header cbox"},function(){a.endpoint?U(a.endpoint,{className:"shelf-header-endpoint cbox"},function(){Kp(a)}):Kp(a);
Jp(a.menu)})}
function Mp(a,b){V(a,"ytm-shelf-renderer",b,function(){Lp(a);Jp(a.content)})}
;var Np=Y({metadataRowHeaderRenderer:function(a,b){V(a,"ytm-metadata-row-header-renderer",b,function(){a.hasDividerLine?Kk({className:"metadata-row-header-header"},function(){W(a.content)}):W(a.content)})},
metadataRowRenderer:function(a,b){V(a,"ytm-metadata-row-renderer",b,function(){P({className:"metadata-row-title"},function(){W(a.title)});
P({className:"metadata-row-items"},function(){a.contents.forEach(function(a){P({className:"metadata-row-item"},function(){W(a)})})})})}});
function Op(a,b){V(a,"ytm-metadata-row-container-renderer",b,function(){Np(a.rows)})}
;var Pp=Y({metadataBadgeRenderer:Yn,standaloneCollectionBadgeRenderer:function(a,b){V(a,"ytm-standalone-collection-badge-renderer",b,function(){Xn({className:"standalone-collection-badge","data-type$":I(function(){return a.style.badgeStyle})},function(){R(I(function(){return a.icon.iconType}));
a.iconText&&Xn({className:"icon-text soft-background"},function(){y(a.iconText)});
W(a.label)})})}});
function Qp(a,b){a&&L("ytm-standalone-badge-supported-renderer",b,function(){Pp(a)})}
;var Rp=E("SHOW_MORE"),Sp=E("SHOW_LESS"),Vp=Y({buttonRenderer:X,metadataRowContainerRenderer:Op,slimOwnerRenderer:function(a,b){V(a,"ytm-slim-owner-renderer",b,function(){U(a.navigationEndpoint,{className:"slim-owner-icon-and-title"},function(){Nn(a.thumbnail,{className:"slim-owner-profile-icon"});N(null,function(){Kk(null,function(){W(a.title,{D:!0})});
N({className:"subhead"},function(){W(I(function(){return a.subscribeButton.subscribeButtonRenderer.subscriberCountText}))})})});
Mn(a.subscribeButton.subscribeButtonRenderer,{},!0)})},
slimMetadataButtonRenderer:Tp,slimMetadataToggleButtonRenderer:Up,toggleButtonRenderer:En});function Tp(a){Vp(a.button)}
function Up(a){Vp(a.button)}
var Wp=al("ytm-slim-video-metadata-renderer",function(a,b){function c(){g=!g;b()}
function d(a,b){var d=a.topStandaloneBadge||[],e=a.badges||[];N({className:"slim-video-metadata-header",onclick:c},function(){N({className:"slim-video-metadata-title-and-badges"},function(){Qp(d);Jk({className:"slim-video-metadata-title"},function(){W(a.title)});
$n(e);N({className:"secondary-text"},function(){W(g?a.expandedSubtitle:a.collapsedSubtitle)})});
R(g?"EXPAND_LESS":"EXPAND_MORE",{className:b?"slim-video-metadata-header-expand-placeholder":"",role$:"button","aria-label$":g?Sp:Rp,"aria-expanded$":g})})}
function e(a){N({className:"slim-video-metadata-actions"},function(){Vp(a.buttons)})}
function f(a){g&&N({className:"secondary-text"},function(){N({className:"slim-video-metadata-info user-text"},function(){N(null,function(){W(a.dateText)});
N({className:"slim-video-metadata-description secondary-text"},function(){W(a.description)})});
N({className:"slim-video-metadata-info"},function(){Vp(a.metadataRowContainer)})})}
var g=!1;return{O:function(b){a.data=b;var c=!!b._isPlaceholderData;d(b,c);c||(e(b),Vp(b.owner),f(b))},
V:function(a,b){a!=b&&(g=!1)}}});var Xp=J.Ga,Yp=J.qb,Zp=J.rb,$p=J.sb,aq=J.tb,bq=J.W;function cq(a){a=hd("/flag","v",a);return{modal:{modalWithTitleAndButtonRenderer:{title:{runs:[{text:Yp}]},button:{buttonRenderer:{style:"STYLE_BRAND",size:"SIZE_DEFAULT",isDisabled:!1,text:{runs:[{text:Xp}]},navigationEndpoint:{urlEndpoint:{url:a},webNavigationEndpointData:{url:a}}}}}}}}
;var dq=E("SHOW_MORE"),eq=E("SHOW_LESS"),fq=Y({buttonRenderer:X,menuRenderer:co,metadataRowContainerRenderer:Op,subscribeButtonRenderer:Mn}),gq=al("ytm-video-main-content-renderer",function(a,b){function c(){m=!m;b()}
function d(a){N({className:"cbox"},function(){Nn(a.thumbnail,{className:"video-main-content-profile-icon"});fq(a.subscribeButton)});
N({className:"video-main-content-info user-text"},function(){N(null,function(){W(a.dateText)});
N({className:"video-main-content-description secondary-text"},function(){W(a.description)})});
fq(a.metadataRowContainer)}
function e(a,b){var d=a.topStandaloneBadge||[],e=a.badges||[];N({className:"video-main-content-header",onclick:c},function(){N({className:"video-main-content-title-and-badges"},function(){Qp(d,{className:"video-main-content-top-standalone-badge"});Jk({className:"video-main-content-title"},function(){W(a.title)});
$n(e)});
R(m?"EXPAND_LESS":"EXPAND_MORE",{style:b?"visibility: hidden;":"",role$:"button","aria-label$":m?eq:dq})})}
function f(a){N(null,function(){P({className:"video-main-content-byline"},function(){W(a.shortBylineText)});
P({className:"video-main-content-view-count secondary-text"},function(){W(a.viewCountText)})})}
function g(a){m&&N({className:"secondary-text","aria-hidden$":!m,"aria-expanded$":m},function(){d(a)})}
function k(a){N({className:"video-main-content-actions cbox"},function(){N({className:"video-main-content-like-dislike"},function(){fq(a.menu)});
fq(a.addToButton);fq(a.shareButton);a.flagButton?fq(a.flagButton):X({accessibilityData:{accessibilityData:{label:$p}},style:"STYLE_DEFAULT",size:"SIZE_DEFAULT",icon:{iconType:"FLAG"},isDisabled:!1,navigationEndpoint:{modalEndpoint:ol()?cq(a.videoId):{modal:{modalWithTitleAndButtonRenderer:{title:{runs:[{text:aq}]},content:{runs:[{text:Zp}]},button:{buttonRenderer:{style:"STYLE_BRAND",size:"SIZE_DEFAULT",isDisabled:!1,text:{runs:[{text:bq}]},navigationEndpoint:{signInEndpoint:{},webNavigationEndpointData:{url:nl()}}}}}}}}})})}
var m=!1;return{O:function(a){var b=!!a._isPlaceholderData;e(a,b);f(a);b||(k(a),g(a))},
V:function(a,b){a!=b&&(m=!1)}}});var hq=Y({thumbnailOverlayResumePlaybackRenderer:ko,thumbnailOverlayTimeStatusRenderer:lo});function iq(a,b,c){(a||U||c)&&Rk(null,function(){W(a);U(b,{className:"search-query-correction-endpoint"},function(){W(c)})})}
function jq(a){var b=a.ba,c=a.correctedQuery,d=a.aa,e=a.ka,f=a.originalQuery,g=a.Aa;L("c3-search-query-correction",null,function(){iq(b,d,c);iq(e,g,f)})}
;var kq={},lq={};function mq(){N({className:"cbox"},function(){N({className:"spinner"})})}
function nq(a,b){delete lq[a];kq[a]=b}
function oq(a,b){var c=void 0===b?{}:b,d=void 0===c.Ba?!0:c.Ba;kq[a]||(lq[a]=!0);return function(b,c){(kq[a]||(d?mq:r))(b,c)}}
;var pq={backgroundPromoRenderer:function(a){V(a,"ytm-background-promo-renderer",{className:"extend"},function(){uo({title:a.title,subtitle:a.bodyText,thumbnail:a.thumbnail})})},
channelAboutMetadataRenderer:function(a,b){var c=a.primaryLinks||[];V(a,"ytm-channel-about-metadata-renderer",b,function(){N({className:"user-text"},function(){W(a.description)});
c.forEach(function(a){return Kn(a)});
N(null,function(){Rk(null,function(){W(a.subscriberCountText)});
Rk(null,function(){W(a.joinedDateText)});
Rk(null,function(){W(a.viewCountText)})})})},
channelFeaturedVideoRenderer:function(a,b){V(a,"ytm-channel-featured-video-renderer",b,function(){U(a.navigationEndpoint,null,function(){go(a.thumbnail);Kk({className:"details"},function(){W(a.title)})})})},
channelListItemRenderer:function(a,b){V(a,"ytm-channel-list-item-renderer",b,function(){U(a.navigationEndpoint,{className:"cbox channel-list-item-link","presentation-style$":vo(a)},function(){Nn(a.thumbnail,{className:"channel-list-item-thumbnail cbox"});N({className:"channel-list-item-title"},function(){W(a.title)});
a.liveStatus&&N({className:"channel-list-item-live-status"},function(){W(a.liveStatus)})})})},
channelSearchBoxRenderer:yo,clarificationRenderer:function(a,b){switch(a.style){case "CLARIFICATION_RENDERER_STYLE_SMALL":Ao(a,b);break;case "CLARIFICATION_RENDERER_STYLE_MEDIUM":Do(a,b);break;case "CLARIFICATION_RENDERER_STYLE_LARGE":Eo(a,b)}},
compactAutoplayRenderer:function(a,b){dp(a);bp(a.contents,b)},
compactChannelRenderer:ep,compactOfferModuleRenderer:function(a,b){V(a,"ytm-compact-offer-module-renderer",b,function(){N({className:"cbox"},function(){N({className:"compact-offer-module-title"},function(){Jk(null,function(){W(a.title)});
N(null,function(){W(a.subtitle)})});
X(a.offerButton.buttonRenderer)})})},
compactLinkRenderer:fp,compactPlaylistRenderer:hp,compactPromotedVideoRenderer:function(a,b){a._adformat="2_6";a._el="adunit";V(a,"ytm-compact-promoted-video-renderer",b,function(b){dk(b,"_data",1,function(){return kp(a)});
jo({thumbnail:a.thumbnail,navigationEndpoint:a.navigationEndpoint,headline:a.title,menu:a.menu,jb:Yo()?340:void 0,extraContent:function(){N({className:"compact-promoted-video-byline-container"},function(){Xn({className:"compact-promoted-video-badge"},function(){y(J.Fa)});
P({className:"subhead"},function(){W(a.shortBylineText,{D:!0})})});
P({className:"subhead"},function(){W(a.viewCountText)});
jp(a.ctaRenderer)},
overlay:function(){no(function(){N({className:"compact-promoted-video-length-overlay"},function(){return W(a.lengthText)})})}})})},
compactRadioRenderer:mp,compactShowRenderer:op,compactVideoRenderer:$o,didYouMeanRenderer:function(a,b){V(a,"c3-did-you-mean-renderer",b,function(){jq({ba:a.didYouMean,correctedQuery:a.correctedQuery,aa:a.correctedQueryEndpoint})})},
feedEntryRenderer:function(a,b){V(a,"ytm-feed-entry-renderer",b,function(){N({className:"feed-entry-header cbox"},function(){U(a.ownerEndpoint,null,function(){Nn(a.ownerThumbnail,{className:"feed-entry-profile-icon"})});
N({className:"feed-entry-text"},function(){W(a.title);P({className:"feed-entry-time secondary-text"},function(){W(a.timeText)})})});
pp(a.item)})},
horizontalCardListRenderer:function(a,b){V(a,"ytm-horizontal-card-list-renderer",b,function(){sp(a.header,{className:"horizontal-card-list-header"});N({className:"horizontal-card-list-cards"},function(){sp(a.cards,{className:"horizontal-card-list-card"})})})},
includingResultsForRenderer:function(a,b){V(a,"c3-including-results-for-renderer",b,function(){jq({ba:a.includingResultsFor,correctedQuery:a.correctedQuery,aa:a.correctedQueryEndpoint,ka:a.searchOnlyFor,originalQuery:a.originalQuery,Aa:a.originalQueryEndpoint})})},
itemSectionHeaderRenderer:function(a,b){V(a,"ytm-item-section-header-renderer",b,function(){tp(a.buttons)})},
limitedStateMessageRenderer:function(a,b){V(a,"ytm-limited-state-message-renderer",b,function(){N({className:"limited-state-message-header cbox"},function(){R(a.icon.iconType,{className:"limited-state-message-icon"});W(a.headerText)});
Rk(null,function(){W(a.subtext)});
N({className:"limited-state-message-buttons cbox"},function(){up(a.learnMoreButton);up(a.goHomeButton)})})},
messageRenderer:function(a,b){V(a,"ytm-message-renderer",b,function(){W(a.text)})},
noResultsFoundShowingResultsForRenderer:function(a,b){V(a,"c3-no-results-found-showing-results-for-renderer",b,function(){jq({ba:a.showingResultsFor,correctedQuery:a.correctedQuery,aa:a.correctedQueryEndpoint,ka:a.noResultsFound,originalQuery:a.originalQuery,Aa:a.originalQueryEndpoint})})},
playlistNotificationRenderer:function(a,b){V(a,"ytm-playlist-notification-renderer",b,function(){N({className:"playlist-notification"},function(){N({className:"playlist-notification-text"},function(){W(a.text)});
vp(a.actions)})})},
playlistVideoListRenderer:function(a,b){V(a,"ytm-playlist-video-list-renderer",b,function(){so(a.contents,{className:"item"});to(a)})},
promotedVideoRenderer:function(a,b){a._adformat="1_8";V(a,"ytm-promoted-video-renderer",b,function(b){dk(b,"_data",1,function(){return zp(a)});
Ap(b,a);yp({accessibility:null,thumbnail:a.thumbnail,channelThumbnail:a.channelThumbnail,channelEndpoint:a.channelEndpoint,Ma:null,navigationEndpoint:a.navigationEndpoint,headline:a.title,A:[a.description],na:null,ca:null,menu:a.menu,overlay:function(){no(function(){return Bp(a.thumbnailOverlays)})},
extraContent:function(){N({className:"promoted-video-byline-container"},function(){Xn({className:"promoted-video-badge"},function(){y(J.Fa)});
P({className:"subhead"},function(){W(a.shortBylineText,{D:!0})})});
P({className:"promoted-video-shelf-title"},function(){W(a.shortBylineText)});
Bp(a.ctaRenderer)}})})},
purchaseItemRenderer:function(a,b){V(a,"ytm-purchase-item-renderer",b,function(){jo({thumbnail:a.thumbnail,navigationEndpoint:a.navigationEndpoint,headline:a.title,A:[a.priceText],menu:a.menu})})},
resultsWithoutQuotesRenderer:function(a,b){V(a,"c3-results-without-quotes-renderer",b,function(){jq({ba:a.resultsFor,correctedQuery:a.correctedQuery,aa:a.correctedQueryEndpoint,ka:a.withoutQuotes})})},
searchHistoryQueryRenderer:function(a,b){V(a,"ytm-search-history-query-renderer",b,function(){N({className:"cbox"},function(){U(a.navigationEndpoint,{className:"search-history-query-text-content"},function(){N({className:"search-history-query-query"},function(){y(a.query)});
N({className:"search-history-query-latest-search-time"},function(){W(a.latestSearchTimeText)})});
Cp(a.menu)})})},
slimVideoMetadataRenderer:Wp,shelfRenderer:Mp,showingResultsForRenderer:function(a,b){V(a,"c3-showing-results-for-renderer",b,function(){jq({ba:a.showingResultsFor,correctedQuery:a.correctedQuery,aa:a.correctedQueryEndpoint,ka:a.searchInsteadFor,originalQuery:a.originalQuery,Aa:a.originalQueryEndpoint})})},
simpleTextSectionRenderer:function(a,b){V(a,"ytm-simple-text-section-renderer",b,function(){a.lines.forEach(function(a){Rk({className:"simple-text-section-content secondary-text"},function(){W(a)})})})},
subscriptionProductRenderer:oq("subscriptionProductRenderer"),subscriptionProductUpsellOfferRenderer:oq("subscriptionProductUpsellOfferRenderer"),videoMainContentRenderer:gq,videoWithContextRenderer:function(a,b){var c=I(function(){return a.channelThumbnail.channelThumbnailWithLinkRenderer});
V(a,"ytm-video-with-context-renderer",b,function(){Xb()?vf():yp({accessibility:yn(a.accessibility),thumbnail:a.thumbnail,channelThumbnail:I(function(){return c.thumbnail}),
channelEndpoint:I(function(){return c.navigationEndpoint}),
Ma:c&&yn(c.accessibility),navigationEndpoint:a.navigationEndpoint,headline:a.headline,A:[a.shortBylineText,a.shortViewCountText,a.publishedTimeText],na:a.topStandaloneBadge,ca:a.badges,menu:a.menu,overlay:function(){no(function(){return hq(a.thumbnailOverlays)})}})})}};function qq(a){var b=a.items,c=a.ma,d=a.ja,e=a.chunkSize,f=void 0===a.oncomplete?r:a.oncomplete,g=a.oc,k=x;a=k.g=k.g||{};if(b!=a.items&&g)vf();else if(b==a.items&&!g&&a.Ka)vf();else{b!=a.items&&(a.count=d-e);a.items=b;a.count=Math.min(a.count+e,b.length);for(g=0;g<a.count;g++)c(b[g]);a.count<b.length?(a.Ka=!0,H(function(){requestAnimationFrame(function(){pf(k,qq,{items:b,ma:c,ja:d,chunkSize:e,oncomplete:f,oc:!0})})})):(a.Ka=!1,f())}}
function rq(a){L("lazy-list",null,function(){qq(a)})}
;function sq(a){a.dispatchEvent(new CustomEvent("ytm-load-more",{bubbles:!0,detail:a}))}
function tq(){function a(){d||(d=!0,H(b))}
function b(){function a(a){a=a.getBoundingClientRect();return a.height&&a.top<=b}
d=!1;var b=((document.body||document.documentElement).scrollTop||window.pageYOffset||0)+1.7*window.innerHeight;c.filter(a).forEach(sq);c=c.filter(function(b){return b.parentNode&&!a(b)})}
var c=[],d=!1;window.addEventListener("touchmove",a);window.addEventListener("scroll",a,!0);window.addEventListener("resize",a);window.addEventListener("state-navigateend",a);return{observe:function(a){c.push(a)}}}
var uq="IntersectionObserver"in window?new IntersectionObserver(function(a,b){a.filter(function(a){return a.intersectionRect.height}).forEach(function(a){a=a.target;
b.unobserve(a);sq(a)})},{rootMargin:"70%",
threshold:.01}):tq();function vq(a,b,c){var d=b.nextContinuationData;d&&L("c3-infinite-scroll-continuation",{className:"spinner",container:a,nextContinuationData:d,Oa:c},function(a){dk(a,"continuation",d,function(){uq.observe(a)})})}
;var wq=Y(pq);function xq(a){if(a.continuations){var b="related-items"==a.sectionIdentifier;N({className:"vbox"},function(){a.continuations.forEach(function(c){Yo()&&b?vq(a,c,"itemSectionContinuation"):ro(a,c,"itemSectionContinuation")})})}}
function yq(a){wq(a,{className:"item"})}
function zq(a,b){var c=a.contents||[];V(a,"ytm-item-section-renderer",b,function(b){b.setAttribute("section-identifier",a.sectionIdentifier||"");wq(a.header);rq({items:c,ma:yq,ja:6,chunkSize:6,oncomplete:function(){return xq(a)}})})}
;var Bq=Y({searchFilterGroupRenderer:Aq});function Cq(a){return"FILTER_STATUS_SELECTED"==a.status}
function Dq(a){a=a.target;(a=a.options[a.selectedIndex].Xb)&&!Cq(a)&&a.navigationEndpoint&&T(a.navigationEndpoint,{})}
function Eq(a){Qk({className:"option",disabled:"FILTER_STATUS_DISABLED"==a.status,selected:Cq(a),Xb:a},function(){W(a.label)})}
function Aq(a,b){var c=a.filters.map(function(a){return a.searchFilterRenderer}),d=c.some(function(a){return!Cq(a)&&"FILTER_STATUS_DISABLED"!=a.status});
V(a,"ytm-search-filter-group-renderer",b,function(a){a.setAttribute("data-has-options",d);Vn({onchange:Dq},null,function(){c.forEach(Eq)})})}
;var Fq=Y({channelAgeGateRenderer:function(a,b){V(a,"ytm-channel-age-gate-renderer",b,function(){N({className:"channel-age-gate-header"},function(){a.avatar&&Nn(a.avatar,{className:"channel-age-gate-profile-icon"});Ik(null,function(){W(a.channelTitle)})});
N(null,function(){Jk(null,function(){W(a.header)});
Rk({className:"channel-age-gate-text"},function(){W(a.mainText)});
N({className:"cbox"},function(){Tn(a.signInButton)});
Rk({className:"channel-age-gate-text"},function(){W(a.secondaryText)})})})},
channelListSubMenuRenderer:function(a,b){V(a,"ytm-channel-list-sub-menu-renderer",b,function(){N({className:"channel-list-sub-menu-avatars","aria-hidden$":!0},function(){Un(a.contents)});
U(a.channelsEndpoint,{className:"channel-list-sub-menu-show-all","aria-label$":E("ALL_CHANNELS_LABEL")},function(){il()})})},
channelSubMenuRenderer:function(a,b){V(a,"ytm-channel-sub-menu-renderer",b,function(){N({className:"section"},function(){Wn(a.contentTypeSubMenuItems);Wn(a.sortFilterSubMenuItems)})})},
commentSectionRenderer:oq("commentSectionRenderer"),itemSectionRenderer:zq,searchSubMenuRenderer:function(a){V(a,"ytm-search-sub-menu-renderer",{className:"section"},function(){Bq(a.groups)})},
shelfRenderer:Mp,universalWatchCardRenderer:oq("universalWatchCardRenderer")});function Gq(a){(a.continuations||[]).forEach(function(b){return vq(a,b)})}
function Hq(a){var b=a.subMenu,c=a.contents||[];V(a,"ytm-section-list-renderer",null,function(){Fq(b);rq({items:c,ma:Fq,ja:3,chunkSize:3,oncomplete:function(){return Gq(a)}})})}
;var Iq=Y({activeAccountHeaderRenderer:function(a){V(a,"ytm-active-account-header-renderer",null,function(){N({className:"active-account-header-channel-art cover"},function(){gn(a.channelArt,{className:"cover",alt:""})});
U(a.channelEndpoint,{className:"active-account-photo-container","aria-label$":Dm(a.accountName)},function(){Nn(a.accountPhoto,{className:"active-acount-icon"})});
U({webNavigationEndpointData:{url:"/channel_switcher"}},{className:"active-account-name image-overlay-text cbox","aria-label$":J.nb},function(){W(a.accountName);R("EXPAND_MORE",{className:"image-overlay-icon"})});
Sn(a);Rn(a.fab)})},
sectionListRenderer:Hq,signInPromoWithBackgroundRenderer:function(a){V(a,"ytm-sign-in-promo-with-background-renderer",{className:"extend"},function(){uo({title:a.promoHeadline,subtitle:a.promoSubtitle,thumbnail:a.promoImage,header:function(){U(a.navigationEndpoint,{className:"sign-in-header cbox"},function(){R("AVATAR_CIRCLE_BLUE",{className:"sign-in-icon"});N({className:"sign-in-header-text"},function(){y(J.W)})})},
footer:function(){U(a.navigationEndpoint,{"aria-label$":J.W,className:"sign-in-link"},function(){sl({className:"sign-in-button"},null,function(){y(J.W)})})}})})},
lugashFooterRenderer:function(a,b){V(a,"ytm-lugash-footer-renderer",b,function(){N({className:"center secondary-text"},function(){W(a.title)})})}});var Jq=E("MORE_OPTIONS");function Kq(a){a.preventDefault();a.stopPropagation()}
function Lq(a){var b=a.data;a=a.selected;U(b.endpoint,{"aria-label$":yn(b.accessibility),role$:"tab","aria-selected$":a,className:"scbrr-tab center","is-placeholder$":b._isPlaceholder,onclick:a?Kq:null},function(){b.icon?R(b.icon.iconType):b.title&&y(b.title)})}
function Mq(a){var b=a.data,c=a.selected;N({Z:a.url,hidden:!c},function(){Ck(c,function(){Iq(b.header);Iq(b.content);Iq(b.footer)})})}
function Nq(a){a.length&&lm({icon:"EXPAND_MORE",label:Jq,content:function(){a.forEach(function(a){U(a.data.endpoint,null,function(){fm(null,function(){y(a.data.title)})})})}})}
;var Oq=Y({c4TabbedHeaderRenderer:function(a,b){V(a,"ytm-c4-tabbed-header-renderer",b,function(){Pn(a);N({className:"c4-tabbed-header-channel cbox"},function(){Nn(a.avatar,{className:"c4-tabbed-header-profile-icon"});Qn(a)})})},
playlistHeaderRenderer:function(a,b){V(a,"ytm-playlist-header-renderer",b,function(){N({className:"playlist-header"},function(){Gn(a.playlistHeaderBanner);N({className:"section"},function(){Hn(a);Jn(a)});
U(a.playEndpoint,{className:"playlist-play-all-button center",role$:"button",title:Fn},function(){R("PLAY_ALL")})});
In(a)})},
singleColumnBrowseResultsRenderer:function(a,b){V(a,"ytm-single-column-browse-results-renderer",b,function(){if(a){var c=K().pathname,d=a.tabs.map(function(a){a=a.tabRenderer;var b=Mm(a.endpoint)||c;return{data:a,url:b,selected:a.selected}}),e=b.isChannel,f=e?3:Number.MAX_VALUE;
N({className:"scbrr-tabs cbox",hidden:2>d.length,"is-channel$":e,role$:"tablist"},function(){var a=d.slice(f);d.slice(0,f).forEach(Lq);Nq(a)});
N(null,function(){d.forEach(Mq)})}})}});
function Pq(a){V(a,"ytm-browse",void 0,function(){Oq(a.header);Oq(a.contents,{isChannel:!(!a.header||!a.header.c4TabbedHeaderRenderer)})})}
;function Qq(a){V(a,"ytm-experiments",{},function(){})}
;var Rq=Y({sectionListRenderer:Hq});function Sq(a){V(a,"ytm-search",{Z:"results"},function(){Rq(a.contents)})}
;var Uq={className:"volume-keys",content:Tq},Vq,Wq="";function Xq(){Vq&&(document.body.removeChild(Vq),Vq=null)}
function Yq(a){a&&L("hotkeys-overlay",{className:a.className,dir$:Wq},a.content)}
function Tq(){L("svg",{viewBox$:"0 0 108 36"},function(){L("defs",null,function(){L("filter",{filterUnits$:"objectBoundingBox",height$:"150%",id$:"volume-keys",width$:"114%",x$:"-7%",y$:"-18%"},function(){L("feDropShadow",{dx$:"0",dy$:"2","flood-color$":"#000000","flood-opacity$":"1",stdDeviation$:"2"})})});
L("rect",{"fill-opacity$":".13",filter$:"url(#volume-keys)",height$:"28",rx$:"14",transform$:"translate(4 2)",width$:"100"});L("rect",{fill$:"#fff",height$:"28",rx$:"14",transform$:"translate(4 2)",width$:"100"});L("path",{d$:B("KAIOS_VOLUME_HOTKEYS"),fill$:"#757575"})})}
function Zq(a){Wq="out";pf(Vq,Yq,a);setTimeout(Xq,1E4)}
;var $q=Y({buttonRenderer:X,toggleButtonRenderer:En});function ar(a){Sm({N:J.Lb,disabled:!a},a,function(){R("SKIP_PREVIOUS")})}
function br(a){Sm({N:J.Gb,disabled:!a},a,function(){R("SKIP_NEXT")})}
function cr(a){var b=a;a=b.data;var c=b.ta;L("ytm-playlist-controls",void 0,function(){N({className:"playlist-controls-primary"},function(){ar(c.qc);br(c.next)});
N({className:"playlist-controls-secondary"},function(){$q(a.saveButton);$q(a.shareButton)})})}
;function dr(a,b){var c=a.data,d=a.R;L("ytm-playlist-panel-header",b,function(){N({className:"playlist-panel-header-metadata"},function(){Kk({className:"playlist-panel-header-title"},function(){W(c.titleText,{D:!0})});
N({className:"small-text playlist-panel-header-subhead"},function(){c.isInfinite||y(c.currentIndex+1+" / "+c.totalVideos+" ");P({className:"playlist-panel-header-byline"},function(){W(c.shortBylineText)})})});
sl({className:"icon playlist-panel-header-icon"},null,function(){R(d?"EXPAND_LESS":"EXPAND_MORE")})})}
;var er=Y({thumbnailOverlayResumePlaybackRenderer:ko,thumbnailOverlayTimeStatusRenderer:lo});function fr(a,b){V(a,"ytm-playlist-panel-video-renderer",b,function(){Dk(a,function(){jo({thumbnail:a.thumbnail,navigationEndpoint:a.navigationEndpoint,lengthText:a.lengthText,headline:a.title,A:[a.shortBylineText],overlay:function(){no(function(){return er(a.thumbnailOverlays)})}})})})}
;var hr=Y({playlistPanelVideoRenderer:gr});function gr(a){fr(a,{className:"item",selected$:a.selected})}
function ir(a){N({className:"playlist-content section"},function(){rq({items:a.contents,ma:hr,ja:6,chunkSize:6})})}
var jr=al("ytm-playlist",function(a,b){function c(){d=!d;b()}
var d=!0;return{O:function(b){var e=b.data,g=b.ta;a.setAttribute("aria-expanded",d);dr({data:e,R:d},{onclick:c});N({hidden:!d},function(){cr({data:e,ta:g});ir(e)})},
V:function(a,b){a.data!=b.data&&(d=!0)}}});function kr(a){var b=I(function(){return a.autoplay.autoplay}),c=I(function(){return b.sets[0].previousButtonVideo}),d=I(function(){return b.sets[0].nextButtonVideo});
return{qc:c,next:d}}
;var lr=Y({itemSectionRenderer:zq,commentSectionRenderer:oq("commentSectionRenderer")});function mr(a){L("ytm-playability-status",void 0,function(){N({className:"playability-status-message"},function(){y(a.reason)});
"LOGIN_REQUIRED"==a.status&&sl({className:"playability-status-signin-button"},{onclick:pl},function(){y(J.W)})})}
;function nr(a){return!a||"OK"==I(function(){return a.playabilityStatus.status})||!!I(function(){return a.playabilityStatus.errorScreen.playerLegacyDesktopYpcTrailerRenderer})}
;var or=Y({singleColumnWatchNextResults:function(a,b){var c=I(function(){return a.results.results.contents})||[],d=I(function(){return a.playlist.playlist}),e=kr(a);
V(a,"ytm-single-column-watch-next-results-renderer",b,function(){d&&jr({data:d,ta:e});c.forEach(function(a){var b=a.itemSectionRenderer;lr(a,{className:"scwnr-content",isWatch:!0,"data-content-type$":b&&1<b.contents.length?"related":"result"})})})}}),pr=function(a){var b=a;
return function(){if(b){var a=b;b=null;a()}}}(function(){Wq="";
Vq||(Vq=document.createElement("div"),Vq.id="hotkeys-overlay-container",document.body.appendChild(Vq),pf(Vq,Yq));pf(Vq,Yq,Uq);H(Zq.bind(null,Uq))});
function qr(a){var b=I(function(){return a.videoDetails.thumbnail});
b&&gn(b,{className:"cover",alt:""})}
function rr(a){N({className:"player-size"},function(){nr(a)||a.playabilityStatus&&N({className:"cover center"},function(){qr(a);mr(a.playabilityStatus)})})}
function sr(a,b){V(a,"ytm-watch",{Z:"related"},function(){rr(b);or(a.contents)});
Kb&&B("IS_KAIOS_LAUNCHER")&&pr()}
;function tr(a,b){L("ytm-mealbar",null,function(){N({className:"mealbar-icon-and-text"},function(){a.hb?gn(a.hb,{className:"mealbar-icon",alt:""}):a.iconImage&&R(a.iconImage.iconType,{className:"mealbar-icon"});N(null,function(){N({className:"mealbar-title"},function(){W(a.title)});
(a.texts||[]).forEach(function(a){N({className:"mealbar-body secondary-text"},function(){W(a)})})});
a.Qa&&a.Xa&&N({className:"mealbar-dismissal-icon"},function(){gl("DISMISSAL",a.Qa,function(){a.Xa()})})});
N({className:"mealbar-buttons cbox"},function(){b()})})}
;var ur=Y({buttonRenderer:X}),vr;function wr(a,b){"true"==Wb.get("HideTicker","false")||V(a,"ytm-consent-bump-renderer",b,function(){var b=I(function(){return a.remindMeLaterButton.buttonRenderer.accessibility.label});
tr({iconImage:a.securityIcon,title:a.alertMessage,Qa:b,Xa:xr},function(){N({onclick:function(){return yr(a)},
className:"consent-bump-button-wrapper"},function(){ur(a.expressFlowButton)});
ur(a.reviewButton)})})}
function zr(a){pf(vr,function(){V(a,"ytm-consent-bump-renderer",{className:"dialog-container"},function(){N({className:"dialog"},function(){N({className:"dialog-header"},function(){gn(a.interstitialThumbnail,{className:"consent-bump-lightbox-image",alt:""});Jk({className:"consent-bump-lightbox-header"},function(){W(a.interstitialTitle)})});
N({className:"dialog-body secondary-text"},function(){W(a.interstitialMessage)});
N({className:"dialog-buttons"},function(){N({onclick:function(){return yr(a)},
className:"consent-bump-button-wrapper"},function(){ur(a.expressFlowButton)});
ur(a.reviewButton)})})})})}
function xr(){Vg("HideTicker","true",86400);S()}
function Ar(a,b){if(!Xg(a.origin))return!1;switch(a.data){case "cb-express-done":return S(),b.onExpressFlowSuccess&&T(b.onExpressFlowSuccess,b),!0;case "cb-ui-navigate":var c=I(function(){return b.reviewButton.buttonRenderer.navigationEndpoint.urlEndpoint.url});
c=pc(rc(c));Dc(K(),c);return!0}return!1}
function yr(a){var b=a.expressFlowUrl;if(b&&"https"==(b.match(ad)[1]||null)&&"consent.youtube.com"==cd(b)&&"/setx"==bd(b.match(ad)[5]||null)){b=Fc(b);var c=document.createElement("iframe");c.hidden=!0;document.body.appendChild(c);window.addEventListener("message",function f(b){Ar(b,a)&&window.removeEventListener("message",f)});
c.src=lc(b)}else throw Error("Incorrect express flow url received from server");}
;var Br=Y({alertRenderer:function(a,b){V(a,"ytm-alert-renderer",b,function(){W(a.text)})},
consentBumpRenderer:function(a,b){document.querySelector("ytm-consent-bump-renderer")||(a.forceConsent?(vr=document.createElement("div"),vr.className="consent-bump-lightbox",document.body.appendChild(vr),Gl(vr),zr(a),vr.querySelector(".consent-bump-lightbox-header").focus()):wr(a,b))},
mealbarPromoRenderer:oq("mealbarPromoRenderer",{Ba:!1}),surveyTriggerRenderer:oq("surveyTriggerRenderer",{Ba:!1})});function Cr(a){var b=a.page,c=a.response,d=c.responseContext&&c.responseContext.errors?c.responseContext.errors:[],e=c.alerts||[];$m(b,c);Dr(b,c,a.playerResponse);Er(d);Br(e);Br(c.survey);Br(c.overlay||I(function(){return a.playerResponse.messages[0]}));
N({key:"spinner",className:"spinner",hidden:!a.loading})}
function Dr(a,b,c){var d="browse"==a,e="watch"==a,f="search"==a,g="experiments"==a;N({hidden:!d,className:"page-container"},function(){Ck(d,function(){return Pq(b)})});
N({hidden:!e,className:"page-container"},function(){Ck(e,function(){return sr(b,c)})});
N({hidden:!f,className:"page-container"},function(){Ck(f,function(){return Sq(b)})});
N({hidden:!g,className:"page-container"},function(){Ck(g,function(){return Qq(b)})})}
function Er(a){a instanceof Array||(a=[J.vb]);a.forEach(function(a){N({className:"content-error"},function(){y(a)})})}
;function Fr(){Mh({Ua:!!C("lact_disable_scroll_mweb"),ab:!!C("lact_mobile_listeners")});n("ytglobal.ytUtilActivityCallback_",function(){Zk("user-activity")},void 0);
window.addEventListener("popstate",function(){vl||Nh()})}
;function Gr(){function a(a,b){var c=I(function(){return b.response.continuationContents});
if(!c)return{};if(c[a])return c[a];for(var d in c)return c[d];return{}}
function b(a,b,c){a[b]||(a[b]=[]);a[b].push.apply(a[b],ra(c[b]))}
function c(c,d,e){d=a(d,e);"items"in d&&b(c,"items",d);"contents"in d&&b(c,"contents",d);c.continuations=d.continuations;S()}
function d(a){return a.Z||d(a.parentNode)}
var e=Hr;window.addEventListener("ytm-load-more",function(a){var b=a.detail,f=b.container,m=b.nextContinuationData,p=b.Oa;b={itct:m.clickTrackingParams,ctoken:m.continuation};a=gd(d(a.target),b);e(a).tee(function(a){a.done&&c(f,p,a.value.response)},function(a){.01>Math.random()&&Gf(a);
c(f,p,{})})})}
;var Ir={},Jr=(Ir[0]="browse",Ir[1]="results",Ir[2]="watch",Ir[3]="home",Ir[4]="channels",Ir);function Kr(a,b){this.f=a;this.g=b}
Kr.prototype.b=function(){G(this.f,this.g)};
function Lr(a,b){this.f=a;this.g=b}
Lr.prototype.b=function(){Rj(this.f,this.g)};
function Mr(a){this.f=a}
Mr.prototype.b=function(){var a=uk(this.f),b=Jr[a],c=2==a?["vpl","pbs"]:["vpl"];A("TIMING_AFT_KEYS",2==a?["pbs"]:["cpt"]);A("TIMING_ACTION",b);a=B("TIMING_INFO",{});for(var d in a)Aj(d,a[d]);Aj("is_nav",1);(d=ti())&&Aj("csn",d);(d=B("PREVIOUS_ACTION",void 0))&&Aj("pa",d);a=Bj();a.p=B("CLIENT_PROTOCOL")||"unknown";a.t=B("CLIENT_TRANSPORT")||"unknown";Aj("yt_vis",Gj());if("cold"==a.yt_lt){d=cj.timing||{};d.navigationStart&&(G("srt",d.responseStart),1!=a.prerender&&zj(d.navigationStart));a=dj(d);0<a&&
G("fpt",a);G("nreqs",d.requestStart,void 0);G("nress",d.responseStart,void 0);G("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(G("nrs",d.redirectStart,void 0),G("nre",d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(G("ndnss",d.domainLookupStart,void 0),G("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(G("ntcps",d.connectStart,void 0),G("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=d.navigationStart&&0<d.connectEnd-d.secureConnectionStart&&
(G("nstcps",d.secureConnectionStart,void 0),G("ntcpe",d.connectEnd,void 0));cj.getEntriesByType&&Mj();d=[];if(document.querySelector&&cj&&cj.getEntriesByName)for(var e in mj)a=mj[e],Nj(e,a)&&d.push(a);d.length&&Aj("rc",d.join(","))}Jj(void 0)&&(e={},e.actionType=pj[B("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",d=Kj(void 0),ci(e,d));if("cold"==Bj().yt_lt){d=wj();e=Ij();for(var f in d)eb(f,"_")||"tick_"+f in e||xj(f,d[f]);f=Bj();for(var g in f)"info_"+g in e||Cj(g,f[g])}Oj(!0);if(c)for(g=0;g<
c.length;g++)f=c[g],e=B("TIMING_WAIT"),e&&f in e||((e=B("TIMING_WAIT",void 0))?e.push(f):A("TIMING_WAIT",[f]));yj();Rj("pis",window.pis)};
function Nr(a,b){this.f=a;this.g=b}
Nr.prototype.b=function(){Hj("n");sj();Oj(!1);A("TIMING_AFT_KEYS",[]);Aj("yt_lt","warm");A("TIMING_ACTION","");A("TIMING_WAIT",[]);gj();zj();Or.push(new Mr(this.f));zj(this.g)};
var Or=new Fm;function Pr(a,b){Or.push(new Lr(a,b))}
;function Qr(a){return(I(function(){return a.responseContext.serviceTrackingParams})||[]).filter(function(a){return"CSI"==a.service}).map(function(a){return a.params}).reduce(function(a,c){return a.concat(c)},[]).reduce(function(a,c){a[c.key]=c.value;
return a},Object.create(null))}
;var Rr=0;function Sr(a,b){b=void 0===b?z():b;ek(function(){var c=b;c=void 0===c?z():c;Or.push(new Kr(a,c))})}
function Tr(a){var b=a.detail.href;ek(function(){Pr("yt_lt","cold");Or.push(new Mr(b))})}
function Ur(){ek(function(){Pr("prt",1)})}
function Vr(a){var b=a.detail.href,c=z();ek(function(){Or.push(new Nr(b,c))});
Rr++}
function Wr(a){if(a.P){var b=a.P.contentLength,c=a.P.Vb;Sr("srt",a.P.chunks[0]);ek(function(){Pr("rcl",b);Pr("rce",c)})}}
function Xr(a){ek(function(){var b=I(function(){return a.timing.info}),c;
for(c in b)Pr(c,b[c])})}
function Yr(a){a=a.detail.data;var b=Zj;a.hc||a.response.player&&!b.response.player&&Sr("cfg")}
function Zr(){var a=window.innerHeight-((document.body||document.documentElement).scrollTop||window.pageYOffset||0);return[].concat(ra(document.querySelectorAll("img"))).filter(function(b){b=b.getBoundingClientRect();return 0<b.height&&b.top<a})}
function $r(a){a=a.getBoundingClientRect();return 50<a.height&&50<a.width}
function as(){var a=Zr().filter($r),b=Rr;Al(a).then(function(a){if(b==Rr){var c=a.length;a=a.filter(function(a){return"load"==a}).length;
Pr(ej.Lc,c);Pr(ej.Kc,a);Sr("vpl")}})}
function bs(a){a=a.detail.data;Wr(a);Xr(a.response);Sr("pdr");H(as)}
function cs(a){a=Qr(a);for(var b in a)Pr(b,a[b])}
function ds(a){var b=a.detail.data;Sr("cpt");ek(function(){cs(b.response.response);cs(b.response.playerResponse)})}
function es(){var a=Wb.get("H2_SERVER_PUSH","")==lk;ek(function(){Pr("h2pc",a?"1":"0")})}
;function fs(a){var b=new Image;Bc(b,a)}
function gs(a){return I(function(){return a.response.preconnect})}
function hs(a){a=gs(a.detail.data);!gs(Zj)&&a&&a.forEach(fs)}
;function is(a){var b=new Image;Bc(b,a)}
function js(a){var b=a.detail.data;C("mweb_preload_thumbs")&&(I(function(){return b.response.responseContext.webResponseContextExtensionData.webResponseContextPreloadData.preloadThumbnailUrls})||[]).forEach(is)}
;function ks(a,b){b=void 0===b?{}:b;a:switch(uk(a)){case 2:var c="watch";break a;case 1:c="search";break a;default:c="browse"}return{page:c,response:{contents:b,responseContext:{}},loading:!0}}
;function ls(a){return{replace:!1,data:{response:ks(a)}}}
;function ms(a,b,c){var d=uk(b),e=uk(a);b=jd(b,"list");a=jd(a,"list");if(b&&b==a&&d==e)return{replace:!1,data:{response:Object.assign({},c.response,{player:null})}}}
;function ns(a,b,c,d){if(2==uk(a)&&(b=wn(d)))return{replace:!1,data:{response:ks(a,{singleColumnWatchNextResults:{results:{results:{contents:[{itemSectionRenderer:{contents:[{videoMainContentRenderer:{_isPlaceholderData:!0,title:b.title||b.headline,shortBylineText:b.shortBylineText}}]}}]}}}})}}}
;function os(a,b,c,d){return[ms,ns,ls].reduce(function(e,f){return e||f(a,b,c,d)},null)}
;var ps=!1;function qs(a){a.detail.isCurrentlyFullscreen?wl():yl("fauxfullscreen")}
function rs(){if(ps||"#fauxfullscreen"==K().hash){var a=!ps,b=window.getPlayer();document.body.setAttribute("faux-fullscreen",a);b.setSize(NaN,NaN);b.setFauxFullscreen(a);a?window.addEventListener("touchmove",de):window.removeEventListener("touchmove",de);ps=a}}
;var ss=window.loadPlayerConfig,ts=null,us=null;n("yt.mobile.isMobilePersistentUniplayer",function(){return!0},void 0);
n("yt.mobile.supportsMwebAutonav",function(){return!0},void 0);
function vs(){var a=I(function(){return rk.firstElementChild.sendAbandonmentPing});
a&&a()}
function ws(){var a=window.getPlayer();if(!a)return{};var b=a.getCurrentTime();a=a.getOption("cc","track")||a.getOption("captions","track");return{minutes:String(Math.floor(b/60)),seconds:String(Math.floor(b)%60),vssId:a&&a.vss_id}}
function xs(){window.addEventListener(Jb?"touchstart":"click",function(){B("MWEB_SUPPORTS_AUTOPLAY",!1)&&(B("SERVE_MWEB_BLAZERPLAYER",!1)?Oi.fillPool(4):Oi.activateTags())},{capture:!0,
passive:!0});window.addEventListener("beforeunload",vs);window.addEventListener("state-navigatestart",vs);rk.addEventListener("click",function(a){Nc(a.target,"a")&&a.stopPropagation()})}
;var ys;function zs(){return I(function(){return ys.contents.singleColumnWatchNextResults.autoplay.autoplay})}
function As(){var a=zs();return I(function(){return a.sets[0].autoplayVideo})}
function Bs(){var a=zs();return I(function(){return a.sets[0].mode})}
function Cs(){var a=zs();return I(function(){return a.webAutoplayRendererData.autoplayCount})}
function Ds(a){if(!a.isMutedByMutedAutoplay||!a.isMutedByMutedAutoplay()){var b=As();a=jd(K().href,"list");if(b&&a){a=Cs();var c=Mm(b),d=b.clickTrackingParams;b=b.watchEndpoint.params;var e=Bs();$k(c,{itct:d,mode:e,params:b},{autonav:!0,playnext:a})}}}
function Es(){B("SERVE_MWEB_BLAZERPLAYER",!1)?window.addEventListener("playback-end",function(a){Ds(a.target)}):window.addEventListener("player-state-change",function(a){0==a.detail.state&&Ds(a.target)})}
;function Fs(a){a=tk(a).split("/")[1];var b=!!C("enable_c3_premium");return!{"":!0,channel:!0,experiments:!!C("mweb_c3_experiment_page"),feed:!0,musicpremium:b,paid_memberships:b,playlist:!0,premium:b,red:b,results:!0,show:!0,user:!0,watch:!0}[a]}
;var Gs=window.history;function Hs(){return I(function(){return Gs.state.previousUrl})}
function Is(){return I(function(){return Gs.state.params})}
function Js(a){var b=a.replace,c=a.href,d=a.params;a=a.bb;try{var e={},f=(e.params=d,e.previousUrl=a,e);b?Gs.replaceState(f,"",c):Gs.pushState(f,"",c)}catch(g){throw setTimeout(function(){Dc(K(),c)}),Error("Failed to update history state: "+g.message);
}}
;function Ks(a){var b=I(function(){return a.player.args}),c=Hs();
b&&c&&(b.external_list=2==uk(c))}
;function Ls(a){return a.filter(function(a){return"SEE_OTHER"==a.code}).map(function(a){return a.argument})[0]}
function Ms(a){if(eb(location.pathname,"/channel")){var b=I(function(){return a.response.responseContext.errors.error});
if(b&&(b=Ls(b)))switch(b[0]){case "REDIRECT_TO_VIDEO":$k("/watch?v="+b[1]);break;case "REDIRECT_TO_URL":$k(b[1]);break;default:$k("/channel/"+b[0])}}}
function Ns(){window.addEventListener("state-navigateend",function(a){var b=a.detail.data;H(function(){return Ms(b.response)})})}
;function Os(a,b){a.video_masthead_ad_quartile_urls={quartile_0_url:I(function(){return b.startUrls[0]}),
quartile_25_url:I(function(){return b.firstQuartileUrls[0]}),
quartile_50_url:I(function(){return b.secondQuartileUrls[0]}),
quartile_75_url:I(function(){return b.thirdQuartileUrls[0]}),
quartile_100_url:I(function(){return b.completeUrls[0]})}}
function Ps(a,b){a.pyv_billable_url=I(function(){return b.pyvBillingUrl});
a.pyv_conv_url=I(function(){return b.pyvConversionUrl})}
function Qs(a,b){var c=I(function(){return a.player.args}),d=I(function(){return b.c3PlaybackTracking});
c&&d&&(c.adformat=b._adformat,c.el=b._el,Os(c,d),Ps(c,d))}
;function Rs(a){var b=I(function(){return a.playerResponse.playabilityStatus});
if(b){var c=b.status;"OK"==c||I(function(){return b.errorScreen.playerKavRenderer.kavUrl})||(c={CONTENT_CHECK_REQUIRED:"/verify_controversy",
AGE_CHECK_REQUIRED:"/verify_age"}[c])&&$k(hd(c,"next",K().pathname+K().search))}}
function Ss(){window.addEventListener("state-navigateend",function(a){var b=a.detail.data;H(function(){return Rs(b.response)})})}
;function Ts(a){var b=I(function(){return a.player.assets});
b&&(b.js=B("PLAYER_JS_URL")||b.js,b.css=B("PLAYER_CSS_URL")||b.css)}
;var Us=Y({buttonRenderer:X,toggleButtonRenderer:En});function Vs(a,b){V(a,"ytm-notification-action-renderer",b,function(){N({className:"notification-action-response-text"},function(){W(a.responseText)});
N({className:"notification-action-button"},function(){Us(a.actionButton)})})}
;var Ws=Y({notificationActionRenderer:Vs});function Xs(){window.addEventListener("yt-show-toast",function(a){var b=a.detail;Zl(function(){if(b.notificationActionRenderer)Ws(b);else if(b.toastMessage&&b.toastActionMessage){var a=b.toastActionUrl;Ws({notificationActionRenderer:{responseText:{runs:[{text:b.toastMessage}]},actionButton:{buttonRenderer:{style:"STYLE_BLUE_TEXT",size:"SIZE_DEFAULT",isDisabled:!1,text:{runs:[{text:b.toastActionMessage}]},navigationEndpoint:{urlEndpoint:{url:a},commandMetadata:{webCommandMetadata:{url:a}}}}}}})}})})}
;var Ys,Zs;
function $s(a,b,c,d){return{popupType:"TOAST",durationHintMs:a,popup:{notificationActionRenderer:{responseText:b,actionButton:{buttonRenderer:{style:"STYLE_BLUE_TEXT",size:"SIZE_DEFAULT",isDisabled:!1,text:c.buttonRenderer.text,trackingParams:c.buttonRenderer.trackingParams,serviceEndpoint:{commandMetadata:{webCommandMetadata:{url:"/service_ajax",sendPost:!0}},signalServiceEndpoint:{signal:"CLIENT_SIGNAL",actions:[{openPopupAction:{popupType:"TOAST",popup:{notificationActionRenderer:{responseText:d}},reusePopup:!0}}]}}}}}}}}
function at(){var a=I(function(){return window.getPlayer().getPlayerState()});
return-1==a||1==a||3==a}
function bt(a,b){if(at())if(!C("disable_youthere_lact_threshold_check")&&Ph()<a.lactThresholdMs)vi("YOU_THERE_EVENT_TYPE_BELOW_LACT_THRESHOLD",b),Uh(),zh();else{if(a.showWarningActions)for(var c=ia(a.showWarningActions),d=c.next();!d.done;d=c.next())Jm(d.value);else Jm({openPopupAction:$s(a.playbackPauseDelayMs,a.userPromptText,a.actionButton,a.followUpText)});vi("YOU_THERE_EVENT_TYPE_PROMPT_SHOWN",b);Zs=setTimeout(function(){if(at())if(!C("disable_youthere_lact_threshold_check")&&Ph()<a.lactThresholdMs)vi("YOU_THERE_EVENT_TYPE_BELOW_LACT_THRESHOLD",
b),Uh(),zh();else{window.getPlayer().pauseVideo();if(a.showPausedActions)for(var c=ia(a.showPausedActions),d=c.next();!d.done;d=c.next())Jm(d.value);else c=a.actionButton,Jm({openPopupAction:{popupType:"DIALOG",popup:{confirmDialogRenderer:{dialogMessages:[a.userPromptAfterPauseText],primaryIsCancel:!1,confirmButton:{buttonRenderer:{style:"STYLE_BLUE_TEXT",size:"SIZE_DEFAULT",text:c.buttonRenderer.text,trackingParams:c.buttonRenderer.trackingParams,serviceEndpoint:{commandMetadata:{webCommandMetadata:{url:"/service_ajax",
sendPost:!0}},signalServiceEndpoint:{signal:"CLIENT_SIGNAL",actions:[{openPopupAction:{popupType:"TOAST",reusePopup:!0,popup:{notificationActionRenderer:{responseText:a.followUpText}}}},{signalAction:{signal:"PLAY_PLAYER"}}]}}}}}}}});vi("YOU_THERE_EVENT_TYPE_PLAYBACK_PAUSED",b)}},a.playbackPauseDelayMs)}}
function ct(){Ys&&(clearTimeout(Ys),Ys=0);Zs&&(clearTimeout(Zs),Zs=0)}
function dt(){var a=Zj,b=I(function(){return a.response.playerResponse.messages.filter(function(a){return a.youThereRenderer})[0].youThereRenderer});
if(b){ct();var c=I(function(){return b.configData.youThereData});
if(c){var d=ti();Ys=setTimeout(function(){return bt(c,d)},1E3*c.promptDelaySec)}}}
function et(){if(Ys||Zs)ct(),vi("YOU_THERE_EVENT_TYPE_LACT_RESET",ti()),Uh(),zh()}
;function ft(){this.g=[];this.b=[];this.f=[]}
function gt(a,b,c){a.g.push(b);a.b.push(c);a.f.forEach(function(a){a instanceof Error?c(a):b(a)})}
function ht(a,b){a.f.push(b);a.g.forEach(function(a){a(b)})}
function it(a,b){a.b.length||ne(b);a.f.push(b);a.b.forEach(function(a){a(b)})}
;function jt(a){throw a;}
function kt(a){return a}
function lt(a){this.b=a;this.f=!1;this.g=me()}
function mt(a,b,c){a.g=a.g.then(function(){if(!a.f)return b(c)}).then(function(b){b&&(a.f=b.done,ht(a.b,b))},function(b){it(a.b,b)})}
lt.prototype.tee=function(a,b){var c=a?a:kt,d=b?b:jt,e=new lt(new ft);gt(this.b,function(a){return mt(e,c,{done:a.done,value:a.value})},function(a){return mt(e,d,a)});
return e};function nt(a){var b=0;return function(c,d,e){b++;var f=b;return a(c,d,e).tee(function(a){if(f==b)return a})}}
;function ot(a){function b(a){Zj=a=void 0===a?Zj:a;g(a)}
function c(a,c,g,p){if(k(a))setTimeout(function(){ul.then(function(){m(a,c)})});
else{Zk("state-navigatestart",{href:a});var O=Object.assign({},c,g);D(a,O,p).tee(function(c){var e=c.value;c.done?d(a,O,e):(Zk("state-progress",{data:e}),b(e))});
ul.then(function(){var b=f(a,location.href,Zj,p),d=b.data,g=b.b;b.replace||a==location.href||location.hash?Js({replace:!0,href:a,params:c,bb:Hs()}):Js({replace:!1,href:a,params:c,bb:location.href});e(d);g||window.scrollTo(0,0)})}}
function d(a,b,c){Zk("state-progress",{data:c});Zk("state-responsereceived",{href:a,data:c});Hd(function(){e(c);Zk("state-navigateend",{href:a,data:c})})}
function e(a){b(a);p=K().pathname+K().search;Zk("state-change")}
var f=a.Yb,g=a.ib,k=a.nc,m=a.ac,p,D=nt(a.makeRequest);window.addEventListener("popstate",function(){p!=K().pathname+K().search&&(c(location.href,Is()),p=K().pathname+K().search)});
window.addEventListener("hashchange",function(){b()});
return{navigate:c,Da:e,ec:d}}
;function pt(){function a(a,b,c,e){"_blank"==e&&d?Ec(a):setTimeout(function(){ul.then(function(){return Dc(K(),a)})})}
var b={nc:Fs,ac:qt,makeRequest:rt,Yb:os,ib:st,Tc:!1,gb:tt},c=b.ib,d=void 0===b.gb?!0:b.gb;b=ot(b);var e=b.navigate,f=b.Da,g=b.ec,k=!1;window.addEventListener("click",function(b){var c=Nc(b.target,"a"),d=c&&c.href;if(d){b.preventDefault();b=c.params||{};var f={},g=c.target;g||(sk(d).hostname||K().hostname)!=K().hostname?a(d,b,c,g):(e(d,b,f,c),k=!0)}});
window.addEventListener("navigate",function(b){var c=b.detail;b=c.href;var d=c.params||{},f=c.uc||{};(c=c.target)||(sk(b).hostname||K().hostname)!=K().hostname?a(b,d,null,c):(e(b,d,f,null),k=!0)});
window.addEventListener("updateui",function(){c(Zj)});
return{pc:function(a,b){k||(Zk("initialdata",{href:a}),g(a,void 0,b))},
Da:f}}
;function ut(a){var b=a.detail.data,c=I(function(){return b.response.response.responseContext.webResponseContextExtensionData.ytConfigData})||{};
a=c.csn;c=c.rootVisualElementType;a&&c&&ui(a,c)}
;function vt(a){function b(){var d=4==a.readyState,e=a.responseText;d&&200!=a.status?(e=Error("Failed xhr: "+a.status),e.responseText=a.responseText,it(c,e)):ht(c,{done:d,value:e});d&&a.removeEventListener("readystatechange",b)}
var c=new ft;4==a.readyState?b():a.addEventListener("readystatechange",b);return new lt(c)}
function wt(a){return new he(function(b,c){vt(a).tee(function(a){a.done&&b(a.value)},function(a){c(a)})})}
;function xt(){var a=0,b={};return function(c){var d=c.done,e=c.value;c=e.P;e=e.response;if(eb(e,"[")||d){e=e.split("\r\n").filter(function(a){return 1<a.length}).slice(a).map(function(a){return fb(a,",")?a.slice(0,-1):a}).map(function(a){try{return JSON.parse(a)}catch(k){}});
var f=e[e.length-1]?e.length:e.length-1;if(!(0>=f)||d)return a+=f,b=Object.assign.apply(Object,[{},b].concat(ra(e))),{done:d,value:{P:c,response:b}}}}}
;function Hr(a,b){b=void 0===b?ck:b;var c=Object.assign({pbj:1},b),d=gd(a,c);c=xt();d=Ag(d,{withCredentials:!0,headers:{"x-youtube-sts":"17778"},format:"RAW"});return vt(d).tee(zt(d)).tee(c)}
function zt(a){var b=[];return function(c){var d=c.done;c=c.value;var e=d?a.getResponseHeader("content-length"):"",f=d?a.getResponseHeader("content-encoding"):"";b.push(z());return{done:d,value:{P:{chunks:b,contentLength:e,Vb:f},response:c}}}}
;var tt=!Fb;function At(a){return I(function(){return a.webWatchNextResponseExtensionData.relatedVideoArgs})}
function st(a){a=a.response;var b="watch"==a.page,c=a.response,d=At(c),e=a.player;rk.setAttribute("playable",nr(a.playerResponse));rk.hidden=!b;if(e!=ts||d!=us)ts=e,us=d,rk.setAttribute("loading",!ts),ss(ts,us);ys=c;pf(qk,Cr,a)}
function Bt(a){return{response:{responseContext:{errors:a}}}}
function qt(a,b){var c=Object.assign({disable_polymer:"true"},b);K().assign(gd(a,c))}
function rt(a,b,c){b=Object.assign({lact:Ph()},b);var d=wn(c);return Hr(a,b).tee(function(a){var b=a.done,c=a.value;a=c.P;c=c.response;if(c.reload)K().reload();else return Ks(c),Ts(c),Qs(c,d),c=b?c:Object.assign({},Zj.response,c),{done:b,value:{P:a,response:c}}},function(a){.01>Math.random()&&Gf(a);
return{done:!0,value:{response:Bt(a)}}})}
function Ct(){es();C("mweb_h2_push_selectively")&&Vg("H2_SERVER_PUSH",lk,7889238,"youtube.com",!0);hi||(Mh(),oi("FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND"),Of(La(oi,"FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"),3E4),ii.push(hh(document,"visibilitychange",ni)),hi=!0);qi(B("EVENT_ID",void 0));C("web_memory_bloat")&&ek(function(){if(!wi){for(var a=1048576*ig("web_memory_bloat_mb",0)/8/128,b=Array(a),c=0;c<a;c++){b[c]=Array(128);for(var d=0;128>d;d++)b[c][d]=c*d*Math.PI}wi=1E3*Math.random()|0;window["BLOATED_OBJ_REF_"+
wi]=b}})}
;function Dt(a,b){return a.reduceRight(function(a,d){return a||b(d)},void 0)}
function Et(a,b){if(b(a))return[a];if(null!=a&&"object"==typeof a)for(var c=ia(Object.values(a)),d=c.next();!d.done;d=c.next())if(d=Et(d.value,b))return[a].concat(ra(d))}
function Ft(a,b){return Et(a,function(a){return a==b})}
function Gt(a,b,c){return Et(a,function(a){return a[b]==c})}
function Z(a,b,c){a=Ft(a,b)||[];return Dt(a,c)}
function Ht(a,b,c){a=Gt(a,b,c)||[];return a[a.length-1]}
function It(a,b){var c=Et(a,function(a){return a[b]})||[{}];
return c[c.length-1][b]}
;function Jt(a){return It(a.o,"commentSectionRenderer")}
function Kt(a){return a.toggleMenuServiceItemRenderer}
function Lt(a){return a.commentThreadRenderer}
function Mt(a,b){return Xa(b,function(b){return Lt(b).comment.commentRenderer.commentId==a}).commentThreadRenderer}
function Nt(a,b,c){a=Mt(a,c).replies.commentRepliesRenderer.contents;return Xa(a,function(a){return a.commentRenderer.commentId==b}).commentRenderer}
function Ot(a){$a(a,function(a){return Lt(a).comment.commentRenderer.pinnedCommentBadge})}
function Pt(a,b){$a(b,function(b){return Lt(b).comment.commentRenderer.commentId==a})}
function Qt(a,b,c){b=Mt(b,c).replies.commentRepliesRenderer.contents;$a(b,function(b){return b.commentRenderer.commentId==a})}
function Rt(a,b){var c=Jt(b).items,d=a.parentCommentId,e=a.commentId;d?Qt(e,d,c):Pt(e,c);S()}
function St(a,b){var c=Jt(b).items,d=a.parentCommentId,e=a.commentId,f="FEEDBACK_HEART"==a.actionResult.feedback;c=d?Nt(d,e,c):Mt(e,c).comment.commentRenderer;c.creatorHeart.creatorHeartRenderer.isHearted=f;Z(c.actionMenu.menuRenderer.items,b.l,Kt).isToggled=f;S()}
;var Ut=Y({privacyDropdownItemRenderer:Tt,dropdownItemRenderer:Tt});function Vt(a,b){V(a,"ytm-dropdown-renderer",b,function(){var c=xk(ec("dropdown"));a.label&&Pk({className:"dropdown-label",htmlFor:c.toString()},function(){y(a.label)});
Vn(null,{id:c},function(){b&&b.includeEmptyOption&&Qk({className:"option",disabled:!0,selected:!0,value$:""});Ut(a.entries)})})}
function Tt(a){Qk({className:"option",selected:a.isSelected,value$:a.int32Value},function(){W(a.label)})}
;var Wt=Y({buttonRenderer:X,compactLinkRenderer:fp,dropdownRenderer:Vt,textInputFormFieldRenderer:function(a,b){V(a,"ytm-text-input-form-field-renderer",b,function(){Ok({maxlength:a.maxCharacterLimit,placeholder:a.placeholderText,required:!0,value$:a.value})})}});
function Xt(a){Ql({tc:!0,header:function(){Jk({className:"add-to-playlist-create-header"},function(){y(J.Ea)})},
content:function(){Wt(a.nameInput,{oninput:function(b){b=b.target.value;a.Ob=b;a.X=b.trim().length?150<b.length?J.Kb:-1!=b.indexOf("<")||-1!=b.indexOf(">")?J.Ib:null:J.Jb;a.createAction.buttonRenderer.isDisabled=!!a.X;S()}});
Wt(a.privacyInput,{className:"add-to-playlist-privacy-input",onchange:function(b){a.Pb=b.target.value}});
a.X&&N({className:"add-to-playlist-errors"},function(){y(a.X)})},
buttons:function(){sl({onclick:Ll},null,function(){y(J.ra)});
Wt(a.createAction)}})}
;var Yt=Y({addToPlaylistCreateRenderer:function(a,b){a.createAction.buttonRenderer.serviceEndpoint=a.serviceEndpoint;a.createAction.buttonRenderer.isDisabled=!0;V(a,"ytm-add-to-playlist-create-renderer",b,function(){Wt(a.openCreateLink,{className:"add-to-playlist-create-link secondary-text",onclick:function(){return Xt(a)}})})},
playlistAddToOptionRenderer:function(a,b){V(a,"ytm-playlist-add-to-option-renderer",b,function(){N({className:"playlist-add-to-option secondary-text",onclick:function(){Ll();T(a.addToPlaylistServiceEndpoint,a)}},function(){N({className:"playlist-add-to-option-label"},function(){N({className:"playlist-add-to-option-title"},function(){W(a.title)});
a.shortBylineText&&N({className:"playlist-add-to-option-byline"},function(){W(a.shortBylineText)})});
R(a.privacyIcon.iconType,{className:"playlist-add-to-option-icon"})})})}});function Zt(a){Ql({header:function(){Jk(null,function(){W(a.title)})},
content:function(){N({className:"fancy-dismissable-dialog-content"},function(){W(a.dialogMessage)})},
buttons:function(){Cn(null,a.confirmLabel)}})}
;function $t(a,b){var c=b.Va,d=b.minutes,e=b.seconds,f=b.Wa,g=b.eb;L("ytm-timestamp-input",a,function(){W(c);N({className:"ytm-timestamp-input"},function(){Ok({className:"timestamp-input-minutes timestamp-number-input",min:0,max:999,oninput:function(a){return f(a.target.value)},
type:"number",value:d});N({className:"timestamp-input-separator"},function(){y(" : ")});
Ok({className:"timestamp-input-seconds timestamp-number-input",min:0,max:59,oninput:function(a){return g(a.target.value)},
type:"number",value:e})})})}
;var au=Y({dropdownRenderer:Vt,buttonRenderer:X});function bu(a){var b=!a.timestampLabel||!(!a._minutes||!a._seconds);a.submitButton.buttonRenderer.isDisabled=!a._flag_description||!a._flag_affiliation||!a._flag_issue_type||!b;S()}
function cu(a){if(void 0==a._minutes&&void 0==a._seconds){var b=ws(),c=b.seconds;a._minutes=b.minutes;a._seconds=c}}
;var du=Y({dropdownRenderer:Vt,buttonRenderer:X});function eu(a){var b=a.submitButton.buttonRenderer.isDisabled;a.submitButton.buttonRenderer.isDisabled=!(!a.timestampLabel||a._minutes&&a._seconds);a.submitButton.buttonRenderer.isDisabled!=b&&S()}
function fu(a){var b=ws(),c=b.seconds,d=b.vssId;a._minutes=b.minutes;a._seconds=c;a._vssId=d}
;function gu(a,b){var c=b.xa,d=xk(ec("checkbox"));L("c3-material-checkbox",a,function(){Ok({id:d,className:"c3-material-checkbox-input",type:"checkbox"},function(b){"checked"in a&&(b.checked=!!a.checked)});
Pk({className:"c3-material-checkbox-label",htmlFor:d.toString()},c)})}
;function hu(a,b){var c=b.name,d=b.xa,e=xk(ec("radio"));L("c3-material-radio",a,function(){Ok({id:e,type:"radio",name:c});Pk({htmlFor:e.toString()},d)})}
;var ju=Y({optionSelectableItemRenderer:iu});function iu(a){Qk({className:"option",data:a},function(){W(a.text)})}
function ku(a){a.subOptions&&a._isSelected&&Vn({onchange:lu},null,function(){ju(a.subOptions)})}
function mu(a,b){window.addEventListener("change",function d(){a.parentNode&&a.checked||(b(),window.removeEventListener("change",d,!0))},!0)}
function nu(a){a._isSelected=!1;(a.subOptions||[]).forEach(function(a){nu(a.optionSelectableItemRenderer)})}
function ou(a,b){b._isSelected=!0;b.clickCommands&&b.clickCommands.forEach(function(a){T(a,b)});
mu(a.target,function(){return nu(b)});
S()}
function lu(a){a=a.target;var b=a.selectedIndex;[].concat(ra(a.options)).forEach(function(a,d){if(d==b){var c=a.data.clickCommands;c&&c.forEach(function(b){T(b,a.data)})}a.data._isSelected=d==b})}
;var pu=Y({optionSelectableItemRenderer:function(a,b){V(a,"ytm-option-selectable-item-renderer",b,function(){hu({onchange:function(b){return ou(b,a)}},{name:b.name,
xa:function(){W(a.text)}});
ku(a)})}});
function qu(a){var b=ru(a);a._selectedValue=I(function(){return b.submitEndpoint});
a._selectedNavigationValue=I(function(){return b.submitNavigationEndpoint});
a._selectedDialog=I(function(){return b.confirmDialog})}
function ru(a){if(a=Ht(a,"_isSelected",!0)){var b=a.subOptions;return b?ru(b):a}}
;function su(){return{signalServiceEndpoint:{signal:"CLIENT_SIGNAL",actions:[{signalAction:{signal:"SUBMIT_FORM"}}]}}}
;var tu=Y({optionsRenderer:function(a,b){var c=xk(ec("options"));V(a,"ytm-options-renderer",b,function(){pu(a.items,{name:c,onchange:function(){return qu(a)}})})},
buttonRenderer:X,booleanFormFieldV2Renderer:function(a,b){V(a,"ytm-boolean-form-field-v2-renderer",b,function(){gu({onchange:function(b){b.target.checked?T(a.enableCommand,a):T(a.disableCommand,a)}},{xa:function(){W(a.label)}})})}});var uu;function vu(a){a&&(uu||(uu=document.createElement("div"),uu.id="surveys",document.body.insertBefore(uu,document.body.firstChild)),tl("state-navigatestart",wu),uu&&pf(uu,xu,{content:a,collapsedContent:void 0}))}
function wu(){uu&&(document.body.removeChild(uu),uu=null)}
function xu(a){var b=!!a.collapsedContent,c={};b&&(c.role$="button",c.onclick=function(){vu(a.content)});
c.className=b?"collapsed":"expanded";c["aria-expanded$"]=!b;L("c3-survey",c,function(){b?(R("EXPAND_LESS",{className:"c3-survey-expand"}),a.collapsedContent()):a.content()})}
;var yu=Y({buttonRenderer:X});var zu=Y({buttonRenderer:X});function Au(a){Ql({header:a.title&&function(){Jk(null,function(){W(a.title)})},
content:function(){a.dialogMessages.forEach(function(a){Rk({className:"secondary-text confirm-dialog-messages"},function(){W(a)})})},
buttons:function(){zu(a.cancelButton);zu(a.confirmButton)},
Na:function(){if(a.onClosedActions)for(var b=ia(a.onClosedActions),c=b.next();!c.done;c=b.next())Jm(c.value)}})}
;var Bu=Y({addToPlaylistRenderer:function(a){Ql({header:function(){Jk({className:"add-to-playlist-title"},function(){y(J.Ea)})},
content:function(){Yt(a.playlists,{className:"add-to-playlist-option"});Yt(a.actions)},
buttons:function(){N({className:"add-to-playlist-button-wrapper"},function(){sl({className:"add-to-playlist-button"},null,function(){y(J.ra)})})}})},
confirmDialogRenderer:Au,fancyDismissibleDialogRenderer:Zt,legalReportDetailsFormRenderer:function(a){a.timestampLabel&&cu(a);a._flag_description=a._flag_description||"";a._flag_issue_type=a._flag_issue_type||"";Ql({header:function(){Jk(null,function(){W(a.title)})},
content:function(){a.timestampLabel&&$t(a,{Va:a.timestampLabel,minutes:a._minutes,seconds:a._seconds,Wa:function(b){a._minutes!=b&&(a._minutes=b,bu(a))},
eb:function(b){a._seconds!=b&&(a._seconds=b,bu(a))}});
Tk({className:"legal-report-details-form-description-input",maxlength:500,rows:4,required:!0,placeholder:Dm(a.descriptionHint),oninput:function(b){b=b.target.value;a._flag_description!=b&&(a._flag_description=b,bu(a))}},function(){a._flag_description&&y(a._flag_description)});
au(a.issueTypeDropdown,{className:"legal-report-details-form-issue-type",includeEmptyOption:!0,onchange:function(b){b=b.target.value;a._flag_issue_type!=b&&(a._flag_issue_type=b,bu(a))}});
au(a.affiliationDropdown,{className:"legal-report-details-form-affiliation",includeEmptyOption:!0,onchange:function(b){b=b.target.value;a._flag_affiliation!=b&&(a._flag_affiliation=b,bu(a))}});
Ok({className:"legal-report-details-form-name-input",maxlength:250,placeholder:Dm(a.nameHint),oninput:function(b){a._flag_full_name=b.target.value}});
N({className:"legal-report-details-form-name-subtext"},function(){W(a.nameSubtext)});
N({className:"legal-report-details-form-footer-text"},function(){W(a.footerText)})},
buttons:function(){N({className:"legal-report-details-form-footer"},function(){W(a.requiredLabel);N({className:"legal-report-details-form-buttons"},function(){au(a.cancelButton);au(a.submitButton)})})}})},
notificationActionRenderer:Vs,reportDetailsFormRenderer:function(a){a.timestampLabel&&fu(a);a.submitButton.buttonRenderer.isDisabled=!1;Ql({header:function(){Jk(null,function(){W(a.title)})},
content:function(){a.timestampLabel&&$t(a,{Va:a.timestampLabel,minutes:a._minutes,seconds:a._seconds,Wa:function(b){a._minutes=b;eu(a)},
eb:function(b){a._seconds=b;eu(a)}});
Tk({className:"report-details-form-description-input",maxlength:500,rows:4,required:!0,placeholder:Dm(a.descriptionHint),oninput:function(b){a._flag_description=b.target.value;eu(a)}});
N({className:"report-details-form-footer"},function(){W(a.footer)})},
buttons:function(){du(a.cancelButton);du(a.submitButton)}})},
reportFormModalRenderer:function(a){a.submitButton.buttonRenderer.serviceEndpoint=su();a.nextButton&&(a.nextButton.buttonRenderer.serviceEndpoint=su());Ql({header:function(){Jk(null,function(){W(a.title)})},
content:function(){tu(a.optionsSupportedRenderers,{onchange:function(){var b=a.optionsSupportedRenderers.optionsRenderer._selectedValue||a.optionsSupportedRenderers.optionsRenderer._selectedNavigationValue||a.optionsSupportedRenderers.optionsRenderer._selectedDialog,c=a.submitButton.buttonRenderer.isDisabled;a.submitButton.buttonRenderer.isDisabled=!b;a.nextButton&&(a.nextButton.buttonRenderer.isDisabled=!b);c!=a.submitButton.buttonRenderer.isDisabled&&S()}});
a.footer&&N({className:"report-form-footer"},function(){W(a.footer)});
a._showLegalReportCheckbox&&tu(a.legalReportCheckbox,{className:"report-form-legal-report-checkbox",onchange:function(b){a._legalCheckboxChecked=b.target.checked}})},
buttons:function(){tu(a.cancelButton);a._canShowNextButton?tu(a.nextButton):tu(a.submitButton)}})},
surveyFollowUpRenderer:function(a){vu(function(){V(a,"ytm-survey-follow-up-renderer",{onclick:function(a){Nc(a.target,"button")&&wu()}},function(){N({className:"ytm-survey-follow-up-header"},function(){W(a.description);
yu(a.dismissButton)});
N({className:"ytm-survey-follow-up-button"},function(){yu(a.followUpButton)})})})}});function Cu(a){return Z(a.o,a.l,function(a){return a.playlistVideoListRenderer})}
;var Du=["compactVideoRenderer","searchHistoryQueryRenderer","shelfRenderer","videoWithContextRenderer"],Eu=Y({notificationTextRenderer:function(a,b){V(a,"ytm-notification-text-renderer",b,function(){P({"aria-live$":"polite"},function(){W(a.successResponseText||a.responseText)})})}});
function Fu(a){return Du.reduce(function(b,c){return b||a[c]},void 0)}
;function Gu(a){return a.sectionListRenderer}
;var Hu=Y({confirmDialogRenderer:Au});function Iu(a){if(a=Z(a.o,a.l,function(a){return a.reportFormModalRenderer})){var b=a.optionsSupportedRenderers.optionsRenderer;
b._selectedDialog?(It(b._selectedDialog,"flagEndpoint").legalCheckboxChecked=a._legalCheckboxChecked,Hu(b._selectedDialog)):b._selectedNavigationValue?T(b._selectedNavigationValue,a):b._selectedValue&&(b._selectedValue.flagEndpoint.legalCheckboxChecked=a._legalCheckboxChecked,T(b._selectedValue,a))}}
;function Ju(a){return a.commentRenderer}
function Ku(a){return a.toggleMenuServiceItemRenderer}
;var Lu=Y({fancyDismissibleDialogRenderer:Zt});var Mu=Y({confirmDialogRenderer:Au});function Nu(a){return db(Object.keys(a).map(function(b){return"playlistEditEndpoint"==b?a[b].clientActions||[]:a[b].actions||a[b].clientActions||[]}))}
;function Ou(a,b,c){var d=ia(Nu(a));for(a=d.next();!a.done;a=d.next())Jm(a.value,c);a=I(function(){return b.data.actions})||[];
d=ia(a);for(a=d.next();!a.done;a=d.next())Jm(a.value,c);a=I(function(){return b.data.commands})||[];
a=ia(a);for(d=a.next();!d.done;d=a.next())Jm(d.value,c)}
;function Pu(a){return Object.keys(a).filter(function(a){return fb(a,"Endpoint")})[0]}
function Qu(a,b){b=void 0===b?ck:b;var c={sej:JSON.stringify(a)};c=Object.assign(c,b);var d=Pu(a);d=hd("/service_ajax","name",d);c=Ag(d,{method:"POST",H:c,format:"RAW"});return wt(c).then(function(a){return JSON.parse(a)},function(a){a.responseText&&(a.response=JSON.parse(a.responseText));
throw a;})}
;function Ru(a,b){return Z(b.o,a,function(a){return a.commentSimpleboxRenderer}).sa}
;var Su=Y({buttonRenderer:X});var Tu=Y({commentReplyDialogRenderer:function(a){Ql({buttons:function(){Su(a.cancelButton);Su(a.replyButton)},
content:function(){Tk({className:"comment-reply-input","name:":"comment-reply",placeholder:Dm(a.placeholderText),oninput:function(b){a.sa=b.target.value}})}})}});function Uu(a,b){var c=Z(b.o,a,function(a){return a.commentReplyDialogRenderer});
if(c)return c.sa}
;var Vu={addToPlaylistRenderer:!0};function Wu(a){return Object.keys(a).some(function(a){return a in Vu})}
function Xu(a){var b=I(function(){return a.data.contents[0]});
if(!b||!Wu(b))return a;b={openPopupAction:{popupType:"DIALOG",popup:b}};a.data.actions||(a.data.actions=[]);a.data.actions.push(b);return a}
;function Yu(a,b,c){var d=Z(b.o,b.l,function(a){return a.buttonRenderer||a.toggleButtonRenderer});
d&&(d.Y=!0,S());return Qu(a,c).then(function(c){Ou(a,Xu(c),b);d&&(d.Y=!1,S())},function(a){d&&(d.Y=!1,S());
throw a;})}
;function Zu(a){return(a=Z(a.o,a.l,function(a){return a.legalReportDetailsFormRenderer}))?{formData:a,
form:{flag_description:a._flag_description,flag_issue_type:a._flag_issue_type||Ht(a.issueTypeDropdown,"identifier","1").int32Value,flag_affiliation:a._flag_affiliation||Ht(a.affiliationDropdown,"identifier","1").int32Value,flag_full_name:a._flag_full_name,minutes:a._minutes,seconds:a._seconds}}:void 0}
function $u(a){if(a=Z(a.o,a.l,function(a){return a.reportDetailsFormRenderer}))return{formData:a,
form:{text:a._flag_description,minutes:a._minutes,seconds:a._seconds,vssId:a._vssId}}}
;function av(a){return a.menuRenderer}
function bv(a){return a.toggleButtonRenderer}
function cv(a,b){var c=Ht(a,"status",b);return Z(a,c,bv)}
function dv(a,b){var c=a.likeEndpoint.status,d=a.likeEndpoint.target.videoId,e=ev(b);e&&"INDIFFERENT"==c&&(e.contents=e.contents.filter(function(a){return d!=a.playlistVideoRenderer.videoId}),S())}
function ev(a){return Z(a.o,a.l,function(a){return a.playlistVideoListRenderer})}
;var fv=E("CANCEL"),gv=Y({buttonRenderer:X});function hv(a){Ql({header:function(){Jk({className:"modal-title"},function(){W(a.title)})},
buttons:function(){sl({className:"compact"},null,function(){y(fv)});
gv(a.button)},
content:function(){Rk({className:"secondary-text"},function(){W(a.content)})}})}
;var iv=Y({modalWithTitleAndButtonRenderer:hv});function jv(a){var b=Mm(a);b&&$k(b,{itct:a.clickTrackingParams})}
;var kv=E("NOTIFICATION_ERROR_MESSAGE");function lv(a,b){return Yu(a,b).then(null,function(a){Zl(function(){y(kv)});
throw a;})}
;var mv=E("CANCEL"),nv=Y({shareTargetRenderer:function(a,b){V(a,"ytm-share-target-renderer",b,function(){U(a.navigationEndpoint,{className:"share-target-link",target:"_blank"},function(){W(a.title)})})}});
function ov(a){a.preventDefault()}
;var pv=Y({sharingRenderer:function(a){Ql({header:function(){Jk(null,function(){W(a.title)})},
buttons:function(){sl({className:"compact"},null,function(){y(mv)})},
content:function(){nm(a.shortUrl,{className:"sharing-renderer-url",onclick:ov},function(){y(a.shortUrl)});
nv(a.primaryShareTargets,{onclick:Ll})}})}});function qv(a){return a.subscribeButtonRenderer}
function rv(a,b,c){Yu(a,b,c).then(function(){var a=Z(b.o,b.l,qv);a.subscribed=!a.subscribed;S()})}
;function sv(a,b,c){var d=b.l.isToggled;return Yu(a,b,c).then(function(){b.l.isToggled=!d;S()})}
;function tv(a){return a.toggleMenuServiceItemRenderer}
function uv(a,b){var c=Z(b.o,b.l,tv);c.isToggled=!c.isToggled;return lv(a,b)}
;var vv=Y({buttonRenderer:X}),wv=al("ytm-comment-simplebox-renderer",function(a,b){function c(c){var e=c.prepareAccountEndpoint;e?T(e,c):ol()?(d=!d,b(),d&&a.querySelector(".comment-simplebox-reply").focus()):pl()}
var d=!1;return{O:function(a){Nn(a.authorThumbnail,{className:"comment-simplebox-icon"});N({className:"comment-simplebox-input"},function(){if(d){var b=I(function(){return a.navigationEndpoint.createCommentDialogEndpoint.dialog.commentDialogRenderer}),e=b.cancelButton,k=b.submitButton;
Tk({className:"comment-simplebox-reply",placeholder:Dm(a.placeholderText),oninput:function(b){a.sa=b.target.value}});
N({className:"comment-simplebox-buttons cbox",onclick:function(){return c(a)}},function(){vv(e);
vv(k)})}else N({className:"comment-simplebox-placeholder comment-simplebox-reply",
onclick:function(){return c(a)}},function(){W(a.placeholderText)})})},
V:function(a,b){a!=b&&(d=!1)}}});var xv=E("COMMENT_MODAL_CONTENT"),yv=E("SIGN_IN_LABEL");var zv=Y({creatorHeartRenderer:function(a,b){V(a,"ytm-creator-heart-renderer",b,function(){N({className:"cbox"},function(){a.isHearted&&gn(a.creatorThumbnail,{className:"comment-thumb",alt:""});R("FULL_HEART",{className:"comment-heart-icon","data-selected$":a.isHearted})})})},
pinnedCommentBadgeRenderer:function(a,b){V(a,"ytm-pinned-comment-badge-renderer",b,function(){N({className:"cbox"},function(){R("KEEP",{className:"comment-pin"});W(a.label)})})}});
function Av(a){Nc(a.target,"ytm-comment-renderer").setAttribute("expanded",!0)}
function Bv(a,b){Nc(a.target,"a")||(ol()?eo(b.actionMenu.menuRenderer):hv({content:{runs:[{text:xv}]},button:{buttonRenderer:{style:"STYLE_BRAND",size:"SIZE_DEFAULT",isDisabled:!1,text:{runs:[{text:yv}]},navigationEndpoint:{signInEndpoint:{},webNavigationEndpointData:{url:nl()}}}}}))}
function Cv(a){N({className:"comment-details secondary-text cbox",onclick:function(b){return Bv(b,a)}},function(){P({className:"text-info"},function(){W(a.publishedTimeText)});
P({className:"comment-vote-count text-info"},function(){W(a.voteCount)});
R("LIKE",{className:"comment-thumb","data-selected$":"LIKE"==a.voteStatus});R("DISLIKE",{className:"comment-thumb","data-selected$":"DISLIKE"==a.voteStatus});zv(a.creatorHeart);Gk({className:"comment-more-option","aria-label$":J.Fb,"aria-haspopup$":"true"})})}
;var Dv=Y({commentRenderer:function(a,b){V(a,"ytm-comment-renderer",b,function(b){dk(b,"_commentData",a,function(){requestAnimationFrame(function(){var a=b.querySelector(".comment-text");b.setAttribute("expanded",26>a.scrollHeight-a.clientHeight)})});
U(a.authorEndpoint,{className:"comment-icon-container"},function(){Nn(a.authorThumbnail,{className:"comment-icon"})});
N({className:"comment-content"},function(){zv(a.pinnedCommentBadge);U(a.authorEndpoint,{className:"comment-title","is-owner$":a.authorIsChannelOwner},function(){W(a.authorText)});
Rk({className:"comment-text user-text",onclick:function(b){return Bv(b,a)}},function(){W(a.contentText)});
R("MORE_HORIZ",{className:"comment-expand",onclick:Av});Cv(a)})})}});
function Ev(a,b){var c=a.continuations||[];N({className:"comment-replies-continuation vbox",Z:b?"/watch_comment?action_get_comment_replies=1":"/comment_service?action_get_comment_replies=1"},function(){c.forEach(function(b){return ro(a,b)})})}
function Fv(a,b){a&&V(a,"ytm-comment-replies-renderer",null,function(){var c=a.commentRepliesRenderer;Dv(c.contents);Ev(c,b)})}
;var Hv=Y({commentSimpleboxRenderer:wv,commentThreadRenderer:function(a,b){V(a,"ytm-comment-thread-renderer",b,function(){Dv(a.comment);Fv(a.replies,b.isWatch)})},
commentSectionHeaderRenderer:Gv});function Iv(a,b,c){a.R||H(function(){return window.scrollTo(0,a.offsetTop)});
a.R=!a.R;rf(a,function(){return Jv(b,c)})}
function Gv(a,b){var c=b.expandable,d=b.expanded;V(a,"ytm-comment-section-header-renderer",b,function(){N({className:"cbox"},function(){Jk({className:"comment-section-header-text"},function(){W(a.countText)});
c&&R(d?"EXPAND_LESS":"EXPAND_MORE")})})}
function Kv(a,b){var c=a.continuations||[],d=0<a.items.length;N({className:"vbox",Z:b?"/watch_comment?action_get_comments=1":"/comment_service?action_get_comments=1"},function(){c.forEach(function(b){d?ro(a,b):vq(a,b)})})}
function Jv(a,b){V(a,"ytm-comment-section-renderer",b,function(c){dk(c,"_commentSectionRendererData",a,function(){a.items=a.items||[];c.Ra=0==a.items.length;c.R=!c.Ra});
var d=c.Ra,e=c.R,f=b&&b.isWatch,g=xk(ec("comment-section"));Hv(a.header,{expandable:d,expanded:e,tabIndex:"0",role$:"button","aria-expanded$":e,"aria-controls$":g,onclick:d?function(){return Iv(c,a,b)}:r});
N({id:g,className:"comment-section-content",hidden:!e},function(){Hv(a.sharebox,{className:"section"});Hv(a.items,{className:"section",isWatch:f});Kv(a,f)})})}
;var Lv=Y({buttonRenderer:X});function Mv(a){(a.impressionEndpoints||[]).forEach(function(b){T(b,a)})}
;var Nv=Y({buttonRenderer:X,menuRenderer:co});var Ov=Y({buttonRenderer:X});var Pv=Y({singleOptionSurveyOptionRenderer:function(a,b){V(a,"ytm-single-option-survey-option-renderer",b,function(){gl(a.icon.iconType,Dm(a.option),function(){wu();T(a.submissionEndpoint,a)});
N({className:"ytm-single-option-survey-option-label","aria-hidden$":!0},function(){W(a.option)})})}});var Qv=Y({singleOptionSurveyRenderer:function(a,b){vu(function(){V(a,"ytm-single-option-survey-renderer",b,function(){N({className:"ytm-single-option-survey-header"},function(){W(a.question);gl("DISMISSAL",Dm(a.dismissalText),function(){wu();T(a.dismissalEndpoint,a)})});
N({className:"ytm-single-option-survey-options"},function(){Pv(a.options)})})})}});function Rv(a,b){N({className:"one-vs-one-team-row"},function(){P({className:"one-vs-one-team-name"},function(){W(a)});
P({className:"one-vs-one-team-result"},function(){W(b)})})}
;var Sv=Y({oneVsOneEvent:function(a,b){V(a,"ytm-one-vs-one-event",b,function(){Rv(a.homeName,a.homeParticipantResult);Rv(a.awayName,a.awayParticipantResult);N({className:"one-vs-one-event-description"},function(){W(a.eventDescription)});
N({className:"one-vs-one-event-description"},function(){W(a.additionalEventDescription)})})},
thumbnailOverlayTimeStatusRenderer:lo});var Tv=Y({callToActionButtonRenderer:function(a,b){V(a,"ytm-call-to-action-button-renderer",b,function(){N({className:"cbox"},function(){R(I(function(){return a.icon.iconType}));
N({className:"call-to-action-button-label"},function(){W(a.label)})})})},
collageHeroImageRenderer:function(a,b){var c=fn(a.leftThumbnail),d=fn(a.topRightThumbnail),e=fn(a.bottomRightThumbnail);V(a,"ytm-collage-hero-image-renderer",b,function(){N({className:"collage-left collage-top collage-bottom collage-image background-image",style$:"background-image: url("+c+");"});N({className:"collage-right collage-top collage-image background-image",style$:"background-image: url("+d+");"});N({className:"collage-right collage-bottom collage-image background-image",style$:"background-image: url("+
e+");"})})}});var Uv=Y({thumbnailOverlayResumePlaybackRenderer:ko,thumbnailOverlayTimeStatusRenderer:lo});function Vv(a,b){V(a,"ytm-watch-card-compact-video-renderer",b,function(){U(a.navigationEndpoint,{className:"watch-card-compact-video-condensed-endpoint"},function(){a.thumbnail&&gn(a.thumbnail,{className:"watch-card-compact-video-condensed-thumbnail",alt:""});N({className:"watch-card-compact-video-condensed-metadata"},function(){Lk({className:"watch-card-compact-video-condensed-title"},function(){W(a.title)});
N({className:"subhead"},function(){W(a.subtitle,{D:!0})})});
W(a.lengthText)})})}
function Wv(a,b){V(a,"ytm-watch-card-compact-video-renderer",b,function(){jo({thumbnail:a.thumbnail,navigationEndpoint:a.navigationEndpoint,headline:a.title,A:[a.subtitle],overlay:function(){no(function(){return Uv(a.thumbnailOverlays)})}})})}
;var Xv=Y({watchCardCompactVideoRenderer:function(a,b){switch(a.style){case "WATCH_CARD_COMPACT_VIDEO_RENDERER_STYLE_CONDENSED":Vv(a,b);break;default:Wv(a,b)}}});var Yv=Y({verticalWatchCardListRenderer:function(a,b){V(a,"ytm-vertical-watch-card-list-renderer",b,function(){Xv(a.items)})}});var Zv=Y({watchCardHeroOneVsOneEventRenderer:function(a,b){V(a,"ytm-watch-card-hero-one-vs-one-event-renderer",b,function(){var b=a.badges&&a.badges.liveBadge?[{thumbnailOverlayTimeStatusRenderer:{text:a.badges.liveBadge.label,style:"LIVE"}}]:[{thumbnailOverlayTimeStatusRenderer:{text:a.lengthText,style:"DEFAULT"}}];U(a.navigationEndpoint,{className:"watch-card-hero-one-vs-one-event-endpoint"},function(){a.thumbnail&&gn(a.thumbnail,{className:"watch-card-hero-one-vs-one-event-hero-image",alt:""},
320);N({className:"watch-card-hero-one-vs-one-event-bottom-fade"},function(){Sv(a,{className:"watch-card-one-vs-one-event"});no(function(){return Sv(b)})})})})},
watchCardHeroVideoRenderer:function(a,b){V(a,"ytm-watch-card-hero-video-renderer",b,function(){U(a.navigationEndpoint,{className:"watch-card-hero-video-endpoint","aria-label$":yn(a.accessibility)},function(){Tv(a.heroImage);Tv(a.callToActionButton,{className:"watch-card-hero-video-call-to-action"})})})},
watchCardRichHeaderRenderer:function(a,b){V(a,"ytm-watch-card-rich-header-renderer",b,function(){U(a.titleNavigationEndpoint,{className:"watch-card-rich-header-endpoint"},function(){a.avatar&&Nn(a.avatar,{className:"watch-card-rich-header-profile-icon"});N({className:"watch-card-rich-header-text"},function(){Lk({className:"watch-card-rich-header-title"},function(){W(a.title)});
W(a.subtitle)})})})},
watchCardSectionSequenceRenderer:function(a,b){V(a,"ytm-watch-card-section-sequence-renderer",b,function(){Yv(a.lists)})}}),$v=al("ytm-universal-watch-card-renderer",function(a,b){function c(){e=!e;
b();e||H(function(){return window.scrollTo(0,a.offsetTop)})}
function d(a){N({className:"universal-watch-card-toggle-container"},function(){W(e?a.expandedLabel:a.collapsedLabel);var b=e?"EXPAND_LESS":"EXPAND_MORE";N({className:"universal-watch-card-toggle-button",onclick:c},function(){gl(b,Dm(a.collapsedLabel))})})}
var e=!1;return{O:function(a){Zv(a.header);Zv(a.callToAction,{className:"universal-watch-card-call-to-action"});a.sections&&!e&&d(a);Zv(a.sections,{hidden:!e});a.sections&&e&&d(a)}}});(function(){for(var a=["ms","moz","webkit","o"],b=0,c;c=a[b]&&!l.requestAnimationFrame;++b)l.requestAnimationFrame=l[c+"RequestAnimationFrame"],l.cancelAnimationFrame=l[c+"CancelAnimationFrame"]||l[c+"CancelRequestAnimationFrame"];if(!l.requestAnimationFrame){var d=0;l.requestAnimationFrame=function(a){var b=(new Date).getTime(),c=Math.max(0,16-(b-d));d=b+c;return l.setTimeout(function(){a(b+c)},c)};
l.cancelAnimationFrame||(l.cancelAnimationFrame=function(a){clearTimeout(a)})}})();
(function(){function a(a,c){var b=!(!c||!c.bubbles),e=!(!c||!c.cancelable),f=c?c.detail:void 0,g=document.createEvent("HTMLEvents");g.initEvent(a,b,e);g.detail=f;return g}
"function"!==typeof window.CustomEvent&&(a.prototype=window.Event.prototype,window.CustomEvent=a)})();
"hidden"in HTMLElement.prototype||Object.defineProperty(HTMLElement.prototype,"hidden",{get:function(){return this.hasAttribute("hidden")},
set:function(a){a?this.setAttribute("hidden",""):this.removeAttribute("hidden")}});
Sr("ai");(function(){function a(a,b){c(a,{response:b,hc:!0})}
Fr();var b=pt(),c=b.pc;b=b.Da;n("yt.logging.errors.log",mh,void 0);lh();window.onerror=Hf;Ce=Jf;A("CSI_SERVICE_NAME","youtube_mobile");window.addEventListener("initialdata",Tr);window.addEventListener("player-dom-paused",Ur);window.addEventListener("state-navigatestart",Vr);window.addEventListener("state-progress",Yr);window.addEventListener("state-responsereceived",bs);window.addEventListener("state-navigateend",ds);window.addEventListener("state-progress",hs);window.addEventListener("state-responsereceived",
js);window.addEventListener("state-responsereceived",ut);vn();Gr();Ns();Ss();window.addEventListener("player-state-change",ik);window.addEventListener("blazerplayer-playback-start",jk);window.addEventListener("state-navigatestart",kk);xs();Es();Xs();C("youthere_supported")&&(window.addEventListener("state-navigatestart",ct),window.addEventListener("state-navigateend",dt),window.addEventListener("user-activity",et));B("SERVE_MWEB_BLAZERPLAYER",!1)||(window.addEventListener("on-play-autonav-video",
Ro),window.addEventListener("on-play-previous-autonav-video",So),window.addEventListener("hashchange",To),window.addEventListener("state-navigatestart",To),window.addEventListener("scroll",Qo),window.addEventListener("user-activity",Po),Mo(),window.addEventListener("player-fullscreen-change",qs),window.addEventListener("hashchange",rs));K().hash="";var d=os(K().href,"",{});b(d.data);window.loadInitialResponse=a;window.makeColdLoadRequest=function(b){Hr(b,{pbjcold:"1"}).tee(function(a){var b=a.done;
a=a.value;a.response.reload&&(Gf(Error("Cold load request had reload response")),a.response=Bt(Error(E("INVALID_RESPONSE_RECEIVED"))));return{done:b,value:a}},function(a){.01>Math.random()&&Gf(a);
return{done:!0,value:{response:Bt(a)}}}).tee(function(c){c.done&&a(b,c.value.response)})}})();
Sr("apr");tl("state-navigateend",function(){H(Ct)});
Uj(!0);Gm(Or,function(a){a.b()});
window.addEventListener("beforeunload",function(){Hj("u")});
if(!(Math.random()>=ig("mweb_device_telemetry_fraction"))){var aw={width:Wo,height:Xo};Bi("/gen_204?action=window_size&dimension="+aw.width+"x"+aw.height)}Object.assign(Hm,{banAuthorAction:Rt,createCommentAction:function(a,b){Jt(b).items.unshift(a.contents);S()},
createCommentReplyAction:function(a,b){var c=Jt(b).items;c=Mt(a.parentCommentId,c);c.replies||(c.replies={commentRepliesRenderer:{}});c.replies.commentRepliesRenderer.contents||(c.replies.commentRepliesRenderer.contents=[]);c.replies.commentRepliesRenderer.contents.push(a.contents);S()},
hideReportedCommentAction:function(a,b){var c=a.commentId;c=c.replace("#",".");c=c.split(".");a.parentCommentId=c[1]?c[0]:void 0;Rt(a,b)},
heartCommentCommand:St,openPopupAction:function(a){var b=a.popupType,c=a.popup;Zj.response.Mc=c;switch(b){case "TOAST":Zl(function(){Bu(c)},a.durationHintMs,a.reusePopup);
break;case "DIALOG":case "SURVEY":Bu(c);break;default:throw Error("Unhandled popup type: "+b);}},
pinCommentAction:function(a,b){var c=Jt(b).items,d=a.actionResult.update,e=Lt(d).comment.commentRenderer.commentId;Ot(c);Pt(e,c);c.unshift(d);S()},
playlistRemoveVideosAction:function(a,b){var c=Cu(b);if(c&&c.contents){var d=a.setVideoIds;c.contents=c.contents.filter(function(a){return!d.includes(a.playlistVideoRenderer.setVideoId)});
S()}},
removeCommentAction:Rt,replaceEnclosingAction:function(a,b){var c=Z(b.o,b.l,Fu);c&&(xn(c,function(b){Eu(a.item,b)}),S())},
replaceFeedContentAction:function(a,b){var c=Z(b.o,b.l,Gu);c&&(c.contents=a.items,S())},
signalAction:function(a,b){"PAUSE_PLAYER"==a.signal?I(function(){return window.getPlayer().pauseVideo()}):"PLAY_PLAYER"==a.signal?I(function(){return window.getPlayer().playVideo()}):"RELOAD_PAGE"==a.signal?K().reload(!0):"SUBMIT_FORM"==a.signal&&Iu(b)},
unheartCommentCommand:St,unpinCommentAction:function(a,b){var c=Jt(b).items,d=a.actionResult.update;Pt(Lt(d).comment.commentRenderer.commentId,c);0==c.length&&c.unshift(d);S()},
updateButtonAction:function(a,b){var c=Z(b.o,b.l,function(a){if(a.buttonRenderer&&b.l!=a.buttonRenderer)return a});
c&&(c.buttonRenderer=a.updatedButton.buttonRenderer,S())},
updateCommentVoteAction:function(a,b){var c=a.voteStatus,d=Z(b.o,b.l,Ju),e=d.actionMenu.menuRenderer.items,f=Ht(e,"voteStatus","LIKE");f=Z(e,f,Ku);var g=Ht(e,"voteStatus","DISLIKE");e=Z(e,g,Ku);f.isToggled="LIKE"==c;e.isToggled="DISLIKE"==c;d.voteCount=a.voteCount;d.voteStatus=c;S()}});
Gm(Im,function(a){var b=a.action;a=a.context;for(var c in b){var d=Hm[c];d?d(b[c],a):Gf(Error("Unknown action type:"+c))}});
Km.push.apply(Km,ra([{i:"adChoicesDialogEndpoint",j:function(a){Lu(a.adChoicesDialogEndpoint.dialog)}},
{i:"addToPlaylistServiceEndpoint",j:lv},{i:"addUpcomingEventReminderEndpoint",j:uv},{i:"browseEndpoint",j:jv},{i:"channelCreationFormEndpoint",j:jv},{i:"clearSearchHistoryEndpoint",j:Yu},{i:"clearWatchHistoryEndpoint",j:Yu},{i:"confirmDialogEndpoint",j:function(a){Mu(a.confirmDialogEndpoint.content)}},
{i:"createChannelEndpoint",j:jv},{i:"createCommentEndpoint",j:function(a,b){var c=Ru(a,b);if(c)return Qu(a,{comment_text:c}).then(function(c){Ou(a,c,b)})}},
{i:"createCommentReplyDialogEndpoint",j:function(a){Tu(a.createCommentReplyDialogEndpoint.dialog)}},
{i:"createCommentReplyEndpoint",j:function(a,b){var c=Uu(a,b);if(c)return Qu(a,{comment_text:c}).then(function(c){Ou(a,c,b)})}},
{i:"createPlaylistServiceEndpoint",j:function(a,b){var c=Z(b.o,b.l,function(a){return a.addToPlaylistCreateRenderer}),d=c.Pb;
d=void 0!=d?d:Ht(c,"isSelected",!0).int32Value;return Yu(a,b,{create_playlist_title:c.Ob,create_playlist_privacy_status:d}).then(function(){Ll()},function(a){var b=I(function(){return a.response.errors[0]});
c.X=b;S()})}},
{i:"feedbackEndpoint",j:Yu},{i:"flagEndpoint",j:function(a,b){var c=Zu(b)||$u(b)||{},d=c.formData;return Yu(a,b,c.form).then(function(){},function(a){var b=I(function(){return a.response.errors[0]});
d&&(d.X=b);S()})}},
{i:"getReportFormEndpoint",j:lv},{i:"likeEndpoint",j:function(a,b){var c=a.likeEndpoint.status,d=Z(b.o,b.l,av);if(d){var e=cv(d,"LIKE");d=cv(d,"DISLIKE");e&&(e.isToggled="LIKE"==c);d&&(d.isToggled="DISLIKE"==c);S()}dv(a,b);return Yu(a,b)}},
{i:"modalEndpoint",j:function(a){iv(a.modalEndpoint.modal)}},
{i:"modifyReportFormCommand",j:function(a,b){var c=Z(b.o,b.l,function(a){return a.reportFormModalRenderer});
switch(a.modifyReportFormCommand.action){case "REPORT_FORM_ACTION_LEGAL_CHECKBOX_SHOW":c._showLegalReportCheckbox=!0;c._canShowNextButton=!1;c._legalCheckboxChecked=!1;break;case "REPORT_FORM_ACTION_LEGAL_CHECKBOX_HIDE":c._showLegalReportCheckbox=!1;c._canShowNextButton=!1;c._legalCheckboxChecked=!1;break;case "REPORT_FORM_ACTION_SUBMIT_BUTTON_SHOW":c._canShowNextButton=!1;break;case "REPORT_FORM_ACTION_NEXT_BUTTON_SHOW":c._canShowNextButton=!0}S()}},
{i:"nativeAppDeeplinkEndpoint",j:function(a){window.location=a.nativeAppDeeplinkEndpoint.url}},
{i:"pauseSearchHistoryEndpoint",j:sv},{i:"pauseWatchHistoryEndpoint",j:sv},{i:"performCommentActionEndpoint",j:Yu},{i:"playlistEditEndpoint",j:function(a,b,c){return Qu(a,c).then(function(c){Ou(a,Xu(c),b);var d=I(function(){return c.data.redirectEndpoint});
d&&T(d,c.data)})}},
{i:"removeUpcomingEventReminderEndpoint",j:uv},{i:"resumeSearchHistoryEndpoint",j:sv},{i:"resumeWatchHistoryEndpoint",j:sv},{i:"searchEndpoint",j:jv},{i:"shareEndpoint",j:function(a){pv(a.shareEndpoint.sharingRenderer)}},
{i:"signInEndpoint",j:jv},{i:"signalServiceEndpoint",j:function(a,b){return"CLIENT_SIGNAL"==a.signalServiceEndpoint.signal?(Ou(a,null,b),me()):Yu(a,b)}},
{i:"subscribeEndpoint",j:rv},{i:"unsubscribeEndpoint",j:rv},{i:"uploadEndpoint",j:jv},{i:"urlEndpoint",j:function(a){a=a.urlEndpoint;$k(a.url,void 0,void 0,"TARGET_NEW_WINDOW"==a.target?"_blank":"")}},
{i:"watchEndpoint",j:jv},{i:"ypcCancelRecurrenceEndpoint",j:Yu}]));Gm(Lm,function(a){Nm(a.command,a.l)});
nq("commentSectionRenderer",Jv);nq("mealbarPromoRenderer",function(a,b){V(a,"ytm-mealbar-promo-renderer",b,function(b){dk(b,"_impressionData",a,function(){return Mv(a)});
a.isVisible&&tr({iconImage:a.alternateIcon,texts:a.messageTexts,hb:a.icon,title:a.messageTitle},function(){N({className:"mealbar-promo-buttons",onclick:function(b){Nc(b.target,"button")&&(xn(a,r),S())}},function(){Lv(a.dismissButton);
Lv(a.actionButton)})})})});
nq("surveyTriggerRenderer",function(a,b){V(a,"ytm-survey-trigger-renderer",b,function(){dk(a,"_shown",!0,function(){Qv(a.survey)})})});
nq("subscriptionProductRenderer",function(a,b){V(a,"ytm-subscription-product-renderer",b,function(){a.logo&&gn(a.logo,{className:"subscription-product-logo","aria-label$":yn(a.logo.accessibility)||""});Nv(a.menu);N({className:"subscription-product-metadatas"},function(){var b=a.metadatas;b&&b.forEach(function(a){N({className:"subscription-product-metadata-item"},function(){W(a)})})});
N({className:"subscription-product-additional-infos"},function(){var b=a.additionalInfos;b&&b.forEach(function(a){N({className:"subscription-product-additional-info-item"},function(){W(a)})})});
N({className:"subscription-product-primary-button"},function(){Nv(a.primaryButton)})})});
nq("subscriptionProductUpsellOfferRenderer",function(a,b){V(a,"ytm-subscription-product-upsell-offer-renderer",b,function(){var b=fn(I(function(){return a.image}));
N({className:"subscription-product-upsell-image",style$:"background-image: url("+b+");"},function(){var b=a.imageScrimColorValues?Tj(a.imageScrimColorValues[0]):"transparent";N({className:"subscription-product-upsell-scrim",style$:"background-color: "+b},function(){a.logo&&gn(a.logo,{className:"subscription-product-upsell-logo","aria-label$":yn(a.logo.accessibility)||""})})});
N({className:"subscription-product-upsell-info"},function(){N({className:"subscription-product-upsell-title"},function(){W(a.title)});
N({className:"subscription-product-upsell-description"},function(){W(a.description)});
a.additionalInfos&&a.additionalInfos.forEach(function(a){N({className:"subscription-product-upsell-additional-infos"},function(){W(a)})});
Ov(a.primaryButton)})})});
nq("universalWatchCardRenderer",$v);Object.keys(lq);}).call(this);
