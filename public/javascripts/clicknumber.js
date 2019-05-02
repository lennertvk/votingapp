// CLIENT
class Clicknumber {
    constructor() {
        // set up some basic selectors we'll use often
        let that = this;
        this.btn1 = document.querySelector("#btn1");
        this.btn2 = document.querySelector("#btn2");
        this.btn3 = document.querySelector("#btn3");
        this.btn4 = document.querySelector("#btn4");
        this.btn5 = document.querySelector("#btn5");
        this.btns = document.querySelectorAll("button");
        
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
            if (data.action === "clicked") {
                //that.enlarge();
                that.addup(data.whichbtn);
            }
        });

         // allow for a click on our button
                for(let i = 0; i<5;i++){
                this.btns[i].addEventListener("click", function (e) {
                let sepcs =this.innerHTML;
                that.primus.write({
                    "action": "clicked",
                    "whichbtn" : sepcs
                });
                e.preventDefault();
            });
                }
        
    }

    // enlarge button
    enlarge() {
        console.log("testtt enlarge()");
    }

    //add up numbers
    addup(value){
        let pressed1 = document.getElementById('statsspec1');
        let pressed2 = document.getElementById('statsspec2');
        let pressed3 = document.getElementById('statsspec3');
        let pressed4 = document.getElementById('statsspec4');
        let pressed5 = document.getElementById('statsspec5');

        console.log("value = " + value);
        if(value == 1){
           // console.log(parseInt(pressed1.innerHTML));
            pressed1.innerHTML = parseInt(pressed1.innerHTML) + 1;
        }else if(value == 2){
            pressed2.innerHTML = parseInt(pressed2.innerHTML) + 1;
        }else if(value == 3){
            pressed3.innerHTML = parseInt(pressed3.innerHTML) + 1;
        }else if(value == 4){
            pressed4.innerHTML = parseInt(pressed4.innerHTML) + 1;
        }else if(value == 5){
            pressed5.innerHTML = parseInt(pressed5.innerHTML) + 1;
        }else{
            console.log("er liet iets mis bij de if statement");
        }

    }
}

let p = new Clicknumber();