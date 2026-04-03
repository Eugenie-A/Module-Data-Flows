let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

// Print the header line, padding each column to a fixed width
console.log("QTY".padEnd(8) + "ITEM".padEnd(20) + "TOTAL");
// Keep track of running total
let total = 0;

// Loop through each item in the order
order.forEach(({ itemName, quantity, unitPricePence }) => {
  // Calculate the line total and convert from pence to pounds
  let lineTotal = (quantity * unitPricePence) / 100;
  // Add this item's total to the running total
  total += lineTotal;
  // Print this item line, padding each column to match the header width
  console.log(
    `${quantity}`.padEnd(8) + itemName.padEnd(20) + lineTotal.toFixed(2)
  );
});

// Print the overall total, fixed to 2 decimal places
console.log(`\nTotal: ${total.toFixed(2)}`);
