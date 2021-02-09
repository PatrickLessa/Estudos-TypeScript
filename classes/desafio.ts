// Exercício 1 - Classe

class Moto {
    public nome: string
    public velocidade: number = 0

    constructor(nome: string){
        this.nome = nome 
    }

    public buzinar(): void {
        console.log('toooooooooooooot')
    }

    public acelerar(delta: number): number{
        return this.velocidade += delta
    }
}

const moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)

// Exercício 2 - Herança

abstract class Objeto {
    protected base: number = 0
    protected alt: number = 0

    constructor(base: number, alt: number){
        this.base = base
        this.alt = alt
    }

    abstract area(): number
}

class Retangulo extends Objeto{
    
    constructor(base: number, alt: number){
        super(base, alt)
    }
    
    area(): number {
        return this.base * this.alt
    }
    
}

const ret = new Retangulo(5, 10)
console.log(ret.area())
 
// Exercício 3 - Getters & Setters

class Estag {
    private _firstName: string = ''

    get firstName(): string{
        return this._firstName
    }

    set firstName(firstName: string){
        if(firstName.length >= 3){
            this._firstName = firstName
        }else{
            this._firstName = ''
        }
    }
}

const estagiario = new Estag()
 
console.log(estagiario.firstName)
estagiario.firstName = 'Le'
console.log(estagiario.firstName)
estagiario.firstName = 'Leonardo'
console.log(estagiario.firstName)