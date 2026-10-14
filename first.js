// Timers and Intervals - 
// setTimeout and clearTimeout:
// setTimeout runs a specific piece of code exactly once after a specified waiting period.
// The delay time is written in milliseconds (1 second = 1000 milliseconds).

const alertBtn = document.querySelector("#alertBtn");
const cancelBtn = document.querySelector("#cancelAlertBtn");
const statusText = document.querySelector("#timerStatus");

let notificationTimer;                            // Variable to store the timer ID globally

alertBtn.addEventListener("click", function() {
    statusText.textContent = "Notification scheduled in 3 seconds...";

    // 1. Start the timeout and store its unique ID identifier
    notificationTimer = setTimeout(function() {
        statusText.textContent = "⏰ Time's up! Here is your alert.";
        alert("This message appeared after a 3-second delay!");
        }, 3000); 
});

// 2. Use clearTimeout to cancel it before the 3 seconds finish
cancelBtn.addEventListener("click", function() {
    clearTimeout(notificationTimer);
    statusText.textContent = "❌ Notification canceled successfully.";
});

// Real-life uses: Show a message after 3s, Auto-hide a notification, Digital clock / countdown, Auto-sliding image slider, Typing animation;

const toggleBtn = document.querySelector("#toggleBtn");
const statustxt = document.querySelector("#statusText");

let timerId = null;                 // 1. This keeps track of whether a timer is active

toggleBtn.addEventListener("click", function(){
  
    // 2. IF A TIMER IS ALREADY RUNNING: Cancel it!
    if (timerId !== null) {
        clearTimeout(timerId);                                   // Stops the background countdown
        timerId = null;                                          // Resets our tracker back to empty
    
        statustxt.textContent = "Status: Canceled! ❌";
        toggleBtn.textContent = "Start Timer (5s)";
        toggleBtn.style.backgroundColor = "";                   // Resets button color
        return;                                                 // Exit early so we don't start a new timer
    }

    // 3. IF NO TIMER IS RUNNING: Start a new one!
    statustxt.textContent = "Status: Counting down... ⏳";
    toggleBtn.textContent = "Cancel Timer";
    toggleBtn.style.backgroundColor = "lightcoral";

    timerId = setTimeout(function() {
        statustxt.textContent = "Status: Finished! 🎉 Time's up.";
        toggleBtn.textContent = "Start Timer (5s)";
        toggleBtn.style.backgroundColor = "";
        timerId = null;                                         // Reset tracker because the job is done!
        alert("5 seconds finished!");
    }, 5000);

});


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
let user = { name: "Shivansh", age: 20 };
let jsonString = JSON.stringify(user);
let backToObject = JSON.parse(jsonString);



// localStorage - 1) Stores data in the browser permanently (until you clear it);  2) Data stays even after closing the tab/browser.
// 3) Maximum ~5–10 MB;            4) Same-origin only.
localStorage.setItem("name", "Shivansh");                                 //saves item in the storage;
localStorage.setItem("user", JSON.stringify({name: "Shivansh", age: 20}));
localStorage.setItem("name", "Dibbu");                                    //we can update the value same way using setItem;
console.log(localStorage.getItem("name"));                                //fetch the item using getItem;
console.log(JSON.parse(localStorage.getItem("user")));                    //fetched item using JSON;

localStorage.clear();
console.log(localStorage);                                               // output - Storage {length: 0};


// Real Use Cases: 1) Remember dark mode preference;  2) Save cart items;   3) Remember “Login me” / stay logged in (simple cases)
// 4) Save form data so user doesn’t lose it on refresh



// sessionStorage - 1) Almost same as localStorage, but: (i) Data is deleted when the tab is closed;  (ii) Each tab has its own sessionStorage.
sessionStorage.setItem("token", "abc123");
console.log(sessionStorage.getItem("token"));
sessionStorage.removeItem("token");
sessionStorage.clear();

// Real Use Cases: 1) Temporary data for current tab only;   2) Multi-step forms (data dies when tab closes).



// Cookies - 1) Older way to store small data;        2) Can be set from frontend or backend.
// 3) Automatically sent to the server with every request (very important difference);   4) Size limit is very small (~4 KB);   5) Can have expiry date.

// Real use cases: 1) Authentication tokens / session IDs (most common);  2) Tracking (Google Analytics etc.);  
// 3)Remember user preferences (with backend involvement);      4) Language / theme settings (sometimes).

// Set cookie (frontend)
document.cookie = "username=Shivansh; expires=Fri, 31 Dec 2026 23:59:59 GMT; path=/";
console.log(document.cookie);

// Delete cookie (set expiry in the past)
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
console.log(document.cookie);