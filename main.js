// main.js

import { calculateTotal } from './cartUtils.js';

// Store product objects in array
const cart = [
  { name: "Laptop", price: 50000, quantity: 1 },
  { name: "Mouse", price: 500, quantity: 2 },
  { name: "Keyboard", price: 1500, quantity: 1 }
];

// Generate invoice using map()
const invoice = cart.map(product =>
  `${product.name} - ₹${product.price} x ${product.quantity}`
).join('\n');

// Calculate total
const totalAmount = calculateTotal(cart);

// Display output using template literals
console.log(`
------ Invoice ------
${invoice}

Total Amount: ₹${totalAmount}
`);