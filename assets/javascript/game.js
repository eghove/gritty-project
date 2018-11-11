// alert('linked!');

//GLOBAL VARIABLES
//-----------------------------------------------------------
//these track the position of the player
let posLeft = 0;
let posTop = 0;


//FUNCTIONS
//-----------------------------------------------------------


//moves the player to the right
function moveRight() {
    var elem = document.getElementById("player");
    posLeft++;
    elem.style.left = posLeft + 'vh';
}

//moves the player to the left
function moveLeft() {
    var elem = document.getElementById("player");
    posLeft--;
    elem.style.left = posLeft + 'vh';
}

//moves the player down
function moveDown() {
    var elem = document.getElementById("player");
    posTop++;
    elem.style.top = posTop + 'vh';
}

//moves the player up
function moveUp() {
    var elem = document.getElementById("player");
    posTop--;
    elem.style.top = posTop + 'vh';
}



//MAIN PROCESSESS
//-----------------------------------------------------------

// PLAYER MOVEMENT
document.onkeydown = function (event) {
    let keyPressed = event.keyCode;
    //if right arrow key pressed
    if (keyPressed == 39) {
        moveRight();
    }
    //if left arrow key pressed and not already at the most left of the ice-rink
    else if (keyPressed == 37 && posLeft > 0) {
        moveLeft();
    }
    //if down arrow key pressed
    else if (keyPressed == 40) {
        moveDown();
    }
    //if up arrow key pressed and not already at the top of ice-rink
    else if (keyPressed == 38 && posTop > 0) {
        moveUp();
    }
    console.log("posLeft " + posLeft);
    console.log("posTop: " + posTop);
    //default case

}

