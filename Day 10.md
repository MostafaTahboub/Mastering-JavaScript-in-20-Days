
# Day 10 : Introduction , Types and Coercion

Today, I had an exciting start as I delved into the "Deep JavaScript Foundations, v3" course. We began with an introduction to the course, and then we dived into the topics of types and coercion in JavaScript. 

## Lessons Summary
- Most developers beileve that everything in JS is object , but the fact is most values in JS can behave like objects.
- We can use "typeof()" method that takes a one argument to return the type of this argument.
- There is a different types of data in JS such as primitive data types , object, bigint and null.
- "undefinde" means there is a variable but doesnt have a value ,but "undeclared" means that is not been created.
-  NaN means invalid number but is the number.
- There is a many abstract operation to coversion between data types .
- The coersion  is the automatic or implicit conversion of values from one data type to another. 
 
## Coding Examples

```
// using typeof() method 
var v;
typeof(v); // undefined

// using isNaN() method
Number.isNaN("my string "); // false

// using objectis() exercise 
 define polyfill for `Object.is(..)`
if (!Object.is() || true) {
    Object.is = function (x, y) {
        var XnegativeZero = isNegativeZero(x);
        var YnegativeZero = isNegativeZero(y);

        if (XnegativeZero || YnegativeZero) {
            return XnegativeZero && YnegativeZero;
        }

        else if (isItNaN(x) && isItNaN(y)) {
            return true;
        }
        
        else{
            return x===y;
        }

        function isNegativeZero(v) {
            return v === 0 && 1 / v === -Infinity;
        }

        function isItNaN(v) {
            return v !== v;
        }
    };
}

// Coercion: using string concatenation (number to string)
var age=15;
var myName="mostafa";
console.log("Hi"+myName + age); // "Hi mostafa 15"


```

## Coding Exercises

[Week 3 Day 1 Exercise](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week3-day1-tasks/tasks.md)

```
/// exercise one

function convertStringToNumber(input) {
    if (typeof input === "string") {
        return +input;
    }
    else {
        return {
            value: input,
            type: typeof (input)
        };
    }
}

//exercise two
const checkNaN = (value) => {
    return value !== value;
}


//exercise three
function isEmptyValue(value) {
    return value === undefined || value === null || value === '';
}


// exercise four
function compareObjects(input1, input2) {
    if (typeof input1 !== "object" || typeof input2 !== "object") {
        return [input1, input2];
    }

    const keys1 = Object.keys(input1);
    const keys2 = Object.keys(input2);

    if (keys1.length !== keys2.length)
        return false;

    for (const key of keys1) {
        if (input1[key] !== input2[key])
            return false;
    }

    return true;
}


// exercise five


const complexCoercion = (input) => {
    if (typeof input === 'number') {
      return Boolean(String(input));
    } else if (typeof input === 'string') {
      return Boolean(input);
    } else if (input === null || input === undefined) {
      return false;
    } else {
      return input;
    }
  };
```
