
// Real-Time Employee Portal Task


// 1. Store employee name using var.
var employeeName = "Sneha";

// 2. Store employee age using let.
let employeeAge = 22;

// 3. Store company name using const.
const companyName = "Stackly";

// 4. Print all details using console.log().

console.log("Employee Name :", employeeName);
console.log("Employee Age :", employeeAge);
console.log("Company Name :", companyName);



// 5. Show a popup message.

alert("Welcome to Employee Portal");



// 6. Ask the employee:


let taskStatus = confirm("Have you completed today's task?");

// Print the result

console.log("Task Completed :", taskStatus);



// 7. Ask the employee name using prompt()

let enteredName = prompt("Enter your name");

// Print the entered name

console.log("Employee Name :", enteredName);


// 8. Display the entered employee name on the webpage.

document.writeln("<h2>Welcome " + enteredName + "</h2>");


// 9. Print a success message using console.warn()

console.warn("Task submitted successfully");



// 10. Print an error message using console.error()

console.error("Task submission failed");


// Bonus Task:
// Update employee age after promotion
// and print the updated value.

employeeAge = 23;

console.log("Updated Employee Age :", employeeAge);