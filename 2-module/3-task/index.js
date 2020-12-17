let calculator = {
  read(a, b) {
    this.a1 = a;
    this.b2 = b;
  },

  sum() {
    return this.a1 + this.b2;
  },

  mul() {
    return this.a1 * this.b2;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
console.log(calculator.read(3, 8))
console.log(calculator.sum(3, 8))