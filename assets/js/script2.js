document.addEventListener('DOMContentLoaded', function() {
    const aboutCard = document.querySelector('.about-card');
    
    aboutCard.addEventListener('click', function() {
        aboutCard.classList.toggle('expanded');
    });
});
