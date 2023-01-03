    function aleatorio(max, min) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function eleccion(jugada) {
        let resultado = ""
        if(jugada == 1) {
            resultado = "Piedra 🥌"
        }else if(jugada == 2) {
            resultado = "Papel 📄"
        }else if(jugada == 3) {
            resultado = "Tijera ✂"
        }else{
            resultado = "DEBES ELEGIR UNA OPCIÓN ENTRE 1 Y 3"
        }
        return resultado 
    }


    //1 es piedra, 2 es papel, 3 es tijera
    let jugador = 0
    // let min = 1
    // let max = 3
    let pc = 0
    let triunfos = 0
    let perdidas = 0
    /*Y acá crearemos una instrucción, las instrucciones son términos nativo de los lenguajes de programación que 
    modifican el flujo del código */

    while (triunfos < 3 && perdidas < 3) {
        pc = aleatorio(1, 3);
    jugador = prompt("Elije 1 para piedra, 2 para papel y 3 para tijera")
    //alert("Elegiste " + jugador)


    alert("Pc elige: " + eleccion(pc));
    alert("Vos elegis: " + eleccion(jugador)); 

    //COMBATE

    if(pc == jugador) {
        alert("EMPATE")
    } else if(jugador == 1 && pc == 3) {
        alert("GANASTE")
        triunfos = triunfos + 1
    } else if(jugador == 2 && pc == 1) {
        alert("GANASTE")
        triunfos = triunfos + 1
    } else if(jugador == 3 && pc == 2) {
        alert("GANASTE")
        triunfos = triunfos + 1
    } else {
        alert("PERDISTE");
        perdidas = perdidas + 1
    }

    }

    alert(`Ganaste ${triunfos} veces. Perdiste ${perdidas} veces.`)

    /*Math.floor es una función que es usada con los números para quitarle los decimales, por ejemplo: 3.14346, 
    eso lo convierte o te da 3. Math.floor(3.145545) = 3
    Y cuando invocamos la función vacía Math.random() nos va a tirar un número 
    aleatorio entre 1 y 0.


    min = 1     max = 3
    Math.floor(Math.random() * (max - min + 1) + min)

    quita los     0 - 1    *    (3   -  1 + 1)    +1
    decimales      

    */


    // if(jugador == 1) {
    //         alert("Elegiste 🥌")
    //     }else if(jugador == 2) {
    //         alert("Elegiste 📄")
    //     }else if(jugador == 3) {
    //         alert("Elegiste ✂")
    //     }else{
    //         alert("Elegiste PERDER")
    //     }

    // if(pc == 1) {
    //     alert("PC elige 🥌")
    // }else if(pc == 2) {
    //     alert("PC elige 📄")
    // }else if(pc == 3) {
    //     alert("PC elige ✂")
    // }
