const sum = (num1, num2) => {
	return num1 + num2;
};

const subtract = (num1, num2) => num1 - num2;

const sayHello = name => console.log(`Hello ${name}`);

// arrow functions should be called after their initialization
// otherwise it gives error
console.log(sum(2, 2));
console.log(subtract(2, 2));
sayHello("Akif");

/* without arrow function
function sum(num1, num2){
	return num1 + num2;
}
 */
