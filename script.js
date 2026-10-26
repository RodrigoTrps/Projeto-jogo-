let contador = 0;

const elementoPontos = document.getElementById('pontos');
const botaoClique = document.getElementById('btn-clique');
const botaoReset = document.getElementById('btn-reset');

botaoClique.addEventListener('click', () => {
  contador++;
  elementoPontos.textContent = contador;
});

botaoReset.addEventListener('click', () => {
  contador = 0;
  elementoPontos.textContent = contador;
});