(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=(n(0),n(89)),a=n(92),c=n(95);const i={id:"custom-background",title:"Custom Background",slug:"/custom-background",hide_table_of_contents:!0},u={unversionedId:"custom-background",id:"custom-background",isDocsHomePage:!1,title:"Custom Background",description:"To override the default background, you will need to pass the prop backgroundComponent to the BottomSheet component.",source:"@site/docs/custom-background.mdx",slug:"/custom-background",permalink:"/react-native-bottom-sheet/custom-background",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/custom-background.mdx",version:"current",sidebar:"packages",previous:{title:"Custom Backdrop",permalink:"/react-native-bottom-sheet/custom-backdrop"},next:{title:"Troubleshooting",permalink:"/react-native-bottom-sheet/troubleshooting"}},s=[{value:"Example",id:"example",children:[]}],p={rightToc:s};function l({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To override the default background, you will need to pass the prop ",Object(o.b)("inlineCode",{parentName:"p"},"backgroundComponent")," to the ",Object(o.b)("inlineCode",{parentName:"p"},"BottomSheet")," component."),Object(o.b)("p",null,"When you provide your own background component, it will receive these animated props ",Object(o.b)("inlineCode",{parentName:"p"},"animatedIndex")," & ",Object(o.b)("inlineCode",{parentName:"p"},"animatedPosition")," that indicates the position and the index of the sheet."),Object(o.b)("p",null,"You can extend your custom background props interface with the provided ",Object(o.b)("inlineCode",{parentName:"p"},"BottomSheetBackgroundProps")," interface to expose ",Object(o.b)("inlineCode",{parentName:"p"},"animatedIndex")," & ",Object(o.b)("inlineCode",{parentName:"p"},"animatedPosition")," into your own interface."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)(c.a,{title:"React Native Bottom Sheet",url:Object(a.a)("video/bottom-sheet-custom-background-preview.mp4"),mdxType:"Video"}),Object(o.b)("p",null,"Here is an example of a custom background component: "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import React, { useMemo } from 'react';\nimport { BottomSheetBackgroundProps } from '@gorhom/bottom-sheet';\nimport Animated, {\n  Extrapolate,\n  interpolate,\n  interpolateColors,\n} from 'react-native-reanimated';\n\nconst CustomBackground = ({\n  animatedIndex,\n  style,\n}: BottomSheetBackgroundProps) => {\n  // animated variables\n  const animatedBackground = useMemo(\n    () =>\n      interpolateColors(animatedIndex, {\n        inputRange: [0, 1],\n        outputColorRange: ['#fff', '#a8b5eb'],\n      }),\n    [animatedIndex]\n  );\n\n  // styles\n  const containerStyle = useMemo(\n    () => [\n      style,\n      {\n        backgroundColor: animatedBackground,\n      },\n    ],\n    [style, animatedBackground]\n  );\n\n  return <Animated.View style={containerStyle} />;\n};\n\nexport default CustomBackground;\n")))}l.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,b=l["".concat(c,".").concat(m)]||l[m]||d[m]||a;return n?o.a.createElement(b,i(i({ref:t},s),{},{components:n})):o.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},92:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=n(22),o=n(91);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(r)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+c:c}(t,e,n,r)}}function c(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),o=n.n(r);var a=({title:e,url:t})=>o.a.createElement("video",{muted:!0,loop:!0,autoPlay:!0,controls:!1,playsInline:!0,title:e,width:"100%"},o.a.createElement("source",{src:t,type:"video/mp4"}))}}]);