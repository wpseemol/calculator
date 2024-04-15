const firstInput = document.getElementById('firstNumber');
const operation = document.getElementById('operation');
const secondInput = document.getElementById('secondNumber');
const btn = document.getElementById('resultBtn');
const resultOutput = document.getElementById('resultOutput');

btn.addEventListener('click', () => {
    const firstNumber = parseInt(firstInput.value);
    const secondNumber = parseInt(secondInput.value);
    let result;
    if (firstNumber && secondNumber) {
        switch (operation.value) {
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            case '/':
                result = firstNumber / secondNumber;
                break;
        }

        resultOutput.innerHTML = ` <span class="fw-medium fs-4">${result}</span>`;
    } else {
        if (!firstNumber && !secondNumber) {
            alert('some thing is wrong');
        } else if (!firstNumber) {
            alert('Please input number in First Input');
        } else if (!secondNumber) {
            alert('Please input number in Second Input');
        }
    }
});
