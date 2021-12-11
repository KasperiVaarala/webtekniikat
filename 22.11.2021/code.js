//Print next array with foreach using either anonymous
// method or lambda

let numbers = ["one", "two", "three", "four", "five"]

function printNumbers(numbers){
    console.log(numbers)
}

numbers.forEach(printNumbers)

//2 Use Map to get 80% off all the prices in the array.
//(Make a test array with e.g. 5 different prices.)

let prices = [10, 8, 6, 4, 12]

let newPrices = prices.map(item => item * 0.8);
console.log(newPrices)

//3 Use Map-function to replace all
// the John names with Matti in an array of names.

let names = ["Tommi", "Hilda", "John", "Saku", "Rape"]
names = names.map(name => {
    if(name === "John"){
        return "Matt"
    }
    return name;
})
console.log(names)

//4 Use filter to get
// only positive values from number array

let nums = [1, 2, 3, -1, -2, -3]
let newNums=  nums.filter(item => item>=0);
console.log(newNums)

//5
names = ["Taavipekka", "Sara", "Tommi"]
names = names.filter(name => name.length>8 && name[0]=== 'T')
console.log(names)

//6

if(names.every(sana => sana.length>0)){
    let pituudet = names.map(sana =>sana.length);

    let summa = pituudet.reduce((previous, current) =>previous+current);
    console.log(summa)
}

