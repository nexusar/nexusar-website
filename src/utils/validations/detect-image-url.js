export const detectImageUrl = (content) => {
  let imageUrlRegex = /(https)?:(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/;
  return content.match(imageUrlRegex);
};
