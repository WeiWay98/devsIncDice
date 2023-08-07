const d6Button = document.getElementById('d6Button');
const d10Button = document.getElementById('d10Button');
const diceHeader = document.getElementById('diceHeader');
const diceInfo = document.getElementById('diceInfo');
const diceResult = document.getElementById('diceResult');
const createAccountButton = document.getElementById("createAccountButton");
const cancelButton = document.getElementById("cancelButton");
const accountForm = document.getElementById("accountForm");

function rollD6() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollD10() {
    return Math.floor(Math.random() * 10) + 1;
}

function updateDiceInfo(diceType, result) {
    diceHeader.textContent = `${diceType} Dice Information`;
    diceInfo.textContent = diceInfoMap[diceType];
    diceResult.textContent = `Result: ${result}`;
}

const diceInfoMap = {
    D6: "A standard six-sided dice commonly used in various board games and role-playing games.",
    D10: "A ten-sided dice often used for percentile rolls in role-playing games.",
};

d6Button.addEventListener('click', () => {
    const result = rollD6();
    updateDiceInfo('D6', result);
});

d10Button.addEventListener('click', () => {
    const result = rollD10();
    updateDiceInfo('D10', result);
});

createAccountButton.addEventListener("click", function () {
    accountForm.classList.toggle("hidden");
    cancelButton.classList.toggle("hidden");
});

cancelButton.addEventListener("click", function () {
    accountForm.classList.add("hidden");
    cancelButton.classList.add("hidden");
    accountForm.reset();
});
