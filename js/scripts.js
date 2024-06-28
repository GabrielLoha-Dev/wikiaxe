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

document.addEventListener("DOMContentLoaded", function(){
    const elements = document.querySelectorAll(".inicio")
    elements.forEach(element => {
        element.classList.add("fade")
    })
})

function filtrarCartoes() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const cards = document.getElementsByClassName('card');
    let found = false;

    for (let i = 0; i < cards.length; i++) {
        const title = cards[i].getElementsByTagName('h1')[0];
        if (filter === '' || title.innerHTML.toLowerCase().indexOf(filter) > -1) {
            cards[i].style.display = '';
            found = true;
        } else {
            cards[i].style.display = 'none';
        }
    }

    const notFoundMessage = document.getElementById('notFoundMessage');
    if (!found) {
        notFoundMessage.style.display = 'flex';
    } else {
        notFoundMessage.style.display = 'none';
    }
}