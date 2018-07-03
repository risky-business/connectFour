const https = require("https");
const { consumerKey, consumerSecret } = require("./secrets");

module.exports.getToken = function getToken() {
    return new Promise((resolve, reject) => {
        let options = {
            method: "POST",
            host: "api.twitter.com",
            path: "/oauth2/token",
            headers: {
                Authorization:
                    "Basic " +
                    new Buffer(consumerKey + ":" + consumerSecret).toString(
                        "base64"
                    ),
                "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8"
            }
        };

        let cb = function(response) {
            let str = "";
            response.on("data", function(chunk) {
                str += chunk;
            });
            response.on("end", function() {
                if (JSON.parse(str).token_type != "bearer") {
                    reject(JSON.parse(str));
                } else {
                    resolve(JSON.parse(str).access_token);
                }
            });
        };
        const req = https.request(options, cb);
        req.write("grant_type=client_credentials");
        req.end();
    });
};

module.exports.getTweets = function getTweets(bearerToken, name, count) {
    return new Promise((resolve, reject) => {
        let options = {
            method: "GET",
            host: "api.twitter.com",
            path: `/1.1/statuses/user_timeline.json?screen_name=${name}&count=${count}`,
            headers: {
                Authorization: "Bearer " + bearerToken,
                "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8"
            }
        };

        let cb = function(response) {
            let str = "";

            response.on("data", function(chunk) {
                str += chunk;
            });

            response.on("end", function() {
                if (JSON.parse(str).errors) {
                    reject(JSON.parse(str));
                } else {
                    resolve(JSON.parse(str));
                }
            });
        };
        const req = https.request(options, cb);

        req.end();
    });
};

module.exports.filterTweets = function filterTweets(tweets) {
    return new Promise(function(resolve, reject) {
        console.log(tweets);

        const filteredTweets = [];
        //     let j = 0;
        for (var i = 0; i < tweets.length; i++) {
            filteredTweets.push({ name: tweets[i]["text"] });
            //         let json = {};
            //         let obj = {};
            //         const urlArray = tweets[i].entities.urls;
            //         const mediaArray = tweets[i].entities.media;
            //
            //         if (urlArray.length != 1) {
            //             continue;
            //         } else {
            //             const link = urlArray[0].url;
            //             var text = tweets[i].text;
            //             text = text.replace(link, "");
            //             if (mediaArray) {
            //                 var media = mediaArray[0].url;
            //                 text = text.replace(media, "");
            //             }
            //             text += ` (Source: ${tweets[i].user.name})`;
            //             obj["link"] = link;
            //             obj["text"] = text;
            //             json[j] = obj;
            //             j++;
            //             filteredTweets.push(json);
            //         }
        }
        resolve(filteredTweets);
    });
};
