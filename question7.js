function checkPalindrome(str) {
    // const cleanstr = clean(str);
    const charArr = str.split("");
    for (let c of charArr ) {
        if (c !== charArr.pop()) {
            return 'false';
        }
    }
    return 'true';
}

// console.log (checkPalindrome("aabac"));