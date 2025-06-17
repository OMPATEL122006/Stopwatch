const display = document.querySelector(".display");
const start = document.querySelector(".start");
const stopbtn = document.querySelector(".stopbtn");
const lapBtn = document.querySelector(".lap");
const reset = document.querySelector(".reset");
const lapsList = document.querySelector(".laps-list");
const lapsContainer = document.querySelector(".laps-container");
const themeToggleBtn = document.getElementById("theme-toggle-btn");

let starttime = 0;
let elapsedTime = 0;
let timerInterval = null;
let isRunning = false;
let lapCount = 0;
let lastLapTime = 0;
let darkMode = false;


function loadThemePreference() {
    if (localStorage.getItem('darkMode') === 'true') {
        darkMode = true;
        document.body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️';
    }
}


themeToggleBtn.addEventListener('click', () => {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode');
    themeToggleBtn.textContent = darkMode ? '☀️' : '🌙';
    
    
    localStorage.setItem('darkMode', darkMode);
});

function formatTime(ms){
    const hours = Math.floor(ms/(1000 * 60 * 60)).toString().padStart(2,'0');
    const minutes = Math.floor((ms%3600000)/ 60000).toString().padStart(2,'0');
    const second = Math.floor((ms%60000)/1000).toString().padStart(2,'0');
    const milliseconds = Math.floor((ms%1000)/10).toString().padStart(2,'0');

    return `${hours}:${minutes}:${second}.${milliseconds}`;
}

function updateTime(){
    const currentTime = Date.now() - starttime + elapsedTime;
    display.textContent = formatTime(currentTime);
}

function getCurrentTime() {
    return Date.now() - starttime + elapsedTime;
}

function addLap() {
    if (!isRunning) return;
    
    lapCount++;
    const currentLapTime = getCurrentTime();
    const lapDuration = currentLapTime - lastLapTime;
    lastLapTime = currentLapTime;
    

    const lapItem = document.createElement("li");
    lapItem.classList.add("lap-item");
    
    const lapNumber = document.createElement("span");
    lapNumber.classList.add("lap-number");
    lapNumber.textContent = `Lap ${lapCount}`;
    
    const lapTime = document.createElement("span");
    lapTime.classList.add("lap-time");
    lapTime.textContent = formatTime(lapDuration);
    
    lapItem.appendChild(lapNumber);
    lapItem.appendChild(lapTime);
    
    
    lapsList.insertBefore(lapItem, lapsList.firstChild);
   
    if (lapCount === 1) {
        lapsContainer.classList.add("active");
    }
}

start.addEventListener('click', () => {
    if(isRunning) return;
    isRunning = true;
    starttime = Date.now();
    timerInterval = setInterval(updateTime, 10);
    
    
    if (lapCount === 0) {
        lastLapTime = 0;
    }
});

stopbtn.addEventListener('click', () => {
    if(!isRunning) return;

    clearInterval(timerInterval);
    elapsedTime += Date.now() - starttime;
    isRunning = false;
});

lapBtn.addEventListener('click', addLap);

function resettimer(){
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    display.textContent = "00:00:00.00";
    
    // Reset 
    lapCount = 0;
    lastLapTime = 0;
    lapsList.innerHTML = "";
    lapsContainer.classList.remove("active");
}

reset.addEventListener('click', resettimer);

// Initialize
loadThemePreference();
resettimer();


