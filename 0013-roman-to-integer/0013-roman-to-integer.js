var romanToInt = function(s) {
    const roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    return s.split('').reduce((total, curr, i) => {
        const currValue = roman[curr];
        const nextValue = roman[s[i + 1]];
        
        // If current is less than next, subtract; otherwise add
        return currValue < nextValue ? total - currValue : total + currValue;
    }, 0);
};
