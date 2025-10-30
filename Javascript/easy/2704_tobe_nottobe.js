//https://leetcode.com/problems/to-be-or-not-to-be
/*

-a function which returns an object with 2 functions, tobe and nottobe
-if 2 is 'tobe' 2, then return true or throw error
-if 2 is 'nottobe' 3 then return true or throw error

*/
/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    return {
        toBe: function (n1) {
            if (n1 !== val) throw new Error("Not Equal");
            return true;
        },
        notToBe: function (n1) {
            if (n1 === val) throw new Error("Equal");
            return true;
        }
    };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */