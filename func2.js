//to show function
function test()
{
    var num=100;
    console.log(num);
    {
        console.log("Inner block begin");
        
            let num=200;
            console.log("Value of num: "+num);
        
    }
    console.log(num);
}
//console.log(num)
test()
var a=10
console.log(a)
var b=40
console.log(b)
function d(){
    let b=20
    console.log(b) //should print 20
}
a=30
console.log(a)
d()
console.log(b) //should print 40