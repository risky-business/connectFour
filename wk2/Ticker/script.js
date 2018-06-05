(function() {
    var headlines = document.getElementById("headlines");
    var left = headlines.offsetLeft;
    var links = headlines.getElementsByTagName("A");
    var myReqId;

    headlines.addEventListener("mouseover", function() {
        cancelAnimationFrame(myReqId);
    });
    headlines.addEventListener("mouseout", function() {
        tick();
    });

    function tick() {
        left--;
        if (left < -links[0].offsetWidth) {
            left += links[0].offsetWidth;
            headlines.appendChild(links[0]);
            headlines.style.left = left + "px";
        }
        headlines.style.left = left + "px";
        myReqId = requestAnimationFrame(tick);
    }

    tick();
})();
