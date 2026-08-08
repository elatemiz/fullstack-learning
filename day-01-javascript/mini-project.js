//Student Profile:

const student = {
    name: "Ela",
    age: 26,
    department: "Computer Engineering",
    isStudent: true,
    skills: ["JavaScript", "HTML", "CSS"]
};

console.log("Student Profile:");
console.log("----------------");
console.log(`Name: ${student.name}`);
console.log(`Age: ${student.age}`);
console.log(`Department: ${student.department}`);
console.log(`Student: ${student.isStudent}`);
console.log(`Skills: ${student.skills}`);
console.log(`Number of skills: ${student.skills.length}`);

student.skills.push("Node.js");
console.log(`Number of skills: ${student.skills.length}`);