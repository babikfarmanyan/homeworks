Function.prototype.myCall = function(thisArg, ...args) {
    thisArg = thisArg || globalThis;
    
    let id = Symbol("id");
    thisArg[id] = this;

    let result = thisArg[id](...args);
    delete thisArg[id];

    return result;
}

Function.prototype.myApply = function(thisArg, args) {
    thisArg = thisArg || globalThis;
    
    let id = Symbol("id");
    thisArg[id] = this;

    let result = thisArg[id](...args);
    delete thisArg[id];

    return result;
}

Function.prototype.myBind = function(thisArg, ...args) {
    thisArg = thisArg || globalThis;

    let funcOrig = this;
    
    return function(...args) {
        return funcOrig.myCall(thisArg, ...args);
    }
}

function showInfo(city, country) {
    if (city === undefined) {
        return `${this.name} lives in ${country}`;
    }else if (country == undefined) {
        return `${this.name} lives in ${city}`;
    }
    return `${this.name} lives in ${city}, ${country}`;
}

const user = { name: "Joe Doe" };
const user1 = { name: "John Wick" };
console.log(showInfo.myCall(user, "New-York", "USA"));
console.log(showInfo.myCall(user1, "Paris", "France"));

console.log(showInfo.myApply(user, ["New-York", "USA"]));

const boundShowInfo = showInfo.myBind(user, "New York");
console.log(boundShowInfo("USA"));
console.log(boundShowInfo("Erevan"));
