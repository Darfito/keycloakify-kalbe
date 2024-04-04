import{b as U,j as s,a as E,r as o,_ as h}from"./index-oetxPS69.js";import{c as r}from"./useGetClassName-B-APfof2.js";import{u as P}from"./usePrepareTemplate-B9HH0EsN.js";import{u as w}from"./useGetClassName-Dhk78pNH.js";const{useI18n:D}=U({});function u(p){const{kcContext:l,i18n:t,doUseDefaultCss:f,active:c,classes:_,children:b}=p,{getClassName:v}=w({doUseDefaultCss:f,classes:_}),{msg:a,changeLocale:g,labelBySupportedLanguageTag:N,currentLanguageTag:k}=t,{locale:x,url:e,features:d,realm:y,message:n,referrer:i}=l,{isReady:C}=P({doFetchDefaultThemeResources:f,styles:[`${e.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly.min.css`,`${e.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly-additions.min.css`,`${e.resourcesPath}/css/account.css`],htmlClassName:v("kcHtmlClass"),bodyClassName:r("admin-console","user",v("kcBodyClass"))});return C?s.jsxs(s.Fragment,{children:[s.jsx("header",{className:"navbar navbar-default navbar-pf navbar-main header",children:s.jsxs("nav",{className:"navbar",role:"navigation",children:[s.jsx("div",{className:"navbar-header",children:s.jsx("div",{className:"container",children:s.jsx("h1",{className:"navbar-title",children:"Keycloak"})})}),s.jsx("div",{className:"navbar-collapse navbar-collapse-1",children:s.jsx("div",{className:"container",children:s.jsxs("ul",{className:"nav navbar-nav navbar-utility",children:[y.internationalizationEnabled&&(E.assert(x!==void 0),!0)&&x.supported.length>1&&s.jsx("li",{children:s.jsxs("div",{className:"kc-dropdown",id:"kc-locale-dropdown",children:[s.jsx("a",{href:"#",id:"kc-current-locale-link",children:N[k]}),s.jsx("ul",{children:x.supported.map(({languageTag:j})=>s.jsx("li",{className:"kc-dropdown-item",children:s.jsx("a",{href:"#",onClick:()=>g(j),children:N[j]})},j))})]})}),(i==null?void 0:i.url)&&s.jsx("li",{children:s.jsx("a",{href:i.url,id:"referrer",children:a("backTo",i.name)})}),s.jsx("li",{children:s.jsx("a",{href:e.getLogoutUrl(),children:a("doSignOut")})})]})})})]})}),s.jsxs("div",{className:"container",children:[s.jsx("div",{className:"bs-sidebar col-sm-3",children:s.jsxs("ul",{children:[s.jsx("li",{className:r(c==="account"&&"active"),children:s.jsx("a",{href:e.accountUrl,children:a("account")})}),d.passwordUpdateSupported&&s.jsx("li",{className:r(c==="password"&&"active"),children:s.jsx("a",{href:e.passwordUrl,children:a("password")})}),s.jsx("li",{className:r(c==="totp"&&"active"),children:s.jsx("a",{href:e.totpUrl,children:a("authenticator")})}),d.identityFederation&&s.jsx("li",{className:r(c==="social"&&"active"),children:s.jsx("a",{href:e.socialUrl,children:a("federatedIdentity")})}),s.jsx("li",{className:r(c==="sessions"&&"active"),children:s.jsx("a",{href:e.sessionsUrl,children:a("sessions")})}),s.jsx("li",{className:r(c==="applications"&&"active"),children:s.jsx("a",{href:e.applicationsUrl,children:a("applications")})}),d.log&&s.jsx("li",{className:r(c==="log"&&"active"),children:s.jsx("a",{href:e.logUrl,children:a("log")})}),y.userManagedAccessAllowed&&d.authorization&&s.jsx("li",{className:r(c==="authorization"&&"active"),children:s.jsx("a",{href:e.resourceUrl,children:a("myResources")})})]})}),s.jsxs("div",{className:"col-sm-9 content-area",children:[n!==void 0&&s.jsxs("div",{className:r("alert",`alert-${n.type}`),children:[n.type==="success"&&s.jsx("span",{className:"pficon pficon-ok"}),n.type==="error"&&s.jsx("span",{className:"pficon pficon-error-circle-o"}),s.jsx("span",{className:"kc-feedback-text",children:n.summary})]}),b]})]})]}):null}const I=o.lazy(()=>h(()=>import("./Password-CDBzWqD0.js"),__vite__mapDeps([0,1,2,3]))),L=o.lazy(()=>h(()=>import("./MyExtraPage1-CItkYhj3.js"),__vite__mapDeps([4,1]))),R=o.lazy(()=>h(()=>import("./MyExtraPage2-DB9U-sl5.js"),__vite__mapDeps([5,1]))),T=o.lazy(()=>h(()=>import("./index-CsKvwuQY.js"),__vite__mapDeps([6,1]))),m={kcBodyClass:"my-root-account-class"};function S(p){const{kcContext:l}=p,t=D({kcContext:l});return t===null?null:s.jsx(o.Suspense,{children:(()=>{switch(l.pageId){case"password.ftl":return s.jsx(I,{kcContext:l,i18n:t,Template:u,classes:m,doUseDefaultCss:!0});case"my-extra-page-1.ftl":return s.jsx(L,{kcContext:l,i18n:t,Template:u,classes:m,doUseDefaultCss:!0});case"my-extra-page-2.ftl":return s.jsx(R,{kcContext:l,i18n:t,Template:u,classes:m,doUseDefaultCss:!0});default:return s.jsx(T,{kcContext:l,i18n:t,classes:m,Template:u,doUseDefaultCss:!0})}})()})}export{S as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Password-CDBzWqD0.js","assets/index-oetxPS69.js","assets/useGetClassName-B-APfof2.js","assets/useGetClassName-Dhk78pNH.js","assets/MyExtraPage1-CItkYhj3.js","assets/MyExtraPage2-DB9U-sl5.js","assets/index-CsKvwuQY.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=KcApp-CuopVjEc.js.map
