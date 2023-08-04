
function rollDice(sides) {
    if (sides < 2) {
        throw new Error("Number of sides should be at least 2");
    }
    return Math.floor(Math.random() * sides) + 1;
}

const d6Element = document.getElementById('d6');
const d10Element = document.getElementById('d10');


function updateDice(diceElement, sides) {
    const result = rollDice(sides);
    diceElement.textContent = result;
}


d6Element.addEventListener('click', function () {
    updateDice(d6Element, 6);
});
d10Element.addEventListener('click', function () {
    updateDice(d10Element, 10);
});