$(document).ready(function(){

    // tramite ciclo for inserisco nel container game  100 quadratini che saranno le nostre celle del campo minato

    for(var i = 0; i < 100; i++) {
        $('.container_game').append('<div class="box" ></div>')
    }
   
    // fine realizzazione delle celle del gioco 

    // inizio a generare i 16 numeri che genererà il gioco   sempre tramite ciclo for

    var numeriPc = []
    // numeriPc sarà l'array che conterrà i numeri del pc che saranno sedici
    for (var i = numeriPc.length; i < 16 ; i++){
      
        var numeroPc = Math.floor(Math.random()*(1,100)+1)
            
            if(!numeriPc.includes(numeroPc)){

                numeriPc.push(numeroPc)
            }
    }

    console.log(numeriPc);
   
    // fine  numeri generati dal gioco con il relativo ciclo for

//   generiamo i 100 numeri da inserire nella nostra griglia di quadri

  /*
  ------------------------------------------------------------------------------
  ------------------------------------------------------------------------------
  ------------------------------------------------------------------------------
  */
var numeriBox = []

for(var i = numeriBox.length; i < 100; i++){
   
      
    var numeroBox = Math.floor(Math.random()*(1,100)+1)
       if(!numeriBox.includes(numeroBox)){

        numeriBox.push(numeroBox)
       } else {

           i--
       }

}
console.log(numeriBox);

 /*
  ------------------------------------------------------------------------------
  ------------------------------------------------------------------------------
  ------------------------------------------------------------------------------
  */


// impostiamo il livello del gioco tramite una variabile , cioe i numeri che dovrà inserire l'utente per vincere 

var livello = 15

// dichiariamo l'array che conterrà i numeri cliccati dall' utente

var numeriUtente = []
// ora impostiamo il ciclo che conterrà il click sulle celle  e il ciclo each 

for (var i = numeriUtente.length ; i < livello; i++){

$('.box').each(function(i){

    $(this).text(numeriBox[i])
})
 /*
  ------------------------------------------------------------------------------
  ------------------------------------------------------------------------------
  ------------------------------------------------------------------------------
  */
//fine ciclo each che mi è servito per inserire i numeri nei quadrati generati prima 

// passiamo al click sui vari iquadrati

$('.box').click(function(){


// parsiamo il numero inserito nei box (poiche è un testo lo trasformo in un intero) e lo associo ad una variabile

var mioNumero = (parseInt($(this).text()));




if(!numeriUtente.includes(mioNumero)){


if(numeriPc.includes(mioNumero)){


    $(this).css({'background-color':'red'})
        
        $('.sconfitta').slideDown()
           $('#risultato').text(`HAI INSERITO CORRETTAMENTE QUESTI NUMERI ${numeriUtente} POI HAI PRESO UNA MINA CHE E' IL NUMERO ${mioNumero}`)
         $('.button').click(function(){
               
            var ricomincia = prompt('SE VUOI RIGIOCARE SCRIVI SI SE NON VUOI CHIUDERE LA PAGINA DIGITA NO ??')
              if(ricomincia =='si'){
                  location.reload()
              } else if(ricomincia == 'no') {
                    window.close()
              }
         })  
               
} 


    numeriUtente.push(mioNumero)
    $(this).css({'background-color':'green'})

    if(!numeriPc.includes(numeriUtente[i])&&numeriUtente.length==livello){
    $('.vittoria').addClass('active')
    $('#vinto').text(`COMPLIMENTI GIOCATORE HAI VINTO INSERENDO CORRETTAMENTE  TUTTI E ${numeriUtente.length} I NUMERI E SONO ${numeriUtente} SE VUOI RIGIOCARE CLICCA SU RIGIOCA`)
    alert('hai vinto')
    $('.button').click(function(){
               
        var ricomincia = prompt('SE VUOI RIGIOCARE SCRIVI SI SE NON VUOI CHIUDERE LA PAGINA DIGITA NO ??')
          if(ricomincia =='si'){
              location.reload()
          } else if(ricomincia == 'no') {
                window.close()
          }
     })  
}
} else {

    i-- 
}
console.log(numeriUtente);
})





}


})