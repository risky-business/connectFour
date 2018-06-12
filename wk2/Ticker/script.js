(function() {
    var headLines = $("#headlines");
    var position = headLines.offset().left;
    var leftPos = position;
    var links = $("A");
    var myReqId;

    $('#headlines')
        .on("mouseover", function() {
            cancelAnimationFrame(myReqId);
        })
        .on("mouseout", function() {
            tick();
        });




    function tick() {
        leftPos--;
        if (leftPos < -links.eq(0).outerWidth()) {
            leftPos +=links.eq(0).outerWidth();
            $('#headlines').append(links.eq(0));
            links = $("A");

        }
        $('#headlines').css({
            left: leftPos + "px"
        });
        leftPos + "px";
        myReqId = requestAnimationFrame(tick);
    }
    tick();
})();
