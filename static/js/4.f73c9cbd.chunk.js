(this.webpackJsonpapp1=this.webpackJsonpapp1||[]).push([[4],{293:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__S-V0g",dialogItems:"Dialogs_dialogItems__28cCP",dialog:"Dialogs_dialog__3KodG",active:"Dialogs_active__3-pmQ",messages:"Dialogs_messages__qKobE",message:"Dialogs_message__3HIgh"}},298:function(e,s,a){"use strict";a.r(s);var t=a(130),i=a(293),n=a.n(i),c=a(12),o=a(1),d=function(e){var s="/dialogs/"+e.id;return Object(o.jsx)("div",{className:n.a.dialog+" "+n.a.active,children:Object(o.jsxs)(c.b,{to:s,children:[" ",e.name]})})},l=function(e){return Object(o.jsx)("div",{className:n.a.message,children:e.message})},r=a(131),g=a(132),m=a(65),j=a(74),b=Object(j.a)(100),u=Object(g.a)({form:"newMsgForm"})((function(e){return Object(o.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(o.jsx)("div",{children:Object(o.jsx)(r.a,{name:"msgText",component:m.b,validate:[j.b,b],placeholder:"Enter your text"})}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})})),O=function(e){var s=e.state.dialogs.map((function(e){return Object(o.jsx)(d,{name:e.name,id:e.id},e.id)})),a=e.state.messages.map((function(e){return Object(o.jsx)(l,{message:e.message},e.id)}));return Object(o.jsxs)("div",{className:n.a.dialogs,children:[Object(o.jsx)("div",{className:n.a.dialogItems,children:s}),Object(o.jsxs)("div",{className:n.a.messages,children:[a,Object(o.jsx)(u,{onSubmit:function(s){e.onAddMessage(s.msgText)}})]})]})},x=a(14),_=a(98),h=a(9);s.default=Object(h.d)(Object(x.b)((function(e){return{state:e.dialogBlock}}),(function(e){return{onAddMessage:function(s){e(Object(t.a)(s))}}})),_.a)(O)}}]);
//# sourceMappingURL=4.f73c9cbd.chunk.js.map