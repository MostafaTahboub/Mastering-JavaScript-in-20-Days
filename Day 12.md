
# Day 12 : Scope & function expression and advanced scope (part 1) 
Today, I began by learning about scope and function expressions. Later, I delved into the advanced scope, specifically focusing on part 1 of the topic. 
## Lessons Summary
- The reason why we should prefer using named function expression is that has many binefets such as : it provides Reliable function self-reference ,More debuggable stack traces.
- lexical scope or static scope refers to the idea of scopes being nested with each other ,In other words, an item's lexical scope is the place in which the item got created.
- Under dynamic scoping, a variable is bound to the most recent value assigned to that variable, i.e., the most recent assignment during the program’s execution.
- IIFE:immediatly invoked function expression : once the fuction created executed .
- block is a scope if there a let or const inside it .
- If you need to hide some code from your fuction scope use it inside a block with keyword "let".
 
## Coding Examples

```
//named function expression 
var keyHandler = function keyHandler(){}

// function scoping 
var teacher = "Kyle";
function anotherTeacher(){
    var teacher ="suzy";
    console.log(teacher);
}
anotherTeacher();
console.log(teacher);

//IIFE

var teacher=(function getTeacher(){
  try{
      return fetTeacher(1);
  }
  catch(err)
  {
      return "kyle";
  }  
}) ();

```

## Coding Exercises

