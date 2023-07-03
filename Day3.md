
# Day 3 : Quiz project and Functions
Today was a productive day of revision and practice. I refreshed my understanding of previous topics, completing exercises and working on a project that applied those lessons. In addition, I explored new topics like functions and scope, specifically the differences between "let," "const," and "var" in terms of scope. It was an enlightening experience that expanded my knowledge of JavaScript

## Lessons Summary
- Comments is important in JS, it Help others (and yourself)understand your code.
- Functions is used to do actions it has a parameters and it returns a value .
-  Arrow function is unnamed function without much code.
- Scope determines where variables are "in play".
- There are kinds of scope like global scope it is the widest scope.
- There is a difference between "let" and "var" in their scope 

## Coding Examples

``` 
// Example 1: declare the following functions :
//1. multiply: given 2 numbers, return their product
 function product(n1,n2)
 { return n1*n2;
 }
 //2.longerThan: given 2 arrays, return whether the first is 
 longer than the second
 function longerThan(a1, a2) {
 return a1.length>a2.length;
 }

 //Example 2 :declare function using arrow functions:

//divide: given 2 numbers, return the first divided by the second
 
 const divide=(n1,n2)=>n1/n2;

//Example 3:  declare and object called fact with statement 
property and answer and explanation 

    const fact = {
    statement:"Arrays like objects",
    answer:true,
    explanation: "Arrays are kind of objects with special properties "
   };


```
## Coding Exercises

[ Return a Value from a Function with Return
](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/return-a-value-from-a-function-with-return)

**My Solution :** 
```
function timesFive (num){
return num*5;
}

```
[Global Scope and Functions
](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-scope-and-functions)

**My Solution :**
```
let myGlobal =10;
let oopsGlobal;

function fun1( ) {
  oopsGlobal =5;
}

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```
[Local Scope and Functions
](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/local-scope-and-functions)

**My Solution :** 
```
function myLocalScope() {
let myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();
console.log('outside myLocalScope', myVar);
```

[Global vs. Local Scope in Functions
](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-vs--local-scope-in-functions)

**My Solution :** 
```
const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear="sweater";
  return outerWear;
}
myOutfit();
```
[Stand in Line
](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/stand-in-line)

**My Solution :** 
```
function nextInLine(arr, item) {
  arr.push(item);
  const removed = arr.shift();
  return removed;
}
```
