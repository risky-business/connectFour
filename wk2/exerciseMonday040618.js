//ex #1

function fn(select) {
    var str = document.querySelector(select);

    for (var i = 0; i < str.length; i++) {
        str[i].style.fontWeight = "bold";
        str[i].style.fontStyle = "italic";
        str[i].style.textDecoration = "underline";
    }
}
fn();

//ex #2
function fun(x) {
    var str = document.getElementsByClassName(x);
    return str;
}
fun("content");

// ex #3
function c() {
    var elem = document.createElement("div");
    var textNode = document.createTextNode("AWESOME");
    elem.style.position = "fixed";
    elem.style.zindex = 2147483647;
    elem.style.left = 20 + "px";
    elem.style.top = 100 + "px";
    elem.style.fontSize = 200 + "px";
    elem.appendChild(textNode);
    document.body.appendChild(elem);
}
c();
