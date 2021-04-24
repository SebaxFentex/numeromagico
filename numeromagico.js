let numeroAleatorio = Math.floor(Math.random() * 1000) + 1;

    const texto = document.querySelector('.texto');
    const numeroIngresado = document.querySelector('.campoingreso');

    // LIMPIAR LOCALSTORAGE
    //localStorage.clear();

    //MOSTRAR PODIO
    //alert("PODIO:\n1: " + localStorage.getItem("nombretop1") + ", " + localStorage.getItem("puntajetop1") + " puntos, el" + localStorage.getItem("horatop1") + "\n2: " + localStorage.getItem("nombretop2") + ", " + localStorage.getItem("puntajetop2") + " puntos, el" + localStorage.getItem("horatop2") + "\n3: " + localStorage.getItem("nombretop3") + ", " + localStorage.getItem("puntajetop3") + " puntos, el" + localStorage.getItem("horatop3"));

    let i = 1; 

    function guardarPuntaje(nombre, puntaje, horayfecha){

        // UBICA PUNTAJE EN EL TOP
        var puntajetop1 = localStorage.getItem("puntajetop1");
        var puntajetop2 = localStorage.getItem("puntajetop2");
        var puntajetop3 = localStorage.getItem("puntajetop3");

        if(puntajetop1 === null){
            escribirPuntaje(1, nombre, puntaje, horayfecha);
        }
        else{
            if(puntajetop1 > puntaje){
                moverPuntaje(2,3);
                moverPuntaje(1,2);
                escribirPuntaje(1, nombre, puntaje, horayfecha);
            }
            else{
                if(puntajetop2 === null){
                    escribirPuntaje(2, nombre, puntaje, horayfecha);
                }
                else{
                    if(puntajetop2 > puntaje){
                        moverPuntaje(2,3);
                        escribirPuntaje(2, nombre, puntaje, horayfecha);
                    }
                    else{
                        if(puntajetop3 === null){
                            escribirPuntaje(3, nombre, puntaje, horayfecha);
                        }
                        else{
                            if(puntajetop3 > puntaje){
                                escribirPuntaje(3, nombre, puntaje, horayfecha);
                            }
                        }
                    }
                }
            }
        }
        location.reload();
    }

    function moverPuntaje(desde, hasta){

        localStorage.setItem("nombretop" + hasta, localStorage.getItem("nombretop" + desde));
        localStorage.setItem("puntajetop" + hasta, localStorage.getItem("puntajetop" + desde));
        localStorage.setItem("horatop" + hasta, localStorage.getItem("horatop" + desde));
        
    }

    function escribirPuntaje(posicion, nombre, puntaje, hora){
        localStorage.setItem("nombretop" + posicion, nombre);
        localStorage.setItem("puntajetop" + posicion, puntaje);
        localStorage.setItem("horatop" + posicion, hora);
    }

    function revisar() {
        console.log(numeroAleatorio);
        let numeroIngresado = Number(campoingreso.value);
        if (i === 1) {
            // INICIO
        }
        if (numeroIngresado === numeroAleatorio) {
            document.getElementById("texto").innerHTML = "GANASTE";
            var nombre = prompt("Ingresa tu nombre para guardar tu puntaje", "Invitado");
            guardarPuntaje(nombre, i, new Date);
            alert("PODIO:\n1: " + localStorage.getItem("nombretop1") + ", " + localStorage.getItem("puntajetop1") + " puntos, el " + localStorage.getItem("horatop1") + "\n2: " + localStorage.getItem("nombretop2") + ", " + localStorage.getItem("puntajetop2") + " puntos, el " + localStorage.getItem("horatop2") + "\n3: " + localStorage.getItem("nombretop3") + ", " + localStorage.getItem("puntajetop3") + " puntos, el " + localStorage.getItem("horatop3"));
        }else if (i === 10) {
            
            document.getElementById("texto").innerHTML = "PERDISTE, el numero era " + numeroAleatorio;
        }else if (i > 10){

        }else {
            if(numeroIngresado < numeroAleatorio) {
                document.getElementById("texto").innerHTML = "Muy Bajo!" + " te quedan " + (10-i).toString() + " intentos";
            }else if(numeroIngresado > numeroAleatorio) {
                document.getElementById("texto").innerHTML = "Muy alto!" + " te quedan " + (10-i).toString() + " intentos";
            }
        }

        i++;
        campoingreso.value = '';
        campoingreso.focus();
    }

    function hora(){
        var fecha = new Date;
        var hora = fecha.getHours();
        var minuto = fecha.getMinutes();
        var segundos = fecha.getSeconds();

        if(minuto < 10){
            minuto = "0" + minuto;
        }

        if(segundos < 10){
            segundos = "0" + segundos;
        }

        var horacompleta = hora + ":" + minuto + ":" + segundos;
        document.getElementById("hora").innerHTML = horacompleta;

    }

    var intervalId = window.setInterval(function(){
        hora();
    }, 1000);