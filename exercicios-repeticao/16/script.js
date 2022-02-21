function contar() {
  var numeroInicial = Number(
    window.document.getElementById('numeroInicial').value
  )
  var numeroFinal = Number(window.document.getElementById('numeroFinal').value)
  var numeroDePassos = Number(
    window.document.getElementById('numeroDePassos').value
  )
  var elem = window.document.getElementById('resultado')
  if (numeroInicial == 0) {
    elem.innerHTML = 'Impossível contar!' //Validação se caso numero inicial for 0.
  } else if (numeroDePassos == 0) {
    alert('Passo 0 será considerado como 1') //Validação se caso passo for 0, deverá considerar como passo 1.
    numeroDePassos = 1
    var somaDaConta = numeroInicial
    elem.innerHTML = `${numeroInicial} 👉 `
    for (i = 1; i < numeroFinal; i++) {
      somaDaConta = numeroDePassos + somaDaConta
      elem.innerHTML += `${somaDaConta} 👉`
    }
  } else {
    var somaDaConta = numeroInicial
    elem.innerHTML = `${numeroInicial} 👉 `
    for (i = 1; i < numeroFinal; i++) {
      somaDaConta = numeroDePassos + somaDaConta
      elem.innerHTML += `${somaDaConta} 👉`
    }
    elem.innerHTML += `🏁` //fim de curso
  }
}
