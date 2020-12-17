/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sumOfSalaries = 0;

  for (let key in salaries) {
    

    if (let isSalary = typeof salaries[key] === 'number') {
      sumOfSalaries += salaries[key];
    }
  }

  return sumOfSalaries;
}
