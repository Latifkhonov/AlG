//Recursion
function CountDown(num) {
    if(num <= 0){
        console.log("All done!")
        return;
    }
    console.log(num)
    num--;
    CountDown(num);
    
}

//Iterative approach
for(var i = 5;i>0;i--){
    console.log(i)
}
// console.log("All done")

function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRange(num-1);
}
// console.log(sumRange(4))


//Factorial iteratively
function faxtorial(num) {
    let total = 1;
    for(let i = num; i > 0;i--){
        total *= i
    }
    return total;
}
// console.log(faxtorial(4))


//Factorial recursively

function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num - 1);
}
// console.log(factorial(3))



//Helper method recursion
function collectOdd(arr) {
    let result = [];
    function helper(helperInput) {
        if(helperInput.length === 0){
            return;
        }
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        //now call helper method with everything in an array excluding first element
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result;
}

// console.log(collectOdd([1,2,3,4,5,6,7,8,9]))


//Pure recursion

function collectOddValues(arr) {
    let newArr = [];
    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0 ) {
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}


//Pure recursion tips
//For arrays, use methods like slice,the spread operator, and concat
//that make copies of arrays so you do not mutate them.

function power(base,exponent) {
    if(exponent === 0) return 1;
    exponent--;
    return base * power(base,exponent)
}

//console.log(power(10,3))

function Factorial(num) {
    if(num === 0) return 1;
    if(num === 1) return 1;
    return num * Factorial(num - 1);
}

//console.log(Factorial(10))

function productOfArray(arr) {
    if(arr.length === 0){
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1))
}
//productOfArray[1,2,3]

function recursiveRange(num) {
    let result = 0;
    if(num === 1) return 1;
    return num + recursiveRange(num - 1);
}
//console.log(recursiveRange(3))

function fib(num) {
    if(num <=    2) return 1;
    return fib(num - 1) + fib(num - 2);
}

console.log(fib(4))
