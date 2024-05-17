document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.querySelector("form");

    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const firstNameInput = document.getElementById("ime");
        const lastNameInput = document.getElementById("prezime");
        const emailInput = document.getElementById("email1");
        const passwordInput = document.getElementById("lozinka");
        const confirmPasswordInput = document.getElementById("ponovilozinku");

        if (
            firstNameInput.value.trim() === "" ||
            lastNameInput.value.trim() === "" ||
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

        alert("Registracija uspešna! Ime: " + firstNameInput.value.trim() + ", Prezime: " + lastNameInput.value.trim());
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return re.test(email);
    }
});
