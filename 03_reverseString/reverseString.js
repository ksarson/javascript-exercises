const reverseString = function(reverseString) {
    let charArray = reverseString.split('');
    charArray =  charArray.reverse();
    return charArray.join('');;
};

// Do not edit below this line
module.exports = reverseString;
