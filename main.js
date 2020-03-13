var main=function(){
    for(var x=0;x<5;x++){
        console.log(x);
    }

console.log("x can be accessed outside the block scope x value is " + x);
console.log("x is hoisted to the function scope");// we get single ans, we can declare vaiables where we want
}
main();

// anonymus function.
//it can act as variable name and function name
