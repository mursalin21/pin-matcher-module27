function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';

    if (pinString.length == 4) {
        document.getElementById('display-pin').value = pin;
    } else {
        generatePin();
    }
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calc = document.getElementById('typed-numbers');

    if (isNaN(number)) {
        if (number == 'C') {
            calc.value = '';
        } else if (number == "<") {
            calc.value = calc.value.toString().slice(0, -1);
        }

    } else {
        calc.value = calc.value + number;
    }
});

function verifyPin() {

    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value;

    if (pin == typedNumber) {
        document.getElementById('notify-success').style.display = 'block';
        document.getElementById('notify-fail').style.display = 'none';
    } else {
        document.getElementById('notify-fail').style.display = 'block';
        document.getElementById('notify-success').style.display = 'none';
    }
}