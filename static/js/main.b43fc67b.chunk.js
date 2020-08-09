(this["webpackJsonpreact-homepage"]=this["webpackJsonpreact-homepage"]||[]).push([[0],{113:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),l=n.n(c),i=n(1),u=n(8),o=n.n(u),s=n(15),m=n.n(s),d=n(41),f=n(9),p=n(42),h=n.n(p),b="files",g="./curriculum.json",E=Object(f.b)({name:"curriculum",initialState:{loading:!1,curriculum:{},view:b},reducers:{load_start:function(e,t){return e.loading=!0,e},load_end:function(e,t){return e.loading=!1,e},set:function(e,t){return e.curriculum=t.payload,e},toggle_view:function(e){return e.view=""===e.view?b:"",e}}}),v=E.reducer,y=E.actions,_=function(e){return e.curriculum.loading},j=function(e){return e.curriculum.curriculum.title},k=function(e){return e.curriculum.curriculum.address},w=function(e){return e.curriculum.curriculum.contacts},O=function(e){return e.curriculum.curriculum.sections},N=function(e){return e.curriculum.view};function C(){var e=Object(i.c)(j),t=Object(i.c)(k),n=Object(i.c)(w);return r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,e),r.a.createElement("p",{className:"address"},o()(t)),r.a.createElement("ul",{className:"contact"},n&&n.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{href:e.link},r.a.createElement("span",{className:"icon "+e.icon_label}),r.a.createElement("span",{className:"label"},e.label)))}))))}n(113);function x(){var e=Object(i.c)(_);return r.a.createElement("div",{className:e?"loader show":"loader"})}var S=n(10);function T(e){var t=e.section,n=e.hidden;return r.a.createElement("div",{className:"panel",role:"tabpanel","aria-hidden":n,"aria-labelledby":"tab_".concat(t.title),id:"panel_".concat(t.title)},t.paragraph&&r.a.createElement("p",{className:t.title},t.paragraph),t.list&&(t.list,r.a.createElement("ul",null,t.list.map((function(e,t){return r.a.createElement("li",{key:t},o()(e.description))})))),t.technologies&&function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"columns"},r.a.createElement("h4",null,e.technologies.headline),r.a.createElement("ul",null,e.technologies.list.map((function(e,t){return r.a.createElement("li",{key:t},e.description)})))),r.a.createElement("div",{className:"columns"},r.a.createElement("h4",null,e.programming.headline),r.a.createElement("ul",null,e.programming.list.map((function(e,t){return r.a.createElement("li",{key:t},e.description)})))))}(t))}var I=27,M=37,B=38,D=39,J=40,K=13;function L(){var e=Object(i.c)(O),t=Object(i.b)(),n=Object(a.useState)(W),c=Object(S.a)(n,2),l=c[0],u=c[1],o=Object(a.useState)(-1),s=Object(S.a)(o,2),m=s[0],d=s[1],f=Object(a.useState)(0),p=Object(S.a)(f,2),h=p[0],b=p[1],g=Object(a.useRef)();Object(a.useEffect)((function(){g.current&&g.current.focus()}),[h]);var E=function(e){u(A),d(e)},v=function(t,n){n.keyCode===I&&(u(W),d(-1)),n.keyCode===K&&E(t),(n.keyCode===D||n.keyCode===J)&&h+1<e.length&&b(h+1),(n.keyCode===B||n.keyCode===M)&&h-1>=0&&b(h-1),35===n.keyCode&&(b(e.length-1),E(e.length-1)),34===n.keyCode&&(b(0),E(0))};return r.a.createElement("div",{className:"wrapper",role:"tablist"},r.a.createElement("button",{className:"layout_switcher",onClick:function(){return u(l===R?W:R),void t(y.toggle_view())},"aria-label":"print version"},r.a.createElement("span",{className:"icon reset_layout"})),e&&e.map((function(t,n){return r.a.createElement("div",{key:n,className:l.generate_class(n,m),style:l.generate_style(n,e.length,m),onClick:function(){return E(n)}},r.a.createElement("section",{className:t.title},function(e,t){return e===h?r.a.createElement("h2",{role:"tab",tabIndex:e===h?0:-1,"aria-selected":e===m?"true":"false","aria-expanded":e===m?"true":"false","aria-controls":"panel_".concat(t.title),id:"tab_".concat(t.title),ref:g,onKeyDown:function(t){return v(e,t)}},t.headline):r.a.createElement("h2",{role:"tab",tabIndex:e===h?0:-1,"aria-selected":e===m?"true":"false","aria-expanded":e===m?"true":"false","aria-controls":"panel_".concat(t.title),id:"tab_".concat(t.title),onKeyDown:function(t){return v(e,t)}},t.headline)}(n,t),r.a.createElement(T,{section:t,hidden:m===n?"false":"true"})),n<2&&r.a.createElement("hr",null))})))}var W={generate_class:function(e){return""},generate_style:function(e,t){var n=e+1,a=Math.floor(100*(5+.9*n*3))/100,r=Math.floor(10*(6+n/t*4))/100;return{transform:"scale(".concat(r,") ")+"matrix(1, 0, 0, 1, 0, 0)",left:"".concat(a,"%"),marginTop:"-4%"}}},A={generate_class:function(e,t){return"diagonal".concat(e===t?" open":"")},generate_style:function(e,t,n){return e===n?{marginTop:0,bottom:"".concat(50*e-10,"px")}:{marginTop:0}}},R={generate_class:function(){return""},generate_style:function(){return{marginTop:0}}};n(114),n(115),n(116),n(117);var $=function(){var e=Object(i.b)(),t=Object(i.c)(N);return Object(a.useEffect)((function(){e(function(){var e=Object(d.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(y.load_start()),e.next=3,h.a.get(g);case 3:n=e.sent,t(y.set(n.data)),t(y.load_end());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})),r.a.createElement("div",{className:"App ".concat(t),role:"main"},r.a.createElement(x,null),r.a.createElement(C,null),r.a.createElement("hr",{className:"headerLongerLine"}),r.a.createElement(L,null))},q=Object(f.a)({reducer:{curriculum:v}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:q},r.a.createElement($,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},43:function(e,t,n){e.exports=n(118)},77:function(e,t){}},[[43,1,2]]]);
//# sourceMappingURL=main.b43fc67b.chunk.js.map