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
            setTimeout(function() {
                $(".popup-overlay").addClass("active");
            }, 500);
        } else {
            if (checkForVictory($(".row" + i))) {
                setTimeout(function() {
                    $(".popup-overlay").addClass("active");
                }, 500);
            } else {
                diagonalVictory();
            }
            if (currentPlayer == "player1") {
                currentPlayer = "player2";
            } else if (currentPlayer == "player2") {
                currentPlayer = "player1";
            }
        }
    });

    function diagonalVictory() {
        var slots = $(".slot");
        //diagonal possibilites
        var lists = [
            [0, 7, 14, 21],
            [7, 14, 21, 28],
            [14, 21, 28, 35],
            [1, 8, 15, 22],
            [8, 15, 22, 29],
            [2, 9, 16, 23],
            [6, 13, 20, 27],
            [13, 20, 27, 34],
            [20, 27, 34, 41],
            [12, 19, 26, 33],
            [19, 26, 33, 40],
            [18, 25, 32, 39],
            [3, 8, 13, 18],
            [4, 9, 14, 19],
            [9, 14, 19, 24],
            [5, 10, 15, 20],
            [10, 15, 20, 25],
            [15, 20, 25, 30],
            [11, 16, 21, 26],
            [16, 21, 26, 31],
            [21, 26, 31, 36],
            [17, 22, 27, 32],
            [22, 27, 32, 37],
            [23, 28, 33, 38]
        ];

        for (var i = 0; i < lists.length; i++) {
            if (slots.eq(lists[i][0]).hasClass(currentPlayer)) {
                if (slots.eq(lists[i][1]).hasClass(currentPlayer)) {
                    if (slots.eq(lists[i][2]).hasClass(currentPlayer)) {
                        if (slots.eq(lists[i][3]).hasClass(currentPlayer)) {
                            setTimeout(function() {
                                $(".popup-overlay").addClass("active");
                            }, 500);
                        }
                    }
                }
            }
        }
    }

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
    $("#resetButton").on("click", function() {
        location.reload(); //once game is done
    });
})();
