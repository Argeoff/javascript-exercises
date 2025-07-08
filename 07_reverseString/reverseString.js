const reverseString = function(input) {
    let phrase = "";
    let index = -1;
    for (let i = 0; i < input.length; i++){
        phrase += input.slice(index, index+1);
        index--;
    }
    return phrase;
};

// Do not edit below this line
module.exports = reverseString;
