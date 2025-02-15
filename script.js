function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
    let dice = [];
    let total = 0;
    
    for (let i = 0; i < 5; i++) {
        let roll = rollDie();
        dice.push(roll);
        total += roll;
    }
    
    for (let i = 0; i < 5; i++) {
        let diceElement = document.getElementById("dice" + (i + 1));
        diceElement.value = `Dice ${i + 1} rolled ${dice[i]}`;
    }
    
    console.log("Rolled dice:", dice, "Total:", total);
}

document.addEventListener("DOMContentLoaded", rollDice);
