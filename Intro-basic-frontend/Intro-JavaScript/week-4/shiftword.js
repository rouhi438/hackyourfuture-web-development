// decoding of magic text😜.
const secretAgent = "bccbt"; //(a->b , b->c , b->c , a->b , s->t)
//decode(secretAgent);
function decode(message) {
  let doCodedMessage = "";

  for (let i = 0; i < message.length; i++) {
    const letter = message[i]; // b

    const code = letter.charCodeAt(0); // 98

    const convertCode = code - 1; // 97

    const convertedLetter = String.fromCharCode(convertCode);

    doCodedMessage += convertedLetter;
  }

  return doCodedMessage;
}
console.log(decode(secretAgent));
