// DOM - Document Object Model
// When JS runs in a browser, it needs a way to interact with the HTML on the page — every time a webpage does something dynamic (button click shows a popup, form validates input, content loads without page refresh) — that's JS using the DOM.

// console.dir vs console.log :
// console.log prints the HTML representation of the element — you see it as markup.
// console.dir prints the element as a JavaScript object — you see all its properties and methods.

// How to access elements:
// by id — returns single element - 
let firstHeading= document.getElementById("id1");
console.log(firstHeading);
console.dir(firstHeading);

// by class — returns HTMLCollection (like array) - 
let firstClass= document.getElementsByClassName("class1");
console.log(firstClass);           //HTMLCollection(2) [p.class1, p.class1]
console.dir(firstClass);           //HTMLCollection(2)

// by tag — returns HTMLCollection - 
let byTagName= document.getElementsByTagName("p");
console.log(byTagName);
console.dir(byTagName);

// modern way — CSS selector, returns first match - 
let a= document.querySelector("p");
let b= document.querySelector(".class1");
let c= document.querySelector("#id1");
console.log(a);
console.log(b);
console.log(c);
console.dir(a);
console.dir(b);
console.dir(c);

// modern way — returns ALL matches as NodeList - 
let d= document.querySelectorAll("p")
let e= document.querySelectorAll(".class1");
console.log(d);
console.log(e);
console.dir(d);
console.dir(e);

// How to modify the elements and text - DOM Manipulation
// We have - innerText, innerHTML, textContent
let h1= document.querySelector("h1");
h1.textContent= "It's the Biggest Heading";
h1.innerText= "H1 is for Big and main Headings";
h1.innerHTML= "Something Something Big..";

// We use innerHTML to put actual HTML code inside an element.
h1.innerHTML= "<i> Changed HTML content with innerHTML</i>";

// We use textContent to change plaint text; It ignores styling and even show hidden elements
let p1= document.querySelector("p");
console.dir(p1.innerText);                         //output- This is the first para
console.dir(p1.textContent);                       //output- This is the Hidden Textfirst para
