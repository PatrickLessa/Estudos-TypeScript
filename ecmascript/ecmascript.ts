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

// agrupando argumentos/parametros com o spread
// se formos usar o spread em parametro de funções, devemos
// passar ele por ultimo, caso contrario irá gerar bugs
function retornarArray(...args: number[]): number[]{
    return args
}

const numeros = retornarArray(1, 2, 3, 5, 7)
console.log(numeros)
console.log(retornarArray(...numbers))

// Reste & Spreas em Tuplas
const tupla: [number, string, boolean] = [1, 'abc', false]

function tuplaParam1(a: number, b: string, c: boolean): void {
    console.log(`1) ${a} ${b} ${c}`)
}

tuplaParam1(...tupla);

function tuplaParam2(...params: [number, string, boolean]): void {
    console.log(Array.isArray(params))
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}

tuplaParam2(...tupla)

// Destructuring => pegar dados de uma estrutura e 
// expor estes dados de uma forma mais simples
// Array
const carac = ['Motor Zetec 1.8', 2020]

// pegando os dados do array (manual)
// const motor = carac[0]
// const ano = carac[1]

// pegando os dados do array usando Destructuring
const [motor, ano] = carac
console.log(motor, ano)

// Destructuring (Objeto)
const item = {
    nome: 'SSD 480BG',
    preco: 200.0,
    carac: {
        w: 'Importado'
    }
}

const nomeItem = item.nome
const preco = item.preco

//Destructuring (usando Alias)
const { nome: n, preco: p, carac: { w } } = item
console.log(n, p, w)

// Template String 
const user: string = 'SuporteCod3r'
const notify: string = '10'

// const welcome = 'Welcome ' + user + ' Notify: ' + notify

const welcome = `
    Welcome ${user}
    Notifys: ${parseInt(notify) > 9 ? '+9': notify}
` 
console.log(welcome)
console.log(`${(1+1) *30}`)
console.log(`
    Motor: ${carac[0]}
    Ano: ${carac[1]}
`)

// Desafio ECMAScript
//Ex 1
const dobro = (valor: number):number => valor * 2
console.log(dobro(10))

// Ex2
// Parametro Padrão => quando vc seta um valor direto no 
// parametro na assinatura do método, quando vc chamar ele
// não necessariamente vc precisara passar o parametro
const dizerOla = (nome: string = 'Pessoa'): void => {
    console.log("Ola, " + nome)
}
dizerOla()
dizerOla("Anna")

// Ex 3
const nums = [-3, 33, 38, 5]
console.log(Math.min(...nums))

// Ex 4
const array = [55, 20]
array.push(...nums)
console.log(array)

// Ex 5
const notas = [8.5, 6.3, 9.4]
const [nota1, nota2, nota3] = notas
// var notas1 = notas[0]
// var notas2 = notas[1]
// var notas3 = notas[2]
console.log(`
    Nota 1: ${nota1}
    Nota 3: ${nota2}
    Nota 2: ${nota3}
`)

// Ex 6
const cientista = {primeiroNome: "Will", experiencia: 12}
const {primeiroNome: pn, experiencia: e} = cientista
// var primeiroNome = cientista.primeiroNome
// var experiencia = cientista.experiencia

console.log(`
    Primeiro Nome: ${pn},
    Experiencia: ${e}
`)

// Callback

function wait3s(callback: (dado: string) => void){
    setTimeout(() => {
        callback('3 seconds later...')
    }, 3000)
}

wait3s(function(result: string){
    console.log(result)
})

function wait3sPromise(){
    return new Promise((resolve: any) => {
        setTimeout(() => {
            resolve('3 seconds later promise...')
        }, 3000)
    })
}

wait3sPromise()
    .then(dado => console.log(dado));

fetch('https://swapi.dev/api/people/1')
    .then(res => res.json())
    .then(character => character.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(movie => console.log(movie.title))
    .catch(res => console.log(res))