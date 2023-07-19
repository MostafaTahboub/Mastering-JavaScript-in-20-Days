
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

