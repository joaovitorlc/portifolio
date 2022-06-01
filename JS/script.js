function subirTela() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function decidirBotaoScroll() {
  if(window.scrollY === 0) {
    //ocultar botão
    document.querySelector('.scrollbutton').style.display = 'none';
  } else {
    //mostrar botão
    document.querySelector('.scrollbutton').style.display = 'block';
  }
}

window.addEventListener('scroll', decidirBotaoScroll);
