/* eslint-disable no-useless-escape */
export const detectSentence = (paragraph) => {
  let sentenceRegex = /[^\.!\?]+[\.!\?]+/g;
  const sentences = paragraph.match(sentenceRegex);
  return sentences;
};
