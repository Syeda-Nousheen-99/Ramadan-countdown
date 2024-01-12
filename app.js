document.addEventListener('DOMContentLoaded', function () {
    const daysElement = document.querySelector("#countdownDays");
    const hoursElement = document.querySelector("#countdownHours");
    const minutesElement = document.querySelector("#countdownMinutes");
    const secondsElement = document.querySelector("#countdownSeconds");

    const targetDate = new Date("March 12, 2024 00:00:00");

    const updateCountdown = () => {
        const currentDate = new Date();
        const diff = targetDate - currentDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        daysElement.textContent = days < 10 ? "0" + days : days;
        hoursElement.textContent = hours < 10 ? "0" + hours : hours;
        minutesElement.textContent = minutes < 10 ? "0" + minutes : minutes;
        secondsElement.textContent = seconds < 10 ? "0" + seconds : seconds;
    }

    setInterval(updateCountdown, 1000);
});
