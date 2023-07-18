
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
[Static typing questions ](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week3-day2-tasks/tasks.md)
```
 //Defining  Promise Types
interface HelloWorldResponse {
  message: string;
}

interface BooleanResponse {
  result: boolean;
}

interface ObjResponse {
  x: string;
  y: number;
}

// Defining  Input and Output Types for convertToObj
type PromiseName = 'sayHelloWorld' | 'checkBoolean' | 'returnObj';

interface ConvertedObj {
  [key: string]: unknown;
}

// Writing the convertToObj Function
const convertToObj = async (array: Array<Promise<any>>): Promise<ConvertedObj> => {
  const result: ConvertedObj = {};

  for (let i = 0; i < array.length; i++) {
    const promise = array[i];
    const promiseName: PromiseName = getPromiseName(i);

    try {
      const resolvedValue = await promise;
      result[promiseName] = resolvedValue;
    } catch (error) {
      result[promiseName] = `Error: ${error}`;
    }
  }

  return result;
};

// function to get the name of a promise based on its index in the array
const getPromiseName = (index: number): PromiseName => {
  switch (index) {
    case 0:
      return 'sayHelloWorld';
    case 1:
      return 'checkBoolean';
    case 2:
      return 'returnObj';
    default:
      throw new Error(`Invalid promise index: ${index}`);
  }
};

//  Create the promisesArray
const sayHelloWorld = new Promise<HelloWorldResponse>((resolve, reject) => {
  resolve({ message: "Hello world!" });
});

const checkBoolean = (boolean: boolean) => new Promise<BooleanResponse>((resolve, reject) => {
  if (boolean) {
    resolve({ result: boolean });
  } else {
    reject(`Input is false :(`);
  }
});

const returnObj = new Promise<ObjResponse>((resolve, reject) => {
  resolve({
    x: "meow",
    y: 45,
  });
});

const promisesArray = [sayHelloWorld, checkBoolean(true), returnObj];

//  Calling the convertToObj function
convertToObj(promisesArray)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

```
[SCOPE & HOISTING QUESTION 1 ](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week3-day2-tasks/tasks.md)

My choice is : D) 1, ReferenceError, because the let and const is a block scope so we can't access them (b,c) outside the block , but the var is not a block scope so we can access the variable 'a' .

[SCOPE & HOISTING QUESTION 2 ](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week3-day2-tasks/tasks.md)

My choice is :A) undefined, ReferenceError ,  the first log statement will equal to undefined because the variable 'a' is declared with the keyword 'var' but declaration and assigng after the log statement, the second log statement will generate reference error because 'b' is declared wthe the keyword 'let' and its a block scope so we cant access it , so here the program will stop and generate the refrence error.

[SCOPE & HOISTING QUESTION 3 ](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week3-day2-tasks/tasks.md)

My choice is : C) [ 36, 100, 45 ] | [ 1, 2, 3 ] | [ 1,100, 45 ] , in the first log statement all values will prented as in answer becasue all values are in function scope and can be accessible , in the second log statement this inside a block and just like a new variables is declared and assigned because the log statemnt also inside this block , in the last log statement the value will be [1,100,45] because 'a' is declared by var and assigned to new value in the if statemnt block and we can access it but 'b' and 'c' will be equal to the first log statement because the 'b' and 'c' in block statement  cant access them .  
