//Task1
console.log("LEVEL 1 (Basic Practice)")
console.log("Task 1: Array Basics");

let arr = [10, 20, 30, 40, 50];
console.log(arr[0]);
console.log(arr[arr.length-1]);
console.log(arr.length);


//Task2
console.log( "Task 2: Push & Pop");

let arr1 = [1,2,3];

arr1.push(4,5);
arr1.pop();
console.log(arr1);


//Task3
console.log("Task 3: Includes Check");
console.log("Check if javascript exists in:");

let arr2 = ["html","css","javascript","react"];
console.log(arr2.includes("javascript"));


//Task4
console.log("LEVEL 2 (Intermediate)");
console.log(" Task 4: Filter Salaries");

let emp1 = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:30000},
];

let checksalary = emp1.filter((c,i,t)=>{
    return c.salary>20000;
})

console.log(checksalary);


//TASK5
console.log("Task 5: Map Names");


let names = emp1.map((e) => {
  return e.name;
});

console.log(names);


//Task6
console.log("Task 6: Reduce Sum");
console.log("Find total salary using reduce()");

let salaries = emp1.reduce((acc,c,i,t)=>{
    return acc+c.salary
},0)

console.log(salaries);


//Task7
console.log("LEVEL 3 (Logic Building)");
console.log("Task 7: Remove Duplicates");

let arr7 = [1,2,2,3,4,4,5];
let unique =[...new Set(arr7)];

console.log(unique);



// Task 8: Largest Number
console.log("\nTask 8: Largest Number");

let arr8 = [10,200,5,90];
console.log("Largest Num:", Math.max(...arr8));


// Task 9: Reverse String

console.log("Task 9: Reverse String");
let str = "hello", rev="";
for(let i=str.length-1;i>=0;i--) rev+=str[i];
console.log("Reversed:", rev);


// Level 4: Advanced Thinking
// Task 10: Group by Salary
console.log("Level 4: Advanced Thinking")
console.log("Task 10: Group by Salary");

let emp10 = [
 {name:"A",salary:10000},
 {name:"B",salary:50000},
 {name:"C",salary:10000}
];

let res1 = emp10.reduce((a,e)=>{
 (a[e.salary]=a[e.salary]||[]).push(e.name);
 return a;
},{});

console.log("Grouped:", res1);


// Task 11: Flatten Array
console.log("Task 11: Flatten Array");

let arr11 = [1,[2,[3,[4]]]];

function flatten(a){
 let res = [];
 for(let i of a){
  Array.isArray(i) ? res = res.concat(flatten(i)) : res.push(i);
 }
 return res;
}

console.log("Flatten:", flatten(arr11));


// Task 12: Custom Sort
console.log("Task 12: Custom Sort");

let arr12 = [5,2,9,1];
arr12.sort((a,b)=>b-a);

console.log("Sorted:", arr12);


// Task 13: Second Largest
console.log("Task 13: Second Largest");

let arr13 = [10,50,20,40];
let second = [...new Set(arr13)].sort((a,b)=>b-a)[1];

console.log("Second Largest:", second);


// Task 14: Count Characters
console.log("Task 14: Count Characters");

let str14 = "aabbccdde";
let obj = {};

for(let c of str14){
 obj[c] = (obj[c] || 0) + 1;
}

console.log("Count:", obj);
