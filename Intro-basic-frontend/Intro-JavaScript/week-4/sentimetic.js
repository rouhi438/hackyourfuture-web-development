const positiveWordsList = ["happy", "awesome", "super", "good", "nice"];
const negativeWordsList = ["sad", "bad", "terrible", "awful", "boring"];

function getSentimentScore(text) {
  const words = text.toLowerCase().split(" "); // convert the TEXT to array of words

  const positiveWords = words.filter((word) =>
    positiveWordsList.includes(word)
  );

  const negativeWords = words.filter((word) =>
    negativeWordsList.includes(word)
  );
  const score = positiveWords.length - negativeWords.length;
  return {
    score: score,
    positiveWords: positiveWords,
    negativeWords: negativeWords,
  };
}
const text = " I am super happy but sometimes boring and terrible";
const sentimentScoreObject = getSentimentScore(text);
console.log(sentimentScoreObject);
