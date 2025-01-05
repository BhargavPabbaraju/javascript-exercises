const leapYears = function(years) {
    if(years <0){
        return "ERROR";
    }
    if(years % 100 === 0){
        return years % 400 === 0;
    }
    return years % 4 === 0;
};

// Do not edit below this line
module.exports = leapYears;
