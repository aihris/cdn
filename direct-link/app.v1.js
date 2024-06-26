function loadFloatingDirectLink(urlFloatingDirectLink) {
    const linkFloatingDirectLink = document.createElement('link');
    linkFloatingDirectLink.rel = 'stylesheet';
    linkFloatingDirectLink.href = urlFloatingDirectLink;
    document.head.appendChild(linkFloatingDirectLink);
}

loadFloatingDirectLink('https://cdn.jsdelivr.net/gh/aihris/cdn/direct-link/app.v1.css');

function setCookie(name, value, minutes) {
    const d = new Date();
    d.setTime(d.getTime() + (minutes * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname) == 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

const overlayLink = document.getElementById("overlay-link");
const floatingWindow = document.getElementById("floatingWindow");
const iframeContainer = document.getElementById("iframeContainer");
const btn = document.getElementById("btnDirectLink");

function cerrarVentanaFlotante() {
    overlayLink.style.display = "none";
    floatingWindow.style.display = "none";
    const data = JSON.parse(btn.getAttribute('data-link'));
    setCookie("scriptShown", "true", data.intervalMinutes);
}

function abrirVentanaFlotante(delaySeconds) {
    setTimeout(function () {
        overlayLink.style.display = "block";
        floatingWindow.style.display = "block";

        const iframeSrc = iframeContainer.getAttribute('data-src');
        const iframe = document.createElement("iframe");
        iframe.src = iframeSrc;
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.frameBorder = "0";
        iframeContainer.innerHTML = '';
        iframeContainer.appendChild(iframe);

        const data = JSON.parse(btn.getAttribute('data-link'));

        let countdown = data.countdown;
        btn.innerHTML = data.wait.replace("{seconds}", countdown);

        const countdownInterval = setInterval(function () {
            if (countdown > 1) {
                countdown--;
                btn.innerHTML = data.wait.replace("{seconds}", countdown);
            } else {
                clearInterval(countdownInterval);
                btn.textContent = data.close;
                btn.classList.remove("disabled");
                btn.addEventListener("click", cerrarVentanaFlotante);
            }
        }, 1000);
    }, delaySeconds * 1000);
}

function inicializarVentanaFlotante() {
    const initData = JSON.parse(floatingWindow.getAttribute('data-init'));
    const initDelaySeconds = initData.initDirectLink;

    if (initData.statusDirectLink && initDelaySeconds >= 0) {
        abrirVentanaFlotante(initDelaySeconds);
    }
}

window.onload = function () {
    if (!getCookie("scriptShown")) {
        inicializarVentanaFlotante();
    }
    setInterval(function () {
        if (!getCookie("scriptShown")) {
            inicializarVentanaFlotante();
        }
    }, 60000);
};
