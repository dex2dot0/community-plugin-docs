"use strict";(self.webpackChunkcommunity_plugin_docs=self.webpackChunkcommunity_plugin_docs||[]).push([[6985],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(n),d=o,f=c["".concat(p,".").concat(d)]||c[d]||u[d]||l;return n?a.createElement(f,r(r({ref:t},m),{},{components:n})):a.createElement(f,r({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5550:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var a=n(7462),o=n(3366),l=(n(7294),n(3905)),r=["components"],i={},p="Input Form Automator",s={unversionedId:"documentation/tools/Automation/Input Forms",id:"documentation/tools/Automation/Input Forms",title:"Input Form Automator",description:"Features",source:"@site/docs/documentation/tools/Automation/Input Forms.md",sourceDirName:"documentation/tools/Automation",slug:"/documentation/tools/Automation/Input Forms",permalink:"/docs/documentation/tools/Automation/Input Forms",editUrl:"https://github.com/zacksharkey/CommunityPlugin/website/docs/documentation/tools/Automation/Input Forms.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Home Counseling",permalink:"/docs/documentation/tools/Automation/Home Counseling"},next:{title:"Task Automator",permalink:"/docs/documentation/tools/Automation/Tasks"}},m=[{value:"Features",id:"features",children:[],level:2},{value:"Setup",id:"setup",children:[{value:"Enable Input Form Automator in Plugin Management",id:"enable-input-form-automator-in-plugin-management",children:[],level:3},{value:"Input Form Template Setup",id:"input-form-template-setup",children:[],level:3},{value:"Username Templates",id:"username-templates",children:[],level:3},{value:"Loan Type Templates",id:"loan-type-templates",children:[],level:3},{value:"Milestone Type Template",id:"milestone-type-template",children:[],level:3},{value:"Persona Type Templates",id:"persona-type-templates",children:[],level:3},{value:"Default Template",id:"default-template",children:[],level:3}],level:2},{value:"Usage",id:"usage",children:[],level:2}],u={toc:m};function c(e){var t=e.components,i=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"input-form-automator"},"Input Form Automator"),(0,l.kt)("h2",{id:"features"},"Features"),(0,l.kt)("p",null,"Want your input form list to be truly automated? We thought so and we do too!"),(0,l.kt)("p",null,"With the Input Form Automator tool you can start applying Input Form Sets based on a specific user, a persona, the current milestone, the loan type, or a default \ud83d\udca5"),(0,l.kt)("h2",{id:"setup"},"Setup"),(0,l.kt)("h3",{id:"enable-input-form-automator-in-plugin-management"},"Enable Input Form Automator in Plugin Management"),(0,l.kt)("p",null,"Enabling the Input Form Automator is as simple as:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In Encompass"),(0,l.kt)("li",{parentName:"ol"},"Click on the Settings Menu"),(0,l.kt)("li",{parentName:"ol"},"Expand the Community Menu"),(0,l.kt)("li",{parentName:"ol"},"Click on PluginManagement")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Community Plugin Menu",src:n(1870).Z,width:"388",height:"107"})),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"select the AutomateInputFormsSet plugin from the dropdown"),(0,l.kt)("li",{parentName:"ol"},"Specified access will control what users get get to take advantage of this tool. All Access for example would apply the Input Form Sets to all logged in users.")),(0,l.kt)("h3",{id:"input-form-template-setup"},"Input Form Template Setup"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In Ecnompass"),(0,l.kt)("li",{parentName:"ol"},"Click on the Settings Menu"),(0,l.kt)("li",{parentName:"ol"},"Click on Settings..."),(0,l.kt)("li",{parentName:"ol"},"Navigate to Loan Template > Input Form Sets"),(0,l.kt)("li",{parentName:"ol"},"With the Public Form Lists folder select, in the Input Form Sets settings, create a folder called Persona:")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Persona Folder Setup",src:n(7542).Z,width:"529",height:"252"})),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"The templates you want to apply and in what situations will dictate what actions to take next.")),(0,l.kt)("h3",{id:"username-templates"},"Username Templates"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In the new Persona folder created in the steps above, if you would like to create specific Input Form Templates for specific users:"),(0,l.kt)("li",{parentName:"ol"},"Create a new input form set"),(0,l.kt)("li",{parentName:"ol"},"Name the new input form set User_UsernameHere"),(0,l.kt)("li",{parentName:"ol"},"For example, if my user is jsmith, I'd create a new input form set as follows in my new Persona folder:")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Example User Input Form Set",src:n(6049).Z,width:"455",height:"218"})),(0,l.kt)("h3",{id:"loan-type-templates"},"Loan Type Templates"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In the new Persona folder created in the steps above, if you would like to create specific Input Form Templates for specific loan types:"),(0,l.kt)("li",{parentName:"ol"},"Create a new input form set"),(0,l.kt)("li",{parentName:"ol"},"Name the new input form set LoanType_LoanTypeHere_PersonaHere"),(0,l.kt)("li",{parentName:"ol"},"For example, if my target loan type is conventional loans, I'd create a new input form set as follows in my new Persona folder:")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Example User Input Form Set",src:n(7252).Z,width:"503",height:"239"})),(0,l.kt)("h3",{id:"milestone-type-template"},"Milestone Type Template"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In the new Persona folder created in the steps above, if you would like to create specific Input Form Templates for a specific milestone:"),(0,l.kt)("li",{parentName:"ol"},"Create a new input form set"),(0,l.kt)("li",{parentName:"ol"},"Name the new input form set Milestone_LastFinishedMilestoneName_PersonaHere"),(0,l.kt)("li",{parentName:"ol"},"For example, if my target last finished milestone is Processing, I'd create a new input form set as follows in my new Persona folder:")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Example User Input Form Set",src:n(6067).Z,width:"439",height:"265"})),(0,l.kt)("h3",{id:"persona-type-templates"},"Persona Type Templates"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In the new Persona folder created in the steps above, if you would like to create specific Input Form Templates for specific personas:"),(0,l.kt)("li",{parentName:"ol"},"Create a new input form set"),(0,l.kt)("li",{parentName:"ol"},"Name the new input form set LoanType_PersonaHere"),(0,l.kt)("li",{parentName:"ol"},"For example, if my the target persona is Processor, I'd create a new input form set as follows in my new Persona folder:")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Example User Input Form Set",src:n(2501).Z,width:"506",height:"275"})),(0,l.kt)("h3",{id:"default-template"},"Default Template"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In the new Persona folder created in the steps above, if you would like to create a specific Input Form Template to apply when none of the above templates apply:"),(0,l.kt)("li",{parentName:"ol"},"Create a new input form set"),(0,l.kt)("li",{parentName:"ol"},"Name the new input form set Default"),(0,l.kt)("li",{parentName:"ol"},"For example:")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Example User Input Form Set",src:n(1365).Z,width:"486",height:"287"})),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Once you have enabled and configured the Input Form Automator")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In Encompass")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Upon opening a loan, if the user has been provided access to the Input Form Automator, the tool will automatically apply the appropriate Input Form Set")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The tool follows a hierarchy of rules to determine which Input Form Set to apply. In the order below, the tool will apply the first matching input form set based on the following criteria:"),(0,l.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Current user's username"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Loan Type from field 1172"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Last completed milestone name"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Persona name"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Default Input Form Set"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"As an example, if you have an input form set that matches the name of one of your personas and the current user is enabled to use the tool and has that persona assigned to them, the tool will apply that input form set to the loan."))))}c.isMDXComponent=!0},1870:function(e,t,n){t.Z=n.p+"assets/images/CommunityPluginMenu-b24f9c298f74e4cd209806a7c64f88ec.png"},1365:function(e,t,n){t.Z=n.p+"assets/images/DefaultTypeSet-d7519c855e5b22680fd44909f4b650dc.png"},7252:function(e,t,n){t.Z=n.p+"assets/images/LoanTypeSet-01e656edf29931803e9c796b87bd835c.png"},6067:function(e,t,n){t.Z=n.p+"assets/images/MilestoneTypeSet-3ef6031d0975d0f07d6bc7d01c26c362.png"},7542:function(e,t,n){t.Z=n.p+"assets/images/PersonaFolder-6bfc755d822ad0d576a4da4ea253762a.png"},2501:function(e,t,n){t.Z=n.p+"assets/images/PersonaTypeSet-61a217dbb03b748d886f963e86cdaa28.png"},6049:function(e,t,n){t.Z=n.p+"assets/images/UserInputFormSet-1279ad4ba99fe7b31e5efce5ef884d91.png"}}]);