const { staticFile, mimeTypes } = require("../appModules/http-utils");
const path = require("path");

const defaultRouteController = async (res, url) => {
    const extname = String(path.extname(url)).toLowerCase();
    if (extname in mimeTypes) {
        staticFile(res, url, extname);
    } else {
        res.statusCode = 404;
        res.end("Not found");
    }
};

module.exports = defaultRouteController;
