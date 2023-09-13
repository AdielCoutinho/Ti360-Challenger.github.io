document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const cityInput = document.getElementById('city');
  const stateInput = document.getElementById('state');
  const streetInput = document.getElementById('street');
  const zipInput = document.getElementById('zip');
  const complementInput = document.getElementById('complement');
  const submitInput = document.getElementById('submit');



  function validateField(inputElement, pattern, errorMessage) {
    const inputValue = inputElement.value;
    const isValid = pattern.test(inputValue);

    if (!isValid) {
      showError(inputElement, errorMessage);
    } else {
      hideError(inputElement);
    
    }

    return isValid;
  }


  function showError(inputElement, errorMessage) {
    const errorElement = document.getElementById(inputElement.id + 'Error');
    inputElement.classList.add('error-message');
    errorElement.textContent = errorMessage;
  }


  function hideError(inputElement) {
    const errorElement = document.getElementById(inputElement.id + 'Error');
    inputElement.classList.remove('error-message');
    errorElement.textContent = '';
  }


  function validateName() {
    const namePattern = /^[a-zA-Z\s'-]+$/;
    return validateField(nameInput, namePattern,'Nome inválido');
  }


  function validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return validateField(emailInput, emailPattern, 'Email inválido');
  }



  function validatePhone() {
    const phonePattern = /^\d{2}\d{9}$/;
    return validateField(phoneInput, phonePattern, 'Telefone inválido');
  }

  function validateCity() {
    const cityPattern = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    return validateField(cityInput, cityPattern, 'Cidade inválido');
  }  
  function validateState() {
    const statePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    return validateField(stateInput, statePattern, 'Estado inválido');
  }  

  // Função para validar a rua
function validateStreet() {
  const streetPattern = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
  return validateField(streetInput, streetPattern, 'Rua inválida');
}

// Função para validar o CEP
function validateZip() {
  const zipPattern =/^\d{5}\d{3}$/;
  return validateField(zipInput, zipPattern, 'CEP inválido');
} 

// Função para validar o complemento
function validateComplement() {
  const complementPattern = /^[A-Za-z\s'-]+$/;
  return validateField(complementInput, complementPattern, 'Complemento inválido');
}
 
document.getElementById("form").addEventListener("submit", (enviar)=>{
  enviar.preventDefault();

  // Valida todos os campos
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isCityValid = validateCity();
  const isStateValid = validateState();
  const isStreetValid = validateStreet();
  const isZipValid = validateZip();
  const isComplementValid = validateComplement();

});
})

