// Calculate the tiem it takes between setTimeout call and the inner function actually running

function calculateTime() {
    // const start = Date.now();
    const start = performance.now();
    setTimeout(() => {
        // const end = Date.now();
        const end = performance.now();
        const diff = end - start + "ms";
        console.log(diff);
    },1000)
}
calculateTime()
