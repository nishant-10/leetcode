//https://leetcode.com/problems/allow-one-function-call
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
    let called = false;   // track if fn has been called
    let result;           // store the result of the first call

    return function (...args) {
        if (!called) {
            result = fn(...args); // call fn the first time
            called = true;        // mark as called
            return result;
        }
        return undefined;         // return undefined on later calls
    }
}
/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
