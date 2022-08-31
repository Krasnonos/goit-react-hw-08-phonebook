"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[834],{1834:function(n,e,t){t.r(e),t.d(e,{default:function(){return jn}});var r,i,o,a,s,c,u,l,p,x,d,h,m,f,g,b,Z,j,w,v,y,z,C,k,S,L,F=t(2791),T=t(9434),A=t(7638),I=t(885),q=t(5985),B=t(168),D=t(4981),_=t(71),M=t(8014),N=D.Z.form(r||(r=(0,B.Z)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n"]))),P=D.Z.div(i||(i=(0,B.Z)(["\n  position: relative;\n\n  & + & {\n    margin-left: 25px;\n  }\n"]))),E=D.Z.label(o||(o=(0,B.Z)(["\n  font-size: 20px;\n  color: ",";\n"])),(function(n){return n.theme.colors.mainText})),$=D.Z.input(a||(a=(0,B.Z)(["\n  color: #000000;\n  font-weight: 400;\n  width: 250px;\n  height: 40px;\n  padding: 3px 20px 3px 40px;\n  margin-left: 5px;\n  border-radius: ",";\n  box-shadow: inset 0px 0px 12px 0px rgba(0, 0, 0, 0.35);\n  border: none;\n  background: ",";\n  font-size: ",";\n  opacity: 0.9;\n"])),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.inputBg}),(function(n){return n.theme.fontSizes.m})),J=(0,D.Z)(_.zZ9)(s||(s=(0,B.Z)(["\n  position: absolute;\n  top: 8px;\n  left: 75px;\n  height: 25px;\n  width: 25px;\n  z-index: 5;\n"]))),K=(0,D.Z)(M.Cvl)(c||(c=(0,B.Z)(["\n  position: absolute;\n  top: 8px;\n  left: 100px;\n  height: 25px;\n  width: 25px;\n  z-index: 5;\n"]))),W=D.Z.button(u||(u=(0,B.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 78px;\n  height: 35px;\n  margin-left: auto;\n  padding: 3px 9px;\n  margin-right: 40px;\n  border-radius: 3px;\n  border: ",";\n  text-decoration: none;\n  text-transform: uppercase;\n  font-size: ",";\n  background-color: #3f51b5;\n  color: white;\n  z-index: 9;\n  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),\n    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);\n"])),(function(n){return n.theme.borders.none}),(function(n){return n.theme.fontSizes.xs})),Y=t(3329),G=function(n){var e=n.nameForChange,t=n.numberForChange,r=n.id,i=n.toggleShowChangeMenu,o=(0,F.useState)((function(){return e})),a=(0,I.Z)(o,2),s=a[0],c=a[1],u=(0,F.useState)((function(){return t})),l=(0,I.Z)(u,2),p=l[0],x=l[1],d=(0,T.v9)((function(n){return n.contacts.contacts})),h=(0,T.I0)(),m=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"name":c(r);break;case"number":x(r);break;default:q.Am.error("case ".concat(t," doesn't support"))}};return(0,Y.jsxs)(N,{onSubmit:function(n){if(n.preventDefault(),d.find((function(n){return n.name===s})))q.Am.error("".concat(s," is already in contacts."));else{try{h((0,A.$Z)({id:r,name:s,number:p}))}catch(e){}q.Am.success("contact ".concat(s," was successfully changed")),i()}},children:[(0,Y.jsxs)(P,{children:[(0,Y.jsx)(E,{htmlFor:"name",children:"Name"}),(0,Y.jsx)(J,{}),(0,Y.jsx)($,{type:"text",value:s,name:"name",id:"name",minLength:3,maxLength:20,placeholder:"Change name",onChange:m,required:!0})]}),(0,Y.jsxs)(P,{children:[(0,Y.jsx)(E,{htmlFor:"number",children:"Number"}),(0,Y.jsx)(K,{}),(0,Y.jsx)($,{type:"tel",value:p,name:"number",id:"number",placeholder:"Change phone",pattern:"^\\+380\\d{3}\\d{2}\\d{2}\\d{2}$",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:m,required:!0})]}),(0,Y.jsx)(W,{type:"submit",children:"\u0421onfirm"})]})},H=t(3712),O=D.Z.li(l||(l=(0,B.Z)(["\n  width: 900px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n  background-color: ",";\n  border-radius: ",";\n  & + & {\n    margin-top: 15px;\n  }\n"])),(function(n){return n.theme.colors.secondBg}),(function(n){return n.theme.radii.normal})),Q=D.Z.div(p||(p=(0,B.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 80px;\n"]))),R=D.Z.div(x||(x=(0,B.Z)(["\n  display: flex;\n  align-items: center;\n  min-width: 330px;\n"]))),U=D.Z.div(d||(d=(0,B.Z)(["\n  display: flex;\n  align-items: center;\n  min-width: 230px;\n  margin-left: 35px;\n"]))),V=D.Z.p(h||(h=(0,B.Z)(["\n  margin: 0px;\n  margin-left: 5px;\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.colors.mainText})),X=D.Z.p(m||(m=(0,B.Z)(["\n  margin: 0px;\n  margin-left: 10px;\n  font-size: ",";\n  font-weight: 800;\n  color: ",";\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.mainText})),nn=D.Z.div(f||(f=(0,B.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-left: auto;\n  width: 170px;\n  height: 35px;\n"]))),en=function(n){var e=n.contact,t=(0,F.useState)(!1),r=(0,I.Z)(t,2),i=r[0],o=r[1],a=(0,T.v9)((function(n){return n.contacts.removeContactLoading})),s=(0,T.I0)(),c=function(){o(!i)},u=e.id,l=e.name,p=e.number;return(0,Y.jsxs)(O,{children:[(0,Y.jsxs)(Q,{children:[(0,Y.jsxs)(R,{children:[(0,Y.jsx)(_.zZ9,{size:30}),(0,Y.jsx)(V,{children:"name: "}),(0,Y.jsx)(X,{children:l})]}),(0,Y.jsxs)(U,{children:[(0,Y.jsx)(M.Cvl,{size:30}),(0,Y.jsx)(V,{children:"number: "}),(0,Y.jsx)(X,{children:p})]}),(0,Y.jsxs)(nn,{children:[(0,Y.jsx)(H.Z,{type:"button",color:"primary",size:"small",variant:"outlined",onClick:c,children:"Change"}),(0,Y.jsx)(H.Z,{color:"secondary",size:"small",type:"button",variant:"outlined",onClick:function(){return s((0,A.zY)(u))},disabled:a,children:"Delate"})]})]}),i&&(0,Y.jsx)(G,{nameForChange:l,numberForChange:p,id:u,setIsChangeContact:o,toggleShowChangeMenu:c})]})},tn=D.Z.ul(g||(g=(0,B.Z)(["\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n"]))),rn=function(){var n=(0,T.v9)((function(n){return n.contacts.contacts})),e=(0,T.v9)((function(n){return n.contacts.filter})),t=(0,T.I0)();(0,F.useEffect)((function(){t((0,A.K2)())}),[t]);var r=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,Y.jsx)(tn,{children:r.map((function(n){return(0,Y.jsx)(en,{contact:n},n.id)}))})},on=D.Z.form(b||(b=(0,B.Z)(["\n  display: flex;\n  justify-content: space-between;\n  width: 1000px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),an=D.Z.div(Z||(Z=(0,B.Z)(["\n  position: relative;\n"]))),sn=D.Z.label(j||(j=(0,B.Z)(["\n  font-size: 20px;\n  margin-left: 20px;\n  color: ",";\n"])),(function(n){return n.theme.colors.mainText})),cn=D.Z.input(w||(w=(0,B.Z)(["\n  color: #000000;\n  font-weight: 400;\n  width: 300px;\n  height: 40px;\n  padding: 3px 20px 3px 40px;\n  margin-left: 5px;\n  border-radius: ",";\n  box-shadow: inset 0px 0px 12px 0px rgba(0, 0, 0, 0.35);\n  border: none;\n  background: ",";\n  font-size: ",";\n  opacity: 0.9;\n"])),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.inputBg}),(function(n){return n.theme.fontSizes.m})),un=(0,D.Z)(_.zZ9)(v||(v=(0,B.Z)(["\n  position: absolute;\n  top: 8px;\n  left: 95px;\n  height: 25px;\n  width: 25px;\n  z-index: 5;\n"]))),ln=(0,D.Z)(M.Cvl)(y||(y=(0,B.Z)(["\n  position: absolute;\n  top: 8px;\n  left: 100px;\n  height: 25px;\n  width: 25px;\n  z-index: 5;\n"]))),pn=function(){var n=(0,F.useState)(""),e=(0,I.Z)(n,2),t=e[0],r=e[1],i=(0,F.useState)(""),o=(0,I.Z)(i,2),a=o[0],s=o[1],c=(0,T.v9)((function(n){return n.contacts.contacts})),u=(0,T.v9)((function(n){return n.contacts.createContactLoading})),l=(0,T.I0)(),p=function(n){var e=n.currentTarget,t=e.name,i=e.value;switch(t){case"name":r(i);break;case"number":s(i);break;default:q.Am.error("case ".concat(t," doesn't support"))}};return(0,Y.jsxs)(on,{onSubmit:function(n){if(n.preventDefault(),c.find((function(n){return n.name.toLowerCase()===t.toLocaleLowerCase()})))q.Am.error(" ".concat(t," is already in contacts."));else{try{l((0,A.rE)({name:t,number:a}))}catch(e){}q.Am.success("contact ".concat(t," successfully registered")),r(""),s("")}},children:[(0,Y.jsxs)(an,{children:[(0,Y.jsx)(sn,{htmlFor:"name",children:"Name"}),(0,Y.jsx)(un,{}),(0,Y.jsx)(cn,{type:"text",value:t,name:"name",placeholder:"Jhon Dou",id:"name",required:!0,minLength:3,maxLength:20,onChange:p})]}),(0,Y.jsxs)(an,{children:[(0,Y.jsx)(sn,{htmlFor:"tel",children:"Phone"}),(0,Y.jsx)(ln,{}),(0,Y.jsx)(cn,{type:"tel",value:a,contained:!0,name:"number",placeholder:"+380991111111",id:"tel",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:p})]}),(0,Y.jsx)(H.Z,{type:"submit",disabled:u,variant:"contained",color:"primary",children:"Add new contact"})]})},xn=t(3661),dn=t(3853),hn=D.Z.div(z||(z=(0,B.Z)(["\n  position: relative;\n  width: 360px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 30px;\n  margin-bottom: 30px;\n"]))),mn=D.Z.label(C||(C=(0,B.Z)(["\n  font-size: 20px;\n  color: ",";\n"])),(function(n){return n.theme.colors.mainText})),fn=D.Z.input(k||(k=(0,B.Z)(["\n  color: #000000;\n  font-weight: 400;\n  width: 300px;\n  height: 40px;\n  padding: 3px 20px 3px 40px;\n  margin-left: 5px;\n  border-radius: ",";\n  box-shadow: inset 0px 0px 12px 0px rgba(0, 0, 0, 0.35);\n  border: none;\n  background: ",";\n  font-size: ",";\n  opacity: 0.9;\n"])),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.inputBg}),(function(n){return n.theme.fontSizes.m})),gn=(0,D.Z)(dn.Ihx)(S||(S=(0,B.Z)(["\n  position: absolute;\n  top: 8px;\n  left: 67px;\n  height: 25px;\n  width: 25px;\n  z-index: 5;\n"]))),bn=function(){var n=(0,T.v9)((function(n){return n.contacts.filter})),e=(0,T.I0)();return(0,Y.jsxs)(hn,{children:[(0,Y.jsx)(mn,{htmlFor:"filter",children:"Filter"}),(0,Y.jsx)(gn,{}),(0,Y.jsx)(fn,{type:"text",value:n,onChange:function(n){return e((0,xn.M)(n.target.value))},id:"filter"})]})},Zn=D.Z.h1(L||(L=(0,B.Z)(["\n  margin: 0px;\n  margin-bottom: 15px;\n  text-align: center;\n  color: ",";\n  font-size: ",";\n  line-height: 1.4;\n"])),(function(n){return n.theme.colors.mainText}),(function(n){return n.theme.fontSizes.xl})),jn=function(){return(0,Y.jsxs)("div",{children:[(0,Y.jsx)(Zn,{children:"Contacts"}),(0,Y.jsx)(pn,{}),(0,Y.jsx)(bn,{}),(0,Y.jsx)(rn,{})]})}}}]);
//# sourceMappingURL=834.db19873b.chunk.js.map