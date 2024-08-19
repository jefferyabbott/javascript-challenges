function calculator(n1, n2, operand) {
    switch (operand) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        case '/':
            if (n2 !== 0) {
                return n1 / n2;
            } else {
                throw new Error('Division by zero');
            }
        default:
            throw new Error('Invalid operator');
    }
}

module.exports = calculator;
