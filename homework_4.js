// =========== task 1 ===========

// let person1 = {
//     "name": "John",
//     "age": 13
// };

// let person2 = {
//     "name": "Albert",
//     "age": 40
// };

// let mergedPerson = Object.assign({}, person1, person2);

// console.log(mergedPerson);


// =========== task 2 ===========

// let student = {
//     "name": "Tom",
//     "surname": "Smith",
//     "age": 17
// };

// Object.freeze(student);

// student.age = 20;

// console.log(student);


// =========== task 3 ===========

// let hasPhoneNumber = true;

// let person = {
//     "name": "Tom",
//     "surname": "Smith",
//     "age": 30
// };

// if (hasPhoneNumber) {
//     person.phoneNumber = "+374-XXXXXX";
// }

// console.log(person);


// =========== task 4 ===========

// let keysArr = ["id", "name", "surname", "phone"];

// let object = {};

// for (let key of keysArr) { object[key] = key + 1; }

// console.log(object);


// =========== task 5 ===========

// const obj = {
//     1: "value_1",
//     10: "value_2",
//     45: "value_3",
//     3: "value_4"
// }

// const keysArr = Object.keys(obj);

// for (let key of keysArr) { console.log(obj[key]); }


// =========== task 6 ===========

// let obj = {
//     "age_1": 23,
//     "age_2": 10,
//     "age_3": 45,
//     "age_4": 32,
//     "age_5": 13,
//     "age_6": 18,
// };

// obj = Object.fromEntries(Object.entries(obj).filter(subArr => subArr[1] > 18));
// console.log(obj);


// =========== task 7 ===========

function isEqual(obj1, obj2) {
    let strObj1 = JSON.stringify(obj1, Object.keys(obj1).sort());
    let strObj2 = JSON.stringify(obj2, Object.keys(obj2).sort());

    console.log(strObj1, strObj2);
    

    return strObj1 === strObj2;
}

const obj1 = { "name": "Bob", "age": 10 };
const obj2 = { "age": 21, "name": "Tom" };

console.log(isEqual(obj1, obj2));
