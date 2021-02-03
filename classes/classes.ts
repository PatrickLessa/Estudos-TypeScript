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