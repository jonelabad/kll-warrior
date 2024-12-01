var swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove: false,
    grabCursor: false,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    mousewheel: true
});

swiper.on('slideChange', function () {
    for (let i of document.querySelectorAll(".Links li")) i.classList.remove("activeLink");
    Array.from(document.querySelectorAll(".Links li"))[swiper.activeIndex].classList.add("activeLink");
});

function Navigate(indx) {
    for (let i of document.querySelectorAll(".Links li")) i.classList.remove("activeLink");
    Array.from(document.querySelectorAll(".Links li"))[indx].classList.add("activeLink");
    swiper.slideTo(indx, 1000, true);
}

document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.querySelector('input[placeholder="Name"]');
    const emailInput = document.querySelector('input[placeholder="Email"]');
    const messageTextarea = document.querySelector('textarea');
    const sendButton = document.querySelector('.primary');
    const form = document.getElementById('contactForm');
    const errorMessages = document.getElementById('errorMessages');

    function checkInputs() {
        const isValid = nameInput.value.trim() !== "" && 
                        emailInput.value.trim() !== "" && 
                        messageTextarea.value.trim() !== "";
        sendButton.disabled = !isValid;
    }

    nameInput.addEventListener('input', checkInputs);
    emailInput.addEventListener('input', checkInputs);
    messageTextarea.addEventListener('input', checkInputs);

    sendButton.disabled = true;

    form.addEventListener('submit', function(event) {
        errorMessages.innerHTML = '';
        let isValid = true;

        if (!nameInput.value.trim() || !emailInput.value.trim() || !messageTextarea.value.trim()) {
            errorMessages.innerHTML = "<p>Fill up this form.</p>";
            isValid = false;
        }

        const emailPattern = /\S+@\S+\.\S+/;
        if (emailInput.value.trim() && !emailPattern.test(emailInput.value)) {
            errorMessages.innerHTML += "<p>Please enter a valid email address.</p>";
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});

