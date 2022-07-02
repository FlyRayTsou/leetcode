/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function(s) {
    s = s.replace(' ', '');
    let currNum = '';
    let preNum = '';
    let total = 0;
    let stack = [];
    let preOperator = '+';
    for (let i = 0; i < s.length; i++) {
        if (!isOperator(s[i])) {
            currNum = currNum + s[i];    
        }
        if (isOperator(s[i]) || i === s.length - 1) {
            switch (preOperator) {
                case '*':
                    preNum = stack.pop();
                    stack.push(Number.parseInt(preNum*currNum));
                    currNum = '';
                    preOperator = s[i];
                    break;
                case '/':
                    preNum = stack.pop();
                    stack.push(Math.trunc(preNum/currNum));
                    currNum = '';
                    preOperator = s[i];
                    break;
                case '+':
                    stack.push(currNum);
                    currNum = '';
                    preOperator = s[i]
                    break;
                case '-':
                    stack.push(-1 * Number.parseInt(currNum))
                    currNum = '';
                    preOperator = s[i];
                    break;
            }
        }
    }
    while(stack.length > 0) {
        total += Number.parseInt(stack.pop());
    }
    return total;
};

function isOperator(char) {
    if (char === '+' || char === '-' || char === '*' || char === '/') return true;
    return false;
}



/**
 * @param {string} s
 * @return {number}
 */
var calculate2 = function(s) {
    s = s.replace(/-/g, '+-1*');
    addArray = s.split('+');
    let total = 0;
    let minus = [];
    for (let i = 0; i < addArray.length; i++) {
        if (isNoIncludeMultAndDivi(addArray[i])) {
            total += Number.parseInt(addArray[i]);
        }
    }
    multiArray = addArray.filter(element => ! isNoIncludeMultAndDivi(element));
    for (let i = 0; i < multiArray.length; i++) {
        let part1 = multiArray[i].split('*');
        let partTotal = 1;
        for (let j = 0; j < part1.length; j++) {
            if (isNoIncludeDivi(part1[j])) {
                partTotal = partTotal* Number.parseFloat(part1[j]);
            } else {
                let part2 = part1[j].split('/');
                partTotal = partTotal* Number.parseFloat(part2[0]);
                for (let k=1; k < part2.length; k++) {
                    
                    partTotal = Math.trunc(partTotal/Number.parseFloat(part2[k]));
                }
            }
        }
        total += partTotal;
    }
    return total;
};

function isNoIncludeMultAndDivi(s) {
    return !(s.includes('/') || s.includes('*'));
};

    
function isNoIncludeDivi(s) {
    return !(s.includes('/'));
};