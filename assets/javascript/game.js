


//map crystalButton1 to rand1, crstalButton2 to rand2 etc.. this in html

var randNum;//display to user
var total;
var rand1;
var rand2;
var rand3;
var rand4;

function addCrystal1() {
    total = total + rand1;

}
function addCrystal2() {
    total = total + rand2;

}
function addCrystal3() {
    total = total + rand3;

}
function addCrystal4() {
    total = total + rand4;

}

//
if (total > randNum) {//loss
    losses++;
    newGame();
}
else {
    //update html on screen
}

function newGame() {
    rand1 = Math.floor(Math.random() * 101) + 19;//19-120
    rand2 = Math.floor(Math.random() * 101) + 19;
    rand3 = Math.floor(Math.random() * 101) + 19;
    rand4 = Math.floor(Math.random() * 101) + 19;
}

