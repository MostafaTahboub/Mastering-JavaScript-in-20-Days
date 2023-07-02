
# Day 1 : Expressions,Arrays and Objects
Today, I had an exciting day of learning as I focused on expressions and statements in JavaScript and their overall structure. I gained a deeper understanding of the various data types in JavaScript and their specific applications. Additionally, I explored the concept of arrays and learned how to effectively utilize them in my code. Furthermore, I delved into the world of objects and their practical usage. To solidify my knowledge, I engaged in a series of exercises and even enjoyed playing some useful games related to these topics.

## Lessons Summary
- An Expression is a valid unit of code that resolves to a value.
- You can use a camelCase for declaring a variable .
- A statment tells "JS" to do something ,but Expression asks "JS" for something.
- Arrays is a collection of multiple values together.
- You can do many operations on Arrays like accssing elements , editing and many other operations.
- There are two types of data in terms of mutability : **Mutable** data can be edited, **Immutable** data always stays the same.
- Objects collect multiple values together to describe more complex data.

## Coding Examples

``` 
// declaring and assigning variables 
   let name = "mostafa";

// methods on Arrays

let numbers1 = [1, 2, 3];
let result1 = numbers1.push(4);
console.log(numbers1); // output: [1,2,3,4]
let numbers2 = [1, 2, 3];
let result2 = numbers2.concat([4]);
console.log(numbers2); // output: [1,2,3]

// create simple object representing me  

const mostafa={
  name :"mostafa",
  home:"hebron ",
  languges:["Arabic","English","German" ]
  ,vechile:"Hundai",
  hobbies:["Coding","Swimming", "climbing"] 
};

//retrieve data from object

const spiceGirls = {
    albums: ["Spice", "Spiceworld", "Forever"],
    motto: "Girl Power",
    members: spices
};
From the spiceGirls object, how can we retrieve:
1."Girl Power" :
spiceGirls.motto;

2."Spiceworld" :
spiceGirls.albums[1];



```

## Coding Exercises

[ Profile Lookup](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup)

**My Solution :** 
```
function lookUpProfile(name, prop) {
    for (let i= 0; i< contacts.length; i++) {
      if (contacts[i].firstName === name) {
        if (contacts[i].hasOwnProperty(prop)) {
          return contacts[i][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact";
  }

```
[Copy Array Items Using slice()
](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-array-items-using-slice)

**My Solution :**
```
function forecast(arr) {
let newArray=arr.slice(2,4);
  return newArray;
}
```
[Combine Arrays with the Spread Operator
](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/combine-arrays-with-the-spread-operator)

**My Solution :** 
```
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence=['learning',...fragment , 'is', 'fun']; 
  return sentence;
}
```

