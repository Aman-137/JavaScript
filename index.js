/*let b = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(b);*/

/*const c = 100;

function x() {
    const c = 30;
    console.log(c);
}
x();
console.log(c);*/

/*const a = 20;
{
    const a = 100;
    {
        const a = 200;

    }

}
console.log(a)*/

/*function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    a = 100;
    return y;
}
var z = x();

console.log(z);

z();*/

/*function z() {
    var b = 900;
    function x() {
        var a = 7;
        function y() {
            console.log(a, b);
        }
        y();
    }
    x();
}
z();*/

/*function x() {

    for(let i=1; i<=5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }

    console.log("Namaste JavaScript");
}

x();*/

/*function x() {

    for(var i=1; i<=5; i++) {

        function close(y) {
            setTimeout(function () {
                console.log(y);
            }, y * 1000);
        }
        close(i);

    }

    console.log("Namaste JavaScript");
}

x();*/

/*function outest() {
    var c = 20;
    function outer(b) {
        //var a = 10;
        function inner() {
            console.log(a, b, c)
        }
        let a = 10;
        return inner;

    }
    return outer;
}
let a = 100;
//outer()();
var close = outest()("helloworld");
close();*/

/*function counter() {
    var count = 0;

    return function incrementCounter() {
        count++;
        console.log(count);
    }

}

var counter1 = counter();
counter1();
counter1();

var counter2 = counter();
counter2();
counter2();counter2();*/

/*function Counter() {
    var count = 0;

    this.incrementCounter =  function () {
        count++;
        console.log(count);
    }

    this.decrementCounter =  function () {
        count--;
        console.log(count);
    }

}

var counter1 = new Counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();*/

/*function a() {
    var x = 0, z = 10;
    return function b() {
        console.log(x);
    }
}

var y = a();

y();*/

/*
//a();
//b(); - this function invokation gives type error.

// Function Statement aka Function Declaration

function a() {
    console.log("a called");
}
a();

// Function Expression

var b = function () {
    console.log("b called");
}
b();

// Anonymous Function - a function without any name

//function () {

//}

// Named Function Expression (line 175)

var b = function xyz() {
    console.log(xyz);

}

b();
xyz();


// First Class Function - the ability to use function as values
// Function are First class Citizens in JS (same thing)
var b = function (param1) {
    return function xyz() {

    }
}

console.log(b());
*/

/*
//Callback function in JavaScript


setTimeout(function () {
    console.log("timer");
}, 5000);


function x(y) {
    console.log("x");

    y();
}

x(function y() {
    console.log("y");
})
*/

/* JavaScript is a synchronous and single threaded lang.
Blocking the main thread - JS has a singhle call stack (ie; main thread)
 we cannot block it by using long time taking function (or asynchronous operation);
 but we can use callback function to do asynchronous operation. (just like above)*/
/*
// using the concept of closure or data hiding we can make it more secure.

function attachEventListener() {
    let count = 0;
    document.getElementById("clickMe")
    .addEventListener("click", function xyz() {
    console.log("Button Clicked", ++count);
    });
}
attachEventListener();
*/

/*
console.log("Start");

setTimeout(function cb() {
    console.log("Callback");
}, 5000);

console.log("End");

console.log("Start");

document.getElementById('clickMe').addEventListener("click", function cb() {
    console.log("Callback");
})
console.log("End"); */

/*
function add() {
    let a;
    a = 100;

    if (typeof a != undefined) {
        sum = a + 5;
    }

    return sum

}
let a = 20;
console.log(a);
const ans = add();
console.log(ans);*/

/*
// trust issues with setTimeout()
console.log("start");

setTimeout(function cb() {
    console.log("callback");
}, 5000);

console.log("end");
// millions line of code (or blocking main thread)

let startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 10000) {
    endDate = new Date().getTime();
}

console.log("while expires");*/

// Functional Programming (Higher order function) Repeating line of code not a
// good idea - follow DRY principle
/*
const radius = [3, 1, 2, 4]

const calculateArea = function (radius) {
    const output = [];
    for (let i=0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}

console.log(calculateArea(radius));


const calculateCircumference = function (radius) {
    const output = [];
    for (let i=0; i < radius.length; i++) {
        output.push(2 * (Math.PI * radius[i]));
    }
    return output;
}

console.log(calculateCircumference(radius));


const calculateDiameter = function (radius) {
    const output = [];
    for (let i=0; i < radius.length; i++) {
        output.push(2 * radius[i]);
    }
    return output;
}

console.log(calculateDiameter(radius));*/

/*
// Modular way

const radius = [3, 1, 2, 4];

const area = function (radius) {
    return Math.PI * radius * radius;
}

const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

const diameter = function (radius) {
    return 2 * radius;
}

const calculate = function (radius, logic) {
    const output = [];
    for (let i=0; i<radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}


console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

// Bonus..
console.log(radius.map(area));*/

//map, reduce & filter
/*
//map
const arr = [5, 1, 3, 2, 6]

function double(x) {
    return x * 2;
}

function triple(x) {
    return x * 3;
}

function binary(x) {
    return x.toString(2);
}

const output = arr.map(binary);

console.log(output);

//another way
const output2 = arr.map((x) => x.toString(2));
console.log(output2);

// filter
const arr = [5, 1, 3, 2, 6];

function isOdd(x) {
    return x % 2;
}
function greaterThan4(x) {
    return x > 4;
}

const output = arr.filter(greaterThan4);

console.log(output);


//reduce
const arr = [5, 1, 3, 2, 6];
// normal way
function findSum(arr) {
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(findSum(arr));*/

/*reduce method - reduce method takes two arguments
1st is a function to do the operation and 2nd is a value to be initiated for acc (accumaltor)
The function takes two parameters 1st - acc(accumalor) and 2nd - curr (current value in arr)

const output = arr.reduce(function(acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);

console.log(output);

const arr = [5, 1, 3, 2, 6];
// normal way
function findMax(arr) {
    let maxm = 0;
    for(let i=0; i<arr.length; i++) {
        if (arr[i] > maxm) {
            maxm = arr[i];
        }
    }
    return maxm;
}

console.log(findMax(arr));

// reduce method
const output = arr.reduce(function (max, curr) {
    if (curr > max) {
        max = curr;
    }
    return max;
}, 0);

console.log(output);


const users = [
    { firstName: "aman", lastName: "kumar", age: 24 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "rashmika", lastName: "mandhana", age: 24 },
];

const output = users.map(x => x.firstName + " " + x.lastName);

console.log(output);

// { 24: 2, 75: 1, 50: 1 }
const output2 = users.reduce(function (acc, curr) {
    if (acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }
    else {
        acc[curr.age] = 1;
    }

    return acc;
}, {});

console.log(output2);


// print firstName whose age is < 30;
// we can chain map filter and reduce method.

const output3 = users.filter((x) => x.age < 30).map(x => x.firstName);
console.log(output3);

const output4 = users.filter((x) => x.age < 30)
.reduce(function(acc, curr) {
  acc.push(curr.firstName);
  return acc;
},[])
console.log(output4);



// callback hell

console.log("Namaste");

setTimeout(function () {
    console.log("Javascript");
}, 5000);


console.log("season 2");*/

/*
//Promises in JavaScript

// handling Inversion of control issue of callback.

const cart = [""];

// passing function in another function. This technique
// is used using callback which lead to two major issues
// 1 - Callback Hell and 2 - Inversion of Control

createOrder(cart, function (orderId) {
    proceedToPayment(orderId);
});// orderId


// Using Promisen(it handles above issues and also a good
// practice in JS)

const promise = createOrder(cart);
// {data: undefined} - here data is passed when the execution of
// createOrder() is done.

promise.then(function (orderId) {
    proceedToPayment(orderId);
});
// here we are attaching function with a promise object.
// as soon as promise object filled with data it automatically
// calls the function inside it for proceedToPayment()



const GITHUB_API = "https://api.github.com/users/Aman-137";

const user = fetch(GITHUB_API);

console.log(user);

// attaching callback to promise

user.then(function (data) {
    console.log(data);
});

// handling Callback Hell issue of callback. code grows horizontally not
// vertically (i.e; Pyramid of Doom)

createOrder(cart, function (orderId) {
    proceedToPayment(orderId, function (paymentInfo) {
        showOrderSummary(paymentInfo, function () {
            updateWalletBalance();
        });
    });
});*/

// How to handle this (use promise chaining)

/*const promise = createOrder(cart);
promise.then(function () {

})

// the above method is same as the below one.
// here we are using chaining method

createOrder(cart).then(function (orderId) {
    return proceedToPayment(orderId);
})
    .then(function (paymentInfo) {
        return showOrderSummary(paymentInfo);
    })
    .then(function () {
        return updateWalletBalance();
    });

// OR, we can also use arrow function here and remove the return keyword
// and make it a one line of code that is more lean. But it is also good.

createOrder(cart)
    .then((orderId) => proceedToPayment(orderId))
    .then((paymentInfo) => showOrderSummary(paymentInfo))
    .then(()  => updateWalletBalance()); */

// Creating promise.
/*
const cart = ["shoes", "pants", "kurta"];

createOrder(cart) // orderId
    .then(function (orderId) { // if the promise that is created below
        console.log(orderId); // is resolved than this callback will be executed.
        return orderId;
    })
    
    .then(function(orderId){
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
        return paymentInfo;
    })
    .then(function (paymentInfo) {
        return showOrderSummary(paymentInfo);
    })
    .then(function (orderSummary) {
        console.log(orderSummary);
        return orderSummary;
    })
    .then(function (orderSummary) {
        return updateWallet(orderSummary);
    })
    .then(function (walletBalance) {
        console.log(walletBalance);
        return walletBalance
    })
    .catch(function (err) { /// and if the promise got rejected than this callback will be executed.
        console.log(err.message);
    })
    .then(function () {
        console.log("No matter what happens, I will definitely be called.")
    })

    //
    function createOrder(cart) {
        // This is the way of creating a promise
        const pr = new Promise(function (resolve, reject) {
            // createOrder validateOrder orderId
            if (!validateOrder(cart)) {
                const err = new Error("Cart is not valid.");
                reject(err);
            }
            // logic for createOrder
            const orderId = "12345";
            if (orderId) {
                setTimeout(function () {
                    resolve(orderId);
                }, 5000)

            }
        });

        return pr;
    }

    function proceedToPayment(orderId) {
        ///
        return new Promise(function(resolve, reject) {
            resolve("Payment Successful");
        });
    }

    function showOrderSummary(paymentInfo) {

        return new Promise(function(resolve, reject) {
            resolve("This is your Order Summary.");
        });
    }

    function updateWallet(orderSummary) {

        return new Promise(function(resolve, reject) {
            resolve("Your updated wallet Balance is ...");
        });
    }

    function validateOrder(cart) {
        return true;
    }*/

/*
// Call, Apply & bind method.

// call() method.
let name = {
    firstname: "Aman",
    lastname: "Kumar"
}

let printFullName =  function (hometown, state) {
    console.log(this.firstname + " " + this.lastname + " from " + hometown + ", " + state);
}

printFullName.call(name, "Gopalganj", "Bihar");

let name2 = {
    firstname: "M S",
    lastname: "Dhoni"
}

printFullName.call(name2, "Ranchi", "Jharkhand");// here every argument is passed individually in call method

// apply() method. - the only difference is we use an array to pass the argument of the function.
printFullName.apply(name2, ["Ranchi", "Jharkhand"]);// here name2 is the refference of this keyword and array is the second argument


// bind() method
let printMyName = printFullName.bind(name2, "Ranchi", "Jharkhand");
console.log(printMyName);
printMyName();*/

/*
// bind

let name = {
    firstname: "Aman",
    lastname: "Kumar"
}

let printName = function (hometown, state, country) {
    console.log(this.firstname + " " + this.lastname + ", " + hometown + ", " + state + ", " + country);
}

let printMyName = printName.bind(name, "Gopalganj", "Bihar");
printMyName("India");

// Polyfill for bind() method
// creating our own bind method

// Accepting any number of arguments passed to myBind
Function.prototype.mybind = function(name, ...args) {
    let obj = this
        //params = args.slice(1);
    // Acceptin any number of arguments passed to printMyName2.
    return function (...args2) {
        obj.apply(name, [...args, ...args2]);

    }
}

let printMyName2 = printName.mybind(name, "Gopalganj", "Bihar");
printMyName2("India");*/


/*
// Currying in javascript - (using two methods)
// 1 - using (bind method)

let multiply = function (x, y) {
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

// 2 - using Closures

let multiply2 = function (x) {
    return function (y) {
        console.log(x * y);
    }
}

let multiplyByTwo2 = multiply2(2);
multiplyByTwo2(3);

let multiplyByThree2 = multiply2(3);
multiplyByThree2(3);*/



// Debouncing in JavaScript.

let counter = 0;
const getData = () => {
    // calls api and get data.
    console.log("Fetching data...", counter++);
}

const debounce = function (fn, d) {
    let timer;
    return function() {
        let context = this,
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(()  => {
            getData.apply(context, arguments);
        }, d);
    }
}

const betterFunction = debounce(getData, 300);