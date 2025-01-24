
// Task 1: Variables - Employee Information
let employeeName = "Alex Chaffee";
const employeeID = 12345;
var isActive = true;

console.log("Task 1 - Employee Information:");
console.log("Employee Name:", employeeName, "- Type:", typeof employeeName);
console.log("Employee ID:", employeeID, "- Type:", typeof employeeID);
console.log("Is Active:", isActive, "- Type:", typeof isActive);

// Task 2: Primitive Data Types - Product Details
let productName = "Wireless Mouse";
const productPrice = 29.99;
var isAvailable = true;

console.log("\nTask 2 - Product Details:");
console.log("Product Name:", productName, "- Type:", typeof productName);
console.log("Product Price:", productPrice, "- Type:", typeof productPrice);
console.log("Is Available:", isAvailable, "- Type:", typeof isAvailable);

// Task 3: Number Data Type - Financial Transactions
let accountBalance = 1000;
console.log("\nTask 3 - Financial Transactions:");
console.log("Initial Account Balance:", accountBalance);

accountBalance += 500; // Add 500
console.log("After Deposit:", accountBalance);

accountBalance -= 200; // Subtract 200
console.log("After Withdrawal:", accountBalance);

accountBalance *= 1.05; // Increase by 5% interest
console.log("After Interest:", accountBalance);

accountBalance /= 2; // Split balance
console.log("After Splitting:", accountBalance);

// Task 4: String Data Type - Customer Messaging
let customerName = "Alice";
let welcomeMessage = "Hello " + customerName + ", welcome to our platform!";
console.log("\nTask 4 - Customer Messaging:");
console.log(welcomeMessage);

// Task 5: Boolean Data Type - Access Control
let isLoggedIn = true;
let hasAccess = isLoggedIn && true; // Example access condition
console.log("\nTask 5 - Access Control:");
console.log("Is Logged In:", isLoggedIn);
console.log("Has Access:", hasAccess);
