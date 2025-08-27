// 1 - Função Declarativa
function mostrarSaudacao() {
 console.log("Olá! Bem-vindo à revisão.");
}

// 2 - Função com Parâmetro
function dizerOla(nome) {
 console.log(`Olá, ${nome}!`);
}

// 3 - Função Anônima (atribuída a uma constante)
const funcaoAnonima = function () {
 console.log("Função anônima foi chamada!");
};

// 4 - Arrow Function
const multiplicar = (a, b) => a * b;

// Ligações com a interface (DOM)
window.addEventListener('DOMContentLoaded', () => {
 // Botões da seção Funções
 const btnSaudacao = document.getElementById('btnSaudacao');
 const btnOla = document.getElementById('btnOla');
 const btnAnonima = document.getElementById('btnAnonima');
 const btnMultiplica = document.getElementById('btnMultiplica');
 const nomeInput = document.getElementById('nomeInput');
 const num1 = document.getElementById('num1');
 const num2 = document.getElementById('num2');
 const resultadoMultiplicacao = document.getElementById('resultadoMultiplicacao');

 btnSaudacao.addEventListener('click', () => {
  mostrarSaudacao();
 });

 btnOla.addEventListener('click', () => {
  const nome = nomeInput.value || 'Visitante';
  dizerOla(nome);
 });

 btnAnonima.addEventListener('click', () => {
  funcaoAnonima();
 });

 btnMultiplica.addEventListener('click', () => {
  const a = Number(num1.value);
  const b = Number(num2.value);
  const produto = multiplicar(a, b);
  resultadoMultiplicacao.textContent = isNaN(produto) ? 'Informe dois números' : `Resultado: ${produto}`;
 });

 // DOM – Manipulação
 const paragrafoTexto = document.getElementById('paragrafoTexto');
 const btnTrocarTexto = document.getElementById('btnTrocarTexto');
 const btnFundoAzul = document.getElementById('btnFundoAzul');
 const lista = document.getElementById('lista');
 const btnAdicionarLi = document.getElementById('btnAdicionarLi');
 const paragrafoRemover = document.getElementById('paragrafoRemover');
 const btnRemoverParagrafo = document.getElementById('btnRemoverParagrafo');
 const textoPersonalizar = document.getElementById('textoPersonalizar');
 const btnPersonalizar = document.getElementById('btnPersonalizar');
 const titulo = document.getElementById('titulo');

 btnTrocarTexto.addEventListener('click', () => {
  paragrafoTexto.textContent = 'Texto alterado com JS!';
 });

 btnFundoAzul.addEventListener('click', () => {
  document.body.style.backgroundColor = 'blue';
  document.body.style.color = 'white';
 });

 btnAdicionarLi.addEventListener('click', () => {
  const novoItem = document.createElement('li');
  const total = lista.querySelectorAll('li').length + 1;
  novoItem.textContent = `Item ${total}`;
  lista.appendChild(novoItem);
 });

 btnRemoverParagrafo.addEventListener('click', () => {
  paragrafoRemover.remove();
 });

 btnPersonalizar.addEventListener('click', () => {
  textoPersonalizar.style.color = 'blue';
  textoPersonalizar.style.fontSize = '20px';
  titulo.style.color = 'green';
  titulo.style.fontSize = '35px';
 });

 // DOM - Eventos
 const inputTempoReal = document.getElementById('inputTempoReal');
 const saidaTempoReal = document.getElementById('saidaTempoReal');
 const btnMouseOver = document.getElementById('btnMouseOver');
 const btnDblClickEsconder = document.getElementById('btnDblClickEsconder');
 const areaParaEsconder = document.getElementById('areaParaEsconder');
 const btnFonteAleatoria = document.getElementById('btnFonteAleatoria');
 const textoFonte = document.getElementById('textoFonte');

 inputTempoReal.addEventListener('input', (e) => {
  saidaTempoReal.textContent = e.target.value;
 });

 btnMouseOver.addEventListener('mouseover', () => {
  btnMouseOver.textContent = 'Você passou o mouse!';
 });
 btnMouseOver.addEventListener('mouseout', () => {
  btnMouseOver.textContent = '2 - Passe o mouse aqui';
 });

 btnDblClickEsconder.addEventListener('dblclick', () => {
  areaParaEsconder.style.display = 'none';
 });

 btnFonteAleatoria.addEventListener('click', () => {
  const tamanho = Math.floor(Math.random() * (40 - 10 + 1)) + 10; // 10..40
  textoFonte.style.fontSize = `${tamanho}px`;
 });
});


