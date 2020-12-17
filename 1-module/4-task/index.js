/**
 * приведение строки к машиночитаемому виду
 * 
 * проверка строки на совпадение с образцом
 */
function toMachinesRead(str) {
  let strMachineRead = 
      str.replace(/\./g, "").replace(/ /g, "").toLowerCase()
return console.log(strMachineRead)
}

toMachinesRead("Мы тренируем машиночитаемость.")
