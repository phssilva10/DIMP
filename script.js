var navbar;
var sticky;

window.onload = function() {
  navbar = document.getElementById("barra_superior");
  sticky = navbar.offsetTop;
  myFunction()

};
window.onscroll = function() {
  myFunction()
};




function myFunction() {


  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  var element = document.getElementById("barra_superior");
  var leftmenu = document.getElementById("indice");
  elemRect = element.getBoundingClientRect();
  leftmenu.style.paddingTop = elemRect.bottom + "px";
}


function meiodatela(id_elemento) {
  //console.log("opa, esta querendo que eu va ate o elemento   " + id_elemento);
  var elmnt = document.getElementById(id_elemento);
  posicao = elmnt.offsetTop - 100;
  console.log("peguei a posicao dele, ta em   " + posicao);
  window.scrollTo(0, posicao);
  console.log("Fui pra lá");
}

function comentarios_on() {
var caminho = document.getElementById("imagem_botao").src;

if (caminho.search("botao_on") != -1 ){//isso procura pela palavra botao_on no string, se existir retorna a posicao da palavra, se nao existir retorna -1
  original = document.getElementById("imagem_botao").src;
  substituto = original.replace("botao_on", "botao_off");//substitui botao_on por botao_off
  document.getElementById("imagem_botao").src=substituto;
  esconder_comentarios();

    } else {
      original = document.getElementById("imagem_botao").src;
      substituto = original.replace("botao_off", "botao_on");//substitui botao_off por botao_on
      document.getElementById("imagem_botao").src = substituto;
      mostrar_comentarios();
    }
}

function esconder_comentarios(){
  var elements = document.getElementsByClassName("comentario");
  for (var i = 0, len = elements.length; i < len; i++) {
       elements[i].style.display = "none";
  }
}

function mostrar_comentarios(){
  var elements = document.getElementsByClassName("comentario");
  for (var i = 0, len = elements.length; i < len; i++) {
       elements[i].style.display = "block";
  }

}


function mostra_arvore() {
  var abrir = document.getElementById("arvore_nm");
  var fechar = document.getElementById("indice_nm");
  fechar.style.display = "none";
  abrir.style.display = "block";
  document.getElementById("botao_indice").classList.remove("active");
  document.getElementById("botao_arvore").classList.add("active");
}

function mostra_indice() {
  var fechar = document.getElementById("arvore_nm");
  var abrir = document.getElementById("indice_nm");
  fechar.style.display = "none";
  abrir.style.display = "block";
  document.getElementById("botao_arvore").classList.remove("active");
  document.getElementById("botao_indice").classList.add("active");
}
