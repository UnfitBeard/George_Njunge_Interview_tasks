const inputString = "interview";
const getCounts = (arr) => {
    const counts = {};
  
    for (const letter of arr) {
      if (counts[letter]) {
        counts[letter]++;
      } else {
        counts[letter] = 1;
      }
    }
    for (const [letter, count] of Object.entries(counts)){
        console.log(letter+":"+count);
      }  
}
getCounts(inputString);