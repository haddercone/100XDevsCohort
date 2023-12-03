// creste a terminal clock (HH:MM:SS)

function clock() {
    const date = new Date()
    const hrs = date.getHours() > 12 ? date.getHours() - 12 : '0' + date.getHours();
    const mins = date.getMinutes();
    const secs = date.getSeconds();

    console.log(`${hrs}:${mins}:${secs}`);
}

setInterval(clock,1000)
