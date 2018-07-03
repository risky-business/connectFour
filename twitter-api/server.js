const express = require("express");
const app = express();
const ca = require("chalk-animation");
const { getToken, getTweets, filterTweets } = require("./module");

app.use(express.static(__dirname + "/public")).get("/data.json", (req, res) => {
    getToken()
        .then(bearerToken => {
            return Promise.all([
                getTweets(bearerToken, "theonion", 3),
                getTweets(bearerToken, "bbc", 3),
                getTweets(bearerToken, "nytimes", 3)
            ]);
        })
        .then(tweetsArray => {
            const theonion = tweetsArray[0];
            const bbc = tweetsArray[1];
            const nytimes = tweetsArray[2];

            let mergedArray = theonion.concat(nytimes, bbc);
            return mergedArray;
            // mergedArray.sort((a, b) => {
            //     return new Date(b.created_at) - new Date(a.created_at);
            // });
            // res.json(filterTweets(mergedArray));
            // console.log(mergedArray);
        })
        .then(merged => {
            // console.log(merged);
            filterTweets(merged)
                .then(resul => {
                    // console.log(resul);
                    res.json(resul);
                })
                .catch(error => {
                    console.log("error", error);
                });
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        });
});

app.listen(8080, () => ca.rainbow("listening......."));
