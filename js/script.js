document.addEventListener('DOMContentLoaded', function () {

    // Change header on page scroll
    window.onscroll = function() {
        var header = document.querySelector('.header');
        if ( window.pageYOffset > 70) {
            header.classList.add("-scrolled");
        } else {
            header.classList.remove("-scrolled");
        }
    }

    // Smooth scroll to section
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
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
            mobileMenu.classList.remove('-active');
            openMobileBtn.classList.remove('-active');
        });
    };

    // Mobile menu
    const openMobileBtn = document.querySelector('.menu-btn');
    const mobileMenu = document.querySelector('.header__nav');

    openMobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('-active');
        openMobileBtn.classList.toggle('-active');
    });

    // Modals
    const registrationBtn = document.querySelector('.hero__btn-wrapper');
    const mainForm = document.querySelector('.main-form');
    const mainFormOverlay = document.querySelector('.main-form__overlay');
    const mainFormBtn = document.querySelector('.main-form__btn');
    const confirmationForm = document.querySelector('.confirmation-form');
    const confirmationFormOverlay = document.querySelector('.confirmation-form__overlay');

    function closeMainForm() {
        mainForm.classList.remove('-active');
    };
    function closeConfirmationForm() {
        confirmationForm.classList.remove('-active');
    };

    registrationBtn.addEventListener('click', (e) => {
        e.preventDefault();  
        mainForm.classList.add('-active');
    });
    mainFormOverlay.addEventListener('click', () => {
        closeMainForm();
    });
    // mainFormBtn.addEventListener('click', () => {
    //     closeMainForm();
    //     confirmationForm.classList.add('-active');
    // });
    confirmationFormOverlay.addEventListener('click', () => {
        closeConfirmationForm();
    });

    
    // Mask input
    $('.phone-input').mask('+38(999)999-99-99', {
        translation: {
            '9': {
                    pattern: /[0-9]/,
                    optional: true,
                },
            },
        autoclear: false,
    });

    // Form validation
    $('.main-form__form').each(function(){
        $(this).validate({
            errorClass: "input-invalid",
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                },
                email: {
                    required: true,
                    email: true,
                },
                phone: {
                    required: true,
                },
            },
            messages: {
                name: {
                    required: "Пожалуйста введите ваше имя",
                    minlength: jQuery.validator.format("Минимум 2 знака"),
                },
                email: {
                    required: "Пожалуйста введите ваш Email",
                    email: "Email должен быть вида: name@domain.com",
                },
                phone: {
                    required: "Пожалуйста введите ваш телефон",
                },
            },
        });
    });

    // Auto height for video
    const heroWrapper = document.querySelector('.hero-wrapper');
    function heroWrapperAutoHeight () {
        let heroWrapperWidth = heroWrapper.getBoundingClientRect().width;
        heroWrapper.style.height = ((heroWrapperWidth / 16) * 9) +'px';
    };
    heroWrapperAutoHeight();
    window.addEventListener('resize', () => {
        heroWrapperAutoHeight();
    });

    // History text
    const historyBtn = document.querySelector('.history__btn');
    const historyTextBlock = document.querySelector('.history__text-block');
    const historyText = document.querySelector('.history__text');
    const historyTextBlockHeightConst = historyTextBlock.getBoundingClientRect().height;

    historyBtn.addEventListener('click', () => {
        historyBtn.classList.toggle('-maximized');
        historyTextBlock.classList.toggle('-maximized');

        let historyTextBlockHeight = historyTextBlock.getBoundingClientRect().height;
        let historyTextHeight = historyText.getBoundingClientRect().height;

        if (historyTextHeight > historyTextBlockHeight) {
            historyTextBlock.style.height = historyTextHeight + 'px';
        } else {
            historyTextBlock.style.height = historyTextBlockHeightConst + 'px';
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
});