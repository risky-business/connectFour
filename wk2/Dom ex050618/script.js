//#1
var div = document.getElementById("that-div");
document.addEventListener("mousemove", function(event) {
    var moveX = event.clientX;
    var moveY = event.clientY;

    whenmovemouse(moveX, moveY);
});

function whenmovemouse(x, y) {
    div.style.left = x + "px";
    div.style.top = y + "px";
}

/// ex#2

var textarea = document.getElementById("this-textarea");
var speech =
    "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this. But, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.";

textarea.addEventListener("input", function() {
    //console.log(textarea.value.length);
    textarea.value = speech.slice(0, textarea.value.length);
});

//#3
(function() {
    var div2 = document.getElementById("this-div");

    div2.addEventListener("mousedown", function() {
        div2.style.backgroundColor = colorPicker();
    });

    div2.addEventListener("mouseup", function() {
        div2.style.backgroundColor = colorPicker();
    });
    function colorPicker() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 10)];
        }
        return color;
    }
})();

//#4

(function() {
    var outerDiv = document.getElementById("outer-div");
    var innerDiv = document.getElementById("inner-div");

    outerDiv.addEventListener("click", function() {
        outerDiv.style.backgroundColor = colorPicker();
    });
    innerDiv.addEventListener("click", function(event) {
        innerDiv.style.backgroundColor = colorPicker();
        event.stopPropagation();
    });

    function colorPicker() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 10)];
        }
        return color;
    }
})();
