
# Day 11 : Static typing and Scope 
Today, I learned about static typing and scope, two essential concepts in programming. I explored their significance and how they impact variable accessibility in JavaScript.

## Lessons Summary
- TypeScript and Flow are very similar products and they share most of their syntax with some important differences.
- TypeScript and Flow has some benefits like :
  catching type- related mistakes , communicate type intent and provide IDE feedback .
- scope by simple word is where to look for things.
- In the lexical scoped languages like JS , the scopes and identifires are determined at compile time not run time.
- TypeError: is doing something illegal with that type (such as doing something with a value that's not allowed for that type).
- ReferenceError: meanin that i couldnot find a variable , i cant use it .

## Coding Examples

```
//Type-Aware Linting: inferencing
var teacher = "kayla";
teacher ={name : "kayla"}; // cannt assign object to a string

//Type-Aware Linting: validating operand types

var name :string = "frank";
var count : number = 61 - name ; // cannt subtract strings 

```

## Coding Exercises

