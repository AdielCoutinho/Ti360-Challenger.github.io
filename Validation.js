document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const addressInput = document.getElementById('address');
    const submitButton = document.getElementById('submitButton');

    function validateName() {
      const namePattern = /^[a-zA-Z\s'-]+$/; 
      if (!namePattern.test(nameInput.value)) {
        showError(nameInput);
        nameInput.classList.remove('error');
        return false;
      }
    
      hideError(nameInput);
      nameInput.classList.add('success');
      return true;
    }
    

    function validateEmail() {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-09.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(emailInput.value)) {
        showError(emailInput);
        emailInput.classList.remove('error');
        return false;
      }
      hideError(emailInput);
      emailInput.classList.add('success');
      return true;
    }

    function validatePhone() {
      const phonePattern = /^(\(?\d{2}\)?\s?)?(\d{9})$/;
      if (!phonePattern.test(phoneInput.value)) {
        showError(phoneInput);
        return false;
      }
    
      showSuccess(phoneInput);
      return true;
    }
    
    function showSuccess(phoneInput) {
      phoneInput.classList.remove('error');
      phoneInput.classList.add('success'); // Adiciona a classe 'success' para a borda verde
    }
    
   

    function validateAddress() {
      if (addressInput.value.trim() === '') {
        showError(addressInput);
        return false;
      }
     
      hideError(addressInput);
      return true;
    }

    function showError(inputElement) {
      inputElement.classList.add('error');
    }

    function hideError(inputElement) {
      inputElement.classList.remove('error');
    }

    function updateSubmitButtonState() {
      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isPhoneValid = validatePhone();
      

      submitButton.disabled = !(isNameValid && isEmailValid && isPhoneValid && isAddressValid);
    }

    nameInput.addEventListener('input', updateSubmitButtonState);
    emailInput.addEventListener('input', updateSubmitButtonState);
    phoneInput.addEventListener('input', updateSubmitButtonState);
    addressInput.addEventListener('input', updateSubmitButtonState);

    form.addEventListener('submit', (event) => {
      if (!validateName() || !validateEmail() || !validatePhone() || !validateAddress()) {
        event.preventDefault();
      }
    });
    });