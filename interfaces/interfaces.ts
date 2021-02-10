interface Humano {
    // propriedade obrigatoria
    nome: string,
    // propriedade opcional
    idade?: number
    // propriedade dinamica
    [prop: string]: any
    // método
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano){
    console.log('Olá ' + pessoa.nome)
}

function changeName(pessoa: Humano){
    pessoa.nome = 'Joana'
}

const pessoa: Humano = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string){
        console.log('Olá, ' + this.nome + ' ' + sobrenome)
    }
}

saudarComOla(pessoa)
changeName(pessoa)
saudarComOla(pessoa)
// saudarComOla({ nome: 'jonas', idade: 27, alt: 1.75 })
pessoa.saudar('Skywalker')

// Usando Classes 
class Client implements Humano {
    nome: string = ''
    lastShop: Date = new Date
    saudar(sobrenome: string){
        console.log('Olá, ' + this.nome + ' ' + sobrenome)
    }
}

const myClient = new Client()
myClient.nome = 'Han'
saudarComOla(myClient)
myClient.saudar('Solo')
console.log(myClient.lastShop)

// Interface função
interface Calc {
    (a: number, b: number): number
}

let potencia: Calc

potencia = function(base: number, exp: number): number {
    return Array(exp).fill(base).reduce((t, a) => t * a)
}

console.log(potencia(3, 10))

// Usando Herança
interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B {
    c(): void
}

class RealA implements A {
    a(): void {}
}

class RealAB implements A, B {
    a(): void {}
    b(): void {}
}

class RealABC implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
}

abstract class abstrataABD implements A, B{
    a():void {}
    b():void {}
    abstract d(): void
}

interface Object {
    log(): void
}

Object.prototype.log = function (){
    console.log(this.toString())
}

const x = 2
const y = 3
const z = 4

x.log()
y.log()
z.log()

const cli = { nome: 'Pedro', toString() {return this.nome} }
cli.log()