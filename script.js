
   /* let diccionario=[{
        palabra:"peregrino",
        definicion:"Persona Que anda o viaja por tierras extrañas que presentan dificultades.",
        },
        {
        palabra:"berenjena",
        definicion:"planta de fruto comestible, generalmente anual, del género Solanum dentro de la familia de las solanáceas",
        },
        {
        palabra:"bucle",
        definicion:"secuencia de instrucciones de código que se ejecuta repetidas veces.//Curva en formade rizo que se forma en determinadas cosas.",
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
        case diccionario [3].palabra:
            texto.innerHTML = diccionario[3].definicion;
            break;
        default:
            texto.innerHTML = 'Lo sentimos, nuestro diccionario no dispone de esta esta definición por el momento'
            break;
    }
}*/




/*EJ CARRITO*/

let valorCirculo = document.getElementById("idCirculo");
let contador = 0;
let span = document.getElementById("idSpan");
let spanNumber = parseInt(span.textContent);
let total = document.getElementById("idTotal");
let valTot = 0;


function agregar() {

    valorCirculo.innerHTML = ++contador;
    valTot =  parseInt(valTot ) + spanNumber
    total.innerHTML =  "total: " + valTot;
}
function sacar(){ 
    if (contador > 1 || contador == 1 ) {
        valorCirculo.innerHTML = --contador;
        valTot =  parseInt(valTot ) - spanNumber
        total.innerHTML = "total: " + valTot; 
    }

}