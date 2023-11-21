let ponteiroHoras = document.querySelector(".horas");
let ponteiroMinutos = document.querySelector(".minutos");
let ponteiroSegundos = document.querySelector(".segundos");

setInterval(atualizarRelogio, 1000);

function atualizarRelogio() {
  const data = new Date();
  const segundos = data.getSeconds() / 60;
  const minutos = (segundos + data.getMinutes()) / 60;
  const horas = (minutos + data.getHours()) / 12;

  rotacionarElemento(ponteiroSegundos, segundos);
  rotacionarElemento(ponteiroMinutos, minutos);
  rotacionarElemento(ponteiroHoras, horas);
}

function rotacionarElemento(elemento, rotacao) {
  elemento.style.setProperty("--rotacao", rotacao * 360);
}

atualizarRelogio();
