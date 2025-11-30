//https://leetcode.com/problems/move-zeroes
var moveZeroes = function(nums) {
    let insert = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            //can use normal swapping approach as well
            [nums[insert], nums[i]] = [nums[i], nums[insert]];
            insert++;
        }
    }
    return nums;
};
//pattern - two pointer