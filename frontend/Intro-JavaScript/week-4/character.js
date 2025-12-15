// Getting number of each character
let string = "happy";
function getFrequency(string) {
  var freq = {};
  for (var i = 0; i < string.length; i++) {
    var character = string.charAt(i);
    if (freq[character]) {
      freq[character]++;
    } else freq[character] = 1;
  }
  return freq;
}
console.log(getFrequency(string));

console.log("-----------------next command------------");
// Again getting the number of each character by another way

function getCharacterFrequencies(text) {
  const freq = {};
  for (const c of text) {
    if (freq[c]) {
      freq[c] = freq[c] + 1;
    } else {
      freq[c] = 1;
    }

    // can use also ternary operator
    // freq[c] = freq[c] ? freq[c] + 1 : 1;
    // freq[c] = (freq[c] || 0) + 1;
  }
  return freq;
}
console.log(getCharacterFrequencies("fatimajhotirasmi"));
