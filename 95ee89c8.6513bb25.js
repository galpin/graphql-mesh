(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{176:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return f}));var n=r(1),o=r(9),a=(r(0),r(201)),i={id:"federation",title:"Apollo Federation Transform",sidebar_label:"Apollo Federation"},c={id:"transforms/federation",title:"Apollo Federation Transform",description:"`federation` transform allows to add the resolvers and directives to conform to the federation specification. Much of the federation sourcecode could be reused ensuring it is compliant to the specification. This transform uses [`graphql-transform-federation`](https://github.com/0xR/graphql-transform-federation) package.",source:"@site/docs/transforms/federation.md",permalink:"/docs/transforms/federation",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/transforms/federation.md",sidebar_label:"Apollo Federation",sidebar:"sidebar",previous:{title:"Mock Transform",permalink:"/docs/transforms/mock"},next:{title:"CLI",permalink:"/docs/api/cli"}},s=[{value:"How to use?",id:"how-to-use",children:[]}],l={rightToc:s};function f(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"federation")," transform allows to add the resolvers and directives to conform to the federation specification. Much of the federation sourcecode could be reused ensuring it is compliant to the specification. This transform uses ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/0xR/graphql-transform-federation"}),Object(a.b)("inlineCode",{parentName:"a"},"graphql-transform-federation"))," package."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"yarn add @graphql-mesh/transform-federation\n")),Object(a.b)("h2",{id:"how-to-use"},"How to use?"),Object(a.b)("p",null,"Add the following configuration to your Mesh config file:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),'transforms:\n  - federation: \n        types:\n            # Ensure the root queries of this schema show up the combined schema\n            - name: Query\n              config:\n                extend: true\n            - name: Product\n              config:\n                # extend Product {\n                extend: true\n                # Product @key(fields: "id") {\n                keyFields:\n                    - id\n                fields:\n                    # id: Int! @external\n                    - name: id\n                      external: true\n\n')))}f.isMDXComponent=!0},201:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),f=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},d=function(e){var t=f(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=f(r),p=n,m=d["".concat(i,".").concat(p)]||d[p]||u[p]||a;return r?o.a.createElement(m,c({ref:t},l,{components:r})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);