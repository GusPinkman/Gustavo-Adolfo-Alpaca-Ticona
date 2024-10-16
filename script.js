function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.right === '-300px' || menu.style.right === '') {
        menu.style.right = '0';
    } else {
        menu.style.right = '-300px';
    }
}
