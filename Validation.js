document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const addressInput = document.getElementById('address');
  const submitButton = document.getElementById('submitButton');

  // Função para validar um campo
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

  // Função para mostrar mensagem de erro
  function showError(inputElement, errorMessage) {
      const errorElement = document.getElementById(inputElement.id + 'Error');
      inputElement.classList.add('error-message'); // Adicione a classe de erro
      errorElement.textContent = errorMessage; // Defina o texto da mensagem de erro
  }

  // Função para esconder mensagem de erro
  function hideError(inputElement) {
      const errorElement = document.getElementById(inputElement.id + 'Error');
      inputElement.classList.remove('error-message'); // Remova a classe de erro
      errorElement.textContent = ''; // Limpe o texto da mensagem de erro
  }

  // Função para validar o campo de nome
  function validateName() {
      const namePattern = /^[a-zA-Z\s'-]+$/;
      return validateField(nameInput, namePattern, 'Nome inválido');
  }

 // Função para validar o campo de email
function validateEmail() {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return validateField(emailInput, emailPattern, 'Email inválido');
}


  // Função para validar o campo de telefone
  function validatePhone() {
      const phonePattern = /^\d{10}$/;
      return validateField(phoneInput, phonePattern, 'Telefone inválido');
  }

  // Função para validar o campo de endereço
  function validateAddress() {
      const addressPattern = /^[a-zA-Z\s0-9.-]+$/;
      return validateField(addressInput, addressPattern, 'Endereço inválido');
  }

  // Impede o envio padrão do formulário
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
