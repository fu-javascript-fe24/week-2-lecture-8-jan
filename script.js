
// helloWorld();

// Function declaration hoistas
function helloWorld() {
    console.log('Hello World!');
}

// Function expressions är endast tillgängliga efter initiering
const helloWorldAgain = function() {
    console.log('Hello World from function expression');
}

const helloWorldArrowFunction = () => {
    console.log('Hello World from arrow function');
}

// helloWorldAgain();
// helloWorldArrowFunction();

let myName = 'Jesper'; //Bor på ...891

// Om jag inte skickar in argument nummer 2 så kommer x vara lika med Stefan
sayHello(myName, 'Carl');

function sayHello(y, x = 'Stefan') { // börjar på ...642
    console.log(`Hello ${y}`);
    console.log(x);
}

// let number = 10;
// number = multiply(number);
// console.log(number);

for(let i = 0; i < 5; i++) {
    // let sum = multiply(i);
    // console.log(sum);

    console.log(multiply(i));
}

function multiply(y) {
    y = y * 10;
    return y;
}






























//Exempel på block vs local scope (let vs var)
// myFunction();

// function myFunction() {
//     let number = 5;

//     if(number === 5) {
           //Local Scope - dåligt
//         var isFive = true;
           //Block scope - bra skit
//         let isNotSix = true;
//     }

//     console.log(isFive);
//     console.log(isNotSix);
// }