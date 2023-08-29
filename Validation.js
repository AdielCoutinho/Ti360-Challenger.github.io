document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const addressInput = document.getElementById('address');
  const submitButton = document.getElementById('submitButton');

  
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
      return validateField(nameInput, namePattern, 'Nome inválido');
  }


function validateEmail() {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return validateField(emailInput, emailPattern, 'Email inválido');
}


  
  function validatePhone() {
      const phonePattern = /^\d{10}$/;
      return validateField(phoneInput, phonePattern, 'Telefone inválido');
  }

  
  function validateAddress() {
      const addressPattern = /^[a-zA-Z\s0-9.-]+$/;
      return validateField(addressInput, addressPattern, 'Endereço inválido');
  }

  
  form.addEventListener('submit', (e) => {
      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isPhoneValid = validatePhone();
      const isAddressValid = validateAddress();

      if (!(isNameValid && isEmailValid && isPhoneValid && isAddressValid)) {
          e.preventDefault();
      }
  });
});
