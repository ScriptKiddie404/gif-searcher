(this["webpackJsonpgif-app"]=this["webpackJsonpgif-app"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(5),c=n.n(r),i=n(2),s=n(0),u=function(t){var e=t.setCategory,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],u=r[1];return Object(s.jsx)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>0&&(e(c),u(""))},children:Object(s.jsx)("input",{type:"text",value:c,onChange:function(t){u(t.target.value)},placeholder:"Search something..."})})},o=function(t){var e=t.url,n=t.title;return Object(s.jsx)("img",{className:"animate__animated animate__backInUp card",src:e,alt:n})},j=n(4),l=n.n(j),p=n(6),f=function(){var t=Object(p.a)(l.a.mark((function t(e){var n,a,r,c,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"XETMpsYmiA3J11zhFZj7G0CCX8pRTyy6",n="https://api.giphy.com/v1/gifs/search?api_key=".concat("XETMpsYmiA3J11zhFZj7G0CCX8pRTyy6","&q=").concat(encodeURI(e),"&limit=10"),t.next=4,fetch(n);case 4:return a=t.sent,t.next=7,a.json();case 7:return r=t.sent,c=r.data,i=c.map((function(t){return{id:t.id,title:t.tile,url:t.images.fixed_height.url}})),t.abrupt("return",i);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(t){var e=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){f(t).then((function(t){setTimeout((function(){c({data:t,loading:!1})}),1500)}))}),[t]),r}(t.category),n=e.data;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"general_grid",children:n.map((function(t){return Object(s.jsx)(o,{url:t.url,title:t.title},t.id)}))})})},h=function(){var t=Object(a.useState)("Dog"),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"search_section",children:[Object(s.jsx)("h1",{children:"GIF SEARCHER APP"}),Object(s.jsx)(u,{setCategory:r})]}),Object(s.jsx)(d,{category:n})]})};n(13);c.a.render(Object(s.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1a5260e3.chunk.js.map