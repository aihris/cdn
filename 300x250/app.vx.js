document.addEventListener('DOMContentLoaded', function () {

    function loadTopAds(addCss300x250) {
        const linkCss300x250 = document.createElement('link');
        linkCss300x250.rel = 'stylesheet';
        linkCss300x250.href = addCss300x250;
        document.head.appendChild(linkCss300x250);
    }

    loadTopAds('https://cdn.jsdelivr.net/gh/aihris/cdn/300x250/app.v1.css');

    const adFloating300x250 = document.getElementById('floating-ad-300x250');

    const closeBt300x250 = document.createElement('div');
    closeBt300x250.id = 'close-btn-300x250';
    closeBt300x250.onclick = function () {
        adFloating300x250.style.opacity = '0';
        adFloating300x250.style.transform = 'scale(0.9)';
        setTimeout(function () {
            adFloating300x250.remove();
        }, 500);
    };
    adFloating300x250.appendChild(closeBt300x250);

    setTimeout(function () {
        adFloating300x250.classList.add('visible-ad-300x250');
    }, 100);
});
