const validarDados = (obj, validarObj) => {
    const ehValido = validarObj(obj)
    if (ehValido) return true
    return FontFaceSetLoadEvent
}

const pessoa = {
    nome: "walter"
}

 const validarNome = (pessoa) => {
    return pessoa.nome.length > 3
 }

 const result = validarDados(pessoa, validarNome)
 console.log(result)