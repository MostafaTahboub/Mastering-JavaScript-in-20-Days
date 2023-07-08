
# Day 6 : JavaScript Principles ,Functions & Callbacks
Today, in a new course, I explored JavaScript principles, particularly diving deep into functions and learning about callback functions. It was an exciting day of expanding my skills and gaining a deeper understanding of JavaScript's functionality.

## Lessons Summary
-  Thread of execution is like going throw a line of code and execute each line .
- Call stack is a stack of functions is currently running.
- Function are first class object so it have all the features of objects.
- We can generialize a function to make it general and reuable the code.
- The higher order function is the function who accept another function as a parameter and this function is called a callback function.
- Anonymous and arrow functions improve immediate legibility of the code .
 
## Coding Examples

```
// Example : Generalizing a function use it for any number 
function squareNum(num){
return num*num;
}

// using a function inside a function and pass it as argument for two purposes
function copyArrayAndManipulate(array, instructions) {
const output = [];
for (let i = 0; i < array.length; i++) {
output.push(instructions(array[i]));
}
return output;
}
function multiplyBy2(input) { return input * 2; }
const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
 
 // 
```

## Coding Exercises

[ Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem)

**MySolution** :

```
const squareList = arr => {
  return arr.filter(num => num > 0 && num % parseInt(num) === 0)
  .map(num => Math.pow(num, 2));
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
```
[Apply Functional Programming to Convert Strings to URL Slugs
](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs)

**MySolution** :
```
function urlSlug(title) {
return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
}
```
