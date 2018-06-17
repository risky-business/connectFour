(function() {
    var currentPlayer = "player1";

    $(".column").on("click", function(e) {
        var slotsInColumn = $(e.currentTarget).find(".slot");
        for (var i = 5; i >= 0; i--) {
            if (!slotsInColumn.eq(i).hasClass("player1")) {
                if (!slotsInColumn.eq(i).hasClass("player2")) {
                    break;
                }
            }
        }
        slotsInColumn.eq(i).addClass(currentPlayer);

        if (checkForVictory(slotsInColumn)) {
            //alert("Vertical victory");
        } else {
            if (checkForVictory($(".row" + i))) {
                //alert("victory");
            }
        }

        if (currentPlayer == "player1") {
            currentPlayer = "player2";
        } else if (currentPlayer == "player2") {
            currentPlayer = "player1";
        }
    });

    function checkForVictory(slots) {
        var str = "";
        for (var i = 0; i < slots.length; i++) {
            if (slots.eq(i).hasClass(currentPlayer)) {
                str += "v";
            } else {
                str += "x";
            }
        }

        return str.indexOf("vvvv") > -1;
    }
    $(".resetButton").on("click", function() {
        location.reload(); //once game is done
    });
})();

// // function(){
// // var col=0;
// // var row=-1;
// //
// // [
// //     ".column.nth-child(col1) .row:nth-child(row0)",
// //     ".column.nth-child(col2) .row:nth-child(row0)",
// //     ".column.nth-child(col3) .row:nth-child(row0)",
// //     ".column.nth-child(col4) .row:nth-child(row0)",
// //     ".column.nth-child(col5) .row:nth-child(row0)",
// //     ".column.nth-child(col6) .row:nth-child(row0)",
// //     ".column.nth-child(col1) .row:nth-child(row0)"
// //
// //
// // ]
// // }
// var victories=[
//     [0,7,14,21],
//     [1,8,15,22],
//     [2,9,16,23],
//     [3,8,13,18]
// ]
//
//
//
//
// var slots =$('.slot');
// var list =[0,7,14,21]
//
// if (slots.eq(lists [0]).hasClass(currentPlayer)){
//     if (slots.eq(lits[1]).hasClass(currentPlayer)){
//
//     }
// }
//
//
//
//
//
//
//
//
//
// \

///$('.resetButton').on('click', function(){
//location.reload(); //once game is done
// }
