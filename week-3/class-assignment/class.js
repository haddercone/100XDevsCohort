
const express = require('express');

const app = express();

// create a incoming request counter for the express server.
let requestCount = 0;
function getRequestCount(req, res, next){
    requestCount ++;
    console.log("Request count: ", requestCount);
    next();
}

// find average time to send requests from the server
function getAverageRequestTime(req, res, next){
    const start = Date.now();
    res.on("finish", () => {
        const elapsed = Date.now() - start;
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - Response sent in ${elapsed}ms`);
    })
    next();
}

app.use(getRequestCount);
app.use(getAverageRequestTime);

app.get('/', (req, res) => {
    res.send("Home Page")
    
})

app.get('/route', (req, res) => {
    res.send("Route Page")
})

app.listen(3000, () => console.log("server running at port 3000"));