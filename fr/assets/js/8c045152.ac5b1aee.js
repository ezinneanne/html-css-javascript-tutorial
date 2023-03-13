"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[355],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=l,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const o={sidebar_position:2},r="Data types, loops, switch, and if statements",i={unversionedId:"javascript/datatypes-loops-switch-statements",id:"javascript/datatypes-loops-switch-statements",title:"Data types, loops, switch, and if statements",description:"Data types",source:"@site/docs/javascript/datatypes-loops-switch-statements.md",sourceDirName:"javascript",slug:"/javascript/datatypes-loops-switch-statements",permalink:"/html-css-javascript-tutorial/fr/javascript/datatypes-loops-switch-statements",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"JavaScript Intro",permalink:"/html-css-javascript-tutorial/fr/javascript/javascript-basics"},next:{title:"Functions and The DOM",permalink:"/html-css-javascript-tutorial/fr/javascript/functions-dom"}},s={},p=[{value:"Data types",id:"data-types",level:2},{value:"String",id:"string",level:3},{value:"Number",id:"number",level:3},{value:"Big int",id:"big-int",level:3},{value:"Boolean",id:"boolean",level:3},{value:"Null",id:"null",level:3},{value:"Undefined",id:"undefined",level:3},{value:"Object",id:"object",level:3},{value:"Symbols",id:"symbols",level:3},{value:"Loops, switch and if statements",id:"loops-switch-and-if-statements",level:2},{value:"Loops",id:"loops",level:3},{value:"Switch statement",id:"switch-statement",level:3},{value:"If statement",id:"if-statement",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"data-types-loops-switch-and-if-statements"},"Data types, loops, switch, and if statements"),(0,l.kt)("h2",{id:"data-types"},"Data types"),(0,l.kt)("p",null,"In JavaScript, there are eight data types. It is important to understand the concept of data types so you could apply variables correctly and errors. "),(0,l.kt)("p",null,"For example, combining a string with a number would give a logical error because they are of different data types."),(0,l.kt)("p",null,"The data types in JavaScript are:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"String"),(0,l.kt)("li",{parentName:"ol"},"Number"),(0,l.kt)("li",{parentName:"ol"},"Big int"),(0,l.kt)("li",{parentName:"ol"},"Boolean "),(0,l.kt)("li",{parentName:"ol"},"Null"),(0,l.kt)("li",{parentName:"ol"},"Undefined "),(0,l.kt)("li",{parentName:"ol"},"Objects"),(0,l.kt)("li",{parentName:"ol"},"Symbols")),(0,l.kt)("h3",{id:"string"},"String"),(0,l.kt)("p",null,"String datatype is denoted with single(",(0,l.kt)("inlineCode",{parentName:"p"},"''"),")or double(",(0,l.kt)("inlineCode",{parentName:"p"},'""'),") quotes and recently backticks(````)."),(0,l.kt)("p",null,"Example,"),(0,l.kt)("p",null,"main.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"let str = \"hello\"\n\nconsole.log(typeof(str));          //hello\n\nlet strs = 'great';\nconsole.log(typeof(strs));       //great\n\nlet s = `greet`;\nconsole.log(typeof(s));          //greet\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"typeof")," keyword is used to show the data type. So when you run the code, you would see ",(0,l.kt)("inlineCode",{parentName:"p"},"string")," which confirms that it is a string datatype."),(0,l.kt)("h3",{id:"number"},"Number"),(0,l.kt)("p",null,"The number data type is denoted with numbers that are stored in 64-bit floating point. Numbers include decimals and whole numbers. When you use double or single quotes on a number. JavaScript converts it as a string. "),(0,l.kt)("p",null,"Example,"),(0,l.kt)("p",null,"main.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"let x= 200;\n\nlet y = 30.00\n")),(0,l.kt)("h3",{id:"big-int"},"Big int"),(0,l.kt)("p",null,"Numbers are stored in 64-bit so big int was introduced to accommodate numbers that are longer than 64-bit."),(0,l.kt)("p",null,"Example,"),(0,l.kt)("p",null,"main.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'let z = BigInt("3000004000005000008000007000002000001111111")\n')),(0,l.kt)("h3",{id:"boolean"},"Boolean"),(0,l.kt)("p",null,"Boolean data type is used to denote ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," ."),(0,l.kt)("p",null,"Example,"),(0,l.kt)("p",null,"main.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"let a = 2;\nlet b = 3;\nlet c = '2';\n\nconsole.log(a == b);          //false\nconsole.log(a == c);         //true\n")),(0,l.kt)("p",null,"In boolean, the double equals is used to determine the value."),(0,l.kt)("p",null,"In the example above, 2 is equal to 2 because they have the same data type but you get ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," when you use the deep equals(",(0,l.kt)("inlineCode",{parentName:"p"},"==="),")."),(0,l.kt)("p",null,"The deep equals determines the value and the data type."),(0,l.kt)("p",null,"Example,\nmain.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"let a = 2;\nlet b = 3;\nlet c = '2';\n\nconsole.log(a === b);          //false\nconsole.log(a === c);         //false\n\n")),(0,l.kt)("p",null,"When you run it, you get false because they are not ",(0,l.kt)("em",{parentName:"p"},"deeply equal")," to each other."),(0,l.kt)("h3",{id:"null"},"Null"),(0,l.kt)("p",null,"Null is a data type that is used to indicate an onject that does not exist. It is denoted with ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,l.kt)("h3",{id:"undefined"},"Undefined"),(0,l.kt)("p",null,"Undefined is a data type that represents no value. When you declare a variable without assigning a value to it then it becomes ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,l.kt)("p",null,"Example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"let a;\n\nconsole.log(a);          //undefined\n")),(0,l.kt)("h3",{id:"object"},"Object"),(0,l.kt)("p",null,"It is a datatype that allows you to store various collection of entities. Object datatype includes arrays,objects and date."),(0,l.kt)("p",null,"An array consist of items(string,numbers or boolean values) in a square bracket, separated by commas.\nExample,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"let arr = ['hello',53,true,'yes'];\n")),(0,l.kt)("p",null,"An object consists of items comprising of various data types enclosed in curly brackets and separated by commas."),(0,l.kt)("p",null,"Example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'let obj = {item1:"hello",item2:53,item3:true,item4:"yes"};\n')),(0,l.kt)("p",null,"Objects are written as name:value pairrs"),(0,l.kt)("p",null,"A date is used to specify the date."),(0,l.kt)("p",null,"Example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'let dates = new Date("2023-03-03");\n')),(0,l.kt)("h3",{id:"symbols"},"Symbols"),(0,l.kt)("p",null,"Symbols are used to create unique values. Their values do not change and they are unique too."),(0,l.kt)("p",null,"Example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"let firstSymbol = Symbol(800)\n\nlet secondSymbol = Symbol(800)\n")),(0,l.kt)("p",null,"Both ",(0,l.kt)("inlineCode",{parentName:"p"},"firstSymbol")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"secondSymbol")," are different even though they have different values."),(0,l.kt)("h2",{id:"loops-switch-and-if-statements"},"Loops, switch and if statements"),(0,l.kt)("h3",{id:"loops"},"Loops"),(0,l.kt)("p",null,"You use loops to run a particular block of code continuously.\nThere are about three types of loops in JavaScript and they are:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"For Loops"),(0,l.kt)("li",{parentName:"ol"},"While Loops "),(0,l.kt)("li",{parentName:"ol"},"Do While Loops")),(0,l.kt)("p",null,"For and while loops are more popular than do while loops."),(0,l.kt)("p",null,"Example of a For Loop,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"for(let i = 0; i< arr.length; i++) {\n   //Block of code\n}\n")),(0,l.kt)("p",null,"With the code above, you can make that block of code run 10 times."),(0,l.kt)("p",null,"There are other types of for loops which are more recent:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"for-of loop")," - ",(0,l.kt)("inlineCode",{parentName:"p"},"for(let i of arr){ }"),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"forEach")," - uses a function to loop over items.\n",(0,l.kt)("inlineCode",{parentName:"p"},"for-in loop")," - used in looping through objects."),(0,l.kt)("p",null,"While loops run when the condition is true and stops when it becomes false."),(0,l.kt)("p",null,"Example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"while (i < 5) {\n   //Block of code\n   i++;\n}\n")),(0,l.kt)("p",null,"Do-while loops run initially before checking if the condition is true then it would either run or stop running."),(0,l.kt)("p",null,"Example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"do {\n   //Block of code\n   i++;\n}\nwhile(i < 5);\n")),(0,l.kt)("h3",{id:"switch-statement"},"Switch statement"),(0,l.kt)("p",null,"The switch is a conditional statement that runs through a series of conditions and selects which is true."),(0,l.kt)("p",null,"Example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"const currentTutorial = \"JavaScript\";\nswitch (currentTutorial) {\n   case \"html forms\": \n      console.log('learning html forms');\n      break;\n   case \"css flexbox\":\n      console.log('learning css flexbox');\n      break;\n   default:\n      console.log('Yet to begin');\n}\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," keyword is used when all the conditions do not meet the expression which is ",(0,l.kt)("em",{parentName:"p"},"JavaScript"),"."),(0,l.kt)("h3",{id:"if-statement"},"If statement"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"if")," is another type of conditional statement that runs through a series of conditions and only returns a true value. "),(0,l.kt)("p",null,"To use an if statement with multiple lines of code would involve using ",(0,l.kt)("inlineCode",{parentName:"p"},"else if")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"else")," statements."),(0,l.kt)("p",null,"Example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'if (2 === 5) {\n  console.log(5);\n}\nelse if (2 < 5) {\n  console.log(2);\n}\nelse {\n  console.log("none of the values");\n}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"else")," is used as a default in case none of the conditions is true."))}c.isMDXComponent=!0}}]);