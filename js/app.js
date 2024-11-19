// JavaScript para o carrossel

let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
const totalItems = carouselItems.length;

// Função para mostrar a imagem do carrossel com base no índice
function showCarouselItem(index) {
    // Garantir que o índice esteja dentro do intervalo válido
    if (index < 0) {
        currentIndex = totalItems - 1;
    } else if (index >= totalItems) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    // Mover o carrossel para o item correto
    const offset = -100 * currentIndex;  // Movemos os itens para a esquerda
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;

    // Atualizar bolinhas de navegação
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// Configurar a navegação das bolinhas
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'));
        showCarouselItem(index);
    });
});

// Configurar transição automática a cada 5 segundos
setInterval(() => {
    showCarouselItem(currentIndex + 1);
}, 5000);

// Inicializar o carrossel
showCarouselItem(currentIndex);
