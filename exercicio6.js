const gerarLista = (n, gerarNumero) => {
    const newArr = []
    for(let i = 0; i < n; i++) {
        const element = gerarNumero(i);
        newArr.push(element)
    }
    return newArr
}

const arrGerado = gerarLista(10, (n) => n * 2)
console.log(arrGerado)