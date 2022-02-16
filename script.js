
   /*EJ DICCIONARIO------------------------------------------------------------------------------------------------------------------------------*/
   
   let diccionario=[{
        palabra:"peregrino",
        definicion:"Persona Que anda o viaja por tierras extrañas que presentan dificultades.",
        },
        {
        palabra:"berenjena",
        definicion:"Planta de fruto comestible, generalmente anual, del género Solanum dentro de la familia de las solanáceas",
        },
        {
        palabra:"bucle",
        definicion:"Secuencia de instrucciones de código que se ejecuta repetidas veces.//Curva en formade rizo que se forma en determinadas cosas.",
        },
        {
        palabra:"estetoscopio",
        definicion:"Instrumento médico que sirve para explorar los sonidos producidos por los órganos de las cavidades del pecho y del abdomen.",
        },
        {
        palabra:"recoleccion",
        definicion:"Acción o actividad de recolectar los frutos de la tierra. Conjunto de frutos recolectados.",
        }]

let buscarPalabra = document.getElementById('inputDiccionario');
let recuadro = document.getElementById('recuadroCeleste');
let boton = document.getElementById('boton');
let texto = document.getElementById('contenidoTexto');

function ingresarPalabra (){

    switch (buscarPalabra.value) {
        case diccionario [0].palabra:
            texto.innerHTML = diccionario[0].definicion;
            break;
        case diccionario [1].palabra:
            texto.innerHTML = diccionario[1].definicion;
            break;
        case diccionario [2].palabra:
            texto.innerHTML = diccionario[2].definicion;
            break;
        case diccionario [3].palabra:
            texto.innerHTML = diccionario[3].definicion;
            break;
        case diccionario [4].palabra:
            texto.innerHTML = diccionario[4].definicion;
            break;
        default:
            texto.innerHTML = 'Lo sentimos, nuestro diccionario no dispone de esta esta definición por el momento'
            break;
    }
}



/*EJ CARRITO------------------------------------------------------------------------------------------------------------------------------------------*/

let valorCirculo = document.getElementById("idCirculo");
let contador = 0;
let span = document.getElementById("idSpan");
let spanNumber = parseInt(span.textContent);
let total = document.getElementById("idTotal");
let valTot = 0;


function agregar() {

    valorCirculo.innerHTML = ++contador;
    valTot =  parseInt(valTot ) + spanNumber
    total.innerHTML =  "TOTAL: $" + valTot;
}
function sacar(){ 
    if (contador > 1 || contador == 1 ) {
        valorCirculo.innerHTML = --contador;
        valTot =  parseInt(valTot ) - spanNumber
        total.innerHTML = "TOTAL: $" + valTot; 
    }

}

/*EJ* CANCION------------------------------------------------------------------------------------------------------------------------------------------*/


let cancion = ["mi" , "barba" , "tiene" , "tres" , "pelos"];

let frase=""

let parrafo = document.getElementById("parrafoejercicio4");
parrafo.innerHTML = cancion 
let inputejercicio=document.getElementById("inputejercicio4");
document.getElementById("botonejercicio4").addEventListener("click",listenejercicio);
 
function listenejercicio () {
    parrafo.innerHTML=""
  event.preventDefault()

   for (let i = 0; i< cancion.length; i++) {
       console.log(cancion[i])
       console.log(inputejercicio.value)
      if (cancion[i] == inputejercicio.value) {

          cancion.splice(i,1,"");
    }
    //frase=frase + " " + cancion[i]
    parrafo.innerHTML+=cancion[i] + " "

   }
}

