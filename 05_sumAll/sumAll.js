const sumAll = function(a,b) {
    if(typeof a !== "number" || typeof b !=="number" || a<0 || b<0){
        return "ERROR";
    }
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        return "ERROR";
    }
    const sumTillA = a*(a+1)/2;
    const sumTillB = b*(b+1)/2;

    return Math.abs(sumTillA - sumTillB) +1;

};

// Do not edit below this line
module.exports = sumAll;
