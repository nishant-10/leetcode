// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let position = -1;
    for (let i = 0; i < haystack.length; i++) {
        let char = haystack[i];
        let substr = haystack.substr(i, needle.length);
        if (substr.length < needle.length) return -1;
        if (substr === needle) {
            position = i;
            break;
        }
    }
    return position;
};
//pattern- two pointer
var strStr = function (haystack, needle) {
    let i = 0; //haystack pointer
    let j = 0; //needle pointer
    while (i < haystack.length) {
        if (needle[j] === haystack[i]) {
            i++;
            j++;
            if (j === needle.length) {
                return i - j;
            }
        } else {
            i = i - j + 1;
            j = 0;
        }
    }
    return -1;
}