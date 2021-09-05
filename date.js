
exports.getDate = function() {
    var current = new Date();
    var x = current.getDay();
    var option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return current.toLocaleDateString("en-US", option);
}

exports.getDay = function () {
    var current = new Date();
    var x = current.getDay();
    var option = {
        weekday: "long"
    };

    return current.toLocaleDateString("en-US", option);
}
