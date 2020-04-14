(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{192:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(1),a=r(9),i=(r(0),r(201)),o={id:"thrift",title:"Apache Thrift",sidebar_label:"Apache Thrift"},c={id:"handlers/thrift",title:"Apache Thrift",description:"![image](https://user-images.githubusercontent.com/20847995/79219986-e4903080-7e5b-11ea-8220-e69ae73e7966.png)",source:"@site/docs/handlers/thrift.md",permalink:"/docs/handlers/thrift",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/handlers/thrift.md",sidebar_label:"Apache Thrift",sidebar:"sidebar",previous:{title:"OData / Microsoft Graph",permalink:"/docs/handlers/odata"},next:{title:"SQLite / Tuql",permalink:"/docs/handlers/tuql"}},l=[{value:"Config API Reference",id:"config-api-reference",children:[]}],p={rightToc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/20847995/79219986-e4903080-7e5b-11ea-8220-e69ae73e7966.png",alt:"image"}))),Object(i.b)("p",null,"This handler allows you to consume ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://thrift.apache.org/"}),"Apache Thrift")," ",Object(i.b)("inlineCode",{parentName:"p"},".thrift")," files and generate a remote executable schema for those services."),Object(i.b)("p",null,"To get started, install the handler library from NPM:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"$ yarn add @graphql-mesh/thrift\n")),Object(i.b)("p",null,"Now, you can use it directly in your Mesh config file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"sources:\n    - name: Calculator\n      handler:\n        thrift:\n          idl: ./src/thrift/calculator.thrift\n          hostName: localhost\n          port: 8080\n          path: /thrift\n          serviceName: calculator-service\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can check out our example that uses Thrift Handler.\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/tree/master/examples/thrift-example"}),"Click here to open the example on GitHub"))),Object(i.b)("h2",{id:"config-api-reference"},"Config API Reference"),Object(i.b)("p",null,Object(i.b)("ul",{parentName:"p"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"hostName")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required) - The name of the host to connect to."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"port")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Int"),", required) - The port number to attach to on the host."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"path")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),") - The path on which the Thrift service is listening. Defaults to '/thrift'."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"https")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Boolean"),") - Boolean value indicating whether to use https. Defaults to false."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"protocol")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String (binary | compact | json)"),") - Name of the Thrift protocol type to use. Defaults to 'binary'."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"serviceName")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required) - The name of your service. Used for logging."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"operationHeaders")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"JSON"),") - JSON object representing the Headers to add to the runtime of the API calls"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"schemaHeaders")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"JSON"),") - If you are using a remote URL endpoint to fetch your schema, you can set headers for the HTTP request to fetch your schema."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"idl")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required) - Path to IDL file"))))}b.isMDXComponent=!0},201:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(r),h=n,m=u["".concat(o,".").concat(h)]||u[h]||s[h]||i;return r?a.a.createElement(m,c({ref:t},p,{components:r})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);