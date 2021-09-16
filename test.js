var gameMod = (function () {

    // public API
    var api = {};

    // a private method
    var add = function (a, b) {
        return a + b;
    };

    // a pubic API method
    api.func1 = function (a, b) {
        return a + b;
    }

    // return the public api
    return api;

}
    ())
