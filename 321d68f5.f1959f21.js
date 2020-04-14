(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{158:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var a=r(1),n=r(9),o=(r(0),r(201)),i={id:"odata",title:"OData / Microsoft Graph",sidebar_label:"OData / Microsoft Graph"},c={id:"handlers/odata",title:"OData / Microsoft Graph",description:"![image](https://user-images.githubusercontent.com/20847995/79219762-87947a80-7e5b-11ea-903d-ba159935fa17.png)",source:"@site/docs/handlers/odata.md",permalink:"/docs/handlers/odata",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/handlers/odata.md",sidebar_label:"OData / Microsoft Graph",sidebar:"sidebar",previous:{title:"MongoDB / Mongoose",permalink:"/docs/handlers/mongoose"},next:{title:"Apache Thrift",permalink:"/docs/handlers/thrift"}},l=[{value:"Codesandbox Example",id:"codesandbox-example",children:[]},{value:"Config API Reference",id:"config-api-reference",children:[]}],p={rightToc:l};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/20847995/79219762-87947a80-7e5b-11ea-903d-ba159935fa17.png",alt:"image"}))),Object(o.b)("p",null,"This handler allows you to load remote ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.odata.org/"}),"OData")," metadata/schema as GraphQL Schema."),Object(o.b)("p",null,"To get started, install the handler library from NPM:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"$ yarn add @graphql-mesh/odata\n")),Object(o.b)("p",null,"Now, you can use it directly in your Mesh config file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"sources:\n  - name: TripPin\n    handler:\n      odata:\n        baseUrl: https://services.odata.org/TripPinRESTierService/\n")),Object(o.b)("h2",{id:"codesandbox-example"},"Codesandbox Example"),Object(o.b)("p",null,"You can check out our TripPin example that uses OData handler."),Object(o.b)("iframe",{src:"https://codesandbox.io/embed/github/Urigo/graphql-mesh/tree/master/examples/odata-trippin?fontsize=14&hidenavigation=1&theme=dark&module=%2F.meshrc.yml",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},title:"odata-trippin-example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),Object(o.b)("h2",{id:"config-api-reference"},"Config API Reference"),Object(o.b)("p",null,Object(o.b)("ul",{parentName:"p"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"baseUrl")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"String"),", required) - Base URL for OData API"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"operationHeaders")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"JSON"),") - Headers to be used with the operation requests"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"schemaHeaders")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"JSON"),") - Headers to be used with the $metadata requests"))))}s.isMDXComponent=!0},201:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},d=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return r?n.a.createElement(m,c({ref:t},p,{components:r})):n.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);