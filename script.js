/* Caso o email seja "tryber@teste.com" e a senha seja "123456", será emitido um alerta contendo o texto "Olá, Tryber!"; Em todos os outro casos deverá ser emitido um alerta contendo o texto "Email ou senha inválidos.";  */
const loginButton = document.querySelector('button');
const inputEmail = document.querySelectorAll('input')[0];
const inputPassword = document.querySelectorAll('input')[1];
loginButton.addEventListener('click', () => {
  if (
    inputEmail.value === 'tryber@teste.com'
    && inputPassword.value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
const count = document.getElementById('counter');
const textarea500 = document.getElementById('textarea500').value;
function textCounter() {
  let counter = 500;
  counter -= textarea500.lenght;
  count.innerText = counter;
}
textCounter();

const submitBtn = document.querySelector('#submit-btn');
const agreementCheck = document.querySelector('#agreement');

agreementCheck.addEventListener('click', () => {
  submitBtn.toggleAttribute('disabled');
});
