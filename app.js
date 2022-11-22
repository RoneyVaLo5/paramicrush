function moverPosicionRandom(elm) {
    elm.style.position = 'absolute';

    /*
    * window.innerHeight: Es para obtener el tamaño de la pantalla en la que se ejecuta el sitio
    * offsetHeight: Obtiene la altura del elemento
    */
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];

btnNo.addEventListener('mouseenter', function(e) { moverPosicionRandom(e.target) })

btnSi.addEventListener('click', function(e) {
    alert('Sabía que dirías que SÍ. Casemonos ya y tenagmos hijos. TE AMO!!! ❤');
    divModoSexo.style.display = 'block';
    const cancion = new Audio('img//love-moment.mp3');
    cancion.play();
});
