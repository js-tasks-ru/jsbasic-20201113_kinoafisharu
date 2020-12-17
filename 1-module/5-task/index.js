/**
 * отсечь хвост длинной строки, заменив на троеточие
 * 
 * 
 * 
 */
function truncate(str, maxlength) {
  let strLength = str.length
  if (strLength > maxlength) {
    let shortenStr = str.slice(0, maxlength - 1)
    return `${shortenStr}…`
  }
  return str
}

console.log(truncate("Мы тренируемся усекать строки", 20))