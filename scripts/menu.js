const menuBtn = document.getElementById('menu-btn');
const backBtn = document.getElementById('back-btn');
const leftColumn = document.getElementById('left-column');
const rightColumn = document.getElementById('right-column');

const commentsBtn = document.getElementById('comments-btn');
const closeBtn = document.getElementById('close-btn');
const chatsBody = document.getElementById('chats-body');
const commentsBody = document.getElementById('comments-body');

menuBtn.addEventListener('click', () => {
    rightColumn.style.display = 'none';
    leftColumn.style.display = 'block';
    backBtn.style.display = 'block';
    menuBtn.style.display = 'none';
});

backBtn.addEventListener('click', () => {
    leftColumn.style.display = '';
    rightColumn.style.display = 'block';
    backBtn.style.display = '';
    menuBtn.style.display = '';
});

commentsBtn.addEventListener('click', () => {
    chatsBody.style.display = 'none';
    commentsBody.style.display = 'block';
    closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    commentsBody.style.display = '';
    chatsBody.style.display = 'block';
    commentsBtn.style.display = '';
    closeBtn.style.display = '';
});