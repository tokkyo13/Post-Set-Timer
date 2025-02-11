let startTime = null;
let targetTime = null;
let countdownInterval = null;
let alarmTimeout = null;

const startButton = document.getElementById('startButton');
const setButton = document.getElementById('setButton');
const resetButton = document.getElementById('resetButton');
const timeInputContainer = document.getElementById('timeInputContainer');
const timerDurationInput = document.getElementById('timerDuration');
const display = document.getElementById('display');
const message = document.getElementById('message');
const alarmSound = document.getElementById('alarmSound');
const body = document.body;

function formatTime(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

function updateDisplay() {
    if (!targetTime) {
        const elapsed = (Date.now() - startTime) / 1000;
        display.textContent = "Elapsed Time: " + formatTime(elapsed);
    } else {
        let remaining = (targetTime - Date.now()) / 1000;
        if (remaining < 0) remaining = 0;
        display.textContent = "Time Remaining: " + formatTime(remaining);
    }
}

function triggerAlarm() {
    clearInterval(countdownInterval);
    message.textContent = "Time's Up!";
    message.classList.add("time-up-message");
    body.classList.add("time-up-bg");

    // oscillator
    const osc = new Tone.Oscillator(2000, "sine").toDestination();

    // alarm
    const duration = 0.060;
    let time = Tone.now();
    for (let i = 0; i < 3; i++) {
        for(let j = 0; j < 4; j++){
            osc.start(time);
            time += duration;
            osc.stop(time);
            time += duration;
        }
        time += duration * 8;
    }

    // Vibrate for 500ms on mobile
    if ("vibrate" in navigator) {
        navigator.vibrate(500);
    }
}

startButton.addEventListener('click', async () => {
    startTime = Date.now();
    startButton.disabled = true;
    resetButton.disabled = false;
    timeInputContainer.style.visibility = "visible";
    message.textContent = ""; // Clear message but keep space occupied
    countdownInterval = setInterval(updateDisplay, 250);

    // Start audio by user gesture
    await Tone.start();
    console.log("audio is ready");
});

setButton.addEventListener('click', () => {
    if (!startTime) return;
    const durationSec = parseFloat(timerDurationInput.value);
    if (isNaN(durationSec) || durationSec <= 0) {
        alert("Please enter a valid positive number for duration.");
        return;
    }
    targetTime = startTime + durationSec * 1000;
    const remainingMs = targetTime - Date.now();
    if (remainingMs <= 0) {
        triggerAlarm();
    } else {
        if (alarmTimeout) clearTimeout(alarmTimeout);
        alarmTimeout = setTimeout(triggerAlarm, remainingMs);
    }
});

resetButton.addEventListener('click', () => {
    clearInterval(countdownInterval);
    clearTimeout(alarmTimeout);
    startTime = null;
    targetTime = null;
    display.textContent = 'Elapsed Time: 00:00';
    message.textContent = '';
    message.classList.remove("time-up-message");
    body.classList.remove("time-up-bg");
    timeInputContainer.style.visibility = "hidden";
    startButton.disabled = false;
    resetButton.disabled = true;
    timerDurationInput.value = 60;
});