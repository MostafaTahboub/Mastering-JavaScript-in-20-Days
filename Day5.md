
# Day 5 :  Data Fetching & Promises , Destructuring Data and Modules
Today, I covered important JavaScript topics including fetching data, promises, and destructuring. I also explored the concept of modules for code organization and had a recap session. It was a productive day of expanding my JavaScript skills and gaining a deeper understanding of these core concepts.

## Lessons Summary
- API is for Aplication Programming Interface, it provide use with URLs that point at data we care about.
- Promises can be in 3 possible states: pending,fulfilled ,rejected.
- "await" lets us tell JS to stop and wait for an asynchronous operation to finish ,and it cant be used unless inside a async function .
- Destructuring is a way of declaring multiple variables at once and we can also destructure Arrays, assigning variables for their items.
- Modules let us split big codebases across multiple files ,and we can use import to import data from module file to another Modules  and we can use export to export data from this file.
- Different browsers' debuggers work differently.
- we have a multiple frame workes based on JS. 

## Coding Examples
[1-5 ToDo execises on Doggo Fetch page ](https://github.com/MostafaTahboub/Mastering-JavaScript-in-20-Days/blob/main/Doggos%20Fetch)

```
//Example: using the method fetch()
fetch("https://dog.ceo/api/breed/hound/list");

// using await and json 
let response = await fetch("https://dog.ceo/api/breed/hound/list");
let body = await response.json();

// destructuring data  
const [baby, ginger, scary, sporty, posh] = spices;

// using Try Catch 
try {
    thisMightThrowAnError();
} catch (error) {
    console.error("As if! Error:", error); 
    console.log("Whatever, let's press on anyway");
}
console.log("still rollin' with the homies");
 
```

## Coding Exercises

[  fetches data from the Rick and Morty API](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week1-day3-task/task.md)

**MySolution** :

[Fetch Data Project](https://github.com/MostafaTahboub/Mastering-JavaScript-in-20-Days/tree/main/Fetching%20Data)
