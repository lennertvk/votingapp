// SERVER

const Primus = require('primus');

let go = function (server) {
    let primus = new Primus(server, {});

    primus.on('connection', function (spark) {
        spark.on("data", function (data) {
            primus.write(data); // BROADCAST TO ALL SPARKS
        });
    });

}

module.exports.go = go;