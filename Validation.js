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
  
  // ...

  // Função para abrir o modal
  function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }

  // Função para fechar o modal
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  // Capturar dados e exibi-los no modal
  function capturarDados() {
    var nome = nameInput.value;
    var email = emailInput.value;
    var phone = phoneInput.value;
    var city = cityInput.value;
    var state = stateInput.value;
    var street = streetInput.value;
    var zip = zipInput.value;
    var modalData = document.getElementById("modalData");

    // Exibir os dados no modal
    modalData.innerHTML = "Nome: " + nome + "<br>Email: " + email + "<br>Phone: " + phone + "<br>Cidade: " + city + "<br>Rua: " + street + "<br>Estado: " + state + "<br>CEP: " + zip;

    // Abrir o modal
    openModal();
  }

  // Event listener para o formulário
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Valida todos os campos
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isCityValid = validateCity();
    const isStateValid = validateState();
    const isStreetValid = validateStreet();
    const isZipValid = validateZip();
    const isComplementValid = validateComplement();

    if (isNameValid && isEmailValid && isPhoneValid && isCityValid && isStateValid && isStreetValid && isZipValid && isComplementValid) {
      const formData = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        city: cityInput.value,
        state: stateInput.value,
        street: streetInput.value,
        zip: zipInput.value,
        complement: complementInput.value
      };

      console.log(formData);

      // Capturar e exibir dados no modal
      capturarDados();
    } else {
      console.log('Formulário inválido. Corrija os campos destacados');
    }

    form.reset();
  });
});

