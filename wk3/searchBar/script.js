(function() {
    var xhr;
    var inp = $("input");
    var results = $("#results");
    inp.on("input", function() {
        var val = inp.val();
        if (val.length == 0) {
            results.empty();
            return;
        }

        if (xhr) {
            xhr.abort();
        }

        xhr = $.ajax({
            url: "https://flame-egg.glitch.me/",
            data: {
                q: val
            },
            success: function(matches) {
                console.log(matches);

                if (matches.length == 0) {
                    results.html("<em>No Results</em>");
                } else {
                    var html = "";
                    for (var j = 0; j < matches.length; j++) {
                        html =
                            html +
                            '<div class="result">' +
                            matches[j] +
                            "</div>";
                    }
                    results.html(html);
                }
            }
        });
    });
    results.on("mouseover", ".result", function(e) {
        $(".highlight").removeClass("highlight");
        $(e.target).addClass("highlight");
    });
    results.on("mousedown", ".result", function(e) {
        var text = $(e.target).text();
        inp.val(text);
        results.empty();
    });
})();
//blur and focus
