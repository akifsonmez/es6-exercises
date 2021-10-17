const students = [
	{name: "Quincy", grade: 96},
	{name: "Jason", grade: 84},
	{name: "Alexis", grade: 100},
	{name: "Sam", grade: 65},
	{name: "Katie", grade: 90}
];


// filter
console.log(students.filter(student => student.grade > 75));
console.log(students.filter(student => student.name.toLowerCase().includes("as")));

// map
console.log(students.map(student => `${student.name} ${student.grade}`));

// reduce
let totalGrade = students.reduce((totalGrade, student) => totalGrade + student.grade, 0);
console.log(`Average grade ${totalGrade / students.length}`);


