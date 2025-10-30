//https://leetcode.com/problems/counter-ii
/*

-make a function which returns an object
-the object should hold init value
-and a few fucntions which manipulate the init value

*/
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    return {
        current: init,
        increment : function(){
            this.current++;
            return this.current;
        },
        decrement : function(){
            this.current--;
            return this.current;
        },
        reset : function(){
            this.current = init;
            return init;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */