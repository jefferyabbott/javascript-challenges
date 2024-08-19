function diceGameSimulation(numSimulations) {
    const results = [];
    for (let i = 0; i < numSimulations; i++) {
        const die1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        const die2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        const sum = die1 + die2;
        let result = "roll again";
        if (sum === 7 || sum === 11) {
            result = "win"
        } else if (sum === 2 || sum === 3 || sum === 12) {
            result = "lose"
        } 

        results.push({dice1: die1, dice2: die2, sum: sum, result: result})
    }
    return results;
}

module.exports = diceGameSimulation;
