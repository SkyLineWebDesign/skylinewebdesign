//Animation
document.addEventListener('DOMContentLoaded', function () {
    const animateItems = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.setAttribute('data-animate-visible', '');
            } else {
                entry.target.classList.remove('fade-in');
                entry.target.removeAttribute('data-animate-visible');
            }
        });
    }, {
        threshold: 0.1
    });
 
    animateItems.forEach(item => {
        observer.observe(item);
    });
});
