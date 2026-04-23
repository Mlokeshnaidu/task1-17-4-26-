// Student Data
let students = [
    {id:1, name:"Naveen", mark:85, course:"MERN"},
    {id:2, name:"John", mark:45, course:"Python"},
    {id:3, name:"Priya", mark:72, course:"Java"},
    {id:4, name:"Arun", mark:95, course:"React"}
];

// Task 1: Print All Students
console.log("Task 1: All Students");
for(let s of students){
    console.log(s.id, s.name, s.mark, s.course);
}

// Output: 
    // 1 Naveen 85 MERN
    // 2 John 45 Python
    // 3 Priya 72 Java
    // 4 Arun 95 React
//



// Task 2: Pass / Fail
console.log("Task 2: Pass / Fail");
for(let s of students){
    if(s.mark >= 50){
        console.log(s.name + " - Pass");
    } else {
        console.log(s.name + " - Fail");
    }
}

// Output:
  // Naveen - Pass
  // John - Fail
  // Priya - Pass 
  // Arun - Pass
//



// Task 3: Grade System
console.log("Task 3: Grade System");
for(let s of students){
    let grade;

    if(s.mark >= 90) grade = "A";
    else if(s.mark >= 75) grade = "B";
    else if(s.mark >= 50) grade = "C";
    else grade = "Fail";

    console.log(s.name + " - " + grade);
}

// Output:
  // Naveen - B
  // John - Fail
  // Priya - C
  // Arun - A
//



// Task 4: Topper Student
console.log("Task 4: Topper Student");
let topper = students[0];

for(let s of students){
    if(s.mark > topper.mark){
        topper = s;
    }
}

console.log("Topper is " + topper.name + " - " + topper.mark);

// Output:
// Topper is Arun - 95



// Task 5: React Students
console.log("Task 5: React Students");
for(let s of students){
    if(s.course === "React"){
        console.log(s);
    }
}

// Output:
// { id: 4, name: 'Arun', mark: 95, course: 'React' }



// Task 6: Add New Student
console.log("Task 6: Add New Student");
students.push({id:5, name:"Rahul", mark:88, course:"Node JS"});

for(let s of students){
    console.log(s);
}

// Output:
  // { id: 1, name: 'Naveen', mark: 85, course: 'MERN' }
  // { id: 2, name: 'John', mark: 45, course: 'Python' }
  // { id: 3, name: 'Priya', mark: 72, course: 'Java' }
  // { id: 4, name: 'Arun', mark: 95, course: 'React' }
  // { id: 5, name: 'Rahul', mark: 88, course: 'Node JS' }
//



// Task 7: Attendance
console.log("Task 7: Attendance System");
let status = "absent";

switch(status){
    case "present":
        console.log("Welcome");
        break;
    case "absent":
        console.log("Mark Absent");
        break;
    case "leave":
        console.log("Approved Leave");
        break;
    default:
        console.log("Invalid");
}

// Output:
// Mark Absent



// Task 8: Login
console.log("Task 8: Login System");
let username = "admin";
let password = "1234";

if(username === "admin" && password === "1234"){
    console.log("Login Success");
} else {
    console.log("Invalid User");
}

// Output:
// Login Success

