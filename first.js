// Timers and Intervals - 
// setTimeout and clearTimeout:
// setTimeout runs a specific piece of code exactly once after a specified waiting period.
// The delay time is written in milliseconds (1 second = 1000 milliseconds).

// const alertBtn = document.querySelector("#alertBtn");
// const cancelBtn = document.querySelector("#cancelAlertBtn");
// const statusText = document.querySelector("#timerStatus");

// let notificationTimer;                            // Variable to store the timer ID globally

// alertBtn.addEventListener("click", function() {
//     statusText.textContent = "Notification scheduled in 3 seconds...";

//     // 1. Start the timeout and store its unique ID identifier
//     notificationTimer = setTimeout(function() {
//         statusText.textContent = "⏰ Time's up! Here is your alert.";
//         alert("This message appeared after a 3-second delay!");
//         }, 3000); 
// });

// 2. Use clearTimeout to cancel it before the 3 seconds finish
// cancelBtn.addEventListener("click", function() {
//     clearTimeout(notificationTimer);
//     statusText.textContent = "❌ Notification canceled successfully.";
// });

// Real-life uses: Show a message after 3s, Auto-hide a notification, Digital clock / countdown, Auto-sliding image slider, Typing animation;

// const toggleBtn = document.querySelector("#toggleBtn");
// const statustxt = document.querySelector("#statusText");

// let timerId = null;                 // 1. This keeps track of whether a timer is active

// toggleBtn.addEventListener("click", function(){
  
//     // 2. IF A TIMER IS ALREADY RUNNING: Cancel it!
//     if (timerId !== null) {
//         clearTimeout(timerId);                                   // Stops the background countdown
//         timerId = null;                                          // Resets our tracker back to empty
    
//         statustxt.textContent = "Status: Canceled! ❌";
//         toggleBtn.textContent = "Start Timer (5s)";
//         toggleBtn.style.backgroundColor = "";                   // Resets button color
//         return;                                                 // Exit early so we don't start a new timer
//     }

//     // 3. IF NO TIMER IS RUNNING: Start a new one!
//     statustxt.textContent = "Status: Counting down... ⏳";
//     toggleBtn.textContent = "Cancel Timer";
//     toggleBtn.style.backgroundColor = "lightcoral";

//     timerId = setTimeout(function() {
//         statustxt.textContent = "Status: Finished! 🎉 Time's up.";
//         toggleBtn.textContent = "Start Timer (5s)";
//         toggleBtn.style.backgroundColor = "";
//         timerId = null;                                         // Reset tracker because the job is done!
//         alert("5 seconds finished!");
//     }, 5000);

// });


// setInterval vs. clearInterval: 
// Unlike timeouts, setInterval acts like a loop on a strict schedule. It executes a function repeatedly over and over again at every specified time interval gap.

// const otpInp= document.querySelector("#otpInput");
// const timer= document.querySelector("#timerDisplay");
// const verifyBtn= document.querySelector("#verifyBtn");
// const resendBtn= document.querySelector("#resendBtn");
// const numericOTPRegex= /^[0-9]{6}$/;

// let countdown = null;
// let timeLeft= 20;

// function startTimer(){
//     // Reset initial values -
//     timeLeft = 20;
//     timer.textContent= `Time Remaining: ${timeLeft} s`;
//     timer.style.color= "crimson";
//     resendBtn.disabled= true;
//     resendBtn.style.cursor= "not-allowed";
//     resendBtn.style.background = "gray";
//     verifyBtn.disabled = false;
//     verifyBtn.style.background = "green";
//     verifyBtn.style.cursor = "pointer";

//     countdown= setInterval(function(){
//         timeLeft--;
//         timer.textContent= `Time remaining: ${timeLeft} s`;

//         if(timeLeft<=0){
//             clearInterval(countdown);
//             countdown= null;

//             timer.textContent= "❌ OTP Expired! Please request a new one.";
//             verifyBtn.disabled= true;
//             verifyBtn.style.background= "gray";
//             verifyBtn.style.cursor= "not-allowed";

//             resendBtn.disabled= false;
//             resendBtn.style.cursor= "pointer";
//             resendBtn.style.background= "#007bff";
//         }
//     }, 1000);
// }

// startTimer();

// resendBtn.addEventListener("click", function(){
//     alert("New OTP sent successfully");
//     startTimer();
// });

// verifyBtn.addEventListener("click", function(){
//     const enteredvalue= otpInp.value.trim();
//     if(!numericOTPRegex.test(enteredvalue)){
//         alert("❌ Invalid Code Format! Please enter a numeric code containing exactly 6 digits.")
//         otpInp.value= "";
//         return;
//     }
//     if(otpInp.value.length === 6){
//         clearInterval(countdown);
//         timer.textContent= "🎉 Verification Successful!";
//         timer.style.color= "green";
//     }
// });                                          // OTP Project;



// JSON - 
// JSON.stringify(): converts object and arrays into strings;
// JSON.parse(): converts the converted data of object and array into string back to there original form;
// let user = { name: "Shivansh", age: 20 };
// let jsonString = JSON.stringify(user);
// let backToObject = JSON.parse(jsonString);



// localStorage - 1) Stores data in the browser permanently (until you clear it);  2) Data stays even after closing the tab/browser.
// 3) Maximum ~5–10 MB;            4) Same-origin only.
// localStorage.setItem("name", "Shivansh");                                 //saves item in the storage;
// localStorage.setItem("user", JSON.stringify({name: "Shivansh", age: 20}));
// localStorage.setItem("name", "Dibbu");                                    //we can update the value same way using setItem;
// console.log(localStorage.getItem("name"));                                //fetch the item using getItem;
// console.log(JSON.parse(localStorage.getItem("user")));                    //fetched item using JSON;

// localStorage.clear();
// console.log(localStorage);                                               // output - Storage {length: 0};


// Real Use Cases: 1) Remember dark mode preference;  2) Save cart items;   3) Remember “Login me” / stay logged in (simple cases)
// 4) Save form data so user doesn’t lose it on refresh



// sessionStorage - 1) Almost same as localStorage, but: (i) Data is deleted when the tab is closed;  (ii) Each tab has its own sessionStorage.
// sessionStorage.setItem("token", "abc123");
// console.log(sessionStorage.getItem("token"));
// sessionStorage.removeItem("token");
// sessionStorage.clear();

// Real Use Cases: 1) Temporary data for current tab only;    2) Multi-step forms (data dies when tab closes).



// Cookies - 1) Older way to store small data;        2) Can be set from frontend or backend.
// 3) Automatically sent to the server with every request (very important difference);   4) Size limit is very small (~4 KB);   5) Can have expiry date.

// Real use cases: 1) Authentication tokens / session IDs (most common);  2) Tracking (Google Analytics etc.);  
// 3)Remember user preferences (with backend involvement);      4) Language / theme settings (sometimes).

// Set cookie (frontend)
// document.cookie = "username=Shivansh; expires=Fri, 31 Dec 2026 23:59:59 GMT; path=/";
// console.log(document.cookie);

// // Delete cookie (set expiry in the past)
// document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
// console.log(document.cookie);


// Closures example - 
// function getCount(){
//     let count = 0;
    
//     return{
//         increment: ()=>{
//             count++;
//             return count;
//         },
//         decrement: ()=>{
//             count-- ;
//             return count;
//         },
//         reset: ()=>{
//             count = 0;
//             return count;
//         },
//     }
// }
// let counter= getCount();
// console.log(counter.increment())
// console.log(counter.increment())
// console.log(counter.increment())
// console.log(counter.reset())
// console.log(counter.increment())
// console.log(counter.decrement());





// 'this' keyword in JS - 1) this refers to the object that is currently executing the function.
// Its value doesn't depends by where the function is defined, but by how and where it is called.


// Global scope -  In browser, global 'this' is the 'window' object. Everything at global level belongs to window.
console.log(this);


// Regular function -  A standalone regular function call — 'this' is window (or undefined in strict mode). Not very useful here.
function greet() {
    console.log(this);
}
greet();    // window object in browser


// Method — most common and useful : When a function is called as a method of an object, 'this' refers to that object. The object before the dot is 'this'.
const person = {
    name: "Shivansh",
    greet: function() {
        console.log(this.name);           // "Shivansh"
    }
};

person.greet();                       // this = person object
// OR 
const car = {
    brand: "Toyota",
    speed: 0,
    accelerate: function() {
        this.speed += 10;                    // this = car
        console.log(this.speed);
    }
};

car.accelerate();                // 10
car.accelerate();               // 20


// Event listeners : In a regular function event listener, this is the element the event is attached to.
document.querySelector("#demoBtn").addEventListener("click", function() {
    console.log(this);                                      // the button element
    this.style.backgroundColor = "red";                       // changes the clicked button
});


// Classes - Inside a class, 'this' refers to the instance being created or used. This is the most predictable use of 'this'.
class Person {
    constructor(name, age) {
        this.name = name;                        // this = the new object being created
        this.age = age;
    }

    greet() {
        console.log(`Hi I'm ${this.name} and I'm ${this.age} years old.`);                        // this = instance
    }
}

const p = new Person("Shivansh", 20);
p.greet();                                // Hi I'm Shivansh and I'm 20 years old.


// Arrow functions - lexical this: Arrow functions don't have their own 'this'. They inherit 'this' from wherever they were defined - their surrounding lexical scope.
const person1 = {
    name: "Shivansh",
    greet: function() {
        console.log(this.name);                                       // "Shivansh" — method, this = person

        const inner = () => {
            console.log(this.name);                                  // "Shivansh" — arrow inherits from greet
        };
        inner();
    }
};
person1.greet();

// Compare with regular function — this would be lost:
const person2 = {
    name: "Shivansh",
    greet: function() {
        const inner = function() {
            console.log(this.name);                    // undefined — regular function, this = window => so window.name returns empty string thus blank space;
        };
        inner();
    }
};
person2.greet();

// Arrow function as method- common mistake : Never use arrow functions as object methods when you need this to refer to the object. Use regular functions for methods
const person3 = {
    name: "Shivansh",
    greet: () => {
        console.log(this.name);                      // undefined — arrow inherits global this, not person;
    }
};
person3.greet();                                    // undefined

// Practical rule for arrow vs regular: 1) Use regular function for object methods and event listeners where you need this to be the object/element.
// 2) Use arrow function for callbacks inside methods where you want to keep the outer this - 
// class Timer {
//     constructor() {
//         this.seconds = 0;
//     }

//     start() {
//         setInterval(() => {
//             this.seconds++ ;                        // arrow — inherits this from start method = Timer instance
//             console.log(this.seconds);
//         }, 1000);
//     }
// }

// 1. Instantiate the object block using the 'new' keyword
// const myTimerInstance = new Timer();

// 2. Call the execution method to start the timeline tracking loop!
// myTimerInstance.start();


// call, apply, bind — manually setting this : These three methods let you explicitly control what this is.

// call() — calls function immediately with specified this :-  First argument is this, rest are regular arguments passed one by one.
// functionName.call ( thisObject, parameter1, parameter2, parameter3 );
function greet(name, country) {
    console.log(`${name} from ${this.city}, ${country}`);
}

const cityName = { city: "Bhopal" };
greet.call( cityName , "Shivansh" , "India");                        // Shivansh from Bhopal, India


// apply — same as call but arguments passed as array : Only difference from call - arguments are in an array. Useful when you already have arguments in an array.
const city1 = { city: "Rewa"  }
greet.apply(city1, ["Shivansh", "India"]);                         // Shivansh from Rewa, India


// bind — doesn't call immediately, returns a new function with this permanently set :
// bind is used when you want to save a function for later use with a specific this.  
const greetPerson = greet.bind(cityName);
greetPerson("Shivansh", "India");                     // Shivansh from Bhopal, India
greetPerson("Vishal", "India");                      // Vishal from Bhopal, India


// Real Use cases - 
// call — borrowing methods : One function, used for multiple objects without duplicating it.
const student = { name: "Shivansh", marks: 85 };
const teacher = { name: "Mr Sharma", marks: 95 };

function showInfo() {
    console.log(`${this.name}: ${this.marks}`);
}

showInfo.call(student);             // Shivansh: 85
showInfo.call(teacher);             // Mr Sharma: 95;


// apply — spreading array as arguments:
const numbers = [5, 2, 8, 1, 9];
console.log(Math.max.apply(null, numbers));               // 9

