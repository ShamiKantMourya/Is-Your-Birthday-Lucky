const dateOfBirth = document.querySelector("#dateofbirth");
const luckyNumber = document.querySelector("#luckynumber");
const checkNumber = document.querySelector("#btn");
const textArea = document.querySelector("#textarea");

function checkLuck(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        textArea.innerText = "Your Birthday is Lucky 🥳 ";
    } else {
        textArea.innerText = "your birthday is not lucky 😐";
    }
}

function isYourBirthdayLucky() {
    const birthDate = dateOfBirth.value;
    const sum = calculateSumOfDateOfBirth(birthDate);
    checkLuck(sum, luckyNumber.value);
}

function calculateSumOfDateOfBirth(birthDate) {
    birthDate = birthDate.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < birthDate.length; i++) {
        sum = sum + Number(birthDate[i]);
    }
    return sum;
}

checkNumber.addEventListener('click', isYourBirthdayLucky);