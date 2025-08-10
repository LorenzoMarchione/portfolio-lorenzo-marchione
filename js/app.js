document.querySelectorAll('.scroll-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const targetId = btn.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});