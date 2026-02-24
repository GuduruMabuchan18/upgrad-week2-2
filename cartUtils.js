// cartUtils.js

// Calculate total cart value
export const calculateTotal = products =>
  products.reduce((total, product) =>
    total + product.price * product.quantity, 0);