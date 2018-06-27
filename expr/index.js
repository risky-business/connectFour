const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const basicAuth = require("basic-auth");
const secrets = require("./secrets");

app.use("/spotifyApiSearch", function(req, res, next) {
    const creds = basicAuth(req);
    if (
        !creds ||
        creds.name != secrets.basicAuthUser ||
        creds.pass != secrets.basicAuthPass
    ) {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see this stuff."'
        );
        res.status(401).send("");
    } else {
        next();
    }
});
app.use("/favicon.ico", function(req, res) {
    res.sendStatus(204);
});

app.use(cookieParser());

app.use(function(req, res, next) {
    console.log(req.url);
    if (!req.cookies.accepted && req.url != "/cookie") {
        res.cookie("url", req.url);
        res.redirect("/cookie");
    } else {
        next();
    }
});

// make folder public function!!
app.use(express.static(__dirname + "/portfolio"));

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.get("/cookie", function(req, res) {
    res.send(`
        <!doctype html>
        <title>Accept our Cookies Please and Thank you</title>
        <form method='POST'>
        <input type="checkbox" name="accept">
        <button>submit</button>
        </form>

        `);
});

app.post("/cookie", function(req, res) {
    if (req.body.accept) {
        res.cookie("accepted", true);
        res.redirect(req.cookies.url);
    } else {
        res.send(`
            <!doctype html>
            <title>Accept our coooookies Please</title>
            <h1>ok ok</h1>
            `);
    }
});

app.listen(8080, () => console.log("im Listening....."));

//install cookie parser middleware
