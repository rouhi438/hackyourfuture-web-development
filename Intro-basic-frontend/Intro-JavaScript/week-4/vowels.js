function vowelsCount(text) {
  //let counter = [];
  let counter = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < text.length; i++) {
    for (let a = 0; a < vowels.length; a++) {
      if (text[i] === vowels[a]) {
        //counter.push(text[i]);
        counter++;
      }
    }
  }
  return counter;
}
console.log(vowelsCount("redfiogdo"));
