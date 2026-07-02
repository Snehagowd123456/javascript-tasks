let employees = [
    { name: "sneha", id: 101, salary: 30000 },
    { name: "John",   id: 102, salary: 60000 },
    { name: "Arun",   id: 103, salary: 45000 }
];
//TASK 1 - Find the Highest Salary

let highestSalary = employees[0];
 
for (let emp of employees) {
    if (emp.salary > highestSalary.salary) {
        highestSalary = emp;
    }
}

console.log("Highest Salary : " + highestSalary.salary);
console.log("Employee Name  : " + highestSalary.name);

//TASK 2- Find the employee id
let searchId = 103;
let found = null;
 
for (let emp of employees) {
    if (emp.id === searchId) {
        found = emp;
        break;
    }
}
 
if (found) {
    console.log("Employee Found");
    console.log("Name   : " + found.name);
    console.log("Salary : " + found.salary);
} else {
    console.log("Employee Not Found");
}

//TASK 3 - calculate the salary
let bonus = 5000;
 
for (let emp of employees) {
    console.log(emp.name + " : " + (emp.salary + bonus));
}
//TASK 4- Experinece check
let empExp = [
    { name: "sneha", experience: 2 },
    { name: "John",  experience: 7 },
    { name: "Arun",  experience: 5 },
    ];
 
for (let emp of empExp) {
    let level = emp.experience >= 5 ? "Senior Employee" : "Junior Employee";
    console.log(emp.name + " - " + level);
}

//TASK 5- Display only employee names
for (let emp of employees) {
    console.log(emp.name);
}

// TASK 6 - Display Employee IDs

for (let emp of employees) {
    console.log(emp.id);
}

// TASK 7 - Find Total Salary
let totalSalary = 0;
 
for (let emp of employees) {
    totalSalary += emp.salary;
}
 
console.log("Total Salary : " + totalSalary);

// TASK 8 - Employees Earning More Than ₹40,000

for (let emp of employees) {
    if (emp.salary > 40000) {
        console.log(emp.name);
    }
}
 
// TASK 9 - Increase Salary by ₹5000
for (let emp of employees) {
    console.log(emp.name + " : " + (emp.salary + 5000));
}

// TASK 10 - Employee Report using Template Literals

for (let emp of employees) {
    console.log(`Employee Name : ${emp.name}
Employee ID   : ${emp.id}
Salary        : ${emp.salary}
`);
}

// 1. Total Number of Employees
console.log("1. Total Employees     : " + employees.length);
 
// 2. Highest Salary
let maxSal = employees.reduce((max, emp) => emp.salary > max.salary ? emp : max, employees[0]);
console.log("2. Highest Salary      : " + maxSal.salary);
 
// 3. Lowest Salary
let minSal = employees.reduce((min, emp) => emp.salary < min.salary ? emp : min, employees[0]);
console.log("3. Lowest Salary       : " + minSal.salary);
 
// 4. Total Salary
let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("4. Total Salary        : " + total);
 
// 5. Employee with Highest Salary
console.log("5. Highest Earner      : " + maxSal.name);
 
// 6. Employee with Lowest Salary
console.log("6. Lowest Earner       : " + minSal.name);
 
// 7. Employees Earning > ₹40,000
let above40k = employees.filter(emp => emp.salary > 40000).map(emp => emp.name);
console.log("7. Earning > ₹40,000  : " + above40k.join(", "));
 
// 8. Search Employee by ID
let cSearchId = 102;
let cFound = employees.find(emp => emp.id === cSearchId);
console.log("8. Search ID " + cSearchId + "        : " + (cFound ? cFound.name : "Not Found"));
 
// 9. Add ₹5000 Bonus to Every Employee
console.log("9. Salary After Bonus  :");
employees.forEach(emp => {
    console.log(`   ${emp.name} : ${emp.salary + 5000}`);
});
 
// 10. Professional Employee Report
console.log("10. Employee Report :");
employees.forEach(emp => {
    console.log(`
   ================================
   Employee Name : ${emp.name}
   Employee ID   : ${emp.id}
   Salary        : ₹${emp.salary}
   Salary+Bonus  : ₹${emp.salary + 5000}
   ================================`);
});