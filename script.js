// Select the table where we want to calculate the sum
const table = document.getElementById('grocery-table');

// Function to calculate the total price and add a new row
function calculateTotal() {
  const prices = document.querySelectorAll('.price'); // Select all the elements with class "price"
  let totalPrice = 0;

  // Loop through each price element and add to the total
  prices.forEach(function(priceElement) {
    const price = parseFloat(priceElement.innerText); // Get the price value as a number
    totalPrice += price;
  });

  // Create a new row for the total price
  const newRow = document.createElement('tr');
  const totalCell = document.createElement('td'); // Create a cell for the total price
  totalCell.setAttribute('colspan', 2); // Set the colspan to make it span across both columns
  totalCell.innerText = 'Total: ₹' + totalPrice;

  // Append the total price cell to the new row
  newRow.appendChild(totalCell);

  // Append the new row to the table
  table.appendChild(newRow);
}

// Call the function to calculate and display the total price
calculateTotal();
