"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[136],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=i.createContext({}),u=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(r.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,h=m["".concat(r,".").concat(c)]||m[c]||d[c]||l;return n?i.createElement(h,s(s({ref:t},p),{},{components:n})):i.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=c;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o[m]="string"==typeof e?e:a,s[1]=o;for(var u=2;u<l;u++)s[u]=n[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var i=n(7462),a=(n(7294),n(3905));const l={sidebar_position:5},s="CSS Display And Positioning",o={unversionedId:"Css/css-display-and-positioning",id:"Css/css-display-and-positioning",title:"CSS Display And Positioning",description:"Display",source:"@site/docs/Css/css-display-and-positioning.md",sourceDirName:"Css",slug:"/Css/css-display-and-positioning",permalink:"/html-css-javascript-tutorial/Css/css-display-and-positioning",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"CSS Typography And The Box model",permalink:"/html-css-javascript-tutorial/Css/css-typography-and-box-model"},next:{title:"Media queries, flexbox and css grid",permalink:"/html-css-javascript-tutorial/Css/media-queries-flexbox-and-css-grid"}},r={},u=[{value:"Display",id:"display",level:2},{value:"CSS position",id:"css-position",level:2},{value:"Static",id:"static",level:3},{value:"Sticky",id:"sticky",level:3},{value:"Fixed",id:"fixed",level:3},{value:"Relative",id:"relative",level:3},{value:"Absolute",id:"absolute",level:3}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"css-display-and-positioning"},"CSS Display And Positioning"),(0,a.kt)("h2",{id:"display"},"Display"),(0,a.kt)("p",null,"Html elements are block elements and in-line elements. When styling pages, there are cases where you would need to make a default block element inline and vice versa. With the display property, you can achieve that."),(0,a.kt)("p",null,"Example"),(0,a.kt)("p",null,"index.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  <!DOCTYPE html>\n  <html>\n    <head>\n      <meta charset=utf-8"/>\n      <title>A simple html page</title>\n      <link rel="stylesheet" href="styles.css"/>\n    </head>\n    <body>\n      <h1>This is a block element</h1>\n      <span>This is an in-line element</span>\n    </body>\n  </html>\n')),(0,a.kt)("p",null,"styles.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"h1 {\n  display: in-line;\n}\n\nspan {\n  display: block\n}\n")),(0,a.kt)("p",null,"When you run this in the browser, you would notice that ",(0,a.kt)("inlineCode",{parentName:"p"},"h1")," is now an in-line element while ",(0,a.kt)("inlineCode",{parentName:"p"},"span")," is a block element."),(0,a.kt)("h2",{id:"css-position"},"CSS position"),(0,a.kt)("p",null,"CSS has a position property which you can use to position items on a web page. There are five different values you could use for positioning and they are: static, sticky, fixed, relative and absolute."),(0,a.kt)("h3",{id:"static"},"Static"),(0,a.kt)("p",null,"This is the default positioning of html elements. "),(0,a.kt)("p",null,"Example:"),(0,a.kt)("p",null,"index.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  <!DOCTYPE html>\n  <html>\n    <head>\n      <meta charset=utf-8"/>\n      <title>A simple html page</title>\n      <link rel="stylesheet" href="styles.css"/>\n    </head>\n    <body>\n      <h1>Building A Web Page</h1>\n      <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.\n</p>\n<p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>\n    </body>\n  </html>\n')),(0,a.kt)("p",null,"styles.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"h1 {\n  position: static;\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"position: static")," does not have any effect on the element as that is the default positioning."),(0,a.kt)("h3",{id:"sticky"},"Sticky"),(0,a.kt)("p",null,"When you set the position to sticky. The text moves when you scroll on the web page and then becomes fixed when you scroll down."),(0,a.kt)("p",null,"index.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  <!DOCTYPE html>\n  <html>\n    <head>\n      <meta charset=utf-8"/>\n      <title>A simple html page</title>\n      <link rel="stylesheet" href="styles.css"/>\n    </head>\n    <body>\n      <h1>Building A Web Page</h1>\n      <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.\n</p>\n<p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>\n    </body>\n  </html>\n')),(0,a.kt)("p",null,"styles.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"h1 {\n  position: sticky;\n}\n")),(0,a.kt)("h3",{id:"fixed"},"Fixed"),(0,a.kt)("p",null,"When positioning is fixed, it remains where it is even when you scroll up or down. "),(0,a.kt)("p",null,"Example:"),(0,a.kt)("p",null,"index.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  <!DOCTYPE html>\n  <html>\n    <head>\n      <meta charset=utf-8"/>\n      <title>A simple html page</title>\n      <link rel="stylesheet" href="styles.css"/>\n    </head>\n    <body>\n      <h1>Building A Web Page</h1>\n      <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.\n</p>\n<p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>\n    </body>\n  </html>\n')),(0,a.kt)("p",null,"styles.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"h1 {\n  position: fixed;\n}\n")),(0,a.kt)("h3",{id:"relative"},"Relative"),(0,a.kt)("p",null,"When an element is set to relative, it moves away from its normal position. "),(0,a.kt)("p",null,"Example:\nindex.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  <!DOCTYPE html>\n  <html>\n    <head>\n      <meta charset=utf-8"/>\n      <title>A simple html page</title>\n      <link rel="stylesheet" href="styles.css"/>\n    </head>\n    <body>\n      <h1>Building A Web Page</h1>\n      <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.\n</p>\n<p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>\n    </body>\n  </html>\n')),(0,a.kt)("p",null,"styles.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"h1 {\n  position: relative;\n  border: 2px solid black;\n}\n")),(0,a.kt)("h3",{id:"absolute"},"Absolute"),(0,a.kt)("p",null,"In absolute position, the element is positioned away from the previous element. If there is no previous element, then it uses the body element as a benchmark."),(0,a.kt)("p",null,"Example:\nindex.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  <!DOCTYPE html>\n  <html>\n    <head>\n      <meta charset=utf-8"/>\n      <title>A simple html page</title>\n      <link rel="stylesheet" href="styles.css"/>\n    </head>\n    <body>\n      <h1>Building A Web Page</h1>\n      <p class="page">Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.\n</p>\n<p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>\n    </body>\n  </html>\n')),(0,a.kt)("p",null,"styles.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".page {\n  position: absolute;\n  border: 2px solid black;\n}\n")))}m.isMDXComponent=!0}}]);