// 1. function declaration
function add(x, y) {
    return x + y;
}

console.log(add(5,6));

// 2. function expression
const add2 = function (x, y) {
    return x + y;
}

let res = add2(8, 10);
console.log(res);

// 3. arrow expression.
const add3 = (x,y) => {
    return x + y;
}
console.log(add3(2,3));