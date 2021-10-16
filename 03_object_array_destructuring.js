const user = {username: "akif", password: "123", age: 23, sex: "male"};

// const username = user.username; // without destructuring
const {username} = user;
console.log(username);


const {password, ...restOfTheValues} = user; // rest parameter (...)
console.log(password, restOfTheValues);


const numbers = [1, 2, 3, 4, 5];
const [one, ...restOfTheNumbers] = numbers; // rest parameter (...)
console.log(one, restOfTheNumbers);

const names = ["Akif", "Takif", "Sakif"];
console.log(...names); // spread operator (...)


