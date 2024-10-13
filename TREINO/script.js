// Função para mostrar a imagem correspondente ao número clicado
function showImage(index) {
    var images = document.querySelectorAll('.carousel-image'); // Seleciona todas as imagens

    // Remove a classe "active" de todas as imagens
    images.forEach(function (img) {
        img.classList.remove('active');
    });

    // Adiciona a classe "active" apenas na imagem correspondente ao índice
    images[index].classList.add('active');
}
