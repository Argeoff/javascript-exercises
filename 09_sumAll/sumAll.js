const sumAll = function(a, b) {
    let result = 0;
    const start = Math.min(a, b);
    const end = Math.max(a, b);
    for (let i = start; i <= end; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
