// CLIENT

class Party {
    constructor() {
        let that = this;
        this.audio = document.querySelector("#sndHorn");
        this.image = document.querySelector("#imgHorn");
        this.button = document.querySelector("#btnHorn");


        this.primus = Primus.connect("/", {
            reconnect: {
                max: Infinity // Number: The max delay before we try to reconnect.
                    ,
                min: 500 // Number: The minimum delay before we try reconnect.
                    ,
                retries: 10 // Number: How many times we should try to reconnect.
            }
        });

        this.primus.on('data', function (data) {
            if (data.action === "horn") {
                that.playHorn();
            }
        });

        this.button.addEventListener("click", function (e) {
            that.primus.write({
                'action': 'horn'
            });
            e.preventDefault();
        });
    }

    playHorn() {
        this.audio.play();
        this.image.style.display = "block";
    }
}

let p = new Party();