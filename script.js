// animação ao aparecer na tela
const cards = document.querySelectorAll('.skill-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.animation = 'slideInRight 0.6s ease-out forwards';
        } else {
            entry.target.style.animation = 'none';
            entry.target.style.opacity = 0;
            entry.target.style.transform = 'translateX(100px)';
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));

// animação MAIN também
const mainElements = document.querySelectorAll('.maicard, .maiimage, .text');

mainElements.forEach((el, index) => {
    observer.observe(el);
    el.style.transitionDelay = (index * 0.2) + 's';
});

// animação PROJETOS
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card, index) => {
    observer.observe(card);
    card.style.transitionDelay = (index * 0.2) + 's';
});


// animação CONTATOS
// animação CONTATOS
// FORÇAR EXIBIÇÃO DOS CONTATOS
window.addEventListener('load', () => {
    const contactElements = document.querySelectorAll('.contact-list, .contact-form');
    
    contactElements.forEach((el, index) => {
        el.style.opacity = 1;
        el.style.transform = 'translateX(0)';
        el.style.transition = '0.6s ease-out';
        el.style.transitionDelay = (index * 0.2) + 's';
    });
});