// Select the table where we want to calculate the sum
const table = document.getElementById('grocery-table');

// Select the button to trigger the calculation
const calculateButton = document.getElementById('calculate-btn');

// Function to calculate the total price and add a new row
function calculateTotal() {
  const prices = document.querySelectorAll('.price'); // Select all the elements with class "price"
  let totalPrice = 0;

  // Loop through each price element and add to the total
  prices.forEach(function(priceElement) {
    const price = parseFloat(priceElement.innerText); // Get the price value as a number
    totalPrice += price;
  });

  // Show the total price in the 'ans' div
  const totalElement = document.getElementById('ans');
  totalElement.innerText = 'Total: ₹' + totalPrice;
}

// Attach the event listener to the button to calculate total price
calculateButton.addEventListener('click', calculateTotal);
