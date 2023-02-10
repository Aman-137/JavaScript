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

// using the concept of closure or data hiding we can make it more secure.

function attachEventListener() {
    let count = 0;
    document
        .getElementById("clickMe")
        .addEventListener("click", function xyz() {
            console.log("Button Clicked", ++count);
        });
}
attachEventListener();