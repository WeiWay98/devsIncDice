// Get references to the button and result elements
const rollButton = document.getElementById('rollButton');
const diceResult = document.getElementById('diceResult');

// Define a function to generate a random number between 1 and 6 (for a standard die)
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Add a click event listener to the roll button
rollButton.addEventListener('click', () => {
    // Generate a random dice roll
    const result = rollDice();
    
    // Update the dice result element
    diceResult.textContent = `Result: ${result}`;
});