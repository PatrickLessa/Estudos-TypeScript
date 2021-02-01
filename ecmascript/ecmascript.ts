// let & const
let seraQuePode = '?' 
console.log(seraQuePode)
// hoisting => quando declaramos a variavel (var) depois de tentar
// usá-la, por padrão ela será jogada pra cima. Meio que o JS 
// irá declarar ela antes de vc utilizá-la e onde VOCE declarou/inicializou
// ela vai ser apenas atribuida o valor. 
// Usando o "let", isso nao irá acontecer pq ele nao sofre o hoisting
// Nao tem pq fazer isso pq irá gerar bugs

let isCold = true
if(isCold){
    let action = 'Colocar Casaco'
    console.log(action)
}

// let tem escopo de bloco, com let ela so é visivel
// dentro do bloco onde vc declarou a variável, diferente do var
// que mesmo o TS acusando erro, pode ser acessada

const cpf: string = '123.456.789.00'
// cpf = '125.234.343.66'
console.log(cpf)

// quando vc declara uma variavel com const nao podemos
// atribuir outro valor pq ela é uma constante e só pode
// receber um valor uma vez
var segredo = 'externo'
function revelar(){
    var segredo = 'interno'
    console.log(segredo)
}
revelar()
console.log(segredo)

{
    {
        const def = 'def'
        console.log(def)
    }
}

for(let i = 0; i < 10; i++){
    console.log(i)
}
// console.log(i)

// Arrow Function
const somar = function(n1: number, n2: number): number{
    return n1 + n2
}

console.log(somar(2, 4))

const subtrair = (n1: number, n2: number):number => n1 -n2
console.log(subtrair(2, 3))

const saudacao = () => console.log('Olá')
saudacao()

// quando temos um unico parametro em uma arrow function
// podemos declarar sem os "()"
// mas quando vamos definit o tipo do parametro
// temos que colocar os "()"
const speakWith = (person:string) => console.log('Hi '+ person)
speakWith('John')

// this

// o this em funções normais nao referenciam nada
// retorna undefined
// function normalWithThis(){
//     console.log(this)
// }

// quando usamos o .bind() o que vc passar com parametro ele
// irá referenciar com o "this" usado na função
// const normalWithThisSpecial = normalWithThis.
//     bind({nome: 'Ana'})

// normalWithThisSpecial()

// o this na arrow function aponta para o this do contexto 
// antes da declarção da função arrow
// console.log(this)
// const arrowWithThis = () => console.log(this)
// arrowWithThis()

// const arrowlWithThisSpecial = normalWithThis.
//     bind({nome: 'Ana'})

// arrowWithThis()

// Parametro Padrão
function contagemRegressiva(init: number = 5,
     end: number = init -5): void{
    console.log(init)
    while (init >= end){
        init--
        console.log(init)
    }
    console.log('Fim!')
}

contagemRegressiva()
contagemRegressiva(3)

// Rest & Spread
// um operador que pega um array e espalha seus elementos
// a sintaxe é '...'
const numbers = [1, 10, 99, -5]
console.log(Math.max(...numbers))

const turmaA: string[] = ['Joao', 'Maria', 'Fernanda']
const turmaB: string[] = 
        ['Fernando', ...turmaA, 'Miguel', 'Lorena']

console.log(turmaB)