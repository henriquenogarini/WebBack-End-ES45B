//Exercício 01

let nome = "Henrique Cesar Nogarini de Carvalho";

//Exercício 02

var idade = 25;

//Exercício 03

var idade = 26;

//Exercício 04

//let nome = "João da Silva";
//Não dá certo, pois a variável nome já foi declarada anteriormente com o valor "Henrique Cesar Nogarini de Carvalho",
//Cannot redeclare block-scoped variable 'nome'.ts(2451)

//Exercício 05

alert("Olá, Mundo!");

//Exercício 06

console.log("Henrique Cesar Nogarini de Carvalho");

//Exercício 07

let nota = 8;

if (nota >= 7) {
    console.log("É maior ou igual a 7");
}else {
    console.log("É menor que 7");
}

//Exercício 08

let numero = 352;

if (numero % 2 == 0) {
    console.log("É par");
}else {      
    console.log("É ímpar");
}

//Exercício 09

let numero1 = 10;
let numero2 = 20;

console.log("A soma é: " + (numero1 + numero2));

//Exercício 10

function multi(x, y) {
    return x * y;
}

console.log("A soma é: " + multi(10, 20));

//Exercício 11

function async(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function mostrarMensagem() {
    await async(1000);
    console.log("Mensagem entregue após esperar segundo");
  }
  
  mostrarMensagem();

//Exercício 12

let x = 10;
x += 5;

console.log(x);

//Exercício 13

let idade = 26;

if (idade >= 18) {
  console.log("Acesso permitido");
} else {
  console.log("Acesso negado");
}

//Exercício 14

let numeroP = 5;
let resultado = numeroP >= 0 ? "Positivo" : "Negativo";

console.log(resultado);

//Exercício 15

let nomes = ["Henrique", "Aline", "Holly"];
console.log(nomes[1]);

//Exercício 16

let nomes2 = ["Henrique", "Aline", "Holly"];
nomes2.push("Lucas");

console.log(nomes2);

//Exercício 17

let nomes3 = ["Henrique", "Aline", "Holly"];
nomes3.shift();

console.log(nomes3);

//Exercício 18

let pessoa = {
    nome: "Henrique",
    idade: 26,
};

console.log(pessoa);


//Exercício 19

let pessoa2 = {
    nome: "Henrique",
    idade: 26,
};

console.log(pessoa.idade);

//Exercício 20

for (let i = 1; i <= 5; i++) {
    console.log(i);
  }

//Exercício 21

function falar(nome) {
    console.log("Olá, " + nome);
  }
  
  falar("Henrique");

//Exercício 22

let promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Sucesso");
    }, 2000);
  });

  console.log(promessa);
  
  promessa.then(mensagem => {
    console.log(mensagem);
  });

//Exercício 23

setTimeout(() => {
    console.log("Tempo esgotado");
  }, 3000);
  
//Exercício 24

let logado = true;

if (logado) {
  console.log("Bem-vindo!");
} else {
  console.log("Acesso negado. Faça login.");
}

//Exercício 25

let nome4 = "Henrique";

console.log(typeof nome4); 

//Exercício 26

let nome5 = prompt("Qual é o seu nome ? \n");
alert("Olá, " + nome5 + "!");

//Exercício 27

let serHumano = "Henrique";
let idade2 = 26;

console.log(`Meu nome é ${serHumano} e tenho ${idade2} anos`);

//Exercício 28

const valor = 100;
valor = 200;

//Não é possível reatribuir um valor a uma constante, pois ela é imutável.
//TypeError: Assignment to constant variable.

//Exercício 29

let usuario = prompt("Digite o nome de usuário: \n");
let senha = prompt("Digite a senha: \n");

if (usuario === "admin" && senha === "123") {
  alert("Acesso liberado");
} else {
  alert("Acesso negado");
}

//Exercício 30

function verificarIdade(idade3) {
    return idade3 >= 18 ? "maior de idade" : "menor de idade";
  }
  
  console.log(verificarIdade(26));
  console.log(verificarIdade(12));

