
# Day 7 : Closures
Today, I explored closures in JavaScript, understanding their purpose and how they are a powerful concept. Closures  have various practical uses in JavaScript programming.

## Lessons Summary
-  Closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
- Clousre gives you access to an outer function scope from an inner function/
- Clousres enable powerful pro-level functions like ‘once’ and ‘memoize’.
- Callbacks and Promises rely on closure to persist state in an asynchronous environment
 
## Coding Examples

```
// Using clousers to return inner function from outer 
function outer (){
let counter = 0;
function incrementCounter (){
counter ++;
}
return incrementCounter;
}

```

## Coding Challenges
[Clouser Challenges](http://csbin.io/closures)

**My Sloution :**
```
// challenge 1 
function createFunction() {
  function print()
  {
    console.log("hello");
  }
 print();
}

// challenge 3:
function addByX(x) {
  return function(input) {
    return input + x;
  };
}
 
// challenge 4 :
function once(callback) {
  let executed = false;
  let output;

  return function() {
    if (!executed) {
      output = callback.apply(this, arguments);
      executed = true;
    }
    return output;
  };
}

```

## Coding Exercises
[Closure Exrecises](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day2-tasks/tasks.md)
```
// Exercise 1:
 function createCounter(start) {
    return ()=> {
        start++;
        return start;
    }
}
let newCounter = createCounter(1);
console.log(newCounter());

// Exercise 2:
function calculateAverage(nums)
{ 
   return ()=>{
    let sum=0;
    let avg;
    nums.forEach(element => {
        sum+=element;
    });
         avg=sum/nums.length;
         return avg;
   }
}

// Exercise 3: 

function powerOf(base){
  return (exp)=>{
    return Math.pow(base, exp);
  }
}

let res=powerOf(2);
console.log(res(3));

// Exercise 4 :

function compose(...functions) {
  return function(input) {
    let result = input;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  };
}
```
