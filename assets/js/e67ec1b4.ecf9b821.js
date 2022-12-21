"use strict";(self.webpackChunkcommunity_plugin_docs=self.webpackChunkcommunity_plugin_docs||[]).push([[1859],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5918:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_label:"Task Based Workflow Non-Modal \ud83d\udea7"},c=void 0,s={unversionedId:"documentation/tools/Utilities/TBW Non Modal",id:"documentation/tools/Utilities/TBW Non Modal",title:"TBW Non Modal",description:"Features",source:"@site/docs/documentation/tools/Utilities/TBW Non Modal.md",sourceDirName:"documentation/tools/Utilities",slug:"/documentation/tools/Utilities/TBW Non Modal",permalink:"/docs/documentation/tools/Utilities/TBW Non Modal",editUrl:"https://github.com/zacksharkey/CommunityPlugin/website/docs/documentation/tools/Utilities/TBW Non Modal.md",tags:[],version:"current",frontMatter:{sidebar_label:"Task Based Workflow Non-Modal \ud83d\udea7"},sidebar:"sidebar",previous:{title:"Skin Encompass \ud83d\udea7",permalink:"/docs/documentation/tools/Utilities/Skin Encompass"},next:{title:"VIP Loans \ud83d\udea7",permalink:"/docs/documentation/tools/Utilities/VIP"}},u=[{value:"Features",id:"features",children:[],level:2},{value:"Setup",id:"setup",children:[{value:"Create CX.MISC.TRIGGER Field",id:"create-cxmisctrigger-field",children:[],level:3}],level:2},{value:"Usage",id:"usage",children:[],level:2}],d={toc:u};function p(e){var t=e.components,l=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("underconstruction",null),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,"Added method to open the Task Based Workflow window in a non-modal window. This allows the user to continue working in Encompass while the Task Based Workflow window is open."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("h3",{id:"create-cxmisctrigger-field"},"Create CX.MISC.TRIGGER Field"),(0,i.kt)("p",null,"The custom field should be a String format field named ",(0,i.kt)("inlineCode",{parentName:"p"},"CX.MISC.TRIGGER"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"CX.MISC.TRIGGER",src:n(7102).Z,width:"622",height:"335"})),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In Encompass,"),(0,i.kt)("li",{parentName:"ol"},"Open a loan and using business rules or similar triggering logic, set the ",(0,i.kt)("inlineCode",{parentName:"li"},"CX.MISC.TRIGGER")," field to ",(0,i.kt)("inlineCode",{parentName:"li"},"TBWNonModal"))))}p.isMDXComponent=!0},7102:function(e,t,n){t.Z=n.p+"assets/images/CX_MISC_TRIGGER-fc5a31a6f6602a9c91f596e94e7bc397.png"}}]);