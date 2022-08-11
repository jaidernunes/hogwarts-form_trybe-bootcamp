/* Caso o email seja "tryber@teste.com" e a senha seja "123456", será emitido um alerta contendo o texto "Olá, Tryber!"; Em todos os outro casos deverá ser emitido um alerta contendo o texto "Email ou senha inválidos.";  */
const loginButton = document.querySelector('button');
const inputEmail = document.querySelectorAll('input')[0];
const inputPassword = document.querySelectorAll('input')[1];
loginButton.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
