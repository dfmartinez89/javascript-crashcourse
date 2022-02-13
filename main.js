//Primitive Data types
const who = 'John'; //string
let age = 32; //number
const rating = 4.5; //number
const bool = false; //boolean
const x = null; //null
const y = undefined;

console.log(typeof x);

//Concatenation
console.log('My name is ' + who + ' and I am ' + age + ' years old');
//Template String
const hello = `My name is ${who} and I am ${age} years old`;
console.log(hello);

//Working with Strings
const s = 'Hello World!';

console.log(s.substring(0, 5).toUpperCase());

//Arrays
const fruits = ['apples', 'oranges', '5']; //allows multiple data types inside the array
fruits[3] = 'grapes';
fruits.push('mangos'); //adds a field at the end of the array
fruits.unshift('avocado'); //adds a field at the beginnig of the array
fruits.pop(); //removes last field on the array

console.log(Array.isArray(fruits)); //checks if parameter is an array
console.log(fruits.indexOf('oranges'));
console.log(fruits);

//Objects
const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 30,
    hobbies: ['music', 'sports', 'movies'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.hobbies[2]);
console.log(person.address.city);

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },

    {
        id: 2,
        text: 'Do homework',
        isCompleted: true
    },

    {
        id: 1,
        text: 'Excersise',
        isCompleted: false
    }
]

const todoJSON = JSON.stringify(todos); //parse JSON from array

console.log(todoJSON);

//For Loops
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i]);
}

for (const todo of todos) {   //for of
    console.log(todo.text);
}

//High order array methods