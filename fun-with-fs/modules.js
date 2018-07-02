const fs = require("fs");
const myPath = __dirname + "/files";
const { promisify } = require("util");
const promisifiedReaddir = promisify(fs.readdir);
const statss = promisify(fs.stat);

promisifiedReaddir(myPath).then(function(files) {
    for (let i = 0; i < files.length; i++) {
        const newPath = myPath + "/" + files[i];
        statss(newPath)
            .then(stats => {
                if (stats.isDirectory()) {
                    console.log(newPath + "is a Directory");
                } else {
                    console.log(newPath + "is not a Directory");
                }
            })
            .then(() => {
                console.log("DONE!!!");
            })
            .catch(function(err) {
                console.log("error: " + err);
            });
    }
});
