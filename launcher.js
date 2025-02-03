const formatTime = (value) => value.toString().padStart(2, '0');

function clock() {
    const timer = new Date();
    const hours = formatTime(timer.getHours());
    const minutes = formatTime(timer.getMinutes());
    const seconds = formatTime(timer.getSeconds());

    console.log(`${hours}:${minutes}:${seconds}`);
}

function greeting() {
    const timer = new Date();
    const hours = formatTime(timer.getHours());

    const greeting = (hours >= 6 && hours < 12) ? "Good morning!"
    : (hours >= 12 && hours < 18) ? "Good evening!"
    : "Good night!";

    console.log(greeting);
}

clock();
greeting();