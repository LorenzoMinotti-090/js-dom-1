

const lampadina = document.getElementById('lampadina');
const button = document.getElementById('btnAccendi');

button.addEventListener('click', function() {
    lampadina.src = "/img/yellow_lamp.png";
});