(this.webpackJsonpgitcompare=this.webpackJsonpgitcompare||[]).push([[0],{102:function(e,t,n){},146:function(e,t,n){e.exports=n(267)},151:function(e,t,n){},267:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(18),o=n.n(l),c=(n(151),n(22)),s=n(140),u=n(274),i=n(60),m=n(42),f=n(270),E=n(272),h=n(269),p=n(99),d=n(61),g=n(273),b=(n(102),n(103),function(e){var t=u.a.Header,n=Object(r.useState)([]),l=Object(s.a)(n,2),o=l[0],c=l[1];return a.a.createElement("div",{className:"App"},a.a.createElement(u.a,null,a.a.createElement(t,{id:"header"},a.a.createElement("h1",{id:"heading"},"Git Profile Compare"))),a.a.createElement(i.a,null,a.a.createElement(m.a,{span:24,id:"inputcontainer"},a.a.createElement(i.a,{justify:"center"},a.a.createElement(m.a,{span:8},a.a.createElement(f.a,null,a.a.createElement(E.a,{size:"large",name:"username",placeholder:"Github UserName",onChange:function(e){return c(e.target.value)},prefix:a.a.createElement(g.a,null)}),a.a.createElement(h.a,null),a.a.createElement(i.a,{justify:"center"},a.a.createElement(f.a.Item,null,a.a.createElement(d.b,{to:"/home/".concat(o)},a.a.createElement(p.a,{type:"primary",htmlType:"submit",onClick:function(){return function(t){e.fetchuserinfo(t)}(o)}},"Submit"))))))))))}),w=n(271),y=function(e){return e.userErrMess?a.a.createElement("h4",null,e.userErrMess," Refresh the Website"):e.user.user.length>0?a.a.createElement("div",{id:"profileback"},a.a.createElement(i.a,{justify:"center"},a.a.createElement("h1",{style:{color:"white"}},"Ranked according to Followers")),a.a.createElement(i.a,{justify:"center"},a.a.createElement("p",{style:{color:"white",marginBottom:"5%"}},"More no. of followers results in top rank.")),a.a.createElement(i.a,{justify:"center"},e.user.user.map((function(e){return a.a.createElement(m.a,{xs:{span:22,offset:2},sm:{span:10,offset:2},md:{span:6,offset:2}},a.a.createElement(w.a,{hoverable:!0,title:"Profile Info",bordered:!1,style:{width:300,marginBottom:"5%"},id:"Cards"},a.a.createElement("h4",null,a.a.createElement("strong",null,"Username: "),e.login),a.a.createElement("p",null,a.a.createElement("strong",null,"Followers: "),e.followers),a.a.createElement("p",null,a.a.createElement("strong",null,"Following: "),e.following),a.a.createElement("p",null,a.a.createElement("strong",null,"Public Repos: "),e.public_repos),a.a.createElement("p",null,a.a.createElement("strong",null,"Public Gists: "),e.public_gists)))})))):a.a.createElement("div",null)},j=n(80),v=function(e){return{type:"USER_FAILED",payload:e}},O=function(e){return{type:"ADD_USER",payload:e}},k=Object(c.g)(Object(j.b)((function(e){return{user:e.user}}),(function(e){return{adduserinfo:function(){return e(O())},fetchUserInfo:function(t){e(function(e){return function(t){return fetch("https://api.github.com/users/"+e).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return t(O(e))})).catch((function(e){return t(v(e.message))}))}}(t))}}}))((function(e){return a.a.createElement("div",{className:"App"},a.a.createElement(b,{fetchuserinfo:e.fetchUserInfo}),a.a.createElement(c.d,null,a.a.createElement(c.b,{path:"/home/:username",component:function(){return a.a.createElement(y,Object.assign({user:e.user,userErrMess:e.user.errMess},e))}}),a.a.createElement(c.a,{from:"/",to:"/home"})))})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=n(59),U=n(141),I=n(68),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,user:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_USER":var n=t.payload;return e.user=e.user.concat(n),Object(I.a)(Object(I.a)({},e),{},{user:e.user.length>0?Object(U.a)(e.user.sort((function(e,t){return t.followers-e.followers}))):e.user});case"USER_FAILED":return Object(I.a)(Object(I.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},S=n(138),A=n(139),D=n.n(A),_=Object(M.d)(Object(M.c)({user:R}),Object(M.a)(S.a,D.a));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d.a,null,a.a.createElement(j.a,{store:_},a.a.createElement(k,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[146,1,2]]]);
//# sourceMappingURL=main.9f92bb12.chunk.js.map