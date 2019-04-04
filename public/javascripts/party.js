// CLIENT

class Party {
    constructor() {
        // set up some basic selectors we'll use often
        let that = this;
        this.audio = document.querySelector("#sndHorn");
        this.image = document.querySelector("#imgHorn");
        this.button = document.querySelector("#btnHorn");

        // allow for a click on our button
        this.button.addEventListener("click", function (e) {
            alert('clicking');
            e.preventDefault();
        });
    }

    // play the horn!
    playHorn() {
        this.audio.play();
        this.image.style.display = "block";
    }
}

let p = new Party();