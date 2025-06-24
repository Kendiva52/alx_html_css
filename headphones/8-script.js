const toggleBtn=document.querySelector('.toggle-btn');
const listUl=document.querySelector('header nav ul');
toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    listUl.classList.toggle('active');
        })