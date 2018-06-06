(function() {
    var canv = document.querySelector("canvas");
    var ctx = canv.getContext("2d");

    //ctx.strokeStyle = "#900";

    ctx.beginPath();
    ctx.arc(500, 200, 100, Math.PI / 180 * 360, false);
    ctx.moveTo(500, 300);
    ctx.lineTo(500, 600);
    ctx.moveTo(500, 400);
    ctx.lineTo(700, 290);
    ctx.moveTo(500, 400);
    ctx.lineTo(300, 283);
    ctx.moveTo(300, 700);
    ctx.lineTo(500, 599);
    ctx.moveTo(500, 600);
    ctx.lineTo(700, 706);

    ctx.stroke();
})();
