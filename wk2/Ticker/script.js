(function() {
    var headlines = document.getElementById("headlines");
    var left = headlines.offsetLeft;
    var links = headlines.getElementsByTagName("A");

    function tick() {
        left--;
        if (left < -links[0].offsetWidth) {
            left += links[0].offsetWidth;
            headlines.appendChild(links[0]);
            headlines.style.left = left + "px";
        }
        headlines.style.left = left + "px";
        requestAnimationFrame(tick);
    }

    tick();
})();
