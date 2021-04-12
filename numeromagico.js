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
            
            document.getElementById("texto").innerHTML = "PERDISTE";
        }else {
            if(numeroIngresado < numeroAleatorio) {
                document.getElementById("texto").innerHTML = "Muy Bajo!";
            }else if(numeroIngresado > numeroAleatorio) {
                document.getElementById("texto").innerHTML = "Muy alto!";
            }
        }

        i++;
        campoingreso.value = '';
        campoingreso.focus();
    }