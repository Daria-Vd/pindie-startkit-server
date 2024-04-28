const { staticFile } = require("../appModules/http-utils");
const { getData, endpoints } = require("../appModules/api");
const { config, makeRatingFile } = require("../appModules/rating");

const mainRouteController = async (res, filePath, ext) => {
    const data = await getData(endpoints.games);
    await makeRatingFile(config.PATH_TO_RATING_FILE, data);
    res.statusCode = 200;
    staticFile(res, filePath, ext);
};

module.exports = mainRouteController;
