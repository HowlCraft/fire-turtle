function clock() {
    const today = new Date();
    let d = today.getDay();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    switch (d) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }
    document.getElementById('time').innerHTML = day + " | " + h + ":" + m + ":" + s;
}

setInterval(clock, 1000);

function checkTime(i) {
    var j = i;
    if (j < 10) {
        j = "0" + i;
    }
    return j;
}

document.getElementById('search').addEventListener('keyup', ({key}) => {
    if (key === 'Enter') {
        let unsafeQuery = document.getElementById('search').value;
        window.location.href = "https://duckduckgo.com/?&q=" + escape(unsafeQuery);
    }
});

document.getElementById('searchImage').addEventListener('click', ({key}) => {
    let unsafeQuery = document.getElementById('search').value;
    window.location.href = "https://duckduckgo.com/?&q=" + escape(unsafeQuery);
});
