        // Função para alterar a cor de fundo da barra de navegação ao rolar a página
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.backgroundColor = '#555555';
            } else {
                navbar.style.backgroundColor = '#333333';
            }
        });
        
        // Script para adicionar funcionalidade ao banner
const banner = document.getElementById('banner');

banner.addEventListener('mouseenter', () => {
    banner.style.filter = 'brightness(80%)';
});

banner.addEventListener('mouseleave', () => {
    banner.style.filter = 'brightness(100%)';
}); 
        
        // Script para controlar a exibição do menu
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});