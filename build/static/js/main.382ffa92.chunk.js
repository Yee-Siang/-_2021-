(this.webpackJsonpfinal=this.webpackJsonpfinal||[]).push([[0],{181:function(e,t,a){e.exports=a(276)},276:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(34),c=a.n(o),l=a(67),s=a(22),i=a.n(s),u=a(32),m=a(14),p=(a(137),a(177)),g=a(277),d=a(171),f=a(36),h=a(279),E=a(282),y=a(280),b=a(126),w=a(278),S=a(284),C=a(72),O=a(281),j=a(286),v=a(287),k=a(288),x=a(289),P=a(179),I=a(290),T=a(291),N=a(292),M=a(293),A=a(294),D=a(295),Y=a(296),B=a(168),L=a.n(B).a.create({baseURL:new URL("/",window.location.origin).toString()}),W=a(55),U=a.n(W),z=a(142),F=a(98),H=a(127),_=a(178),G=a(283),J=a(134),V=a(84),R=a(285);var Q=function(e){for(var t=e.user,a=e.axios,o=Object(n.useState)(""),c=Object(m.a)(o,2),l=c[0],s=c[1],g=Object(n.useState)(Date()),E=Object(m.a)(g,2),y=E[0],b=E[1],S=Object(n.useState)(e.data),C=Object(m.a)(S,2),O=C[0],j=C[1],v=Object(n.useState)("All"),k=Object(m.a)(v,2),x=k[0],P=k[1],I=function(){var e=Object(u.a)(i.a.mark((function e(){var n,r,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(l),console.log(y),l&&y){e.next=5;break}return p.b.error("Missing Due date or Task"),e.abrupt("return");case 5:return e.next=7,a.post("/api/newTodo",{user:t,todo:l,date:y});case 7:n=e.sent,r=n.data,console.log(r),"Success"===r.message?(o=[].concat(Object(H.a)(O),[r]),c=o.sort((function(e,t){return new Date(e.Day)-new Date(t.Day)})),j(c),p.b.success("New task added")):"Repeated Todo"===r.message&&p.b.error("This task already exists");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(u.a)(i.a.mark((function e(n){var r,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.post("/api/clearAllTodos",{user:t,range:n});case 2:r=e.sent,o=r.data,console.log(o),"clear all success"===o.message?(j([]),p.b.success("Clear all success")):"clear complete success"===o.message?(c=O.filter((function(e){return"Active"==e.State})),j(c),p.b.success("Clear complete success")):p.b.error("Clear tasks failed");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(i.a.mark((function e(n,r){var o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.post("/api/deleteOneTodo",{user:t,task:n,date:r});case 2:o=e.sent,"delete one success"===o.data.message?(j([]),p.b.success("Delete Todo success")):p.b.error("Delete Todo failed"),c=O.filter((function(e){return e.Todo!=n||e.Day!=r})),j(c);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),M=function(){var e=Object(u.a)(i.a.mark((function e(n,r){var o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.post("/api/changeTodoState",{user:t,task:n,date:r});case 2:o=e.sent,"change State success"==o.data.message?(j([]),p.b.success("Update success")):p.b.error("Updated failed"),j(O.map((function(e){return e.Todo===n?"Active"==e.State?Object(F.a)(Object(F.a)({},e),{},{State:"Complete"}):Object(F.a)(Object(F.a)({},e),{},{State:"Active"}):e})));case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),A=[],D=0;D<O.length;D++){var Y=O[D];"All"!==x&&Y.State!=x||A.push({task:Y.Todo,date:Y.Day,state:Y.State,key:D})}var B=[{title:"State",dataIndex:"state",key:"state",width:"8rem",render:function(e,t){return"Active"==e?r.a.createElement(_.a,{icon:r.a.createElement(J.a,null),onClick:function(){M(t.task,t.date)},style:{cursor:"pointer",width:"5.5rem"}},e):r.a.createElement(_.a,{icon:r.a.createElement(V.a,null),color:"success",onClick:function(){M(t.task,t.date)},style:{cursor:"pointer",width:"5.5rem"}},e)}},{title:"Tasks-".concat(x),dataIndex:"task",key:"task",render:function(e,t){return"Active"==t.state?r.a.createElement("span",null,e):r.a.createElement("span",{style:{textDecoration:"line-through",color:"gray"}},e)}},{title:"Due date",dataIndex:"date",key:"date",width:"9rem",render:function(e,t){return r.a.createElement("span",{style:{display:"flex"}},"".concat(String(e).split("T")[0]),r.a.createElement(f.a,{type:"primary",shape:"circle",ghost:!0,danger:!0,size:"small",icon:r.a.createElement(R.a,null),style:{marginLeft:"auto"},onClick:function(){N(t.task,e)}}))}}],L=Object(n.useState)([1,0,0]),W=Object(m.a)(L,2),U=W[0],z=W[1];return r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement(d.a.Group,{compact:!0,style:{width:"98%",margin:"1%"}},r.a.createElement(h.a,{style:{width:"30%"},onChange:function(e){b(e)}}),r.a.createElement(d.a.Search,{value:l,style:{width:"70%"},placeholder:"Type yous task here",onSearch:function(e){I(),s("")},onChange:function(e){s(e.target.value)},enterButton:"Add"})),r.a.createElement(G.b,{style:{width:"98%",marginLeft:"1%",marginBottom:"1%",display:"flex",flexDirection:"row",justifyContent:"space-between"}},r.a.createElement(G.b,null,r.a.createElement(f.a,{type:U[0]?"primary":"default",style:{width:"8rem"},onClick:function(){P("All"),z([1,0,0])}},"All"),r.a.createElement(f.a,{type:U[1]?"primary":"default",style:{width:"8rem"},onClick:function(){P("Active"),z([0,1,0])}},"Active"),r.a.createElement(f.a,{type:U[2]?"primary":"default",style:{width:"8rem"},onClick:function(){P("Complete"),z([0,0,1])}},"Complete")),r.a.createElement(G.b,null,r.a.createElement(f.a,{type:"default",ghost:!0,style:{width:"8rem",color:"green",borderColor:"green"},onClick:function(){T("Complete")}},"Clear Complete"),r.a.createElement(f.a,{type:"primary",ghost:!0,danger:!0,style:{width:"8rem"},onClick:function(){T("All")}},"Clear All"))),r.a.createElement(w.a,{dataSource:A,columns:B,pagination:{pageSize:6},style:{width:"98%",marginLeft:"1%",marginBottom:"1%"}}))};var K=function(e){var t,a=e.user,o=e.axios,c=Object(n.useState)(e.data),s=Object(m.a)(c,2),g=s[0],h=s[1],E=Object(n.useState)("dictionary"),y=Object(m.a)(E,2),S=y[0],C=y[1],j=Object(n.useState)(e.data),v=Object(m.a)(j,2),k=v[0],x=v[1],P=Object(n.useState)(),I=Object(m.a)(P,2),T=I[0],N=I[1],M=Object(n.useState)(""),A=Object(m.a)(M,2),D=A[0],Y=A[1],B=Object(n.useState)(""),L=Object(m.a)(B,2),W=L[0],U=L[1],z=Object(n.useState)(5),F=Object(m.a)(z,2),_=F[0],J=F[1],V=Object(n.useState)(!1),Q=Object(m.a)(V,2),K=Q[0],q=Q[1],X=Object(n.useState)([]),Z=Object(m.a)(X,2),$=Z[0],ee=Z[1],te=Object(n.useState)([]),ae=Object(m.a)(te,2),ne=ae[0],re=ae[1],oe=Object(n.useState)(0),ce=Object(m.a)(oe,2),le=ce[0],se=ce[1],ie=Object(n.useState)(""),ue=Object(m.a)(ie,2),me=ue[0],pe=ue[1],ge=Object(n.useState)(0),de=Object(m.a)(ge,2),fe=de[0],he=de[1],Ee=Object(n.useState)(0),ye=Object(m.a)(Ee,2),be=ye[0],we=ye[1],Se=Object(n.useState)(!1),Ce=Object(m.a)(Se,2),Oe=Ce[0],je=Ce[1],ve=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:q(!0);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ke=function(){if(q(!1),_>g.length)p.b.error("Problems number out of range");else{for(var e=[];e.length<_;){var t=Math.floor(Math.random()*g.length);e.includes(t)||e.push(t)}ee(e),console.log(e),pe(g[e[0]].word);for(var a=[e[0]];a.length<4;){var n=Math.floor(Math.random()*g.length);a.includes(n)||a.push(n)}re(a.sort()),C("test"),se(0)}},xe=r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{style:{fontSize:"2rem",fontWeight:"100",lineHeight:"2rem",marginLeft:"1rem",marginBottom:"1rem"}},"What does ",me," mean ?"),r.a.createElement(b.a.Group,{name:"radiogroup",value:fe,style:{marginLeft:"1rem"},onChange:function(e){he(e.target.value)}},r.a.createElement(G.b,{direction:"vertical"},ne.map((function(e,t){return r.a.createElement(b.a,{value:e},g[e].answer)})),r.a.createElement(f.a,{onClick:function(){if(le<_-1){fe==$[le]?(p.b.success("Correct!"),we(be+1)):p.b.error("Sorry, the answer is ".concat(g[$[le]].answer)),se(le+1),pe(g[$[le+1]].word);for(var e=[$[le+1]];e.length<4;){var t=Math.floor(Math.random()*g.length);e.includes(t)||e.push(t)}re(e.sort())}else le==_-1&&(fe==$[le]?(p.b.success("Correct!"),we(be+1)):p.b.error("Sorry, the answer is ".concat(g[$[le]].answer)),je(!0));he(-1)},type:"primary"},"Submit")))),Pe=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.post("/api/newWord",{user:a,word:D,answer:W});case 2:t=e.sent,n=t.data,console.log(n.message),"adding success"==n.message?(p.b.success("adding success"),r=[{word:D,answer:W,key:D}].concat(Object(H.a)(g)),h(r),x(r)):(p.b.error(n.message),x(g)),Y(""),U("");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ie=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,o.post("/api/deleteWord",{user:a,word:t});case 3:n=e.sent,r=n.data,console.log(r.message),"delete success"==r.message?(c=g.filter((function(e){return e.word!=t})),h(c),x(c),p.b.success(r.message)):p.b.error(r.message);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Te=[{title:"Words",dataIndex:"word",key:"word",width:"50%"},{title:"Translation",dataIndex:"answer",key:"answer",width:"50%",render:function(e,t){return r.a.createElement("span",{style:{display:"flex"}},e,r.a.createElement(f.a,{type:"primary",shape:"circle",ghost:!0,danger:!0,size:"small",icon:r.a.createElement(R.a,null),style:{marginLeft:"auto"},onClick:function(){Ie(t.word)}}))}}],Ne=r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a.Search,(t={value:T,style:{width:"100%"},placeholder:"Search a word",onSearch:function(){var e=g.filter((function(e){return e.word.includes(T)||e.answer.includes(T)}));x(e),N("")},onChange:function(e){N(e.target.value)}},Object(l.a)(t,"style",{width:"98%",marginLeft:"1%",marginBottom:"0.2rem"}),Object(l.a)(t,"enterButton",!0),t)),r.a.createElement(d.a.Group,{compact:!0,style:{width:"98%",marginLeft:"1%",marginBottom:"0.2rem"}},r.a.createElement(d.a,{value:D,style:{width:"50%"},onChange:function(e){Y(e.target.value)},placeholder:"Add a new word"}),r.a.createElement(d.a.Search,{value:W,style:{width:"50%"},onChange:function(e){U(e.target.value)},onSearch:Pe,enterButton:"Add",placeholder:"What does it mean?"})),r.a.createElement(w.a,{dataSource:k,columns:Te,pagination:{pageSize:6},style:{width:"98%",marginLeft:"1%",marginBottom:"1rem"}}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.b,{style:{width:"98%",margin:"1%"}},r.a.createElement(f.a,{style:{width:"8rem"},onClick:function(){C("dictionary")}},"Dictionary"),r.a.createElement(f.a,{style:{width:"8rem"},onClick:ve},"Quiz"),"dictionary"==S?r.a.createElement(f.a,{type:"primary",onClick:function(){x(g)}},"Show all words"):r.a.createElement(r.a.Fragment,null)),r.a.createElement(O.a,{title:"How many problems do you want",visible:K,onOk:ke,onCancel:function(){q(!1)}},r.a.createElement(d.a,{value:_,onChange:function(e){J(e.target.value)}})),r.a.createElement(O.a,{title:"Quiz finished",visible:Oe,onOk:function(){we(0),je(!1),ke()},onCancel:function(){we(0),je(!1),C("dictionary")},okText:"again!",cancelText:"back to dictionary"},r.a.createElement("h1",null,"Congratulations! Your score is ".concat(be,"/").concat(_))),"dictionary"==S?Ne:xe)};var q=function(){var e=Object(n.useState)("Welcome"),t=Object(m.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(""),s=Object(m.a)(c,2),B=s[0],W=s[1],F=Object(n.useState)(""),H=Object(m.a)(F,2),_=H[0],G=H[1],J=Object(n.useState)(""),V=Object(m.a)(J,2),R=V[0],q=V[1],X=Object(n.useState)(""),Z=Object(m.a)(X,2),$=Z[0],ee=Z[1],te=Object(n.useState)(""),ae=Object(m.a)(te,2),ne=ae[0],re=ae[1],oe=Object(n.useState)(""),ce=Object(m.a)(oe,2),le=ce[0],se=ce[1],ie=Object(n.useState)(["","",""]),ue=Object(m.a)(ie,2),me=ue[0],pe=ue[1],ge=Object(n.useState)(""),de=Object(m.a)(ge,2),fe=de[0],he=de[1],Ee=Object(n.useState)(!1),ye=Object(m.a)(Ee,2),be=ye[0],we=ye[1],Se=Object(n.useState)(""),Ce=Object(m.a)(Se,2),Oe=Ce[0],je=Ce[1],ve=Object(n.useState)(""),ke=Object(m.a)(ve,2),xe=ke[0],Pe=ke[1],Ie=Object(n.useState)(""),Te=Object(m.a)(Ie,2),Ne=Te[0],Me=Te[1],Ae=Object(n.useState)(""),De=Object(m.a)(Ae,2),Ye=De[0],Be=De[1],Le=Object(n.useState)(["","",""]),We=Object(m.a)(Le,2),Ue=We[0],ze=We[1],Fe=Object(n.useState)(""),He=Object(m.a)(Fe,2),_e=He[0],Ge=He[1],Je=Object(n.useState)(""),Ve=Object(m.a)(Je,2),Re=Ve[0],Qe=Ve[1],Ke=Object(n.useState)(""),qe=Object(m.a)(Ke,2),Xe=qe[0],Ze=qe[1],$e=Object(n.useState)("Welcome to MM_2021alpha"),et=Object(m.a)($e,2),tt=et[0],at=et[1],nt=Object(n.useState)("Please login or signup first"),rt=Object(m.a)(nt,2),ot=(rt[0],rt[1]),ct=Object(n.useState)("success"),lt=Object(m.a)(ct,2),st=(lt[0],lt[1]),it=Object(n.useState)("      "),ut=Object(m.a)(it,2),mt=ut[0],pt=ut[1],gt=Object(n.useState)(!1),dt=Object(m.a)(gt,2),ft=dt[0],ht=dt[1],Et=Object(n.useState)(""),yt=Object(m.a)(Et,2),bt=yt[0],wt=yt[1],St=Object(n.useState)(!0),Ct=Object(m.a)(St,2),Ot=Ct[0],jt=Ct[1],vt=Object(n.useState)(0),kt=Object(m.a)(vt,2),xt=kt[0],Pt=kt[1],It=Object(n.useState)(""),Tt=Object(m.a)(It,2),Nt=Tt[0],Mt=Tt[1],At=Object(n.useState)(["","",""]),Dt=Object(m.a)(At,2),Yt=Dt[0],Bt=Dt[1],Lt=Object(n.useState)(""),Wt=Object(m.a)(Lt,2),Ut=Wt[0],zt=Wt[1],Ft=Object(n.useState)(""),Ht=Object(m.a)(Ft,2),_t=Ht[0],Gt=Ht[1],Jt=Object(n.useState)(["","",""]),Vt=Object(m.a)(Jt,2),Rt=Vt[0],Qt=Vt[1],Kt=Object(n.useState)(""),qt=Object(m.a)(Kt,2),Xt=qt[0],Zt=qt[1],$t=Object(n.useState)([]),ea=Object(m.a)($t,2),ta=ea[0],aa=ea[1],na=Object(n.useState)([]),ra=Object(m.a)(na,2),oa=ra[0],ca=ra[1],la=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.post("/api/allTodo",{user:t});case 2:a=e.sent,n=a.data,console.log("Todos: ",n.Todos),ca(n.Todos);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),sa=Object(n.useState)([]),ia=Object(m.a)(sa,2),ua=ia[0],ma=ia[1],pa=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.post("/api/allWord",{user:t});case 2:a=e.sent,n=a.data,console.log("Words: ",n.words),ma(n.words);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ga=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n,r,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("FrontendNowCreateNewUser"),e.next=3,L.post("/api/CreateNewUser",{SignupUserID:R,SignupUserPassword:$,SignupNickname:ne,SignupSchool:le,SignupBirthday:me,SignupAboutMe:fe});case 3:if(t=e.sent,a=t.data,n=a.Message,r=a.SignupSuccess,console.log(n),"true"!==r){e.next=20;break}return at("Signup success!! \n Now you can login and start!!"),Ha(!0),ot("Now you can login and start!!"),st("success"),e.next=15,L.post("/api/initWord",{user:R});case 15:o=e.sent,c=o.data,console.log(c.message),e.next=24;break;case 20:at(n),Ha(!0),ot(n),st("error");case 24:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),da=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n,r,c,l,s,u,m,g;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("FrontendNowUserLogin"),e.next=3,L.post("/api/UserLogin",{LoginUserID:B,LoginUserPassword:_});case 3:t=e.sent,a=t.data,n=a.Message,r=a.LoginSuccess,c=a.UserID,l=a.UserPassword,s=a.Nickname,u=a.School,m=a.Birthday,g=a.AboutMe,console.log(n),"true"===r?(we(!0),o("PersonalInfo"),je(c),Pe(l),Me(s),Be(u),ze([m.split(",")[0],m.split(",")[1],m.split(",")[2]]),Ge(g),at("Login success!!"),ot(n),st("success"),la(c),pa(c),p.b.success("Login success!")):(at("Login failed!!"),ot(n),st("error"),p.b.error("Login fail!"));case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fa=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("FrontendNowChangePersonalInfo"),e.next=3,L.post("/api/ChangePersonalInfo",{NowUserID:Oe,NewNickname:Ut,NewSchool:_t,NewBirthday:Rt,NewAboutMe:Xt});case 3:t=e.sent,a=t.data,n=a.Message,r=a.ChangePersonalInfoSuccess,console.log(n),"true"===r?(Me(Ut),Be(_t),ze(Rt),Ge(Xt),at("Change PersonalInfo success !!"),ot(n),st("success")):(at("Change PersonalInfo failed !!"),ot("Some error happens !!"),st("error"));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ha=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("FrontendNowChangePassword"),e.next=3,L.post("/api/ChangePassword",{NowUserID:Oe,OldUserPassword:Re,NewUserPassword:Xe});case 3:t=e.sent,a=t.data,n=a.Message,r=a.ChangePasswordSuccess,console.log(n),"true"===r?(Pe(Xe),at("Change Password success !!"),ot(n),st("success")):(at("Change Password failed !!"),ot("Some error happens !!"),st("error"));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ea=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("FrontendNowCreateNewCost"),e.next=3,L.post("/api/CreateNewCost",{NowUserID:Oe,NewCostTitle:bt,NewCostIsOutcome:Ot,NewCostMoney:xt,NewCostTag:Nt,NewCostDay:Yt});case 3:t=e.sent,a=t.data,n=a.Message,r=a.CreateNewCostSuccess,console.log(n),"true"===r?(at("New Cost has been created"),ot(n),st("success")):(at("New Cost creating failed"),ot("Some error happens !!"),st("error"));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ya=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("FrontendNowCheckMyCost"),e.next=3,L.post("/api/CheckMyCost",{NowUserID:Oe});case 3:t=e.sent,a=t.data,n=a.Message,r=a.CheckMyCostSuccess,o=a.AllMyCost,console.log(n),"true"===r?(aa(o.map((function(e){return[e.Title,e.IsOutcome,e.Money,e.Tag,e.Day,e._id]}))),at("You can check your cost here"),ot(n),st("success")):(at("Can't get data from DB "),ot("Some error happens !!"),st("error"));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ba=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("FrontendNowDeleteMyCost"),e.next=3,L.post("/api/DeleteMyCost",{NowUserID:Oe});case 3:t=e.sent,a=t.data.Message,console.log(a),at("Delete my cost success"),ot(a),st("info");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),wa=function(e){return"Jan"===e?"01":"Feb"===e?"02":"Mar"===e?"03":"Apr"===e?"04":"May"===e?"05":"Jun"===e?"06":"Jul"===e?"07":"Aug"===e?"08":"Sep"===e?"09":"Oct"===e?"10":"Nov"===e?"11":"Dec"===e?"12":""},Sa=function(){ft?(ht(!1),pt("      ")):(ht(!0),pt(" "))},Ca=function(e){return Object(z.sum)(e.map((function(e){return e[1]?e[2]:0})))},Oa=function(e){return Object(z.sum)(e.map((function(e){return e[1]?0:e[2]})))},ja=r.a.createElement(g.a.Content,null,r.a.createElement("div",null,r.a.createElement("p",null,"To Login , Please Enter Your ID"),r.a.createElement(d.a,{onChange:function(e){W(e.target.value)},placeholder:"Enter your UserID",prefix:r.a.createElement(j.a,null)})),r.a.createElement("div",null,r.a.createElement("p",null,"Please Enter Your Password"),r.a.createElement(d.a,{onChange:function(e){G(e.target.value)},placeholder:"Enter your Password",prefix:r.a.createElement(j.a,null)})),r.a.createElement("div",null,r.a.createElement(f.a,{onClick:da,disabled:!B||!_,type:"primary"},"Login")),r.a.createElement("div",null,r.a.createElement("p",null,"First Time To \u30a8\u30e0\u30a8\u30e0 ? Please Signup First"),r.a.createElement(f.a,{onClick:function(){o("Signup"),q(""),ee(""),re(""),se(""),pe(["","",""]),he(""),at("Welcome to sign up \u30a8\u30e0\u30a8\u30e0"),ot("Please enter your info."),st("success")},type:"primary"},"Signup"))),va=r.a.createElement(g.a.Content,null,r.a.createElement("h1",{style:{fontSize:"2rem",fontWeight:"100",textAlign:"center",lineHeight:"3rem",marginBottom:"0",marginTop:"0.5rem"}},"Welcome back ",Oe," Please choose the service ")),ka=r.a.createElement(g.a.Content,null,r.a.createElement("p",null,"Welcome Using our App"),r.a.createElement("p",null,"This is Signup Page"),r.a.createElement("div",null,r.a.createElement("p",null,"Please Enter Your ID *"),r.a.createElement(d.a,{onChange:function(e){q(e.target.value)},placeholder:"Enter your UserId",prefix:r.a.createElement(j.a,null)})),r.a.createElement("div",null,r.a.createElement("p",null,"Please Enter Your Password *"),r.a.createElement(d.a,{onChange:function(e){ee(e.target.value)},placeholder:"Enter your UserPassword",prefix:r.a.createElement(j.a,null)})),r.a.createElement("div",null,r.a.createElement("p",null,"Please Enter Your Nickname *"),r.a.createElement(d.a,{onChange:function(e){re(e.target.value)},placeholder:"Enter your Nickname",prefix:r.a.createElement(j.a,null)})),r.a.createElement("div",null,r.a.createElement("p",null,"Please Enter Your School"),r.a.createElement(d.a,{onChange:function(e){se(e.target.value)},placeholder:"Enter your School (optional)",prefix:r.a.createElement(j.a,null)})),r.a.createElement("div",null,r.a.createElement("p",null,"Please Enter Your Birthday"),r.a.createElement(h.a,{onChange:function(e){pe(e?[String(e).split(" ")[3],wa(String(e).split(" ")[1]),String(e).split(" ")[2]]:["","",""])},placeholder:"Enter your Birthday (optional)",style:{width:"500px"}})),r.a.createElement("div",null,r.a.createElement("p",null,"We want to know you more,please enter something"),r.a.createElement(d.a.TextArea,{onChange:function(e){he(e.target.value)},placeholder:"About me ... (optional)",rows:3})),r.a.createElement("div",null,r.a.createElement(f.a,{type:"primary",onClick:ga,disabled:!R||!$||!ne},"Submit")),r.a.createElement("div",null,r.a.createElement(f.a,{type:"danger",onClick:function(){o("Welcome"),W(""),G(""),at("Welcome to MM_2021alpha"),ot("You can login if you already have a account."),st("success")}},"Go back"))),xa=r.a.createElement(g.a.Content,null,r.a.createElement("p",{style:{fontSize:"3rem",fontWeight:"100",textAlign:"center",lineHeight:"3rem",marginBottom:"1rem",marginTop:"0.5rem"}},"About You"),r.a.createElement(E.b,{bordered:!0,column:1,style:Object(l.a)({width:"98%",marginLeft:"1%"},"marginLeft","1%")},r.a.createElement(E.b.Item,{label:"UserId"},Oe),r.a.createElement(E.b.Item,{label:"Password"},xe),r.a.createElement(E.b.Item,{label:"Nickname"},Ne),r.a.createElement(E.b.Item,{label:"School"},""===Ye?"Not Set":Ye),r.a.createElement(E.b.Item,{label:"Birthday"},""===Ue[0]?"Not Set":"".concat(Ue[0],"-").concat(Ue[1],"-").concat(Ue[2])),r.a.createElement(E.b.Item,{label:"About me"},""===_e?"Not Set":_e))),Pa=r.a.createElement(g.a.Content,null,r.a.createElement("p",{style:{fontSize:"3rem",fontWeight:"100",textAlign:"center",lineHeight:"3rem",marginBottom:"0",marginTop:"0.5rem"}},"Memo"),r.a.createElement(Q,{user:Oe,axios:L,data:oa})),Ia=r.a.createElement(g.a.Content,null,r.a.createElement("p",{style:{fontSize:"3rem",fontWeight:"100",textAlign:"center",lineHeight:"3rem",marginBottom:"0",marginTop:"0.5rem"}},"Spending"),r.a.createElement("div",null,r.a.createElement(f.a,{style:{marginBottom:"5px",marginTop:"5px",marginLeft:"10px"},onClick:function(){o("NewCost"),wt(""),Pt(""),Mt(""),Bt([String(Date()).split(" ")[3],wa(String(Date()).split(" ")[1]),String(Date()).split(" ")[2]]),jt(!0),at("You can record your income or outcome here"),ot("Please enter some detail about the cost."),st("success")},type:"danger"},"Create New Cost")),r.a.createElement("div",null,r.a.createElement(f.a,{style:{marginBottom:"5px",marginTop:"5px",marginLeft:"10px"},onClick:function(){o("CheckMyCost"),ya(Oe)},type:"primary"},"Check My Cost")),r.a.createElement("div",null,r.a.createElement(f.a,{style:{marginBottom:"5px",marginTop:"5px",marginLeft:"10px"},onClick:ba,type:"danger"},"Delete My Cost"))),Ta=r.a.createElement(g.a.Content,null,r.a.createElement("p",null,"This is NewCost Page"),r.a.createElement("p",null,"Please Enter Your Cost Title*"),r.a.createElement(d.a,{onChange:function(e){wt(e.target.value)},placeholder:"Enter your Cost Title",prefix:r.a.createElement(v.a,null)}),r.a.createElement("p",null,"Please Enter Your Cost Money*"),r.a.createElement(y.a,{addonBefore:r.a.createElement(b.a.Group,{onChange:function(e){jt(e.target.value)},value:Ot},r.a.createElement(b.a,{value:!0},"OutCome"),r.a.createElement(b.a,{value:!1},"Income")),onChange:function(e){Pt(e||0)},placeholder:"Enter your Cost Money",style:{width:"500px"}}),r.a.createElement("p",null,"Please Enter Your Cost Tag"),r.a.createElement(d.a,{onChange:function(e){Mt(e.target.value)},placeholder:"Enter your Tag",prefix:r.a.createElement(k.a,null)}),r.a.createElement("p",null,"Please Enter Your Cost Day"),r.a.createElement(h.a,{onChange:function(e){Bt(e?[String(e).split(" ")[3],wa(String(e).split(" ")[1]),String(e).split(" ")[2]]:[String(Date()).split(" ")[3],wa(String(Date()).split(" ")[1]),String(Date()).split(" ")[2]])},placeholder:"Enter your Cost Day, left blank is today",style:{width:"500px"}}),r.a.createElement("div",null,r.a.createElement(f.a,{onClick:Ea,type:"danger",disabled:!bt||!xt},"Submit"))),Na=r.a.createElement(g.a.Content,null,r.a.createElement("p",{style:{fontSize:"3rem",fontWeight:"100",textAlign:"center",lineHeight:"3rem",marginBottom:"0",marginTop:"0.5rem"}},"Accouting"),r.a.createElement(w.a,{columns:[{title:"Title",dataIndex:"title"},{title:"Type",dataIndex:"isoutcome",filters:[{text:"Outcome",value:"Outcome"},{text:"Income",value:"Income"}],onFilter:function(e,t){return t.isoutcome.includes(e)}},{title:"Money",dataIndex:"money"},{title:"Tag",dataIndex:"tag"},{title:"Day",dataIndex:"day",sorter:function(e,t){return"".concat(e.day.split("-")[0]).concat(e.day.split("-")[1]).concat(e.day.split("-")[2])-"".concat(t.day.split("-")[0]).concat(t.day.split("-")[1]).concat(t.day.split("-")[2])}}],dataSource:ta.map((function(e){return{title:e[0],isoutcome:!0===e[1]?"Outcome":"Income",money:e[2],tag:e[3],day:"".concat(e[4][0],"-").concat(e[4][1],"-").concat(e[4][2]),key:e}}))}),r.a.createElement(S.a,{message:"Your total outcome is : ".concat(Ca(ta)),type:"info",showIcon:!0}),r.a.createElement(S.a,{message:"Your total income is : ".concat(Oa(ta)),type:"info",showIcon:!0}),r.a.createElement(S.a,{message:"Your net debt is : ".concat(Ca(ta)-Oa(ta)),type:"info",showIcon:!0})),Ma=r.a.createElement(g.a.Content,null,r.a.createElement("p",null,"This is Chatroom Page")),Aa=r.a.createElement(g.a.Content,null,r.a.createElement("p",{style:{fontSize:"3rem",fontWeight:"100",textAlign:"center",lineHeight:"3rem",marginBottom:"0",marginTop:"0.5rem"}},"Learning"),r.a.createElement(K,{user:Oe,axios:L,data:ua})),Da=r.a.createElement(g.a.Content,null,r.a.createElement("p",{style:{fontSize:"3rem",fontWeight:"100",textAlign:"center",lineHeight:"3rem",marginBottom:"1rem",marginTop:"0.5rem"}},"Changing Personal Info"),r.a.createElement("div",null,r.a.createElement(f.a,{onClick:function(){o("ChangePersonalInfo"),zt(Ne),Gt(Ye),Qt(Ue),Zt(_e),at("You can change your PersonalInfo here"),ot("* implies needed"),st("success")},type:"danger",icon:r.a.createElement(x.a,null)},"ChangePersonalInfo"))),Ya=r.a.createElement(g.a.Content,null,r.a.createElement("p",{style:{fontSize:"3rem",fontWeight:"100",textAlign:"center",lineHeight:"3rem",marginBottom:"1rem",marginTop:"0.5rem"}},"Changing Personal Info"),r.a.createElement("div",null,r.a.createElement("p",null,"You can change your Nickname here*"),r.a.createElement(d.a,{onChange:function(e){zt(e.target.value)},placeholder:"Enter your NewNickname",defaultValue:Ne,prefix:r.a.createElement(P.a,null)}),r.a.createElement("p",null,"You can change your School here"),r.a.createElement(d.a,{onChange:function(e){Gt(e.target.value)},placeholder:"Enter your NewSchool (optional) ",defaultValue:Ye,prefix:r.a.createElement(P.a,null)}),r.a.createElement("p",null,"You can change your Birthday here"),r.a.createElement(h.a,{onChange:function(e){Qt(e?[String(e).split(" ")[3],wa(String(e).split(" ")[1]),String(e).split(" ")[2]]:["","",""])},placeholder:"Enter your Birthday (optional)",defaultValue:Ue[0]?U()("".concat(Ue[0],"-").concat(Ue[1],"-").concat(Ue[2]),"YYYY-MM-DD"):null,style:{width:"500px"}}),r.a.createElement("p",null,"You can change your own Signature!"),r.a.createElement(d.a.TextArea,{onChange:function(e){Zt(e.target.value)},placeholder:"Enter your NewAboutMe (optional) ",defaultValue:_e,rows:3}),r.a.createElement(f.a,{onClick:fa,disabled:!Ut,type:"primary"},"Submit"))),Ba=r.a.createElement(g.a.Content,null,r.a.createElement("p",{style:{fontSize:"3rem",fontWeight:"100",textAlign:"center",lineHeight:"3rem",marginBottom:"1rem",marginTop:"0.5rem"}},"Change Password"),r.a.createElement("div",null,r.a.createElement(f.a,{onClick:function(){o("ChangePassword"),Qe(""),Ze(""),at("You can change your password here"),ot("Please enter your old and new PW"),st("success")},type:"danger",icon:r.a.createElement(x.a,null)},"Change Password"))),La=r.a.createElement(g.a.Content,null,r.a.createElement("p",{style:{fontSize:"3rem",fontWeight:"100",textAlign:"center",lineHeight:"3rem",marginBottom:"1rem",marginTop:"0.5rem"}},"Change Password"),r.a.createElement("div",null,r.a.createElement("p",null,"Change your password here"),r.a.createElement("p",null,"Please your Old password "),r.a.createElement(d.a,{onChange:function(e){Qe(e.target.value)},placeholder:"Enter your OldPassword",prefix:r.a.createElement(j.a,null)}),r.a.createElement("p",null,"Please your New password "),r.a.createElement(d.a,{onChange:function(e){Ze(e.target.value)},placeholder:"Enter your NewPassword",prefix:r.a.createElement(P.a,null)}),r.a.createElement(f.a,{onClick:ha,disabled:!Re||!Xe,type:"primary"},"Submit"))),Wa=r.a.createElement(g.a.Content,null,r.a.createElement("p",null,"Are you sure to sign out ?"),r.a.createElement("div",null,r.a.createElement(f.a,{type:"danger",onClick:function(){o("Welcome"),W(""),G(""),we(!1),je(""),Pe(""),Me(""),Be(""),ze(["","",""]),Ge(""),at("Welcome to MM_2021alpha"),ot("You are signup"),st("success")},icon:r.a.createElement(I.a,null)},"Yes"),r.a.createElement(f.a,{type:"primary",onClick:function(){at("Thanks for Staying"),ot(""),st("success")},icon:r.a.createElement(I.a,null)},"No"))),Ua=Object(n.useState)(!1),za=Object(m.a)(Ua,2),Fa=za[0],Ha=za[1],_a=Object(n.useState)(!1),Ga=Object(m.a)(_a,2),Ja=Ga[0],Va=Ga[1];return r.a.createElement(g.a,null,!1===be?r.a.createElement(g.a.Sider,{collapsible:!0,onCollapse:Sa,style:{background:"#98BAE7",height:"auto"}},r.a.createElement("p",null,"MM_2021_Alpha")):r.a.createElement(g.a.Sider,{collapsible:!0,onCollapse:Sa},r.a.createElement("p",{style:ft?{fontSize:"50px",lineHeight:"10px",marginTop:"2rem",textAlign:"center"}:{fontSize:"30px",lineHeight:"0px",marginTop:"2rem",textAlign:"center"}},mt),r.a.createElement(C.a,{theme:"dark",defaultSelectedKeys:["PersonalInfo"],mode:"inline"},r.a.createElement(C.a.Item,{onClick:function(){o("PersonalInfo"),at("This is PersonalInfo Page"),ot("You can modify them in account setting"),st("success")},key:"PersonalInfo",icon:r.a.createElement(j.a,null)},"Personal Info"),r.a.createElement(C.a.Item,{onClick:function(){o("Memo"),at("This is Memo Page"),ot(""),st("success")},key:"Memo",icon:r.a.createElement(T.a,null)},"Memo"),r.a.createElement(C.a.Item,{onClick:function(){o("Spending"),at("This is Spending Page"),ot("You can manage your cost here."),st("success")},key:"Spending",icon:r.a.createElement(N.a,null)},"Spending"),r.a.createElement(C.a.Item,{onClick:function(){o("Learning"),at("This is Learning Page"),ot(""),st("success")},key:"Learning",icon:r.a.createElement(M.a,null)},"Learning"),r.a.createElement(C.a.SubMenu,{title:"Setting",key:"Setting",icon:r.a.createElement(A.a,null)},r.a.createElement(C.a.Item,{onClick:function(){o("ChangePersonalInfo"),zt(Ne),Gt(Ye),Qt(Ue),Zt(_e),at("You can change your PersonalInfo here"),ot("* implies needed"),st("success")},key:"NormalSetting",icon:r.a.createElement(D.a,null)},"NormalSetting"),r.a.createElement(C.a.Item,{onClick:function(){o("ChangePassword"),Qe(""),Ze(""),at("You can change your password here"),ot("Please enter your old and new PW"),st("success")},key:"AccountSetting",icon:r.a.createElement(Y.a,null)},"AccountSetting")),r.a.createElement(C.a.Item,{onClick:function(){Va(!0)},key:"Signout",icon:r.a.createElement(I.a,null)},"Signout"))),r.a.createElement(g.a,{style:{height:"100vh",background:"#CCDDEE"}},"Welcome"===a?ja:"Login"===a?va:"Signup"===a?ka:"PersonalInfo"===a?xa:"Memo"===a?Pa:"Spending"===a?Ia:"NewCost"===a?Ta:"CheckMyCost"===a?Na:"Chatroom"===a?Ma:"Learning"===a?Aa:"NormalSetting"===a?Da:"ChangePersonalInfo"===a?Ya:"AccountSetting"===a?Ba:"ChangePassword"===a?La:"Signout"===a?Wa:void 0),r.a.createElement(O.a,{title:"System message",visible:Fa,closable:!1,footer:[r.a.createElement(f.a,{key:"Got it",onClick:function(){Ha(!1),o("Welcome")}},"Back to login page")]},r.a.createElement("h1",null,tt)),r.a.createElement(O.a,{title:"System message",visible:Ja,closable:!1,onOk:function(){Va(!1),o("Welcome"),W(""),G(""),we(!1),je(""),Pe(""),Me(""),Be(""),ze(["","",""]),Ge(""),at("Welcome to MM_2021alpha"),ot("You are signup"),st("success")},onCancel:function(){Va(!1)},okText:"Yes",cancelText:"No"},r.a.createElement("h1",null,"Sure to signout?")))},X=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,297)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)}))};c.a.render(r.a.createElement(q,null),document.getElementById("root")),X()}},[[181,1,2]]]);
//# sourceMappingURL=main.382ffa92.chunk.js.map