(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{22:function(e,n,t){},23:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var o=t(2),r=t.n(o),c=t(13),i=t.n(c),u=(t(22),t(23),t(14)),a=t(15),s=t(17),f=t(16),l=t(4),h=t.n(l),d=t(1);function p(e){for(var n=e+"=",t=document.cookie.split(";"),o=0;o<t.length;o++){for(var r=t[o];" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(n))return r.substring(n.length,r.length)}return""}var b=function(e){Object(s.a)(t,e);var n=Object(f.a)(t);function t(){return Object(u.a)(this,t),n.apply(this,arguments)}return Object(a.a)(t,[{key:"fetchRepo",value:function(){h.a.defaults.xsrfCookieName="csrftoken",h()({method:"get",url:"/api/repos/ucfopen/canvasapi",headers:{"X-CSRFToken":p("csrftoken")}}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return this.fetchRepo(),Object(d.jsx)("div",{children:"Hello"})}}]),t}(r.a.Component);var g=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(b,{})})},j=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),o(e),r(e),c(e),i(e)}))};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),j()}},[[43,1,2]]]);
//# sourceMappingURL=main.6edb4573.chunk.js.map