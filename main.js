function tocaSom(seletorAudio){
   const elemento =  document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio' ){
    
        elemento.play()
        
    }else{
        alert('Elemento não encontrado ou seletor invalido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for ( let contador = 0; contador < listaDeTeclas.length; contador++){//.length =atributo usado para ver o tamanho da constante

    const tecla = listaDeTeclas[contador];
    const instrumento = listaDeTeclas[contador].classList[1];
    const idAudio  = `#som_${instrumento}`   //template string

    tecla.onclick = function(){
        tocaSom(idAudio)
    };
    //console.log(contador);
    tecla.onkeydown = function(evento) {
        
       if(evento.code === 'Space' || evento.code === 'Enter'){
        tecla.classList.add('ativa');
       }

    

    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }

}