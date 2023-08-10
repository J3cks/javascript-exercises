const repeatString = function(word, iteration) {
    let baseWord = '';
    if (iteration >= 0) {
        for (i = 0; i < iteration; i++) {
            baseWord = word + baseWord;
        }
        
    } else {
        baseWord = 'ERROR'; 
    }
    let finalWord = baseWord;
    return finalWord;
};
repeatString("hey", -1);

// Do not edit below this line
module.exports = repeatString;
