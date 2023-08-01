// var vs let vs const scope var a = 5; console.log(a); {   var a = 5; }
// console.log(a); {   let b = 5;   console.log(b); } {   const c = 10;
// console.log(c); } shadowing function test() {   let a = "Hello";   if (true)
// {     let a = "Hi";     console.log(a);   }   console.log(a); } test();
// function test() {   var a = "Hello";   let b = "bye";   if (true) {     let a
// = "Hi";     var b = "good bye"; // illegal shadowing     console.log(a);
// console.log(b);   } } test(); Declaration type question var a; var a; let a;
// let a; let a; {   let a; // this is ok because of shadowing } Declaration
// without initialization with var and let it is ok const a = 13; // const has
// to initialized when declared. Re-initialization var a = 5; a = 10; let b = 5;
// b = 6; console.log(b, a); const c = 8; c = 9; // assignment to constant
// variable // i.e; var and let can be updated but const can never be updated.
// Hoisting console.log(count); var count = 1; console.log(count);
// console.log(a); // Refference Error (Temporal dead Zone) // TDZ - the time
// between the declaration and initialization of let and const variables let a =
// 10; var b = 12;

/*
function abc() {
  console.log(a, b, c);

  const c = 2;
  let b = 3;
  var a = 4;
}
abc();
*/

// Map, Filter and Reduce Map const nums = [1, 2, 3, 4, 5]; const multiplyThree
// = nums.map((num, i, arr) => {   return num * 3 + i; });
// console.log(multiplyThree); Filter const moreThanTwo = nums.filter((num) => {
//   return num > 2; }); console.log(moreThanTwo); Reduce const sum =
// nums.reduce((acc, curr, i, arr) => {   return acc + curr; }, 0);
// console.log(sum); Polyfill for map()
/*
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};
const multiplyThree = nums.myMap((num) => {
  return num * 3;
});
console.log(multiplyThree);
*/

// Polyfill for filter()
/*
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const moreThanTwo = nums.myFilter((num) => {
  return num > 2;
});
console.log(moreThanTwo);
*/

// Polyfill for reduce()
/*
Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

const sum = nums.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(sum);
*/

// Question 1: map vs forEach
/*
const arr = [2, 5, 3, 4, 7];

const mapResult = arr
  .map((ele) => {
    return ele + 3; // return a new array (don't modify the existing array)
  })
  .filter((ele) => {
    return ele > 7; // we can chain the map reduce filter method.
  });

const forEachResult = arr.forEach((ele, i) => {
  arr[i] = ele + 2; // return undefined (it modify the original array)
}); // we can't chain it

console.log(mapResult, forEachResult, arr);
*/

// map, filter and reduce - O/P based question Question - 1 (print the name of
// each student in uppercase) let students = [   { name: "Piyush", rollNumber:
// 31, marks: 80 },   { name: "Jenny", rollNumber: 15, marks: 69 },   { name:
// "Kaushal", rollNumber: 16, marks: 35 },   { name: "Dilpreet", rollNumber: 7,
// marks: 55 }, ];
/*
// using for loop
let names = [];
for (let i = 0; i < students.length; i++) {
  names.push(students[i].name.toUpperCase());
}
console.log(names);

// using map
const names = students.map((stu, i) => {
  return stu.name.toUpperCase();
});
console.log(names);


// Question - 2 (Return only details of those who scored more than 60 marks)

const scoreMoreThan60 = students.filter((stu) => stu.marks > 60);

console.log(scoreMoreThan60);

// Question - 3 (More than 60 marks and rollNumber greater than 15)

const details = students.filter((stu) => stu.marks > 60 && stu.rollNumber > 15);

console.log(details);


// Question - 4 {sum of marks of all students}

const totalMarks = students.reduce((acc, curr) => {
  return acc + curr.marks;
}, 0);

console.log(totalMarks);

// Question - 5 (Return only names of the student who scored more than 60)

const nameOfStudent = students
  .filter((stu) => stu.marks > 60)
  .map((stu) => stu.name);

console.log(nameOfStudent);


// Question - 6 {Return total marks for students with marks greater than 60
//                 after 20 marks have been added to those who scored less than 60}

const totalMarks = students
  .map((stu) => {
    if (stu.marks < 60) {
      stu.marks += 20;
    }
    return stu;
  })
  .filter((stu) => stu.marks > 60)
  .reduce((acc, curr) => {
    return acc + curr.marks;
  }, 0);

console.log(totalMarks); //output = 224
*/

// Functions in JavaScript.
/*
//Q1 - what is function declaration?
function square(num) {
  return num * num;
}

console.log(square(4));  // 16

//Q2 - what is function expression?
const square = function (num) {
  return num * num;
};

console.log(square(4)); // 16


// Q3 - what are First Class Functions?
// Ans - where a function can be treated like a variable.

function square(num) {
  return num * num;
}
function displaySquare(fn) {
  console.log("Square is " + fn(5));
}

displaySquare(square);

// Q4 - what is IIFE?
(function square(num) {
  console.log(num * num);
})(5);

// Q5 - IIFE - O/P based question

(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);


// Q6 - Function Scope

var num1 = 20;
num2 = 3;
name = "Roadside Coder";

function multiply() {
  return num1 * num2;
}
console.log(multiply());

// A nested function example
function getScore() {
  var num1 = 2;
  num2 = 3;

  function add() {
    return name + " scored " + (num1 + num2);
  }

  return add();
}

console.log(getScore());


// Q7 - Function Scope - O/P based question

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}


// Q8 - Funcion Hoisting
functionName();
// console.log(x);

function functionName() {
  console.log(x);
  var x = 34;
  console.log("AMan KumaR");
}

// var x = 34;

// Q9 - Function Hoisting - O/P based question

var x = 21;

var fun = function () {
  console.log(x);
  var x = 12;
};
console.log(x);
fun();


// Q10 - Params vs Arguments

// function square(num) {// Params
//   console.log(num * num);
// }

// square(5); // Arguments

function multiply(...nums) {
  // rest
  console.log(nums);
  console.log(nums[0] * nums[1]);
}

var arr = [5, 6];

multiply(...arr); // spread


// Q11 - Params vs Arguments - O/P based question

const fn = (a, x, y, ...numbers) => {
  console.log(x, y, numbers);
};

fn(5, 6, 3, 7, 8, 9);
*/
/*
// Q12 - Callback Function
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// Q13 - Arrow Functions

// const add = (firstNum, secondNum) => {
//   return firstNum + secondNum;
// };

// 1 - syntax

function square(num) {
  return num * num;
}

const squareArrow = (num) => {
  return num * num;
};

// 2 - Implicit "return" keyword
const squareArr = (num) => num * num;

// 3 - Arguments

function fn() {
  console.log(arguments);
}
// fn(1, 2, 3);

const fnArr = () => {
  console.log(arguments);
};

// fnArr(1, 3, 4);

// 4 - "this" keyword

let user = {
  username: "Roadside Coder",
  rc1: () => {
    console.log("Subscribe to " + this.username);
  },
  rc2() {
    console.log("Subscribe to " + this.username);
  },
};

user.rc1();
user.rc2();
*/

/*
Closures in JavaScript
// Lexical scope

var userName = "Roadside coder";
// global scope
function local() {
  // local scope
  console.log(userName);
}

local();
function subscribe() {
  var name = "Aman Kumar";
  // inner scope 2
  function displayName() {
    // inner scope
    alert(name);
  }
  displayName();
}
subscribe();


// what is closure?
function makeFunc() {
  var name = "Mozilla";

  function displayName(num) {
    console.log(name, num);
  }
  return displayName;
}

// var myFucn = makeFunc();
// myFucn();

makeFunc()(5);

// Closure Scope chain -> It has access to all of the scopes
var userName = "Saket";
function makeFunc() {
  var name = "Mozilla";

  function displayName(num) {
    console.log(name, num, userName);
  }
  return displayName;
}

// var myFucn = makeFunc();
// myFucn();

makeFunc()(5);

// global scope
var e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer function scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}
console.log(sum(1)(2)(3)(4)); // log = 20

// Q1
let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1; // shadowing
    console.log(count); // 1
  }
  // count is still 0
  console.log(count); // 0
})();

// Q2 - Write a function that would allow you to do this

function createBase(num) {
  return function (innerNum) {
    console.log(innerNum + num);
  };
}

var addSix = createBase(6);
addSix(10); // returns 16
addSix(15); // returns 27

// Q3 - Time Optimization

function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  return function (index) {
    console.log(a[index]);
  };
}

const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");
console.time("50");
closure(50);
console.timeEnd("50");

// Q4 - Block scope and setTimeout

function a() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // loged out 3, 3, 3 (because of var which is a fuction scope)
    }, i * 1000);
  }
}
a();

function a() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // loged out 0,1,2 (because of let which is a block scope )
    }, i * 1000);
  }
}
a();


// without using let how can we solve this problem - we can use closure

for (var i = 0; i < 3; i++) {
  function inner(i) {
    setTimeout(function log() {
      console.log(i);
    }, i * 1000);
  }
  inner(i);
}


// Q5 - How would you use a closure to create a private counter?

function counter() {
  var _counter = 0; // private variable counter

  function add(increment) {
    // we are using these function to manipulate the private counter
    _counter += increment;
  }
  function retrive() {
    return "Counter = " + _counter;
  }

  return {
    add,
    retrive,
  };
}

const c = counter();
c.add(5);
c.add(10);

console.log(c.retrive());

// Q6 - What is Module Pattern?

var Module = (function () {
  function privateMethod() {
    // do something
    console.log("private");
  }

  return {
    publicMethod: function () {
      console.log("public");
    },
  };
})();

Module.publicMethod();
Module.privateMethod();

// Q7 - Make this run only once

let view;
function likeTheVideo() {
  let called = 0;

  return function () {
    if (called > 0) {
      console.log("Already Subscribed");
    } else {
      view = "Roadside Coder";
      console.log("Subscribe to", view);
      called++;
    }
  };
}

let isSubscribed = likeTheVideo();

isSubscribed();
isSubscribed();
isSubscribed();
isSubscribed();
isSubscribed();

// Q8 - Once Polyfill

function once(func, context) {
  let ran;

  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }

    return ran;
  };
}

const hello = once((a, b) => console.log("hello", a, b));

hello(1, 2);
hello(1, 2);
hello(1, 2);
hello(1, 2);

// Q8 - Memoize Polyfill (Implement caching/memoize function)

function myMemoize(fn, context) {
  const res = [];
  return function (...args) {
    var argsCache = JSON.stringify(args);

    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const clumsyProduct = (num1, num2) => {
  for (let i = 0; i < 100000000; i++) {}
  return num1 * num2;
};

const memoizedClumsyProduct = myMemoize(clumsyProduct);

console.time("first call");
console.log(memoizedClumsyProduct(9467, 7649));
console.timeEnd("first call");

console.time("second call");
console.log(memoizedClumsyProduct(9467, 7649));
console.timeEnd("second call");


// second example cache/memoize

function memoize(func) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    }

    const result = func.apply(this, args);
    cache[key] = result;

    return result;
  };
}

function computeExpensiveValue(n) {
  // Some expensive computation
  console.log("Computing...");
  return n * 2;
}

const memoizedCompute = memoize(computeExpensiveValue);

console.log(memoizedCompute(5)); // Output: Computing... 10
console.log(memoizedCompute(5)); // Output: 10 (Returned from cache)
console.log(memoizedCompute(3)); // Output: Computing... 6
console.log(memoizedCompute(3)); // Output: 6 (Returned from cache)

// Q10 - difference between closure and scope
*/
/*
// Currying in JavaScript
// Example f(a, b) into f(a)(b)

function f(a) {
  return function (b) {
    return `${a} ${b}`;
  };
}

console.log(f(5)(4));

// Q1 - sum(2)(6)(1)

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(2)(6)(1));

// Q2 - evaluate("sum")(4)(2) => 6
//      evaluate("multiply")(4)(2) => 8
//      evaluate("divide")(4)(2) => 2
//      evaluate("substract")(4)(2) => 2

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "multiply") return a * b;
      else if (operation === "divide") return a / b;
      else if (operation === "substract") return a - b;
      else return "Invalid Operation";
    };
  };
}

// console.log(evaluate("sum")(4)(2));
// console.log(evaluate("multiply")(4)(2));
// console.log(evaluate("divide")(4)(2));
// console.log(evaluate("substract")(4)(2));

// this is also a use case of currying by initialize our operation once and use it multiple times.
const mul = evaluate("multiply");

console.log(mul(2)(6));
console.log(mul(4)(5));

// Q3 - Infinite Currying -> sum(1)(2)(3)....(n)

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(5)(2)(4)(8)());

// Q4 - difference b/w currying vs partial application

// Partial Application - here we have three arguments and we are
// returning only two functions.
function sum(a) {
  return function (b, c) {
    return a + b + c;
  };
}

const x = sum(10);
console.log(x(1, 4));
console.log(x(2, 3));

// or
console.log(sum(5)(3, 4));

// Currying - here we have three argumenst and we are returning
// three functions
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(1)(2)(3));

// Q5 - Manipulating DOM

function updateElementText(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}

const updateHeader = updateElementText("heading");

updateHeader("Aman Kumar");

// Q6 - curry() implementation
// ex - converts f(a, b, c) into f(a)(b)(c)

function curry(func) {
  return function curriedFunc(...args) {
    console.log(args.length, func.length);
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c) => a + b + c;

const totalSum = curry(sum);

console.log(totalSum(1)(2)(3));
*/

// JavaScripts Objects.
/*
const user = {
  name: "Roadside Coder",
  age: 24,
  "like the video": true,
};

// user.name = "Aman Kumar";
// delete user.age;
delete user["like the video"];
console.log(user);

const func = (function (a) {
  delete a; // it will not affect because it is used to delete something related to object
  // here a is a local variable
  return a;
})(5);

console.log(func);


const property = "firstName";
const name = "Aman Kumar";

const user = {
  [property]: name,
};

console.log(user.firstName);

const user = {
  name: "Aman",
  age: 24,
  isTotallyAwesome: true,
};

for (key in user) {
  // console.log(key);
  console.log(user[key]);
}

// Q1 - tell output

const obj = {
  a: "one",
  b: "two",
  a: "three",
};

console.log(obj); // a: "one" is replaced by "three"
// and it will still be in the first position with replaced value while printing

// Q2 - Creatr a function multiplyByTwo(obj) that
// multiplies all numeric property values of nums by 2

let nums = {
  a: 100,
  b: 200,
  title: "My nums",
};

multiplyByTwo(nums);

function multiplyByTwo(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}
console.log(nums);

// Q3 - what's the output.

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

// console.log(a[b]); // 456 overwrite the value "[object, Object]"
console.log(a);

// Q4 - JSON.stringigy and JSON.parse

const user = {
  name: "Aman",
  age: 24,
};

const strObj = JSON.stringify(user);

localStorage.setItem("test", strObj);
console.log(localStorage.getItem("test"));

console.log(JSON.parse(localStorage.getItem("test")));
// console.log(JSON.parse(strObj));


// Q5 - What's the output

console.log([..."Lydia"]);

// Q6 - What's the output

const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);

// Q7 -

const settings = {
  username: "Aman",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "username"]);

console.log(data);

// Q 8 - What's the o/p

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2; // "this" refers to shape object
  },
  perimeter: () => 2 * Math.PI * this.radius, // arrow function "this" refers to window object
};

console.log(shape.diameter()); // 20
console.log(shape.perimeter()); // NaN

// Q9 - What is destructuring in objects?

let user = {
  name: "Aman",
  age: 24,
  college: "LNCT",
  fullName: {
    first: "Saket",
    last: "Singh",
  },
};

// const { name, age, college } = user;
// console.log(name, age, college);

const {
  fullName: { first, last },
} = user;

console.log(first, last);

// Q10 - What's the output

function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit];
}

console.log(getItems(["banana", "apple"], "pear", "orange"));

// Q11 - what's the output

let c = { greeting: "Hey!" };
let d;

d = c;

c.greeting = "Hello";
console.log(d.greeting); // 'hello'
// because we are simply providing the reference and not the complete object
// any changes in d and c will affect both.

// Q12 - what's the output

console.log({ a: 1 } == { a: 1 }); // false
console.log({ a: 1 } === { a: 1 }); // false
// beause both objects are going to point a different memory space

// Q13 - what's the output

let person = { name: "Aman" };
const members = [person];
person = null;

console.log(members); // print the object in array

// Q14 - what's the output

const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply(); // 20
multiply(); // 20

console.log(value.number); // 10
multiply(value); // 20
console.log(value.number); // 20 (modified when passing directly as argument)

multiply(value); // 40
console.log(value.number); // 40 (again modified)

// Q15 - what's the output

function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50,
  };

  return person;
}

const personObj1 = {
  name: "Alex",
  age: 30,
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // {name: "Alex", age: 25} (modified due to person.age = 25)
console.log(personObj2); // {name: 'John', age: 50} {reassign person to some other object that means it will not affect the reference }


// Q16 - Shallow copy and Deep copy / clone an object

// Deep Copy
let user = {
  name: "Roadside Coder",
  age: 24,
};

// const objClone = Object.assign({}, user);
// objClone.name = "Aman";  // don't affect user
// or
// const objClone = JSON.parse(JSON.stringify(user)); // another method of deep copy
// objClone.name = "Saket"; // don't affect user
// or
const objClone = { ...user }; // object destructuring
objClone.name = "Aman";

console.log(user, objClone);

var a = 1;
function h() {
  if (a) {
    var a = 9;
  }
  console.log(a);
}
h();
console.log(a);
*/

// "this" keyword in javaScript (Implicit Binding)
/*
this.a = 5;
console.log(this.a);
console.log(this);


let user = {
  name: "Aman",
  age: 24,
  getDetails() {
    console.log(this); // this refers to user object
  },
};

user.getDetails();


let user = {
  name: "Aman",
  age: 24,
  childObj: {
    newName: "Saket",
    getDetails() {
      console.log(this.newName, "and", this.name); // this.name = undefined because this point ot immediat parent object
    },
  },
};

user.childObj.getDetails();

let user = {
  name: "Aman",
  age: 24,
  getDetails: () => {
    console.log(this.name); // print nothing - in arrow function this refers to window object
  },
};

user.getDetails();

let user = {
  name: "Aman",
  age: 24,
  getDetails() {
    const nestedFunc = () => console.log(this.name); // but here this works because arrow function
    // refers here to the normal parent function which is inside the object so it works in this case
    // i.e; this is pointing to the user object in this scenario
    nestedFunc();
  },
};

user.getDetails();

class user {
  constructor(n) {
    this.name = n;
  }

  getName() {
    console.log(this.name);
  }
}

const User = new user("Aman");

console.log(User);
User.getName();

// Q1 - What's the output?

const user = {
  firstName: "Aman!",
  getName() {
    const firstName = "Sunny!";
    return this.firstName;
  },
};

console.log(user.getName()); // Aman! user obj

// Q2 - What is the result of accessing its ref? why?

function makeUser() {
  return {
    name: "John",
    // ref: this, // here ref is pointing the parent object which is a window object
    ref() {
      return this;
    },
  };
}
let user = makeUser();

// console.log(user.ref.name); // ref points to window object nothing got printed
console.log(user.ref().name); // John

const user = {
  name: "Aman Kumar",
  logMessage() {
    console.log(this.name);
  },
};
// setTimeout(user.logMessage, 1000); // logs nothing because setTimeout treats user.logMessage as a callback
setTimeout(function () {
  // avoid creating user.logMessage as a callback instead wrap inside a functon
  user.logMessage();
}, 1000);


// Q4 - What's the output?

const user = {
  name: "Aman",
  greet() {
    return `Hell0, ${this.name}!`;
  },
  farewell: () => {
    return `Goodbye, ${this.name}!`;
  },
};

console.log(user.greet());
console.log(user.farewell());

// Q5 - create an object calculator

let calculator = {
  read() {
    this.a = +prompt("a = ", 0);
    this.b = +prompt("b = ", 0);
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

// Q6 - what will be the output

// var length = 4;

// function callback() {
//   console.log(this.length);
// }

// const object = {
//   length: 5,
//   method(fn) {
//     fn();
//   },
// };

// object.method(callback); // 4 the window/global object

// Tricky question of above type
var length = 4;

function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method() {
    // arguments = [callback, 2, 3] i.e; length = 3
    console.log(arguments);
    arguments[0]();
  },
};

object.method(callback, 2, 3); // 4 the window/global object

// Q7 - Implement the calc

const calc = {
  total: 0,

  add(a) {
    this.total += a;
    return this;
  },

  multiply(a) {
    this.total *= a;
    return this;
  },

  substract(a) {
    this.total -= a;
    return this;
  },
};

const result = calc.add(10).multiply(8).substract(30).add(10);

console.log(result.total);
*/

// Javascript - Promises, Callbacks, Async/Await, (polyfills for promises)
// Synchronous vs Asynchronous code
/*
// sync code - excutes line by line
// console.log("Start");
// console.log("Hello I am Aman!");
// console.log("Finish");

// async code
console.log("Start");
setTimeout(() => {
  console.log("Hello I am Aman!");
}, 0);
console.log("Finish");
*/

// Callbacks
/*
console.log("start");

function importantAction(username, cb) {
  setTimeout(() => {
    cb(`Subscribe to ${username}`);
  }, 1000);
}

function likeTheVideo(video, cb) {
  setTimeout(() => {
    cb(`like the ${video} video`);
  }, 1000);
}

function shareTheVideo(video, cb) {
  setTimeout(() => {
    cb(`share the ${video} video`);
  }, 1000);
}
// Callback Hell (PYRAMID OF DOOM)
const message = importantAction("Roadside Coder", function (message) {
  console.log(message);
  likeTheVideo("Javascript Interview Questons", (action) => {
    console.log(action);
    shareTheVideo("Javascript Interview Questons", (action) => {
      console.log(action);
      shareTheVideo("Javascript Interview Questons", (action) => {
        console.log(action);
        shareTheVideo("Javascript Interview Questons", (action) => {
          console.log(action);
          shareTheVideo("Javascript Interview Questons", (action) => {
            console.log(action);
            shareTheVideo("Javascript Interview Questons", (action) => {
              console.log(action);
              shareTheVideo("Javascript Interview Questons", (action) => {
                console.log(action);
              });
            });
          });
        });
      });
    });
  });
});

// console.log(message); // o/p - undefined

console.log("stop");
*/

// Promises
/*
console.log("start");

const sub = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;
    if (result) {
      resolve("Subscribed to Roadside Coder");
    } else {
      reject(new Error("Why aren't you subscribed to Roadside Coder?"));
    }
  }, 2000);
});

// console.log(sub);

sub
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

console.log("stop");

// without any coditions
console.log("start");

const sub = Promise.resolve("Subscribed to Roadside coder");
console.log(sub);
sub.then((res) => console.log(res));

console.log("stop");
*/
/*
console.log("start");

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 1000);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`like the ${video} video`);
    }, 1000);
  });
}

function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`share the ${video} video`);
    }, 1000);
  });
}
*/
// Promises chaining importantAction("Roadside Coder")   .then((res) => {
// console.log(res);     return likeTheVideo("Javascript Interview Questions");
//  })   .then((res) => {     console.log(res);     return
// shareTheVideo("Javascript Interview Questions");   })   .then((res) => {
// console.log(res);   })   .catch((err) => {     console.log(err);   });
// Promise Combinator - helps us executes more than one promise at a time. four
// types - 1) Promise.all

// 1) - Promise.all
/*
Promise.all([
  importantAction("Roadside Coder"),
  likeTheVideo("Javascript Interview Questions"),
  shareTheVideo("Javascript Interview Questions"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error("Error: Promises failed", err);
  });

// 2)- Promise.race

Promise.race([
  importantAction("Roadside Coder"),
  likeTheVideo("Javascript Interview Questions"),
  shareTheVideo("Javascript Interview Questions"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error("Error: Promises failed", err);
  });

// 3) - Promise.allSettled

Promise.allSettled([
  importantAction("Roadside Coder"),
  likeTheVideo("Javascript Interview Questions"),
  shareTheVideo("Javascript Interview Questions"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error("Error: Promises failed", err);
  });

// 4) - Promise.any

Promise.any([
  importantAction("Roadside Coder"),
  likeTheVideo("Javascript Interview Questions"),
  shareTheVideo("Javascript Interview Questions"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error("Error: Promises failed", err);
  });
   */
/*
// Another Approach async / await
const result = async () => {
  try {
    const message1 = await importantAction("Roadside Coder");
    console.log(message1);
    const message2 = await likeTheVideo("Javascript Interview Questions");
    console.log(message2);
    const message3 = await shareTheVideo("Javascript Interview Questions");
    console.log(message3);

    // console.log({ message1, message2, message3 });
  } catch (error) {
    console.error("Promises Failed", error);
  }
};

result();
*/
// console.log("stop");

// Ouput based question on Promises
/*
// Q1 - what's the output?

console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

promise1.then((res) => {
  console.log(res);
});

console.log("end");

// Q2 - what's the output?

console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  // resolve(2);
  console.log(3);
});
// if resolve is not given inside promise then below line is not going to executed
promise1.then((res) => {
  console.log(res);
});

console.log("end");

// Q3 - what's the output

console.log("Start");

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });

console.log("middle");

fn().then((res) => {
  console.log(res);
});

console.log("end");

// Q4 - what's the output

function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}

const promise = job();

promise
  .then(function () {
    console.log("success 1");
  })
  .then(function () {
    console.log("success 2");
  })
  .then(function () {
    console.log("success 3");
  })
  .catch(function () {
    console.log("Error 1");
  })
  .then(function () {
    console.log("success 4");
  });


// Q5 - what's the output

function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

const promise = job(true);

promise
  .then(function (data) {
    console.log(data);   // success

    return job(false);
  })
  .catch(function (error) {
    console.log(error);    // error

    return "Error caught";
  })
  .then(function (data) {
    console.log(data);   // Error caught

    return job(true);
  })
  .catch(function (error) {
    console.log(error);
  });

// Q6 - what's the output

function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

const promise = job(true); // resolve("success")

promise
  .then(function (data) {
    console.log(data); // success

    return job(true);
  })
  .then(function (data) {
    if (data !== "victory") {
      throw "Defeat"; // here throwing error that means rejected promise
    }
    return job(true); // although here returning a resolve promise but it will not go inside it
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error); // Defeat

    return job(false);
  })
  .then(function (data) {
    console.log(data); //

    return job(true);
  })
  .catch(function (error) {
    console.log(error); // error
    return "Error caught";
  })
  .then(function (data) {
    console.log(data); // Error caught
    return new Error("test"); // this is not a rejected promise this in only there to confuse you it's a normal text
  })
  .then(function (data) {
    console.log("Success:", data.message); // Success: test
  })
  .catch(function (data) {
    console.log("Error:", data.message);
  });

// Q7 - Promise Chaining

const firstPromise = new Promise((resolve, rejece) => {
  resolve("First!");
});

const secondPromise = new Promise((resolve, rejece) => {
  resolve(firstPromise);
});

secondPromise
  .then((res) => {
    return res;
  })
  .then((res) => console.log(res));

// Q8 - Rewrite this example code using async/await instead of .then/catch

async function loadJson(url) {
  let response = await fetch(url);

  if (response === 200) {
    let json = response.json();
    return json;
  } else {
    throw new Error(response.status);
  }
}

loadJson("https://fakeurl.com/no-such-user.json").catch((err) =>
  console.log(err)
);

// Q9 - solve promise recursively

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 1000);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`like the ${video} video`);
    }, 1000);
  });
}

function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`share the ${video} video`);
    }, 1000);
  });
}

function promiseRecursive(funcPromise) {
  if (funcPromise.length === 0) return;

  const currPromise = funcPromise.shift();

  currPromise.then((res) => console.log(res)).catch((err) => console.log(err));

  promiseRecursive(funcPromise);
}

promiseRecursive([
  importantAction("RoadsideCoder"),
  likeTheVideo("Javascript Interview Questions"),
  shareTheVideo("Javascript Interview Questions"),
]);
*/

// Q10 - Promise polyfill implementation (VVVI)

function PromisePolyFill(executor) {
  let onResolve,
    onReject,
    isFullfilled = false,
    isRejected = false,
    isCalled = false,
    value;

  function resolve(val) {
    isFullfilled = true;
    value = val;

    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(val) {
    isRejected = true;
    value = val;

    if (typeof onReject === "function") {
      onReject(val);
      called = true;
    }
  }

  this.then = function (callback) {
    onResolve = callback;

    if (isFullfilled && !isCalled) {
      called = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;

    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(value);
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

const examplePromise = new PromisePolyFill((resolve, reject) => {
  setTimeout(() => {
    reject(2);
  }, 1000);
});

examplePromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err));
