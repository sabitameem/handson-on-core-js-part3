// Create a new set
let mySet = new Set();

// adding values to the set
mySet.add(2);
mySet.add('hello');
mySet.add({ name: 'Sabita' });
mySet.add(2);


console.log(mySet);


// add(value)
mySet.add(1);
// console.log(mySet);

// delete(value)
mySet.delete(1);
// console.log(mySet);

// has(value)
// console.log(mySet.has('hello'));
// console.log(mySet.has(3));

// clear()
mySet.clear();
// console.log(mySet);


let anotherSet = new Set([ 1, 2, 3, 4]);
// console.log(anotherSet);

anotherSet.forEach(value => {
    console.log(value);
})





// Practice
let fruits = new Set();

// Adding Values
fruits.add('apple');
fruits.add('banana');
fruits.add('mango');
fruits.add('banana'); 

console.log(fruits);

// checking size
console.log(fruits.size);

// checking for values
console.log(fruits.has('banana'));
console.log(fruits.has('grape'));


// delete a value
fruits.delete('mango');
console.log(fruits);

// clearing the set
fruits.clear();
console.log(fruits);