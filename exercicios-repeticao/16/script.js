function contar() {
  let numeroInicial = window.document.getElementById('numeroInicial') //inicialização da variaveis sem conversão para Number, para permitir validação por length.
  let numeroFinal = window.document.getElementById('numeroFinal')
  let numeroDePassos = window.document.getElementById('numeroDePassos')
  let elem = window.document.getElementById('resultado')

  if (
    numeroInicial.value.length == 0 ||
    numeroFinal.value.length == 0 ||
    numeroDePassos.value.length == 0
  ) {
    elem.innerHTML = 'Impossível contar!' //Validação se caso algum campo não for digitado.
  } else {
    elem.innerHTML = 'Contando: <br>'
    let numInicial = Number(numeroInicial.value) // Conversão para Number da variaveis.
    let numFinal = Number(numeroFinal.value)
    let numPassos = Number(numeroDePassos.value)
    if (numPassos <= 0) {
      alert('Passo 0 será considerado como 1') //Validação se caso passo for 0, deverá considerar como passo 1.
      numPassos = 1
    }
    // ORDEM CRESCENTE
    if (numInicial < numFinal) {
      for (let i = numInicial; i <= numFinal; i += numPassos) {
        elem.innerHTML += `${i} 👉`
      }
    } else {
      // ORDEM DECRESCENTE
      for (let i = numInicial; i >= numFinal; i -= numPassos) {
        elem.innerHTML += `${i} 👉`
      }
    }

    elem.innerHTML += `🏁` //fim de curso
  }
}
