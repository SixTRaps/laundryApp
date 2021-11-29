(this.webpackJsonplaundryapp=this.webpackJsonplaundryapp||[]).push([[0],[,,,,,function(e,t,s){e.exports={form:"SignUpCustomerForm_form__HR3OO",error:"SignUpCustomerForm_error__3CD6u",control:"SignUpCustomerForm_control__2TBwh",actions:"SignUpCustomerForm_actions__27TDZ"}},function(e,t,s){e.exports={form:"LaundryRequestForm_form__1U8uC",error:"LaundryRequestForm_error__33vAL",textControl:"LaundryRequestForm_textControl__3wxwB",checkBoxControl:"LaundryRequestForm_checkBoxControl__y2qIV",actions:"LaundryRequestForm_actions__3ccG5"}},function(e,t,s){e.exports={form:"CustomerDetailsForm_form__2cVaK",error:"CustomerDetailsForm_error__1DOLH",control:"CustomerDetailsForm_control__ViaVh",actions:"CustomerDetailsForm_actions__1CF6X"}},function(e,t,s){e.exports={form:"LoginForm_form__1c99a",error:"LoginForm_error__i9owo",control:"LoginForm_control__3T3Ps",actions:"LoginForm_actions__33BbP"}},function(e,t,s){e.exports={header:"MainNavigation_header__pcWBd",logo:"MainNavigation_logo__3mTft",active:"MainNavigation_active__oN3Ka",logout:"MainNavigation_logout__3fhIF"}},,,function(e,t,s){e.exports={card:"Card_card__3_jzl"}},function(e,t,s){e.exports={main:"Layout_main__auk_r"}},,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(1),r=s(11),a=s.n(r),n=s(3),i=s(0);const l=Object(c.createContext)({userDetails:{},loginStatus:!1}),o=localStorage.getItem("loginSuccess");function d(e){const[t,s]=Object(c.useState)({}),[r,a]=Object(c.useState)(!1);const n=async e=>{const t=await fetch("/api/findUserDetails",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return await t.json()};Object(c.useEffect)((()=>{if("true"===o){(async()=>{const e=localStorage.getItem("userType"),t={email:localStorage.getItem("email"),userType:e};s(await n(t)),a(!0)})()}}),[]);const d={userDetails:t,loginStatus:r,addUserDetailsHandler:function(e){for(const[c,r]of Object.entries(e))s({...t,[c]:r})},removeUserDetailsHandler:function(){s()},findUserDetails:n,setLoginStatus:function(e){a(e)},setUserDetails:function(e){s(e)}};return Object(i.jsx)(l.Provider,{value:d,children:e.children})}var j=l,h=(s(19),s(20),s(2)),b=s.p+"static/media/homeLandingLaundry.315cce71.jpg";var u=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Hamper Dash"}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-12",children:Object(i.jsx)("p",{children:"Welcome to Hamper Dash!! We connect you to the best launderers around so you can save time and focus on what matters, instead of laundry chores. We offer registration as a laundry provider (to provide laundry services) on our platform, or as a laundry user (get your laundry cleaned)."})}),Object(i.jsxs)("div",{className:"col-12",children:[Object(i.jsx)("img",{style:{height:"100%",width:"100%","object-fit":"contain"},src:b,alt:"Nice and neat laundry room"}),"Picture from"," ",Object(i.jsx)("a",{href:"https://www.rd.com/wp-content/uploads/2021/09/GettyImages-1181334518-MLedit.jpg?resize=700,467",children:"rd.com"})]})]})]})};var m=function(){const e=Object(h.f)();return setTimeout((()=>{e("/")}),3e3),Object(i.jsx)("div",{children:Object(i.jsx)("p",{children:"Thanks! Redirecting to Home...."})})},O=s.p+"static/media/laundryUser.542ff844.jpg",x=s.p+"static/media/laundryProvider.941f55cc.jpg",p=s(12),v=s.n(p);var f=function(e){return Object(i.jsx)("div",{className:v.a.card,children:e.children})};var y=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Sign Up Page"}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-6 d-flex justify-content-center",children:Object(i.jsxs)(f,{children:[Object(i.jsx)("div",{className:"d-flex justify-content-center",children:Object(i.jsx)("h4",{children:"I am a laundry provider! I can wash!"})}),Object(i.jsx)("div",{className:"d-flex justify-content-center",children:Object(i.jsx)(n.b,{to:"/signUpProviders",children:Object(i.jsx)("strong",{children:"Providers Sign Up"})})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{style:{height:"100%",width:"100%","object-fit":"contain"},src:x,alt:"Worker holding freshly cleaned towels at a laundry provider business"}),"Picture from"," ",Object(i.jsx)("a",{href:"https://boltlaundry.com/wp-content/uploads/2021/01/Commercial-Laundry-Service-In-Knoxville-TN.jpg",children:"boltlaundry.com"})]})]})}),Object(i.jsx)("div",{className:"col-6 ",children:Object(i.jsxs)(f,{children:[Object(i.jsx)("div",{className:"d-flex justify-content-center",children:Object(i.jsx)("h4",{children:"I like my laundry clean and spotless!"})}),Object(i.jsx)("div",{className:"d-flex justify-content-center",children:Object(i.jsx)(n.b,{to:"/signUpCustomers",children:Object(i.jsx)("strong",{children:"Customers Sign Up"})})}),Object(i.jsx)("div",{className:"d-flex justify-content-center",children:Object(i.jsx)("img",{style:{height:"100%",width:"100%","object-fit":"contain"},src:O,alt:"Woman doing laundry with a smile"})}),Object(i.jsxs)("div",{children:["Picture from"," ",Object(i.jsx)("a",{href:"https://www.wash.com/wp-content/uploads/2019/04/woman-doing-laundry.jpg",children:"wash.com"})]})]})})]})]})},N=s(8),g=s.n(N);var C=function(e){const[t,s]=Object(c.useState)(""),r=Object(h.f)(),a=Object(c.useRef)(),n=Object(c.useRef)(),l=Object(c.useContext)(j);return Object(i.jsx)(f,{children:Object(i.jsxs)("form",{className:g.a.form,onSubmit:async t=>{t.preventDefault();const c={email:a.current.value,password:n.current.value},i=await e.loginHandler(c);if(i.error)s(i.error);else{localStorage.setItem("email",i.email),localStorage.setItem("userType",i.userType),localStorage.setItem("loginSuccess",!0);(async()=>{const e=localStorage.getItem("userType"),t={email:localStorage.getItem("email"),userType:e};l.setUserDetails(await l.findUserDetails(t)),l.setLoginStatus(!0)})(),"customer"===i.userType?r("/CustomerRequestService"):r("/ProviderPage")}},children:[Object(i.jsxs)("div",{className:g.a.control,children:[Object(i.jsx)("label",{htmlFor:"email",children:"E-mail"}),Object(i.jsx)("input",{type:"email",placeholder:"email@email.com",required:!0,name:"email",ref:a})]}),Object(i.jsxs)("div",{className:g.a.control,children:[Object(i.jsx)("label",{htmlFor:"password",children:"Password"}),Object(i.jsx)("input",{type:"password",placeholder:"Password",required:!0,name:"password",ref:n})]}),Object(i.jsx)("div",{className:g.a.error,children:Object(i.jsx)("p",{children:t})}),Object(i.jsx)("div",{className:g.a.actions,children:Object(i.jsx)("button",{children:"Login"})})]})})};var S=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Login Page"}),Object(i.jsx)(C,{loginHandler:async function(e){const t=await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return await t.json()}})]})};s(21);var w=({postProviderData:e})=>{const[t,s]=Object(c.useState)({userType:"provider",companyName:"",firstName:"",lastName:"",email:"",phoneNumber:"",address:"",city:"",state:"",zipCode:"",password:"",confirmPassword:""}),r=e=>{const c=e.target.name,r=e.target.value;s({...t,[c]:r})};return Object(i.jsx)(f,{children:Object(i.jsxs)("form",{onSubmit:s=>{s.preventDefault(),e(t)},children:[Object(i.jsx)("h2",{children:"Contact Info"}),Object(i.jsxs)("div",{className:"fullLengthIn",children:[Object(i.jsx)("label",{htmlFor:"companyName",children:"Company Name"}),Object(i.jsx)("input",{type:"text",name:"companyName",id:"companyName",placeholder:"Enter Company Name",value:t.companyName,onChange:r})]}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"inline",children:[Object(i.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(i.jsx)("input",{type:"text",name:"firstName",value:t.firstName,id:"firstName",placeholder:"Enter First Name",onChange:r})]}),Object(i.jsxs)("div",{className:"inline",children:[Object(i.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(i.jsx)("input",{type:"text",name:"lastName",value:t.lastName,id:"lastName",placeholder:"Enter Last Name",onChange:r})]})]}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"inline",children:[Object(i.jsx)("label",{htmlFor:"email",children:"Email"}),Object(i.jsx)("input",{type:"email",name:"email",placeholder:"Enter Email",onChange:r})]}),Object(i.jsxs)("div",{className:"inline",children:[Object(i.jsx)("label",{htmlFor:"phoneNumber",children:"Phone"}),Object(i.jsx)("input",{type:"tel",name:"phoneNumber",id:"phoneNumber",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",placeholder:"XXX-XXX-XXXX",onChange:r})]})]}),Object(i.jsx)("h2",{children:"Address"}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"fullLengthIn",children:[Object(i.jsx)("label",{htmlFor:"address",children:"Address Line 1"}),Object(i.jsx)("input",{name:"address",id:"address1",type:"text",onChange:r})]}),Object(i.jsxs)("div",{className:"inline",children:[Object(i.jsx)("label",{htmlFor:"city",children:"City"}),Object(i.jsx)("input",{name:"city",id:"city",type:"text",onChange:r})]}),Object(i.jsxs)("div",{className:"inline",children:[Object(i.jsx)("label",{htmlFor:"state",children:"State"}),Object(i.jsx)("input",{name:"state",id:"state",type:"text",onChange:r})]}),Object(i.jsx)("div",{children:Object(i.jsx)("label",{htmlFor:"zipCode",children:"Zip Code"})}),Object(i.jsx)("input",{name:"zipCode",id:"zipCode",type:"number",onChange:r})]}),Object(i.jsx)("h2",{children:"Password"}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"inline",children:[Object(i.jsx)("label",{htmlFor:"password",children:"Password"}),Object(i.jsx)("input",{name:"password",id:"password",type:"password",onChange:r})]}),Object(i.jsxs)("div",{className:"inline",children:[Object(i.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),Object(i.jsx)("input",{name:"confirmPassword",id:"confirmPassword",type:"password",onChange:r})]})]}),Object(i.jsx)("div",{className:"flex-parent jc-center",children:Object(i.jsx)("button",{type:"submit",children:"Create Account"})})]})})};var D=()=>{let e=Object(h.f)();return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Laundry Service Provider Sign Up"}),Object(i.jsx)(w,{postProviderData:async t=>{delete t.confirmPassword,fetch("api/createCustomer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),e("/")}})]})},P=s(5),F=s.n(P);var _=function(e){const[t,s]=Object(c.useState)(""),[r,a]=Object(c.useState)(""),n=Object(h.f)(),l=Object(c.useRef)(),o=Object(c.useRef)(),d=Object(c.useRef)(),j=Object(c.useRef)(),b=Object(c.useRef)(),u=Object(c.useRef)(),m=Object(c.useRef)(),O=Object(c.useRef)(),x=Object(c.useRef)(),p=async e=>{const t=j.current.value,c=b.current.value;s(t!==c?"Passwords do not match!":"")};return Object(i.jsx)(f,{children:Object(i.jsxs)("form",{className:F.a.form,onSubmit:async t=>{t.preventDefault();const c=l.current.value,r=o.current.value,i=d.current.value,h=j.current.value,p=b.current.value,v=u.current.value,f=m.current.value,y=O.current.value,N=x.current.value;if(h===p){s("");const t={firstName:c,lastName:r,email:i,city:v,zipCode:f,state:y,phoneNumber:N,password:h,userType:"customer"};await e.createCustomerFetch(t)?(a(""),n("/redirectHome")):a("Email already registered please login!")}else s("Passwords do not match!")},children:[Object(i.jsxs)("div",{className:F.a.control,children:[Object(i.jsx)("label",{htmlFor:"firstname",children:"First Name"}),Object(i.jsx)("input",{type:"text",placeholder:"First Name",required:!0,name:"firstname",ref:l})]}),Object(i.jsxs)("div",{className:F.a.control,children:[Object(i.jsx)("label",{htmlFor:"lastname",children:"Last Name"}),Object(i.jsx)("input",{type:"text",placeholder:"Last Name",required:!0,name:"lastname",ref:o})]}),Object(i.jsxs)("div",{className:F.a.control,children:[Object(i.jsx)("label",{htmlFor:"email",children:"E-mail"}),Object(i.jsx)("input",{type:"email",placeholder:"email@email.com",required:!0,name:"email",ref:d,onChange:async t=>{const s=d.current.value;if(s.includes("@")&&s.includes(".")){const t=await e.findEmailFetch(s);a(null===t||void 0===t?"":"Email already registered please login!")}}})]}),Object(i.jsx)("div",{className:F.a.error,children:Object(i.jsx)("p",{children:r})}),Object(i.jsxs)("div",{className:F.a.control,children:[Object(i.jsx)("label",{htmlFor:"password",children:"Password"}),Object(i.jsx)("input",{type:"password",placeholder:"Password",required:!0,name:"password",ref:j,onChange:p})]}),Object(i.jsxs)("div",{className:F.a.control,children:[Object(i.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),Object(i.jsx)("input",{type:"password",placeholder:"Re-enter Password",required:!0,name:"confirmPassword",ref:b,onChange:p})]}),Object(i.jsx)("div",{className:F.a.error,children:Object(i.jsx)("p",{children:t})}),Object(i.jsxs)("div",{className:F.a.control,children:[Object(i.jsx)("label",{htmlFor:"city",children:"City"}),Object(i.jsx)("input",{type:"text",placeholder:"City Name",required:!0,name:"city",ref:u})]}),Object(i.jsxs)("div",{className:F.a.control,children:[Object(i.jsx)("label",{htmlFor:"zipCode",children:"Zip Code"}),Object(i.jsx)("input",{type:"text",pattern:"[0-9]{5}",placeholder:"Zip Code (eg. 12345)",required:!0,name:"zipCode",ref:m})]}),Object(i.jsxs)("div",{className:F.a.control,children:[Object(i.jsx)("label",{htmlFor:"state",children:"State"}),Object(i.jsx)("input",{type:"text",pattern:"(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])",placeholder:"State Abbreviation (eg. CA, NY, AZ, etc.)",required:!0,name:"state",ref:O})]}),Object(i.jsxs)("div",{className:F.a.control,children:[Object(i.jsx)("label",{htmlFor:"phone",children:"Phone Number"}),Object(i.jsx)("input",{type:"tel",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",placeholder:"123-456-7890",required:!0,name:"phone",ref:x})]}),Object(i.jsx)("div",{className:F.a.actions,children:Object(i.jsx)("button",{children:"Create Account"})})]})})};var L=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Customers Sign Up Page"}),Object(i.jsx)(_,{createCustomerFetch:async function(e){const t=await fetch("/api/createCustomer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return await t.json()},findEmailFetch:async function(e){const t=await fetch("/api/findEmailExists",{method:"POST",headers:{"Content-Type":"text/plain"},body:e});return await t.json()}})]})},I=s(9),E=s.n(I);var T=function(){const e=Object(h.f)(),t=Object(c.useContext)(j),s=s=>{localStorage.clear(),t.setLoginStatus(!1),e("/")};let r=[];return t.userDetails&&t.loginStatus?("customer"===t.userDetails.userType?(r.push(Object(i.jsx)("li",{children:Object(i.jsx)(n.b,{to:"/CustomerRequestService",children:"Request Laundry"})},"customerRequestService")),r.push(Object(i.jsx)("li",{children:Object(i.jsx)(n.b,{to:"/CustomerDetailsPage",children:"".concat(t.userDetails.firstName," ").concat(t.userDetails.lastName)})},"customerDetailsPage"))):(r.push(Object(i.jsx)("li",{children:Object(i.jsx)(n.b,{to:"/ProviderPage",children:"".concat(t.userDetails.companyName)})},"providerPage")),r.push(Object(i.jsx)("li",{children:Object(i.jsx)(n.b,{to:"/ProviderDetailsPage",children:"".concat(t.userDetails.firstName," ").concat(t.userDetails.lastName)})},"providerDetailsPage"))),r.push(Object(i.jsx)("li",{children:Object(i.jsx)("button",{className:E.a.logout,onClick:s,type:"button",children:"Log out"})},"logout"))):r.push(Object(i.jsx)("li",{children:Object(i.jsx)(n.b,{to:"/Login",children:"Login"})},"login")),Object(i.jsxs)("header",{className:E.a.header,children:[Object(i.jsx)(n.b,{to:"/",children:Object(i.jsx)("div",{className:E.a.logo,children:"Hamper Dash"})}),Object(i.jsx)("nav",{children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)(n.b,{to:"/",children:"Home"})},"home"),Object(i.jsx)("li",{children:Object(i.jsx)(n.b,{to:"/SignUp",children:"Sign Up"})},"signup"),r]})})]})},R=s(13),k=s.n(R);var q=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)(T,{}),Object(i.jsx)("main",{className:k.a.main,children:e.children})]})},A=s(7),U=s.n(A);var H=function(){const[e,t]=Object(c.useState)(!0),[s,r]=Object(c.useState)("Edit"),a=Object(c.useRef)(),n=Object(c.useRef)(),l=Object(c.useRef)(),o=Object(c.useRef)(),d=Object(c.useRef)(),h=Object(c.useRef)(),b=Object(c.useContext)(j);return Object(i.jsx)(f,{children:Object(i.jsxs)("form",{className:U.a.form,onSubmit:c=>{c.preventDefault();const i=a.current.value,j=n.current.value,u=l.current.value,m=o.current.value,O=d.current.value,x=h.current.value;if(!e&&"Save"===s){const e={firstName:i,lastName:j,city:u,zipCode:m,state:O,phoneNumber:x,email:b.userDetails.email,userType:b.userDetails.userType};(async e=>{await fetch("/api/updateUserDetails",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})})(e),b.setUserDetails({...b.userDetails,...e})}e?(t(!1),r("Save")):(t(!0),r("Edit"))},children:[Object(i.jsxs)("div",{className:U.a.control,children:[Object(i.jsx)("label",{htmlFor:"firstname",children:"First Name"}),Object(i.jsx)("input",{type:"text",placeholder:"First Name",required:!0,name:"firstname",defaultValue:b.userDetails.firstName,disabled:e,ref:a})]}),Object(i.jsxs)("div",{className:U.a.control,children:[Object(i.jsx)("label",{htmlFor:"lastname",children:"Last Name"}),Object(i.jsx)("input",{type:"text",placeholder:"Last Name",required:!0,name:"lastname",defaultValue:b.userDetails.lastName,disabled:e,ref:n})]}),Object(i.jsxs)("div",{className:U.a.control,children:[Object(i.jsx)("label",{htmlFor:"city",children:"City"}),Object(i.jsx)("input",{type:"text",placeholder:"City Name",required:!0,name:"city",defaultValue:b.userDetails.city,disabled:e,ref:l})]}),Object(i.jsxs)("div",{className:U.a.control,children:[Object(i.jsx)("label",{htmlFor:"zipCode",children:"Zip Code"}),Object(i.jsx)("input",{type:"text",pattern:"[0-9]{5}",placeholder:"Zip Code (eg. 12345)",required:!0,name:"zipCode",defaultValue:b.userDetails.zipCode,disabled:e,ref:o})]}),Object(i.jsxs)("div",{className:U.a.control,children:[Object(i.jsx)("label",{htmlFor:"state",children:"State"}),Object(i.jsx)("input",{type:"text",pattern:"(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])",placeholder:"State Abbreviation (eg. CA, NY, AZ, etc.)",required:!0,name:"state",defaultValue:b.userDetails.state,disabled:e,ref:d})]}),Object(i.jsxs)("div",{className:U.a.control,children:[Object(i.jsx)("label",{htmlFor:"phone",children:"Phone Number"}),Object(i.jsx)("input",{type:"tel",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",placeholder:"123-456-7890",required:!0,name:"phone",defaultValue:b.userDetails.phoneNumber,disabled:e,ref:h})]}),Object(i.jsx)("div",{className:U.a.actions,children:Object(i.jsx)("button",{children:s})})]})})};var B=function(){const e=Object(c.useContext)(j);return void 0!==e.userDetails?Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"".concat(e.userDetails.firstName," ").concat(e.userDetails.lastName)}),Object(i.jsx)("div",{children:Object(i.jsx)(H,{})})]}):Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Customer Details Page"})})},z=s(6),V=s.n(z);var W=function(e){const t=Object(c.useRef)(),s=Object(c.useRef)(),r=Object(c.useRef)(),a=Object(c.useRef)(),n=Object(c.useRef)(),[l,o]=Object(c.useState)(),[d,j]=Object(c.useState)(!1),[h,b]=Object(c.useState)(!1);return Object(i.jsx)(f,{children:Object(i.jsxs)("form",{className:V.a.form,onSubmit:async function(c){c.preventDefault();const i=t.current.value,l=s.current.checked,d=r.current.value,j=a.current.checked,h=n.current.value;if(h<(new Date).toLocaleDateString())return void o("Date can not be in the past");o();const b={wash:i,dryClean:d,fold:l,delivery:j,date:h};await e.laundryRequestFetch(b)},children:[Object(i.jsxs)("div",{className:V.a.checkBoxControl,children:[Object(i.jsx)("label",{htmlFor:"wash",children:"Need Laundry Wash (per lbs.)?"}),Object(i.jsx)("input",{type:"checkbox",name:"wash",onChange:function(){b(!h)}})]}),h?Object(i.jsxs)("div",{className:V.a.textControl,children:[Object(i.jsx)("label",{htmlFor:"poundsOfLaundry",children:"Estimated Pounds of Laundry for Wash"}),Object(i.jsx)("input",{type:"number",placeholder:"Estimated pounds",required:!0,name:"poundsOfLaundry",ref:t})]}):Object(i.jsx)("input",{type:"hidden",value:"",name:"poundsOfLaundry",ref:t}),Object(i.jsxs)("div",{className:V.a.checkBoxControl,children:[Object(i.jsx)("label",{htmlFor:"dryClean",children:"Need Dry Clean? (per lbs.)"}),Object(i.jsx)("input",{type:"checkbox",name:"dryClean",onChange:function(){j(!d)}})]}),d?Object(i.jsxs)("div",{className:V.a.textControl,children:[Object(i.jsx)("label",{htmlFor:"poundsOfDryClean",children:"Estimated Pounds of Laundry for Dry Clean"}),Object(i.jsx)("input",{type:"number",placeholder:"Estimated pounds",required:!0,name:"poundsOfDryClean",ref:r})]}):Object(i.jsx)("input",{type:"hidden",value:"",name:"poundsOfDryClean",ref:r}),Object(i.jsxs)("span",{className:V.a.checkBoxControl,children:[Object(i.jsx)("label",{htmlFor:"fold",children:"Folded"}),Object(i.jsx)("input",{type:"checkbox",name:"fold",ref:s})]}),Object(i.jsxs)("span",{className:V.a.checkBoxControl,children:[Object(i.jsx)("label",{htmlFor:"delivery",children:"Delivered"}),Object(i.jsx)("input",{type:"checkbox",name:"delivery",ref:a})]}),Object(i.jsxs)("div",{className:V.a.textControl,children:[Object(i.jsx)("label",{htmlFor:"date",children:"Date"}),Object(i.jsx)("input",{type:"text",required:!0,placeholder:"eg. 01/31/2021",name:"date",ref:n})]}),Object(i.jsx)("div",{className:V.a.error,children:Object(i.jsx)("p",{children:l})}),Object(i.jsx)("div",{className:V.a.actions,children:Object(i.jsx)("button",{children:"Ready to Wash!"})}),e.providerCards.length>0?Object(i.jsxs)("div",{className:V.a.checkBoxControl,children:[Object(i.jsx)("div",{children:"Sort By:"}),Object(i.jsx)("input",{type:"radio",id:"priceLowHigh",name:"sort",onChange:e.setSortPriceLowHighFunc}),Object(i.jsx)("label",{htmlFor:"priceAsc",children:"Price Low-High"}),Object(i.jsx)("input",{type:"radio",id:"priceHighLow",name:"sort",onChange:e.setSortPriceHighLowFunc}),Object(i.jsx)("label",{htmlFor:"priceDesc",children:"Price High-Low"}),Object(i.jsx)("input",{type:"radio",id:"distance",name:"sort",onChange:e.setSortDistanceFunc}),Object(i.jsx)("label",{htmlFor:"distance",children:"Distance"})]}):void 0]})})};const X=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});let J=[],M={};var Z=function(){const e=Object(c.useContext)(j);let t=[],s=[];const[r,a]=Object(c.useState)(),[n,l]=Object(c.useState)(!1),[o,d]=Object(c.useState)(!1),[h,b]=Object(c.useState)(!1);return J.forEach((e=>{const t=M.wash?e.serviceObjects.wash.price*M.wash:0,c=M.dryClean?e.serviceObjects.dryClean.price*M.dryClean:0,r=M.fold?e.serviceObjects.fold.price:0,a=M.delivery?e.serviceObjects.delivery.price:0,n=t+c+r+a;s.push([Object(i.jsx)("div",{className:"mt-2",children:Object(i.jsx)(f,{children:Object(i.jsxs)("div",{className:"row p-4",children:[Object(i.jsx)("h3",{className:"d-flex justify-content-center",children:e.companyName}),Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("span",{className:"col-12",children:[Object(i.jsx)("strong",{children:"Date: "})," ",M.date]})}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("span",{className:"col-6",children:[Object(i.jsx)("strong",{children:"Email: "})," ",e.email]}),Object(i.jsxs)("span",{className:"col-6",children:[Object(i.jsx)("strong",{children:"Phone Number: "})," ",e.phoneNumber]}),Object(i.jsxs)("span",{className:"col-6",children:[Object(i.jsx)("strong",{children:"Address: "})," ",e.address]}),Object(i.jsxs)("span",{className:"col-6",children:[Object(i.jsx)("strong",{children:"City: "})," ",e.city]}),Object(i.jsxs)("span",{className:"col-6",children:[Object(i.jsx)("strong",{children:"State: "})," ",e.state]}),Object(i.jsxs)("span",{className:"col-6",children:[Object(i.jsx)("strong",{children:"Zip Code: "})," ",e.zipCode]})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("span",{className:"col-6",children:[Object(i.jsx)("strong",{children:"Laundry Cost: "}),X.format(t)]}),Object(i.jsxs)("span",{className:"col-6",children:[Object(i.jsx)("strong",{children:"Dry Cleaning Cost: "}),X.format(c)]}),Object(i.jsxs)("span",{className:"col-6",children:[Object(i.jsx)("strong",{children:"Cost for Folding: "}),X.format(r)]}),Object(i.jsxs)("span",{className:"col-6",children:[Object(i.jsx)("strong",{children:"Cost for Delivery: "}),X.format(a)]})]}),Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("span",{className:"d-flex justify-content-end",children:Object(i.jsxs)("strong",{children:["Total Costs:",X.format(n)]})})})]})})}),M.date,n,e.zipCode])})),n?s.sort(((e,t)=>e[2]-t[2])):o?s.sort(((e,t)=>t[2]-e[2])):h&&s.sort(((t,s)=>Math.abs(t[3]-e.userDetails.zipCode)-Math.abs(s[3]-e.userDetails.zipCode))),s.forEach((e=>{t.push(e[0])})),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Request Laundry Service"}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-4",children:Object(i.jsx)(W,{laundryRequestFetch:async e=>{const t=await fetch("/api/laundryRequest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});J=await t.json(),M=e,a(!r)},providerCards:s,setSortPriceLowHighFunc:function(){l(!0),d(!1),b(!1)},setSortPriceHighLowFunc:function(){l(!1),d(!0),b(!1)},setSortDistanceFunc:function(){l(!1),d(!1),b(!0)}})}),Object(i.jsx)("div",{className:"col-8",children:t.length>0?t:Object(i.jsx)("h2",{className:"d-flex h-100 align-items-center justify-content-center",children:"Go have fun! Let us do the chores! Request Today!!"})})]})]})};var K=({serviceItem:e,modifyServiceDisplay:t,onServiceEdit:s,deleteService:r,submitEdit:a,services:n})=>{let[l,o]=Object(c.useState)(new Set);Object(c.useEffect)((()=>{let e=new Set(["Wash","Dry Clean","Fold","Delivery"]);d(e),console.log("SERVICES",e),o(e)}),[]);const d=e=>{n.forEach((t=>{e.has(t.service)&&e.delete(t.service)}))},j=t=>{const c=t.target;let r;r="perPound"===c.name?"true"!==c.value:c.value,s(e.serviceID,c.name,r)};return Object(i.jsxs)("form",{className:"service",onSubmit:s=>{s.preventDefault(),""!==e.service&&(t(e.serviceID,"showEdit"),console.log("SUBMIT",e),e.showEdit=!1,a(e))},children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"service",children:Object(i.jsx)("span",{children:"Select Service:"})}),Object(i.jsx)("select",{name:"service",onChange:j,value:e.service,children:(()=>{let e=new Set;return e.add(Object(i.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select a service"})),l.forEach((t=>{e.add(Object(i.jsx)("option",{value:t,children:t}))})),e})()}),Object(i.jsx)("div",{className:"d-flex justify-content-center",children:(()=>{let t;return"Dry Clean"!==e.service&&"Wash"!==e.service||(t=e.perPound?Object(i.jsxs)("div",{className:"form-check form-switch",children:[Object(i.jsx)("input",{className:"form-check-input",type:"checkbox",name:"perPound",id:e.perPound?"flexSwitchCheckChecked":"flexSwitchCheckDefault",value:e.perPound,onChange:j,checked:!0}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:e.perPound?"flexSwitchCheckChecked":"flexSwitchCheckDefault",children:"Charge per Pound?"})]}):Object(i.jsxs)("div",{className:"form-check form-switch",children:[Object(i.jsx)("input",{className:"form-check-input",type:"checkbox",name:"perPound",id:e.perPound?"flexSwitchCheckChecked":"flexSwitchCheckDefault",value:e.perPound,onChange:j}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:e.perPound?"flexSwitchCheckChecked":"flexSwitchCheckDefault",children:"Charge per Pound?"})]})),t})()})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"",children:"Fee:"}),Object(i.jsx)("input",{type:"number",step:"0.01",min:"0",max:"100",name:"price",placeholder:e.price,onChange:j})]}),Object(i.jsxs)("div",{className:"col-12 d-flex justify-content-center",children:[Object(i.jsx)("button",{type:"submit",value:"Save",className:"editBtn",children:"Save"}),Object(i.jsx)("button",{className:"deleteBtn",onClick:()=>{r(e.serviceID),t(e.serviceID,"showEdit")},children:"Delete"})]})]},e.serviceID)};s(22);var Y=({serviceItem:e,modifyServiceDisplay:t,id:s})=>{const c=s=>{t(e.serviceID,"showDetails")};return Object(i.jsx)("span",{className:"col-4 d-flex justify-content-center align-items-center",children:e.showDetails?Object(i.jsx)("button",{id:s,onClick:c,className:"collapseBtn",children:"\u2212"}):Object(i.jsx)("button",{id:s,onClick:c,className:"collapseBtn",children:"+"})})};var G=({serviceItem:e,modifyServiceDisplay:t,id:s,deleteService:c,setServices:r})=>{const a=Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-7 pl-0",children:Object(i.jsxs)("h6",{children:["Cost: $",Object(i.jsx)("span",{children:e.price})]})}),Object(i.jsx)("div",{className:"col-5 d-flex justify-content-end",children:e.perPound&&Object(i.jsx)("h6",{children:"Per lb."})})]}),Object(i.jsx)("div",{className:"row ",children:Object(i.jsxs)("div",{className:"col-12 d-flex justify-content-center",children:[Object(i.jsx)("button",{className:"editBtn",onClick:()=>{t(e.serviceID,"showEdit")},children:"Edit"}),Object(i.jsx)("button",{className:"deleteBtn",onClick:()=>{c(e.serviceID),t(e.serviceID,"showEdit")},children:"Delete"})]})})]});return Object(i.jsxs)("div",{className:"service row",children:[Object(i.jsx)("h5",{className:"serviceTitle col-8 pb-0",children:Object(i.jsx)("span",{children:e.service})}),Object(i.jsx)(Y,{serviceItem:e,modifyServiceDisplay:t,id:s}),e.showDetails&&a]},e.serviceID)};var $=({services:e,setServices:t,modifyServiceDisplay:s,onServiceEdit:c})=>{const r=s=>{e.forEach(((t,c)=>{t.serviceID===s&&e.splice(c,1),n(e)}));let c=e.map(((e,t)=>e.serviceID=t));t(c)},a=async t=>{await n([...e,t])},n=async e=>{console.log("Posting",e);await fetch("/api/updateServices",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:localStorage.email,services:e})})},l=e.map(((t,n)=>t.showEdit?Object(i.jsx)(K,{services:e,serviceItem:t,modifyServiceDisplay:s,onServiceEdit:c,deleteService:r,submitEdit:a},t.serviceID):Object(i.jsx)(G,{id:n,serviceItem:t,modifyServiceDisplay:s,deleteService:r},t.serviceID)));return Object(i.jsxs)("div",{children:[l,Object(i.jsxs)("div",{children:[Object(i.jsxs)("small",{children:[" Services Remaining: ",4-e.length]})," "]}),Object(i.jsxs)("div",{className:"d-flex justify-content-center",children:[e.length<4&&Object(i.jsx)("button",{onClick:()=>{console.log("ID =>",e.length);const s={service:"",price:0,perPound:!1,serviceID:e.length,showDetails:!1,showEdit:!0};t([...e,s])},children:"Add Service"})," "]})]})};var Q=()=>{let[e,t]=Object(c.useState)([]);return Object(c.useEffect)((()=>{(async()=>{let e=await(async e=>{const t=await fetch("/api/getServices",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})});return await t.json()})(localStorage.email);t(e)})()}),[]),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Provider Page"}),Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"serviceDetails col-3",children:[Object(i.jsx)("h3",{children:"Services By You:"}),Object(i.jsx)($,{services:e,modifyServiceDisplay:(s,c)=>{let r=e.map((e=>{let t;return t=e.serviceID===s?{...e,[c]:!e[c]}:e,t}));t(r)},onServiceEdit:(s,c,r)=>{let a=e.map((e=>{let t;return t=e.serviceID===s?{...e,[c]:r}:e,t}));t(a)},setServices:t})]})})]})})};var ee=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Proivder Details Page"})})};var te=function(){return Object(i.jsx)(q,{children:Object(i.jsxs)(h.c,{children:[Object(i.jsx)(h.a,{path:"/",element:Object(i.jsx)(u,{})}),Object(i.jsx)(h.a,{path:"/SignUp",element:Object(i.jsx)(y,{})}),Object(i.jsx)(h.a,{path:"/Login",element:Object(i.jsx)(S,{})}),Object(i.jsx)(h.a,{path:"/signUpProviders",element:Object(i.jsx)(D,{})}),Object(i.jsx)(h.a,{path:"/signUpCustomers",element:Object(i.jsx)(L,{})}),Object(i.jsx)(h.a,{path:"/CustomerDetailspage",element:Object(i.jsx)(B,{})}),Object(i.jsx)(h.a,{path:"/CustomerRequestService",element:Object(i.jsx)(Z,{})}),Object(i.jsx)(h.a,{path:"/ProviderPage",element:Object(i.jsx)(Q,{})}),Object(i.jsx)(h.a,{path:"/ProviderDetailspage",element:Object(i.jsx)(ee,{})}),Object(i.jsx)(h.a,{path:"/redirectHome",element:Object(i.jsx)(m,{})})]})})};a.a.render(Object(i.jsx)(d,{children:Object(i.jsx)(n.a,{children:Object(i.jsx)(te,{})})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.84bf1d86.chunk.js.map