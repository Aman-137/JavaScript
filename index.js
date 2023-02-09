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


function a() {
    var x = 0, z = 10;
    return function b() {
        console.log(x);
    }
}

var y = a();

y();
