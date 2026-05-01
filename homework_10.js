
// 1) === Inheritance with Classes / Function Constructors and Prototypes ===


// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     eat() {
//         return `${this.name} is eating...`;
//     }

//     sleep() {
//         return `${this.name} is sleeping...`;
//     }

//     getInfo() {
//         return `Name: ${this.name} Age: ${this.age}`;
//     }
// }

// class Dog extends Animal {
//     constructor(name, age, breed) {
//         super(name, age);
//         this.breed = breed;
//     }

//     makeSound() {
//         return "Woof!";
//     }

//     getInfo() {
//         return `Name: ${this.name} Age: ${this.age} Breed: ${this.breed}`;
//     }
// }


// function Animal(name, age) {
//     this.name = name;
//     this.age = age;
// }


// Animal.prototype.eat = function() {
//     return `${this.name} is eating...`;
// }

// Animal.prototype.sleep = function() {
//     return `${this.name} is sleeping...`;
// }

// Animal.prototype.getInfo = function() {
//     return `Name: ${this.name} Age: ${this.age}`;
// }

// function Dog(name, age, breed) {
//     Animal.call(this, name, age);
//     this.breed = breed;
// }

// Object.setPrototypeOf(Dog.prototype, Animal.prototype);

// Dog.prototype.makeSound = function() {
//     return "Woof!";
// }

// Dog.prototype.getInfo = function() {
//     return `Name: ${this.name} Age: ${this.age} Breed: ${this.breed}`;
// }

// Dog.prototype.constructor = Dog;
// console.log(Dog.prototype);


// ==============================================================


// === 2) Three Classes and Changing Inheritance ===

// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     eat() {
//         return `${this.name} is eating...`;
//     }

//     sleep() {
//         return `${this.name} is sleeping...`;
//     }
// }

// class Dog extends Animal {
//     constructor(name, age, breed) {
//         super(name, age);
//         this.breed = breed;
//     }

//     makeSound() {
//         return 'Woof!';
//     }
// }

// class Puppy extends Animal {
//     constructor(name, age, owner) {
//         super(name, age);
//         this.owner = owner;
//     }

//     play() {
//         return `${this.name} is playing...`;
//     }
// }

// class Puppy extends Dog {
//     constructor(name, age, breed , owner) {
//         super(name, age, breed);
//         this.owner = owner;
//     }

//     play() {
//         return `${this.name} is playing...`;
//     }
// }

// const puppy1 = new Puppy("Rex", 1, "labrador", "Bob");
// console.log(puppy1 instanceof Animal);
// console.log(puppy1 instanceof Dog);
// console.log(puppy1 instanceof Puppy);


// ==============================================================


// === 3) Two Classes with Inheritance ===

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `I'm ${this.name} and I am ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, university) {
        super(name, age);
        this.university = university;
    }

    study() {
        return `${this.name} is studying at ${this.university}.`;
    }
}