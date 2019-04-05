// SERVER

let go = function (server) {
    const Primus = require("primus");
    let primus = new Primus(server, {});

    primus.on("connection", function (spark) {
        spark.on("data", function (data) {
            primus.write(data);
        });
    });

}

module.exports.go = go;