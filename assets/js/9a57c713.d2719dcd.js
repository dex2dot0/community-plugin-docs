"use strict";(self.webpackChunkcommunity_plugin_docs=self.webpackChunkcommunity_plugin_docs||[]).push([[7005],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?o.createElement(f,l(l({ref:t},s),{},{components:n})):o.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5824:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],a={sidebar_position:2},u="Installation",c={unversionedId:"development/Installation",id:"development/Installation",title:"Installation",description:"If you would like to develop or extend the Community Plugin you will need to get setup with the project source code for local development. You will then be able to create your own installation file from the project source code.",source:"@site/docs/development/Installation.md",sourceDirName:"development",slug:"/development/Installation",permalink:"/community-plugin-docs/docs/development/Installation",editUrl:"https://github.com/zacksharkey/CommunityPlugin/website/docs/development/Installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Welcome",permalink:"/community-plugin-docs/docs/development/intro"},next:{title:"What's Next?",permalink:"/community-plugin-docs/docs/development/next"}},s=[{value:"Installing from GitHub",id:"installing-from-github",children:[],level:2}],p={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation"},"Installation"),(0,i.kt)("p",null,"If you would like to develop or extend the Community Plugin you will need to get setup with the project source code for local development. You will then be able to create your own installation file from the project source code."),(0,i.kt)("h2",{id:"installing-from-github"},"Installing from GitHub"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Clone/download the Community Plugin ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/zacksharkey/CommunityPlugin"},"repository")," from GitHub"),(0,i.kt)("li",{parentName:"ol"},"Open the project in Visual Studio"),(0,i.kt)("li",{parentName:"ol"},"Attempt to Build the project to create a DLL file"),(0,i.kt)("li",{parentName:"ol"},"If the build is successful \ud83c\udf89 you are ready to go!"),(0,i.kt)("li",{parentName:"ol"},"If the build is not successful, you likely need to resolve some project depenedencies"),(0,i.kt)("li",{parentName:"ol"},"Once you have resolved the dependencies, try running the build again until successful")))}m.isMDXComponent=!0}}]);