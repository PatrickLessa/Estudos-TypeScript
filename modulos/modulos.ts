// import { areaRetangulo } from './retangulo'
// import { areaCirc } from './circunferencia'

// usando o export default no arquivo importado
// eu posso fazer a importação sem o uso de {}
import areaRetangulo  from './retangulo'
// usando alias para as funcoes importadas
import { areaCirc as circ} from './circunferencia'

console.log("Modulo carregado....")
console.log(areaRetangulo(7, 12))
console.log(circ(2))

// carregando modulos usando o sistema de modulos do commonJS
const { digaOi } = require('./novo')
console.log(digaOi('Ana'))