var a=10;
console.log(a);
var a= ++a;
console.log(a);
var a= 30;
a= 40;
console.log(a);

console.log(b);
var b = 12;

let b = 3;
let c = b;
console.log(c);
c = ++c;
console.log(b);

let a = [1,2,3];
let d = a;
console.log(d);

let a = 12;
let b = '12';
console.log(a === b);

let a = "4";
console.log(+a);
console.log(-a);

13>12? console.log(true): console.log(false)

let a = [1,2,3];
console.log(typeof a);
console.log(a instanceof Array);
console.log(a instanceof Function);

let marks = 0;
let grade = marks > 90? "A+": marks > 80? "A": marks > 70? "B": marks > 60? "C": "Give the exam again";
console.log(grade);

PRACTICE QUESTIONS -
Ques -1
let age = 19;
let person = age <= 13? "Child": age > 13 && age <= 19? "Teenager" : age > 19 && age < 60? "Adult" : "Senior"
console.log(person);

//Ques -2
let a = 10;
let b = 20;
let c = 30;
if(a>=b && a>=c){
    console.log(`Bigger number is a - ${a}`);
} else if(b>=a && b>=c){
    console.log(`Bigger number is b - ${b}`);
} else{
    console.log(`Bigger number is c - ${c}`);
}

//Ques -3
let password = 'hello1'
if(password.length< 6){
    console.log(`Password is weak`);
} else if(password.length>= 6 && password.length < 10){
    console.log(`Password is medium`);
} else {
    console.log(`Password is strong`);
}

if(password.includes('1')){
    console.log(`Contains the number 1`)
}

//Ques -4
let num = Number(prompt(`Enter the number`));
if(num>0){
    if(num%2===0){
        console.log(`${num} is positive and even`)
    } else{
        console.log(`${num} is positive and odd`)
    }
} else if(num<0){
    if(num%2===0){
        console.log(`${num} is negative and even`)
    } else{
        console.log(`${num} is negative and odd`)
    }
} else {
    console.log(`${num} is zero`)
}

// Ques - 5
let x = 10;
let y = "10";
if (x == y) {
  console.log("Equal with ==");
}
if (x === y) {
  console.log("equal with ===");
} else {
  console.log("not strictly equal");
}


function getDay(day){
    if(day === "monday") return "Start of work week";
    else if(day === "saturday" || day === "sunday") return "weekend arrived";
    else return "working days";
}
console.log(getDay("saturday"));


let num= Number(prompt("Enter your score"));
function getGrade(score){
    if(score<=100 && score>=90) return "A+";
    else if(score<90 && score>=80) return "A";
    else if(score<80 && score>=70) return "B";
    else if(score<70 && score>=60) return "C";
    else if(score<60 && score>=50) return "D";
    else if(score<50 && score>33) return "Just pass";
    else if(score<=33 && score>=0) return "Try next time";
    else return "Enter a valid score";
}
console.log(getGrade(num));

//ROCK PAPER SCISSORS -
let user= prompt("Your move- rock, paper or scissors?");
let computer= prompt("Enemy's move- rock, paper or scissors?")
function rps(user, computer){
    if(user === "rock"){
        if(computer === "rock") return "draw";
        else if(computer === "paper") return "Computer wins";
        else if(computer === "scissors") return "You win";
        else return "enter valid move"
    } 
    else if(user === "paper"){
        if(computer === "rock") return "You win";
        else if(computer === "paper") return "draw";
        else if(computer === "scissors") return "Computer wins";
        else return "enter valid move"
    } 
    else if(user === "scissors"){
        if(computer === "rock") return "Computer wins";
        else if(computer === "paper") return "You win";
        else if(computer === "scissors") return "draw";
        else return "enter valid move"
    }
    else return "Enter valid move";
};
console.log(rps(user, computer));