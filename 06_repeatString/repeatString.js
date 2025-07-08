const repeatString = function (string, num) {
    let value = "";
    let i = 0;
    while (i < num) {
        value += string;
        i++;
    }
    return value;
}

// Do not edit below this line
module.exports = repeatString;
