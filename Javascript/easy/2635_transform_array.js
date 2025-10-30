//https://leetcode.com/problems/apply-transform-over-each-element-in-array
/*

transform the array based on input parameter function without using map fuction
-take the input function and apply it everytime in a for loop.
-do not make a new result array, re-assign the original array if allowed.

arr = [1,2,3], fn = function plusone(n) { return n + 1; } -> [2,3,4]
arr = [1,2,3], fn = function plusI(n, i) { return n + i; } -> [1,3,5]
arr = [10,20,30], fn = function constant() { return 42; } -> [42,42,42]

*/
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
// var map = function(arr, fn) {
//     let result = [];
//     for(let i=0; i< arr.length; i++){
//         result.push(fn(arr[i], i));
//     }
//     return result;
// };
var map = function(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = fn(arr[i], i);
    }
    return arr;
};