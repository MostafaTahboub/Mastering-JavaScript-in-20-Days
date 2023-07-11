
# Day 8 : Asynchronous JavaScript & Promises
Today, I focused on asynchronous JavaScript, diving into the world of promises and understanding how they work. I also explored the inner workings of web APIs and their role in handling asynchronous tasks.

## Lessons Summary
- JavaScript by defualt is synchronus this meaning it executes the code line by line .
- JavaScript is a Single threaded meaning that one command runs at a time.
- If we want to accessing server or running function will take a lot of time so we need an asynchronus code  to avoid blocking the other code from running.
- Promises is a Special objects built into JavaScript that get returned immediately when we make a call to a web browser API/feature.
-  call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions.
- By using Promises, Web APIs, the Callback & Microtask Queues and Event loop enable Web applications Asynchronous JavaScript isthe backbone of the modern web - letting us build fast ‘non-blocking’ applications
 
## Coding Examples

```
// Using promises and some asynchronus code

function display(data){console.log(data);}
function printHello(){console.log("Hello");}
function blockFor300ms(){/* blocks js thread for 300ms }
setTimeout(printHello, 0);
const futureData = fetch('https://twitter.com/will/tweets/1')
futureData.then(display)
blockFor300ms()
console.log("Me first!");

```

## Coding Challenges
[Asynchronicity Challenges](http://csbin.io/async)

**My Sloution :**
```
// challenge 2:

function delayedGreet() {
  setTimeout(() => { console.log("welcome"); }
    , 3000);

}
delayedGreet();


// challenge 3:

function helloGoodbye() {

    console.log("hello");
    setTimeout(() => {
       console.log("goodbye");        
    }, 2000);

  }
 
// challenge 4 :

function brokenRecord() {
    setTimeout(()=>{
        console.log("hi again");
       brokenRecord();        
    },1000);
  }

  brokenRecord();

// challenge 5: 

function limitedRepeat() {
  let counter = 0;
  const intervalId = setInterval(() => {
    console.log("hi");
    counter++;
    if (counter === 5) {
      clearInterval(intervalId);
    }
  }, 1000);
}

```

## Coding Exercises

[Asynchronus Exercises](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day3-tasks/tasks.md)

```
// Exercise 1 :

const task1 = (cb) => setTimeout(() => {
  const message = "Task 1 has executed successfully!";
  cb(message);
}, 3000)

const task2 = (cb) => setTimeout(() => {
  const message = "Task 2 has executed successfully!";
  cb(message);
}, 0)

const task3 = (cb) => setTimeout(() => {
  const message = "Task 3 has executed successfully!";
  cb(message);
}, 1000)

const task4 = (cb) => setTimeout(() => {
  const message = "Task 4 has executed successfully!";
  cb(message);
}, 2000)

const task5 = (cb) => setTimeout(() => {
  const message = "Task 5 has executed successfully!";
  cb(message);
}, 4000)

const asyncTasks = [task1, task2, task3, task4, task5];
 
const executeInSequenceWithCBs = async (tasks, callback) => {
    let results=[];
    for (let i = 0; i < tasks.length; i++) {
        results.push(await tasks[i](callback));
    }
return results;
}

executeInSequenceWithCBs(asyncTasks, (message) => console.log(message));
-----------------------------------------------
// Exercise 2 :

const apis = [
  {
    apiName: "products",
    apiUrl: "https://dummyjson.com/products",
  },
  {
    apiName: "users",
    apiUrl: "https://dummyjson.com/users",
  },
  {
    apiName: "posts",
    apiUrl: "https://dummyjson.com/posts",
  },
  {
    apiName: "comments",
    apiUrl: "https://dummyjson.com/comments",
  }
]

function executeInParallelWithPromises(apiArray) {
  const promises = apis.map(api => {
    return fetch(api.apiUrl)
      .then(response => response.json())
      .then(data => {
        return {
          apiName: api.apiName,
          apiUrl: api.apiUrl,
          apiData: data
        };
      });
  });

  return Promise.all(promises);
}
executeInParallelWithPromises(apis)
  .then(results => {
    console.log(results);
  })
  .catch(error => {
    console.error(error);
  });

  ----------------------------------------
  //Exercise 3:
const apis = [
  {
    apiName: "products",
    apiUrl: "https://dummyjson.com/products",
  },
  {
    apiName: "users",
    apiUrl: "https://dummyjson.com/users",
  },
  {
    apiName: "posts",
    apiUrl: "https://dummyjson.com/posts",
  },
  {
    apiName: "comments",
    apiUrl: "https://dummyjson.com/comments",
  }
]

const executeInSequenceWithPromises = (apis) => {
  const results = [];

  const fetchNext = (index) => {
    if (index >= apis.length) {
      return Promise.resolve(results);
    }

    const api = apis[index];

    return fetch(api.apiUrl)
      .then(response => response.json())
      .then(data => {
        const result = {
          apiName: api.apiName,
          apiUrl: api.apiUrl,
          apiData: data
        };
        results.push(result);
        return fetchNext(index + 1);
      });
  };

  return fetchNext(0);
};

executeInSequenceWithPromises(apis)
  .then(results => {
    console.log(results);
  })
  .catch(error => {
    console.error(error);
  });




```
