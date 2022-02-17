function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'img/foto-crianca-m.png')
        document.body.style.background = '#edeaab'
      } else if (idade < 21) {
        img.setAttribute('src', 'img/foto-adole-m.png')
        document.body.style.background = '#736f5f'
      } else if (idade < 50) {
        img.setAttribute('src', 'img/foto-adulto-m.png')
        document.body.style.background = '#aecf8a'
      } else {
        img.setAttribute('src', 'img/foto-idoso-m.png')
        document.body.style.background = '#c9303d'
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'img/foto-crianca-f.png')
        document.body.style.background = '#abeddf'
      } else if (idade < 21) {
        img.setAttribute('src', 'img/foto-adole-f.png')
        document.body.style.background = '#7d0c4a'
      } else if (idade < 50) {
        img.setAttribute('src', 'img/foto-adulto-f.png')
        document.body.style.background = '#a5a0b8'
      } else {
        img.setAttribute('src', 'img/foto-idoso-f.png')
        document.body.style.background = '#e37e20'
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}
