import{r,j as e}from"./index-oetxPS69.js";function f(o){const{kcContext:a,i18n:l,doUseDefaultCss:i,Template:m,classes:u}=o,{msgStr:d,msg:t}=l,{samlPost:s}=a,[n,p]=r.useState(null);return r.useEffect(()=>{if(n!==null){if(s.url===""){alert("In a real Keycloak the user would be redirected immediately");return}n.submit()}},[n]),e.jsxs(m,Object.assign({},{kcContext:a,i18n:l,doUseDefaultCss:i,classes:u},{displayMessage:!1,headerNode:t("saml.post-form.title")},{children:[e.jsx("p",{children:t("saml.post-form.message")}),e.jsxs("form",Object.assign({name:"saml-post-binding",method:"post",action:s.url,ref:p},{children:[s.SAMLRequest&&e.jsx("input",{type:"hidden",name:"SAMLRequest",value:s.SAMLRequest}),s.SAMLResponse&&e.jsx("input",{type:"hidden",name:"SAMLResponse",value:s.SAMLResponse}),s.relayState&&e.jsx("input",{type:"hidden",name:"RelayState",value:s.relayState}),e.jsxs("noscript",{children:[e.jsx("p",{children:t("saml.post-form.js-disabled")}),e.jsx("input",{type:"submit",value:d("doContinue")})]})]}))]}))}export{f as default};
//# sourceMappingURL=SamlPostForm-C9eUlYKL.js.map
