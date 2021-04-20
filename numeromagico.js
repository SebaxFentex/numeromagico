let numeroAleatorio = Math.floor(Math.random() * 1000) + 1;

    const texto = document.querySelector('.texto');
    const numeroIngresado = document.querySelector('.campoingreso');

    let i = 1;

    function revisar() {
        console.log(numeroAleatorio);
        let numeroIngresado = Number(campoingreso.value);
        if (i === 1) {
            // INICIO
        }
        if (numeroIngresado === numeroAleatorio) {
            document.getElementById("texto").innerHTML = "GANASTE";
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