let array1 = [,10,6,5,7,9,2]
let soma = 0

function somaElementosPares(array) {
    
    for(let i = 0; i <array.length; i++){
        if(array[i] % 2 === 0) {
            soma += array[i]
        }
    }
    console.log(soma)
}
 
somaElementosPares(array1)