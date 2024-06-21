// getando as sections
var secInicio = document.getElementById("inicio");
var secMenu = document.getElementById("menu");

const goMenu = () => {
    secInicio.style.display = 'none';
    secMenu.style.display = 'flex';
    fadeInCards(); 
}

function fadeInCards() {
    const cards = secMenu.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in');
        }, index * 200);
    });
}
