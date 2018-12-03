var singleNumber = function(nums) {
    const charMap = {};
    let result;
    for(num of nums) {
        if(charMap[num]) {
            charMap[num] += 1;
        } else {
            charMap[num] = 1;
        }
    }
    for(key in charMap){
        if(charMap[key] === 1){
            result = key; 
        }
    }
    return parseInt(result);
};

module.exports = singleNumber;