const fs = require("fs");
const myPath = __dirname + "/files";
readfiles(myPath);
function readfiles(myPath) {
    fs.readdir(myPath, (err, files) => {
        if (err) {
            console.log(err);
            process.exit();
        }

        for (let i = 0; i < files.length; i++) {
            fs.stat(myPath + "/" + files[i], function(err, stats) {
                if (err) {
                    console.log(err);
                    process.exit();
                }
                if (stats.isDirectory()) {
                    readfiles(myPath + "/" + files[i]);
                }
            });
        }
        console.log(myPath + " contains " + files);
    });
}
