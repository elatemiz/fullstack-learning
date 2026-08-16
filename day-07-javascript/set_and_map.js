//Using a Set within a Map → grouping unique values ​​belonging to a category:

const students = [
    {name: "Ela" , course: "JavaScript" },
    {name: "Ali", course: "JavaScript"},
    {name: "Ayşe" , course: "Python" },
    {name: "Mehmet", course: "JavaScript" },
    {name: "Zeynep", course: "Python" },
    {name: "Can", course: "Java" },
];

const studentMap = new Map();

for(const student of students){
      const course = student.course;

      if(!studentMap.has(course)){
        studentMap.set(course, []); //value is an array
      }
    
    studentMap.get(student.course).push(student.name);
}

console.log(studentMap);

console.log(studentMap.get("JavaScript"));

//Set → to guarantee that the students are unique:

for(const student of students){
    const course = student.course;

    if(!studentMap.has(course)){
        studentMap.set(course, new Set());
    }
    studentMap.get(course).add(student.name);
    
}

console.log(studentMap);