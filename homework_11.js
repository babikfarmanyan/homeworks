// Task 1. Implement custom instanceof



// function myInstanceOf(obj, Constructor) {
//     if (!Constructor || !Constructor.prototype) {
//         throw new TypeError("Error");
//     }

//     if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) { return false; }

//     let prType = Object.getPrototypeOf(obj);

//     while(prType !== null) {
//         if (prType === Constructor.prototype) { return true; }
//         prType = Object.getPrototypeOf(prType);
//     }

//     return false;
// }



// function Animal() {}
// function Dog() {}

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// const dog = new Dog();

// console.log(myInstanceOf(dog, Dog)); // true
// console.log(myInstanceOf(dog, Animal)); // true
// console.log(myInstanceOf(dog, Array)); // false

// console.log(myInstanceOf(null, Object)); // false
// console.log(myInstanceOf(123, Number)); // false
// console.log(myInstanceOf("hello", String)); // false



// Task 2. Implement custom new

// function User(name) {
//     this.name = name;
// }

// function Car(model) {
//  this.model = model;
//  return { custom: "returned object" };
// }

// function myNew(Constructor, ...args) {
//     const resObj = Object.create(Constructor.prototype);

//     const result = Constructor.apply(resObj, args);

//     if (result !== null && (typeof result === "object" || typeof result === "function")) {
//         return result;
//     }
    
//     return resObj;
// }

// const user = myNew(User, "Alex");
// console.log(user.name); // Alex
// console.log(Object.getPrototypeOf(user) === User.prototype); // true
// console.log(user.constructor === User); // true

// const car = myNew(Car, "BMW");
// console.log(car.custom); // returned object

// function Empty() {}

// const obj = myNew(Empty);
// console.log(Object.getPrototypeOf(obj) === Empty.prototype); // true

// function Test() {
//  return 123;
// }

// const test = myNew(Test);
// console.log(Object.getPrototypeOf(test) === Test.prototype); // true


// Task 3. Check whether a property is own or inherited

// function checkProperty(obj, key) {
//     if (!(key in obj)) { return "not found"; }

//     if (Object.hasOwn(obj, key)) { return "own"; }

//     return "inherited";
// }

// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.name = "Rex";

// console.log(checkProperty(dog, "name")); // own
// console.log(checkProperty(dog, "eats")); // inherited
// console.log(checkProperty(dog, "age")); // not found

// const obj = Object.create(null);
// obj.value = 10;

// console.log(checkProperty(obj, "value")); // own
// console.log(checkProperty(obj, "toString")); // not found
// console.log(checkProperty({}, "toString")); // inherited


// Task 4. Find all prototype methods of an object

// function getPrototypeMethods(obj) {
//     const result = [];
//     const proObject = Object.getPrototypeOf(obj);

//     if (proObject === null) {return [];}

//     const propNames = Object.getOwnPropertyNames(proObject);


//     for (let name of propNames) {
//         if (name === "constructor") { continue; }
//         if (typeof proObject[name] === "function") {
//             result.push(name);
//         }
//     }

//     return result;
// }

// function User(name) {
//  this.name = name;
// }

// User.prototype.sayHi = function () {
//  return `Hi, ${this.name}`;
// };

// User.prototype.getName = function () {
//  return this.name;
// };

// const user = new User("Alex");

// // console.log(getPrototypeMethods(user)); // ["sayHi", "getName"] order may vary
// console.log(getPrototypeMethods({ a: 1 })); // []
// console.log(getPrototypeMethods([]));

// const base = {
//  x: 10,
//  print() {
//    return "hello";
//  }
// };

// const obj = Object.create(base);

// console.log(getPrototypeMethods(obj)); // ["print"]
// console.log(getPrototypeMethods(Object.create(null))); // []


// Task 5. Add a custom method to Array.prototype

Array.prototype.mySum = function() {
    let sum = 0;
    
    for (let num of this) {
        if (typeof num !== "number" || isNaN(num)) {
            throw new Error("Error");
        }
        
        sum += num;
    }

    return sum;
};

console.log([1, 2, 3].mySum()); // 6
console.log([10, -5, 4].mySum()); // 9
console.log([].mySum()); // 0

console.log([1, "2", 3].mySum()); // Error
console.log([1, NaN].mySum()); // Error
console.log([true, 2].mySum()); // Error

