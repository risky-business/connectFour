const http = require("http");
const fs = require("fs");
const path = require("path");

const contentTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".gif": "image/gif",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".txt": "text/plain"
};

const server = http.createServer((req, res) => {
    req.on("error", err => {
        console.log("error in request", err);
    });
    res.on("error", err => {
        console.log("error in response:", err);
    });

    if (req.method != "GET") {
        res.statusCode = 405;
        return res.end();
    }
    if (req.url == "/favicon.ico") {
        res.statusCode = 204;
        return res.end();
    }

    const myPath = path.normalize(__dirname + "/projects" + req.url);
    if (!myPath.startsWith(__dirname + "/projects")) {
        res.statusCode = 403;
        return res.end();
    }

    fs.stat(myPath, (err, stats) => {
        if (err) {
            console.log("error", err);
            res.statusCode = 404;
            return res.end();
        } else {
            if (stats.isDirectory()) {
                if (req.url.endsWith("/")) {
                    res.statusCode = 302;
                    res.setHeader("Cache-Control", "no-cache");
                    res.setHeader("Location", req.url + "index.html");
                    res.end();
                } else {
                    //add slash to redirect to isDirectory

                    res.statusCode = 302;
                    res.setHeader("Cache-Control", "no-cache");
                    res.setHeader("Location", req.url + "/");
                    res.end();
                }
            } else {
                var extName = path.extname(myPath);
                res.setHeader("Content-Type", contentTypes[extName]);

                var myStream = fs.createReadStream(myPath);
                myStream.pipe(res);

                myStream.on("error", function(err) {
                    console.log("piping error", err);
                    res.statusCode = 500;
                    res.end();
                });
            }
        }
    });
});
server.listen(8080, () => console.log("im listening!"));
