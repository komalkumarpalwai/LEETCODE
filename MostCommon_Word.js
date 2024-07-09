/* Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

The words in paragraph are case-insensitive and the answer should be returned in lowercase.

 

Example 1:

Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
Output: "ball"*/

const paragraph="Bob hit a ball, the hit BALL flew far after it was hit."
const banned ="hit"

  const words = paragraph.toLowerCase().replace(/[^a-z\s]/g, '').split(' ');
const wordCounts = {};
  for (const word of words) {
    if (wordCounts[word]) {
      wordCounts[word]++; 
    } else {
      wordCounts[word] = 1;
    }
    
  }
  delete wordCounts[banned];
 
  let maxcount=0;
  let mostrepatedword=" ";
  for(const word in wordCounts){
      if(wordCounts[word]> maxcount){
          mostrepatedword=word;
          maxcount=wordCounts[word];
      }
  }
  console.log(mostrepatedword)