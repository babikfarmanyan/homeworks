// =========== 1) isEven(n) ===========

// function isEven(n) {
//     return n % 2 === 0;
// }

// console.log(isEven(2));


// =========== 2) sumUpTo(n) ===========

// v1 recursion

// function sumUpTo(n) {
//     if (n === 1) { return 1; }
//     return n + sumUpTo(n - 1)
// }

// v2

// function sumUpTo(n) {
//     let sum = 0;

//     for (let  i = 1; i <= n; i++) { sum += i; }
    
//     return sum;
// }

// console.log(sumUpTo(5));


// =========== 3) minInArray(arr) ===========

// function minInArray(arr) {
//     let min = arr[0];

//     for (let num of arr) {
//         if (num < min) { min = num; }
//     }

//     return min;
// }

// console.log(minInArray([-2, -10, 0, -40]));


// =========== 4) countDigits(n) ===========

function countDigits(n) {
    return n >= 0 ? String(n).length : String(-n).length;
}

console.log(countDigits(-1212));


// =========== 5) sumArray(arr) ===========

// function sumArray(arr) {
//     let sum = 0;

//     for (let num of arr) { sum += num; }

//     return sum;
// }

// console.log(sumArray([1, 2, 3]));


// =========== 6) average(arr) ===========

// function average(arr) {
//     return sumArray(arr) / arr.length;
// }

// console.log(average([5]));


// =========== 7) countChar(str, char) ===========

// function countChar(str, char) {
//     let count = 0;

//     for (let elem of str) {
//         if (elem === char) { count++; }
//     }

//     return count;
// }

// console.log(countChar("hello", "l"));


// =========== 8) removeFirstChar(str) ===========

// v1

// function removeFirstChar(str) {
//     let resStr = "";

//     for (let i = 1; i < str.length; i++) {
//         resStr += str[i];
//     }

//     return resStr;
// }

// console.log(removeFirstChar(""));

// v2

// function removeFirstChar(str) {
//     return str.slice(1);
// }

// console.log(removeFirstChar(""));


// =========== 8) removeFirstChar(str) ===========

// v1

// function removeFirstChar(str) {
//     let resStr = "";

//     for (let i = 1; i < str.length; i++) { resStr += str[i]; }

//     return resStr;
// }

// console.log(removeFirstChar("hello"));

// v2

// function removeFirstChar(str) {
//     return str.slice(1);
// }

// console.log(removeFirstChar(""));


// =========== 9) power(base, exp) ===========

// v1

// function power(base, exp) {
//     return Math.pow(base, exp);
// }

// console.log(power(2, 3));

// v2

// function power(base, exp) {
//     let res = 1;

//     for (let i = 0; i < exp; i++) { res *= base; }

//     return res;
// }

// console.log(power(2, 3));


// =========== 10) contains(arr, value) ===========

// v1

// function contains(arr, value) {
//     return arr.includes(value);
// }

// console.log(contains([1, 2, 3], 6));

// v2

// function contains(arr, value) {
//     for (let elem of arr) {
//         if (elem === value) { return true; }
//     }

//     return false;
// }

// console.log(contains([1, 2, 3], 1));


// =========== 11) repeatString(str, n) ===========

// v1

// function repeatString(str, n) {
//     return str.repeat(n);
// }

// v2

// function repeatString(str, n) {
//     let res = "";

//     for (let i = 0; i < n; i++) { res += str; }

//     return res;
// }

// console.log(repeatString("a", 3));

// v3

// function repeatString(str, n) {
//     if (n === 1) { return str; }
//     return str + repeatString(str, n - 1);
// }

// console.log(repeatString("a", 4));


// =========== 12) firstAndLast(arr) ===========

// function firstAndLast(arr) {
//     return [arr[0], arr[arr.length - 1]];
// }

// console.log(firstAndLast([1, 2, 3]));