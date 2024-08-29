document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', function () {
            const projectDetails = card.querySelector('.project-details');

            // Toggle the display of project details
            if (projectDetails.style.display === 'none' || projectDetails.style.display === '') {
                projectDetails.style.display = 'block';
                card.classList.add('expanded');
            } else {
                projectDetails.style.display = 'none';
                card.classList.remove('expanded');
            }
        });
    });
});
