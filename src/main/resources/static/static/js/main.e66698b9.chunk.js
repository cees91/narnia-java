(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{160:function(e,t,a){e.exports=a(326)},165:function(e,t,a){},167:function(e,t,a){},326:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(8),i=a.n(s),c=(a(165),a(21)),o=a.n(c),l=a(40),m=a(143),u=a(38),p=a(152),g=a(144),f=a(153),d=(a(167),a(378)),h=a(369),v=a(41),E=a.n(v),b=a(59),N=a(145),y=a(68),w=a(380),k=a(366),x=(a(185),Object(k.a)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},dense:{marginTop:19},menu:{width:200}}})),j=function(e){var t=x(),a=Object(r.useState)({firstName:"",lastName:"",age:0,city:"",id:e.person.id}),s=Object(y.a)(a,2),i=s[0],c=s[1],o=function(e){return function(t){c(Object(N.a)({},i,Object(b.a)({},e,t.target.value)))}};return n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{className:t.container,noValidate:!0,autoComplete:"off"},n.a.createElement(w.a,{id:"standard-name",label:"First name",className:t.textField,value:i.firstName,onChange:o("firstName"),margin:"normal",required:!0}),n.a.createElement(w.a,{id:"last-name",label:"Last name",className:t.textField,value:i.lastName,onChange:o("lastName"),margin:"normal",required:!0}),n.a.createElement(w.a,{id:"age",label:"Age",className:t.textField,value:i.age,onChange:o("age"),margin:"normal",required:!0}),n.a.createElement(w.a,{id:"age",label:"City",className:t.textField,value:i.city,onChange:o("city"),margin:"normal",required:!0})),n.a.createElement(h.a,{variant:"contained",color:"primary",type:"submit",onClick:function(){!function(e){var t=e.firstName,a=e.lastName,r=e.age,n=e.city;return""!==t&&""!==a&&r>0&&""!==n}(i)?e.error("Please fill out all fields"):e.register(i)}},"Submit registration"))},C=a(147),O=a(3),S=a(148),U=a.n(S),F=a(150),R=a.n(F),P=a(151),A=a.n(P),D=a(67),q=a.n(D),B=a(370),I=a(371),L=a(373),T=a(372),W=a(149),M=a.n(W),V={success:U.a,warning:M.a,error:R.a,info:A.a},G=Object(k.a)(function(e){return{success:{backgroundColor:B.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main},warning:{backgroundColor:I.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}});var J=function(e){var t=G(),a=e.className,r=e.message,s=e.onClose,i=e.variant,c=Object(C.a)(e,["className","message","onClose","variant"]),o=V[i];return n.a.createElement(T.a,Object.assign({className:Object(O.a)(t[i],a),"aria-describedby":"client-snackbar",message:n.a.createElement("span",{id:"client-snackbar",className:t.message},n.a.createElement(o,{className:Object(O.a)(t.icon,t.iconVariant)}),r),action:[n.a.createElement(L.a,{key:"close","aria-label":"close",color:"inherit",onClick:s},n.a.createElement(q.a,{className:t.icon}))]},c))},z=a(368),X=a(374),$=a(154),H=a(327);function K(e){var t=e.people;return n.a.createElement(z.a,{component:"nav","aria-label":"main mailbox folders"},t?t.map(function(t){return n.a.createElement(X.a,{key:t.id},n.a.createElement($.a,{style:{width:"300px"}},n.a.createElement(H.a,{variant:"h5",component:"h3"},"Name: ",t.firstName," ",t.lastName),n.a.createElement(H.a,{component:"p"},"Age: ",t.age," from ",t.city),n.a.createElement("div",{style:{textAlign:"center"}},e.selectUser?n.a.createElement(h.a,{variant:"contained",color:"primary",onClick:function(){return e.selectUser(t)}},"Select ",t.firstName):null,e.removeUser?n.a.createElement(h.a,{variant:"contained",color:"secondary",onClick:function(){return e.removeUser(t)}},"Leave Narnia :("):null)))}):null)}var Q=a(379),Y=a(382),Z=a(376),_=a(377),ee=a(375),te=Object(k.a)(function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}}),ae=n.a.forwardRef(function(e,t){return n.a.createElement(ee.a,Object.assign({direction:"up",ref:t},e))});function re(e){var t=te(),a=n.a.useState(!1),r=Object(y.a)(a,2),s=r[0],i=r[1];function c(){i(!1)}return n.a.createElement("div",null,e.person.firstName?n.a.createElement(h.a,{variant:"outlined",color:"primary",onClick:function(){i(!0)}},"Enter narnia with ",e.person.firstName):n.a.createElement("div",null,"Please select a tourist"),n.a.createElement(Y.a,{fullScreen:!0,open:s,onClose:c,TransitionComponent:ae},n.a.createElement(Z.a,{className:t.appBar},n.a.createElement(_.a,null,n.a.createElement(L.a,{edge:"start",color:"inherit",onClick:c,"aria-label":"close"},n.a.createElement(q.a,null)))),n.a.createElement(H.a,{variant:"h3",className:t.title},"Welcome to the door of Narnia ",e.person.firstName),n.a.createElement("div",null,n.a.createElement("img",{src:"narnia.jpg",style:{width:"100%"}})),n.a.createElement(H.a,{variant:"h6",className:t.title},"If you want to try and enter, please click the enter button, else click the X to go back"),n.a.createElement(h.a,{variant:"contained",color:"secondary",onClick:function(){e.enterNarnia(e.person),c()}},"I wish to enter Narnia!!")))}var ne=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(p.a)(this,Object(g.a)(t).call(this))).fetchData=function(){e.fetchRegistrations(),e.fetchTourists()},e.fetchRegistrations=Object(l.a)(o.a.mark(function t(){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.get("/api/tourists/registered");case 3:a=t.sent,e.setState({registered:a.data}),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}},t,null,[[0,7]])})),e.fetchTourists=Object(l.a)(o.a.mark(function t(){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.get("/api/tourists/inside");case 3:a=t.sent,console.log(a),e.setState({tourists:a.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e.setState({message:t.t0.response.data.message,error:!0});case 11:case"end":return t.stop()}},t,null,[[0,8]])})),e.enterNarnia=function(){var t=Object(l.a)(o.a.mark(function t(a){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.post("/api/tourists/add",a);case 3:e.fetchData(),t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.response.data),e.setState({message:t.t0.response.data.message,error:!0});case 10:case"end":return t.stop()}},t,null,[[0,6]])}));return function(e){return t.apply(this,arguments)}}(),e.registerPerson=function(){var t=Object(l.a)(o.a.mark(function t(a){var r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.post("/api/tourists/register",a);case 3:e.fetchRegistrations(),r={firstName:"",lastName:"",id:null,age:0},e.setState({registration:!1,person:r}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0),e.setState({message:t.t0.response.data.message,error:!0});case 12:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e){return t.apply(this,arguments)}}(),e.selectUser=function(t){e.setState({person:t})},e.errorSwitch=function(t){e.setState({error:!0,message:t})},e.closeMessage=function(){e.setState({error:!1,message:""})},e.removeUser=function(){var t=Object(l.a)(o.a.mark(function t(a){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.delete("/api/tourists/".concat(a.id));case 3:e.fetchData(),t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.response.data),e.setState({message:t.t0.response.data.message,error:!0});case 10:case"end":return t.stop()}},t,null,[[0,6]])}));return function(e){return t.apply(this,arguments)}}(),e.state={person:{firstName:"",lastName:"",id:null,age:0,error:!1,message:"",tourists:[],registered:[]}},e}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this;return n.a.createElement(d.a,null,n.a.createElement(Q.a,{container:!0,spacing:3,direction:"row",justify:"center"},n.a.createElement(Q.a,{item:!0,xs:12,style:{textAlign:"center"}},n.a.createElement("img",{src:"download.jpg"}),this.state.error?n.a.createElement(J,{variant:"error",message:this.state.message,onClose:this.closeMessage}):null),n.a.createElement(Q.a,{item:!0,xs:12,style:{textAlign:"center"}},"Currently selected: ",this.state.person.firstName,n.a.createElement(re,{person:this.state.person,enterNarnia:this.enterNarnia})),n.a.createElement(Q.a,{item:!0,xs:6,className:"uglyGrid"},n.a.createElement(h.a,{variant:"contained",color:"primary",onClick:function(){return e.setState({registration:!e.state.registration})}},"Register new tourist"),this.state.registration?n.a.createElement(j,{person:this.state.person,register:this.registerPerson,error:this.errorSwitch}):null,n.a.createElement("h3",null," People registered for Narnia:"),n.a.createElement(K,{people:this.state.registered,selectUser:this.selectUser})),n.a.createElement(Q.a,{item:!0,xs:6,className:"anotherUglyGrid"},n.a.createElement("h3",null,"People currently in Narnia: "),n.a.createElement(K,{people:this.state.tourists,removeUser:this.removeUser}))))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[160,1,2]]]);
//# sourceMappingURL=main.e66698b9.chunk.js.map