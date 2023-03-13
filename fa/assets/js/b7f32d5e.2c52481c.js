"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[902],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||r;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:4},i="Building A Calculator with html,css and javascript",l={unversionedId:"javascript/calculator-app",id:"javascript/calculator-app",title:"Building A Calculator with html,css and javascript",description:"In this session, you are going to build a calculator application. The calculator will have a black background with white buttons and operate. With this application, you would be able to cover the core concepts of html, css and JavaScript.",source:"@site/docs/javascript/calculator-app.md",sourceDirName:"javascript",slug:"/javascript/calculator-app",permalink:"/html-css-javascript-tutorial/fa/javascript/calculator-app",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Functions and The DOM",permalink:"/html-css-javascript-tutorial/fa/javascript/functions-dom"},next:{title:"Conclusion",permalink:"/html-css-javascript-tutorial/fa/category/conclusion"}},p={},u=[{value:"Writing html",id:"writing-html",level:2},{value:"Styling the html",id:"styling-the-html",level:2},{value:"Writing JavaScript",id:"writing-javascript",level:2}],s={toc:u};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"building-a-calculator-with-htmlcss-and-javascript"},"Building A Calculator with html,css and javascript"),(0,o.kt)("p",null,"In this session, you are going to build a calculator application. The calculator will have a black background with white buttons and operate. With this application, you would be able to cover the core concepts of html, css and JavaScript."),(0,o.kt)("p",null,"Do this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a folder and save it as ",(0,o.kt)("inlineCode",{parentName:"li"},"calculator"),"."),(0,o.kt)("li",{parentName:"ul"},"Create a file in the ",(0,o.kt)("inlineCode",{parentName:"li"},"calculator")," folder and name it ",(0,o.kt)("inlineCode",{parentName:"li"},"index.html"),"."),(0,o.kt)("li",{parentName:"ul"},"Create another file in the ",(0,o.kt)("inlineCode",{parentName:"li"},"calculator")," folder and name it ",(0,o.kt)("inlineCode",{parentName:"li"},"styles.css"),"."),(0,o.kt)("li",{parentName:"ul"},"Create another file and name it ",(0,o.kt)("inlineCode",{parentName:"li"},"main.js"),".")),(0,o.kt)("h2",{id:"writing-html"},"Writing html"),(0,o.kt)("p",null,"Open the index.html and add these lines of code:"),(0,o.kt)("p",null,"index.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta http-equiv="content-type" content="text/html; charset=utf-8" />\n    <title>A calculator app</title>\n    <link rel="stylesheet" \n    href="styles.css"/>\n  </head>\n  <body>\n  </body>\n</html>\n')),(0,o.kt)("p",null,"In the code, you have created a title for the application and you linked the stylesheet in the CSS."),(0,o.kt)("p",null,"Add the ",(0,o.kt)("inlineCode",{parentName:"p"},"main.js")," file in between the ",(0,o.kt)("inlineCode",{parentName:"p"},"body")," element."),(0,o.kt)("p",null,"index.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta http-equiv="content-type" content="text/html; charset=utf-8" />\n    <title>A calculator app</title>\n    <link rel="stylesheet" \n    href="styles.css"/>\n  </head>\n  <body>\n    <script src="main.js"><\/script>\n  </body\n</html>\n')),(0,o.kt)("p",null,"With that, you have linked the JavaScript file to it."),(0,o.kt)("p",null,"This is the screenshot of the calculator and how it will look like."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of a calculator",src:n(5066).Z,width:"1365",height:"441"})),(0,o.kt)("p",null,"To begin, you will create a ",(0,o.kt)("inlineCode",{parentName:"p"},"body-wrapper")," which is the size of the calculator body. So create a ",(0,o.kt)("inlineCode",{parentName:"p"},"div")," with the id name of ",(0,o.kt)("inlineCode",{parentName:"p"},"body-wrapper"),"."),(0,o.kt)("p",null,"index.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<div id="body-wrapper"></div>\n')),(0,o.kt)("p",null,"When you look at the image above, you will notice that there is another element inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"body-wrapper")," holding the buttons in place. So, create another ",(0,o.kt)("inlineCode",{parentName:"p"},"div")," with a class name of ",(0,o.kt)("inlineCode",{parentName:"p"},"wrapper"),"."),(0,o.kt)("p",null,"index.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<div id="body-wrapper">\n  <div class="wrapper"></div>\n</div>\n')),(0,o.kt)("p",null,"When you look at the image again, you will notice you need to create some buttons and a screen. To create the screen, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," element."),(0,o.kt)("p",null,"index.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<div id="body-wrapper">\n  <div class="wrapper">\n    <input type="text" class="screen"/>\n  </div>\n</div>\n')),(0,o.kt)("p",null,"When you run the code, you notice that the input box opens when you click on it. To stop that, add ",(0,o.kt)("inlineCode",{parentName:"p"},"disabled")," to the input element."),(0,o.kt)("p",null,"The buttons will be in an element that will cover them. So create a ",(0,o.kt)("inlineCode",{parentName:"p"},"div")," with a class name of ",(0,o.kt)("inlineCode",{parentName:"p"},"buttons")," for the buttons."),(0,o.kt)("p",null,"index.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<div id="body-wrapper">\n  <div class="wrapper">\n    <input type="text" class="screen"/>\n    <div class="buttons"></div>\n  </div>\n</div>\n')),(0,o.kt)("p",null,"Now add the buttons, and when you do give it a value attribute. Because you will use the value attribute when you are working with JavaScript. "),(0,o.kt)("p",null,"index.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<div id="body-wrapper">\n  <div class="wrapper">\n    <input type="text" class="screen"/>\n    <div class="buttons">\n       <button value="clear">C</button>\n    </div>\n  </div>\n</div>\n')),(0,o.kt)("p",null,"Add the remaining buttons."),(0,o.kt)("p",null,"index.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<div id="body-wrapper">\n  <div class="wrapper">\n    <input type="text" class="screen"/>\n    <div class="buttons">\n        <button value="clear">C</button>\n        <button value="delete">DEL</button>\n        <button value="%">%</button>\n        <button value="/">&divide;</button>\n        <button value="7">7</button>\n        <button value="8">8</button>\n        <button value="9">9</button>\n        <button value="*">&times;</button>\n        <button value="4">4</button>\n        <button value="5">5</button>\n        <button value="6">6</button>\n        <button value="-">-</button>\n        <button value="1">1</button>\n        <button value="2">2</button>\n        <button value="3">3</button>\n        <button value="+">+</button>\n        <button value="0">0</button>\n        <button value=".">.</button>\n        <button value="=">=</button>\n    </div>\n  </div>\n</div>\n')),(0,o.kt)("p",null,"Now, you have added all the buttons. Next, is to style them. Open your ",(0,o.kt)("inlineCode",{parentName:"p"},"styles.css")," file."),(0,o.kt)("h2",{id:"styling-the-html"},"Styling the html"),(0,o.kt)("p",null,"You are going to set the root element to a small font so as you adjust the font-sizes of other elements you won't have unnecessary margins."),(0,o.kt)("p",null,"styles.css"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"html {\n  font-size: 62.5%;\n  box-sizing: border-box;\n}\n")),(0,o.kt)("p",null,"With the box-sizing property, you get to determine how elements are placed.\nWhen you set the box-sizing to border-box, the padding, margin and border grow inwards. So, it contains the content and does not cause it to overflow."),(0,o.kt)("p",null,"After that, set the ",(0,o.kt)("inlineCode",{parentName:"p"},"body")," element to 1.6 rem. "),(0,o.kt)("p",null,"styles.css"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"html {\n  font-size: 62.5%;\n  box-sizing: border-box;\n}\n\nbody {\n  font-size: 1.6rem;\n}\n")),(0,o.kt)("p",null,"Now, style the ",(0,o.kt)("inlineCode",{parentName:"p"},"body-wrapper"),". You will have to add some width, height, margin and padding to shape it."),(0,o.kt)("p",null,"styles.css"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"html {\n  font-size: 62.5%;\n  box-sizing: border-box;\n}\n\nbody {\n  font-size: 1.6rem;\n}\n\n#body-wrapper {\n   width: 260px;\n   height: 300px;\n   margin: 0 auto;\n   padding: 3.5rem;\n")),(0,o.kt)("p",null,"When you run the code, you would notice that it is starting to look like a calculator. The calculator is somewhat curved. So add some ",(0,o.kt)("inlineCode",{parentName:"p"},"border-radius")," and of course a ",(0,o.kt)("inlineCode",{parentName:"p"},"background-colour")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"black"),"."),(0,o.kt)("p",null,"styles.css"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"html {\n  font-size: 62.5%;\n  box-sizing: border-box;\n}\n\nbody {\n  font-size: 1.6rem;\n}\n\n#body-wrapper {\n   width: 260px;\n   height: 300px;\n   margin: 0 auto;\n   padding: 3.5rem;\n   background-colour: #000;\n   border-radius: 15px;\n}\n")),(0,o.kt)("p",null,"When you run the code, you will notice that the body is starting to form so style the ",(0,o.kt)("inlineCode",{parentName:"p"},"wrapper")," now.\nTo style ",(0,o.kt)("inlineCode",{parentName:"p"},"wrapper"),", you would need to centre the ",(0,o.kt)("inlineCode",{parentName:"p"},"wrapper"),", and centre the buttons. To differentiate between ",(0,o.kt)("inlineCode",{parentName:"p"},"wrapper")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"body-wrapper"),", give the ",(0,o.kt)("inlineCode",{parentName:"p"},"wrapper")," a brighter colour."),(0,o.kt)("p",null,"styles.css"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"html {\n  font-size: 62.5%;\n  box-sizing: border-box;\n}\n\nbody {\n  font-size: 1.6rem;\n}\n\n#body-wrapper {\n   width: 260px;\n   height: 300px;\n   margin: 0 auto;\n   padding: 3.5rem;\n   background-colour: #000;\n   border-radius: 15px;\n} \n\n.wrapper {\n  border: 3px solid black;\n  margin: 0 auto;\n  text-align: centre;\n  width: 240px;\n  height: 300px;\n  background-color: #eee;\n}\n")),(0,o.kt)("p",null,"I added a border colour of black because I need to see the element when am styling."),(0,o.kt)("p",null,"Next, style the ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," element. "),(0,o.kt)("p",null,"styles.css"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"html {\n  font-size: 62.5%;\n  box-sizing: border-box;\n}\n\nbody {\n  font-size: 1.6rem;\n}\n\n#body-wrapper {\n   width: 260px;\n   height: 300px;\n   margin: 0 auto;\n   padding: 3.5rem;\n   background-colour: #000;\n   border-radius: 15px;\n}\n\n.wrapper {\n  border: 3px solid black;\n  margin: 0 auto;\n  text-align: centre;\n  width: 240px;\n  height: 300px;\n  background-color: #eee;\n}\n\ninput[type=text] {\n  background-color: #fff;\n  text-align: right;\n  padding: 1.5 rem;\n  margin: 1rem;\n  height: 38px;\n  width: 200px;\n}\n")),(0,o.kt)("p",null,"Now you have styled the ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," element next is to style the ",(0,o.kt)("inlineCode",{parentName:"p"},"buttons")," wrapper."),(0,o.kt)("p",null,"styles.css"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"html {\n  font-size: 62.5%;\n  box-sizing: border-box;\n}\n  \nbody {\n  font-size: 1.6rem;\n}\n  \n#body-wrapper {\n  width: 260px;\n  height: 300px;\n  margin: 0 auto;\n  padding: 3.5rem;\n  background-color: #000;\n  border-radius: 15px;\n}\n  \n.wrapper {\n  border: 3px solid black;\n  margin: 0 auto;\n  text-align: center;\n  width: 240px;\n  height: 300px;\n}\n  \ninput[type=text] {\n  background-color: #fff;\n  text-align: right;\n  padding: 1.5 rem;\n  margin: 1rem;\n  height: 38px;\n  width: 200px;\n}\n  \n.buttons {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(4, 1fr); \n  gap: 5px;\n  justify-content: centre;\n  align-items: centre;\n  margin: 1rem;\n}\n")),(0,o.kt)("p",null,"I gave the ",(0,o.kt)("inlineCode",{parentName:"p"},"buttons")," a display of ",(0,o.kt)("inlineCode",{parentName:"p"},"grid")," to position them in rows and columns and a gap of 5px keeps them apart from each other. The margin keeps the buttons contained so they don't exceed the margins."),(0,o.kt)("p",null,"Next, style the buttons individually."),(0,o.kt)("p",null,"styles.css"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"html {\n  font-size: 62.5%;\n  box-sizing: border-box;\n}\n  \nbody {\n  font-size: 1.6rem;\n}\n  \n#body-wrapper {\n  width: 260px;\n  height: 300px;\n  margin: 0 auto;\n  padding: 3.5rem;\n  background-color: #000;\n  border-radius: 15px;\n}\n  \n.wrapper {\n  border: 3px solid black;\n  margin: 0 auto;\n  text-align: center;\n  width: 240px;\n  height: 300px;\n}\n  \ninput[type=text] {\n  background-color: #fff;\n  text-align: right;\n  padding: 1.5 rem;\n  margin: 1rem;\n  height: 38px;\n  width: 200px;\n}\n  \n.buttons {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(4, 1fr); \n  gap: 5px;\n  justify-content: centre;\n  align-items: centre;\n  margin: 1rem;\n}\n  \nbutton {\n  width: 50px;\n  height: 40px;\n  border-radius: 40px;\n  font-size: 1.8rem;\n  background-color: #fff;\n  color: #000;\n  font-weight: bold;\n}\n")),(0,o.kt)("p",null,"With that, you have completed the styling. One more thing, you need to remove the background colour you gave to the ",(0,o.kt)("inlineCode",{parentName:"p"},"wrapper"),"."),(0,o.kt)("h2",{id:"writing-javascript"},"Writing JavaScript"),(0,o.kt)("p",null,"When you run the code, you will see it is not working. It is just a static file. So to make it work, open your ",(0,o.kt)("inlineCode",{parentName:"p"},"main.js")," file. When you learned html DOM, you learned that ",(0,o.kt)("inlineCode",{parentName:"p"},"querySelectorAll()")," is used to select elements. Now, select the buttons and store them in the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"buttons"),"."),(0,o.kt)("p",null,"main.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'const buttons = document.querySelectorAll("button");\n\nconst mainScreen = document.querySelector(".screen");\n')),(0,o.kt)("p",null,"After selecting the buttons and the screen, use a for loop to make the buttons display on the screen when a click event happens."),(0,o.kt)("p",null,"main.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'const buttons = document.querySelectorAll("button");\n\nconst mainScreen = document.querySelector(".screen");\n\nbuttons.forEach(button => {\n    button.addEventListener("click", displayText);\n});\n')),(0,o.kt)("p",null,"Next, you need to create a function for the ",(0,o.kt)("inlineCode",{parentName:"p"},"displayText"),"."),(0,o.kt)("p",null,"main.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'function displayText(event) {\n    const buttonValue = event.target.value;\n\n    if (buttonValue === "=") {\n      if (mainScreen.value !== "") {\n        mainScreen.value = eval(mainScreen.value);\n      }\n    }\n    else if (buttonValue === "delete") {\n      mainScreen.value = mainScreen.value.substring(0, mainScreen.value.length - 1);\n    }\n    else if (buttonValue === "clear") {\n        mainScreen.value = "";\n    }\n    else {\n      mainScreen.value += buttonValue;   \n    }\n}\n')),(0,o.kt)("p",null,"Use conditional statements to make the values work only when it is true.\nThat's a wrap!!! You have built a calculator application using html,css and JavaScript."))}d.isMDXComponent=!0},5066:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screenshot_13-2f780c4d3191840cadc3655526484aa3.png"}}]);