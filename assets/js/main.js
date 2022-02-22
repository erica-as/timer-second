function criarHoraDosSegundos (segundos) {
  const data = new Date(segundos);
  return data.toLocaleTimeString('pt-br', {
    hour12: false,
    timeZone: 'UTC'
  });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function() {
    segundos++;
    relogio.innerHTML = criaHoraDosSegundos(segundos);
  }, 1000);
}

iniciar.addEventListener('click', function(event) {
  clearInterval(timer);
  iniciaRelogio();
});

pausar.addEventListener('click', function(event) {
  clearInterval(timer);
});

zerar.addEventListener('click', function(event) {
  clearInterval(timer);
  relogio.innerHTML = '00:00:00';
  segundos = 0;
});

