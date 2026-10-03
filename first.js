// var a=10;
// console.log(a);
// var a= ++a;
// console.log(a);
// var a= 30;
// a= 40;
// console.log(a);

// console.log(b);
// var b = 12;

// let b = 3;
// let c = b;
// console.log(c);
// c = ++c;
// console.log(b);

// let a = [1,2,3];
// let d = a;
// console.log(d);

// let a = 12;
// let b = '12';
// console.log(a === b);

// let a = "4";
// console.log(+a);
// console.log(-a);

// 13>12? console.log(true): console.log(false)

// let a = [1,2,3];
// console.log(typeof a);
// console.log(a instanceof Array);
// console.log(a instanceof Function);

// let marks = 0;
// let grade = marks > 90? "A+": marks > 80? "A": marks > 70? "B": marks > 60? "C": "Give the exam again";
// console.log(grade);

// PRACTICE QUESTIONS -
// Ques -1
// let age = 19;
// let person = age <= 13? "Child": age > 13 && age <= 19? "Teenager" : age > 19 && age < 60? "Adult" : "Senior"
// console.log(person);

// //Ques -2
// let a = 10;
// let b = 20;
// let c = 30;
// if(a>=b && a>=c){
//     console.log(`Bigger Number is a - ${a}`);
// } else if(b>=a && b>=c){
//     console.log(`Bigger Number is b - ${b}`);
// } else{
//     console.log(`Bigger Number is c - ${c}`);
// }

// //Ques -3
// let password = 'hello1'
// if(password.length< 6){
//     console.log(`Password is weak`);
// } else if(password.length>= 6 && password.length < 10){
//     console.log(`Password is medium`);
// } else {
//     console.log(`Password is strong`);
// }

// if(password.includes('1')){
//     console.log(`Contains the Number 1`)
// }

// //Ques -4
// let num = Number(prompt(`Enter the Number`));
// if(num>0){
//     if(num%2===0){
//         console.log(`${num} is positive and even`)
//     } else{
//         console.log(`${num} is positive and odd`)
//     }
// } else if(num<0){
//     if(num%2===0){
//         console.log(`${num} is negative and even`)
//     } else{
//         console.log(`${num} is negative and odd`)
//     }
// } else {
//     console.log(`${num} is zero`)
// }

// // Ques - 5
// let x = 10;
// let y = "10";
// if (x == y) {
//   console.log("Equal with ==");
// }
// if (x === y) {
//   console.log("equal with ===");
// } else {
//   console.log("not strictly equal");
// }


// function getDay(day){
//     if(day === "monday") return "Start of work week";
//     else if(day === "saturday" || day === "sunday") return "It's weekend";
//     else return "working days";
// }
// console.log(getDay("saturday"));


// //ROCK PAPER SCISSORS -
// let user= prompt("Your move- rock, paper or scissors?");
// let computer= prompt("Enemy's move- rock, paper or scissors?")
// function rps(user, computer){
//     if(user === "rock"){
//         if(computer === "rock") return "draw";
//         else if(computer === "paper") return "Computer wins";
//         else if(computer === "scissors") return "You win";
//         else return "enter valid move"
//     } 
//     else if(user === "paper"){
//         if(computer === "rock") return "You win";
//         else if(computer === "paper") return "draw";
//         else if(computer === "scissors") return "Computer wins";
//         else return "enter valid move"
//     } 
//     else if(user === "scissors"){
//         if(computer === "rock") return "Computer wins";
//         else if(computer === "paper") return "You win";
//         else if(computer === "scissors") return "draw";
//         else return "enter valid move"
//     }
//     else return "Enter valid move";
// };
// let result= rps(user, computer);
// console.log(result);


// let year= Number(prompt("Enter a year"));
// if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//     console.log("Leap year");
// } else{
//     console.log("Not a leap year");
// };

//LOOP -

// for(let i=1; i<=10; i++){
//     console.log(i)
// };


// for(let i=10; i>=1; i--){
//     console.log(i)
// }

// for(let i=1; i<=20; i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

// let sum=0;
// for(let i=1; i<=100; i++){
//     sum=sum+i;
// }
// console.log(sum);

// let n=5;
// for(let i=1; i<=10; i++){
//     console.log(`${n}*${i}= ${n*i} `);
// }

// let num=Number(prompt(`Enter a Number`));
// let result=1;
// for(let i=1; i<=num; i++){
//     result=result*i;
// }
// console.log(result);

// let i=1;
// while(i<=16){
//     console.log(`while loop ${i}`);
//     i++;
// }

// let i=1;
// do{
//     console.log(`JS is fun ${i}`);
//     i++;
// } 
// while(i<=16);

//BREAK AND CONTINUE IN LOOP -

// //BREAK - It helps to break the loop even before it's stopping condition
// for(let i=1; i<=212; i++){
//     console.log(i);
//     if(i===40){
//         break;
//     }
// }

// //CONTINUE - skips the current element or iteration and moves to the next one
// for(let i=1; i<212; i++){
//     if(i===40){
//         continue;
//     }
//     console.log(i);
// }

// let num=Number(prompt(`Enter a number`));
// let i=1;
// while(i <= num){
//     if(i%2 === 0){
//         console.log(`${i} is even`)
//     } else{
//         console.log(`${i} is odd`)
//     };
//     i++;
// }

// for(let i=1; i<=100; i++){
//     if(i%3 === 0 && i%5 === 0){
//         console.log(i);
//     }
// }

// for(let i=1; i<=100; i++){
//     console.log(i);
//     if(i%7===0){
//         break;
//     }
// }

// for(let i=1; i<=20; i++){
//     if(i%3===0){
//         continue;
//     }
//     console.log(i)
// }

// let count= 0;
// for(let i=1; i<=100; i++){
//     if(i%2===1){          //odd Numbers
//         count++;
//         console.log(i);
//     }
//     if(count===7) break;
// }


// for(let i=1; i<=5; i++){
//     let row="";
//     for(let j=1; j<=i; j++){
//         row=row+"*";
//     }
//     console.log(row)
// }


// FUNCTIONS -

// function greet(){
//     console.log(`Hello!`)
// };
// greet();

// function Greet(fullName){
//     console.log(`Hello ${fullName}`)
// }
// Greet("Shivansh");

// function add(x, y){
//     return x+y;
// };
// console.log(add(7,9));

// let num=Number(prompt("Enter a Number"));
// function isEven(num){
//     if(num%2===0) return `The Number ${num} is even`;
//     else return `The Number ${num} is odd`;
// }
// console.log(isEven(num));


// function maxOfTwo(x, y){
//     if(x>y) return `The larger Number is ${x}`;
//     else return `The larger Number is ${y}`
// }
// console.log(maxOfTwo(3,4));

// let num=Number(prompt("Enter a Number"));
// function factorial(num){
//     let result=1;
//     for(let i=1; i<=num; i++){
//         result=result*i;
//     }
//     return result;
// }
// console.log(factorial(num));


// let score=Number(prompt("Enter your score"));
// function getGrade(score){
//     if(score>100 || score<0) return "Enter a valid score";
//     else if(score>=90) return "A+";
//     else if(score>=80) return "A";
//     else if(score>=70) return "B";
//     else if(score>=60) return "C";
//     else if(score>=50) return "D";
//     else if(score>=33) return "Just Pass";
//     else if(score>=0 && score<33) return "Fail";
// }
// console.log(getGrade(score));


// function isLeapYear(year){
//     if((year%4===0 && year%100!==0) || (year%400===0)) return true;
//     else return false;
// };
// console.log(isLeapYear(1900));

// FUCNTION STATEMENT (or DECLARATION) and FUNCTION EXPRESSION -
// function greet1(){
//     console.log("Hello")
// }                            //It's Function Statement
// greet1();

// let greet2 = function() {
//     console.log("Hello");
// }                            //It's Function Expression
// greet2();

// Arrow functions are always expression, never statement
// const greet3=(fullName1)=>{
//     return `Hello ${fullName1}`;
// }
// console.log(greet3("Shivansh"));

//DEFAULT PARAMETER - It helps to set default values..
// function greet4(fullName2="Stranger"){
//     console.log(`Hello ${fullName2}`);
// }
// greet4();
// greet4("Shivansh");

//REST PARAMETER - Collects multiple arguments into a single array.
// function add(...num){                // collected all values into a array  
//     let sum=0;
//     for(let i=0; i<num.length; i++){      //the loop runs according to the length of the array
//         sum=sum+num[i];                   
//     }
//     return sum;
// }
// console.log(add(3, 4, 5, 6, 90, 39, 75));


// function int(x,y, ...num){         //the starting two values are of x and y and rest goes in array
//     console.log(x+y,...num);
// }
// int(2, 3, 4, 5, 6);


// //FIRST CLASS FUNCTION - functions are treated as values and stored in variables:
// let substract = function(x, y){
//     return x-y;
// }
// console.log(substract(10, 4));

// //HIGHER ORDER FUNCTION - function that uses another function:
// function greet5(fullName3 = "Stranger"){
//     return function anotherGreet(surName = "things"){
//         return `Hello ${fullName3} ${surName}`;
//     }
// }
// console.log(greet5()());

// //OR-           // Must use return when passing another function inside

// function greet5(fullName3 = "Stranger"){
//     function anotherGreet(surName = "things"){
//         return `Hello ${fullName3} ${surName}`;
//     }
//     return anotherGreet;
// }
// console.log(greet5()());

// //OR -

// function greetThreeTimes(fn){
//     fn();
//     fn();             // fn() means run the function that was passed in. Here we passed another function as argument in a function.
//     fn();
// }
// function sayHello(){
//     console.log("Hello");
// }
// greetThreeTimes(sayHello);

//PURE VS IMPURE -
//PURE - Same input always gives same output.
// function add(a, b){
//     return a+b;
// }
// console.log(add(2,3));
// console.log(add(2,3));

// //IMPURE - changes something outside or same input gives different output different time.
// let total=0;
// function addToTotal(x){
//     total=total+x;
//     return total;
// }
// console.log(addToTotal(5));
// console.log(addToTotal(5));

// //LEXICAL SCOPE AND CLOSURE -
// //LEXICAL SCOPE - Inner functions can see outer variables but outer functions can't see inner variables. Main Use would be Data Privacy/ Encapsulation
// // function outer(){
// //     let outerVar = "I am outer";

// //     function inner(){
// //         let innerVar = "I am inner";
// //         console.log(outerVar);      //Works- inner can see outer
// //         console.log(outerVar);      //Works
// //     }
// //     inner();
// //     console.log(innerVar);         //Error- outer can't see inner
// // }
// // outer();

// let city= "Indore";                //Outer scope
// function showCity(){
//     console.log(city);            //Can access city from outside
    
//     let college="MIT";            //inner scope

//     function showCollege(){         //Can access both city and college
//         console.log(city);
//         console.log(college);
//     }
//     showCollege();
// }
// showCity();
// //console.log(college);            //Error- College only exists inside showCity

// //CLOSURE - Inner function remembers outer variables even after outer function is done
// function makeCount(){
//     let count=0;                     //Outer variable
    
//     return function(){               //Inner Function
//         count++;
//         return count;
//     };
// }
// let counter= makeCount();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// let counter2= makeCount();
// console.log(counter2());
// console.log(counter2());


// //IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION) - functions that run immediately, Variables stay private..
// (function(){
//     let secret="Password123";
//     console.log("Setup done");
// })();
// console.log(secret)               //Error - Secret doesn't exist outside


