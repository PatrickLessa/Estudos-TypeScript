let canal: string = 'Gaveta'
let inscritos: number = 610245

// canal = inscritos
console.log(`canal = ${canal}`)

// let nome = 'Pedro'

function soma(a: any, b: any){
    return a + b
}

let qlqrCoisa
qlqrCoisa = 12
qlqrCoisa = 'abc'

function saudar(isManha: boolean, /* horas: number -> exemplo de noUnusedParameters*/ ): string{
    // let a = 1 -> exemplo de noUnusedLocals
    let saudacao: string
    if(isManha){
        saudacao = 'Bom dia'
    }else{
        saudacao = "boa vida"
    }
    return saudacao
}