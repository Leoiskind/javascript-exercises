const palindromes = function (string) {
    const valid = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleaned = string.toLowerCase().split('').filter(char => valid.includes(char)).join('')
    let l = 0
    let r = cleaned.length - 1
    while (l<r){
        if (cleaned[l] !== cleaned[r]){
            return false;
        };
        l += 1
        r -= 1
    };
    return true; 
};

// Do not edit below this line
module.exports = palindromes;
