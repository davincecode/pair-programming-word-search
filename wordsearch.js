// pair programming with Rhiannon & Vince
const wordSearch = (letters, word) => {
  if (letters.length < 1 || word.length < 1) return false;

  const horizontalJoin = letters.map((letterSearch) => letterSearch.join(""));
  const verticalJoin = letters[0].map((col, index) =>
    letters.map((row) => row[index])
  );

  const verticalSearch = verticalJoin.map((letterSearch) =>
    letterSearch.join("")
  );
  //console.log(verticalSearch);

  for (let letter of horizontalJoin) {
    //console.log(letter);
    if (letter.includes(word)) return true;
    else {
      for (let letter of verticalSearch) {
        //console.log(letter);
        if (letter.includes(word)) return true;
      }
    }
  }
  return false;
};
module.exports = wordSearch;
