
# Day 13 : Advanced scope (part 2) and Closure
Today, I accomplished the Advanced Scope (part 2) topic and dived into the concept of closures. It was an exciting day of advancing my JavaScript skills and deepening my understanding of these crucial concepts.

## Lessons Summary
- Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration , it taken some of your code to the top of yourfile automaticaly .
- let and const cant hoisted.
- var can hoited and function can hoited also .
- Closure is a preservation of the linkagae to a variable, not the capturing of the variable.
- There are a patterns to using modules : the first is a Classic/Revealing module pattern it return a publicApi containing the functions , the second is the ES6 module pattern which is used with import for importing nedded data and export for exporting functions and data.

## Coding Examples

```
// using const and edit it 
const teachers =["suzy","nuha","muna"];
teachers[1]="suha"; // its allowed 

// Scope: hoisting
function teacher(){
    return "kyla";
}
var otherTeacher;
teacher(); // kyla
otherTeacher();// Type Error
otherTeacher=function(){
return "suzy";
}

//Closure: NOT capturing a value

var teacher ="kyla";
var myTeacher= function(){
    console.log(teacher);
}
teacher="suzy";
myTeacher(); // suzy 

```
## Coding Exercises

[Advanced Scope Q1](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week3-day4-tasks/tasks.md)
setTimeout callback function is executed after the timeout, it captures the variable i from the outer scope. However, the setTimeout functions are executed asynchronously after the loop has finished, and by that time, the value of i is already 5. and the solution is to declaring a new variable inside for loop with keyword "let" and assigning to the value of the (i) and then console the value of this new variable , and we have another solution by using IIFE. 
[Advanced Scope Q2](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week3-day4-tasks/tasks.md)
The issue in the current code is that the array variable is reinitialized as an empty array in each iteration of the loop. , to fix it we can intialize an array outside the for loop.

[Advanced Scope Q3](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week3-day4-tasks/tasks.md)
The issue in the functions array contains arrow functions that use the variable i from the outer scope. However, the i variable is declared using var, and as a result, it has function scope and is hoisted to the top of the function. During the execution of the arrow functions (inside forEach), the value of i is already 5 because the loop has already finished. 
To fix this, we can use let instead of var to declare the variable i.
