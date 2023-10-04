document.addEventListener("DOMContentLoaded", function () {
    const languageSelect = document.getElementById("languageSelect");
  
    languageSelect.addEventListener("change", function () {
      const selectedLanguage = languageSelect.value;
      translatePage(selectedLanguage);
    });
  
    function translatePage(language) {
      const translations = {
        en: {
          istrazuj: "Explore with us!",
          registration: "User Registration",
          fullName: "Full Name",
          username: "Username",
          email: "Email Address",
          password: "Password",
          confirmPassword: "Confirm Password",
          registerButton: "Register",
          pocetna: "HOME",
          istorija: "HISTORY",
          zanimljivosti: "INTERESTING FACTS",
          onama: "ABOUT US",
          kontakt: "CONTACT",
          tplanete: "Terrestial planets",
          trio: "Planetary trio",
          divovi: "Ice giants and black holes",
        },
        sr: {
          istrazuj: "Istražujte sa nama!",
          registration: "Registracija korisnika",
          fullName: "Ime i prezime",
          username: "Korisničko ime",
          email: "Email adresa",
          password: "Lozinka",
          confirmPassword: "Potvrdi lozinku",
          registerButton: "Registruj se",
          pocetna: "POCETNA",
          istorija: "ISTORIJA",
          zanimljivosti: "ZANIMLJIVOSTI",
          onama: "O NAMA",
          kontakt: "KONTAKT",
          tplanete: "Teresticke planete",
          trio: "Planetarni trio",
          divovi: "Ledeni divovi i crne rupe",
        },
      };
  
      const elementsToTranslate = {
        istrazuj: document.querySelector("[data-translate='istrazuj']"),
        registration: document.querySelector("#reg"),
        fullNameLabel: document.querySelector("label[for='ime_prezime']"),
        usernameLabel: document.querySelector("label[for='korisnicko_ime']"),
        emailLabel: document.querySelector("label[for='email']"),
        passwordLabel: document.querySelector("label[for='lozinka']"),
        confirmPasswordLabel: document.querySelector("label[for='ponovi_lozinku']"),
        registerButton: document.querySelector("button"),
        pocetna: document.querySelector('[data-translate="pocetna"]'),
        istorija: document.querySelector('[data-translate="istorija"]'),
        zanimljivosti: document.querySelector('[data-translate="zanimljivosti"]'),
        onama: document.querySelector('[data-translate="onama"]'),
        kontakt: document.querySelector('[data-translate="kontakt"]'),
        tplanete: document.querySelector('[data-translate="tplanete"]'),
        trio: document.querySelector('[data-translate="trio"]'),
        divovi: document.querySelector('[data-translate="divovi"]'),
      };
  
      for (const key in elementsToTranslate) {
        if (elementsToTranslate.hasOwnProperty(key)) {
          elementsToTranslate[key].textContent = translations[language][key];
        }
      }
    }
  
    translatePage(languageSelect.value);
  });
  
  const registrationForm = document.querySelector("form");
  registrationForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const fullNameInput = document.getElementById("ime_prezime");
    const usernameInput = document.getElementById("korisnicko_ime");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("lozinka");
    const confirmPasswordInput = document.getElementById("ponovi_lozinku");
  
    if (
      fullNameInput.value.trim() === "" ||
      usernameInput.value.trim() === "" ||
      emailInput.value.trim() === "" ||
      passwordInput.value.trim() === "" ||
      confirmPasswordInput.value.trim() === ""
    ) {
      alert("Molimo vas da popunite sva polja.");
      return;
    }
  
    if (passwordInput.value !== confirmPasswordInput.value) {
      alert("Lozinke se ne podudaraju.");
      return;
    }
  
    if (!validateEmail(emailInput.value)) {
      alert("Unesite validnu email adresu.");
      return;
    }
  
    alert("Registracija uspešna!");
  });
  
  const passwordInput = document.getElementById("lozinka");
  const togglePasswordButton = document.getElementById("togglePassword");
  
  togglePasswordButton.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  });
  
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  }
  
  translatePage(languageSelect.value);
