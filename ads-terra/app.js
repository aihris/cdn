document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('ads-terra-container');
    const timerElement = document.getElementById('timer');
    const closeAdElement = document.getElementById('close-ad');
    let countdown = parseInt(container.getAttribute('data-count-at'), 10);
    let countdownFinished = false;
    const reShowTime = parseInt(container.getAttribute('data-reshow-time'), 10) * 60 * 1000;
    const lastShownTime = localStorage.getItem('lastAdShown');
    const currentTime = new Date().getTime();

    if (lastShownTime && (currentTime - lastShownTime < reShowTime)) {
        container.style.display = 'none';
        return;
    }

    function updateTimerAdsTerra() {
        if (countdown > 0) {
            const baseText = timerElement.getAttribute('data-at-tx');
            timerElement.textContent = baseText.replace('${countdown}', countdown);
            countdown--;
            setTimeout(updateTimerAdsTerra, 1000);
        } else {
            timerElement.textContent = '';
            timerElement.classList.add('hidden');
            closeAdElement.classList.remove('disabled');
            countdownFinished = true;
        }
    }

    updateTimerAdsTerra();

    container.style.display = 'flex';

    closeAdElement.addEventListener('click', function () {
        if (countdownFinished) {
            container.style.display = 'none';
            localStorage.setItem('lastAdShown', new Date().getTime());
        }
    });
});
