function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    if (x !== 0 && x % 10 === 0) return false;
    let og = x;
    let rev = 0;
    while (x > 0) {
        rev = rev * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    return og === rev;
};