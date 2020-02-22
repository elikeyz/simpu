const menuBtn = document.getElementById('menu-btn');
const backBtn = document.getElementById('back-btn');
const leftColumn = document.getElementById('left-column');
const rightColumn = document.getElementById('right-column');

menuBtn.addEventListener('click', () => {
    rightColumn.style.display = 'none';
    leftColumn.style.display = 'block';
    backBtn.style.display = 'block';
    menuBtn.style.display = 'none';
});

backBtn.addEventListener('click', () => {
    leftColumn.style.display = 'none';
    rightColumn.style.display = 'block';
    backBtn.style.display = 'none';
    menuBtn.style.display = 'block';
});