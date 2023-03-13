"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[105],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,c=d["".concat(s,".").concat(m)]||d[m]||h[m]||a;return n?r.createElement(c,i(i({ref:t},u),{},{components:n})):r.createElement(c,i({ref:t},u))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},i="Introduction To HTML",l={unversionedId:"html/introduction",id:"html/introduction",title:"Introduction To HTML",description:"Html which stands for Hyper Text Markup Language is a markup language used in building static sites. It was invented by Tim Werners-Lee in 1993-1994. In 1994, W3C - the governing body of html was formed. Html5 came out in the 2010s and since then so many browsers have complied with it. There are modifications made to Html5, like html5.1 but these are minor modifications which do not affect the general outline of the language.",source:"@site/docs/html/introduction.md",sourceDirName:"html",slug:"/html/introduction",permalink:"/html-css-javascript-tutorial/html/introduction",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Html",permalink:"/html-css-javascript-tutorial/category/html"},next:{title:"Headings, Paragraphs and Images",permalink:"/html-css-javascript-tutorial/html/heading-paragraph-images"}},s={},p=[{value:"Creating your first webpage",id:"creating-your-first-webpage",level:2},{value:"Doctype",id:"doctype",level:2},{value:"Head elements and external links",id:"head-elements-and-external-links",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction-to-html"},"Introduction To HTML"),(0,o.kt)("p",null,"Html which stands for Hyper Text Markup Language is a markup language used in building static sites. It was invented by Tim Werners-Lee in 1993-1994. In 1994, W3C - the governing body of html was formed. Html5 came out in the 2010s and since then so many browsers have complied with it. There are modifications made to Html5, like html5.1 but these are minor modifications which do not affect the general outline of the language."),(0,o.kt)("p",null,"This tutorial will use html5 so let's start right away!"),(0,o.kt)("h2",{id:"creating-your-first-webpage"},"Creating your first webpage"),(0,o.kt)("p",null,'You are going to create your first webpage. Generally, all new programmers write "Hello World". You can write that or something different. Open your IDe. it could be vscode, atom or sublime text whichever one you are using, create a file\nwith the title ',(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," and save."),(0,o.kt)("p",null,"Type this in the file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<h1>Hello world</h1>\n")),(0,o.kt)("p",null,"Now, run it and open your web browser.  "),(0,o.kt)("p",null,"Now you used a heading tag to run that program, we will them later. Congratulations! When writing programs using html, you would need to specify the html version you are using."),(0,o.kt)("h2",{id:"doctype"},"Doctype"),(0,o.kt)("p",null,"The doctype is the html syntax to specify what html version you are using. Since, you are using Html5, you should add the doctype to your program.\nAdd this at the very top of your file, it should be the first writeup there:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<!Doctype Html>\n")),(0,o.kt)("p",null,"With that, you have the document type of your html, so let's move on to the next part."),(0,o.kt)("p",null,"Web browsers, search engine bots usually look out for some information when they check document.  First, you need to specify which language you are using. In the case of using Ennglish, you would use ",(0,o.kt)("inlineCode",{parentName:"p"},"en"),", if it was French, you would use ",(0,o.kt)("inlineCode",{parentName:"p"},"fr"),"."),(0,o.kt)("p",null,"So add this under your doctype:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<html lang='en'>\n</html>\n")),(0,o.kt)("h2",{id:"head-elements-and-external-links"},"Head elements and external links"),(0,o.kt)("p",null,"Inside the html tag you have written above, there are other information. Which is to be written in the ",(0,o.kt)("inlineCode",{parentName:"p"},"head")," tag. The ",(0,o.kt)("inlineCode",{parentName:"p"},"head")," tag contains other information which web browsers and other bots alike look for in a web page."),(0,o.kt)("p",null,"Add the ",(0,o.kt)("inlineCode",{parentName:"p"},"head")," tag inside your ",(0,o.kt)("inlineCode",{parentName:"p"},"html")," tag."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<head>\n\n</head>\n")),(0,o.kt)("p",null,"Next, would be to add the meta tags. The meta tags are for informational purposes. ",(0,o.kt)("inlineCode",{parentName:"p"},"meta charset")," is used to inform the browser about the language model in use which is ",(0,o.kt)("inlineCode",{parentName:"p"},"utf-8"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"utf-8")," is a language model which accepts every language unlike ascii which was used by English-speaking countries and few languages."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"http-equiv")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"viewport")," works for responsiveness of the site. Responsiveness is a way of making sure the html page is rendered properly on every device no matter the size. "),(0,o.kt)("p",null,"Add this to your ",(0,o.kt)("inlineCode",{parentName:"p"},"head")," tag"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<meta charset=\'utf-8\'/>\n<meta http-equiv="X-UA-Compatible" content="ie=edge" />\n<meta name="viewport"\n    content="width=device-width,\n    initial-scale=1.0"\n>\n')),(0,o.kt)("p",null,"Then you need to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"title"),". Every program has a title which is what displays at the top part of every browser. So add your title"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<title>My first webpage</title>\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"link")," is used to link your files to your html document."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<link rel="stylesheet" \n    href="styles.css"/>\n')),(0,o.kt)("p",null,"For the previous ",(0,o.kt)("inlineCode",{parentName:"p"},"h1")," which you used, you would need to insert it in a ",(0,o.kt)("inlineCode",{parentName:"p"},"body")," element. The ",(0,o.kt)("inlineCode",{parentName:"p"},"body")," element is where you write the main content of your webpage.\nSo insert the ",(0,o.kt)("inlineCode",{parentName:"p"},"h1")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"body")," element:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<body>\n  <h1>Hello world</h1>\n</body>\n")),(0,o.kt)("p",null,"The program should be like this if you have been following up."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<!Doctype html>\n<html lang=\'en\'>\n  <head>\n    <meta charset=\'utf-8\'/>\n    <meta http-equiv="X-UA-Compatible" content="ie=edge" />\n    <meta name="viewport"\n    content="width=device-width,\n    initial-scale=1.0"\n    />\n    <title>My first webpage</title>\n    <link rel="stylesheet" \n    href="styles.css"/>\n  </head>\n  <body>\n    <h1>Hello world</h1>\n </body>\n</html> \n')))}d.isMDXComponent=!0}}]);