(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){},28:function(e){e.exports={domain:"chedah.auth0.com",clientId:"pzScAXT2KggqDOKJSZywutQhOTomk68o"}},40:function(e,t,a){e.exports=a.p+"static/media/hamilton-background3.55be3184.jpg"},41:function(e,t,a){e.exports=a.p+"static/media/hamilton-seal.fe4c98c8.png"},42:function(e,t,a){e.exports=a.p+"static/media/wenham-seal.f8dbeac6.png"},44:function(e,t,a){e.exports=a.p+"static/media/facebook-logo.21d11b57.png"},45:function(e,t,a){e.exports=a.p+"static/media/twitter-logo.49bb3e33.png"},46:function(e,t,a){e.exports=a.p+"static/media/instagram-logo.26b65b3c.png"},47:function(e,t,a){e.exports=a(86)},52:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(37),l=a.n(s),c=a(3),i=a(14),o=a(4),u=a(5),m=a(7),d=a(6),p=a(8);a(52);function h(e){return r.a.createElement("input",Object.assign({className:"form-control "+e.inputClass},e))}function g(e){return r.a.createElement("button",Object.assign({},e,{className:e.className}),e.button)}var b=a(2),f=a(13),E=a.n(f),v={getStudents:function(){return E.a.get("/api/students")},getStudent:function(e){return E.a.get("/api/students/"+e)},deleteStudent:function(e){return E.a.delete("/api/students/"+e)},saveStudent:function(e){return E.a.post("/api/students",e)},saveListing:function(e){return E.a.post("/api/listings",e)},getListings:function(e){return E.a.post("/api/listings/search",{data:e})},getListing:function(e){return E.a.get("/api/listings/"+e)},saveReview:function(e){return E.a.put("/api/listings",e)},saveStudentMessage:function(e){return E.a.put("/api/students",e)},saveTutorMessage:function(e){return E.a.put("/api/listings/messages",e)},getNewVideos:function(e){return console.log("HERE"),E.a.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+e+"&key=AIzaSyDyLzwyfpgQMxCuuUK1VXdvTc34-wMzGi0")}},y=r.a.createContext(),N=y.Consumer,w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={userName:"",search:"",categories:["Dining","Essentials","Take-Out","Delivery","Retail","Services"],listings:[],error:!0,button:"Submit",className:"btn btn-success search-button",handleInputChange:function(e){a.setState(Object(b.a)({},a.state,{search:e.target.value}))},handleFormSubmit:function(e){e.preventDefault(),console.log("SEARCH",a.state.search),v.getListings(a.state.search).then(function(e){if("error"===e.data.status)throw new Error(e.data.message);console.log("RESDATA",e.data),a.setState(Object(b.a)({},a.state,{listings:e.data,error:!1,search:""}),function(){a.props.history.push("/listings")})}).catch(function(e){return a.setState(Object(b.a)({},a.state,{error:e.message}))})},loadListings:function(){v.getListings().then(function(e){console.log("RES22222",e),a.setState(Object(b.a)({},a.state,{listings:e.data}))}).catch(function(e){return console.log(e)})},handleLogin:function(e){e.preventDefault(),a.Auth.login(a.state.email,a.state.password).then(function(e){a.props.history.replace("/")}).then(function(){return window.location.reload(!1)}).catch(function(e){console.log(e.response.data.message)})}},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.getListings(this.state.search).then(function(t){if("error"===t.data.status)throw new Error(t.data.message);console.log("RESDATA",t.data),e.setState(Object(b.a)({},e.state,{listings:t.data,error:!1}))}).catch(function(t){return e.setState(Object(b.a)({},e.state,{error:t.message}))})}},{key:"render",value:function(){return r.a.createElement(y.Provider,{value:{state:this.state}},this.props.children)}}]),t}(n.Component),x=Object(i.f)(w);a(74);var k=Object(i.f)(function(){return r.a.createElement("form",{className:"search"},r.a.createElement("div",{className:"form-group input-field"},r.a.createElement(N,null,function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{value:e.state.search,onChange:e.state.handleInputChange,name:"category",list:"categories",type:"text",className:"form-control jumbotron-input-field",placeholder:"Find info for....",id:"category"}),r.a.createElement("datalist",{id:"categories"},e.state.categories.map(function(e){return r.a.createElement("option",{value:e,key:e})})),r.a.createElement(g,{button:e.state.button,className:e.state.className,value:e.state.search,onClick:e.state.handleFormSubmit}))})))}),C=a(40),O=a.n(C),j=(a(75),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"fill"},r.a.createElement("img",{alt:"...",src:O.a})),r.a.createElement("div",{className:"display-text"},r.a.createElement("h5",{className:"search-text"},"Support local businesses"),r.a.createElement(k,null)),r.a.createElement("div",{className:"below-image"},r.a.createElement("h1",{className:"lower-title"},"Virtual Hamilton-Wenham"),r.a.createElement("p",{className:"lower-subhead"},"Virtual Hamilton-Wenham is a non-profit branch of Kinship Farm dedicated to supporting the ability of local businesses to survive and thrive. This is a centralized portal, not unlike our beautiful downtown, allowing people to browse, shop, and enjoy what Hamilton-Wenham has to offer!")))}}]),t}(n.Component)),S=(a(25),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(j,null),r.a.createElement("div",{className:"push"}))}}]),t}(n.Component)),A=a(41),R=a.n(A),T=a(42),D=a.n(T),z=a(17),L=a.n(z),I=a(19),F=a(15),W=a(22),P=a(43),U=a.n(P),M=function(){return window.history.replaceState({},document.title,window.location.pathname)},_=r.a.createContext(),H=function(){return Object(n.useContext)(_)},q=a(0),V=a(80),B=q.createClass({displayName:"MailtoModule",render:function(){return q.createElement(V,{email:"j@sonbellamy.com",obfuscate:!0},"Email me!")}}),K=function(e){var t=H(),a=t.isAuthenticated,n=t.loginWithRedirect,s=t.logout,l=t.user;return a&&l?r.a.createElement("div",{className:"navbar-buttons"},r.a.createElement("ul",{className:"navbar-nav navbar-center"},r.a.createElement(c.b,{to:"/"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("div",{className:"nav-link"},"Help For Businesses"))),r.a.createElement(c.b,{push:!0,to:"/signup"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("div",{className:"nav-link"},"Add your listing"))),r.a.createElement(B,null),r.a.createElement(c.b,{to:"/account"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("div",{className:"nav-link"},"My account"))),r.a.createElement(c.b,{push:!0,to:"/"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("div",{className:"nav-link",href:"/",onClick:function(){return s()}},"Logout"))))):r.a.createElement("div",{className:"navbar-buttons"},r.a.createElement("ul",{className:"navbar-nav navbar-center"},r.a.createElement(c.b,{to:"/"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("div",{className:"nav-link"},"Help For Businesses"))),r.a.createElement(c.b,{push:!0,to:"/signup"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("div",{className:"nav-link"},"Add your listing"))),r.a.createElement(c.b,{to:"/"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("div",{className:"nav-link"},"Contact"))),r.a.createElement(c.b,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement("div",{className:"nav-link",onClick:function(){return n({})}},"Login")))))},J=function(e){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid header"},r.a.createElement("div",{className:"container"},r.a.createElement(c.b,{to:"/"},r.a.createElement("img",{className:"hamilton-seal",alt:"Hamilton Seal",href:"/",src:R.a}),r.a.createElement("img",{className:"wenham-seal",alt:"Wenham Seal",href:"/",src:D.a})),r.a.createElement("h1",{className:"title"},"Virtual Hamilton-Wenham"),r.a.createElement("p",{className:"subhead"},"Serving Community \u2013 Providing Peace-of-Mind")),r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-expand-md navbar-expand-sm bg-dark"},r.a.createElement(K,null)))},Q=function(e){var t=e.component,a=e.path,s=Object(W.a)(e,["component","path"]),l=H(),c=l.loading,o=l.isAuthenticated,u=l.loginWithRedirect;Object(n.useEffect)(function(){c||o||function(){var e=Object(I.a)(L.a.mark(function e(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({appState:{targetUrl:window.location.pathname}});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[c,o,u,a]);return r.a.createElement(i.a,Object.assign({path:a,render:function(e){return!0===o?r.a.createElement(t,e):null}},s))},X=(a(81),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"footer navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-dark bg-dark"},r.a.createElement("div",{className:"navbar-buttons"},r.a.createElement("ul",{className:"navbar-nav navbar-center bg-dark"}),"Copyright \xa9 2020 Kinship Farm")))}}]),t}(r.a.Component)),Z=a(9),G=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",message:"",disabledStatus:!0},a.handleInputChange=function(e){console.log(e.target.value);var t=e.target,n=t.name,r=t.value;a.setState(Object(Z.a)({},n,r))},a.handleFormSubmit=function(e){console.log(a.state),e.preventDefault(),v.saveTutor({name:a.state.name,email:a.state.email,message:a.state.message}).then(function(e){if(e.data._id){a.setState(Object(b.a)({},a.state,{disabledStatus:!1}))}})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"list-overflow-container register-box"},r.a.createElement("h2",null,"Contact Dave"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement(h,{name:"name",type:"text",placeholder:"Full Name",className:"col-6 signup-boxes",onChange:function(t){return e.handleInputChange(t)}}),r.a.createElement(h,{name:"email",type:"email",className:"col-6 signup-boxes",placeholder:"Email (required)",onChange:function(t){return e.handleInputChange(t)}}),r.a.createElement("div",{className:"col-12"},r.a.createElement("textarea",{className:"form-control",rows:"10",name:"message",onChange:function(t){return e.handleInputChange(t)},placeholder:"Message here"})),r.a.createElement("button",{type:"submit",className:"btn save-button"},"Submit"),this.state.disabledStatus?r.a.createElement("div",null):r.a.createElement("div",null,"Thank you, Dave will get back to you as soon as possible!")))}}]),t}(n.Component);function Y(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function $(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function ee(e){var t=e.size,a=e.children;return r.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(82);function te(e){var t=e.children;return r.a.createElement("div",{className:"list-overflow-container"},r.a.createElement("ul",{className:"list-group"},t))}function ae(e){var t=e.children;return r.a.createElement("li",{className:"list-group-item"},t)}var ne=a(44),re=a.n(ne),se=a(45),le=a.n(se),ce=a(46),ie=a.n(ce);a(83);var oe=function(e){return console.log("CARD ",e),r.a.createElement("div",null,r.a.createElement("div",{className:"results-box"},r.a.createElement("div",{className:"col-4 image"},r.a.createElement("img",{src:e.image,alt:"...",className:"img-thumbnail"})),r.a.createElement("div",{className:"col-7 text"},r.a.createElement("div",{className:"title"},e.name),r.a.createElement("div",{className:"address"},e.address1),e.address2?r.a.createElement("div",{className:"address"},e.address2):r.a.createElement("div",null),r.a.createElement("div",{className:"city"},e.city,", ",e.state," ",e.zip),r.a.createElement("div",{className:"telephone"},e.telephone),r.a.createElement("div",{className:"website"},e.website),r.a.createElement("div",{className:"description"},e.description),e.twitter?r.a.createElement("div",{className:"twitter",style:{display:"inline-block"}},r.a.createElement("a",{href:e.twitter,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:le.a,style:{width:"30px",margin:"5px"}}))):r.a.createElement("div",null),e.facebook?r.a.createElement("div",{className:"facebook",style:{display:"inline-block"}},r.a.createElement("a",{href:e.facebook,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:re.a,style:{width:"30px",margin:"5px"}}))):r.a.createElement("div",null),e.instagram?r.a.createElement("div",{className:"instagram",style:{display:"inline-block"}},r.a.createElement("a",{href:e.instagram,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:ie.a,style:{width:"30px",margin:"5px"}}))):r.a.createElement("div",null))),r.a.createElement("hr",null))},ue=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(Y,{fluid:!0},r.a.createElement($,null,r.a.createElement(ee,{size:"md-2"}),r.a.createElement(ee,{size:"md-8"},r.a.createElement("div",{className:"box",style:{backgroundColor:"#cccccc"}},r.a.createElement("h5",{style:{color:"White"}},"Search"),r.a.createElement(k,null)),r.a.createElement(N,{className:"content-inside"},function(e){return r.a.createElement(r.a.Fragment,null,e.state.listings.length?r.a.createElement(te,null,r.a.createElement("h2",null,"AVAILABLE TUTORS"),e.state.listings.map(function(e){return r.a.createElement(ae,{key:e._id},r.a.createElement(oe,{name:e.name,address1:e.address1,address2:e.address2,city:e.city,state:e.state,zip:e.zip,telephone:e.telephone,website:e.website,image:e.image,categories:e.categories,description:e.description,facebook:e.facebook,twitter:e.twitter,instagram:e.instagram}))})):r.a.createElement("div",{className:"box"},r.a.createElement("h4",{className:"webinars-headline"},"Sorry, there are no listings for that search.")))})),r.a.createElement(ee,{size:"md-2"}))),r.a.createElement("div",{className:"push"}))}}]),t}(n.Component),me=void 0,de=["Dining","Essentials","Take-Out","Delivery","Retail","Services"],pe=function(e){var t=Object(n.useState)({checkboxes:de.reduce(function(e,t){return Object(b.a)({},e,Object(Z.a)({},t,!1))},{}),options_hooks:de,email:"",password:"",name:"",address1:"",address2:"",city:"",usState:"",zip:"",telephone:"",categories:["On"],photo:"",website:"",description:"",facebook:"",twitter:"",instagram:"",disabledStatus:!0}),a=Object(F.a)(t,2),s=a[0],l=a[1],c=function(e){var t=e.target,a=t.name,n=t.value;l(Object(Z.a)({},a,n))};s.options_hooks;return r.a.createElement("div",{className:"list-overflow-container register-box"},r.a.createElement("h4",{style:{color:"black"}},"Create your business profile"),r.a.createElement("form",{onSubmit:function(e){console.log(s),e.preventDefault(),Object.keys(s.checkboxes).filter(function(e){return s.checkboxes[e]}).forEach(function(e){s.categories.push(e)}),v.saveListing({email:s.email,password:s.password,name:s.name,address1:s.address1,address2:s.address2,city:s.city,state:s.usState,zip:s.zip,image:s.image,telephone:s.telephone,website:s.website,description:s.description,categories:s.categories,twitter:s.twitter,facebook:s.facebook,instagram:s.instagram}).then(function(e){e.data._id&&l(Object(b.a)({},s,{disabledStatus:!1}))})}},r.a.createElement(h,{name:"email",type:"email",className:"col-6 signup-boxes",placeholder:"Email (required)",onChange:function(e){return c(e)}}),r.a.createElement(h,{name:"password",type:"password",className:"col-5 signup-boxes",placeholder:"Password (required)",onChange:function(e){return c(e)}}),r.a.createElement(h,{name:"name",type:"text",placeholder:"Business Name (required)",className:"col-11 signup-boxes",onChange:function(e){return c(e)}}),r.a.createElement(h,{name:"address1",type:"text",className:"col-11 signup-boxes",placeholder:"Address (required)",onChange:function(e){return c(e)}}),r.a.createElement(h,{name:"address2",type:"text",className:"col-11 signup-boxes",placeholder:"Address",onChange:function(e){return c(e)}}),r.a.createElement(h,{name:"city",type:"text",className:"col-5 signup-boxes",placeholder:"City",onChange:function(e){return c(e)}}),r.a.createElement(h,{name:"usState",type:"text",className:"col-2 signup-boxes",placeholder:"State",onChange:function(e){return c(e)}}),r.a.createElement(h,{name:"zip",type:"text",className:"col-4 signup-boxes",placeholder:"Zip*",onChange:function(e){return c(e)}}),r.a.createElement(h,{name:"telephone",type:"text",className:"col-11 signup-boxes",placeholder:"Telephone*",onChange:function(e){return c(e)}}),r.a.createElement(h,{name:"image",type:"text",className:"col-11 signup-boxes",placeholder:"Photo (paste in url)",onChange:function(e){return c(e)}}),r.a.createElement(h,{name:"website",type:"text",className:"col-11 signup-boxes",placeholder:"Website",onChange:function(e){return c(e)}}),r.a.createElement(h,{name:"twitter",type:"text",className:"col-4 signup-boxes",placeholder:"Twitter (full URL)",onChange:function(e){return c(e)}}),r.a.createElement(h,{name:"facebook",type:"text",className:"col-3 signup-boxes",placeholder:"Facebook (full URL)",onChange:function(e){return c(e)}}),r.a.createElement(h,{name:"instagram",type:"text",className:"col-4 signup-boxes",placeholder:"Instagram (full URL)",onChange:function(e){return c(e)}}),r.a.createElement("h4",{style:{color:"black"}},"Categories (check all that apply)"),r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",{style:{color:"black"}},"Additional details"),r.a.createElement("textarea",{className:"form-control",rows:"10",name:"description",onChange:function(e){return c(e)},placeholder:"Message to your customers, store hours, etc."}),r.a.createElement("form",{className:"div-test"},r.a.createElement("button",{type:"submit",className:"btn btn-secondary save-button"},"Save"),s.disabledStatus?r.a.createElement("div",null):r.a.createElement("div",null,r.a.createElement("input",{name:"email",type:"email",id:"email",placeholder:"Email address",className:"form-control login-signup-email-field",onChange:c}),r.a.createElement("input",{name:"password",type:"password",id:"pwd",placeholder:"Password",className:"form-control login-signup-password-field",onChange:c}),r.a.createElement(g,{button:"Submit",onClick:function(e){e.preventDefault(),me.Auth.login(s.email,s.password).then(function(e){me.props.history.replace("/listing")}).then(function(){return window.location.reload(!1)}).catch(function(e){console.log(e.response.data.message)})},className:"btn btn-success login-submit-button"}))))))},he=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(Z.a)({},n,r))},e.handleFormSubmit=function(t){t.preventDefault(),e.Auth.login(e.state.email,e.state.password).then(function(t){e.props.history.replace("/")}).then(function(){return window.location.reload(!1)}).catch(function(e){console.log(e.response.data.message)})},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.Auth.loggedIn()&&this.props.history.replace("/")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Y,{fluid:!0},r.a.createElement($,null,r.a.createElement(ee,{size:"md-12"},r.a.createElement("div",{className:"box"},r.a.createElement("h2",null,"Login"),r.a.createElement("form",{className:"search"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{name:"email",type:"email",id:"email",placeholder:"Email address",className:"form-control login-email-field",onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{name:"password",type:"password",id:"pwd",placeholder:"Password",className:"form-control login-password-field",onChange:this.handleChange}),r.a.createElement(g,{button:"Submit",onClick:this.handleFormSubmit,className:"btn btn-success login-submit-button"}))))))))}}]),t}(n.Component),ge=void 0,be=["Dining","Essentials","Take-Out","Delivery","Retail","Services"],fe=function(e){var t=Object(n.useState)({checkboxes:be.reduce(function(e,t){return Object(b.a)({},e,Object(Z.a)({},t,!1))},{}),listing:{},email:"",password:"",name:"",address1:"",address2:"",city:"",usState:"",zip:"",telephone:"",categories:[],photo:"",website:"",description:"",facebook:"",twitter:"",instagram:"",disabledStatus:!0,loggedInUser:"user"}),a=Object(F.a)(t,2),s=(a[0],a[1],function(e){console.log(e.target.value);var t=e.target,a=t.name,n=t.value;ge.setState(Object(Z.a)({},a,n))}),l=H(),c=l.loading,i=l.user;return c||!i?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",{className:"list-overflow-container register-box"},r.a.createElement("h4",{style:{color:"black"}},"Update your business profile"),r.a.createElement("h1",null,i.name),r.a.createElement("h1",null,i.email),r.a.createElement("form",{onSubmit:ge.handleFormSubmit},r.a.createElement(h,{name:"email",type:"email",className:"col-6 signup-boxes",value:ge.state.listing.email,onChange:function(e){return s(e)}}),r.a.createElement(h,{name:"password",type:"password",className:"col-5 signup-boxes",placeholder:"Enter password (required)",onChange:function(e){return s(e)}}),r.a.createElement(h,{name:"name",type:"text",value:ge.state.listing.name,className:"col-11 signup-boxes",onChange:function(e){return s(e)}}),r.a.createElement(h,{name:"address1",type:"text",className:"col-11 signup-boxes",value:ge.state.listing.address1,onChange:function(e){return s(e)}}),r.a.createElement(h,{name:"address2",type:"text",className:"col-11 signup-boxes",value:ge.state.listing.address2,onChange:function(e){return s(e)}}),r.a.createElement(h,{name:"city",type:"text",className:"col-5 signup-boxes",value:ge.state.listing.city,onChange:function(e){return s(e)}}),r.a.createElement(h,{name:"usState",type:"text",className:"col-2 signup-boxes",value:ge.state.listing.state,onChange:function(e){return ge.handleInputChange(e)}}),r.a.createElement(h,{name:"zip",type:"text",className:"col-4 signup-boxes",value:ge.state.listing.zip,onChange:function(e){return s(e)}}),r.a.createElement(h,{name:"telephone",type:"text",className:"col-11 signup-boxes",value:ge.state.listing.telephone,onChange:function(e){return s(e)}}),r.a.createElement(h,{name:"image",type:"text",className:"col-11 signup-boxes",value:ge.state.listing.image,onChange:function(e){return s(e)}}),r.a.createElement(h,{name:"website",type:"text",className:"col-11 signup-boxes",value:ge.state.listing.website,onChange:function(e){return s(e)}}),r.a.createElement(h,{name:"twitter",type:"text",className:"col-4 signup-boxes",value:ge.state.listing.twitter,onChange:function(e){return s(e)}}),r.a.createElement(h,{name:"facebook",type:"text",className:"col-3 signup-boxes",value:ge.state.listing.facebook,onChange:function(e){return s(e)}}),r.a.createElement(h,{name:"instagram",type:"text",className:"col-4 signup-boxes",value:ge.state.listing.instagram,onChange:function(e){return s(e)}}),r.a.createElement("h4",{style:{color:"black"}},"Categories (check all that apply)"),ge.createCheckboxes(),r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",{style:{color:"black"}},"Additional details"),r.a.createElement("textarea",{className:"form-control",rows:"10",name:"description",onChange:function(e){return ge.handleInputChange(e)},value:ge.state.listing.description}),r.a.createElement("form",{className:"div-test"},r.a.createElement("button",{type:"submit",className:"btn btn-secondary save-button"},"Save"),ge.state.disabledStatus?r.a.createElement("div",null):r.a.createElement("div",null,r.a.createElement("input",{name:"email",type:"email",id:"email",placeholder:"Email address",className:"form-control login-signup-email-field",onChange:ge.handleChange}),r.a.createElement("input",{name:"password",type:"password",id:"pwd",placeholder:"Password",className:"form-control login-signup-password-field",onChange:ge.handleChange}),r.a.createElement(g,{button:"Submit",onClick:ge.handleLogin,className:"btn btn-success login-submit-button"}))))))};a(84),a(85);var Ee=function(){return r.a.createElement(c.a,null,r.a.createElement(x,null,r.a.createElement("div",null,r.a.createElement(J,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:S}),r.a.createElement(i.a,{exact:!0,path:"/listings",component:ue}),r.a.createElement(i.a,{exact:!0,path:"/signup",component:pe}),r.a.createElement(i.a,{exact:!0,path:"/login",component:he}),r.a.createElement(i.a,{exact:!0,path:"/contact",component:G}),r.a.createElement(Q,{exact:!0,path:"/dashboard",component:fe})),r.a.createElement(X,null))))},ve=a(28),ye=a(10),Ne=Object(ye.a)();l.a.render(r.a.createElement(function(e){var t=e.children,a=e.onRedirectCallback,s=void 0===a?M:a,l=Object(W.a)(e,["children","onRedirectCallback"]),c=Object(n.useState)(),i=Object(F.a)(c,2),o=i[0],u=i[1],m=Object(n.useState)(),d=Object(F.a)(m,2),p=d[0],h=d[1],g=Object(n.useState)(),b=Object(F.a)(g,2),f=b[0],E=b[1],v=Object(n.useState)(!0),y=Object(F.a)(v,2),N=y[0],w=y[1],x=Object(n.useState)(!1),k=Object(F.a)(x,2),C=k[0],O=k[1];Object(n.useEffect)(function(){!function(){var e=Object(I.a)(L.a.mark(function e(){var t,a,n,r,c;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U()(l);case 2:if(t=e.sent,E(t),!window.location.search.includes("code=")||!window.location.search.includes("state=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:a=e.sent,n=a.appState,s(n);case 10:return e.next=12,t.isAuthenticated();case 12:if(r=e.sent,u(r),!r){e.next=19;break}return e.next=17,t.getUser();case 17:c=e.sent,h(c);case 19:w(!1);case 20:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]);var j=function(){var e=Object(I.a)(L.a.mark(function e(){var t,a,n=arguments;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},O(!0),e.prev=2,e.next=5,f.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,O(!1),e.finish(10);case 13:return e.next=15,f.getUser();case 15:a=e.sent,h(a),u(!0);case 18:case"end":return e.stop()}},e,null,[[2,7,10,13]])}));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(I.a)(L.a.mark(function e(){var t;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,f.handleRedirectCallback();case 3:return e.next=5,f.getUser();case 5:t=e.sent,w(!1),u(!0),h(t);case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(_.Provider,{value:{isAuthenticated:o,user:p,loading:N,popupOpen:C,loginWithPopup:j,handleRedirectCallback:S,getIdTokenClaims:function(){return f.getIdTokenClaims.apply(f,arguments)},loginWithRedirect:function(){return f.loginWithRedirect.apply(f,arguments)},getTokenSilently:function(){return f.getTokenSilently.apply(f,arguments)},getTokenWithPopup:function(){return f.getTokenWithPopup.apply(f,arguments)},logout:function(){return f.logout.apply(f,arguments)}}},t)},{domain:ve.domain,client_id:ve.clientId,redirect_uri:window.location.origin,onRedirectCallback:function(e){Ne.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}},r.a.createElement(Ee,null)),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.ade5b381.chunk.js.map