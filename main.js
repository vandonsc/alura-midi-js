function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for ( let contador = 0; contador < listaDeTeclas.length; contador++){//.length =atributo usado para ver o tamanho da constante

    const tecla = listaDeTeclas[contador];
    const instrumento = listaDeTeclas[contador].classList[1];
    //template string
    const idAudio  = `#som_${instrumento}`

    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio)
    };
    //console.log(contador);

}