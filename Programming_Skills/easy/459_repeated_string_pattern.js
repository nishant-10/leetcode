// https://leetcode.com/problems/repeated-substring-pattern
//https://algo.monster/liteproblems/459
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  let doubled = s + s;
  let cut = doubled.slice(1, doubled.length - 1);
  return cut.includes(s);
};
//pattern - String Manipulation / Substring Search
