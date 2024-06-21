document.addEventListener('DOMContentLoaded', () => {
    function loadTopAds(urlTopAds) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = urlTopAds;
        document.head.appendChild(link);
    }

    loadTopAds('https://cdn.jsdelivr.net/gh/aihris/cdn/top-ads/app.v1.1.css');

    window.addEventListener('scroll', handleScrollTopAds);

    function handleScrollTopAds() {
        const scrollPositionTopAds = window.scrollY;
        const floatingTopAds = document.querySelectorAll('.floating-top-ads');

        if (scrollPositionTopAds > 100) {
            floatingTopAds.forEach(ftTopAd => {
                ftTopAd.style.opacity = '1';
            });
        } else {
            floatingTopAds.forEach(ftTopAd => {
                ftTopAd.style.opacity = '0';
            });
        }
    }

    document.querySelectorAll('.close-top-ads').forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.style.display = 'none';
        });
    });
});
