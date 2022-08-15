/* Caso o email seja "tryber@teste.com" e a senha seja "123456", será emitido um alerta contendo o texto "Olá, Tryber!"; Em todos os outro casos deverá ser emitido um alerta contendo o texto "Email ou senha inválidos.";  */
const loginButton = document.querySelector("button");
const inputEmail = document.querySelectorAll("input")[0];
const inputPassword = document.querySelectorAll("input")[1];
loginButton.addEventListener("click", () => {
  if (
    inputEmail.value === "tryber@teste.com" &&
    inputPassword.value === "123456"
  ) {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
});

const submitBtn = document.querySelector("#submit-btn");
const agreementCheck = document.querySelector("#agreement");

agreementCheck.addEventListener("click", () => {
  submitBtn.toggleAttribute("disabled");
});

// const count = document.getElementById('counter');
// const textarea500 = document.getElementById('textarea500');
// // eslint-disable-next-line no-unused-vars
// function textCounter(e) {
//   let counter = 500;
//   const { inputLength } = textarea500.value;
//   counter -= inputLength;
//   count.innerText = `Counter: ${counter}`;
//   console.log(inputLength);
// }
const textarea1 = document.querySelector("#textarea");
const count = document.getElementById("counter");
function keycounter() {
  const inputLength = textarea1.value.length;
  console.log(inputLength);
  count.innerHTML = `${500 - inputLength} characters left.`;
}
keycounter();

const main = document.querySelector("main");

// criar a função que cria cada campo de resposta e colocar como filho da main

submitBtn.addEventListener("click", (e) => {
  const studantName = document.querySelector("#input-name").value;
  const studantLastName = document.querySelector("#input-lastname").value;
  const email = document.querySelector("#input-email").value;
  const house = document.querySelector("#house").value;
  const family = document.querySelector('input[name="family"]:checked').value;
  const classes = document.querySelectorAll(".subject");
  const rate = document.querySelector('input[name="rate"]:checked').value;
  const coment = document.querySelector("#textarea").value;
  e.preventDefault();

  const escolhidas = [];

  for (let i = 0; i < classes.length; i++) {
    if (classes[i].checked) {
      escolhidas.push(classes[i].value);
    }
  }
  const stringEscolhidas = escolhidas.join(", ");

  const formAnswer = document.createElement("form");
  const pName = document.createElement("p");
  const pEmail = document.createElement("p");
  const pHouse = document.createElement("p");
  const pFamily = document.createElement("p");
  const pSubjects = document.createElement("p");
  const pRate = document.createElement("p");
  const pText = document.createElement("p");
  formAnswer.id = "form-data";
  pName.innerText = `Nome: ${studantName} ${studantLastName}`;
  pEmail.innerText = `Email: ${email}`;
  pHouse.innerHTML = `Casa: ${house}`;
  pFamily.innerHTML = `Família: ${family}`;
  pSubjects.innerText = `Matérias: ${stringEscolhidas}`;
  pRate.innerHTML = `Avaliação: ${rate}`;
  pText.innerHTML = `Observações: ${coment}`;
  formAnswer.appendChild(pName);
  formAnswer.appendChild(pEmail);
  formAnswer.appendChild(pHouse);
  formAnswer.appendChild(pFamily);
  formAnswer.appendChild(pSubjects);
  formAnswer.append(pRate);
  formAnswer.append(pText);

  evaluationForm = document.querySelector("#evaluation-form");
  evaluationForm.style.display = "none";

  main.appendChild(formAnswer);
});
