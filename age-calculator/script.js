// script.js

document.addEventListener("DOMContentLoaded", () => {
    const calculationDateField = document.getElementById("calculationDate");
    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
    calculationDateField.value = today; // Set the default value
});

function calculateAge() {
    const birthdateInput = document.getElementById("birthdate").value;
    const calculationDateInput = document.getElementById("calculationDate").value;
    const resultDiv = document.getElementById("ageOutput");

    if (!birthdateInput) {
        resultDiv.textContent = "Please select your birthdate.";
        return;
    }

    const birthdate = new Date(birthdateInput);
    const today = calculationDateInput ? new Date(calculationDateInput) : new Date();

    if (birthdate > today) {
        resultDiv.textContent = "Birthdate cannot be in the future.";
        return;
    }

    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    resultDiv.textContent = `${years} years, ${months} months, and ${days} days`;
}
