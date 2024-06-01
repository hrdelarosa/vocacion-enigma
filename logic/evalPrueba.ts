export function evaluarPrueba(arr1: number[], arr2: number[]): number {
    let resul = 0
        for(let i = 0; i < 12; i++) {
            if(arr1[arr2[i] - 1] === 0) {
                resul += 1
            }
        }
    return resul
}