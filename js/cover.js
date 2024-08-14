
document.addEventListener('DOMContentLoaded', function() {
    const covers = document.querySelectorAll('.cover');

    covers.forEach(function(cover) {
        cover.addEventListener('click', function() {
            cover.classList.add('hidden');
        });
    });
});