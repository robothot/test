"use strict";(self.webpackChunkms_admin_template=self.webpackChunkms_admin_template||[]).push([[12],{93012:(e,n,t)=>{t.r(n),t.d(n,{default:()=>o});var c=t(35944),r=t(67294),a=t(6940);const o=function(e){var n=e.tabs,t=(0,r.useRef)(0);return(0,r.useEffect)((function(){n.hooks.current={onBeforeCloseTab:function(){return a.message.info("关闭被阻止, 请使用右键强制关闭"),!1}}}),[]),(0,c.BX)(c.HY,{children:[(0,c.tZ)(a.Button,{onClick:function(){t.current+=1,n.active({key:"/",params:{message:"hello, word - ".concat(t.current)}})},children:"点击跳转到首页"}),(0,c.tZ)(a.Button,{onClick:function(){t.current+=1,n.open({item:{key:"newHome".concat(t.current),path:"/",name:"New Home Tab"},params:{message:"hello, word New - ".concat(t.current," ")},active:!1})},children:"打开新的首页信息"})]})}}}]);