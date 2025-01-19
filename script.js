function toggleMenu() {
    const menuButton = document.querySelector('.menu-button');
    const menuItems = document.getElementById('menuItems');
    
    menuButton.classList.toggle('active');
    menuItems.classList.toggle('show');
}

// Fecha o menu ao clicar fora dele
document.addEventListener('click', function(event) {
    const menu = document.querySelector('.floating-menu');
    const menuItems = document.getElementById('menuItems');
    const menuButton = document.querySelector('.menu-button');
    
    if (!menu.contains(event.target) && menuItems.classList.contains('show')) {
        menuItems.classList.remove('show');
        menuButton.classList.remove('active');
    }
});