//Exercicio 1
let nascimento = parseInt(prompt("Digite o ano do nascimento:"));
let anoAtual = new Date().getFullYear();

if (anoAtual < nascimento) alert("Data inválida");
else {
  if (anoAtual - nascimento >= 16) alert("Pode votar!");
  else alert("Não pode votar!");
}

//Exercício 2
let valor = parseInt(prompt("Digite um valor:"));

if (valor % 2 === 0) alert("Par!");
else alert("Ímpar!");

//Exercício 3
let senha = prompt("Digite a senha:");

if (senha === "1234") alert("ACESSO PERMITIDO!");
else alert("ACESSO NEGADO");

//Exercício 4
let quantidade = parseInt(prompt("Digite a quantidade de maçãs:"));

if (quantidade < 12) alert(`Total: ${0.3 * quantidade}`);
else alert(`Total: ${0.25 * quantidade}`);

//Exercicio 5
let valor1 = prompt("Insira o primeiro valor");
let valor2 = prompt("Insira o segundo valor");
let valor3 = prompt("Insira o terceiro valor");
let maior, meio, menor;

if (valor1 <= valor2 && valor1 <= valor3) {
  menor = valor1;
} else if (valor2 <= valor1 && valor2 <= valor3) {
  menor = valor2;
} else if (valor3 <= valor1 && valor3 <= valor2) {
  menor = valor3;
}

if (valor1 >= valor2 && valor1 >= valor3) {
  maior = valor1;
} else if (valor2 >= valor1 && valor2 >= valor3) {
  maior = valor2;
} else if (valor3 >= valor1 && valor3 >= valor2) {
  maior = valor3;
}

if (valor1 <= maior && valor1 >= menor) {
  meio = valor1;
} else if (valor2 <= maior && valor2 >= menor) {
  meio = valor2;
} else if (valor3 <= maior && valor3 >= menor) {
  meio = valor3;
}

alert(`Menor: ${menor}, Meio: ${meio}, Maior: ${maior}`);
