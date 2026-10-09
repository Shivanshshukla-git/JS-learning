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


