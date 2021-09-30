import { detectImageUrl } from '../validations/detect-image-url';
import { detectSentence } from '../validations/detect-sentence';
import medium from '../../../src/assets/images/medium.png';

export const blogHelper = (feedItem) => {
  const contentEncoded = feedItem['content:encoded'];
  let contentSnippet = feedItem['content:encodedSnippet'];

  let coverImageUrl = detectImageUrl(contentEncoded)[0];
  if (!coverImageUrl) coverImageUrl = medium;

  let subHeader =
    'Medium is an open platform where readers find dynamic thinking, and where expert and undiscovered voices can share their writing on any topic.';
  contentSnippet = contentSnippet.substring(contentSnippet.indexOf('\n') + 1);
  let sentences = detectSentence(contentSnippet);
  for (let sentence of sentences)
    if (sentence.length >= 140) {
      subHeader = sentence.trim();
      break;
    }

  return { subHeader, coverImageUrl };
};
