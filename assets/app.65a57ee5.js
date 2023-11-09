import{d as m,c as l,r as h,e as f,k as r,N as V,n as u,o,a as U,t as H,_ as q,g as S,F as J,D as K,h as p,j as z,x as R,l as c,b as A,H as N,a0 as Q,w as W,T as X,a1 as j,s as F,a2 as Y,a3 as ee,a4 as te,a5 as ne,a6 as se,a7 as ae,a8 as oe,a9 as le,aa as re,ab as ie,ac as ce,u as ue,y as de,ad as pe,ae as me,af as ve}from"./chunks/framework.2fb5efd6.js";import{t as P}from"./chunks/theme.ce3445d2.js";const fe={key:0,class:"got-card-header"},he=m({name:"GCard",__name:"main",props:{header:{type:String,default:""},bodyStyle:{type:String,default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}},setup(e){return(t,n)=>(o(),l("div",{class:u(["got-card",`${e.shadow}-shadow`])},[t.$slots.header||e.header?(o(),l("div",fe,[h(t.$slots,"header",{},()=>[U(H(e.header),1)],!0)])):f("",!0),r("div",{style:V(e.bodyStyle),class:"got-card-body"},[h(t.$slots,"default",{},void 0,!0)],4)],2))}});const _=q(he,[["__scopeId","data-v-4da7b79d"]]);_.install=function(e){return e.component(_.name,_),e};const w=m({name:"GTag",__name:"main",props:{type:{type:String,default:"default"},outline:Boolean,style:Object,round:{type:Boolean,default:!1}},setup(e){const t=e,n=S(()=>{const s=["g-tag","g-tag-"+t.type];return t.outline&&s.push("g-tag-outline"),t.round&&s.push("g-tag-round"),s});return(s,a)=>(o(),l("div",{class:u(n.value),style:V(e.style)},[r("span",null,[h(s.$slots,"default")])],6))}});w.install=function(e){return e.component(w.name,w),e};const ge={class:"g-breadcrumb"},M=m({name:"GBreadcrumb",__name:"main",props:{paths:{type:Array,default:()=>[]}},setup(e){return(t,n)=>(o(),l("div",ge,[(o(!0),l(J,null,K(e.paths,(s,a)=>(o(),l("div",{class:"g-breadcrumb-item",key:a},H(s.text),1))),128))]))}});M.install=function(e){return e.component(M.name,M),e};const b=m({name:"GDivider",__name:"main",props:{type:{type:String,default:"normal"},align:{type:String,default:"center"},offset:{type:Number,default:32}},setup(e){const t=e,n=S(()=>({"--got-divider-offset":t.offset+"px"}));return(s,a)=>(o(),l("div",{class:u(["got-divider","got-divider-"+e.type,"got-divider-"+e.align]),style:V(n.value)},[h(s.$slots,"default")],6))}});b.install=function(e){return e.component(b.name,b),e};const ye=[_,w,M,b],Ce=function(e){ye.forEach(t=>{e.use(t)})},Le={install:Ce},Z=(e,t)=>{const n=e.__vccOpts||e;for(const[s,a]of t)n[s]=a;return n},_e={},we={t:"1661231422733",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3259",width:"20",height:"20"},Me=r("path",{d:"M682.666667 810.666667c-12.8 0-21.333333-4.266667-29.866667-12.8-17.066667-17.066667-17.066667-42.666667 0-59.733334l226.133333-226.133333-226.133333-226.133333c-17.066667-17.066667-17.066667-42.666667 0-59.733334s42.666667-17.066667 59.733333 0l256 256c17.066667 17.066667 17.066667 42.666667 0 59.733334l-256 256c-8.533333 8.533333-17.066667 12.8-29.866666 12.8zM341.333333 810.666667c-12.8 0-21.333333-4.266667-29.866666-12.8l-256-256c-17.066667-17.066667-17.066667-42.666667 0-59.733334l256-256c17.066667-17.066667 42.666667-17.066667 59.733333 0s17.066667 42.666667 0 59.733334L145.066667 512l226.133333 226.133333c17.066667 17.066667 17.066667 42.666667 0 59.733334-8.533333 8.533333-17.066667 12.8-29.866667 12.8z","p-id":"3260"},null,-1),be=[Me];function Ve(e,t){return o(),l("svg",we,be)}const He=Z(_e,[["render",Ve]]),Ze={},xe={t:"1661231449868",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3541",width:"20",height:"20"},ke=r("path",{d:"M305.6 225.6c-17.6-17.6-43.2-17.6-59.2 0L19.2 460.8c-25.6 30.4-25.6 72 0 97.6l225.6 235.2c8 8 20.8 12.8 30.4 12.8s20.8-4.8 30.4-12.8c17.6-17.6 17.6-43.2 0-59.2L88 512l217.6-225.6c17.6-17.6 17.6-43.2 0-60.8zM1001.6 460.8L774.4 225.6c-17.6-17.6-43.2-17.6-59.2 0s-17.6 43.2 0 59.2L932.8 512 715.2 737.6c-17.6 17.6-17.6 43.2 0 59.2 8 8 17.6 12.8 30.4 12.8 12.8 0 20.8-4.8 30.4-12.8l225.6-235.2c28.8-28.8 28.8-70.4 0-100.8zM612.8 230.4c-20.8-8-46.4 4.8-56 25.6L382.4 742.4c-8 20.8 4.8 46.4 25.6 56 4.8 0 8 4.8 12.8 4.8 17.6 0 33.6-12.8 38.4-30.4l179.2-491.2c8-20.8-4.8-46.4-25.6-51.2z","p-id":"3542"},null,-1),$e=[ke];function Ae(e,t){return o(),l("svg",xe,$e)}const Fe=Z(Ze,[["render",Ae]]),Se={},Te={viewBox:"0 0 544 560",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Be=r("path",{d:"M399.503 143.667C399.319 152.501 406.332 159.812 415.167 159.997C424.001 160.181 431.312 153.168 431.497 144.333L399.503 143.667ZM416 120L431.997 120.333C431.999 120.207 432 120.081 432 119.954L416 120ZM360 64L360.046 48.0001C360.03 48 360.015 48 360 48L360 64ZM144 64V48C143.984 48 143.968 48 143.953 48.0001L144 64ZM80 128L64.0001 127.953C64 127.968 64 127.984 64 128L80 128ZM80 344H64C64 344.015 64 344.03 64.0001 344.046L80 344ZM136 400L135.954 416C135.97 416 135.985 416 136 416L136 400ZM160 416C168.837 416 176 408.837 176 400C176 391.163 168.837 384 160 384V416ZM217 160H439V128H217V160ZM439 160C461.644 160 480 178.356 480 201H512C512 160.683 479.317 128 439 128V160ZM480 201V423H512V201H480ZM480 423C480 445.644 461.644 464 439 464V496C479.317 496 512 463.317 512 423H480ZM439 464H217V496H439V464ZM217 464C194.356 464 176 445.644 176 423H144C144 463.317 176.683 496 217 496V464ZM176 423V201H144V423H176ZM176 201C176 178.356 194.356 160 217 160V128C176.683 128 144 160.683 144 201H176ZM431.497 144.333L431.997 120.333L400.003 119.667L399.503 143.667L431.497 144.333ZM432 119.954C431.946 100.888 424.347 82.6173 410.865 69.1349L388.238 91.7624C395.741 99.2658 399.97 109.434 400 120.046L432 119.954ZM410.865 69.1349C397.383 55.6526 379.112 48.0543 360.046 48.0001L359.954 79.9999C370.566 80.0301 380.734 84.2589 388.238 91.7624L410.865 69.1349ZM360 48H144V80H360V48ZM143.953 48.0001C122.767 48.0627 102.467 56.5064 87.4868 71.4868L110.114 94.1142C119.117 85.1118 131.316 80.0376 144.047 79.9999L143.953 48.0001ZM87.4868 71.4868C72.5064 86.4673 64.0627 106.767 64.0001 127.953L95.9999 128.047C96.0376 115.316 101.112 103.117 110.114 94.1142L87.4868 71.4868ZM64 128V344H96V128H64ZM64.0001 344.046C64.0543 363.112 71.6526 381.383 85.1349 394.865L107.762 372.238C100.259 364.734 96.0301 354.566 95.9999 343.954L64.0001 344.046ZM85.1349 394.865C98.6173 408.347 116.888 415.946 135.954 416L136.046 384C125.434 383.97 115.266 379.741 107.762 372.238L85.1349 394.865ZM136 416H160V384H136V416Z",fill:"currentColor"},null,-1),De=[Be];function Ee(e,t){return o(),l("svg",Te,De)}const Pe=Z(Se,[["render",Ee]]),C="vitepress-demo-preview",L=(e,t,n,s)=>{let a=t===""?`${e}`:`${e}-${t}`;return n&&(a+=`__${n}`),s&&(a+=`--${s}`),a},G=(e="")=>({b:()=>L(C,e),e:(t="")=>L(C,e,t),m:(t="")=>L(C,e,"",t),bem:(t,n,s)=>L(C,t,n,s)}),ze=()=>{const e=p(!0);return{isCodeFold:e,setCodeFold:t=>{e.value=t}}},Re=()=>({copyContent:p(""),clickCopy:async e=>{await navigator.clipboard.writeText(e)}}),Ne={},je={width:"20",height:"20",viewBox:"0 0 48 48",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},Ge=r("path",{d:"M24 4L29.2533 7.83204L35.7557 7.81966L37.7533 14.0077L43.0211 17.8197L41 24L43.0211 30.1803L37.7533 33.9923L35.7557 40.1803L29.2533 40.168L24 44L18.7467 40.168L12.2443 40.1803L10.2467 33.9923L4.97887 30.1803L7 24L4.97887 17.8197L10.2467 14.0077L12.2443 7.81966L18.7467 7.83204L24 4Z",fill:"currentColor",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),Ie=r("path",{d:"M17 24L22 29L32 19",fill:"currentColor",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),Oe=[Ge,Ie];function Ue(e,t){return o(),l("svg",je,Oe)}const qe=Z(Ne,[["render",Ue]]),Je=m({__name:"message-notice",props:{content:{default:"复制成功！"},close:null},setup(e,{expose:t}){const n=e,s=G(),a=p(!1),T=i=>{a.value=i},g=p(-999),x=i=>{g.value=i};R(a,i=>{i===!0&&setTimeout(()=>{a.value=!1},3e3)});const k=()=>{n.close()};return t({setVisible:T,setTopHeight:x}),(i,B)=>(o(),A(X,{name:"slide-fade",onAfterLeave:k},{default:W(()=>[a.value?(o(),l("div",{key:0,class:u([c(s).bem("message-notice","container")]),style:V({top:g.value+"px"})},[N(qe),r("span",null,H(e.content),1)],6)):f("",!0)]),_:1}))}}),$=[],Ke={open:()=>{const e=document.createElement("div"),t=Q(Je,{content:"复制成功！",close:()=>{document.body.removeChild(e),$.pop(),t.unmount()}}),n=t.mount(e);document.body.appendChild(e);const s=$.length,a=s===0?10:(s+1)*10+s*42;n.setTopHeight(a),n.setVisible(!0),$.push(n)}},Qe=["innerHTML"],We=["innerHTML"],Xe=m({__name:"AntDesign",props:{code:null,showCode:null,title:{default:"默认标题"},description:{default:"描述内容"}},setup(e){const t=e,n=G(),{isCodeFold:s,setCodeFold:a}=ze(),{copyContent:T,clickCopy:g}=Re(),x=p(decodeURIComponent(t.code)),k=p(decodeURIComponent(t.showCode)),i=p(null),B=()=>{g(x.value),Ke.open()},D=S(()=>{var d;return i.value?(d=i.value)==null?void 0:d.clientHeight:0}),E=d=>{s.value?i.value.style.height="0px":i.value.style.height=`${d}px`};return z(()=>{const d=D.value;E(d)}),R(s,()=>{const d=D.value;E(d)}),(d,y)=>(o(),l("div",{class:u([c(n).e("ant-design__container")])},[r("section",{class:u([c(n).bem("preview")])},[h(d.$slots,"default")],2),r("section",{class:u([c(n).bem("description")])},[t.title?(o(),l("div",{key:0,class:u([c(n).bem("description","title")])},H(e.title),3)):f("",!0),t.description?(o(),l("div",{key:1,class:u([c(n).bem("description","content")]),innerHTML:e.description},null,10,Qe)):f("",!0),t.description||!t.title&&!t.description?(o(),l("div",{key:2,class:u([c(n).bem("description","split-line")])},null,2)):f("",!0),r("div",{class:u([c(n).bem("description","handle-btn")])},[c(s)?(o(),A(He,{key:1,onClick:y[1]||(y[1]=O=>c(a)(!1))})):(o(),A(Fe,{key:0,onClick:y[0]||(y[0]=O=>c(a)(!0))})),N(Pe,{onClick:B})],2)],2),r("section",{class:u([c(n).bem("source")]),ref_key:"sourceCodeArea",ref:i},[r("div",{innerHTML:k.value,class:"language-vue"},null,8,We)],2)],2))}});const Ye={extends:P,Layout:()=>j(P.Layout,null,{}),enhanceApp({app:e,router:t,siteData:n}){e.use(Le),e.component("demo-preview",Xe)}};function I(e){if(e.extends){const t=I(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const v=I(Ye),e6=m({name:"VitePressApp",setup(){const{site:e}=ue();return z(()=>{de(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),pe(),me(),ve(),v.setup&&v.setup(),()=>j(v.Layout)}});async function t6(){const e=s6(),t=n6();t.provide(ee,e);const n=te(e.route);return t.provide(ne,n),t.component("Content",se),t.component("ClientOnly",ae),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),v.enhanceApp&&await v.enhanceApp({app:t,router:e,siteData:oe}),{app:t,router:e,data:n}}function n6(){return le(e6)}function s6(){let e=F,t;return re(n=>{let s=ie(n),a=null;return s&&(e&&(t=s),(e||t===s)&&(s=s.replace(/\.js$/,".lean.js")),a=ce(()=>import(s),[])),F&&(e=!1),a},v.NotFound)}F&&t6().then(({app:e,router:t,data:n})=>{t.go().then(()=>{Y(t.route,n.site),e.mount("#app")})});export{t6 as createApp};
