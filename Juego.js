
var turno = 1;
var vida = 100;

//estados del jugador
var vivo = true;
var envenedado = false;
var quemado = false;

// jugadas CPU
var atacar = 0;
var quemar = 1;
var envenenar = 2;
var fallar = 3;
// Items
var pocion = 0;
var pocionQuemaduras = 2;
var colaFenix = 1 ;
var pocionVeneno = 3;


function UsarItem(objeto) {

    if (objeto == pocion) {
      vida += 50;
        }
    if (objeto == colaFenix ) {
      if (vivo == false) {
        vivo = true;
        vida = 30;
      }
        else
          console.log('ya estas Vivo!! no se puede usar');

        }
    if (objeto == pocionQuemaduras) {
         if (quemado == true)
          quemado = false;
          else {
            console.log('no estas quemado!! no se puede usar');
          }
            }
    if (objeto == pocionVeneno) {
      if (envenedado == true)
      envenedado = false;
      else {
        console.log('no estas Envenenado!! no se puede usar');
      }

    }
  estadoJugador();


}

function estadoJugador() {

  if (vivo == true) {
     console.log('vida: ' + vida);

      if (quemado == true)
        console.log('el jugador esta quemado');


      if (envenedado == true)
        console.log('el jugador esta Envenenado');

   }
      else
        console.log('Estas Muero');



}



function JugarTurno() {
    var jugadaCPU = Math.floor( Math.random() * 4); //Esto me da un valor randon al
    //inicio de la partida( cualquiera de las 4 opciones)
    //console.log(jugadaCPU);

          if (vida <= 0) {
            vivo = false;

         }



           if (vivo == true) {


              if (atacar == jugadaCPU) {
                vida -= 10;
                console.log('He atacado al jugadro')
                 }
              if (quemar == jugadaCPU) {
                quemado = true;
                console.log('He Quemado al jugadro')
                 }
              if (envenenar == jugadaCPU) {
                envenedado = true;
                console.log('He Envenedado al jugadro')
                 }
              if (fallar == jugadaCPU)
                 console.log('He Fallado')

                  if (vida <0) {
                    console.log('Estas Muerto');

                  }
              }
            estadoJugador();


  }
