function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = 6
  msg.innerHTML = `Agora são ${hora} horas`
  if (hora >= 6 && hora < 12) {
    img.src = 'img/manha.png'
    document.body.style.background = '#e2cd9f'
  } else if (hora >= 12 && hora < 18) {
    img.src = 'img/tarde.png'
    document.body.style.background = '#9f785f'
  } else {
    img.src = 'img/noite.png'
    document.body.style.background = '#113359'
  }
}
