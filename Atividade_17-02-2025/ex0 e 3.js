let numeros = [1,2,3,4,5,6,7,8,9]
let pares = []

numeros.forEach(function(numeros){
    if (numeros % 2 == 0) {
        pares.push(numeros)
    }
})

console.log(pares)
