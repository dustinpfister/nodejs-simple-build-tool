var gameMod = (function () {
    // public API
    var api = {};
    // a pubic API method
    api.create = function () {
        return { count: 1 };
    };
    api.update = function(game){
        game.count += 1;
    };
    // return the public api
    return api;
}
    ())
