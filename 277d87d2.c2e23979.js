(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{156:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(9),o=(r(0),r(201)),i={id:"prefix",title:"Prefix Transform",sidebar_label:"Prefix"},c={id:"transforms/prefix",title:"Prefix Transform",description:"The `prefix` transform allow you prefix GraphQL types and GraphQL root operations (under `Query/Mutation`). ",source:"@site/docs/transforms/prefix.md",permalink:"/docs/transforms/prefix",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/transforms/prefix.md",sidebar_label:"Prefix",sidebar:"sidebar",previous:{title:"Rename Transform",permalink:"/docs/transforms/rename"},next:{title:"Extend Transform",permalink:"/docs/transforms/extend"}},p=[{value:"How to use?",id:"how-to-use",children:[]},{value:"Config API Reference",id:"config-api-reference",children:[]}],l={rightToc:p};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"prefix")," transform allow you prefix GraphQL types and GraphQL root operations (under ",Object(o.b)("inlineCode",{parentName:"p"},"Query/Mutation"),"). "),Object(o.b)("p",null,'You can use it to easily "namespace" APIs in your unified API and avoid conflicts. '),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"yarn add @graphql-mesh/transform-prefix\n")),Object(o.b)("h2",{id:"how-to-use"},"How to use?"),Object(o.b)("p",null,"Add the following configuration to your Mesh config file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"transforms:\n  - prefix:\n      value: MyApi_\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can check out our example that uses schema stitching with a PostgreSQL datasource and prefix transform.\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/tree/master/examples/postgres-geodb"}),"Click here to open the example on GitHub"))),Object(o.b)("h2",{id:"config-api-reference"},"Config API Reference"),Object(o.b)("p",null,Object(o.b)("ul",{parentName:"p"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"value")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"String"),") - The prefix to apply to the schema types. By default it's the API name."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ignore")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"Array of String"),", required) - List of ignored types"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"includeRootOperations")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"Boolean"),") - Changes root types and changes the field names"))))}s.isMDXComponent=!0},201:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,m=u["".concat(i,".").concat(b)]||u[b]||f[b]||o;return r?a.a.createElement(m,c({ref:t},l,{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);