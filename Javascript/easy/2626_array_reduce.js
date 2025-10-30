//https://leetcode.com/problems/array-reduce-transformation
/*
O(N)
-make a reduce function without using reduce()
-input is ([1,2,3,4],function which does something with previous value, inital value to start with)
-initiate result with init
-loop using for
-keep feeding the function with previous result value
-'result' here is generally called accumulator
-keep accumulating, fn will keep doing its job
-return result

*/
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  if (nums.length === 0) return init;
  let result = init;
  for (let i = 0; i <= nums.length - 1; i++) {
    result = fn(result, nums[i]);
  }
  return result;
};

//without using the result variable
/*
-we dont have result var to start with init
-so add check if index is 0 then send init or else previous element
-the array itself keeps storing the function return values
-so when i is being iterated, the function param or the accumulated value is present at i-1
-the final result will be in the last element, return accordingly
*/
var reduce = function (nums, fn, init) {
    if (nums.length === 0) return init;
    for (let i = 0; i <= nums.length - 1; i++) {
        nums[i] = fn(((i === 0) ? init : nums[(i - 1)]), nums[i]);
    }
    return nums[nums.length - 1];
};

/*
-this approach avoids if condition on each iteration
-but its performance is very uncertain on leetcode, not sure why
*/
var reduce = function(nums, fn, init) {
    if (nums.length === 0) return init;

    nums[0] = fn(init, nums[0]);
    for (let i = 1; i < nums.length; i++) {
        nums[i] = fn(nums[i - 1], nums[i]);
    }

    return nums[nums.length - 1];
};