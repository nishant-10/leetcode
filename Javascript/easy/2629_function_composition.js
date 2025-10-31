//https://leetcode.com/problems/function-composition
/*

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x)));
because of f(g(h(x))), iterate the array from right to left
input is functions = functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
-loop through the functions array
-if [] then return x, thats what the problem expects
-keep feeding the returned value of x to the functions from right to left

*/
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {

    return function (x) {
        if (functions.length === 0) return x;
        for (let i = functions.length - 1; i >= 0; i--) {
            x =  functions[i](x);
        }
        return x;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */