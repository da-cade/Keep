import{r as ke,c as D,a as y,o as c,b as d,d as s,e as f,F as M,f as be,S as Q,g as H,M as ee,w as $,h as L,v as A,p as K,i as I,j as we,k as j,u as q,l as B,m as R,t as k,n as b,q as U,s as x,K as Ve,T as z,x as Y,y as Le,z as te,A as xe,B as Me,C as He,D as Ke,E as Ie,G as Te}from"./vendor.be7dbad9.js";const De=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=t(r);fetch(r.href,l)}};De();const i=ke({user:{},account:{},keeps:[],myVaults:[],vaults:[],vaultkeeps:[],profiles:[],profileKeeps:[],profileVaults:[],activeProfile:{},activeKeep:{},activeVault:{}});var w=(o,e)=>{for(const[t,a]of e)o[t]=a;return o};const Pe={name:"App",setup(){return{appState:D(()=>i)}}};function Ee(o,e,t,a,r,l){const n=y("Navbar"),_=y("router-view");return c(),d(M,null,[s("header",null,[f(n)]),s("main",null,[f(_)])],64)}var Ce=w(Pe,[["render",Ee]]);const oe=window.location.origin.includes("localhost"),ae=oe?"https://localhost:5001":"",Se="dev-nw8rrpf8.us.auth0.com",$e="AawJXZhjMzi3kn1PlJl0roYxpoYd74E1",Ae="http://dyldev.com",u=be.create({baseURL:ae,timeout:8e3});class Ze{async getAllKeeps(){const e=await u.get("api/keeps");i.keeps=e.data}async getKeep(e){const t=await u.get(`api/keeps/${e}`);i.activeKeep=t.data}async createKeep(e){const t=await u.post("api/keeps",e);i.keeps.unshift(t.data),i.profileKeeps.unshift(t.data)}async editKeep(e){const t=await u.put(`api/keeps/${e.id}`,e),a=i.keeps.findIndex(r=>r.id==e.id);i.keeps=i.keeps.splice(a,1,t.data)}async deleteKeep(e){await u.delete(`api/keeps/${e}`),i.keeps=i.keeps.filter(t=>t.id!=e)}}const N=new Ze;function Z(o,e){if(oe)console[o](`[${o}] :: ${new Date().toLocaleTimeString()} :: `,...e);else{switch(o){case"log":case"assert":return}console[o](`[${o}] :: ${new Date().toLocaleTimeString()} :: `,...e)}}const p={log(){Z("log",arguments)},error(){Z("error",arguments)},warn(){Z("warn",arguments)},assert(){Z("assert",arguments)},trace(){Z("trace",arguments)}};class v{static async confirm(e="Are you sure?",t="You won't be able to revert this!",a="warning",r="Yes, delete it!"){try{return!!(await Q.fire({title:e,text:t,icon:a,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:r})).isConfirmed}catch{return!1}}static toast(e="Warning!",t="warning",a="top-end",r=3e3,l=!0){Q.fire({title:e,icon:t,position:a,timer:r,timerProgressBar:l,toast:!0,showConfirmButton:!1})}static error(e){var t;if(e.isAxiosError){const{response:a}=e;this.toast(((t=a.data.error)==null?void 0:t.message)||a.data.message,"error")}else this.toast(e.message||e,"error")}static success(e="Success!"){this.toast(e,"success")}}const Oe={setup(){const o=H({});return{formData:o,async createKeep(){try{o.creatorId=i.account.id,o.views=1,o.kept=0,o.shares=0,await N.createKeep(o.value),o.value={},ee.getOrCreateInstance(document.getElementById("newKeepModal")).hide()}catch(e){p.error(e),v.toast(e.message,"error")}}}}},O=o=>(K("data-v-26ea5c46"),o=o(),I(),o),Re={class:"formContent p-1"},Ne={class:"d-flex justify-content-between my-2"},Fe=O(()=>s("label",{class:"visually-hidden form-label",for:""},"Name",-1)),je={class:"d-flex justify-content-between my-2"},qe=O(()=>s("label",{class:"visually-hidden form-label",for:""},"Image",-1)),Be={class:"d-flex justify-content-between my-2"},Ue=O(()=>s("label",{class:"visually-hidden form-label",for:""},"Description",-1)),ze=O(()=>s("div",{class:"d-flex justify-content-between my-2"},[s("label",{class:"visually-hidden form-label",for:""},"Tags"),s("input",{type:"text",class:"form-control",placeholder:"Tags..."})],-1)),Ye=O(()=>s("div",{class:"d-flex justify-content-end"},[s("button",{class:"btn btn-success",type:"submit",form:"newKeepForm"}," Create ")],-1));function Ge(o,e,t,a,r,l){return c(),d(M,null,[s("div",Re,[s("form",{onSubmit:e[3]||(e[3]=$((...n)=>a.createKeep&&a.createKeep(...n),["prevent"])),id:"newKeepForm"},[s("div",Ne,[Fe,L(s("input",{class:"form-control","onUpdate:modelValue":e[0]||(e[0]=n=>a.formData.name=n),type:"text",placeholder:"Name...",required:"",maxlength:"30"},null,512),[[A,a.formData.name]])]),s("div",je,[qe,L(s("input",{class:"form-control","onUpdate:modelValue":e[1]||(e[1]=n=>a.formData.img=n),type:"text",placeholder:"Add an Image...",required:"",maxlength:"400"},null,512),[[A,a.formData.img]])]),s("div",Be,[Ue,L(s("textarea",{class:"form-control","onUpdate:modelValue":e[2]||(e[2]=n=>a.formData.description=n),placeholder:"Description...",type:"text",required:"",maxlength:"500"},null,512),[[A,a.formData.description]])]),ze],32)]),Ye],64)}var We=w(Oe,[["render",Ge],["__scopeId","data-v-26ea5c46"]]),se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:We});class Xe{async getAllVaults(){const e=await u.get("api/vaults");i.vaults=e.data}async getVault(e){const t=await u.get(`api/vaults/${e}`);i.activeVault=t.data}async createVault(e,t){const a=await u.post("api/vaults",e);return i.vaults.unshift(a.data),t&&i.myVaults.unshift(a.data),a.data.id}async editVault(e){const t=await u.put(`api/vaults/${e.id}`,e),a=i.vaults.findIndex(r=>r.id==e.id);i.vaults=i.vaults.splice(a,1,t.data)}async deleteVault(e){await u.delete(`api/vaults/${e}`),i.vaults=i.vaults.filter(t=>t.id!=e)}}const Je=new Xe;const Qe={setup(){const o=H({isPrivate:!1});return{formData:o,async createVault(){try{o.creatorId=i.account.id;const e=await Je.createVault(o.value,"myVaults");o.value={},ee.getOrCreateInstance(document.getElementById("newVaultModal")).hide()}catch(e){p.error(e),v.toast(e.message,"error")}},async addToVault(e){try{let t={};t.creatorId=i.account.id,t.vaultId=e,t.keepId=props.keep.id,await vaultKeepsService.create(t)}catch(t){p.error(t),v.toast(t.message,"error")}}}}},F=o=>(K("data-v-47b37f48"),o=o(),I(),o),et={class:"formContent p-1"},tt={class:"d-flex justify-content-between my-2"},ot=F(()=>s("label",{class:"visually-hidden form-label",for:""},"Name",-1)),at={class:"d-flex justify-content-between my-2"},st=F(()=>s("label",{class:"visually-hidden form-label",for:""},"Description",-1)),nt={class:"form-check my-2"},rt=F(()=>s("label",{class:"form-check-label",for:""}," Make it Private? ",-1)),it=F(()=>s("div",{class:"d-flex justify-content-end"},[s("button",{class:"btn btn-success",type:"submit",form:"newVaultForm"}," Create ")],-1));function lt(o,e,t,a,r,l){return c(),d(M,null,[s("div",et,[s("form",{id:"newVaultForm",onSubmit:e[3]||(e[3]=$((...n)=>a.createVault&&a.createVault(...n),["prevent"]))},[s("div",tt,[ot,L(s("input",{"onUpdate:modelValue":e[0]||(e[0]=n=>a.formData.name=n),class:"form-control",type:"text",placeholder:"Name...",required:"",maxlength:"30"},null,512),[[A,a.formData.name]])]),s("div",at,[st,L(s("textarea",{"onUpdate:modelValue":e[1]||(e[1]=n=>a.formData.description=n),class:"form-control",placeholder:"Description...",type:"text",required:"",maxlength:"500"},null,512),[[A,a.formData.description]])]),s("div",nt,[L(s("input",{"onUpdate:modelValue":e[2]||(e[2]=n=>a.formData.isPrivate=n),class:"form-check-input",type:"checkbox",value:"",id:""},null,512),[[we,a.formData.isPrivate]]),rt])],32)]),it],64)}var ct=w(Qe,[["render",lt],["__scopeId","data-v-47b37f48"]]),ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ct});const dt={setup(){return{}}},ut=o=>(K("data-v-25ac4e66"),o=o(),I(),o),_t={class:"modal fade",tabindex:"-1",role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"},pt={class:"modal-dialog d-flex w-100 justify-content-center",role:"document"},mt={class:"modal-content"},ft={class:"modal-header"},vt=ut(()=>s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1)),ht={class:"modal-body"};function gt(o,e,t,a,r,l){return c(),d("div",_t,[s("div",pt,[s("div",mt,[s("div",ft,[j(o.$slots,"modal-header-slot",{},void 0,!0),vt]),s("div",ht,[j(o.$slots,"modal-body-slot",{},void 0,!0)])])])])}var yt=w(dt,[["render",gt],["__scopeId","data-v-25ac4e66"]]),re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:yt});const kt={props:{keep:{type:Object,required:!0}},setup(o){const e=q(),t=B(),a=H(!1);return R(()=>{e.params.keepId==o.keep.id&&(a.value=!0),e.params.keepId!=o.keep.id&&(a.value=!1,i.activeKeep={})}),{route:e,showModal:a,async goToDetails(){try{t.push({name:e.name=="Home"?"KeepDetails":e.name=="ProfilePage"?"ProfileKeepDetails":"VaultKeepDetails",params:{keepId:o.keep.id}})}catch(r){p.error(r),v.toast(r.message,"error")}}}}},bt={class:"keepContent d-flex align-items-end"},wt=["src","alt"],Vt={class:"keepInfo d-flex w-100 justify-content-between align-items-end"},Lt=["src"];function xt(o,e,t,a,r,l){var T;const n=y("router-view"),_=y("Modal");return c(),d(M,null,[s("div",bt,[s("img",{src:t.keep.img,class:"img-fluid keepImg selectable",onClick:e[0]||(e[0]=(...V)=>a.goToDetails&&a.goToDetails(...V)),alt:t.keep.name},null,8,wt),s("div",Vt,[s("h5",{id:"cow",class:"text-light ps-1",onClick:e[1]||(e[1]=(...V)=>a.goToDetails&&a.goToDetails(...V))},k(t.keep.name),1),s("img",{src:(T=t.keep.creator)==null?void 0:T.picture,class:"userImg rounded-circle",onClick:e[2]||(e[2]=$((...V)=>o.goToProfile&&o.goToProfile(...V),["stop"])),alt:"user image"},null,8,Lt)])]),f(z,{name:"modalFade"},{default:b(()=>[(c(),U(Ve,null,[a.showModal?(c(),U(_,{key:0,id:"keepDetails-"+t.keep.id,showModal:a.showModal},{"modal-content-slot":b(()=>[f(n,{keep:t.keep},null,8,["keep"])]),_:1},8,["id","showModal"])):x("",!0)],1024))]),_:1})],64)}var Mt=w(kt,[["render",xt],["__scopeId","data-v-00d76b6e"]]),ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Mt});class Ht{async getKeepsByVault(e){const t=await u.get(`api/vaults/${e}/keeps`);console.log(t.data),i.keeps=t.data}async create(e){const t=await u.post("api/vaultkeeps",e);i.keeps.unshift(i.keeps.find(a=>a.id==e.keepId)),i.vaultkeeps.unshift(t.data)}async delete(e){await u.delete("api/vaultkeeps/"+e),i.vaultkeeps=i.vaultkeeps.filter(t=>t.id!=e)}}const le=new Ht;const Kt={props:{keep:{type:Object,required:!0}},setup(o){const e=q(),t=B(),a=H();async function r(l){try{let n={};n.creatorId=i.account.id,n.vaultId=l,n.keepId=o.keep.id,await le.create(n),v.toast("Added","success","top-end",2e3,!1)}catch(n){p.error(n),v.toast(n.message,"error")}}return R(()=>{a.value&&(a.value=="New Vault"?a.value={}:r(a.value))}),Y(async()=>{await N.getKeep(o.keep.id)}),{selected:a,route:e,router:t,account:D(()=>i.account),authenticated:D(()=>i.account.id==o.keep.creatorId),myVaults:D(()=>i.myVaults),async deleteKeep(){try{await v.confirm()&&(await N.deleteKeep(o.keep.id),t.go(-1))}catch(l){p.error(l),v.toast(l.message,"error")}},async removeFromVault(){try{debugger;await le.delete(o.keep.vaultKeepId),t.go(-1),v.toast("Removed Keep from vault","success","top-end",2e3,!1)}catch(l){p.error(l),v.toast(l.message,"error")}}}}},P=o=>(K("data-v-6bcf6952"),o=o(),I(),o),It={class:"row g-0 h-100"},Tt={class:"col-sm-12 col-md-6 pe-0 keepDetails"},Dt={class:"keepDetails p-3"},Pt=["src"],Et={class:"col-sm-12 col-md-6 ps-0 keepDetails"},Ct={class:"keepDetails d-flex flex-column align-items-center justify-content-between p-3"},St={class:"d-flex icons"},$t=P(()=>s("i",{class:"mdi mdi-eye me-1",title:"Views"},null,-1)),At={class:"me-2"},Zt={title:"Keeps"},Ot=P(()=>s("svg",{class:"me-1",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M7.42676 5.22461V15H6.16211V5.22461H7.42676ZM14.3037 5.22461L9.90137 9.83887L14.3994 15H12.6426L8.65723 10.2969V9.53125L12.7041 5.22461H14.3037Z",fill:"#55EFC4"}),s("path",{d:"M7.42676 5.22461H8.42676V4.22461H7.42676V5.22461ZM7.42676 15V16H8.42676V15H7.42676ZM6.16211 15H5.16211V16H6.16211V15ZM6.16211 5.22461V4.22461H5.16211V5.22461H6.16211ZM14.3037 5.22461L15.0272 5.91491L16.6399 4.22461H14.3037V5.22461ZM9.90137 9.83887L9.17784 9.14857L8.54832 9.80839L9.14749 10.4959L9.90137 9.83887ZM14.3994 15V16H16.5974L15.1533 14.343L14.3994 15ZM12.6426 15L11.8797 15.6465L12.1792 16H12.6426V15ZM8.65723 10.2969H7.65723V10.6636L7.8943 10.9434L8.65723 10.2969ZM8.65723 9.53125L7.92848 8.84646L7.65723 9.13513V9.53125H8.65723ZM12.7041 5.22461V4.22461H12.2716L11.9754 4.53982L12.7041 5.22461ZM6.42676 5.22461V15H8.42676V5.22461H6.42676ZM7.42676 14H6.16211V16H7.42676V14ZM7.16211 15V5.22461H5.16211V15H7.16211ZM6.16211 6.22461H7.42676V4.22461H6.16211V6.22461ZM13.5802 4.53431L9.17784 9.14857L10.6249 10.5292L15.0272 5.91491L13.5802 4.53431ZM9.14749 10.4959L13.6455 15.657L15.1533 14.343L10.6552 9.18185L9.14749 10.4959ZM14.3994 14H12.6426V16H14.3994V14ZM13.4055 14.3535L9.42015 9.65039L7.8943 10.9434L11.8797 15.6465L13.4055 14.3535ZM9.65723 10.2969V9.53125H7.65723V10.2969H9.65723ZM9.38597 10.216L13.4328 5.9094L11.9754 4.53982L7.92848 8.84646L9.38597 10.216ZM12.7041 6.22461H14.3037V4.22461H12.7041V6.22461Z",fill:"#55EFC4"}),s("rect",{x:"1",y:"1",width:"18",height:"18",stroke:"#55EFC4","stroke-width":"2"})],-1)),Rt={class:"me-2"},Nt=P(()=>s("i",{class:"mdi mdi-share-variant me-1",title:"Shares"},null,-1)),Ft={class:""},jt={class:"d-flex flex-column align-items-center text-center w-100"},qt=P(()=>s("hr",{class:"w-75"},null,-1)),Bt={key:0,class:"buttonRow"},Ut=P(()=>s("option",{disabled:"",value:""},"Add to Vault",-1)),zt=["value"],Yt={key:3,class:"p-0 rounded slim"},Gt=["title"],Wt=["src"],Xt={key:0,class:"p-2 mt-1 text-light lighten-30"},Jt={key:1,class:"p-2 text-dark"},Qt={key:4,class:"p-0 rounded"},eo={key:0,class:"d-flex slim"},to=["src"],oo={class:"p-2 text-light lighten-30 mt-1"},ao={key:1},so=P(()=>s("h2",null,"Create a New Vault",-1));function no(o,e,t,a,r,l){var V;const n=y("router-link"),_=y("CreateVaultForm"),T=y("FormModal");return c(),d(M,null,[s("div",It,[s("div",Tt,[s("div",Dt,[s("img",{src:t.keep.img,class:"keepImg h-100 img-fluid rounded",alt:""},null,8,Pt)])]),s("div",Et,[s("div",Ct,[s("div",St,[s("div",null,[$t,s("span",At,k(t.keep.views+1),1)]),s("div",Zt,[Ot,s("span",Rt,k(t.keep.kept),1)]),s("div",null,[Nt,s("span",Ft,k(t.keep.shares),1)])]),s("div",jt,[s("h1",null,k(t.keep.name),1),s("h5",null,k(t.keep.description),1),qt]),a.account.id?(c(),d("div",Bt,[a.route.name!="VaultKeepDetails"?L((c(),d("select",{key:0,"onUpdate:modelValue":e[0]||(e[0]=m=>a.selected=m),class:"rounded"},[Ut,(c(!0),d(M,null,te(a.myVaults,m=>(c(),d("option",{key:m,value:m.id},k(m.name),9,zt))),128))],512)),[[Le,a.selected]]):x("",!0),a.route.name!="VaultKeepDetails"&&a.authenticated?(c(),d("i",{key:1,class:"mdi mdi-delete selectable rounded mt-auto",title:"Delete this Keep",onClick:e[1]||(e[1]=$(m=>a.deleteKeep(),["stop"]))})):x("",!0),a.route.name=="VaultKeepDetails"&&a.authenticated?(c(),d("button",{key:2,class:"btn selectable shadow",onClick:e[2]||(e[2]=$(m=>a.removeFromVault(),["stop"])),title:"Remove Keep from this Vault"}," Remove from Vault ")):x("",!0),t.keep.creatorId!=((V=a.account)==null?void 0:V.id)?(c(),d("div",Yt,[f(n,{to:{name:"ProfilePage",params:{id:t.keep.creatorId}}},{default:b(()=>{var m,C,S,X,J;return[((m=t.keep.creator)==null?void 0:m.picture)?(c(),d("div",{key:0,class:"d-flex slim",title:"Go to "+((C=t.keep.creator)==null?void 0:C.name)+"'s profile"},[s("img",{src:(S=t.keep.creator)==null?void 0:S.picture,alt:"account photo",class:"accountImg"},null,8,Wt),a.route.name!="VaultKeepDetails"?(c(),d("span",Xt,k((X=t.keep.creator)==null?void 0:X.name),1)):(c(),d("span",Jt,k((J=t.keep.creator)==null?void 0:J.name),1))],8,Gt)):x("",!0)]}),_:1},8,["to"])])):(c(),d("div",Qt,[f(n,{to:{name:"ProfilePage",params:{id:t.keep.creatorId}}},{default:b(()=>{var m,C,S;return[((m=t.keep.creator)==null?void 0:m.picture)?(c(),d("div",eo,[s("img",{src:(C=t.keep.creator)==null?void 0:C.picture,alt:"account photo",class:"accountImg"},null,8,to),s("span",oo,k((S=t.keep.creator)==null?void 0:S.name),1)])):x("",!0)]}),_:1},8,["to"])]))])):(c(),d("div",ao))])])]),f(T,{id:"newVaultModal-"+t.keep.id},{"modal-title-slot":b(()=>[so]),"modal-body-slot":b(()=>[f(_,{keep:t.keep},null,8,["keep"])]),_:1},8,["id"])],64)}var ro=w(Kt,[["render",no],["__scopeId","data-v-6bcf6952"]]),ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ro});const io={props:{keeps:{type:Array,required:!0}},setup(){const o=H(!1);return Y(()=>setTimeout(()=>{o.value=!0},1500)),{loaded:o}}},lo=o=>(K("data-v-8d993734"),o=o(),I(),o),co={class:"masonryContainer mt-3"},uo={key:0,class:"hover-over rounded"},_o=lo(()=>s("svg",{style:{"margin-top":"30vh"},version:"1.1",id:"L7",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 100 100","enable-background":"new 0 0 100 100","xml:space":"preserve"},[s("path",{fill:"#fff",d:`M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3\r
  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z`},[s("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"2s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})]),s("path",{fill:"#fff",d:`M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7\r
  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z`},[s("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"-360 50 50",repeatCount:"indefinite"})]),s("path",{fill:"#fff",d:`M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5\r
  L82,35.7z`},[s("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"2s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})])],-1)),po=[_o];function mo(o,e,t,a,r,l){const n=y("Keep");return c(),d("div",co,[f(z,{name:"modalFade"},{default:b(()=>[a.loaded?x("",!0):(c(),d("div",uo,po))]),_:1}),f(z,{name:"modalFade"},{default:b(()=>[L(s("div",null,[(c(!0),d(M,null,te(t.keeps,_=>(c(),U(n,{key:_.id,keep:_},null,8,["keep"]))),128))],512),[[xe,a.loaded]])]),_:1})])}var fo=w(io,[["render",mo],["__scopeId","data-v-8d993734"]]),de=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:fo});const vo="modulepreload",ue={},ho="/",g=function(e,t){return!t||t.length===0?e():Promise.all(t.map(a=>{if(a=`${ho}${a}`,a in ue)return;ue[a]=!0;const r=a.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${l}`))return;const n=document.createElement("link");if(n.rel=r?"stylesheet":vo,r||(n.as="script",n.crossOrigin=""),n.href=a,document.head.appendChild(n),r)return new Promise((_,T)=>{n.addEventListener("load",_),n.addEventListener("error",T)})})).then(()=>e())};function go(o){switch(o){case"./components/CreateKeepForm.vue":return g(()=>Promise.resolve().then(function(){return se}),void 0);case"./components/CreateVaultForm.vue":return g(()=>Promise.resolve().then(function(){return ne}),void 0);case"./components/FormModal.vue":return g(()=>Promise.resolve().then(function(){return re}),void 0);case"./components/Keep.vue":return g(()=>Promise.resolve().then(function(){return ie}),void 0);case"./components/KeepDetails.vue":return g(()=>Promise.resolve().then(function(){return ce}),void 0);case"./components/Keepfeed.vue":return g(()=>Promise.resolve().then(function(){return de}),void 0);case"./components/Login.vue":return g(()=>Promise.resolve().then(function(){return ve}),void 0);case"./components/Modal.vue":return g(()=>Promise.resolve().then(function(){return he}),void 0);case"./components/Navbar.vue":return g(()=>Promise.resolve().then(function(){return ge}),void 0);default:return new Promise(function(e,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+o)))})}}function yo(o){switch(o){case"./pages/HomePage.vue":return g(()=>import("./HomePage.0c083a34.js"),["assets/HomePage.0c083a34.js","assets/vendor.be7dbad9.js"]);case"./pages/ProfilePage.vue":return g(()=>import("./ProfilePage.afb67f87.js"),["assets/ProfilePage.afb67f87.js","assets/ProfilePage.325ac838.css","assets/vendor.be7dbad9.js"]);case"./pages/VaultPage.vue":return g(()=>import("./VaultPage.61e7f3c9.js"),["assets/VaultPage.61e7f3c9.js","assets/vendor.be7dbad9.js"]);default:return new Promise(function(e,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+o)))})}}function G(o){return()=>yo(`./pages/${o}.vue`)}function E(o){return()=>go(`./components/${o}.vue`)}const ko=[{path:"/",name:"Home",component:G("HomePage"),children:[{path:"/keeps",name:"HomeKeepfeed",component:E("Keepfeed")},{path:"/keeps/:keepId",name:"KeepDetails",props:!0,component:E("KeepDetails")}]},{path:"/vault/:id",name:"VaultPage",component:G("VaultPage"),children:[{path:"/vault/:id/keeps",name:"VaultKeepfeed",component:E("Keepfeed")},{path:"/vault/:id/keeps/:keepId",name:"VaultKeepDetails",props:!0,component:E("KeepDetails")}]},{path:"/profile/:id",name:"ProfilePage",component:G("ProfilePage"),children:[{path:"/profile/:id/keeps",name:"ProfileKeepfeed",component:E("Keepfeed")},{path:"/profile/:id/keeps/:keepId",name:"ProfileKeepDetails",props:!0,component:E("KeepDetails")}]}],_e=Me({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:He(),routes:ko});class bo{async getAccount(){try{const e=await u.get("/account");i.account=e.data}catch(e){p.error("HAVE YOU STARTED YOUR SERVER YET???",e)}}async getMyVaults(){try{const e=await u.get("/account/vaults");i.myVaults=e.data}catch(e){p.error(e),v.toast(e.message,"error")}}}const pe=new bo,wo={connection:"connection",connected:"connected",disconnect:"disconnect",authenticate:"authenticate",authenticated:"authenticated",userConnected:"userConnected",userDisconnected:"userDisconnected",error:"error"};class Vo{constructor(e=!1,t=ae){}on(e,t){var a;return(a=this.socket)==null||a.on(e,t.bind(this)),this}onConnected(e){p.log("[SOCKET_CONNECTION]",e),this.connected=!0,this.playback()}onAuthenticated(e){p.log("[SOCKET_AUTHENTICATED]",e),this.authenticated=!0,this.playback()}authenticate(e){var t;(t=this.socket)==null||t.emit(wo.authenticate,e)}onError(e){p.error("[SOCKET_ERROR]",e)}enqueue(e,t){p.log("[ENQUEING_ACTION]",{action:e,payload:t}),this.queue.push({action:e,payload:t})}playback(){p.log("[SOCKET_PLAYBACK]");const e=[...this.queue];this.queue=[],e.forEach(t=>{this.emit(t.action,t.payload)})}emit(e,t=void 0){if(this.requiresAuth&&!this.authenticated)return this.enqueue(e,t);if(!this.connected)return this.enqueue(e,t);this.socket.emit(e,t)}}class Lo extends Vo{constructor(){super();this.on("error",this.onError)}onError(e){v.toast(e.message,"error")}}const me=new Lo,h=Ke({domain:Se,clientId:$e,audience:Ae,useRefreshTokens:!0,onRedirectCallback:o=>{_e.push(o&&o.targetUrl?o.targetUrl:window.location.pathname)}});h.on(h.AUTH_EVENTS.AUTHENTICATED,async function(){u.defaults.headers.authorization=h.bearer,u.interceptors.request.use(xo),i.user=h.user,await pe.getAccount(),me.authenticate(h.bearer),await pe.getMyVaults()});async function xo(o){if(!h.isAuthenticated)return o;const e=h.identity.exp*1e3,t=e<Date.now(),a=e<Date.now()+1e3*60*60*12;return t?await h.loginWithPopup():a&&(await h.getTokenSilently(),u.defaults.headers.authorization=h.bearer,me.authenticate(h.bearer)),o}const Mo={setup(){return{user:D(()=>i.user),account:D(()=>i.account),async login(){h.loginWithPopup()},async logout(){h.logout({returnTo:window.location.origin})}}}},fe=o=>(K("data-v-5c8de70d"),o=o(),I(),o),Ho={id:"login-bar",class:"p-0 rounded"},Ko={key:1,class:"dropdown my-lg-0"},Io={class:"dropdown-toggle selectable",style:{height:"inherit"},"data-bs-toggle":"dropdown","aria-expanded":"false",id:"authDropdown",title:"Open account menu"},To={key:0,style:{height:"inherit"}},Do=["src"],Po={class:"mx-3 text-light lighten-30"},Eo={class:"dropdown-menu p-0 list-group w-100","aria-labelledby":"authDropdown"},Co=fe(()=>s("div",{class:"list-group-item list-group-item-action hoverable"}," My Profile ",-1)),So=fe(()=>s("i",{class:"mdi mdi-logout"},null,-1)),$o=Ie(" logout "),Ao=[So,$o];function Zo(o,e,t,a,r,l){const n=y("router-link");return c(),d("div",Ho,[a.user.isAuthenticated?(c(),d("div",Ko,[s("div",Io,[a.account.picture?(c(),d("div",To,[s("img",{src:a.account.picture,alt:"account photo",class:"accountImg"},null,8,Do),s("span",Po,k(a.account.name),1)])):x("",!0)]),s("div",Eo,[f(n,{to:{name:"ProfilePage",params:{id:a.account.id}},title:"Go to Account Page"},{default:b(()=>[Co]),_:1},8,["to"]),s("div",{class:"list-group-item list-group-item-action hoverable text-danger",onClick:e[1]||(e[1]=(..._)=>a.logout&&a.logout(..._)),title:"Log"},Ao)])])):(c(),d("button",{key:0,class:"btn selectable text-success lighten-30 text-uppercase my-lg-0",onClick:e[0]||(e[0]=(..._)=>a.login&&a.login(..._)),title:"Log in"}," Login "))])}var Oo=w(Mo,[["render",Zo],["__scopeId","data-v-5c8de70d"]]),ve=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Oo});const Ro={setup(){const o=B(),e=H();return R(()=>{e.value}),Y(()=>{e.value.addEventListener("click",t=>{t.target===t.currentTarget&&o.go(-1)})}),{router:o,dialog:e}}},No={class:"modalDialog d-flex justify-content-center",ref:"dialog"},Fo={class:"modalContent bg-light rounded"};function jo(o,e,t,a,r,l){return c(),d("div",No,[s("div",Fo,[j(o.$slots,"modal-content-slot",{},void 0,!0)])],512)}var qo=w(Ro,[["render",jo],["__scopeId","data-v-32cfed7c"]]),he=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:qo});const Bo={setup(){H(!1);const o=q();return R(async()=>{if(o.name=="Home"||o.name=="ProfilePage")try{await N.getAllKeeps()}catch(e){p.error(e),v.toast(e.message,"error")}}),{}}},W=o=>(K("data-v-6df5352d"),o=o(),I(),o),Uo={class:"navbar navbar-expand-lg navbar-dark bg-kpr-green px-3"},zo=W(()=>s("div",{class:"d-flex flex-column align-items-center"},[s("svg",{width:"57",height:"69",viewBox:"0 0 57 69",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M16.353 13.5144V58.2019H10.5718V13.5144H16.353ZM47.7905 13.5144L27.6655 34.6082L48.228 58.2019H40.1968L21.978 36.7019V33.2019L40.478 13.5144H47.7905Z",fill:"#636E72"}),s("path",{d:"M16.353 13.5144H17.353V12.5144H16.353V13.5144ZM16.353 58.2019V59.2019H17.353V58.2019H16.353ZM10.5718 58.2019H9.57178V59.2019H10.5718V58.2019ZM10.5718 13.5144V12.5144H9.57178V13.5144H10.5718ZM47.7905 13.5144L48.5141 14.2047L50.1267 12.5144H47.7905V13.5144ZM27.6655 34.6082L26.942 33.9179L26.3125 34.5777L26.9117 35.2652L27.6655 34.6082ZM48.228 58.2019V59.2019H50.426L48.9819 57.5449L48.228 58.2019ZM40.1968 58.2019L39.4339 58.8484L39.7334 59.2019H40.1968V58.2019ZM21.978 36.7019H20.978V37.0686L21.2151 37.3484L21.978 36.7019ZM21.978 33.2019L21.2493 32.5171L20.978 32.8058V33.2019H21.978ZM40.478 13.5144V12.5144H40.0455L39.7493 12.8296L40.478 13.5144ZM15.353 13.5144V58.2019H17.353V13.5144H15.353ZM16.353 57.2019H10.5718V59.2019H16.353V57.2019ZM11.5718 58.2019V13.5144H9.57178V58.2019H11.5718ZM10.5718 14.5144H16.353V12.5144H10.5718V14.5144ZM47.067 12.8241L26.942 33.9179L28.3891 35.2985L48.5141 14.2047L47.067 12.8241ZM26.9117 35.2652L47.4742 58.8589L48.9819 57.5449L28.4194 33.9511L26.9117 35.2652ZM48.228 57.2019H40.1968V59.2019H48.228V57.2019ZM40.9597 57.5554L22.741 36.0554L21.2151 37.3484L39.4339 58.8484L40.9597 57.5554ZM22.978 36.7019V33.2019H20.978V36.7019H22.978ZM22.7068 33.8867L41.2068 14.1992L39.7493 12.8296L21.2493 32.5171L22.7068 33.8867ZM40.478 14.5144H47.7905V12.5144H40.478V14.5144Z",fill:"#636E72"}),s("rect",{x:"2",y:"2.2019",width:"52.537",height:"64.7981",stroke:"#636E72","stroke-width":"4"})])],-1)),Yo=W(()=>s("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation bar"},[s("span",{class:"navbar-toggler-icon"})],-1)),Go={class:"collapse navbar-collapse",id:"navbarText"},Wo=W(()=>s("ul",{class:"navbar-nav me-auto"},null,-1));function Xo(o,e,t,a,r,l){const n=y("router-link"),_=y("Login");return c(),d("nav",Uo,[f(n,{class:"navbar-brand d-flex",to:{name:"Home"},title:"Return to Home Page"},{default:b(()=>[zo]),_:1}),Yo,s("div",Go,[Wo,f(_,{class:"slim"})])])}var Jo=w(Bo,[["render",Xo],["__scopeId","data-v-6df5352d"]]),ge=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Jo});function Qo(o){Object.entries({"./components/CreateKeepForm.vue":se,"./components/CreateVaultForm.vue":ne,"./components/FormModal.vue":re,"./components/Keep.vue":ie,"./components/KeepDetails.vue":ce,"./components/Keepfeed.vue":de,"./components/Login.vue":ve,"./components/Modal.vue":he,"./components/Navbar.vue":ge}).forEach(([t,a])=>{const r=a.name||t.substr(t.lastIndexOf("/")+1).replace(/\.\w+$/,"");o.component(r,a.default)})}const ye=Te(Ce);Qo(ye);ye.use(_e).mount("#app");export{i as A,v as P,w as _,u as a,pe as b,le as c,p as l,Je as v};
