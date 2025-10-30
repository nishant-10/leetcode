//https://leetcode.com/problems/filter-elements-from-array
/*

Filter Elements from Array
-input is array and a function which does the operation of selecting elements
-first param of function is the target element / arr[i]
-the input function might or might not have 2nd param i / index
-make a function which doesnt use filter()


Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]
Explanation:
const newArray = filter(arr, fn); // [20, 30]

Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
Output: [1]
Explanation:
fn can also accept the index of each element

Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
Output: [-2,0,1,2]
Explanation:
Falsey values such as 0 should be filtered out

*/
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

//O(n) a simple and easy to understand version which is fast but not memory efficient
var filter = function (arr, fn) {
  let result = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    let flag = fn(arr[i], i);
    if (flag) {
      result.push(arr[i]);
    }
  }
  return result;
};

//O(1) without using new array
var filter = function (arr, fn) {
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      arr[k++] = arr[i]; // overwrite valid elements
    }
  }
  arr.length = k; // shrink array to new size
  return arr;
};
