function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;

//enquanto 
while( contador < listaDeTeclas.length){//.length =atributo usado para ver o tamanho da constante
    const tecla = listaDeTeclas[contador];
    const instrumento = listaDeTeclas[contador].classList[1];
    //template string
    const idAudio  = `#som_${instrumento}`
    console.log(idAudio);

    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio)
    };
    contador = contador + 1;
    console.log(contador);
}