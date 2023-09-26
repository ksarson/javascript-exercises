const removeFromArray = function(inputArray, ...removeItems) {
    return inputArray.filter(item => !removeItems.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
