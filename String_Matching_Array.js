/* Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

A substring is a contiguous sequence of characters within a string
Example 1:

Input: words = ["mass","as","hero","superhero"]
Output: ["as","hero"]
Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer.
 */
var stringMatching = function(words) {
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
  for(let j=0;j< words.length;j++){
       if (i !== j && words[j].includes(word)) {
            result.push(word);
            break; 
        }
       
  }
    }
    return result;
};