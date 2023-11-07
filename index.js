function calc(firstNumber, secondNumber, operation) {
  switch (operation) {
    case 1:
      console.log(
        "Operação selecionada: SOMA / Resultado:",
        firstNumber + secondNumber
      );
      break;
    case 2:
      console.log(
        "Operação selecionada: SUBTRAÇÃO / Resultado:",
        firstNumber - secondNumber
      );
      break;
    case 3:
      console.log(
        "Operação selecionada: MULTIPLICAÇÃO / Resultado:",
        firstNumber * secondNumber
      );
      break;
    case 4:
      console.log(
        "Operação selecionada: DIVISÃO / Resultado:",
        firstNumber / secondNumber
      );
      break;

    default:
      console.log(0);
      break;
  }
}

calc(5, 6, 1);
