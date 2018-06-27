(function() {
    var menuIcon = document.getElementsByClassName("hamburger-menu")[0];
    var menu = document.getElementsByClassName("menu")[0];
    var menuBack = document.getElementById("hamburger-pop-menu");
    var x = document.getElementById("x");

    menuIcon.addEventListener("click", function() {
        document.body.classList.add("active");
    });
    menu.addEventListener("click", function(e) {
        e.stopPropagation();
    });
    menuBack.addEventListener("click", function() {
        document.body.classList.remove("active");
    });
    x.addEventListener("click", function() {
        document.body.classList.remove("active");
    });

    setTimeout(function() {
        $(".greeting-background").css({
            display: "block"
        });
    }, 2000);

    $(".close").on("click", function() {
        $(".greeting-background").css({
            display: "none"
        });
    });
})();
