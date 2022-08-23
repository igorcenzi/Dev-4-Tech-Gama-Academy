const calculaIMC = () => {
  let peso = parseFloat(document.querySelector("#peso").value);
  let altura = parseFloat(document.querySelector("#altura").value);
  let resultado = document.querySelector("#resultado");
  let imc = peso / (altura * altura);
  let message;
  if (imc < 18.5) message = "Peso Baixo";
  else if (imc >= 18.5 && imc < 25) message = "Peso Normal";
  else if (imc >= 25 && imc < 30) message = "Sobrepeso";
  else if (imc >= 30 && imc < 35) message = "Obesidade (Grau I)";
  else if (imc >= 35 && imc < 40) message = "Obesidade (Grau II)";
  else if (imc >= 40) message = "Obesidade (Grau III)";
  resultado.innerText = imc.toFixed(2) + " " + message;
};
