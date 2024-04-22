import { games } from "./store";
import { startLogger } from "./logger";

startLogger();

setInterval(() => {
    games.push({
        "id" : Math.random().toString(),
        "whitePlayerName": "harkirat",
        "blackPlayerName": "jaskirat",
        moves: []
    })
}, 5000)
