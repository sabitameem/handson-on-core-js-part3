// creating a new map
let myMap = new Map();

// adding key-value pairs to the Map
myMap.set('name', 'Sabita');
myMap.set(1, 'one');
myMap.set(true, 'Boolean Value');
myMap.set({id:1}, 'object value');

console.log(myMap);


// set(key, value)
myMap.set('age', 25);
console.log(myMap);

// get(key)
console.log(myMap.get(1));


// has(key)
console.log(myMap.has('name'));
console.log(myMap.has('gender'));

// delete
myMap.delete(1);
console.log(myMap);

// clear()
myMap.clear();
console.log(myMap);

// size 
console.log(myMap.size);

let anotherMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3']
])

console.log(anotherMap.size);


// forEach(callback)
// anotherMap.forEach((value, key) => {
//     console.log(`${key}: ${value}`);
// });


// practice
let userRoles = new Map();

// adding key-value pairs
userRoles.set('admin', {accessLevel: 10});
userRoles.set('editor', {accessLevel: 7});
userRoles.set('viewer', {accessLevel: 1});

console.log(userRoles);

// retrieving values
console.log(userRoles.get('editor'));

// checking for key
console.log(userRoles.has('admin'));
console.log(userRoles.has('guest'));


// deleting a key-value pair
userRoles.delete('viewer');
console.log(userRoles);

// checking the size
console.log(userRoles.size);
// clearing the map
userRoles.clear();
console.log(userRoles);