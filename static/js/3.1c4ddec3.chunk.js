(this.webpackJsonpapp1=this.webpackJsonpapp1||[]).push([[3],{295:function(e,t,s){e.exports={land:"Profile_land__2SUOE",status:"Profile_status__3r650",mainPhoto:"Profile_mainPhoto__1TUL9",contacts:"Profile_contacts__2M2AA",head:"Profile_head__bcnF-",contactsHead:"Profile_contactsHead__1Zs0b"}},296:function(e,t,s){e.exports={item:"MyPosts_item__1ay08",theBlock:"MyPosts_theBlock__1QC0O",posts:"MyPosts_posts__2tgx_",new:"MyPosts_new__2tQMS"}},297:function(e,t,s){e.exports={item:"Post_item__1oe1X",like:"Post_like__2YyyD"}},298:function(e,t,s){"use strict";s.r(t);var c=s(3),n=s(28),i=s(29),o=s(31),r=s(30),a=s(0),l=s.n(a),j=s(100),d=s(296),b=s.n(d),u=s(297),h=s.n(u),O=s(98),f=s.p+"static/media/like.dab55641.jfif",p=s(1),x=function(e){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:h.a.item,children:[Object(p.jsx)("img",{src:O.a,alt:"avatar"}),e.message,Object(p.jsxs)("span",{className:h.a.like,children:[Object(p.jsx)("img",{src:f,alt:"like"}),e.lcount]})]})})},m=s(132),v=s(133),g=s(57),y=s(48),P=Object(g.a)(30),_=Object(v.a)({form:"newPostForm"})((function(e){return Object(p.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(p.jsx)("div",{children:Object(p.jsx)(m.a,{component:y.b,name:"newMsgText",className:b.a.new,placeholder:"Type new post here",validate:[g.b,P]})}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"Add post"})})]})})),M=function(e){var t=e.state.anyPosts.map((function(e){return Object(p.jsx)(x,{message:e.message,lcount:e.lcount},e.id)}));return Object(p.jsxs)("div",{className:b.a.theBlock,children:[Object(p.jsx)("h3",{className:b.a.item,children:"My posts"}),Object(p.jsx)(_,{onSubmit:function(t){e.newPost(t.newMsgText)}}),Object(p.jsx)("div",{className:b.a.posts,children:t})]})},k=s(15),S=Object(k.b)((function(e){return{state:e.profileBlock}}),(function(e){return{newPost:function(t){e(Object(j.a)(t))}}}))(M),N=s.p+"static/media/landscape.88de7fd0.webp",w=s(295),E=s.n(w),F=s(68);var U=s(102);function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var s=[],c=!0,n=!1,i=void 0;try{for(var o,r=e[Symbol.iterator]();!(c=(o=r.next()).done)&&(s.push(o.value),!t||s.length!==t);c=!0);}catch(a){n=!0,i=a}finally{try{c||null==r.return||r.return()}finally{if(n)throw i}}return s}}(e,t)||Object(U.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var C=function(e){var t=A(Object(a.useState)(!1),2),s=t[0],c=t[1],n=A(Object(a.useState)(e.status),2),i=n[0],o=n[1];Object(a.useEffect)((function(){o(e.status)}),[e.status]);return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:E.a.status,children:"\u0421\u0442\u0430\u0442\u0443\u0441:"}),!s&&Object(p.jsx)("div",{onDoubleClick:function(){e.isMe&&c(!0)},children:e.status||"\u043d\u0435\u0442"}),s&&Object(p.jsx)("div",{children:Object(p.jsx)("input",{type:"text",onBlur:function(){c(!1),e.status!==i&&e.updateStatus(i)},autoFocus:!0,size:"50",onChange:function(e){o(e.target.value)},value:i})})]})},I=s(91),B=s.n(I),D=Object(v.a)({form:"profile-data"})((function(e){var t,s=e.profile,c=e.isMe,n=e.savePhoto,i=e.goOutOfEditMode,o=e.handleSubmit,r=e.error,a=0;return Object(p.jsxs)("form",{onSubmit:o,children:[Object(p.jsx)("h2",{className:E.a.head,children:"Edit profile"}),Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:(null===(t=s.photos)||void 0===t?void 0:t.large)||O.a,alt:"Contact picture",className:E.a.mainPhoto})}),c&&Object(p.jsxs)("div",{children:[Object(p.jsx)("i",{children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u0442\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f"}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"file",onChange:function(e){var t;(null===(t=e.target.files)||void 0===t?void 0:t.length)&&n(e.target.files[0])}})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f: "}),Object(p.jsx)(m.a,{type:"text",name:"fullName",component:y.a,validate:[g.b],placeholder:"\u043f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"\u041f\u0440\u043e \u043c\u0435\u043d\u044f: "}),Object(p.jsx)(m.a,{type:"text",name:"aboutMe",component:y.b,validate:[g.b],placeholder:"\u043f\u0440\u043e \u043c\u0435\u043d\u044f",cols:"50"})]}),Object(p.jsx)("div",{children:Object(p.jsx)("h3",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:"})}),r&&Object(p.jsx)("div",{className:B.a.errDiv,children:Object(p.jsx)("span",{className:B.a.error,children:r})}),Object(p.jsx)("div",{className:E.a.contacts,children:Object.entries(s.contacts).map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("b",{children:[e[0],": "]}),Object(p.jsx)(m.a,{type:"text",name:"contacts."+e[0],component:y.a,validate:[]})]},a++)}))}),Object(p.jsxs)("div",{children:[Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"\u041f\u043e\u0438\u0441\u043a \u0440\u0430\u0431\u043e\u0442\u044b:"}),Object(p.jsx)(m.a,{type:"checkbox",name:"lookingForAJob",component:y.a})]}),Object(p.jsx)("div",{children:Object(p.jsx)("b",{children:"\u041c\u043e\u0439 \u0440\u0430\u0431\u043e\u0447\u0438\u0439 \u043e\u043f\u044b\u0442:"})}),Object(p.jsx)("div",{children:Object(p.jsx)(m.a,{type:"text",name:"lookingForAJobDescription",component:y.b,cols:"50"})}),c&&Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{children:"Save"}),Object(p.jsx)("button",{onClick:i,children:"Cancel"})]})]})})),J=function(e){var t,s=e.profile,c=e.isMe,n=e.goToEditMode,i=0;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{children:Object(p.jsx)("h2",{children:s.fullName})}),Object(p.jsx)("div",{children:Object(p.jsx)("font",{color:"red",size:"+2",children:s.aboutMe})}),Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:(null===(t=s.photos)||void 0===t?void 0:t.large)||O.a,alt:"Contact",className:E.a.mainPhoto})}),Object(p.jsx)("div",{className:E.a.contactsHead,children:Object(p.jsx)("h3",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:"})}),Object(p.jsxs)("div",{className:E.a.contacts,children:[Object.entries(s.contacts).map((function(e){return e[1]?(i++,Object(p.jsxs)("div",{children:[" ",Object(p.jsxs)("b",{children:[e[0],":"]})," ",e[1]]},i)):""})),!!i||Object(p.jsx)("div",{children:"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"\u041f\u043e\u0438\u0441\u043a \u0440\u0430\u0431\u043e\u0442\u044b:"})," ",s.lookingForAJob?Object(p.jsx)("i",{children:'"\u0414\u0430"'}):"\u041d\u0435\u0442"]}),s.lookingForAJob?Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"\u041e\u043f\u044b\u0442 \u0440\u0430\u0431\u043e\u0442\u044b:"})," ",s.lookingForAJobDescription]}):"",c&&Object(p.jsx)("button",{onClick:n,children:"Edit"})]})},T=function(e){var t=e.profile,s=e.status,c=e.isMe,n=e.updateStatus,i=e.savePhoto,o=e.saveProfile,r=e.editMode,a=e.setEditMode;if(!t)return Object(p.jsx)(F.a,{});return c||a(!1),Object(p.jsxs)(p.Fragment,{children:[c&&Object(p.jsx)("img",{src:N,alt:"Profile wallpaper",className:E.a.land}),r?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(D,{profile:t,isMe:c,savePhoto:i,initialValues:t,goOutOfEditMode:function(){a(!1)},onSubmit:function(e){o(e)}}),Object(p.jsx)(C,{status:s,updateStatus:n,isMe:c})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(J,{profile:t,isMe:c,goToEditMode:function(){a(!0)}}),Object(p.jsx)("div",{className:E.a.status,children:"\u0421\u0442\u0430\u0442\u0443\u0441:"}),Object(p.jsx)("div",{children:s})]})]})},H=function(e){var t;return Object(p.jsxs)("div",{children:[Object(p.jsx)(T,{profile:e.profile,status:e.status,updateStatus:e.updateUserStatus,isMe:(null===(t=e.profile)||void 0===t?void 0:t.userId)===e.myUserId,savePhoto:e.savePhoto,saveProfile:e.saveProfile,editMode:e.editMode,setEditMode:e.setEditProfile}),Object(p.jsx)(S,{})]})},z=s(11),Q=s(99),L=s(10),V=function(e){Object(o.a)(s,e);var t=Object(r.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId||this.props.myUserId||2;this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,s){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(p.jsx)(H,Object(c.a)({},this.props))}}]),s}(l.a.Component);t.default=Object(L.d)(Object(k.b)((function(e){return{profile:e.profileBlock.profile,editMode:e.profileBlock.profileEdit,status:e.profileBlock.status,myUserId:e.auth.userId}}),(function(e){return{getUserProfile:function(t){e(Object(j.c)(t))},getUserStatus:function(t){e(Object(j.d)(t))},updateUserStatus:function(t){e(Object(j.h)(t))},savePhoto:function(t){e(Object(j.g)(t))},saveProfile:function(t){e(Object(j.e)(t))},setEditProfile:function(t){e(Object(j.f)(t))}}})),Q.a,z.f)(V)}}]);
//# sourceMappingURL=3.1c4ddec3.chunk.js.map