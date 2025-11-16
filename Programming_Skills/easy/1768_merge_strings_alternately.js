// https://leetcode.com/problems/merge-strings-alternately
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
function mergeAlternately(word1, word2) {
    let i = 0, j = 0;
    const n1 = word1.length, n2 = word2.length;
    const out = [];
  
    // alternate while both have characters
    while (i < n1 && j < n2) {
      out.push(word1[i++]);
      out.push(word2[j++]);
    }
  
    // append remaining part (only one of these loops will run)
    while (i < n1) out.push(word1[i++]);
    while (j < n2) out.push(word2[j++]);
  
    return out.join('');
  }