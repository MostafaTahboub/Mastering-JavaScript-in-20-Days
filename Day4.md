
# Day 4 :Events&Handlers and Conditionals 
Today, I learned about event listeners in JavaScript, followed by conditional statements and loops. I also discovered useful array methods to simplify array manipulation. It was an enlightening day of acquiring new skills and expanding my JavaScript knowledge.

## Lessons Summary
- Web browser fires many events when something hppend, so we need to handle this events , so the JS offers many methods to handle this events.
- There are many of events like "click","dblclick","mouseover",..etc.
- Loops let us run the code many times over and over while the condition is true.
- Conditional statement like "if" statement let us run the code under certain conditions.
- JS can only do one task at a time ("single-threaded").
- Some actions needed a lot of time to run like "waiting from user events " ,so we use an asynchronus code for it .
- "setTimeout" method is used to delay action.
## Coding Examples
[ 4-8 ToDo Examples on OurQuiz Page code](https://github.com/MostafaTahboub/Mastering-JavaScript-in-20-Days/blob/main/OurQuiz%20Page%20code)

```
// loops Examples
const numbers = [1,2,3];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

for (let n of numbers) {
    console.log(n);
}
-----------------------------------------------------
// map and filter Examples
//From the spices array, use map and filter to create a new array endInY with just the girls whose nickname ends in "y"
const spices = [
    {name: "Emma", nickname: "Baby"},
    {name: "Geri", nickname: "Ginger"},
    {name: "Mel B", nickname: "Scary"},
    {name: "Mel C", nickname: "Sporty"},
    {name: "Victoria", nickname: "Posh"}
];
let endInY=spices.filter(s=>s.nickname.endsWith("y"));
-------------------------------------------------------
//Write a function isEmpty(array) that returns whether a given array is empty or not
const arr = [1, 2]
const isEmpty = (arr) => {
    if (arr.lenght === 0) 
    return true;
    else
     return false;
}

```
## Coding Exercises

[ Use Multiple Conditional (Ternary) Operators
](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-multiple-conditional-ternary-operators)

**My Solution :** 
```
function checkSign(num) {
return (num===0) ? "zero":(num>0) ?"positive":"negative";
}
checkSign(10);
```
[Golf Code
](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/golf-code)

**My Solution :**
```
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
 if (strokes === 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  }
}

golfScore(5, 9);
```
[Use the map Method to Extract Data from an Array
](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/local-scope-and-functions)

**My Solution :** 
```
const ratings =  watchList.map(s=>{
  return {title : s.Title ,
   rating:s.imdbRating
  }
});
```

[Use the filter Method to Extract Data from an Array
](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-filter-method-to-extract-data-from-an-array)

**My Solution :** 
```
const mapedlist =watchList.map(s=>{
  return {title : s.Title ,
   rating:s.imdbRating
  }
}) ;
const filteredList=mapedlist.filter(s=>
  s.rating>=8
  )
```
