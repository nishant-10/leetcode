// https://leetcode.com/problems/find-the-difference
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const count = {};
    for (let c of s) count[c] = (count[c] || 0) + 1;//make a map of char:count from s (as s has no extra char)
    for (let c of t) {
        if (!count[c]) return c; //for the extra char, the count will be eventually 0 
        count[c]--; //everytime the char is found in t, decrease the count
    }
};