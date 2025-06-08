function operar(operacion) {
  const num1 = parseFloat(document.getElementById("numero1").value);
  const num2 = parseFloat(document.getElementById("numero2").value);
  let resultado = 0;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor ingresa ambos números.");
    return;
  }

  switch (operacion) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        alert("No se puede dividir entre 0.");
        return;
      }
      resultado = num1 / num2;
      break;
  }

  document.getElementById("resultado").textContent = resultado;
}
