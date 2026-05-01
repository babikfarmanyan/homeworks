// ==== 1 ====

// function sum(num1, num2, num3) {
//     return num1 + num2 + num3;
// }

// const arr = [10, 20, 30];
// const res = sum.apply(null, arr);

// console.log(res);

// ==== 2 ====

// const student1 = { name: "Anna", score: 80 };
// const student2 = { name: "Mark", score: 95 };

// function printResult() {
//     console.log(this.name + " scored " + this.score);
// }

// const res1 = printResult.call(student1);
// const res2 = printResult.apply(student2);

// ==== 3 ====


// const user = {
//   name: "Alex",
//   greet() {
//     return "Hello " + this.name;
//   }
// };

// const admin = {
//   name: "Admin"

// };

// const result = user.greet.call(admin);
// console.log(result);

// ==== 4 ====

// const numbers = [5, 12, 8, 20, 3];

// const res = Math.max.apply(null, numbers);
// console.log(res);

// ==== 5 ====

// const obj1 = {
//  value: 10,
//  getValue() {
//    return this.value;
//  }
// };

// const obj2 = {
//  value: 50
// };

// const res = obj1.getValue.call(obj2);
// console.log(res);

// ==== 6 ====

// function total(a, b, c) {
//  return a + b + c;
// }

// const args = [7, 8, 9];
// const res = total.apply(null, args);
// console.log(res);

// ==== 7 ====

// function show() {
//     return this.name;
// }
// const obj = { name: "Test" };
// const bound = show.bind(obj);
// // ❗ What will this return? : Function where obj binded to function as this
// console.log(bound.call({ name: "Wrong" }));

// ==== 8 ====

// function displayPoints() {
//   return `${this.name} has ${this.points} points`;
// }

// const p1 = { name: "Anna", points: 10 };
// const p2 = { name: "Mark", points: 25 };

// console.log(displayPoints.call(p1));
// console.log(displayPoints.call(p2));

// ==== 9 ====

// function sum(a, b, c) {
//   return a + b + c;
// }

// function execute(fn, arr) {
//   return fn.apply(null, arr);
// }

// function execute(fn, arr) {
//   return fn(...arr);
// }

// execute(sum, [2, 4, 6]);

// ==== 11 ====

// const obj = {
//  value: 100,
//  get() {
//    const inner = () => this.value ;
//    return inner();
//  }
// };

// console.log(obj.get());

// ==== 12 ====

// const obj = {
//   value: 1,
//   add(x) {
//     this.value += x;
//     return this;
//   }
// };
// console.log(obj.add(5).add(10).value);

// ==== 13 ====

// class Employee {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// class Account {
//     _password = "default_password";

//     get password() {
//         return "********";
//     }

//     set password(pass) {
//         if (pass.length > 6) {
//             this._password = pass;
//         }else { console.log("Password too short"); }
//     }
// }

// const myAcc = new Account();

// myAcc.password = "123";
// console.log(myAcc.password);

// myAcc.password = "new_secure_pass"; 
// console.log(myAcc.password);


// class Temperature {
//     _celsius = 0;

//     constructor(celsius = 0) {
//         this._celsius = celsius;
//     }

//     set celsius(temp) {
//         this._celsius = temp;
//     }

//     get fahrenheit() {
//         return this._celsius * 1.8 + 32;
//     }
// }

// class Counter {
//     _count = 0;

//     get count() {
//         return this._count;
//     }

//     increment() {
//         this._count += 1;
//     }
// }


// class Product {
//     _price = 0;

//     set price(p) {
//         if (p < 0) {
//             console.log("Գինը չի կարող բացասական լինել");
//             return;
//         }
//         this._price = p;
//     }

//     get price() {
//         return this._price - ((this._price / 100) * 10);
//     }
// }


// class BankAccount {
//     _balance = 0;

//     constructor(defBalance = 0) {
//         if (defBalance < 0) {
//             throw new Error("Negative balance");
//         }
//         this._balance = defBalance;
//     }

//     set balance(money) {
//         if (money < 0) {
//             throw new Error("Negative deposit");
//         }
//         this._balance += money;
//     }

//     get balance() {
//         return this._balance;
//     }
// }


// class Rectangle {
//     _height = 1;
//     _width = 1;

//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     set height(h) {
//         if (h <= 0) {
//             throw new Error("Negative or 0 height");
//         }
//         this._height = h;
//     }

//     set width(w) {
//         if (w <= 0) {
//             throw new Error("Negative or 0 width");
//         }
//         this._width = w;
//     }

//     get area() {
//         return this._height * this._width;
//     }
// }

// class Email {
//     _email = " ";
//     constructor(adress) {
//         this.email = adress;
//     }

//     get email() {
//         return this._email;
//     }

//     set email(adress) {
//         if (adress.includes("@")) {
//             this._email = adress;
//         }else { throw new Error("Invalid email"); }
//     }
// }


// class Cart {
//     _total = 0;

//     set add(price) {
//         if (price < 0) {
//             throw new Error("Negative price");
//         }
//         this._total += price;
//     }

//     get total() {
//         return this._total;
//     }
// }

// class Car {
//     _speed = 0;

//     get speed() {
//         return this._speed;
//     }

//     set speed(value) {
//         if (value > 200) {
//             console.log("Too fast");
//         } else if (value < 0) {
//             console.log("Speed cannot be negative");
//         } else {
//             this._speed = value;
//         }
//     }
// }


// Map, Zip, Filter

// 1

// let arr = [1, 2, 3];
// const res = arr.map(num => num * 2);
// console.log(res);

// 2

// const names = ["anna", "john"] ;
// const result = names.map(name => name.toUpperCase());
// console.log(result);

const arrObj = [{name: "A", age: 10}, {name: "B", age: 15}, {name: "Caaasddf", age: 34}, {name: "Ddsdsd", age: 2}, {name: "E", age: 40}, {name: "F", age: 21}];

// 3, 4

// const ages = arrObj.map(obj => obj.age);
// console.log(ages);
// const evenNums = ages.filter(num => num % 2 === 0);
// console.log(evenNums);

// 5

// const filteredUsers = arrObj.filter(obj => obj.age >= 18);
// console.log(filteredUsers);

// 6

// const filteredWords = arrObj.filter(obj => obj.name.length > 5);
// console.log(filteredWords);

// 7

// const adultNames = arrObj.filter(user => user.age >= 18).map(user => user.name);
// console.log(adultNames);


// 8

// const square = arrObj.filter(obj => obj.age % 2 === 0).map(obj => obj.age ** 2);

// 10

const arr = [{name: "Anna", age: 17}, {name: "John", age: 20}];
arr.filter(obj => obj.age >= 18).forEach(obj => console.log(`${obj.name} is ${obj.age} years old`));
