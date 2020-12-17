/**
 * Первую букву в верхний регистр 
 * The first letter to uppercase
 */
function upperCaseFirst(str) {
  //использованы встроенные методы: вынуть первый символ,
  // перевести в верхний регистр, вынуть остаток строки
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
}