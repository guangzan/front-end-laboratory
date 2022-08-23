(self.webpackChunk=self.webpackChunk||[]).push([[311],{36210:function(K,A,s){"use strict";s.r(A),s.d(A,{default:function(){return Se}});var w={};s.r(w),s.d(w,{addUser:function(){return ne},deleteUser:function(){return ue},getUserDetail:function(){return ae},modifyUser:function(){return te},queryUserList:function(){return se}});var F=s(46686),g=s.n(F),b=s(35290),n=s.n(b),ee=s(30279),f=s.n(ee),re=s(411),h=s.n(re),S=s(43828);function se(i,e){return R.apply(this,arguments)}function R(){return R=h()(n()().mark(function i(e,t){return n()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,S.request)("/api/v1/queryUserList",f()({method:"GET",params:f()({},e)},t||{})));case 1:case"end":return l.stop()}},i)})),R.apply(this,arguments)}function ne(i,e){return B.apply(this,arguments)}function B(){return B=h()(n()().mark(function i(e,t){return n()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,S.request)("/api/v1/user",f()({method:"POST",headers:{"Content-Type":"application/json"},data:e},t||{})));case 1:case"end":return l.stop()}},i)})),B.apply(this,arguments)}function ae(i,e){return $.apply(this,arguments)}function $(){return $=h()(n()().mark(function i(e,t){var u;return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return u=e.userId,r.abrupt("return",(0,S.request)("/api/v1/user/".concat(u),f()({method:"GET",params:f()({},e)},t||{})));case 2:case"end":return r.stop()}},i)})),$.apply(this,arguments)}function te(i,e,t){return L.apply(this,arguments)}function L(){return L=h()(n()().mark(function i(e,t,u){var l;return n()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return l=e.userId,d.abrupt("return",(0,S.request)("/api/v1/user/".concat(l),f()({method:"PUT",headers:{"Content-Type":"application/json"},params:f()({},e),data:t},u||{})));case 2:case"end":return d.stop()}},i)})),L.apply(this,arguments)}function ue(i,e){return D.apply(this,arguments)}function D(){return D=h()(n()().mark(function i(e,t){var u;return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return u=e.userId,r.abrupt("return",(0,S.request)("/api/v1/user/".concat(u),f()({method:"DELETE",params:f()({},e)},t||{})));case 2:case"end":return r.stop()}},i)})),D.apply(this,arguments)}var le={UserController:w},W=s(68643),Y=s(78984),ie=s(5524),y=s(70987),de=s(49954),P=s(67724),oe=s(18536),U=s(63313),H=s(90539),a=s(62086),ce=function(e){var t=e.modalVisible,u=e.onCancel;return(0,a.jsx)(H.Z,{destroyOnClose:!0,title:"\u65B0\u5EFA",width:420,visible:t,onCancel:function(){return u()},footer:null,children:e.children})},je=ce,z=s(14699),me=s(43242),he=s(44557),V=s(11046),fe=s(21846),ve=s(93270),pe=function(e){return(0,a.jsxs)(z.L,{stepsProps:{size:"small"},stepsFormRender:function(u,l){return(0,a.jsx)(H.Z,{width:640,bodyStyle:{padding:"32px 40px 48px"},destroyOnClose:!0,title:"\u89C4\u5219\u914D\u7F6E",visible:e.updateModalVisible,footer:l,onCancel:function(){return e.onCancel()},children:u})},onFinish:e.onSubmit,children:[(0,a.jsxs)(z.L.StepForm,{initialValues:{name:e.values.name,nickName:e.values.nickName},title:"\u57FA\u672C\u4FE1\u606F",children:[(0,a.jsx)(me.Z,{width:"md",name:"name",label:"\u89C4\u5219\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u89C4\u5219\u540D\u79F0\uFF01"}]}),(0,a.jsx)(he.Z,{name:"desc",width:"md",label:"\u89C4\u5219\u63CF\u8FF0",placeholder:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26\u7684\u89C4\u5219\u63CF\u8FF0\uFF01",min:5}]})]}),(0,a.jsxs)(z.L.StepForm,{initialValues:{target:"0",template:"0"},title:"\u914D\u7F6E\u89C4\u5219\u5C5E\u6027",children:[(0,a.jsx)(V.Z,{width:"md",name:"target",label:"\u76D1\u63A7\u5BF9\u8C61",valueEnum:{0:"\u8868\u4E00",1:"\u8868\u4E8C"}}),(0,a.jsx)(V.Z,{width:"md",name:"template",label:"\u89C4\u5219\u6A21\u677F",valueEnum:{0:"\u89C4\u5219\u6A21\u677F\u4E00",1:"\u89C4\u5219\u6A21\u677F\u4E8C"}}),(0,a.jsx)(fe.Z.Group,{name:"type",width:"md",label:"\u89C4\u5219\u7C7B\u578B",options:[{value:"0",label:"\u5F3A"},{value:"1",label:"\u5F31"}]})]}),(0,a.jsxs)(z.L.StepForm,{initialValues:{type:"1",frequency:"month"},title:"\u8BBE\u5B9A\u8C03\u5EA6\u5468\u671F",children:[(0,a.jsx)(ve.Z,{name:"time",label:"\u5F00\u59CB\u65F6\u95F4",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4\uFF01"}]}),(0,a.jsx)(V.Z,{name:"frequency",label:"\u76D1\u63A7\u5BF9\u8C61",width:"xs",valueEnum:{month:"\u6708",week:"\u5468"}})]})]})},ye=pe,T=le.UserController,ge=T.addUser,be=T.queryUserList,Ce=T.deleteUser,we=T.modifyUser,Fe=function(){var i=h()(n()().mark(function e(t){var u;return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return u=y.ZP.loading("\u6B63\u5728\u6DFB\u52A0"),r.prev=1,r.next=4,ge(f()({},t));case 4:return u(),y.ZP.success("\u6DFB\u52A0\u6210\u529F"),r.abrupt("return",!0);case 9:return r.prev=9,r.t0=r.catch(1),u(),y.ZP.error("\u6DFB\u52A0\u5931\u8D25\u8BF7\u91CD\u8BD5\uFF01"),r.abrupt("return",!1);case 14:case"end":return r.stop()}},e,null,[[1,9]])}));return function(t){return i.apply(this,arguments)}}(),Ue=function(){var i=h()(n()().mark(function e(t){var u;return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return u=y.ZP.loading("\u6B63\u5728\u914D\u7F6E"),r.prev=1,r.next=4,we({userId:t.id||""},{name:t.name||"",nickName:t.nickName||"",email:t.email||""});case 4:return u(),y.ZP.success("\u914D\u7F6E\u6210\u529F"),r.abrupt("return",!0);case 9:return r.prev=9,r.t0=r.catch(1),u(),y.ZP.error("\u914D\u7F6E\u5931\u8D25\u8BF7\u91CD\u8BD5\uFF01"),r.abrupt("return",!1);case 14:case"end":return r.stop()}},e,null,[[1,9]])}));return function(t){return i.apply(this,arguments)}}(),ke=function(){var i=h()(n()().mark(function e(t){var u,l;return n()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(u=y.ZP.loading("\u6B63\u5728\u5220\u9664"),t){d.next=3;break}return d.abrupt("return",!0);case 3:return d.prev=3,d.next=6,Ce({userId:((l=t.find(function(I){return I.id}))===null||l===void 0?void 0:l.id)||""});case 6:return u(),y.ZP.success("\u5220\u9664\u6210\u529F\uFF0C\u5373\u5C06\u5237\u65B0"),d.abrupt("return",!0);case 11:return d.prev=11,d.t0=d.catch(3),u(),y.ZP.error("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"),d.abrupt("return",!1);case 16:case"end":return d.stop()}},e,null,[[3,11]])}));return function(t){return i.apply(this,arguments)}}(),xe=function(){var e=(0,U.useState)(!1),t=g()(e,2),u=t[0],l=t[1],r=(0,U.useState)(!1),d=g()(r,2),I=d[0],M=d[1],Ee=(0,U.useState)({}),J=g()(Ee,2),O=J[0],N=J[1],k=(0,U.useRef)(),ze=(0,U.useState)(),Q=g()(ze,2),v=Q[0],Te=Q[1],Ze=(0,U.useState)([]),X=g()(Ze,2),E=X[0],q=X[1],G=[{title:"\u540D\u79F0",dataIndex:"name",tip:"\u540D\u79F0\u662F\u552F\u4E00\u7684 key",formItemProps:{rules:[{required:!0,message:"\u540D\u79F0\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u6635\u79F0",dataIndex:"nickName",valueType:"text"},{title:"\u6027\u522B",dataIndex:"gender",hideInForm:!0,valueEnum:{0:{text:"\u7537",status:"MALE"},1:{text:"\u5973",status:"FEMALE"}}},{title:"\u64CD\u4F5C",dataIndex:"option",valueType:"option",render:function(c,o){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("a",{onClick:function(){M(!0),N(o)},children:"\u914D\u7F6E"}),(0,a.jsx)(de.Z,{type:"vertical"}),(0,a.jsx)("a",{href:"",children:"\u8BA2\u9605\u8B66\u62A5"})]})}}];return(0,a.jsxs)(W._z,{header:{title:"CRUD \u793A\u4F8B"},children:[(0,a.jsx)(Y.Z,{headerTitle:"\u67E5\u8BE2\u8868\u683C",actionRef:k,rowKey:"id",search:{labelWidth:120},toolBarRender:function(){return[(0,a.jsx)(P.Z,{type:"primary",onClick:function(){return l(!0)},children:"\u65B0\u5EFA"},"1")]},request:function(){var j=h()(n()().mark(function c(o,p,C){var m,Z,_;return n()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,be(f()(f()({},o),{},{sorter:p,filter:C}));case 2:return m=x.sent,Z=m.data,_=m.success,x.abrupt("return",{data:(Z==null?void 0:Z.list)||[],success:_});case 6:case"end":return x.stop()}},c)}));return function(c,o,p){return j.apply(this,arguments)}}(),columns:G,rowSelection:{onChange:function(c,o){return q(o)}}}),(E==null?void 0:E.length)>0&&(0,a.jsxs)(W.Sc,{extra:(0,a.jsxs)("div",{children:["\u5DF2\u9009\u62E9"," ",(0,a.jsx)("a",{style:{fontWeight:600},children:E.length})," ","\u9879\xA0\xA0"]}),children:[(0,a.jsx)(P.Z,{onClick:h()(n()().mark(function j(){var c,o;return n()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,ke(E);case 2:q([]),(c=k.current)===null||c===void 0||(o=c.reloadAndRest)===null||o===void 0||o.call(c);case 4:case"end":return C.stop()}},j)})),children:"\u6279\u91CF\u5220\u9664"}),(0,a.jsx)(P.Z,{type:"primary",children:"\u6279\u91CF\u5BA1\u6279"})]}),(0,a.jsx)(je,{onCancel:function(){return l(!1)},modalVisible:u,children:(0,a.jsx)(Y.Z,{onSubmit:function(){var j=h()(n()().mark(function c(o){var p;return n()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Fe(o);case 2:p=m.sent,p&&(l(!1),k.current&&k.current.reload());case 4:case"end":return m.stop()}},c)}));return function(c){return j.apply(this,arguments)}}(),rowKey:"id",type:"form",columns:G})}),O&&Object.keys(O).length?(0,a.jsx)(ye,{onSubmit:function(){var j=h()(n()().mark(function c(o){var p;return n()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Ue(o);case 2:p=m.sent,p&&(M(!1),N({}),k.current&&k.current.reload());case 4:case"end":return m.stop()}},c)}));return function(c){return j.apply(this,arguments)}}(),onCancel:function(){M(!1),N({})},updateModalVisible:I,values:O}):null,(0,a.jsx)(oe.Z,{width:600,visible:!!v,onClose:function(){Te(void 0)},closable:!1,children:(v==null?void 0:v.name)&&(0,a.jsx)(ie.vY,{column:2,title:v==null?void 0:v.name,request:h()(n()().mark(function j(){return n()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",{data:v||{}});case 1:case"end":return o.stop()}},j)})),params:{id:v==null?void 0:v.name},columns:G})})]})},Se=xe},38660:function(K,A,s){var w={"./af":28163,"./af.js":28163,"./ar":70096,"./ar-dz":50005,"./ar-dz.js":50005,"./ar-kw":16042,"./ar-kw.js":16042,"./ar-ly":43183,"./ar-ly.js":43183,"./ar-ma":35656,"./ar-ma.js":35656,"./ar-sa":32343,"./ar-sa.js":32343,"./ar-tn":23815,"./ar-tn.js":23815,"./ar.js":70096,"./az":62320,"./az.js":62320,"./be":32204,"./be.js":32204,"./bg":94994,"./bg.js":94994,"./bm":85338,"./bm.js":85338,"./bn":85853,"./bn-bd":48735,"./bn-bd.js":48735,"./bn.js":85853,"./bo":44547,"./bo.js":44547,"./br":29491,"./br.js":29491,"./bs":33046,"./bs.js":33046,"./ca":20568,"./ca.js":20568,"./cs":46889,"./cs.js":46889,"./cv":7267,"./cv.js":7267,"./cy":24362,"./cy.js":24362,"./da":34133,"./da.js":34133,"./de":44268,"./de-at":28288,"./de-at.js":28288,"./de-ch":42916,"./de-ch.js":42916,"./de.js":44268,"./dv":39938,"./dv.js":39938,"./el":51336,"./el.js":51336,"./en-au":62902,"./en-au.js":62902,"./en-ca":70270,"./en-ca.js":70270,"./en-gb":48554,"./en-gb.js":48554,"./en-ie":13044,"./en-ie.js":13044,"./en-il":71910,"./en-il.js":71910,"./en-in":1697,"./en-in.js":1697,"./en-nz":48158,"./en-nz.js":48158,"./en-sg":88683,"./en-sg.js":88683,"./eo":61190,"./eo.js":61190,"./es":19327,"./es-do":46495,"./es-do.js":46495,"./es-mx":97130,"./es-mx.js":97130,"./es-us":63738,"./es-us.js":63738,"./es.js":19327,"./et":19477,"./et.js":19477,"./eu":1817,"./eu.js":1817,"./fa":77570,"./fa.js":77570,"./fi":51753,"./fi.js":51753,"./fil":39975,"./fil.js":39975,"./fo":10756,"./fo.js":10756,"./fr":79876,"./fr-ca":32951,"./fr-ca.js":32951,"./fr-ch":43803,"./fr-ch.js":43803,"./fr.js":79876,"./fy":53470,"./fy.js":53470,"./ga":31347,"./ga.js":31347,"./gd":72624,"./gd.js":72624,"./gl":93758,"./gl.js":93758,"./gom-deva":22327,"./gom-deva.js":22327,"./gom-latn":97089,"./gom-latn.js":97089,"./gu":60929,"./gu.js":60929,"./he":4438,"./he.js":4438,"./hi":57746,"./hi.js":57746,"./hr":85893,"./hr.js":85893,"./hu":55169,"./hu.js":55169,"./hy-am":60394,"./hy-am.js":60394,"./id":34171,"./id.js":34171,"./is":28435,"./is.js":28435,"./it":22412,"./it-ch":33640,"./it-ch.js":33640,"./it.js":22412,"./ja":76261,"./ja.js":76261,"./jv":2826,"./jv.js":2826,"./ka":9887,"./ka.js":9887,"./kk":16262,"./kk.js":16262,"./km":95730,"./km.js":95730,"./kn":55773,"./kn.js":55773,"./ko":91206,"./ko.js":91206,"./ku":20571,"./ku.js":20571,"./ky":67971,"./ky.js":67971,"./lb":75817,"./lb.js":75817,"./lo":93863,"./lo.js":93863,"./lt":20610,"./lt.js":20610,"./lv":55147,"./lv.js":55147,"./me":53827,"./me.js":53827,"./mi":90358,"./mi.js":90358,"./mk":88489,"./mk.js":88489,"./ml":72930,"./ml.js":72930,"./mn":97248,"./mn.js":97248,"./mr":98619,"./mr.js":98619,"./ms":98583,"./ms-my":30810,"./ms-my.js":30810,"./ms.js":98583,"./mt":53425,"./mt.js":53425,"./my":72319,"./my.js":72319,"./nb":37866,"./nb.js":37866,"./ne":57630,"./ne.js":57630,"./nl":96940,"./nl-be":34037,"./nl-be.js":34037,"./nl.js":96940,"./nn":34411,"./nn.js":34411,"./oc-lnc":21584,"./oc-lnc.js":21584,"./pa-in":24633,"./pa-in.js":24633,"./pl":54390,"./pl.js":54390,"./pt":95040,"./pt-br":54013,"./pt-br.js":54013,"./pt.js":95040,"./ro":12338,"./ro.js":12338,"./ru":9874,"./ru.js":9874,"./sd":34992,"./sd.js":34992,"./se":28076,"./se.js":28076,"./si":22737,"./si.js":22737,"./sk":83699,"./sk.js":83699,"./sl":44565,"./sl.js":44565,"./sq":35255,"./sq.js":35255,"./sr":95098,"./sr-cyrl":3830,"./sr-cyrl.js":3830,"./sr.js":95098,"./ss":19587,"./ss.js":19587,"./sv":34285,"./sv.js":34285,"./sw":13065,"./sw.js":13065,"./ta":52703,"./ta.js":52703,"./te":90618,"./te.js":90618,"./tet":19035,"./tet.js":19035,"./tg":45334,"./tg.js":45334,"./th":41853,"./th.js":41853,"./tk":37250,"./tk.js":37250,"./tl-ph":50704,"./tl-ph.js":50704,"./tlh":1866,"./tlh.js":1866,"./tr":81299,"./tr.js":81299,"./tzl":35885,"./tzl.js":35885,"./tzm":21370,"./tzm-latn":11878,"./tzm-latn.js":11878,"./tzm.js":21370,"./ug-cn":95521,"./ug-cn.js":95521,"./uk":63646,"./uk.js":63646,"./ur":16237,"./ur.js":16237,"./uz":90519,"./uz-latn":23225,"./uz-latn.js":23225,"./uz.js":90519,"./vi":31153,"./vi.js":31153,"./x-pseudo":77210,"./x-pseudo.js":77210,"./yo":13086,"./yo.js":13086,"./zh-cn":53933,"./zh-cn.js":53933,"./zh-hk":45749,"./zh-hk.js":45749,"./zh-mo":51044,"./zh-mo.js":51044,"./zh-tw":13759,"./zh-tw.js":13759};function F(b){var n=g(b);return s(n)}function g(b){if(!s.o(w,b)){var n=new Error("Cannot find module '"+b+"'");throw n.code="MODULE_NOT_FOUND",n}return w[b]}F.keys=function(){return Object.keys(w)},F.resolve=g,K.exports=F,F.id=38660}}]);
