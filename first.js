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

const otpInp= document.querySelector("#otpInput");
const timer= document.querySelector("#timerDisplay");
const verifyBtn= document.querySelector("#verifyBtn");
const resendBtn= document.querySelector("#resendBtn");
const numericOTPRegex= /^[0-9]{6}$/;

let countdown = null;
let timeLeft= 20;

function startTimer(){
    // Reset initial values -
    timeLeft = 20;
    timer.textContent= `Time Remaining: ${timeLeft} s`;
    timer.style.color= "crimson";
    resendBtn.disabled= true;
    resendBtn.style.cursor= "not-allowed";
    resendBtn.style.background = "gray";
    verifyBtn.disabled = false;
    verifyBtn.style.background = "green";
    verifyBtn.style.cursor = "pointer";

    countdown= setInterval(function(){
        timeLeft--;
        timer.textContent= `Time remaining: ${timeLeft} s`;

        if(timeLeft<=0){
            clearInterval(countdown);
            countdown= null;

            timer.textContent= "❌ OTP Expired! Please request a new one.";
            verifyBtn.disabled= true;
            verifyBtn.style.background= "gray";
            verifyBtn.style.cursor= "not-allowed";

            resendBtn.disabled= false;
            resendBtn.style.cursor= "pointer";
            resendBtn.style.background= "#007bff";
        }
    }, 1000);
}

startTimer();

resendBtn.addEventListener("click", function(){
    alert("New OTP sent successfully");
    startTimer();
});

verifyBtn.addEventListener("click", function(){
    const enteredvalue= otpInp.value.trim();
    if(!numericOTPRegex.test(enteredvalue)){
        alert("❌ Invalid Code Format! Please enter a numeric code containing exactly 6 digits.")
        otpInp.value= "";
        return;
    }
    if(otpInp.value.length === 6){
        clearInterval(countdown);
        timer.textContent= "🎉 Verification Successful!";
        timer.style.color= "green";
    }
});