(function() {
    var headLines = $("#headlines");
    var position = headLines.offset().left;
    var leftPos = position;
    var links;

    var myReqId;
    $.ajax({
        url: "data.json",
        method: "GET",
        success: function(resp) {
            var html = "";
            for (var i = 0; i < resp.length; i++) {
                html += "<a href=" + resp[i].link + ">" + resp[i].name + "</a>";
            }
            $("#headlines").append(html);
            links = $("A");
            tick();
        }
    });

    $("#headlines")
        .on("mouseover", function() {
            cancelAnimationFrame(myReqId);
        })
        .on("mouseout", function() {
            tick();
        });

    function tick() {
        leftPos--;
        if (leftPos < -links.eq(0).outerWidth()) {
            leftPos += links.eq(0).outerWidth();
            $("#headlines").append(links.eq(0));
            links = $("A");
        }
        $("#headlines").css({
            left: leftPos + "px"
        });
        leftPos + "px";
        myReqId = requestAnimationFrame(tick);
    }
})();
