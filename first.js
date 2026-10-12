// // DOM - Document Object Model
// // When JS runs in a browser, it needs a way to interact with the HTML on the page — every time a webpage does something dynamic (button click shows a popup, form validates input, content loads without page refresh) — that's JS using the DOM.

// // console.dir vs console.log :
// // console.log prints the HTML representation of the element — you see it as markup.
// // console.dir prints the element as a JavaScript object — you see all its properties and methods.

// // How to access elements:
// // by id — returns single element - 
// let firstHeading= document.getElementById("id1");
// console.log(firstHeading);
// console.dir(firstHeading);

// // by class — returns HTMLCollection (like array) - 
// let firstClass= document.getElementsByClassName("class1");
// console.log(firstClass);           //HTMLCollection(2) [p.class1, p.class1]
// console.dir(firstClass);           //HTMLCollection(2)

// // by tag — returns HTMLCollection - 
// let byTagName= document.getElementsByTagName("p");
// console.log(byTagName);
// console.dir(byTagName);

// // modern way — CSS selector, returns first match - 
// let a= document.querySelector("p");
// let b= document.querySelector(".class1");
// let c= document.querySelector("#id1");
// console.log(a);
// console.log(b);
// console.log(c);
// console.dir(a);
// console.dir(b);
// console.dir(c);

// // modern way — returns ALL matches as NodeList - 
// let d= document.querySelectorAll("p")
// let e= document.querySelectorAll(".class1");
// console.log(d);
// console.log(e);
// console.dir(d);
// console.dir(e);

// // How to modify the elements and text - DOM Manipulation
// // We have - innerText, innerHTML, textContent
// let h1= document.querySelector("h1");
// h1.textContent= "It's the Biggest Heading";
// h1.innerText= "H1 is for Big and main Headings";
// h1.innerHTML= "Something Something Big..";

// // We use innerHTML to put actual HTML code inside an element.
// h1.innerHTML= "<i> Changed HTML content with innerHTML</i>";

// // We use textContent to change plaint text; It ignores styling and even show hidden elements
// let p1= document.querySelector("p");
// console.dir(p1.innerText);                         //output- This is the first para
// console.dir(p1.textContent);                       //output- This is the Hidden Textfirst para


// // ATTRIBUTE Manipulation - 
// // HTML elements have attributes — id, class, src, href, disabled, placeholder etc. These methods let you read and change them via JS.
// let att= document.querySelector("a");

// // get an attribute's value
// console.log(att.getAttribute("href"));             //We get the value from getAttribute()
// console.dir(att.getAttribute("href"));

// // set or change an attribute
// att.setAttribute("href", "https://www.python.org/");          //We set the value from setAttribute; We write where to set attribute first then what's the attribute 
// console.log(att.getAttribute("href"));

// // remove an attribute
// att.removeAttribute("href");
// console.log(att.getAttribute("href"));                 //null - because the attribute has been removed;

// // check if attribute exists
// console.log(att.hasAttribute("href"));
// att.setAttribute("href", "https://javascript.info/");
// console.log(att.hasAttribute("href"));

// // For common attributes we can also use direct property access — cleaner:
// att.href= "https://www.python.org/";



// // Dynamic DOM manipulation means creating, adding, removing, or changing HTML elements using JavaScript while the page is running — instead of writing everything in the HTML file beforehand.
// // Common methods - createElement(), appendChild(), append(), prepend(), remove(), replaceChild()

// let h3= document.createElement("h3");
// h3.textContent= "New element created with DOM";
// document.body.append(h3);                               //Prepend put the element below every element

// //AND

// let h2= document.createElement("h2");
// h2.textContent= "New h2 created with DOM";
// document.querySelector("body").prepend(h2);                  //Prepend put the element above every element

// // AND
// document.querySelector("h1").remove();                  // removed the h1 element

// // Use append in modern code — it's more flexible. appendChild is the older method, we'll see it in older codebases and tutorials.

// let btn= document.createElement("button");
// btn.textContent= "Click Here";
// btn.classList.add("btn");
// // let scriptTag= document.querySelector("script");
// // scriptTag.parentNode.insertBefore(btn, scriptTag);
// // OR - 
// // scriptTag.before(btn);
// // OR - 
// document.querySelector("script").before(btn);

// // Similarly we can use after to put any element just below the mentioned element..

// //  REMOVE Child - 
// // document.querySelector("body").children[1].remove();             //second children got removed (index 1);
// // OR - 
// let body= document.querySelector("body");
// body.removeChild(body.children[1]);                            // second children got removed (index 1);

// // We can also remove any paragraph (p) - 
// document.querySelectorAll("p")[1].remove();                    // removes 2nd paragraph 

// // Replace Child - replaces one element with another;
// let oldPara = document.querySelector("p");
// let newHeading = document.createElement("h2");
// newHeading.textContent = "newHeading h2 replaced the paragraph p";
// body.replaceChild(newHeading, oldPara);


// // Styling with JS - CSS:
// btn.style.backgroundColor= "#7FFFD4";
// btn.style.fontFamily= "Gilroy";
// newHeading.style.textTransform= "capitalize";
// // Similarly we can change every CSS properties;


// // ClassList- add, remove and Toggle - 
// // btn.classList.add("") - adds a class
// // btn.classList.remove("") - removes a class
// // btn.classList.toggle("") - If class is present then removes and if there is no class then adds;
// console.log(btn.classList);
// console.dir(btn.classList);
// btn.classList.toggle("btn");
// console.log(btn.classList);


// let getClass= document.getElementsByClassName("class1");
// console.log(getClass);                       // HTMLCollection(3) [h2.class1, p.class1, p.class1]
// console.dir(getClass);

// let listItems= document.querySelectorAll("li");
// listItems.forEach((val)=> {
//     console.log(val.textContent);
// })
// // OR - with normal loop;
// for(let i=0; i<listItems.length; i++){
//     console.log(listItems[i].textContent);
// }


// let a= document.querySelector("p");
// a.innerHTML= "<b> Updated </b> by JS";


// Adding a background of red to only list who are in even number position - 
// let list= document.querySelectorAll("li");
// for(let i=0; i<list.length; i++){
//     if(i%2===0){
//         list[i].style.backgroundColor= "red";
//     }
// }
// OR - by forEach:
// list.forEach((item, index)=>{
//     if(index%2===0){
//         list[index].style.backgroundColor= "red";
//     }
// })


// EVENTS AND EVENTS HANDLING - 
// addEvent and removeEvent - 
let heading1= document.querySelector("h1");
// function changeColor(){
//     heading1.style.color= "#7FFFD4";
// };
// heading1.addEventListener("click", changeColor);
// heading1.removeEventListener("click", changeColor);

// OR - 

heading1.addEventListener("dblclick", function(){
    heading1.style.color= "red";
});

heading1.addEventListener("click", (event) => {                     // It gives the events details when click on the element; 
    console.log(event.target);    // element that was clicked       // <h1 id="id1"> This is the Largest Heading</h1>
    console.log(event.type);      // "click"                        // click
    console.log(event.clientX);   // mouse X position               // 344
    console.log(event.clientY);   // mouse Y position               // 29
});

// Dark Mode and Light Mode toggle - 
let btn2= document.createElement("button");
btn2.textContent= "Dark Mode?";
document.querySelector("body").prepend(btn2);
// btn2.style.fontSize= "1.1rem";
// btn2.style.padding= "0.3rem 0.6rem";
// btn2.style.marginInline= "60rem";
// btn2.addEventListener("click", function(){
//     document.body.classList.toggle("dark");

//     if(document.body.classList.contains("dark")){
//         // switch to dark
//         btn2.textContent= "Light Mode?";
//         document.querySelector("body").style.backgroundColor= "#121212";
//         document.querySelector("body").style.color= "#eee";
//     } else{
//         //switch to light
//         btn2.textContent= "Dark Mode?";
//         document.querySelector("body").style.backgroundColor= "white";
//         document.querySelector("body").style.color= "black";   
//     }
// });

//  OR more cleaner version would be write styles in css itself. ex- 
btn2.addEventListener("click", function(){
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        // switch to dark
        btn2.textContent= "Light Mode?";
    } else{
        //switch to light
        btn2.textContent= "Dark Mode?";
    }
});


// Mouse related Events :
// We have already used click. Similarly we use dblclick for double click;

// mouseenter and mouseleave -
const box=document.querySelector(".hoverBox");
// Triggers when mouse cursor steps inside the box
box.addEventListener("mouseenter", function(){
    box.style.backgroundColor = "lightcoral";
    box.textContent = "Welcome inside!";
});
// Triggers when mouse cursor steps outside the box
  box.addEventListener("mouseleave", function() {
    box.style.backgroundColor = "lightblue";
    box.textContent = "Hover over me!";
  });

// mouseover and mouseout - 
// If your main box has a child element inside it (like a button or a heading), mouseover will trigger again when you move your mouse onto that child element.
// mouseenter stays quiet and only tracks the outer boundary.
const parent = document.querySelector("#parentBox");
const countSpan = document.querySelector("#count");
let counter = 0;

  // Try moving your mouse between the gray box and the button.
  // The counter will keep going up because it detects child elements!
parent.addEventListener("mouseover", function(){
    counter++;
    countSpan.textContent = counter;
});

// mousedown and mouseup - 
// A standard click event is actually a combination of two separate actions: pressing down and letting go.
// mousedown triggers the exact millisecond the mouse button is pressed down.
// mouseup triggers the millisecond the mouse button is released.

const pressBtn = document.querySelector(".pressBtn");
// Triggers when you press your mouse click down
pressBtn.addEventListener("mousedown", function(){
    pressBtn.style.backgroundColor = "orange";
    pressBtn.textContent = "Holding down...";
});

// Triggers when you let go of the mouse click
pressBtn.addEventListener("mouseup", function(){
    pressBtn.style.backgroundColor = "gold";
    pressBtn.textContent = "Press and Hold Me!";
});


// mousemove - This event fires continuously every single pixel your mouse moves over an element.
//  It is commonly used for tracking coordinates or making custom mouse cursors.
const area = document.querySelector("#trackArea");
const text = document.querySelector("#coordinates");

// 'event' (or 'e') is an object provided by JS that holds info about the event.
area.addEventListener("mousemove", function(event) {
    // offsetX and offsetY give the coordinates relative to the box boundary
    let x = event.offsetX;
    let y = event.offsetY;
    
    text.textContent = `X: ${x}, Y: ${y}`;
});


// FORMS and INPUTS - The input event triggers every single time a user types or changes something inside a text field, checkbox, or textarea.
// Real-World Use: real-time password strength bars.
const input1= document.querySelector("#usernameInput");
const preview = document.querySelector("#previewText");
// Fires immediately with every character typed or deleted
input1.addEventListener("input", function(event) {
    // event.target.value gets exactly what is typed inside the input box
    preview.textContent = event.target.value;
});


// change - Unline input, For a text field, it only triggers when the user finishes typing and clicks away (blurs) from the input field.
const selectl = document.querySelector("#colorSelect");
// Fires only when a new option is completely selected
selectl.addEventListener("change", function(event) {
    document.body.style.backgroundColor = event.target.value;
});


// submit - This event belongs to the <form> tag. It triggers when a user clicks a "Submit" button or presses Enter inside a form.
// Crucial Rule: By default, forms try to refresh the browser page when submitted. 
// We use event.preventDefault() to stop this so JavaScript can handle the data smoothly without page reloads (exactly how web apps like WhatsApp & Gmail Web work).
const form = document.querySelector("#loginForm");
const todoItem = document.querySelector("#todoItem");
const taskList = document.querySelector("#taskList");

form.addEventListener("submit", function(detail) {
    // 1. STOP the page from refreshing automatically
    detail.preventDefault();                            // prevent default behaviour of browser;

    // 2. Do what you want with the data (e.g., make a list item)
    const newLi = document.createElement("li");
    newLi.textContent = todoItem.value;
    taskList.appendChild(newLi);

    // 3. Clear the input field box for the next item
    todoItem.value = "";
});

// focus & blur - focus triggers the millisecond a user clicks inside an input box to start typing.
// blur triggers the millisecond a user clicks outside or leaves the input box.
// Real World Use: Highlighting a text box with a blue border when active (focus), and validating if an email format is correct after they leave it (blur).
const emailInput = document.querySelector("#emailInput");
const msg = document.querySelector("#message");

// When user clicks into the text box
emailInput.addEventListener("focus", function() {
    emailInput.style.borderColor = "blue";
    msg.textContent = "Typing...";
});

// When user clicks out of the text box
emailInput.addEventListener("blur", function() {
    emailInput.style.borderColor = "gray";
    msg.textContent = "Input saved / left in half.";
});


// Keyboard Events - These are the two main keyboard events used in modern web development.
// keydown: Fires the exact millisecond a key is pressed down. If you hold the key down, it will keep firing repeatedly.
// keyup: Fires only when you let go of the key.
const box1 = document.querySelector("#box1");
const statusText = document.querySelector("#status");

// We attach keyboard events to 'window' so it listens anywhere on the page
window.addEventListener("keydown", function(event){
    box1.style.transform = "scale(1.2)";             // Grows bigger when key is pressed
    statusText.textContent = `You are pressing: ${event.key}`;
});

window.addEventListener("keyup", function(event) {
    box1.style.transform = "scale(1)"; // Shrinks back when you release
    statusText.textContent = "Key released!";
});

// a practice game using keydown and keyup events - 
const player = document.querySelector("#player");
let positionX = 0;                          // Starting position in pixels
let positionY = 0;

window.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight"){
      positionX += 20;                      // Move 20px right
      player.style.left = positionX + "px";
    } 
    else if (event.key === "ArrowLeft"){
      positionX -= 20;                      // Move 20px left
      player.style.left = positionX + "px";
    }
    else if(event.key === "ArrowUp"){
        positionY += 20;
        player.style.top = positionY + "px";     
    }
    else if(event.key === "ArrowDown"){
        positionY -= 20;
        player.style.top = positionY + "px";     
    }
});


// DOMContentLoaded (HTML is ready) vs load (everything including images is ready) - 
// DOMContentLoaded (HTML Ready): Triggers the exact millisecond the browser finishes loading the basic HTML structure and builds the DOM tree. 
// It does not wait for heavy images, stylesheets, or ads to finish loading. It is the best place to put your JavaScript so it runs as fast as possible.

// This will fire FIRST
document.addEventListener("DOMContentLoaded", function() {
    console.log("HTML structure is ready! You can select elements safely now.");
});

// load (Everything Ready): Triggers only when the entire page is fully loaded, including all massive images, CSS files, frames, and external scripts.

// This will fire LATER (after images load)
window.addEventListener("load", function(){
    console.log("The entire website (including heavy images) has finished loading!");
});


// scroll - This event fires continuously as the user scrolls up or down the webpage
// Real-World Use: Creating a "Back to Top" button that only appears after scrolling down, etc..

const nav = document.querySelector("#navDiv");

window.addEventListener("scroll", function(){
    // window.scrollY tells us how many pixels the user has scrolled down
    if (window.scrollY > 600) {
        nav.style.backgroundColor = "black";
        nav.style.color = "white";
    } else {
        nav.style.backgroundColor = "lightcoral";
        nav.style.color = "black";
    }
});


// resize - This event triggers whenever the browser window size changes 
// e.g., maximizing the window, pulling the edges to make it smaller, or flipping a mobile phone from portrait to landscape mode.
const dimensionsText = document.querySelector("#dimensions");

window.addEventListener("resize", function(){
    // window.innerWidth and innerHeight captures the current width and height of the browser view screen;
    let currentWidth = window.innerWidth;
    let currentHeight = window.innerHeight;
    dimensionsText.textContent = `Width: ${currentWidth}px, Height: ${currentHeight}px`;
});


// event.target & event.currentTarget:
// • event.target (The Origin): The exact element you actually clicked on (the absolute target).
// • event.currentTarget (The Owner): The element that holds the addEventListener that is currently running.

// We attach the listener ONLY to the parent box - 
parent.addEventListener("click", function(event){
    // If you click the button:
    console.log("target:", event.target);               // Output: <button> element
    console.log("currentTarget:", event.currentTarget); // Output: <div> element
});


// event.type - This is a simple property that returns a string representing the name of the event that was triggered (e.g., "click", "mouseover", "keydown"). 
// It is incredibly useful if you are using a single function to handle multiple types of events.

function handleEvent(event){
    console.log(`The event type is: ${event.type}`);
};
pressBtn.addEventListener("click", handleEvent);
pressBtn.addEventListener("mouseover", handleEvent);


// event.preventDefault() - Browsers have built-in default actions for certain elements. For example, clicking a link (<a>) and submitting a form (<form>).
// preventDefault() tells the browser: "Stop! Do not do your default behavior. Let my JavaScript handle it instead."

const link = document.querySelector("#myLink");

link.addEventListener("click", function(event) {
    event.preventDefault();                      // Prevents the browser from opening Google!
    alert("Google is blocked! JavaScript is in control.");
});


// event bubbling (the natural default) - When an event happens on an HTML element, it doesn't just stop there. 
// It bubbles up to its parent element, then to its grandparent element, all the way up to the top (window), triggering any event listeners attached along that path.

// If you click the child button, ALL THREE alerts will trigger one after another!
// document.querySelector("#grandparent").addEventListener("click", function() {
//     alert("Grandparent Clicked!");
// });

// document.querySelector("#parent").addEventListener("click", function() {
//     alert("Parent Clicked!");
// });

// document.querySelector("#child").addEventListener("click", function() {
//     alert("Child Clicked!");
// });

// event.stopPropagation() - What if you only want the child button's click behavior to run and want to block it from triggering the parent boxes?
// This is where you use a special method: event.stopPropagation(). It snaps the event chain in half and stops the bubble from rising.

// document.querySelector("#child").addEventListener("click", function(){
//     // Stops the event from traveling up to Parent and Grandparent!
//     event.stopPropagation(); 
//     alert("Only the Child button was clicked!");
// });


// Event Capturing / Trickling - Event Capturing is the exact opposite of bubbling. 
// Instead of going from the bottom up, the event starts at the very top (window / document) and trickles down to the element you actually clicked.
// By default, JavaScript runs everything in the bubbling phase. 
// If we want to force an event to run during the capturing phase instead, we need to pass a third argument true inside your addEventListener.

document.querySelector("#grandparent").addEventListener("click", () => alert("grandParent"), true);
document.querySelector("#parent").addEventListener("click", () => alert("Parent"), true);
document.querySelector("#child").addEventListener("click", () => alert("Child"), true);

// Event Delegation - Event delegation is a design pattern in JS where we attach a single event listener to a parent element instead of adding individual listeners to multiple child elements.

const parentList = document.querySelector("#itemList");
// Only ONE event listener manages every current and future list item!
parentList.addEventListener("click", function(detail) {
    // event.target tells us exactly which specific child was clicked;
    if (detail.target.tagName === "LI") {
      detail.target.classList.toggle("lt");
    }
});


// once - runs only once, then removes itself:

const claimBtn = document.querySelector("#claimBtn");
// This code runs on the first click, then deletes itself automatically!
claimBtn.addEventListener("click", function(){
  alert("Cashback claimed! You cannot claim it again.");
}, { once: true }); 



// File selecting project practice using events - 
const fileinp= document.querySelector("#fileinp");
const btnDiv= document.querySelector("#btnDiv");
btnDiv.addEventListener("click", function(){
    fileinp.click();
})
// fileinp.addEventListener("change", function(detail){                         
//     btnDiv.textContent= detail.target?.files[0].name;   //but this will cause error if we cancel without selecting the file cause then there will be no name of file;
// })
fileinp.addEventListener("change", function(detail){
    const file= detail.target.files[0];
    if(file){
        btnDiv.textContent= file.name;
    }
});

