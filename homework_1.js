// =========== task 1 ===========

// function lengthOfArray(str) {
//     return str.length;
// }

// console.log(lengthOfArray("babik"));


// =========== task 2 ===========

// function toUpperCase(str) {
//     return str.toUpperCase("hello world");
// }

// console.log(toUpperCase("hello world!"));

// =========== task 3 ===========

// const sumOfNums = (a, b) => { return a + b; }

// console.log(sumOfNums(12, 45));


// =========== task 4 ===========

// function reverseString(str) {
//     let result = "";
    
//     for (let elem of str) { result = elem + result; } 

//     return result;
    
// }

// console.log(reverseString("hello world!"));

// =========== task 5 ===========

// function checkSubString(str) {
//     return str.includes("Java") ? true : false;
// }

// console.log(checkSubString("Learning JavaScript"));

// =========== task 6 ===========

// let numList = [3, 6, 9, 12];

// console.log(numList.indexOf(9));

// =========== task 7 ===========

// let expenses = [50, 75, 100];

// const sum = expenses.reduce((sum, elem) => sum + elem, 0);

// console.log(sum);

// =========== task 8 ===========

// function checkSubStringInString(str, subStr) {
//     return str.includes(subStr) ? true : false;
// }

// console.log(checkSubStringInString("hello world!", "world"));

// =========== task 9 -> task 7 ===========

// =========== task 10 ===========

// function evenOrOdd(num) {
//     return num % 2 === 0 ? "Even" : "Odd";
// }

// console.log(evenOrOdd(4));

// =========== task 11 ===========

// function customTypeOf(argument) {
//     let type = typeof argument;

//     if (!argument && type === "object"){
//         return "null";
//     } else if (type === "undefined") { return type; }

//     return argument.constructor.name.toLowerCase();
// }

// console.log(customTypeOf(undefined));

// =========== task 12 ===========

// function isTrue(arg) {
//     return arg ? false : true;
// }

// console.log(isTrue(12));

// =========== task 13 ===========

// function looseObject(val1, val2) {
//     return {
//         "==": val1 == val2,
//         "===": val1 === val2
//     };
// }

// console.log(looseObject(12, "12"));

// =========== task 14 ===========

// function isTrueInt(number) {
//     return (!Number.isNaN(number) && Number.isFinite(number) && Number.isSafeInteger(number)) ? true : false;
// }

// console.log(isTrueInt(100))

// =========== task 15 ===========

// function convertToNum(value) {
//     return Number.isNaN(Number(value)) ? null : Number(value);
// }

// console.log(convertToNum("4654"));

// =========== task 16 ===========

// function convertToBolean(value) {
//     return Boolean(value);
// }

// console.log(convertToBolean(undefined));

// =========== task 17 ===========

// function isObject(arg) {
//     return arg.constructor.name === "Object" ? true : false;
// }

// console.log(isObject({}));

// =========== task 18 ===========

// function isPrimitive(arg) {
//     return typeof arg === "object" && arg !== null ? false : true;
// }

// console.log(isPrimitive(12));

// =========== task 19 ===========

function sumOfNumbers(num1, num2) {
    return (typeof num1 === "number" && typeof num2 === "number" && !Number.isNaN(num1) && !Number.isNaN(num2) && Number.isFinite(num1) && Number.isFinite(num2)) ? num1 + num2 : "Invalid input";
}

console.log(sumOfNumbers(12, "12"));