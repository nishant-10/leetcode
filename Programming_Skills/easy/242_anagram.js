/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//pattern- hashmap /  frequency counter
var isAnagram = function (s, t) {
  let f1 = {};
  //if length are not equal there is extra char, return false
  if (s.length !== t.length) return false;
  //if lengths are equal, make a frequency map using s
  for (let i = 0; i < s.length; i++) {
    if (f1[s[i]]) {
      f1[s[i]]++;
    } else {
      f1[s[i]] = 1;
    }
  }
  //   loop on t and decrease the freq count after every occurence
  for (let char of t) {
    //if any freq becomes 0 before the loop ends, that means that one occurence
    //of that char is missing, i.e. freq ended too quickly and is replaced by some other char
    if (!f1[char]) return false;
    f1[char]--;
  }
  return true;
};
