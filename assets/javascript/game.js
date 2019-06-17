


$(document).ready(function () {

    var randNum;
    var total;
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
        //set #scorebox to 0
        //display new randNum
    }

    $("#crystal1").on("click", function () {

        total = total + rand1;

    });
    $("#crystal2").on("click", function () {

        total = total + rand2;

    });
    $("#crystal3").on("click", function () {

        total = total + rand3;

    });
    $("#crystal4").on("click", function () {

        total = total + rand4;

    });



    if (total > randNum) {//loss
        losses++;
        newGame();
    }
    else if (total === randNum) {//win 
        wins++;
        newGame();
    }
    else {//total < randNum
        //update html on screen

    }

})

