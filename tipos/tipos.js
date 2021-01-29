"use strict";
// string
var nome = 'João';
//nome = 27
console.log(nome);
// numbers
// os numbers aceitam tanto valores inteiros quanto decimais
var idade = 27;
//idade = 'Idade'
idade = 27.5;
console.log(idade);
// boolean
var possuiHobbies = true;
//possuiHobbies = 1
console.log(possuiHobbies);
// tipos explicitos (deixando as variaveis com tipo explicito)
var minhaidade;
minhaidade = 27;
console.log(minhaidade);
//minhaidade = '27 anos'
// quando nao inicializamos a variavel com um valor direto, 
// é possivel deixar esta variavel dinamica sem ter o erro
// de tipagem
// array
var hobbies = ["Cozinhar", "tocar guitarra"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, "string"];
// hobbies = 100
console.log(hobbies);
// tupla => um array de tipos com qtd pré definida (em TS)
// dentro dos "[]" se define a qtd e os tipos dos elementos dentro da tupla
var endereco = ["Av principal", 99, ""];
console.log(endereco);
endereco = ["Rua secundaria", 1257, "Bloco C"];
console.log(endereco);
// enum => estrutura que define valores pré definidos
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
// conseguimos definir qual o valor numérico do enum atribuindo
// á ele
var minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Vermelho, Cor.Verde);
// any => qualquer tipo
var carro = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019 };
console.log(carro);
// funções
// consigo definir o tipo de retorno (igual JAVA)
function returnName() {
    return nome;
}
console.log(returnName());
// variavel que nao tem return
function sayHi() {
    console.log('Hi');
}
sayHi();
// devemos passar a tipagem nos parametros
function multiply(numA, numB) {
    return numA * numB;
}
console.log(multiply(2, 4));
// tipo função
// quando falamos que uma variavel é do tipo "função"
// fazemos uma sintaxe parecida com arrow function
// onde definimos a qtd de parametro e o retorno. Exemplo: 
var calculo; // após a flecha, passamos o tipo de retorno
calculo = multiply;
console.log(calculo(4, 7));
// objetos
var usuario = {
    nome: 'Jucão',
    idade: 27
};
console.log(usuario);
usuario = {
    nome: 'Maria',
    idade: 26
};
console.log(usuario);
// definindo o tipo da var
var funcionario;
var funcionario2;
// atribuindo os valores
funcionario = {
    supers: ["Alvaro", "Marjoel"],
    // podemos criar a function direto, mas podemos atribuir
    // com funções criadas por fora
    baterPonto: ponto
};
funcionario2 = {
    supers: ["Puiggi", "Margerito"],
    // podemos criar a function direto, mas podemos atribuir
    // com funções criadas por fora
    baterPonto: ponto
};
// criando a function
function ponto(horario) {
    if (horario <= 8) {
        return 'Ponto normal';
    }
    else {
        return 'Fora do horario';
    }
}
console.log(funcionario.supers);
console.log(funcionario.baterPonto(10));
console.log(funcionario.baterPonto(8));
// Union Types => onde podemos dizer que uma var pode receber tipos diferente
// a sintaxe é usada com o pipe ("|"), como no exemplo
var nota;
nota = 10;
console.log("Minha nota \u00E9 " + nota);
nota = '10';
console.log("Minha nota \u00E9 " + nota);
// checando tipos
var valor = 30;
// checagem manual
if (typeof valor === "number") {
    console.log("é um number");
}
else {
    console.log(typeof valor);
}
// retorno "never" => faz com que a function fique em loop (nunca saia da func)
// ou termine com erro
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'Sabão',
    preco: 6,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('preço inválido');
        }
    }
};
produto.validarProduto();
