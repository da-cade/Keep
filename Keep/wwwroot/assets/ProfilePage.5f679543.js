import{u as b,l as y,g as k,m as Z,c as r,a as _,o as c,b as d,d as e,t as m,s as V,F as v,z as P,e as u,n as p,p as x,i as C,w}from"./vendor.be7dbad9.js";import{a as f,A as s,_ as K,b as B,l as S,P as F}from"./index.2d03d0ce.js";class I{async getProfile(o){const l=await f.get("api/profiles/"+o);s.activeProfile=l.data}async getKeepsByProfile(o){const l=await f.get(`api/profiles/${o}/keeps`);s.profileKeeps=l.data}async getVaultsByProfile(o){const l=await f.get(`api/profiles/${o}/vaults`);s.vaults=l.data}async getVaultkeepsByProfile(o){const l=await f.get(`api/profiles/${o}/vaultkeeps`);s.vaultkeeps=l.data}}const h=new I;const N={setup(){const t=b(),o=y(),l=k(!1);return Z(async()=>{try{t.name=="ProfilePage"&&(await h.getKeepsByProfile(t.params.id),await h.getProfile(t.params.id),t.params.id!=s.account.id?await h.getVaultsByProfile(t.params.id):await B.getMyVaults(),await h.getVaultkeepsByProfile(t.params.id))}catch(a){S.error(a),F.toast(a.message,"error")}l.value=!0}),{route:t,router:o,vaults:r(()=>s.account.id==t.params.id?s.myVaults:s.vaults),account:r(()=>s.account),authenticated:r(()=>s.account.id==t.params.id),keeps:r(()=>s.profileKeeps),profile:r(()=>s.activeProfile),vaultCount:r(()=>s.vaults.length),keepCount:r(()=>s.profileKeeps.length),goToVaultPage(a){s.activeVault=a,s.profileKeeps=[],o.push({name:"VaultPage",params:{id:a.id}})}}}},i=t=>(x("data-v-61a32129"),t=t(),C(),t),j={class:"container-fluid"},E={class:"row"},A={class:"col-12"},R={class:"d-flex"},T=["src"],z={class:"d-flex flex-column ms-3 profileInfo"},D=i(()=>e("br",null,null,-1)),q={class:"row p-2 pe-0"},G={class:"d-flex align-items-center"},J=i(()=>e("h2",{class:"mx-4"},"Vaults",-1)),O={key:0,class:"mdi mdi-plus text-kpr-green selectable","data-bs-toggle":"modal","data-bs-target":"#newVaultModal",title:"Create Vault"},Q=["onClick"],U={class:"vaultContent selectable d-flex align-items-end m-2"},W=["src"],X={key:1,class:"mb-1 ms-1",width:"60",height:"69",viewBox:"0 0 57 69",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Y=i(()=>e("path",{d:"M16.353 13.5144V58.2019H10.5718V13.5144H16.353ZM47.7905 13.5144L27.6655 34.6082L48.228 58.2019H40.1968L21.978 36.7019V33.2019L40.478 13.5144H47.7905Z",fill:"#636E72"},null,-1)),$=i(()=>e("path",{d:"M16.353 13.5144H17.353V12.5144H16.353V13.5144ZM16.353 58.2019V59.2019H17.353V58.2019H16.353ZM10.5718 58.2019H9.57178V59.2019H10.5718V58.2019ZM10.5718 13.5144V12.5144H9.57178V13.5144H10.5718ZM47.7905 13.5144L48.5141 14.2047L50.1267 12.5144H47.7905V13.5144ZM27.6655 34.6082L26.942 33.9179L26.3125 34.5777L26.9117 35.2652L27.6655 34.6082ZM48.228 58.2019V59.2019H50.426L48.9819 57.5449L48.228 58.2019ZM40.1968 58.2019L39.4339 58.8484L39.7334 59.2019H40.1968V58.2019ZM21.978 36.7019H20.978V37.0686L21.2151 37.3484L21.978 36.7019ZM21.978 33.2019L21.2493 32.5171L20.978 32.8058V33.2019H21.978ZM40.478 13.5144V12.5144H40.0455L39.7493 12.8296L40.478 13.5144ZM15.353 13.5144V58.2019H17.353V13.5144H15.353ZM16.353 57.2019H10.5718V59.2019H16.353V57.2019ZM11.5718 58.2019V13.5144H9.57178V58.2019H11.5718ZM10.5718 14.5144H16.353V12.5144H10.5718V14.5144ZM47.067 12.8241L26.942 33.9179L28.3891 35.2985L48.5141 14.2047L47.067 12.8241ZM26.9117 35.2652L47.4742 58.8589L48.9819 57.5449L28.4194 33.9511L26.9117 35.2652ZM48.228 57.2019H40.1968V59.2019H48.228V57.2019ZM40.9597 57.5554L22.741 36.0554L21.2151 37.3484L39.4339 58.8484L40.9597 57.5554ZM22.978 36.7019V33.2019H20.978V36.7019H22.978ZM22.7068 33.8867L41.2068 14.1992L39.7493 12.8296L21.2493 32.5171L22.7068 33.8867ZM40.478 14.5144H47.7905V12.5144H40.478V14.5144Z",fill:"#636E72"},null,-1)),ee=i(()=>e("rect",{x:"2",y:"2.2019",width:"52.537",height:"64.7981",stroke:"#636E72","stroke-width":"4"},null,-1)),te=[Y,$,ee],se={class:"vaultInfo d-flex w-100 justify-content-between align-items-end"},ae={class:"ms-auto text-light ps-1"},oe=i(()=>e("br",null,null,-1)),le={class:"row"},ie={class:"col-12 ms-0 flex-column d-flex align-items-center justify-content-center"},ne={class:"d-flex w-100 align-items-center align-self-start ms-4"},re=i(()=>e("h2",{class:"me-2"},"Keeps",-1)),ce={key:0,class:"mdi mdi-plus text-kpr-green selectable","data-bs-toggle":"modal","data-bs-target":"#newKeepModal",title:"Create Keep"},de=i(()=>e("h3",null,"Create a New Vault",-1)),ue={class:"d-flex justify-content-around"},pe=i(()=>e("button",{class:"btn btn-danger","data-bs-toggle":"modal","data-bs-target":"#newVaultModal",title:"Close Form"}," Close ",-1)),_e=i(()=>e("h2",null,"Create a New Keep",-1));function me(t,o,l,a,fe,he){const L=_("Keepfeed"),M=_("CreateVaultForm"),g=_("FormModal"),H=_("CreateKeepForm");return c(),d(v,null,[e("div",j,[e("div",E,[e("div",A,[e("div",R,[e("img",{class:"profilePic m-2",src:a.profile.picture,alt:"profile picture"},null,8,T),e("div",z,[e("h1",null,m(a.profile.name),1),e("h4",null,"Vaults: "+m(a.vaultCount),1),e("h4",null,"Keeps: "+m(a.keepCount),1)])])])]),D,e("div",q,[e("div",G,[J,a.authenticated?(c(),d("i",O)):V("",!0)]),(c(!0),d(v,null,P(a.vaults,n=>(c(),d("div",{class:"col-md-2 col-xs-4",key:n.id,onClick:w(ge=>a.goToVaultPage(n),["stop"])},[e("div",U,[n.coverImg?(c(),d("img",{key:0,src:n.coverImg,class:"vaultImg img-fluid selectable",alt:"vault cover image"},null,8,W)):(c(),d("svg",X,te)),e("div",se,[e("h6",ae,m(n.name),1)])])],8,Q))),128))]),oe,e("div",le,[e("div",ie,[e("div",ne,[re,a.authenticated?(c(),d("i",ce)):V("",!0)]),u(L,{keeps:a.keeps},null,8,["keeps"])])])]),u(g,{id:"newVaultModal"},{"modal-header-slot":p(()=>[de]),"modal-body-slot":p(()=>[u(M)]),default:p(()=>[e("div",ue,[e("button",{class:"btn btn-success",type:"submit",title:"Submit New Vault",onSubmit:o[0]||(o[0]=w((...n)=>t.createVault&&t.createVault(...n),["prevent"]))}," Create ",32),pe])]),_:1}),u(g,{id:"newKeepModal"},{"modal-header-slot":p(()=>[_e]),"modal-body-slot":p(()=>[u(H)]),_:1})],64)}var we=K(N,[["render",me],["__scopeId","data-v-61a32129"]]);export{we as default};
