// Aluno: Henrique Cesar Nogarini de Carvalho
// RA: 2102374

// Exercício 01
let aluno = {
  nome: "Henrique Nogarini",
  idade: 26,
  curso: "Engenharia de Software",
};

// Exercício 02
aluno.matriculado = true;

// Exercício 03
aluno.curso = "Análise e Desenvolvimento de Sistemas";

// Exercício 04
delete aluno.idade;

// Exercício 05

let nomeAluno = aluno.nome;

// Exercício 06

let alunos = [
  {
    nome: "João Roberto",
    nota: 9.0,
  },
  {
    nome: "Hamilton Silva",
    nota: 8.5,
  },
{
    nome: "Maria Clara",
    nota: 5.0,
  }
];

// Exercício 07
let nomesMap = alunos.map(aluno => aluno.nome);

// Exercício 08
let alunoAprovado = alunos.filter(aluno => aluno.nota >= 7);

// Exercício 09
let alunoParaJSON = JSON.stringify(aluno);

// Exercício 10
let alunoDeJSON = JSON.parse(alunoParaJSON);

// Exercício 11
let livro = {
  titulo: "Entendendo Algoritmos",
  autor: "Aditya Y. Bhargava",
  anoPublicacao: 2017,
  editora: {
    nome: "novatec",
    cidade: "São Paulo"
  }
};

// Exercício 12
let nomeEditora = livro.editora.nome;

// Exercício 13
function listarPropriedades(obj) {
  return Object.keys(obj);
}

// Exercício 14
function atualizarObjeto(obj, chave, valor) {
  obj[chave] = valor;
}

// Exercício 15
function removerPropriedade(obj, chave) {
  delete obj[chave];
}