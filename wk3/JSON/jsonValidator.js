(function() {
    var input = $(".json-input");
    var button = $(".json-button");

    button.on("click", function() {
        var val = input.val();
        try {
            JSON.parse(val);
        } catch (e) {
            return alert("Invalid JSON");
        }
        return alert("You have a JSON, GOOD JOB");
    });
})();
