// string
let nome: string = 'João'
//nome = 27
console.log(nome)

// numbers
let idade: number = 27
//idade = 'Idade'
idade = 27.5
console.log(idade)

// boolean
let possuiHobbies: boolean = true
//possuiHobbies = 1
console.log(possuiHobbies)

// tipos explicitos (deixando as variaveis com tipo explicito)
let minhaidade: number
minhaidade = 27
console.log(minhaidade)
//minhaidade = '27 anos'
// quando nao inicializamos a variavel com um valor direto, 
// é possivel deixar esta variavel dinamica sem ter o erro
// de tipagem

// array
let hobbies: any[] = ["Cozinhar", "tocar guitarra"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, "string"]
// hobbies = 100
console.log(hobbies)

// tupla => um array de tipos com qtd pré definida (em TS)
// dentro dos "[]" se define a qtd e os tipos dos elementos dentro da tupla
let endereco: [string, number, string] = ["Av principal", 99, ""]
console.log(endereco)

endereco = ["Rua secundaria", 1257, "Bloco C"]
console.log(endereco)

// enum => estrutura que define valores pré definidos
enum Cor {
    Cinza, // 0
    Verde = 100, // 100
    Azul = 10, // 2
    Laranja,
    Amarelo,
    Vermelho = 100
}
// conseguimos definir qual o valor numérico do enum atribuindo
// á ele

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Vermelho, Cor.Verde)

// any => qualquer tipo
let carro: any = "BMW"
console.log(carro)
carro = { marca: "BMW", ano: 2019 }
console.log(carro)
