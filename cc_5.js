console.log(`cc_5.s has succesfully loaded!`);

// Task 1 - Object Properties
let customer = {
        name: `Juan John`, // Stores the name of the customer
        age: 35, // Stores the age of the customer
        email: `JuanJohn@surfshop.com`// Stores the email of the customer
    };
console.log (`Hello ${customer.name}, you are ${customer.age} years old and your email is ${customer.email}`); // Displays a line of information of the customer
// Task 1 - End

// Task 2 - Object Methods
const order = { // Creates an object called order
    orderID: 12345, // Order ID 12345
    totalAmount: 600, // Order Amount
    status: `Processing`, // Order Status

    displayOrder() {
        console.log(`Order ID: ${this.orderID}`); // displays this order ID
        console.log(`Total Amount: $${this.totalAmount}`); // displays this orders total amount
        console.log(`Status: ${this.status}`); // displays this orders status
    }
};
order.displayOrder(); // calls the display order of the order
// Task 2 - End

