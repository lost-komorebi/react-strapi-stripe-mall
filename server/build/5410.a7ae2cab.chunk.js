"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[5410],{35410:(N,O,_)=>{_.r(O),_.d(O,{InstalledPluginsPage:()=>C,ProtectedInstalledPluginsPage:()=>f});var s=_(92132),T=_(21272),I=_(11273),d=_(42455),o=_(38413),L=_(55356),B=_(4198),W=_(35513),h=_(26127),i=_(90361),a=_(33363),P=_(30893),r=_(25641),t=_(55506),K=_(14718),v=_(54894),R=_(82437),U=_(1927),m=_(28721),F=_(55151),S=_(79077),z=_(48940),H=_(2600),$=_(51187),u=_(15126),Q=_(63299),X=_(67014),Y=_(59080),Z=_(79275),c=_(61535),G=_(5790),J=_(12083),V=_(35223),e=_(5409),p=_(74930),k=_(41286),b=_(56336),w=_(13426),q=_(84624),__=_(77965),s_=_(54257),E_=_(71210),t_=_(39404),a_=_(58692),P_=_(501),M_=_(57646),l_=_(23120),D_=_(44414),n_=_(25962),O_=_(14664),d_=_(42588),o_=_(90325),i_=_(62785),v_=_(87443),C_=_(41032),g_=_(22957),A_=_(93179),T_=_(73055),I_=_(15747),L_=_(85306),B_=_(26509),W_=_(32058),h_=_(81185),r_=_(82261);const C=()=>{const{formatMessage:E}=(0,v.A)(),{notifyStatus:M}=(0,I.W)(),g=(0,t.hN)(),{_unstableFormatAPIError:A}=(0,t.wq)();(0,t.L4)();const{isLoading:j,data:l,error:D}=(0,m.q)();return T.useEffect(()=>{l&&M(E({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:E({id:"global.plugins",defaultMessage:"Plugins"})})),D&&g({type:"warning",message:A(D)})},[l,D,A,E,M,g]),j?(0,s.jsx)(d.P,{children:(0,s.jsx)(o.g,{"aria-busy":!0,children:(0,s.jsx)(t.Bl,{})})}):(0,s.jsx)(d.P,{children:(0,s.jsxs)(o.g,{children:[(0,s.jsx)(L.Q,{title:E({id:"global.plugins",defaultMessage:"Plugins"}),subtitle:E({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),(0,s.jsx)(B.s,{children:(0,s.jsxs)(W.X,{colCount:2,rowCount:l?.plugins?.length??0+1,children:[(0,s.jsx)(h.d,{children:(0,s.jsxs)(i.Tr,{children:[(0,s.jsx)(a.Th,{children:(0,s.jsx)(P.o,{variant:"sigma",textColor:"neutral600",children:E({id:"global.name",defaultMessage:"Name"})})}),(0,s.jsx)(a.Th,{children:(0,s.jsx)(P.o,{variant:"sigma",textColor:"neutral600",children:E({id:"global.description",defaultMessage:"description"})})})]})}),(0,s.jsx)(r.N,{children:l?.plugins.map(({name:n,displayName:x,description:y})=>(0,s.jsxs)(i.Tr,{children:[(0,s.jsx)(a.Td,{children:(0,s.jsx)(P.o,{textColor:"neutral800",variant:"omega",fontWeight:"bold",children:E({id:`global.plugins.${n}`,defaultMessage:x})})}),(0,s.jsx)(a.Td,{children:(0,s.jsx)(P.o,{textColor:"neutral800",children:E({id:`global.plugins.${n}.description`,defaultMessage:y})})})]},n))})]})})]})})},f=()=>{const{formatMessage:E}=(0,v.A)(),M=(0,R.d4)(U.s);return(0,s.jsxs)(t.kz,{permissions:M.marketplace?.main,children:[(0,s.jsx)(K.m,{title:E({id:"global.plugins",defaultMessage:"Plugins"})}),(0,s.jsx)(C,{})]})}}}]);
