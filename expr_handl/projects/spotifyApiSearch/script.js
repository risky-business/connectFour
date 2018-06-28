(function() {
    var more = $(".more");
    var xhr;
    var resultsHtml;
    var nextUrl;

    $(".button").on("click", function() {
        $.ajax({
            url: "https://elegant-croissant.glitch.me/spotify",
            data: {
                q: $("input").val(),
                type: $("select").val()
            },
            success: function(data) {
                data = data.artists || data.albums;

                $("h2").html('Results for "' + $("input").val() + '"');

                resultsHtml = "";
                for (var i = 0; i < data.items.length; i++) {
                    if (data.items[i].images.length != 0) {
                        resultsHtml += '<div class="result">';
                        resultsHtml +=
                            '<a href="' +
                            data.items[i].external_urls.spotify +
                            '">' +
                            '<img src="' +
                            data.items[i].images[0].url +
                            '">' +
                            "</a>";
                        resultsHtml +=
                            '<div class="name">' +
                            '<a href="' +
                            data.items[i].external_urls.spotify +
                            '">' +
                            data.items[i].name +
                            "</a>" +
                            "</div>";
                        resultsHtml += "</div>";
                    } else {
                        resultsHtml += '<div class="result">';
                        resultsHtml += '<img src="default-placeholder.png">';
                        resultsHtml += "</div>";
                    }
                    $("#results").html(resultsHtml);
                    if (data.next) {
                        $("footer").css({
                            display: "block"
                        });
                        nextUrl = data.next.replace(
                            "api.spotify.com/v1/search",
                            "elegant-croissant.glitch.me/spotify"
                        );
                        checkScroll();
                    } else {
                        $("footer").css({
                            display: "none"
                        });
                    }
                }
            }
        });
    });

    more.on("click", function() {
        if (xhr) {
            xhr.abort();
        }
        xhr = $.ajax({
            url: nextUrl,

            success: function(data) {
                data = data.artists || data.albums;
                resultsHtml = "";
                for (var i = 0; i < data.items.length; i++) {
                    if (data.items[i].images.length != 0) {
                        resultsHtml += '<div class="result">';
                        resultsHtml +=
                            '<a href="' +
                            data.items[i].external_urls.spotify +
                            '">' +
                            '<img src="' +
                            data.items[i].images[0].url +
                            '">' +
                            "</a>";
                        resultsHtml +=
                            '<div class="name">' +
                            '<a href="' +
                            data.items[i].external_urls.spotify +
                            '">' +
                            data.items[i].name +
                            "</a>" +
                            "</div>";
                        resultsHtml += "</div>";
                    } else {
                        resultsHtml += '<div class="result">';
                        resultsHtml += '<img src="default-placeholder.png">';
                        resultsHtml += "</div>";
                    }
                }
                $("#results").append(resultsHtml);
                if (data.next) {
                    $("footer").css({
                        display: "block"
                    });
                    nextUrl = data.next.replace(
                        "api.spotify.com/v1/search",
                        "elegant-croissant.glitch.me/spotify"
                    );
                    checkScroll();
                } else {
                    $("footer").css({
                        display: "none"
                    });
                }
            }
        });
    });
    function checkScroll() {
        setTimeout(function() {
            if (
                $(document).scrollTop() ==
                $(document).height() - $(window).height()
            ) {
                $(".more").click();
            } else {
                checkScroll();
            }
        }, 1000);
    }
})();

// }
