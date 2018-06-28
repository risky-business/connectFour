const express = require("express");
const app = express();
const hb = require("express-handlebars");
const fs = require("fs");

var files = fs.readdirSync(__dirname + "/projects");

app.use(express.static("projects"));
app.use(express.static("public"));

app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
    fs.readdir(__dirname + "/projects", (err, files) => {
        if (err) {
            console.log("Error is in the directory reading: ", err);
        }
        res.render("home", {
            layout: "main",
            projects: files
        });
    });
});

app.get("/project/:projectName", (req, res) => {
    files.forEach(function(file) {
        const description = require(__dirname +
            "/projects/" +
            file +
            "/description.json");
        if (req.params.projectName == description.dir) {
            res.render("descriptions", {
                layout: "main",
                name: description.name,
                description: description.description,
                url: req.params.projectName,
                dir: description.dir
            });
        }
    });
});

app.get("/:projectName", (req, res) => {
    fs.readdir(__dirname + "/projects", (err, files) => {
        if (err) {
            console.log("Error is in the directory reading: ", err);
        }
        res.render("home", {
            layout: "main",
            projects: files
        });
    });
});
app.listen(8080, () => {
    console.log("I'm listening.......");
});
