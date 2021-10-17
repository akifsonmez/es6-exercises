const users = [{username: "Akif", age: 25}, {username: "Sakif", age: 30}, {username: "Dakif", age: 10}];

let anAdultUser = users.find((user) => user.age >= 18);
let kidExists = users.some((user) => user.age < 18);
let isAllUsersAdult = users.every((user) => user.age >= 18);

console.log(anAdultUser);
console.log(kidExists);
console.log(isAllUsersAdult);
