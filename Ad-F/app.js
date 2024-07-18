document.addEventListener("DOMContentLoaded", () => {
    const style = document.createElement('style');
    style.innerHTML = '#adklg{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);display:none;justify-content:center;align-items:center;color:white;font-size:1.5em;z-index:1000;}.content-cnjk{text-align:center;}.ad-t{font-size:18px;}';
    document.head.appendChild(style);
    
    const adklg = document.getElementById("adklg");
    const counter = document.getElementById("counter-ad");

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    function setCookie(name, value, minutes) {
        const date = new Date();
        date.setTime(date.getTime() + (minutes * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value};${expires};path=/`;
    }

    const adViewed = getCookie('adViewed');
    const timeView = parseInt(adklg.getAttribute('data-time-view'), 10);
    const cookieView = parseFloat(adklg.getAttribute('data-cookie-view'));

    if (!adViewed) {
        adklg.style.display = "flex";
        let remainingTime = timeView;
        counter.textContent = remainingTime;
        const interval = setInterval(() => {
            remainingTime--;
            counter.textContent = remainingTime;
            if (remainingTime <= 0) {
                clearInterval(interval);
                adklg.style.display = "none";
                setCookie('adViewed', 'true', cookieView);
            }
        }, 1000);
    }
});
