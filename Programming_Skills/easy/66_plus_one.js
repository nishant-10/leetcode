var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;

        if (digits[i] < 10) {
            return digits;   // no carry, done
        }

        digits[i] = 0;        // carry over
    }

    // If we finished the loop, it means we had something like 999 → 1000
    digits.unshift(1);
    return digits;
};
