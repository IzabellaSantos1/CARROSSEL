const carrossel = document.getElementById('carrossel');
const imagens = document.querySelector('.imagens');
const imagemContainers = document.querySelectorAll('.imagem-container');
let isDragging = false;
let startX, currentIndex = 0;

carrossel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - carrossel.offsetLeft;
    carrossel.style.cursor = 'default';
});

carrossel.addEventListener('mouseleave', () => {
    isDragging = false;
    carrossel.style.cursor = 'default';
});

carrossel.addEventListener('mouseup', () => {
    isDragging = false;
    carrossel.style.cursor = 'default';
});

carrossel.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.pageX - carrossel.offsetLeft;
    const walk = x - startX;
    imagens.style.transform = `translateX(${-currentIndex * 100 + walk / carrossel.offsetWidth * 100}%)`;
});

carrossel.addEventListener('mouseup', (e) => {
    const x = e.pageX - carrossel.offsetLeft;
    const walk = x - startX;

    if (walk > 50) {
        // Mover para a imagem anterior
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : imagemContainers.length - 1; // Retorna à última imagem se estiver na primeira
    } else if (walk < -50) {
        // Mover para a próxima imagem
        currentIndex = (currentIndex < imagemContainers.length - 1) ? currentIndex + 1 : 0; // Retorna à primeira imagem se estiver na última
    }
    
    mostrarImagem();
});

function mostrarImagem() {
    imagens.style.transform = `translateX(${-currentIndex * 100}%)`;
}


