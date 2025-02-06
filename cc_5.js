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

// Task 3 - Array Manipulations
let cartItems = [`Ball`, `Football`, `Basketball`];
console.log(`Items in your cart:
    ${cartItems[0]},
    ${cartItems[1]},
    ${cartItems[2]},
`); // Displays the items in the cart

cartItems.push(`Baseball`); // Adds Baseball to the end of the array
console.log(`Added new Item to cart:
    ${cartItems[0]},
    ${cartItems[1]},
    ${cartItems[2]},
    ${cartItems[3]}
`) // Displays the new list of Items in the cart

cartItems.pop(); // Removes the last item in the array
console.log(`Removed last Item from cart:
    ${cartItems[0]},
    ${cartItems[1]},
    ${cartItems[2]}
`) // Displays the new list of Items in the cart

cartItems.unshift(`Baseball`); // Adds Baseball to the beginning of the array
console.log(`Added new Item to cart:
    ${cartItems[0]},
    ${cartItems[1]},
    ${cartItems[2]},
    ${cartItems[3]}
`) // Displays the new list of Items in the cart

cartItems.shift(); // Removes the first item in the array
console.log(`Removed first Item from cart:
    ${cartItems[0]},
    ${cartItems[1]},
    ${cartItems[2]}
`) // Displays the new list of Items in the cart
// Task 3 - End

// Task 4 - Map Method
const prices = [200, 400, 600]; // List of Prices
const discountedPrices = prices.map(x => x * (1 - .1)); // Math to discount the prices by 10%
console.log(prices); // Logs Prices
console.log(discountedPrices); // Logs Discounted Prices
// Task 4 - End

// Task 5 - Filter Method
const inventory = [5, 0, 12, 8, 0]; // List of inventory stock
const availableStock = inventory.filter(x => x > 0); // Math to filter out items with no stock
console.log(availableStock); // List available stocks
// Task 5 - End

// Task 6 - Reduce Method
const sales = [200, 250, 500, 750];
const totalInvoice = sales.reduce((total, x) => total + x, 0); // Math to add up the total of the sales
console.log(`List of invoices: ${sales}`); // List of invoices
console.log(`Total Invoice is ${totalInvoice}`); // Logs the total invoice
// Task 6 - End

// Task 7 - find() Method
const customers = [`Alice`, `Bob`, `Charlie`, `David`];
const foundCustomer = customers.find(customer => customer ===`Charlie`);
console.log(foundCustomer);
// Task 7 - End

// Task 8 - Tax Calculation
function calculateTax(amount, taxRate) {
    const tax = amount * taxRate;
    console.log(`The product amount is: $${amount} with a taxe rate of ${taxRate * 100}%, making the tax ${tax}`)
    return tax;
}
calculateTax(15000, 0.1)
// Task 8 - End
