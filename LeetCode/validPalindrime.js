var isPalindrome = function (s) {
    let str1 = s.split(" ").join("");
    let rev = str1.split('');
    let str2 = rev.reverse();
    str2 = str2.join()
    if (str1 === str2) {
        return true
    } else {
        return false
    }
};


console.log(isPalindrome("A man, a plan, a canal: Panama"));