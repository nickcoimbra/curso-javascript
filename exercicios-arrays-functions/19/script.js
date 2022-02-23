var numerosParaAnalise = []
function adicionarNumero() {
  let num = window.document.getElementById('num')
  let feedbackNumAdc = window.document.getElementById('feedbackNumAdc')
  let numExisteNoVetor = false
  if (window.document.getElementById('num').value !== '') {
    if (Number(num.value) >= 1 && Number(num.value) <= 100) {
      for (
        let i = 0;
        i < numerosParaAnalise.length ||
        numerosParaAnalise[i] == Number(num.value);
        i++
      ) {
        if (Number(num.value) == numerosParaAnalise[i]) {
          alert(`${Number(num.value)} já foi digitado, tente outro número!`)
          // Valida se no array um numero igual ao digitado
          numExisteNoVetor = true
        }
      }
      if (numExisteNoVetor == false) {
        numerosParaAnalise.push(Number(num.value)) // Adiciona valor ao array
        feedbackNumAdc.innerHTML += `Valor ${Number(
          num.value
        )} adicionado. </br>`
      }
    } else {
      alert('Digite um número entre 1 a 100')
    }
  } else {
    alert('[ERRO] Digite um número válido, por favor!')
  }

  num.value = ''
  num.focus()

  console.log(numerosParaAnalise)
}

//Arrow Function

const finalizaAnalise = () => {
  let relatorio = window.document.getElementById('relatorio')
  let maiorValor = Math.max.apply(null, numerosParaAnalise)
  let menorValor = Math.min.apply(null, numerosParaAnalise)
  let soma = numerosParaAnalise.reduce(function (soma, i) {
    return soma + i
  })
  const media = soma / numerosParaAnalise.length || 0

  if (numerosParaAnalise != '') {
    relatorio.innerHTML += `Ao todo, temos ${numerosParaAnalise.length} números cadastrados </br>`
    relatorio.innerHTML += `O maior valor informado foi ${maiorValor} números cadastrados </br>`
    relatorio.innerHTML += `O menor valor informado foi ${menorValor} números cadastrados </br>`
    relatorio.innerHTML += `Somando todos os valores, temos ${soma} </br>`
    relatorio.innerHTML += `A média dos valores digitados é ${media} </br>`
  } else {
    alert('Adicione valores antes de finalizar')
  }
}

const limpar = () => {
  let relatorio = window.document.getElementById('relatorio')
  let feedbackNumAdc = window.document.getElementById('feedbackNumAdc')
  feedbackNumAdc.innerHTML = ''
  relatorio.innerHTML = ''
  numerosParaAnalise = []
}
