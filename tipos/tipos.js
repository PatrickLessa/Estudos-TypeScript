"use strict";
// string
var nome = 'João';
//nome = 27
console.log(nome);
// numbers
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
