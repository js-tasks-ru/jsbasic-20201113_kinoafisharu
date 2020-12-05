function isValid(oneWord) {
  return !!oneWord && !oneWord.includes(' ') && 
  oneWord.length >= 2;
}