const accordionBtns = document.querySelectorAll(".accordion-btn");

function toggleAccordionStyle(btn) {
    const accordionDescription = btn.nextElementSibling;
    const plusIcon = btn.querySelector(".plus-icon");
    const minusIcon = btn.querySelector(".minus-icon");


    accordionBtns.forEach((button) => {
        const description = button.nextElementSibling;
        const buttonPlusIcon = button.querySelector(".plus-icon");
        const buttonMinusIcon = button.querySelector(".minus-icon");

        if (button !== btn) {
            description.style.maxHeight = null;
            plusIcon.style.display = "block";
            minusIcon.style.display = "none";
            button.setAttribute("aria-expanded", "false");
            description.setAttribute('aria-hidden', 'true');
        }
    });

    if (accordionDescription.style.maxHeight) {
        accordionDescription.style.maxHeight = null;
        accordionDescription.setAttribute('aria-hidden', 'true');
        plusIcon.style.display = "block";
        minusIcon.style.display = "none";

        btn.setAttribute("aria-expanded", "false");
    } else {
        accordionDescription.style.maxHeight =
            accordionDescription.scrollHeight + "px";
        plusIcon.style.display = "none";
        minusIcon.style.display = "block";
        btn.setAttribute("aria-expanded", "true");
        accordionDescription.setAttribute('aria-hidden', 'false');
    }
}

accordionBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        toggleAccordionStyle(this);
    });
    btn.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleAccordionStyle(this);
        }

        if (event.key === 'ArrowDown') {
            const nextItem = this.closest('.accordion-item').nextElementSibling;
            if (nextItem) {
                nextItem.querySelector('.accordion-btn').focus();
            }
        }


        if (event.key === 'ArrowUp') {
            const nextItem = this.closest('.accordion-item').previousElementSibling;
            if (nextItem) {
                nextItem.querySelector('.accordion-btn').focus();
            }
        }
    })
});
