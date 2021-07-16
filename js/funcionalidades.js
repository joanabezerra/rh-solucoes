// Função do scroll lento da página

const go = (elem) => {
    window.scroll({top: document.querySelector(elem).offsetTop, left: 0, behavior: 'smooth'});
}

// função para header fixo após scrool do usuário

//chamando função do menu fixo
window.onscroll = function(){menuFixo()};

// pegando o elemento menu da página
var menu = document.getElementById("menu");

// offsetTop está pegando a posição exata do menu na página em relação ao topo
var scrollPosition = menu.offsetTop;

function menuFixo() {
    if(window.pageYOffset > scrollPosition) {
        menu.classList.add("scrollPosition");
    } else {
        menu.classList.remove("scrollPosition");
    }
}