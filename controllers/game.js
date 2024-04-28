const fs = require("fs").promises;
const { config, makeRatingFile } = require("../appModules/rating");
const { getRandomIndex } = require("../appModules/api");

const gameRouteController = async (res) => {
    try {
        const ratingFile = await fs.readFile(config.PATH_TO_RATING_FILE);
        const data = JSON.parse(ratingFile);
        const game = getRandomIndex(data);
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(game));
    } catch (error) {
        res.statusCode = 500;
        res.end("Internal Server Error");
    }
};

module.exports = gameRouteController;
