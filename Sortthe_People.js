/* 
Code
Code
Testcase
Testcase
Test Result
2418. Sort the People
Solved
Easy
Topics
Companies
Hint
You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights.

 

Example 1:

Input: names = ["Mary","John","Emma"], heights = [180,165,170]
Output: ["Mary","Emma","John"]
Explanation: Mary is the tallest, followed by Emma and John.*/
/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
      let combined = [];
    for (let i = 0; i < names.length; i++) {
        combined.push({ name: names[i], height: heights[i] });
    }
    combined.sort((a, b) => b.height - a.height);
    let sortedNames = [];
    for (let i = 0; i < combined.length; i++) {
        sortedNames.push(combined[i].name);
    }

    return sortedNames;
    
};