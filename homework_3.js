
const customArrayObject = Object.create(null);

Object.defineProperties(customArrayObject, {
    customForEach: {
        value: function (callback) {
            for (let i = 0; i < this.length; ++i) {
                callback(this[i], i, this);
            }
        },
        enumerable: false,
        writable: true,
        configurable: true
    },
    customMap: {
        value: function(callback) {
            let result = [];

            for (let i = 0; i < this.length; ++i) {
                result.push(callback(this[i], i, this));
            }

            return result;
        },
        enumerable: false,
        writable: true,
        configurable: true
    },
    customFilter: {
        value: function(callback) {
            let result = [];

            for (let i = 0; i < this.length; ++i) {
                if (callback(this[i], i, this)) { result.push(this[i]); }
            }

            return result;
        },
        enumerable: false,
        writable: true,
        configurable: true
    },
    customSome: {
        value: function (callback) {
            for (let i = 0; i < this.length; ++i) {
                if (callback(this[i], i, this)) return true;
            }

            return false;
        },
        enumerable: false,
        writable: true,
        configurable: true
    },
    customEvery: {
    value: function (callback) {
        for (let i = 0; i < this.length; ++i) {
            if (!callback(this[i], i, this)) return false;
        }

        return true;
    },
        enumerable: false,
        writable: true,
        configurable: true
    },
    customIndexOf: {
        value: function(elem) {
            for (let i = 0; i < this.length; ++i) {
                if (this[i] === elem) { return i; }
            }

            return -1;
        },
        enumerable: false,
        writable: true,
        configurable: true
    }
})



let arr = [1, 3, 5, 7];

Object.setPrototypeOf(arr, customArrayObject);


// =========================== TESTS ===========================

arr.customForEach(elem => console.log(elem * 2));

console.log(arr.customMap((elem, index) => elem * index));

console.log(arr.customFilter(elem => elem > 5));

console.log(arr.customSome(elem => elem % 3 == 0));

console.log(arr.customEvery(elem => elem > 1));

console.log(arr.customIndexOf(7));
