import{c as R,r as t,j as e,a as U,F as T,_ as i}from"./index-oetxPS69.js";import{c as p}from"./useGetClassName-B-APfof2.js";import{u as D}from"./usePrepareTemplate-B9HH0EsN.js";import{u as W}from"./useGetClassName-CHnoSSnn.js";const{useI18n:V}=R({en:{alphanumericalCharsOnly:"Only alphanumerical characters",gender:"Gender",doForgotPassword:"I forgot my password",invalidUserMessage:"Invalid username or password. (this message was overwrite in the theme)"},fr:{alphanumericalCharsOnly:"Caractère alphanumérique uniquement",gender:"Genre",doForgotPassword:"J'ai oublié mon mot de passe",invalidUserMessage:"Nom d'utilisateur ou mot de passe invalide. (ce message a été écrasé dans le thème)"}}),z="/assets/keycloakify-logo-CaqPJ1qh.png";function d(u){const{displayInfo:a=!1,displayMessage:r=!0,displayRequiredFields:y=!1,displayWide:h=!1,showAnotherWayIfPresent:w=!0,headerNode:j,showUsernameNode:g=null,infoNode:E=null,kcContext:x,i18n:C,doUseDefaultCss:_,classes:I,children:F}=u,{getClassName:s}=W({doUseDefaultCss:_,classes:I}),{msg:m,changeLocale:A,labelBySupportedLanguageTag:N,currentLanguageTag:L}=C,{realm:v,locale:k,auth:l,url:n,message:o,isAppInitiatedAction:P}=x,{isReady:b}=D({doFetchDefaultThemeResources:_,styles:[`${n.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly.min.css`,`${n.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly-additions.min.css`,`${n.resourcesCommonPath}/lib/zocial/zocial.css`,`${n.resourcesPath}/css/login.css`],htmlClassName:s("kcHtmlClass"),bodyClassName:s("kcBodyClass")});return t.useState(()=>{document.title=C.msgStr("loginTitle",x.realm.displayName)}),t.useEffect(()=>{console.log(`Value of MY_ENV_VARIABLE on the Keycloak server: "${x.properties.MY_ENV_VARIABLE}"`)},[]),b?e.jsxs("div",{className:s("kcLoginClass"),children:[e.jsx("div",{id:"kc-header",className:s("kcHeaderClass"),children:e.jsxs("div",{id:"kc-header-wrapper",className:s("kcHeaderWrapperClass"),style:{fontFamily:'"Work Sans"'},children:[e.jsx("img",{src:`${window.kcContext===void 0?"/":window.kcContext.url.resourcesPath+"/build/"}keycloakify-logo.png`,alt:"Keycloakify logo",width:50}),m("loginTitleHtml",v.displayNameHtml),"!!!",e.jsx("img",{src:z,alt:"Keycloakify logo",width:50})]})}),e.jsxs("div",{className:p(s("kcFormCardClass"),h&&s("kcFormCardAccountClass")),children:[e.jsxs("header",{className:s("kcFormHeaderClass"),children:[v.internationalizationEnabled&&(U.assert(k!==void 0),!0)&&k.supported.length>1&&e.jsx("div",{id:"kc-locale",children:e.jsx("div",{id:"kc-locale-wrapper",className:s("kcLocaleWrapperClass"),children:e.jsxs("div",{className:"kc-dropdown",id:"kc-locale-dropdown",children:[e.jsx("a",{href:"#",id:"kc-current-locale-link",children:N[L]}),e.jsx("ul",{children:k.supported.map(({languageTag:f})=>e.jsx("li",{className:"kc-dropdown-item",children:e.jsx("a",{href:"#",onClick:()=>A(f),children:N[f]})},f))})]})})}),l!==void 0&&l.showUsername&&!l.showResetCredentials?y?e.jsxs("div",{className:s("kcContentWrapperClass"),children:[e.jsx("div",{className:p(s("kcLabelWrapperClass"),"subtitle"),children:e.jsxs("span",{className:"subtitle",children:[e.jsx("span",{className:"required",children:"*"})," ",m("requiredFields")]})}),e.jsxs("div",{className:"col-md-10",children:[g,e.jsx("div",{className:s("kcFormGroupClass"),children:e.jsxs("div",{id:"kc-username",children:[e.jsx("label",{id:"kc-attempted-username",children:l==null?void 0:l.attemptedUsername}),e.jsx("a",{id:"reset-login",href:n.loginRestartFlowUrl,children:e.jsxs("div",{className:"kc-login-tooltip",children:[e.jsx("i",{className:s("kcResetFlowIcon")}),e.jsx("span",{className:"kc-tooltip-text",children:m("restartLoginTooltip")})]})})]})})]})]}):e.jsxs(e.Fragment,{children:[g,e.jsx("div",{className:s("kcFormGroupClass"),children:e.jsxs("div",{id:"kc-username",children:[e.jsx("label",{id:"kc-attempted-username",children:l==null?void 0:l.attemptedUsername}),e.jsx("a",{id:"reset-login",href:n.loginRestartFlowUrl,children:e.jsxs("div",{className:"kc-login-tooltip",children:[e.jsx("i",{className:s("kcResetFlowIcon")}),e.jsx("span",{className:"kc-tooltip-text",children:m("restartLoginTooltip")})]})})]})})]}):y?e.jsxs("div",{className:s("kcContentWrapperClass"),children:[e.jsx("div",{className:p(s("kcLabelWrapperClass"),"subtitle"),children:e.jsxs("span",{className:"subtitle",children:[e.jsx("span",{className:"required",children:"*"}),m("requiredFields")]})}),e.jsx("div",{className:"col-md-10",children:e.jsx("h1",{id:"kc-page-title",children:j})})]}):e.jsx("h1",{id:"kc-page-title",children:j})]}),e.jsx("div",{id:"kc-content",children:e.jsxs("div",{id:"kc-content-wrapper",children:[r&&o!==void 0&&(o.type!=="warning"||!P)&&e.jsxs("div",{className:p("alert",`alert-${o.type}`),children:[o.type==="success"&&e.jsx("span",{className:s("kcFeedbackSuccessIcon")}),o.type==="warning"&&e.jsx("span",{className:s("kcFeedbackWarningIcon")}),o.type==="error"&&e.jsx("span",{className:s("kcFeedbackErrorIcon")}),o.type==="info"&&e.jsx("span",{className:s("kcFeedbackInfoIcon")}),e.jsx("span",{className:"kc-feedback-text",dangerouslySetInnerHTML:{__html:o.summary}})]}),F,l!==void 0&&l.showTryAnotherWayLink&&w&&e.jsx("form",{id:"kc-select-try-another-way-form",action:n.loginAction,method:"post",className:p(h&&s("kcContentWrapperClass")),children:e.jsx("div",{className:p(h&&[s("kcFormSocialAccountContentClass"),s("kcFormSocialAccountClass")]),children:e.jsxs("div",{className:s("kcFormGroupClass"),children:[e.jsx("input",{type:"hidden",name:"tryAnotherWay",value:"on"}),e.jsx("a",{href:"#",id:"try-another-way",onClick:()=>(document.forms["kc-select-try-another-way-form"].submit(),!1),children:m("doTryAnotherWay")})]})})}),a&&e.jsx("div",{id:"kc-info",className:s("kcSignUpClass"),children:e.jsx("div",{id:"kc-info-wrapper",className:s("kcInfoAreaWrapperClass"),children:E})})]})})]})]}):null}const O=t.lazy(()=>i(()=>import("./Login-DcnwHZ5j.js"),__vite__mapDeps([0,1,2,3]))),S=t.lazy(()=>i(()=>import("./Register-1mxokChK.js"),__vite__mapDeps([4,1,2,3]))),q=t.lazy(()=>i(()=>import("./RegisterUserProfile-DI8YSlfv.js"),__vite__mapDeps([5,1,2,6,3]))),H=t.lazy(()=>i(()=>import("./Terms-miN1O4tP.js"),__vite__mapDeps([7,1,2,8,3]))),M=t.lazy(()=>i(()=>import("./MyExtraPage1-BX1WoHmD.js"),__vite__mapDeps([9,1]))),$=t.lazy(()=>i(()=>import("./MyExtraPage2-C3F6boFx.js"),__vite__mapDeps([10,1]))),G=t.lazy(()=>i(()=>import("./Info-CjdU3ZZq.js"),__vite__mapDeps([11,1]))),c={kcHtmlClass:"my-root-class",kcHeaderWrapperClass:"my-color my-font"};function Q(u){const{kcContext:a}=u,r=V({kcContext:a});return r===null?null:e.jsx(t.Suspense,{children:(()=>{switch(a.pageId){case"login.ftl":return e.jsx(O,{kcContext:a,i18n:r,Template:d,classes:c,doUseDefaultCss:!0});case"register.ftl":return e.jsx(S,{kcContext:a,i18n:r,Template:d,classes:c,doUseDefaultCss:!0});case"register-user-profile.ftl":return e.jsx(q,{kcContext:a,i18n:r,Template:d,classes:c,doUseDefaultCss:!0});case"terms.ftl":return e.jsx(H,{kcContext:a,i18n:r,Template:d,classes:c,doUseDefaultCss:!0});case"my-extra-page-1.ftl":return e.jsx(M,{kcContext:a,i18n:r,Template:d,classes:c,doUseDefaultCss:!0});case"my-extra-page-2.ftl":return e.jsx($,{kcContext:a,i18n:r,Template:d,classes:c,doUseDefaultCss:!0});case"info.ftl":return e.jsx(G,{kcContext:a,i18n:r,classes:c,Template:t.lazy(()=>i(()=>import("./Template-IHEcCfWE.js"),__vite__mapDeps([12,1,2,13,3]))),doUseDefaultCss:!0});default:return e.jsx(T,{kcContext:a,i18n:r,classes:c,Template:d,doUseDefaultCss:!0})}})()})}export{Q as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Login-DcnwHZ5j.js","assets/index-oetxPS69.js","assets/useGetClassName-B-APfof2.js","assets/useGetClassName-CHnoSSnn.js","assets/Register-1mxokChK.js","assets/RegisterUserProfile-DI8YSlfv.js","assets/useFormValidation-DBaIM0GV.js","assets/Terms-miN1O4tP.js","assets/index-DwE5Dg7l.js","assets/MyExtraPage1-BX1WoHmD.js","assets/MyExtraPage2-C3F6boFx.js","assets/Info-CjdU3ZZq.js","assets/Template-IHEcCfWE.js","assets/usePrepareTemplate-B9HH0EsN.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=KcApp-Bwnv-Fc8.js.map
