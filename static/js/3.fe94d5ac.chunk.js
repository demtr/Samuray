(this.webpackJsonpapp1=this.webpackJsonpapp1||[]).push([[3],{294:function(t,e,s){t.exports={land:"Profile_land__2SUOE",status:"Profile_status__3r650"}},295:function(t,e,s){t.exports={item:"MyPosts_item__1ay08",theBlock:"MyPosts_theBlock__1QC0O",posts:"MyPosts_posts__2tgx_",new:"MyPosts_new__2tQMS"}},296:function(t,e,s){t.exports={item:"Post_item__1oe1X",like:"Post_like__2YyyD"}},297:function(t,e,s){"use strict";s.r(e);var n=s(3),c=s(28),r=s(29),i=s(31),a=s(30),o=s(0),u=s.n(o),l=s(99),j=s(295),b=s.n(j),d=s(296),p=s.n(d),O=s(97),f=s.p+"static/media/like.dab55641.jfif",h=s(1),x=function(t){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:p.a.item,children:[Object(h.jsx)("img",{src:O.a,alt:"avatar"}),t.message,Object(h.jsxs)("span",{className:p.a.like,children:[Object(h.jsx)("img",{src:f,alt:"like"}),t.lcount]})]})})},m=s(131),v=s(132),y=s(74),_=s(65),g=Object(y.a)(30),k=Object(v.a)({form:"newPostForm"})((function(t){return Object(h.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(h.jsx)("div",{children:Object(h.jsx)(m.a,{component:_.b,name:"newMsgText",className:b.a.new,placeholder:"Type new post here",validate:[y.b,g]})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"Add post"})})]})})),S=function(t){var e=t.state.anyPosts.map((function(t){return Object(h.jsx)(x,{message:t.message,lcount:t.lcount},t.id)}));return Object(h.jsxs)("div",{className:b.a.theBlock,children:[Object(h.jsx)("h3",{className:b.a.item,children:"My posts"}),Object(h.jsx)(k,{onSubmit:function(e){t.newPost(e.newMsgText)}}),Object(h.jsx)("div",{className:b.a.posts,children:e})]})},w=s(14),P=Object(w.b)((function(t){return{state:t.profileBlock}}),(function(t){return{newPost:function(e){t(Object(l.a)(e))}}}))(S),M=s.p+"static/media/landscape.88de7fd0.webp",U=s(294),N=s.n(U),I=s(67);var B=s(101);function A(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var s=[],n=!0,c=!1,r=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done)&&(s.push(i.value),!e||s.length!==e);n=!0);}catch(o){c=!0,r=o}finally{try{n||null==a.return||a.return()}finally{if(c)throw r}}return s}}(t,e)||Object(B.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var F=function(t){var e=A(Object(o.useState)(!1),2),s=e[0],n=e[1],c=A(Object(o.useState)(t.status),2),r=c[0],i=c[1];Object(o.useEffect)((function(){i(t.status)}),[t.status]);return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:N.a.status,children:"\u0421\u0442\u0430\u0442\u0443\u0441:"}),!s&&Object(h.jsx)("div",{onDoubleClick:function(){t.isMe&&n(!0)},children:t.status||"\u043d\u0435\u0442"}),s&&Object(h.jsx)("div",{children:Object(h.jsx)("input",{type:"text",onBlur:function(){n(!1),t.status!==r&&t.updateStatus(r)},autoFocus:!0,size:"50",onChange:function(t){i(t.target.value)},value:r})})]})},C=function(t){var e=t.profile,s=t.status,n=t.isMe,c=t.updateStatus;return e?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("img",{src:M,alt:"Profile wallpaper",className:N.a.land}),Object(h.jsx)("div",{children:Object(h.jsx)("h2",{children:e.fullName})}),Object(h.jsx)("div",{children:Object(h.jsx)("font",{color:"red",size:"+2",children:e.aboutMe})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:e.photos.large||O.a,alt:"Contact picture"})}),Object(h.jsx)("div",{children:Object(h.jsx)("h3",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:"})}),Object(h.jsx)("div",{children:Object.entries(e.contacts).map((function(t){return t[1]?Object(h.jsxs)("div",{children:[" ",Object(h.jsxs)("b",{children:[t[0],":"]})," ",t[1]]}):""}))}),Object(h.jsxs)("div",{children:[Object(h.jsx)("br",{}),Object(h.jsx)("b",{children:"\u041f\u043e\u0438\u0441\u043a \u0440\u0430\u0431\u043e\u0442\u044b:"})," ",e.lookingForAJob?Object(h.jsx)("i",{children:'"\u0414\u0430"'}):"\u041d\u0435\u0442"]}),e.lookingForAJob?Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:"})," ",e.lookingForAJobDescription]}):"",Object(h.jsx)(F,{status:s,updateStatus:c,isMe:n})]}):Object(h.jsx)(I.a,{})},J=function(t){var e;return Object(h.jsxs)("div",{children:[Object(h.jsx)(C,{profile:t.profile,status:t.status,updateStatus:t.updateUserStatus,isMe:(null===(e=t.profile)||void 0===e?void 0:e.userId)===t.myUserId}),Object(h.jsx)(P,{})]})},D=s(11),T=s(98),E=s(9),z=function(t){Object(i.a)(s,t);var e=Object(a.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId||this.props.myUserId||2;this.props.getUserProfile(t),this.props.getUserStatus(t)}},{key:"render",value:function(){return Object(h.jsx)(J,Object(n.a)({},this.props))}}]),s}(u.a.Component);e.default=Object(E.d)(Object(w.b)((function(t){return{profile:t.profileBlock.profile,status:t.profileBlock.status,myUserId:t.auth.userId}}),(function(t){return{getUserProfile:function(e){t(Object(l.c)(e))},getUserStatus:function(e){t(Object(l.d)(e))},updateUserStatus:function(e){t(Object(l.e)(e))}}})),T.a,D.f)(z)}}]);
//# sourceMappingURL=3.fe94d5ac.chunk.js.map