
// var player = 1;
var paceA1 = 0;
var paceA2 = 0;
var paceB1 = 0;
var paceB2 = 0;

var dice;
var glowBox;

var playerA = false;
var playerB = false;

var started = false;

// if (player==1) player1();
// else player2();

$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Press the roll button to continue.);
      player1();
      started = true;
    }
  });


function player1() {
    $("#turn").text("TURN: Player A");
    $(".btn").click(function() {
        dice = Math.floor(Math.random()*6)+1;
        $("#turn").text(dice);
        if (!playerA) {
            if (dice == 6) {
                playerA = true;
            }
        }
        else {
            if (paceA1 < 27) {
                paceA1 = paceA1+dice;
                if (paceA1>27) {
                    paceA2 = paceA1 - 27;
                    paceA1 = 27;
                    moveA(paceA1);
                    moveA(paceA2);
                    break;
                }
            }
            else if (paceA1 === 27) {
                paceA2 += dice;
                moveA(paceA2);
                if (paceA2 == 27) {
                    $("h1").text("Player A Wins!!");
                    started = false;
                }
            }
        }
        player2();
    });
   
}

function player2() {
    $("#turn").text("TURN: Player B");
    dice = diceRoll();
    $("#turn").text(dice);
    if (playerB == false) {
        if (dice == 6) {
            playerB = true;
        }
    }
    else if (playerB = true) {
        if (paceB1 < 27) {
            paceB1 += dice;
            if (paceB1>27) {
                paceB2 = paceB1 - 27;
                paceB1 = 27;
                moveB(paceB1);
                moveB(paceB2);
                break;
            }
        }
        else if (paceB1 == 27) {
            paceB2 += dice;
            moveB(paceB2);
            if (paceB2 == 27) {
                $("h1").text("Player B Wins!!");
                started = false;
            }
        }
    }
    player1();
}

function moveA(paceA) {
    if (paceA <= 7) {
        glowBox = "box1"+paceA;
    }
    else if ((paceA>7) && (paceA<=14)) {
        glowBox = "box"+(paceA-6)+"8";
    }
    else if ((paceA>14)&&(paceA<=21)) {
        glowBox = "box8"+(paceA-14);
    }
    else if ((paceA>21)&&(paceA<=27)) {
        glowBox = "box" + (paceA-20) + "7";
    }
    glowA(glowBox);
}

function moveB(paceB) {
    if (paceB <= 7) {
        glowBox = "box8"+paceB;
    }
    else if ((paceB>7) && (paceB<=14)) {
        glowBox = "box"+(paceB-6)+"7";
    }
    else if ((paceB>14)&&(paceB<=21)) {
        glowBox = "box1"+(paceB-14);
    }
    else if ((paceB>21)&&(paceB<=27)) {
        glowBox = "box"+(paceB-20)+"8";
    }
    glowB(glowBox);
}

function glowA(on) {
    $(on).addClass("glowA");
}

function glowB(on) {
    $(on).addClass("glowB");
}

