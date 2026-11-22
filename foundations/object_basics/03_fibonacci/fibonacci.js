const fibonacci = function(num) {
    if(typeof num != "number" || num <= 0 || Number.isNaN(num)){
        return "OOPS";
    };
    let prev1 = 1;
    let prev2 = 0;
    let total = 1;
    for (let i=1; i<num; i++){
        total = prev1 + prev2;
        prev2 = prev1;
        prev1 = total;
    };
    return total;
};

// Do not edit below this line
module.exports = fibonacci;
