
# Day 9 : Classes & Prototypes

Today, I began by studying objects and prototypes, followed by a deeper understanding of classes and their functionality. Finally, I reviewed the key concepts covered in the course.


## Lessons Summary
-  OOP is enormously popular paradigm for structuring our complex code.
- OOP enable us to add features to my code in easyble way .
- Every object in js has a prototype property  and the key word  "__ proto __" is link to prototype and it enable us to access it.
- With a "new " key word every object belong to the function or class  when we edit the prototype property of this function or this class the inheretance objects will edit also .   
- Prototype chain is connect the prototype of object to the prototype of other objects ,so the other object inherent the propertires to this object (object inherit object ).
- "this" is always a reference to an object but in strict mode it can be any value and its value depends on in which context it appears: function, class, or global.
 

## Coding Challenges
[Object-Oriented JavaScript](http://csbin.io/oop)

**My Sloution :**
```
// challenge 1:

function makePerson(name, age) {
  
  
  const newObject= {};
 newObject.name=name;
 newObject.age=age;
 return newObject;
}

// challenge 2:

const personStore = {
  greet:function (){console.log("hello");}
};
 
// challenge 3 &4 :

function personFromPersonStore(name, age) {
  // add code here
  const person = Object.create(personStore);
  person.name = name;
  person.age = age;
  person.introduce = () => {   console.log("Hi, my name is " + this.name);}
  return person;
  
}

```


