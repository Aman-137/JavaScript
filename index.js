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


function z() {
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
z();