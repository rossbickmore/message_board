(this.webpackJsonpmessage_board=this.webpackJsonpmessage_board||[]).push([[0],{34:function(e,n,t){e.exports=t(46)},46:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(21),c=t.n(o),l=t(30),u=t(1),i=t.n(u),s=t(2),m=t(5),d=t(12),f=t(9),p=t(4);function b(){var e=Object(m.a)(["\n  background: rgba(0, 0, 0, 0.02);\n  border: 5px solid white;\n  padding: 5px;\n  line-height: 1.5;\n  font-weight: 600;\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  label {\n    display: block;\n    margin-bottom: 1rem;\n  }\n  input,\n  textarea,\n  select {\n    width: 100%;\n    padding: 0.5rem;\n    font-size: 1rem;\n    border: 0;\n  }\n  button,\n  input[type='submit']{  \n    display: inline-block;  \n    border-radius: 4px;  \n    background-color: #f4511e;  \n    border: none;  \n    background-color: ",";  \n    color: white;\n    text-align: center;\n    font-size: 12px;\n    padding: 10px 0;  \n    width: 10%;  \n    transition: all 0.5s;  \n    cursor: pointer;  \n    }\n  .form-item {\n    margin: 0.5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n  button:hover {\n    opacity: 0.5;\n  }\n"]);return b=function(){return e},e}var h=p.b.form(b(),(function(e){return e.theme.red})),g=function(e){var n=e.title,t=e.onTitleChange,a=e.onContentChange,o=e.content,c=e.addPost;return r.a.createElement(h,{onSubmit:c},r.a.createElement("div",{class:"form-item"},r.a.createElement("p",null,"Title"),r.a.createElement("input",{value:n,onChange:t})),r.a.createElement("div",{class:"form-item"},r.a.createElement("p",null,"Content"),r.a.createElement("textarea",{value:o,onChange:a})),r.a.createElement("div",{class:"form-item"},r.a.createElement("button",{type:"submit"},"Submit")))};function v(){var e=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n  .username {\n    color: ",";\n    font-weight: 900;\n  }\n  .left {\n    display: flex;\n  }\n  .right {\n    font-weight: 100;\n    color: ",";\n    font-size: 8px;\n    min-width: 100px;\n  }\n"]);return v=function(){return e},e}var E=p.b.div(v(),(function(e){return e.theme.red}),(function(e){return e.theme.grey})),y=function(e){var n=e.content,t=e.user,a=e.date;return r.a.createElement(E,null,r.a.createElement("div",{className:"left"},r.a.createElement("p",{className:"username"},t),r.a.createElement("p",null,n)),r.a.createElement("div",{className:"right"},r.a.createElement("p",null,function(e){var n=new Date(e),t=Math.floor((new Date-n)/1e3),a=Math.floor(t/31536e3);return a>1?a+" years":(a=Math.floor(t/2592e3))>1?a+" months":(a=Math.floor(t/86400))>1?a+" days":(a=Math.floor(t/3600))>1?a+" hours":(a=Math.floor(t/60))<1?a+" minutes":Math.floor(t/60)+" minutes"}(a))))},j=function(e){var n=e.postId,t=e.addComment,a=e.handleCommentChange,o=e.comment;return r.a.createElement(h,{onSubmit:function(e){return t(e,n)}},r.a.createElement("div",{className:"form-item"},r.a.createElement("input",{type:"text",value:o,onChange:a})),r.a.createElement("div",{className:"form-item"},r.a.createElement("button",{type:"submit"},"Submit")))};function x(){var e=Object(m.a)(["\n  background: white;\n  border: 1px solid ",";\n  position: relative;\n  padding: 10px;\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]);return x=function(){return e},e}var w=p.b.div(x(),(function(e){return e.theme.offWhite})),O=t(10);function C(){var e=Object(m.a)(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  color: ","\n"]);return C=function(){return e},e}function S(){var e=Object(m.a)(["\n   min-height: 100px;\n   display: flex;\n   flex-direction: column;\n   align-items: space-around;\n"]);return S=function(){return e},e}function k(){var e=Object(m.a)(["\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  font-weight: 100;\n"]);return k=function(){return e},e}var N=p.b.div(k()),T=p.b.div(S()),z=p.b.div(C(),(function(e){return e.theme.red})),D=function(e){var n=e.title,t=e.content,o=e.likes,c=e.addLike,l=e.comments,u=e.id,i=e.comment,m=e.user,d=e.date,f=e.currentUser,p=e.addComment,b=e.handleCommentChange,h=Object(a.useState)(!1),g=Object(s.a)(h,2),v=g[0],E=g[1];return r.a.createElement(w,null,r.a.createElement(N,null,r.a.createElement("h1",null,n),r.a.createElement("div",null,r.a.createElement("p",null,"A post by ",m.username),r.a.createElement("p",null,function(e){var n=new Date(e),t=n.getDate(),a=n.getMonth(),r=n.getFullYear();return t+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][a]+" "+r}(d)))),r.a.createElement("hr",null),r.a.createElement(T,null,r.a.createElement("p",null,t)),r.a.createElement("hr",null),r.a.createElement("h2",null,o," Likes "),f&&r.a.createElement(z,null,r.a.createElement("p",{onClick:function(){return c(u)}},"Like ",r.a.createElement(O.e,null)),r.a.createElement("p",{onClick:function(){return E(!0)}},"Leave a comment ",r.a.createElement(O.b,null))),v&&f&&l.map((function(e){return r.a.createElement(y,{key:e.id,content:e.content,user:e.user.username,date:e.date})})),v&&f&&r.a.createElement(j,{addComment:p,handleCommentChange:b,comment:i,postId:u}),!f&&r.a.createElement("a",{style:{color:"grey"},href:"/login"},"Login to leave a comment"))},P=null,J={getAll:function(){var e,n;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(fetch("/api/posts"));case 2:return e=t.sent,t.next=5,i.a.awrap(e.json());case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}))},create:function(e){var n,t,a;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n={method:"POST",headers:{Authorization:P,"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)},console.log(n),r.next=4,i.a.awrap(fetch("/api/posts",n));case 4:return t=r.sent,r.next=7,i.a.awrap(t.json());case 7:return a=r.sent,r.abrupt("return",a);case 9:case"end":return r.stop()}}))},update:function(e,n){var t,a,r;return i.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t={method:"PUT",headers:{Authorization:P,"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(n)},o.next=3,i.a.awrap(fetch("".concat("/api/posts","/").concat(e),t));case 3:return a=o.sent,o.next=6,i.a.awrap(a.json());case 6:return r=o.sent,console.log(r,"result"),o.abrupt("return",r);case 9:case"end":return o.stop()}}))},createComment:function(e,n){var t,a,r;return i.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t={method:"POST",headers:{Authorization:P,"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(n)},console.log(t),o.next=4,i.a.awrap(fetch("".concat("/api/posts","/").concat(e,"/comments"),t));case 4:return a=o.sent,o.next=7,i.a.awrap(a);case 7:return r=o.sent,console.log(r),o.abrupt("return",r);case 10:case"end":return o.stop()}}))},setToken:function(e){P="bearer ".concat(e)}},A={login:function(e){var n,t,a;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)},console.log(n.body),r.next=4,i.a.awrap(fetch("/api/login",n));case 4:return t=r.sent,r.next=7,i.a.awrap(t.json());case 7:return a=r.sent,r.abrupt("return",a);case 9:case"end":return r.stop()}}))}},U=function(e){var n=e.handleSubmit,t=e.username,a=e.password,o=e.handleUsernameChange,c=e.handlePasswordChange;return r.a.createElement("div",null,r.a.createElement(h,{onSubmit:n},r.a.createElement("div",{className:"form-item"},r.a.createElement("p",null,"Username"),r.a.createElement("input",{value:t,onChange:o})),r.a.createElement("div",{className:"form-item"},r.a.createElement("p",null,"Password"),r.a.createElement("input",{type:"password",value:a,onChange:c})),r.a.createElement("div",{className:"form-item"},r.a.createElement("button",{type:"submit"},"login"))))},L=function(e){var n,t,a;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)},console.log(n.body),r.next=4,i.a.awrap(fetch("/api/users",n));case 4:return t=r.sent,console.log(t),r.next=8,i.a.awrap(t.json());case 8:return a=r.sent,r.abrupt("return",a);case 10:case"end":return r.stop()}}))},M=function(e){e.handleLogin;var n=Object(a.useState)(""),t=Object(s.a)(n,2),o=t[0],c=t[1],l=Object(a.useState)(""),u=Object(s.a)(l,2),m=u[0],d=u[1],p=Object(a.useState)(""),b=Object(s.a)(p,2),g=b[0],v=b[1],E=Object(a.useState)(!1),y=Object(s.a)(E,2),j=y[0],x=y[1],w=Object(a.useState)(null),O=Object(s.a)(w,2),C=(O[0],O[1]),S=function(e){return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.prev=1,n.next=4,i.a.awrap(L({username:m,password:o,name:g}));case 4:d(""),c(""),v(""),x(!0),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(1),C("Invalid details"),setTimeout((function(){C(null)}),5e3);case 14:case"end":return n.stop()}}),null,null,[[1,10]])};return r.a.createElement("div",null,j?r.a.createElement(f.a,{to:"/login"}):r.a.createElement("div",null,r.a.createElement("h2",null,"SignUp"),r.a.createElement(h,{onSubmit:S},r.a.createElement("div",{className:"form-item"},"Username",r.a.createElement("input",{value:m,onChange:function(e){var n=e.target;return d(n.value)}})),r.a.createElement("div",{className:"form-item"},"Full ame",r.a.createElement("input",{value:g,onChange:function(e){var n=e.target;return v(n.value)}})),r.a.createElement("div",{className:"form-item"},"Password",r.a.createElement("input",{type:"password",value:o,onChange:function(e){var n=e.target;return c(n.value)}})),r.a.createElement("button",{type:"submit"},"login"))))},W=t(26),F=t(27),I=t(29),B=t(28),R=t(33);function _(){var e=Object(m.a)(["\n  max-width: ",";\n  margin: 0 auto;\n  padding: 2rem;\n"]);return _=function(){return e},e}function Y(){var e=Object(m.a)(["\n  background: white;\n  color: ",";\n  font-family: 'Roboto', sans-serif;\n  box-sizing: border-box; \n  html {\n    box-sizing: border-box;\n    font-size: 10px;\n  }\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  p, label, input, select {\n    padding: 0.5rem;\n    margin: 0;\n    font-size: 1rem;\n  }\n  h1 {\n    padding: 0.5rem;\n    margin: 0;\n    font-size: 1.5rem;\n  }\n  h2 {\n    padding: 0.5rem;\n    margin: 0;\n    font-size: 1.25rem;\n  }\n  a {\n    text-decoration: none;\n    padding: 0.5rem;\n    margin: 0;\n    font-size: 1rem;\n    color: ",";\n  }\n  button { font-family: 'Roboto', sans-serif; }\n  hr {\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    height: 1px;\n    color: red;\n    font-weight: 100;\n    border-color: rgba(0, 0, 0, 0.05);\n  }\n"]);return Y=function(){return e},e}var q={red:"#FF0000",grey:"#3A3A3A",lightgrey:"#E1E1E1",offWhite:"#EDEDED",maxWidth:"800px",bs:"0 12px 24px 0 rgba(0, 0, 0, 0.09)"},G=p.b.div(Y(),(function(e){return e.theme.black}),q.black),H=p.b.div(_(),(function(e){return e.theme.maxWidth})),K=function(e){function n(){return Object(W.a)(this,n),Object(I.a)(this,Object(B.a)(n).apply(this,arguments))}return Object(R.a)(n,e),Object(F.a)(n,[{key:"render",value:function(){return r.a.createElement(p.a,{theme:q},r.a.createElement(G,null,r.a.createElement(H,null,this.props.children)))}}]),n}(a.Component);function Q(){var e=Object(m.a)(["\n  display: flex;\n  justify-content: stretch;\n  align-items: center;\n  color: red;\n  .sort-btn {\n    display: flex;\n    justify-content: space-around;\n    padding: 1rem;\n    flex-grow: 1;\n    cursor: pointer;\n    text-align: center;\n    border: 1px solid ",";\n    \n  }\n"]);return Q=function(){return e},e}function V(){var e=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  a {\n    background: white;\n    color: grey;\n    margin-left: 20px;\n    font-size: 1.5em;\n  }\n  .logo {\n    font-weight: 900;\n    color: black;\n  }\n"]);return V=function(){return e},e}function X(){var e=Object(m.a)(["\n  width: 100%;\n  background: ",";\n  color: white;\n  border: 0;\n  font-weight: 600;\n  padding: 0.5rem 1.2rem;\n  font-size: 2rem;\n  cursor: pointer;\n"]);return X=function(){return e},e}var Z=p.b.button(X(),(function(e){return e.theme.red})),$=p.b.div(V()),ee=p.b.div(Q(),(function(e){return e.theme.offWhite}));var ne=function(){var e=Object(a.useState)([]),n=Object(s.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),u=Object(s.a)(c,2),m=u[0],p=u[1],b=Object(a.useState)(""),h=Object(s.a)(b,2),v=h[0],E=h[1],y=Object(a.useState)(""),j=Object(s.a)(y,2),x=j[0],w=j[1],C=Object(a.useState)(null),S=Object(s.a)(C,2),k=(S[0],S[1]),N=Object(a.useState)(""),T=Object(s.a)(N,2),z=T[0],P=T[1],L=Object(a.useState)(""),W=Object(s.a)(L,2),F=W[0],I=W[1],B=Object(a.useState)(null),R=Object(s.a)(B,2),_=R[0],Y=R[1],q=Object(a.useState)(!1),G=Object(s.a)(q,2),H=G[0],Q=G[1],V=Object(a.useState)(!1),X=Object(s.a)(V,2),ne=X[0],te=X[1],ae=Object(a.useState)(!1),re=Object(s.a)(ae,2),oe=re[0],ce=re[1],le=Object(a.useState)(!1),ue=Object(s.a)(le,2),ie=ue[0],se=ue[1];console.log(ne,oe,ie),Object(a.useEffect)((function(){J.getAll().then((function(e){return o(e)}))})),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedPostappUser");if(e){var n=JSON.parse(e);Y(n),J.setToken(n.token)}}),[]);var me=function(e){var n;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.prev=1,t.next=4,i.a.awrap(A.login({username:z,password:F}));case 4:n=t.sent,window.localStorage.setItem("loggedPostappUser",JSON.stringify(n)),J.setToken(n.token),Y(n),P(""),I(""),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),k("Wrong credentials"),setTimeout((function(){k(null)}),5e3);case 16:case"end":return t.stop()}}),null,null,[[1,12]])},de=function(e){e.preventDefault();var n={title:m,content:v,id:t.length+1};J.create(n).then((function(e){return o(t.concat(e))})),p(""),E("")},fe=function(e,n){e.preventDefault();var a={content:x};J.createComment(n,a),t.find((function(e){return e.id===n})).comments.concat(a),w("")},pe=function(e){var n=t.find((function(n){return n.id===e})),a=Object(l.a)({},n,{likes:n.likes+1});J.update(e,a).then((function(a){a.comments=n.comments,o(t.map((function(n){return n.id!==e?n:a})))})).catch((function(a){k("post '".concat(n.content,"' was already  from server")),setTimeout((function(){k(null)}),5e3),o(t.filter((function(n){return n.id!==e})))}))};return r.a.createElement(K,null,r.a.createElement(d.a,null,r.a.createElement($,null,r.a.createElement("div",null,r.a.createElement(d.b,{to:"/"},r.a.createElement("span",{className:"logo"},"FlipPad"))),r.a.createElement("div",null,!_&&r.a.createElement("div",null,r.a.createElement(d.b,{to:"/login"},"Login"),r.a.createElement(d.b,{to:"/signup"},"SignUp")),_&&r.a.createElement("div",null,r.a.createElement(d.b,{onClick:function(e){e.preventDefault(),Y(null),window.localStorage.clear(),P(""),I("")}},"Logout")))),r.a.createElement(f.b,{path:"/login",render:function(){return _?r.a.createElement(f.a,{to:"/"}):r.a.createElement(U,{username:z,password:F,handleUsernameChange:function(e){var n=e.target;return P(n.value)},handlePasswordChange:function(e){var n=e.target;return I(n.value)},handleSubmit:me})}}),r.a.createElement(f.b,{path:"/signup",render:function(){return r.a.createElement(M,{handleLogin:me})}}),r.a.createElement(f.b,{path:"/",render:function(){return r.a.createElement("div",null,r.a.createElement("div",null,_&&r.a.createElement(Z,{onClick:function(){return Q(!H)}},"Write a post     ",r.a.createElement(O.d,null)),_&&H&&r.a.createElement(g,{title:m,content:v,onTitleChange:function(e){var n=e.target;return p(n.value)},onContentChange:function(e){var n=e.target;return E(n.value)},addPost:de}),r.a.createElement(ee,null,r.a.createElement("div",{className:"sort-btn",onClick:function(){return te(!ne)}},"Sort by date ",r.a.createElement(O.a,null)),r.a.createElement("div",{className:"sort-btn",onClick:function(){return ce(!oe)}},"Sort by likes ",r.a.createElement(O.e,null)),r.a.createElement("div",{className:"sort-btn",onClick:function(){return se(!ie)}},"Sort by comments ",r.a.createElement(O.c,null)))),r.a.createElement("div",{class:"PostBoard"},t&&function(e){return ne&&(e.sort((function(e,n){return new Date(e.date)-new Date(n.date)})),ce(!1),se(!1)),oe&&(e.sort((function(e,n){return e.likes-n.likes})),te(!1),se(!1)),ie&&(e.sort((function(e,n){return e.comments.length-n.comments.length})),te(!1),ce(!1)),e}(t).map((function(e){return r.a.createElement(D,Object.assign({},e,{addLike:pe,key:e.id,currentUser:_,comment:x,addComment:fe,handleCommentChange:function(e){var n=e.target;return w(n.value)}}))}))))}})))};c.a.render(r.a.createElement(ne,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.7885f5e8.chunk.js.map