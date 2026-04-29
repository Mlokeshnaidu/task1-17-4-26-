//task1:

console.log("\nLevel 1 - Functions Basics");
console.log("\nTask 1: Student Form Function");

 
function studentForm(name,age,course) {
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Course: " + course);
}
 
studentForm("MLokesh",20,"ECE");
 
//task2:

console.log("\nTask 2: Calculator Function");
 
function calc(a,b) {
    console.log("Addition: " + Number(a+b));
    console.log("Subraction: " + Number(a-b));
    console.log("Multiplication: " + Number(a*b));
   
}
 
calc(10,5);
 
//task3:

console.log("\nTask 3: Reusable Greeting");
 
 
function resue(name){
 console.log("Hello "+ name);
}
 
resue("Kamal");
resue("Praveen");
resue("Sai");
 
//task4:

console.log("\nLevel 2 - Return & Scope");
console.log("\nTask 4: Return Value");

 
function square(num) {
    return Number(num*num);
   
}
 
console.log(square(5));
 
//task5:

console.log("\nTask 5: Scope Check");
 
 
function scope() {
 
    let secret = "javascript"
    console.log("Inside :" , secret);
     
}
 
scope();
 
//console.log(secret);
//secret is declared using let inside the function.
// It has function scope not global scope,So getting Reference error: secret not defined
 


//task6:


console.log("\nLevel 3 - Spread / Rest");
console.log("\nTask 6: Merge Arrays");
 
 
let boys = ["car","bike"];
let girls = ["doll","teddy"];
 
let merge = [...boys , ...girls];
 
console.log(merge);
 
//task7:


console.log("\nTask 7: Unlimited Numbers");
 
function sumAll(...nums) {
    let total = 0;
 
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
 
    console.log(total);
}
 
sumAll(5,20,24,54,31);
 

//task8:

console.log("\nLevel 4 - Destructuring");
console.log("\nTask 8: Array Destructuring");



let colors = ["red","green","blue"]
 
let [c1,c2,c3] = colors;
 
console.log(c1,c2,c3);
 
//task9:


console.log("\nTask 9: Object Destructuring");

 
let emp = {
    name: "Naveen",
    role: "Developer",
    salary: "5LPA"
};
 
let { name, role } = emp;
 
console.log(name, role);
 

//task10;


console.log("\nLevel 5 - Real-Time Logic");
console.log("\nTask 10: Offer Generator");


function* offerGenerator() {
    yield "10% cashback";
    yield "20% cashback";
    yield "50% cashback";
    yield "Try again";
    yield "No offer";

}
 
let offers = offerGenerator();
 
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
 


//task11:
 
console.log("\nLevel 6 - Advanced");
console.log("\nTask 11: Curry Function");


function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}
 
console.log(add(10)(20)(30));



//task12:


console.log("\nTask 12: Student Marks Analyzer");


function marks(...nums) {
    let total = 0;
 
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
 
    let avg = total / nums.length;
 
    console.log("Total =", total);
    console.log("Average =", avg);
}
 
marks(80, 90, 70, 60);
 
//task13:

console.log("\nChallenge Task - Real Company Level");

 
function register(name, role, ...skills) {
    console.log("Name:", name);
    console.log("Role:", role);
    console.log("Skills:", skills.join(" "));
}
 
register("Naveen", "Frontend", "HTML", "CSS", "JS", "React");
 