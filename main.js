// alert('Hello World!');
// console.log('Hello World!');

// using 'let' and 'const' to declare variables

// if want to using 'conts', the variable must be initialized when declared,
// for example:
const phone = 'iPhone 14 Pro Max';
console.log(phone); 
// ------------------------------------------------
// wrong example:
// const phone;
// phone = 'iPhone 14 Pro Max';
// console.log(phone);

// Tipe Data Primitif; String, Number, Boolean, Null, Undefined, Simbol
// Tipe Data Referensi: Object, Array, Function

const name = 'John Doe';
const age = 30;
const rating = 4.5;
const isMarried = true;
const x = null;
const y = undefined;
let z;

console.log(typeof isMarried);

// Concatenation
console.log('My name is ' + name + ' and I am ' + age + ' years old.');

// Template String
console.log(`My name is ${name} and I am ${age} years old.`);
// or
const hello = `My name is ${name} and I am ${age} years old.`;
console.log(hello);

// String Properties and Methods
const s = 'Hello World!';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5));
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(''));

const t = 'technology, computers, it, code';
console.log(t.split(','));

// Arrays - variables that hold multiple values
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['Strawberries', 'Apple', 'Jackfruit', 6, true];
console.log(fruits);
console.log(fruits[0]);

// replace the current value at index 3
fruits[3] = 'Orange';
console.log(fruits);

fruits[5] = undefined;
console.log(fruits);

// add value to the beginning of the array
fruits.unshift('Grape');
console.log(fruits);

// add value to the end of the array
fruits.push('Mango');
console.log(fruits);

// remove the last value of the array
fruits.pop();
console.log(fruits);

fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);
// atau 
let fruit = ['Grape', 'Strawberries', 'Apple', 'Jackfruit', 'Orange', true, undefined];
// fruit = fruit.filter(item => item !== true && item !== undefined);
console.log(fruit);

// check if the value is an array
console.log(Array.isArray(fruit));
// data yang terdapat berbagai tipe data pun termasuk array

// get index value
console.log(fruits.indexOf('Apple'));

// Object Literals
const person ={
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['basket ball', 'running', 'swimming'],
    address: {
        street: '50 main st.',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.street);

// destructuring; pull out variables from an object
const { firstName, lastName, address: { city } } = person;
console.log(firstName);

// add properties
person.email = 'john.doe@gmail.com';
console.log(person);

// Array of Objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
];

console.log(todos);
console.log(todos[1].id);
console.log(todos[1].text);
console.log(todos[1].isCompleted);

// convert to JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For Loop
for(let i = 0; i < 10; i++) {
    console.log('For Loop Number: ${i}');
}

// While Loop
let i = 0;
while (i < 10) {
    console.log('While Loop Number: ${i}');
    i++;
}

for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

console.log('------------------------------------');

for(let todo of todos) {
    console.log(todo.text);
}

// mengambil data dari array object
// forEach, map, filter
todos.forEach(function(todo) {
    console.log(todo.text);
});

const text = todos.map(function(todo) {
    return todo.text;
});
console.log(text);

const todoCompleted0 = todos.map(function(todo) {
    return todo.isCompleted === true;
});
console.log(todoCompleted0);
// outputnya tidak sesuai, karena juga menampilkan boolean false
// jadi sebaiknya gunakan function filter

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});
console.log(todoCompleted);

// atau

const todoCompleted1 = todos.filter(todo => todo.isCompleted === true);
console.log(todoCompleted1);

const todoCompleted2 = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
});
console.log(todoCompleted2);

// Conditionals If
// kondisi akan terpenuhi, karena '===' membandingkan nilai dan tipe data
const a = 10;

if(a === 10) {
    console.log('a is 10');
}

// jika seperti berikut:
// const a = 10;

// if(a == 10) {
//     console.log('a is 10');
// }
// kondisi akan terpenuhi, karena '==' hanya membandingkan nilai, bukan tipe data

// jika seperti berikut:
// const a = '10';

// if(a == 10) {
//     console.log('a is 10');
// }
// kondisi akan terpenuhi, karena nilai 'a' sama dengan 10

// Conditional If Else
const b = 20;

if(b === 10) {
    console.log('b is 10');
} else {
    console.log('b is not 10');
}

// Conditional If Else If
const c = 30;

if(c === 10) {
    console.log('c is 10');
} else if(c > 10) {
    console.log('c is greater than 10');
} else {
    console.log('c is less than 10');
}

// Logical Operators
// AND &&
const d = 10;
const e = 20;

if(d > 5 && e > 10) {
    console.log('d is more than 5 and e is more than 10');
}

// OR ||
const f = 10;
const g = 20;

if(f > 5 || g > 10) {
    console.log('f is more than 5 or g is more than 10');
}

// Ternary Operator
const h = 10;
const color = h > 10 ? 'red' : 'blue'; //? is then, : is else
console.log(color);

// Switch
const j = 10;
// const color2 = j > 10 ? 'red' : 'blue';
const color2 = 'green';

switch(color2) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}

// Function
// add
function addNums(num1, num2) {
    console.log(num1 + num2);
}
addNums(5, 4);

// add with return
function addNums2(num1, num2) {
    return num1 + num2;
}
console.log(addNums2(5, 4)); 

// const
// arrow function with return
const addNums3 = (num1, num2) => {
    return num1 + num2;
}
console.log(addNums3(5, 4));

// arrow function without return
const addNums4 = (num1, num2) => num1 + num2;
console.log(addNums4(5, 4));

// arrow function with one parameter
const addNums5 = num1 => num1 + 5;
console.log(addNums5(5));

// Constructor Function
// name of the function must start with capital letter
// this keyword
function Person(firstName, lastName, dob) { // dob = date of birth
    this.firstName = firstName;
    this.lastName = lastName;
    // this.dob = dob; //value yang diberikan berformat string
    this.dob = new Date(dob); //value yang diberikan berformat date
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return '${this.firstName} ${this.lastName}';
    }
}

// Prototype
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return '${this.firstName} ${this.lastName}';
}

// Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        // this.dob = dob; //value yang diberikan berformat string
        this.dob = new Date(dob); //value yang diberikan berformat date
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return '${this.firstName} ${this.lastName}';
    }
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-70');

console.log(person1);
console.log(person2);
console.log(person1.firstName);
console.log(person2.dob);
console.log(person2.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person2.getFullName());

// DOM - Document Object Model
// Single Element Selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));

// Multiple Element Selectors
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

// Manipulating the DOM
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';

// Events
// Mouse Event
btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.className);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
}
);

// Keyboard Event
const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', (e) => {
    document.querySelector('.container').append(nameInput.value);
}
);

// User Form Script
const myForm = document.querySelector('#my-form');
const nameInput2 = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    if(nameInput2.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode('${nameInput2.value} : ${emailInput.value}'));

        userList.appendChild(li);

        // Clear fields
        nameInput2.value = '';
        emailInput.value = '';
    }
}
