function loadTopAds(url) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
}

loadTopAds('https://cdn.jsdelivr.net/gh/aihris/cdn/top-ads/app.v1.css');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const ads = document.querySelectorAll('.floating-top-ads');

    if (scrollPosition > 100) {
        ads.forEach(ad => {
            ad.classList.add('visible-top-ads');
        });
    } else {
        ads.forEach(ad => {
            ad.classList.remove('visible-top-ads');
        });
    }
});

document.querySelectorAll('.close-top-ads').forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.style.display = 'none';
    });
});
