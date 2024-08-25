function calculateTotalSalesWithTax(products, taxRate) {
    const sales = products.reduce((total, product) => total + product.price * product.quantity, 0);
    return sales + sales * taxRate / 100;
}

module.exports = calculateTotalSalesWithTax;
