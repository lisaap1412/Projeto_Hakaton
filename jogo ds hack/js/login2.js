const input = document.querySelector('.login2__input');
const button = document.querySelector('.login2__button');
const form = document.querySelector('.login2-form');
const resposta = "belle epoque";

const validateInput = ({ target }) => {
  if (target.value.length > 2) {
    button.removeAttribute('disabled');
    return;
  }

  button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
  event.preventDefault();
  
  localStorage.setItem('player', input.value);
  window.location = '../mat.html';
}

function confirmed()
{
  const confirmarResposta = document.getElementById("login2__input");
  if(confirmarResposta == resposta)
  {
    console.log("Acertou!");
  }
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);