"use strict";(self.webpackChunkcommunity_plugin_docs=self.webpackChunkcommunity_plugin_docs||[]).push([[533],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8693:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={},u="Opening eFolder Document with Business Rules",s={unversionedId:"documentation/tools/Utilities/Open eFolder Document",id:"documentation/tools/Utilities/Open eFolder Document",title:"Opening eFolder Document with Business Rules",description:"Features",source:"@site/docs/documentation/tools/Utilities/Open eFolder Document.md",sourceDirName:"documentation/tools/Utilities",slug:"/documentation/tools/Utilities/Open eFolder Document",permalink:"/docs/documentation/tools/Utilities/Open eFolder Document",editUrl:"https://github.com/zacksharkey/CommunityPlugin/website/docs/documentation/tools/Utilities/Open eFolder Document.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Input Form Pop-Out Window",permalink:"/docs/documentation/tools/Utilities/Open Input Form"},next:{title:"Pipeline Advanced Search",permalink:"/docs/documentation/tools/Utilities/Pipeline Advanced Search"}},c=[{value:"Features",id:"features",children:[],level:2},{value:"Setup",id:"setup",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],d={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"opening-efolder-document-with-business-rules"},"Opening eFolder Document with Business Rules"),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,"Need an easy way to pop-up an eFolder document with a business rule or custom code? This Community Plugin feature has got you covered! All you need is a custom field and then you can easily, auto-magically, pop-up any eFolder document for the current user. Now that is just about as sweet as a Georgia \ud83c\udf51"),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In Encompass, create a custom field called CX.OPENDOCUMENT\na. Field Type = String\nb. Length = 50 (or the maximum length you use for document names)"),(0,i.kt)("li",{parentName:"ol"},"Create a business rule, plugin, or any other business logic and set the new ","[CX.OPENDOCUMENT]"," field to the name of a document. For example, if you want to open the eFolder and show the Statement of Denial when the Date Denied field (","[DENIAL.X69]",") has been updated, set ","[CX.OPENDOCUMENT]"," to the document placeholder name you use to store the Statement of Denial disclosure.")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Once a business rule, plugin, or other business logic has been established to set ","[CX.OPENDOCUMENT]"," to a document nameL"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open a test loan"),(0,i.kt)("li",{parentName:"ol"},"Perform a function that should trigger the logic to fire. For example, if you created a field trigger business rule based on changing ","[1393]",' = "Application denied", go in to a loan and change the Loan Status so it reflects as application denied.'),(0,i.kt)("li",{parentName:"ol"},"If there is a document in the eFolder that has the same name as what ","[CX.OPENDOCUMENT]"," has been set to, the eFolder will auto-magically open to that document and display its contents.")))}p.isMDXComponent=!0}}]);