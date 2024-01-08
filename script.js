const emailInput = document.getElementById("form1Example13");
const passwordInput = document.getElementById("form1Example23");
const btn1 =document.getElementById("validateform");

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    // Password should be at least 8 characters and include alphabets and special characters
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}


 btn1.addEventListener("click", ()=>{
 if (emailInput.value === '') {
    alert('Please enter your email address');
} else if (!isValidEmail(emailInput.value)) {
    alert('Please enter a valid email address');
} else if (!isValidPassword(passwordInput.value)) {
    alert('Please enter a valid password (at least 8 characters with alphabets and special characters)');
} else {
    alert('Form submitted successfully!');
}
 })