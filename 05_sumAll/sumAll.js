const sumAll = function(num1, num2) {
    if(num1 < 0 || num2 < 0 || typeof(num1) !== "number" || typeof(num2) !== "number"){
        return 'ERROR';
    }

    let sum=0;
    let largerNum = num2 >= num1 ? num2 : num1;
    let smallerNum = num2 < num1 ? num2 : num1;

    console.log(smallerNum);
    console.log(largerNum);

    for(i=smallerNum; i<=largerNum; i++){
        sum+=i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
