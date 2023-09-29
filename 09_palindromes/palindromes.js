const palindromes = function (word) {
    word = word.toLowerCase().replace(/[^a-zA-Z0-9]/g,'');
    let charArray = word.split('');
    let reversedWord = '';
    while (charArray.length > 0)
    {
        reversedWord += charArray.pop();
    }
    return reversedWord === word;
};

// Do not edit below this line
module.exports = palindromes;
