(function() {
    var kitties = document.getElementsByClassName("kitty");
    var current = 0;
    var dots =document.getElementsByClassName("dot");
    var timer;
    var istransitioning;


    function movekitties(next) {

        dots[current].classList.remove('hightlight');
        kitties[current].classList.remove("onscreen");
        kitties[current].classList.add("exit");
        istransitioning=true;
        console.log("hi");
        if (typeof next!= 'undefined'){
            current= next;
        }else {
            current++;
        }

        if (current >= kitties.length) {
            current = 0;
        }

        kitties[current].classList.add("onscreen");
        dots[current].classList.add('hightlight');
    }
    document.addEventListener('transitionend',function(e){

        if (e.target.classList.contains("exit")) {
            e.target.classList.remove("exit");
            istransitioning=false;
            timer=setTimeout(movekitties, 2000);
        }
    });
    for(var i=0; i<dots.length; i++){
        dots[i].addEventListener('click',getDotClickHandler(i));
        console.log(i);

    }

    function getDotClickHandler(n){

        return function(e){
            if (e.target.classList.contains('hightlight')){
                return;
            }
            if (istransitioning){
                return;
            }

            clearTimeout(timer);
            movekitties(n);
        };
    }


    timer=setTimeout(movekitties, 2000);
}());
