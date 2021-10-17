// usage 1
const sum = (num1, num2, num3) => num1 + num2 + num3;
const numbers = [1, 2, 3];
console.log(sum(...numbers));

// usage 2
let names = ["name1", "name2", "name3"];
//names.push("name4"); // memory address of "names" does not change
names = [...names, "name4"]; // memory address of "names" does change
console.log(names);

// usage 3
const list1 = [1, 2, 3];
const list2 = [4, 5, 6];
const list3 = [...list1, ...list2];
console.log(list3);

// usage 4
let user = {username: "Akif", age: 25};
user = {...user, age: 28}; // updates // memory address of "user" does change
console.log(user);
