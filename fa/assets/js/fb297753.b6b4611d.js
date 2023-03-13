"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[634],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),h=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=h(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=h(a),c=n,u=d["".concat(l,".").concat(c)]||d[c]||g[c]||i;return a?r.createElement(u,o(o({ref:t},p),{},{components:a})):r.createElement(u,o({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var h=2;h<i;h++)o[h]=a[h];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},789:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:2},o="Headings, Paragraphs and Images",s={unversionedId:"html/heading-paragraph-images",id:"html/heading-paragraph-images",title:"Headings, Paragraphs and Images",description:"Headings",source:"@site/docs/html/heading-paragraph-images.md",sourceDirName:"html",slug:"/html/heading-paragraph-images",permalink:"/html-css-javascript-tutorial/fa/html/heading-paragraph-images",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction To HTML",permalink:"/html-css-javascript-tutorial/fa/html/introduction"},next:{title:"Comments, Linebreaks, Links, and other Html elements",permalink:"/html-css-javascript-tutorial/fa/html/html-comments-links-elements"}},l={},h=[{value:"Headings",id:"headings",level:2},{value:"Paragraphs",id:"paragraphs",level:2},{value:"Image basics",id:"image-basics",level:2},{value:"Images in a different directory and from the web",id:"images-in-a-different-directory-and-from-the-web",level:3},{value:"Width and Height",id:"width-and-height",level:3}],p={toc:h};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"headings-paragraphs-and-images"},"Headings, Paragraphs and Images"),(0,n.kt)("h2",{id:"headings"},"Headings"),(0,n.kt)("p",null,"So, let's talk about the headings. The headings have a hierarchical structure with ",(0,n.kt)("inlineCode",{parentName:"p"},"h1")," being the highest and ",(0,n.kt)("inlineCode",{parentName:"p"},"h6")," being the smallest. "),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<h1>This is the first</h1>\n<h2>This is the second</h2>\n<h3>This is the third</h3>\n<h4>This is the fourth</h4>\n<h5>This is the fifth</h5>\n<h6>This is the sixth</h6>\n")),(0,n.kt)("p",null,"When you enter this in your browser, it should show the hierarchical structure of the headings. You use the headings when you want to create a title or subtitles."),(0,n.kt)("h2",{id:"paragraphs"},"Paragraphs"),(0,n.kt)("p",null,"Paragraphs are used to create paragraphs or begin a sentence on a new line.\nSo let's create a paragraph:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<p>This is a paragraph</p>\n")),(0,n.kt)("p",null,"Now let's move to other html tags"),(0,n.kt)("h2",{id:"image-basics"},"Image basics"),(0,n.kt)("p",null,"Now, let us create images. You could see images on every webpage and they bring out the asthetics in every page. Images require a source attribute in it, which is denoted by the ",(0,n.kt)("inlineCode",{parentName:"p"},"src"),". Images also require an ",(0,n.kt)("inlineCode",{parentName:"p"},"alt")," attribute which means alternative to describe the image content. "),(0,n.kt)("p",null,"To create images, enter:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<img src='gif.png' alt='a young girl looking at the sun'/>\n")),(0,n.kt)("h3",{id:"images-in-a-different-directory-and-from-the-web"},"Images in a different directory and from the web"),(0,n.kt)("p",null,"The previous image I used, I assumed it to be in the same directory as the ",(0,n.kt)("inlineCode",{parentName:"p"},"index.html")," file. But what if it was in a different directory? If the ",(0,n.kt)("inlineCode",{parentName:"p"},"gif.png")," file was in a different directory say ",(0,n.kt)("inlineCode",{parentName:"p"},"images"),". Then to display the image, you would do:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<img src='./images/gif.png' alt='a young girl looking at the sun'/>\n")),(0,n.kt)("p",null,"To display an image from the web directly on the webpage, you would do:\nCopy the image address and paste it in to the ",(0,n.kt)("inlineCode",{parentName:"p"},"src")," attribute."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<img src='www.google.com/gif.png' alt='a young girl looking at the sun'/>\n")),(0,n.kt)("h3",{id:"width-and-height"},"Width and Height"),(0,n.kt)("p",null,"Images have width and height attributes which you can add to them while writing your code.\nYou could work on the previous image and give it specific height and weight values."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<img src='./images/gif.png' alt='a young girl looking at the sun' width='16' height='42'/>\n")))}d.isMDXComponent=!0}}]);