class Data {
    // public por padrão
    day: number
    mounth: number 
    year: number

    constructor(day: number = 1,
         mounth: number = 1, year: number = 1970) {
        this.day = day
        this.mounth = mounth 
        this.year = year
    }
}

const birthday = new Data(3)
birthday.day = 4
console.log(birthday.day)
console.log(birthday)

const casamento = new Data // posso omitir os parenteses
casamento.year = 2017
console.log(casamento)


class DataExpert {
    
    constructor(public day: number = 1,
         public mounth: number = 1, 
         public year: number = 1970) {}
}

const birthdayExpert = new DataExpert(3)
birthdayExpert.day = 4
console.log(birthdayExpert.day)
console.log(birthdayExpert)

const casamentoExpert = new DataExpert // posso omitir os parenteses
casamentoExpert.year = 2017
console.log(casamentoExpert)

// Desafio
class Product {
    constructor(public nome: string, 
        public preco: number, public desc: number = 0){}
    
    public resum(): string {
        return `
            Nome: ${this.nome}
            Preço: R$${this.precoWithDesc().toFixed(2)}
            Desconto: ${this.desc * 100}% off
        `
    }

    public precoWithDesc(): number{
        return this.preco * (1 - this.desc)
    }
}

const prod1 = new Product('Caneta BIC Preta', 4.20)
prod1.desc = 0.06
console.log(prod1.resum())

const prod2 = new Product('Caderno', 10, 0.15)
console.log(prod2.resum())

class Car {
    private currentSpeed: number = 0

    constructor(public marca: string, public modelo: string, 
        private maxSpeed: number = 200){}

    protected alterSpeed(delta: number): number{
        const newSpeed = this.currentSpeed + delta
        const validSpeed = newSpeed >= 0
            && newSpeed <= this.maxSpeed
        
        if(validSpeed){
            this.currentSpeed = newSpeed
        } else{
            this.currentSpeed = delta > 0 ? this.maxSpeed : 0
        }

        return this.currentSpeed
    }

    public accelerate(): number {
        return this.alterSpeed(5)
    }

    public slowDown(): number {
        return this.alterSpeed(-5)
    }    
}

const car1 = new Car('Ford', 'Ka', 185)
Array(50).fill(0).forEach(() => car1.accelerate())
console.log(car1.accelerate())

Array(30).fill(0).forEach(() => car1.slowDown())
console.log(car1.slowDown())

// simular erros
// car1.currentSpeed = 300
// console.log(car1.currentSpeed)

// Herança
class Ferrari extends Car {

    constructor(modelo: string, maxSpeed: number) {
        super('Ferrari', modelo, maxSpeed)
        // ...
    }

    public accelerate(): number {
        return this.alterSpeed(20)
    }

    public slowDown(): number {
        return this.alterSpeed(-15)
    }   
}

const f40 = new Ferrari('F40', 324)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.accelerate())
console.log(f40.accelerate())
console.log(f40.accelerate())
console.log(f40.slowDown())
console.log(f40.slowDown())
console.log(f40.slowDown())

// Getters & Setters
class Person {
    private _age: number = 0

    get age(): number {
        return this._age
    }

    set age(age: number) {
        if(age >= 0 && age <= 120){
            this._age = age
        }
    }
}

const p1 = new Person
// usando o set
p1.age = 10
//usando o get
console.log(p1.age)

p1.age = -3
console.log(p1.age)

// Atributos e metodos estaticos

class Mathematic {
    static PI: number = 3.1416

    static areaCirc(raio: number): number{
        return this.PI * raio * raio
    }
}

// const m1 = new Mathematic()
// m1.PI = 4.2
// console.log(m1.areaCirc(4))

console.log(Mathematic.areaCirc(4))

// Classes Abstratas

abstract class Calculo {
    protected result: number = 0

    abstract execute(...numbers: number[]): void

    getResult(): number {
        return this.result
    }
}

class Soma extends Calculo {

    execute(...numbers: number[]): void {
        this.result = numbers.reduce((t, a) => t + a)
    }
    
}

class Multi extends Calculo {

    execute(...numbers: number[]): void {
        this.result = numbers.reduce((t, a) => t * a)
    }
    
}

let c1: Calculo = new Soma()
c1.execute(2, 3, 4, 5)
console.log(c1.getResult())

c1 = new Multi()
c1.execute(2, 3, 4, 5)
console.log(c1.getResult())

// Construtor Privado & Singleton 

class Unity {
    private static instance: Unity = new Unity
    private constructor() {}

    static getInstance(): Unity{
        return Unity.instance
    }

    now(){
        return new Date
    }
}

// const wrong = new Unity()

console.log(Unity.getInstance().now()) 

// Somente leitura

class AirPlane {
    public readonly model: string
    
    constructor(model: string, 
        public readonly prefix: string){
        this.model = model
    }
}

const turboHelice = new AirPlane('Tu-114', 'PT-ABC')
// turboHelice.model = 'DC-6'
// turboHelice.prefix = 'KAKKA'
console.log(turboHelice) 