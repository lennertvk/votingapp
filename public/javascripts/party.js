// CLIENT

class Party {
    constructor() {
        // set up some basic selectors we'll use often
        let that = this;
        this.audio = document.querySelector("#sndHorn");
        this.image = document.querySelector("#imgHorn");
        this.button = document.querySelector("#btnHorn");

        // primus web sockets
        this.primus = Primus.connect("/", {
            reconnect: {
                max: Infinity // Number: The max delay before we try to reconnect.
                    ,
                min: 500 // Number: The minimum delay before we try reconnect.
                    ,
                retries: 10 // Number: How many times we should try to reconnect.
            }
        });

        this.primus.on("data", function (data) {
            if (data.action === "playhorn") {
                that.playHorn();
            }
        });


        // allow for a click on our button
        this.button.addEventListener("click", function (e) {
            that.primus.write({
                "action": "playhorn"
            });
            e.preventDefault();
        });
    }

    // play the horn!
    playHorn() {
        this.audio.volume = 0.1;
        this.audio.play();
        this.image.style.display = "block";
    }
}

let p = new Party();