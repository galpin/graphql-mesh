(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{177:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(9),o=(r(0),r(201)),i={id:"introduction",title:"Introduction",sidebar_label:"1. Introduction",image:"https://miro.medium.com/max/1400/1*iZfQ7ST9rd7McrHvvVA-BA@2x.png"},c={id:"getting-started/introduction",title:"Introduction",description:"<img",source:"@site/docs/getting-started/introduction.md",permalink:"/docs/getting-started/introduction",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/getting-started/introduction.md",sidebar_label:"1. Introduction",sidebar:"sidebar",next:{title:"Installation",permalink:"/docs/getting-started/installation"}},s=[{value:"How it works?",id:"how-it-works",children:[]}],l={rightToc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("img",{width:"50%",alt:"GraphQL Mesh",src:"/img/mesh-text-logo.svg"}),";",Object(o.b)("p",null,"GraphQL Mesh allows you to use GraphQL query language to access data in remote APIs that don't run GraphQL (and also ones that do run GraphQL). It can be used as a gateway to other services, or run as a local GraphQL schema that aggregates data from remote APIs."),Object(o.b)("p",null,"The goal of GraphQL Mesh is to simplify access to your data-sources, and use GraphQL language to query it easily. You can link, merge, aggregate, transform, modify and link your data-sources, and later query it using GraphQL queries."),Object(o.b)("p",null,"You can use one of the handlers that we wrote (GraphQL, Apollo Federation, gRPC, Swagger, OpenAPI, SOAP, Postgres and more), or write your own handler to access your data."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/mesh-example.png",alt:"GraphQL Mesh"}))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: GraphQL Mesh doesn\u2019t aim to magically create your utopic public GraphQL schema - it\u2019s just an easy-to-use proxy to your data, and you should consider implementing another layer that exposes your public data the way you need it to be.")),Object(o.b)("h3",{id:"how-it-works"},"How it works?"),Object(o.b)("p",null,"The way GraphQL Mesh works is:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Collect API schema specifications from services"),Object(o.b)("li",{parentName:"ol"},"Create a runtime instance of fully-typed SDK for the services."),Object(o.b)("li",{parentName:"ol"},"Convert API specs to GraphQL schema"),Object(o.b)("li",{parentName:"ol"},"Applies custom schema transformations and schema extensions"),Object(o.b)("li",{parentName:"ol"},"Creates fully-typed, single schema, GraphQL SDK to fetch data from your services.")))}u.isMDXComponent=!0},201:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?a.a.createElement(b,c({ref:t},l,{components:r})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);