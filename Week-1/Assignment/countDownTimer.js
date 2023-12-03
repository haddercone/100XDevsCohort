// Create a counter in JavaScript (counts down from 30 to 0)

let num = 30
let id = setInterval(countDown, 100);

function countDown(){
    num--;
    console.log(num);
    if(num === 0) {
        clearInterval(id);
    }
}
