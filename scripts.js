console.log("Portfolio Loaded");
const cards = document.querySelectorAll(
'.about-card, .project-card, .skill-card, .contact-card'
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

});

cards.forEach(card => {

    card.classList.add('hidden');

    observer.observe(card);

});