/**
 * приведение строки к машиночитаемому виду
 * 
 * 
 */
function toMachinesRead(str) {
  let strMachineRead = 
      str.replace(/\./g, "").replace(/ /g, "").toLowerCase()
return console.log(strMachineRead)
}