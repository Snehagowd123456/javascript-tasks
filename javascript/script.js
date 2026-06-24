
// Task 1: Employee Information System

let empName = prompt("Enter Employee Name:");
let empAge = prompt("Enter Employee Age:");
let empDepartment = prompt("Enter Employee Department:");
let empSalary = Number(prompt("Enter Employee Salary:"));

let employee = {
    name: empName,
    age: empAge,
    department: empDepartment,
    salary: empSalary
};

console.log("Employee Details:", employee);

if (empSalary > 30000) {
    console.log("Eligible for Bonus");
} else {
    console.log("Not Eligible");
}



// Task 2: Supermarket Billing

let productName = prompt("Enter Product Name:");
let productPrice = Number(prompt("Enter Product Price:"));
let quantity = Number(prompt("Enter Quantity:"));

let totalBill = productPrice * quantity;

if (totalBill > 5000) {
    totalBill = totalBill - (totalBill * 10 / 100);
}

console.log("Final Amount:", totalBill);


// Task 3: Student Result Portal

let studentName = prompt("Enter Student Name:");
let studentMarks = Number(prompt("Enter Marks:"));

if (studentMarks >= 90) {
    console.log("Grade A");
} else if (studentMarks >= 75) {
    console.log("Grade B");
} else if (studentMarks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


// Task 4: Bank ATM Eligibility

let userName = prompt("Enter User Name:");
let accountBalance = Number(prompt("Enter Account Balance:"));
let withdrawalAmount = Number(prompt("Enter Withdrawal Amount:"));

if (withdrawalAmount <= accountBalance) {
    console.log("Transaction Successful");
} else {
    console.log("Insufficient Balance");
}



// Task 5: Login Validation


let username = "admin";
let password = "12345";

let enteredUsername = prompt("Enter Username:");
let enteredPassword = prompt("Enter Password:");

if (enteredUsername === username && enteredPassword === password) {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}



// Task 6: Online Food Order


let foodItems = [
    "Pizza",
    "Burger",
    "Pasta",
    "Dosa",
    "Idli",
    "Sandwich",
    "Noodles",
    "Ice Cream"
];

console.log("First Item:", foodItems[0]);
console.log("Last Item:", foodItems[foodItems.length - 1]);
console.log("Total Number of Items:", foodItems.length);

for (let item of foodItems) {
    console.log(item);
}



// Task 7: Company Employee Directory


let employeeDetails = {
    name: "sneha",
    age: 25,
    department: "IT",
    salary: 50000,
    experience: 3
};

for (let key in employeeDetails) {
    console.log(key + ": " + employeeDetails[key]);
}


// Task 8: Traffic Signal System

let signalColor = prompt("Enter Signal Color:");

switch (signalColor.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}



// Task 9: Age Category Checker


let age = Number(prompt("Enter Your Age:"));

if (age >= 0 && age <= 12) {
    console.log("Child");
} else if (age >= 13 && age <= 19) {
    console.log("Teenager");
} else if (age >= 20 && age <= 59) {
    console.log("Adult");
} else {
    console.log("Senior Citizen");
}



// Task 10: Employee Attendance

let employeeName = prompt("Enter Employee Name:");
let attendance = prompt("Enter Attendance (Present/Absent):");

let result = attendance.toLowerCase() === "present"
    ? "Welcome " + employeeName + " | Attendance: Present"
    : "Attendance: Absent";

console.log(result);