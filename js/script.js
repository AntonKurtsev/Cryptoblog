document.addEventListener('DOMContentLoaded', function () {

    // Smooth scroll to section
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    console.log(smoothLinks.length);
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            smoothLinks.forEach(element => {
                element.parentElement.classList.remove('-active')
            });
            smoothLink.parentElement.classList.add('-active');
            const id = smoothLink.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };

    // History text
    const historyBtn = document.querySelector('.history__btn');
    const historyTextBlock = document.querySelector('.history__text-block');
    const historyText = document.querySelector('.history__text');

    historyBtn.addEventListener('click', () => {
        historyBtn.classList.toggle('-maximized');
        historyTextBlock.classList.toggle('-maximized');

        let historyTextBlockHeight = historyTextBlock.getBoundingClientRect().height;
        let historyTextHeight = historyText.getBoundingClientRect().height;

        if (historyTextHeight > historyTextBlockHeight) {
            historyTextBlock.style.height = historyTextHeight + 'px';
        } else {
            historyTextBlock.style.height = 384 + 'px';
        };
    });

    // Calculator
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