
# Day 1 : Intro & Data types &Operators
On this particular day, i learned the basics of JavaScript and its practical application. i began with an introduction to JavaScript, understanding its purpose and where it is typically written. i also explored various key concepts, such as the **Document Object Model (DOM)**, which allows us to modify web pages and access elements using JavaScript. Additionally, i laerned the different **values and data types** commonly used in JavaScript, as well as the **operators** used to manipulate these values.

## Lessons Summary
- There is many places to write javaScript code like VScode ,Browsers Console , Text Editor .
- Every element in html page is an object and you can access and alter elements by using document and JS methods. 
- Values is chunks of information we want to work with.
- There is a many data types in javaScript primitives and non primitives.
- The String data type is made up of characters and you can access every charcter in the string. 
- There is a many kinds of operators in js like arithmetic opearators , comparison operators , Equality operators,........ .
## Coding Examples

``` 
 /// DOM

//example 1 : retrive the elements in the web page

 document.getElementsByTagName("p") ; //retrive all elements with tag 'p'
 document.getElementById("p1-symbol").textContent ;//retrive the text
 
// example 2: change elements in a web page

1.Change the player names to you & neighbor
document.getElementById("p1-name").textContent="mostafa";
document.getElementById("p2-name").textContent="sami";
2. using append() 
document.querySelector('h2').append(" and love");

/// Data Types 

//example : using typeof()    
1.false
typeof(false); // output : boolean

2."true"
typeof("true"); //output: string

/// Strings 
example: Capitalize the heading "Tic Tac Toe"
document.querySelector("h1").textContent.toUpperCase();

/// Operators
example : using  arithmetic opertors to calculate The average number of hours you slept this week
(8+7+6+10+9+8+6.5)/7


```

## Coding Exercises

[Compound Assignment With Augmented Multiplication
](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-multiplication)

**My Solution :** 
```
let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3 ;
c *= 10;
```
[Concatenating Strings with the Plus Equals Operator
](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-the-plus-equals-operator)

**My Solution :**
```
let myStr;
myStr ="This is the first sentence. ";
myStr += "This is the second sentence.";
```
[Use Bracket Notation to Find the Nth-to-Last Character in a String
](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-nth-to-last-character-in-a-string)

**My Solution :** 
```
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length-2]; 
```

