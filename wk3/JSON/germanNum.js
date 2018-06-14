function askForNumber() {
    var n = prompt("Enter a # between 1 and 10");

    if (n >= 1 && n <= 10) {
        return n;
    } else {
        throw new Error("not a valid number");
    }
}

function translateNumberToGerman() {
    try {
        var n = askForNumber();
    } catch (e) {
        return translateNumberToGerman();
    }

    if (n == 1) {
        return "eins";
    } else if (n == 2) {
        return "zwei";
    } else if (n == 3) {
        return "drei";
    } else if (n == 4) {
        return "vier";
    } else if (n == 5) {
        return "fünf";
    } else if (n == 6) {
        return "sechs";
    } else if (n == 7) {
        return "sieben";
    } else if (n == 8) {
        return "acht";
    } else if (n == 9) {
        return "neun";
    } else if (n == 10) {
        return "zehn";
    }
}

translateNumberToGerman();
