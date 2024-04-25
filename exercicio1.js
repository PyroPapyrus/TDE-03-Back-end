let array1 = [1,2,10,6,8]

function encontrarMaiorElemento(array) {
    
    return Math.max.apply(null, array)

}

const maior = encontrarMaiorElemento(array1)
console.log(maior)