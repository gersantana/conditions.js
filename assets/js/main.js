// EJERCICIO 1 "QUITA Y PON" 
    function clic() { 
        let image = document.getElementById("imagen")

        if (image.style.border == '2px solid red') {
            image.style.border = 'none';
          } else {
            image.style.border = '2px solid red';
          }
    }


// EJERCICIO 2 "CALCULADORA DE STIKERS" 

function validar() { 
    let ilustrator = Number(document.querySelector(".ilustrator").value)
    let premier = Number(document.querySelector(".premier").value)
    let photoshop = Number(document.querySelector(".photoshop").value)
    let total = ilustrator + premier + photoshop 
    let mesage = document.querySelector(".mesage")
    mesage.innerHTML = total 

    if (ilustrator < 0 || premier < 0 || photoshop < 0) {
        mesage.innerHTML = "Los valores ingresados deben ser Mayores o Iguales a 0"
    }
    else if ( total < 10 ) {
        mesage.innerHTML = 'Llevas ' + total + ' meses, Vamos... Puesdes escoger mas!'
    }
    else if (total == 10) {
        mesage.innerHTML = total + ' meses PREMIUN para ti, DISFRUTALOS!'
    }
    else {
        mesage.innerHTML = 'Has escogido "MAS" de 10 meses de regalo!!!'
    }
}


// EJERCICIO 3 "VALIDADOR DE CONTRASEÑAS"

function password() {
    let select1 = document.getElementById("select1").value
    let select2 = document.getElementById("select2").value
    let select3 = document.getElementById("select3").value
    let password = select1 + select2 + select3
    let validador = document.getElementById("validado")
    validador.innerHTML = password

    if (password == 911) {
        validador.innerHTML = '"Password 1 correcta."'
    }
    else if(password == 714 ) {
        validador.innerHTML = '"Password 2 correcta."'
    }
    else {
        validador.innerHTML = '"Password incorrecta."'
    }
}
