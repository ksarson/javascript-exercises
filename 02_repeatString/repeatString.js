const repeatString = function(repeatString, reps) {
    if (reps < 0){
        return 'ERROR';
    }
    let newString = '';
    for(i=0; i<reps; i++){
        newString+=(repeatString);
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
