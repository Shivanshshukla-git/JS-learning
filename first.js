// PRACTICE OF JS - 

//Create an array of numbers. Use map to square every number.
let arr=[1,2,3,5,6,7];
let square= arr.map((val)=> val*val);
console.log(square);

// From the same array, use filter to keep only numbers greater than 10.
let smallerNum= arr.filter((val)=> val>3);
console.log(smallerNum);

// Use reduce to find the sum and the maximum number.
let greaterNum= arr.reduce((prev, curr)=>{
    return prev+curr;
})
console.log(greaterNum);

let maxNum= arr.reduce((prev, curr)=> {
    return prev>curr? prev: curr;
})
console.log(maxNum);

// Use find to get the first even number.
let evenNum= arr.find(val=> val%2===0);
console.log(evenNum);

// Use some and every meaningfully (one example each).
let someNum= arr.some(val=> val>6);
let everyNum= arr.every(val=> val>4);
console.log(someNum, everyNum);

// Chain methods: filter even numbers → double them → sum them (in one line).
let total= arr.filter((val)=> val%2===0).map((val)=> val*2).reduce((prev, curr)=> prev+curr);
console.log(total);

//Create a nested user object (name, age, address with city & pincode).
const user= {
    name:"Shivansh",
    age: 20,
    address: {
        city: "Rewa",
        pinCode: 222020,
    }
};

// Destructure name, city and give a default to country.
let {name, country="India", address: {city}}= user;
console.log(name, country, city);

// Make a shallow copy with spread and change one property. Prove original is unchanged.
let user1= {...user};
user1.age= 21;
console.log(user1, user);

// Make a deep copy (JSON way) of the nested object and change a nested value. Prove original is safe.
let user2= JSON.parse(JSON.stringify(user));
user2.address.city= "Bhopal";
console.log(user2,user1, user);

// Use Object.entries + forEach to print all key-value pairs.
Object.entries(user).forEach(function(val){
    console.log(`${val[0]} : ${val[1]}`);
});
Object.entries(user.address).forEach(function(val){
    console.log(`${val[0]} : ${val[1]}`);
});

// Write a function that returns another function (closure) which adds a fixed number.
function add(x, y){
    let adding= x+y;
    return function(z){
        return adding/z;
    }
};
let total1= add(4,5);
console.log(total1(3));

// Write a higher-order function repeat(fn, times) that runs any function n times.
function repeat(fn, times){
    for(i=1; i<=times; i++){
        fn();
    }
};
function sayHii(){
    console.log("Hello");
};
repeat(sayHii, 4);

//OR

function greet(fn){
    fn()
    fn()
    fn();
};
greet(sayHii);

// Create a simple counter with closure (like the one in your notes) but add increment, decrement, and reset.
function getCount(){
    let count=0;
    return {
        increment: function(){
            count++;
            return count;
        },
        decrement: function(){
            count--;
            return count;
        },
        reset: function(){
            count=0;
            return count;
        }
    }
};
let counter= getCount();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.increment());
console.log(counter.reset());

// Write a function that takes any number of arguments and returns the largest one (use rest + loop or reduce).
function largestNum(...num){
    return num.reduce((prev, curr)=> prev>curr?prev:curr);
};
console.log(largestNum(89, 67, 75, 94, 9));

// Array of students with marks → find average marks using reduce → give grade using your old grade logic.
let marks= [65, 75, 74, 85, 23];
console.log(marks.length);
let avg= marks.reduce((prev, curr)=> prev+curr)/marks.length;
console.log(avg);
function getGrade(score){
    if(score>100 || score<0) return "Enter a valid score";
    else if(score>=90) return "A+";
    else if(score>=80) return "A";
    else if(score>=70) return "B";
    else if(score>=60) return "C";
    else if(score>=50) return "D";
    else if(score>=33) return "Just Pass";
    return "Fail";
}
console.log(getGrade(avg));

//Array of products → filter products under 1000 → get only their names → join into a string.
let products= [
    {name: "Laptop", price:75000},
    {name: "Mouse", price: 800},
    {name: "Keyboard", price: 1500},
    {name: "Monitor", price: 12000},
    {name: "Motherboard", price:7000},
    {name: "Processor", price:20000}
];
let expensiveProducts= products.filter((val)=> val.price>2000);
console.log(expensiveProducts);
let onlyProductName= expensiveProducts.map((val)=> val.name);
console.log(onlyProductName);
console.log(onlyProductName.join(" , "));