
$(document).ready(function () {

    var randNum;
    var total = 0;
    var rand1;
    var rand2;
    var rand3;
    var rand4;
    var wins = 0;
    var losses = 0;

    function newGame() {
        total = 0;
        randNum = Math.floor(Math.random() * 101) + 19;//19-120
        rand1 = Math.floor(Math.random() * 12) + 1;//1-12
        rand2 = Math.floor(Math.random() * 12) + 1;
        rand3 = Math.floor(Math.random() * 12) + 1;
        rand4 = Math.floor(Math.random() * 12) + 1;
        $("#scorebox").text(total);
        $("#randnumbox").text(randNum);
        $("#winbox").text("wins: " + wins);
        $("#lossbox").text("losses: " + losses);
    }

    newGame();

    //use classes and this.value strategy is another probably better route, but will try hard coding each button first
    $("#crystal1").on("click", function () {
        console.log("crystal 1 clicked!");
        total = total + rand1;
        $("#scorebox").text(total);
        winOrLose();
    });
    $("#crystal2").on("click", function () {
        console.log("crystal 2 clicked!");
        total = total + rand2;
        $("#scorebox").text(total);
        winOrLose();
    });
    $("#crystal3").on("click", function () {
        console.log("crystal 3 clicked!");
        total = total + rand3;
        $("#scorebox").text(total);
        winOrLose();
    });
    $("#crystal4").on("click", function () {
        console.log("crystal 4 clicked!");
        total = total + rand4;
        $("#scorebox").text(total);
        winOrLose();
    });

    function winOrLose() {
        if (total > randNum) {//loss
            losses++;
            newGame();
        }
        if (total === randNum) {//win 
            wins++;
            newGame();
        }
    }



})

