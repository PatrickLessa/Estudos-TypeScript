namespace Geometria {
    export namespace Area {
        const PI = 3.14

        // para usar as funções guardadas no namespace
        // voce tem que exportar elas usando "export"
        export function circ(raio: number): number {
            return PI * Math.pow(raio, 2)
        }
    }
}