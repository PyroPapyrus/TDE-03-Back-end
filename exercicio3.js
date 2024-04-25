let numeros = [1, 2, 3, 4, 5];

function dobrar(numero) {
    return numero * 2;
  }

function mapearArray(func, arrays) {
    let newArray = []

    for (let i = 0; i < arrays.length; i++) {
        newArray.push(func(arrays[i]));
    }
    return newArray
}

let a = mapearArray(dobrar,numeros)

console.log(a)
