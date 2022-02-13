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
todos.forEach(function (todo) {
    console.log(todo.text);
});

//same as above using arrows
todos.forEach((todo) => console.log(todo.text));

const todoText = todos.map(function (todo) {
    return todo.text;
});

console.log(todoText);

const todoCompleted = todos.filter(function (todo) {
    return todo.isCompleted === true;
}).map(function (todo) { //concatenation of arrays methods
    return todo.text;
});

console.log(todoCompleted);

//Conditional logic
const z = 9;
const color = z > 10 ? 'red' : 'blue';
console.log(color);

switch (color) {
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;

    default:
        console.log('Color is neither red or blue');
        break;
}

//OOP
function Employee(firstN, lastN, dob) {
    this.firstN = firstN;
    this.lastN = lastN;
    this.dob = new Date(dob);
}

Employee.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
}

Employee.prototype.getFullname = function () {
    return `${this.firstN} ${this.lastN}`
}

//Class IES6
class Personal {
    constructor(firstN, lastN, dob) {
        this.firstN = firstN;
        this.lastN = lastN;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();

    }
    getFullname() {
        return `${this.firstN} ${this.lastN}`

    }

}

//instantiate the object
const person1 = new Employee('Jane', 'Doe', '3/6/1970');
const person2 = new Employee('Mary', 'Smith', '11/26/1978');
const person3 = new Personal('Louis', 'Sanders', '3/6/1989');
const person4 = new Personal('Bob', 'Dylan', '11/26/1995');
console.log(person1.getFullname(), person1.getBirthYear(), person2.getFullname(), person2.getBirthYear(), person3.getFullname(), person3.getBirthYear(), person4.getFullname(), person4.getBirthYear());

