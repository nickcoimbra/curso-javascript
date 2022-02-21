function geraTabuada() {
  var numeroTabuada = Number(
    window.document.getElementById('numeroTabuada').value
  )
  var elem = window.document.getElementById('tabuada')
  elem.innerHTML = ''
  var resultado = 0
  for (i = 1; i <= 10; i++) {
    resultado = i * numeroTabuada
    elem.innerHTML += `${i} X ${numeroTabuada} = ${resultado} ` + '<br />'
  }
}
