function clock() {
    const timer = new Date();
    const hours = timer.getHours();
    const minutes = timer.getMinutes();
    const seconds = timer.getSeconds();

    console.log(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`)
}
/* setInterval(clock, 1000); */
function greeting() {
    const timer = new Date();
    const hours = timer.getHours();
    const minutes = timer.getMinutes();
    const seconds = timer.getSeconds();

    let greeting = "";

    if(hours >= 6 && hours < 12) {
        greeting = "Good morning!";
    } else if(hours >= 12 && hours < 18) {
        greeting = "Good evening!";
    } else {
        greeting = "Good night!";
    }

    console.log(greeting);
}

clock();
greeting();