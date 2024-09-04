function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")  

  //se (html.classList.conter("light")) {
  //html.classList.remover("light")
  //} caso contrario {
  //html.classList.adicionar("light")
  //}

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/sarah-light.png")
  } else {
    //se tiver sem light mode, manter a imagem escura
    img.setAttribute("src", "./assets/sarah.png")
  }
}
