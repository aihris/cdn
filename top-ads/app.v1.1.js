document.addEventListener('DOMContentLoaded', () => {
    function loadTopAds(url) {
        const baseUrlTopAds = window.location.href.split('/').slice(0, -1).join('/');
        const fullUrlTopAds = `${baseUrlTopAds}/${url}`;
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = fullUrlTopAds;
        document.head.appendChild(link);
    }

    loadTopAds('app.v1.css');

    window.addEventListener('scroll', handleScroll);

    function handleScroll() {
        const scrollPosition = window.scrollY;
        const ads = document.querySelectorAll('.floating-top-ads');

        if (scrollPosition > 100) {
            ads.forEach(ad => {
                ad.style.opacity = '1';
            });
        } else {
            ads.forEach(ad => {
                ad.style.opacity = '0';
            });
        }
    }

    document.querySelectorAll('.close-top-ads').forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.style.display = 'none';
        });
    });
});
