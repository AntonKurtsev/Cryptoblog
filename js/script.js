document.addEventListener('DOMContentLoaded', function () {
    const calcInput = document.querySelector('.calc__enter-input');
    const calcBtn = document.querySelector('.calc__btn');
    const calcResult = document.querySelector('.calc__result-value');
    let coefficient = 2.76;

    function calcEarnings () {
        let result = (calcInput.value * coefficient).toFixed(2);
        if (isNaN(calcInput.value)) {
            calcResult.innerText = 'Введите сумму цифрами';
        } else {
            calcResult.innerText = result;
        };
    };

    calcBtn.addEventListener('click', () => {
        calcEarnings();
    });

    calcInput.addEventListener('keyup', function(event) {
        if (event.code == 'Enter') {
            calcEarnings();
        } else if (event.code == 'Escape') {
            calcInput.value = '';
            calcResult.innerText = '';
        };
    });

    calcInput.addEventListener('input', () => {
        calcResult.innerText = '';
    });
})