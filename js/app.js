// Generate a 4-digit PIN
function getPin() {
    const pin = genaratePin(); // Generate a random number
    const pinString = pin + ''; // Convert the number to a string
    if (pinString.length === 4) {
        return pin; // If the PIN is 4 digits, return it
    } else {
        return getPin(); // If not, generate a new PIN recursively
    }
}

// Generate a random number
function genaratePin() {
    const random = Math.round(Math.random() * 10000); // Generate a random number up to 10000
    return random;
}

// Set up a click event for the "Generate" button
document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin(); // Get a 4-digit PIN
    const genarateInputField = document.getElementById('generate-input');
    // Set the value of the input field to the generated PIN
    genarateInputField.value = pin;
})

// Set up a click event for the calculator section
document.getElementById('calculator').addEventListener('click', function (event) {
    const key = event.target.innerText; // Get the clicked button's text
    const typedKeyField = document.getElementById('submit-input');
    const previousTypedKeyNumber = typedKeyField.value;

    if (isNaN(key)) {
        // If the clicked button is not a number
        if (key === "C") {
            typedKeyField.value = ''; // Clear the input field if "C" is clicked
        } else if (key === "<") {
            // If "<" is clicked, remove the last digit from the input field
            const digits = previousTypedKeyNumber.split('');
            digits.pop();
            const remainingDigis = digits.join('');
            typedKeyField.value = remainingDigis;
        }
    } else {
        // If a number is clicked, add it to the input field
        const newTypedKeyNumber = previousTypedKeyNumber + key;
        typedKeyField.value = newTypedKeyNumber;
    }
})

// Set up a click event for the submit button
document.getElementById('submit-pin').addEventListener('click', function () {
    const genarateInputField = document.getElementById('generate-input');
    const currentPin = genarateInputField.value;

    const typedKeyField = document.getElementById('submit-input');
    const tyepedkey = typedKeyField.value;

    const pinSuccess = document.getElementById('pin-success');
    const pinFilur = document.getElementById('pin-failur');

    // Compare the generated PIN with the submitted PIN
    if (currentPin === tyepedkey) {
        pinSuccess.style.display = 'block'; // Display success message
        pinFilur.style.display = 'none';
    } else {
        pinFilur.style.display = 'block'; // Display failure message
        pinSuccess.style.display = 'none';
    }
})
