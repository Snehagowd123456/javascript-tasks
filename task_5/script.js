// ======================================
// TASK 1 - Employee Salary
// ======================================

function yearlySalary(monthlySalary) {
    return monthlySalary * 12;
}

console.log("Yearly Salary: ₹" + yearlySalary(45000));


// ======================================
// TASK 2 - Student Pass or Fail
// ======================================

function checkResult(marks) {
    if (marks >= 35) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(checkResult(72));


// ======================================
// TASK 3 - Food Bill
// ======================================

function foodBill(price, quantity) {
    return price * quantity;
}

console.log("Total Bill: ₹" + foodBill(180, 3));


// ======================================
// TASK 4 - Welcome Employee
// ======================================

function welcomeEmployee(name, department) {
    console.log("Welcome " + name);
    console.log("Department : " + department);
}

welcomeEmployee("Sneha", "Development");


// ======================================
// TASK 5 - Shopping Discount
// ======================================

function shopping(price, discount) {
    return price - discount;
}

console.log("Final Amount : ₹" + shopping(5000, 500));


// ======================================
// TASK 6 - Company Login (Callback)
// ======================================

function login(callback) {
    console.log("Login Successful");
    callback();
}

function dashboard() {
    console.log("Loading Dashboard...");
}

login(dashboard);


// ======================================
// TASK 7 - Food Delivery (Higher Order Function)
// ======================================

function order(callback) {
    console.log("Order Received");
    callback();
}

function prepare(callback) {
    console.log("Preparing Food");
    callback();
}

function delivery(callback) {
    console.log("Out for Delivery");
    callback();
}

function delivered() {
    console.log("Delivered");
}

order(function () {
    prepare(function () {
        delivery(delivered);
    });
});


// ======================================
// TASK 8 - Lucky Draw (Generator)
// ======================================

function* coupons() {
    yield "10%";
    yield "20%";
    yield "50%";
    yield "Better Luck Next Time";
}

let coupon = coupons();

console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);


// ======================================
// TASK 9 - Employee Bonus (Currying)
// ======================================

function bonus(salary) {
    return function (bonusAmount) {
        return salary + bonusAmount;
    };
}

console.log("Total Salary : ₹" + bonus(50000)(5000));


// ======================================
// TASK 10 - Merge Employee Details
// ======================================

let employeePersonal = {
    name: "Sneha",
    age: 22
};

let employeeOffice = {
    department: "Development",
    salary: 50000
};

let employee = {
    ...employeePersonal,
    ...employeeOffice
};

console.log(employee);


// ======================================
// TASK 11 - Shopping Cart Merge
// ======================================

let cart1 = ["Mobile", "Laptop"];
let cart2 = ["Mouse", "Keyboard"];

let cart = [...cart1, ...cart2];

console.log(cart);


// ======================================
// TASK 12 - Student Marks (Rest Operator)
// ======================================

function student(name, ...marks) {

    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    let average = total / marks.length;

    console.log("Student :", name);
    console.log("Total :", total);
    console.log("Average :", average);
}

student("Sneha", 90, 85, 88, 95);


// ======================================
// TASK 13 - Object Destructuring
// ======================================

let product = {
    name: "Laptop",
    price: 65000,
    brand: "Dell",
    stock: 20
};

let { name, price } = product;

console.log(name);
console.log(price);


// ======================================
// TASK 14 - Array Destructuring
// ======================================

let customer = [101, "Sneha", "Bangalore", 9876543210];

let [id, customerName, city, mobile] = customer;

console.log(id);
console.log(customerName);
console.log(city);


// ======================================
// TASK 15 - Push()
// ======================================

let shoppingCart = ["Mobile", "Laptop"];

shoppingCart.push("Headphone");

console.log(shoppingCart);


// ======================================
// TASK 16 - Pop()
// ======================================

shoppingCart.pop();

console.log(shoppingCart);


// ======================================
// TASK 17 - Splice()
// ======================================

let employees = ["Rahul", "Arun", "John", "David"];

employees.splice(2, 1, "Naveen");

console.log(employees);


// ======================================
// TASK 18 - Includes()
// ======================================

let products = ["Mouse", "Keyboard", "Monitor", "Laptop"];

if (products.includes("Laptop")) {
    console.log("Laptop Available");
} else {
    console.log("Laptop Not Available");
}


// ======================================
// TASK 19 - Sort()
// ======================================

let salaries = [25000, 45000, 30000, 70000];

salaries.sort((a, b) => a - b);

console.log(salaries);


// ======================================
// TASK 20 - Reverse()
// ======================================

let messages = ["Hi", "Hello", "How are you?", "Good Morning"];

messages.reverse();

console.log(messages);


// ======================================
// BONUS PROJECT - Employee Management System
// ======================================

let employeeList = [];

function addEmployee(id, name, salary) {
    employeeList.push({ id, name, salary });
}

function viewEmployees() {
    console.log(employeeList);
}

function searchEmployee(id) {

    let emp = employeeList.find(e => e.id === id);

    if (emp) {
        console.log(emp);
    } else {
        console.log("Employee Not Found");
    }
}

function calculateSalaryBonus() {

    for (let emp of employeeList) {

        let bonus = emp.salary * 0.10;

        console.log(
            emp.name +
            " Salary: ₹" +
            emp.salary +
            " Bonus: ₹" +
            bonus
        );
    }
}

function removeEmployee(id) {

    employeeList = employeeList.filter(e => e.id !== id);
}

function sortEmployees() {

    employeeList.sort((a, b) => a.salary - b.salary);

    console.log(employeeList);
}

function findEmployee(name) {

    let emp = employeeList.find(e => e.name === name);

    console.log(emp);
}

function employeeDetails(id) {

    let emp = employeeList.find(e => e.id === id);

    if (emp) {

        let { name, salary } = emp;

        console.log("Name:", name);
        console.log("Salary:", salary);
    }
}

addEmployee(101, "Sneha", 50000);
addEmployee(102, "John", 30000);
addEmployee(103, "Priya", 70000);

viewEmployees();
searchEmployee(102);
calculateSalaryBonus();
sortEmployees();
findEmployee("Sneha");
employeeDetails(101);
removeEmployee(102);
viewEmployees();