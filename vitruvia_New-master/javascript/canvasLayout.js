/**
 * Created by San on 1/24/2017.
 */

var kBoardWidth;
var kBoardHeight;

var kStep;

var kPixelWidth;
var kPixelHeight;

var yEnd;
var xEnd;

var gCanvasElement;
var gDrawingContext;

var gridSize;
var axisDelta;


var empty      = "#D3D3D3";

var userSolution = [];



var fillColor = empty;
var lineColor = "#000000"; // "black";

var bleep = new Audio();
bleep.src = 'sounds/bleep.mp3';

var incorrectSound = new Audio();
incorrectSound.src = 'sounds/incorrect.mp3';

var fireWorksSound = new Audio();
fireWorksSound.src = 'sounds/fireworks.mp3';



var blue   = new Image();
blue.src   = 'bricklayer%20colors/blue_02.png';
var black  = new Image();
black.src  = 'bricklayer%20colors/black_02.png';
var white  = new Image();
white.src  = "bricklayer%20colors/white_02.png";
var green  = new Image();
green.src  = "bricklayer%20colors/green_02.png";
var yellow = new Image();
yellow.src = "bricklayer%20colors/yellow_02.png";
var red    = new Image();
red.src    = "bricklayer%20colors/red_02.png";
var gray   = new Image();
gray.src   = "bricklayer%20colors/gray_02.png";

var currentColor = black;
var finalUserSolution = [];
var gameLoaded = false;
var incorrect = false;
var coordinates = false;
//========================================================================================
function checkIfSolutionCellIsNotOccupied(a,b){
    for(j = 0; j<finalUserSolution.length; j++){
        if (finalUserSolution[j].x == a && finalUserSolution[j].y == b) {
            return false;
        }
    }
    return true;
}
//========================================================================================
function generateUserSolution(){
    var xL,yL;
    finalUserSolution = [];
    for(var i=userSolution.length-1; i>=0;i--){
        xL = Math.floor((userSolution[i].x )/kStep);
        yL = gridSize - 1 -  Math.floor(userSolution[i].y/kStep);
        if(finalUserSolution.length !=0){
            if(checkIfSolutionCellIsNotOccupied(xL,yL)){
                finalUserSolution.push(new SolutionCell(xL,yL,userSolution[i].lego));
            }
        } else {
            finalUserSolution.push(new SolutionCell(xL,yL,userSolution[i].lego));
        }
    }
}
//========================================================================================
/*function UserSolutionLog(row,column,lego){
    this.row = row;
    this.column = column;
    this.lego=lego;
}*/
//========================================================================================
function Cell(row, column) {
    this.row = row;
    this.column = column;
}
// =======================================================================================
function legoNameToImage(name){
    switch(name){
        case "BLUE":
            return blue;
            break;
        case "GREEN":
            return green;
            break;
        case "RED":
            return red;
            break;
        case "BLACK":
            return black;
            break;
        case "YELLOW":
            return yellow;
            break;
        case "WHITE":
            return white;
            break;
        case "GRAY":
            return gray;
            break;
    }
}
// =======================================================================================
function legoNameToImagePath(name){
    switch(name){
        case "BLUE":
            return "bricklayer%20colors/blue_02.png";
            break;
        case "GREEN":
            return "bricklayer%20colors/green_02.png";
            break;
        case "RED":
            return "bricklayer%20colors/red_02.png";
            break;
        case "BLACK":
            return "bricklayer%20colors/black_02.png";
            break;
        case "YELLOW":
            return "bricklayer%20colors/yellow_02.png";
            break;
        case "WHITE":
            return "bricklayer%20colors/white_02.png";
            break;
        case "GRAY":
            return "bricklayer%20colors/gray_02.png";
            break;
    }
}
// ==========================================================================================
function imagePathToLegoName(path){
    var legoName;
    switch(path){
        case blue.src:
            legoName = "BLUE";
            break;
        case green.src:
            legoName = "GREEN";
            break;
        case red.src:
            legoName = "RED";
            break;
        case black.src:
            legoName = "BLACK";
            break;
        case yellow.src:
            legoName = "YELLOW";
            break;
        case white.src:
            legoName = "WHITE";
            break;
        case gray.src:
            legoName = "GRAY";
            break;
    }
    return legoName;
}
// =========================================================================================
function setCurrentColor(temp){
    currentColor = temp;
}
// =======================================================================================
function getCursorPalletPosition(e) {
    /* returns Cell with .row and .column properties */
    var x;
    var y;
    var rect = gCanvasElement.getBoundingClientRect();
    x = e.clientX - rect.left - axisDelta;
    y = e.clientY - rect.top;
    x = Math.min(x, kBoardWidth * kStep);
    y = Math.min(y, kBoardHeight * kStep);
    var cell = new Cell(y,x);
    return cell;
}

// =======================================================================================
function vitruviaOnClick(e) {
    var cell   = getCursorPalletPosition(e);
    var row    = cell.row;
    var column = cell.column;

    bleep.play();
    if(incorrect){
    incorrect = false;
    return;/*
    loadExercise(currentConceptId,currentExerciseId);*/
        /*loadExercise(selectedQuestions[currentQuestion].testConceptId,selectedQuestions[currentQuestion].testExerciseId);*/
    } else if(fireworks){
        stopFireWorks();
        /*nextExercise();*/
        /*loadExercise(selectedQuestions[currentQuestion].testConceptId,selectedQuestions[currentQuestion].testExerciseId);*/
        return;
    } else if ((column < xEnd - 1) && (row < yEnd - axisDelta - 1) &&(column > 0) ) {
        var x = Math.floor(column/kStep) * kStep ;
        var y = Math.floor(row/kStep) * kStep;
        if(currentColor == empty){
            gDrawingContext.fillStyle = currentColor;
            gDrawingContext.fillRect(x + axisDelta + 1, y+1, kStep-1, kStep-1);
        } else {
            gDrawingContext.drawImage(currentColor, x + axisDelta + 1, y + 1, kStep - 1, kStep-1);
        }
        if(currentColor == empty){
            userSolution.push(new SolutionCell(x+ axisDelta +1,y+1,"EMPTY"));
        } else {
            userSolution.push(new SolutionCell(x+ axisDelta + 1, y + 1, imagePathToLegoName(currentColor.src)));
        }
    }
    if (coordinates){
        toggleCoordinates(0);
    }
}

// =======================================================================================
function drawLines(color) {
    xEnd = kPixelWidth;
    yEnd = kPixelHeight;

    //gDrawingContext.clearRect(0, 0, xEnd, yEnd);

    gDrawingContext.beginPath();

    /* vertical lines */
    for (var x = axisDelta; x <= xEnd; x += kStep) {
        gDrawingContext.moveTo(0.5 + x, 0);
        gDrawingContext.lineTo(0.5 + x, yEnd-axisDelta);
    }

    /* horizontal lines */
    for (var y = 0; y <= yEnd - axisDelta; y += kStep) {
        gDrawingContext.moveTo(axisDelta    , 0.5 + y);
        gDrawingContext.lineTo(xEnd, 0.5 +  y);
    }

    /* draw it! */
    gDrawingContext.strokeStyle = color;
    gDrawingContext.stroke();

    gDrawingContext.closePath();
}

// =======================================================================================
function drawBoard() {

    xEnd = kPixelWidth;
    yEnd = kPixelHeight;

    gDrawingContext.clearRect(axisDelta, 0, xEnd, yEnd - axisDelta);

    gDrawingContext.beginPath();

    // Canvas base color
    gDrawingContext.fillStyle = empty;
    //gDrawingContext.rect(axisDelta, 0, xEnd, yEnd - axisDelta);
    gDrawingContext.rect(0, 0, xEnd, yEnd);
    gDrawingContext.fill();

    drawLines(lineColor);

    gDrawingContext.closePath();
    for (var x = 0; x<gridSize; x++  ){
        gDrawingContext.font = "15px Comic Sans MS";
        gDrawingContext.fillStyle = "black";
        /*gDrawingContext.textAlign = "center";*/
        gDrawingContext.fillText(gridSize - x - 1, axisDelta/2, x*kStep +(kStep/3));
    }
    for (var z = 0; z<gridSize; z++  ){
        gDrawingContext.font = "15px Comic Sans MS";
        gDrawingContext.fillStyle = "black";
        /*gDrawingContext.textAlign = "center";*/
        gDrawingContext.fillText(z, z*kStep +(kStep), yEnd - (axisDelta/4) );
    }
}
// =======================================================================================
function clearCanvas() {
    //userSolution = [];
    gDrawingContext.fillStyle = empty;
    gDrawingContext.rect(0, 0, xEnd, yEnd);
    gDrawingContext.fill();
}

// =======================================================================================
function hideGridLines(color) {
    drawLines(color);
}

// =======================================================================================
function initGame(side) {
    gameLoaded = true;
    var canvasElement  = document.getElementById("vitruvia_canvas");
    var v              = side;

    // squares per side
    if (v < 1) {
        alert('Smallest size is 2');
        side = 2;
    }

    if (64 < v) {
        alert('Largest size is 64');
        side = 64;
    }
    else { side = v; }




    //var boardSize  = 500;
    var boardSize;
    var delta = 0.4;
    gridSize = side;
    axisDelta = 20;
    if (window.innerWidth < window.innerHeight)
    {
        boardSize = window.innerWidth - delta * window.innerWidth ;
    }
    else
    {
        boardSize = window.innerHeight - delta * window.innerHeight;
    }


    kStep = Math.floor((boardSize-axisDelta) / side);


    //size of canvas we want to use
    kPixelWidth  = kStep * side + 1 +axisDelta;
    kPixelHeight = kStep * side + 1+axisDelta;

    /*kBoardWidth  = kPixelWidth;
    kBoardHeight = kPixelHeight;*/

    kBoardWidth  = boardSize;
    kBoardHeight = boardSize;


    gCanvasElement        = canvasElement;
    gCanvasElement.width  = kPixelWidth ;  // + 2*kStep // the kSteps make room for the pallet
    gCanvasElement.height = kPixelHeight ;// + 2*kStep
    gCanvasElement.addEventListener("click", vitruviaOnClick, false);
    gDrawingContext       = gCanvasElement.getContext("2d");

//    drawPallet();
    drawBoard();

}

// ====================================================================================================================
function updateGame(side){
    userSolution = [];
    /*var canvasElement  = document.getElementById("vitruvia_canvas");*/
    var v              = side;

    // squares per side
    if (v < 1) {
        alert('Smallest size is 2');
        side = 2;
    }

    if (64 < v) {
        alert('Largest size is 64');
        side = 64;
    }
    else { side = v; }




    //var boardSize  = 500;
    var boardSize;
    var delta = 0.4;
    gridSize = side;

    if (window.innerWidth < window.innerHeight)
    {
        boardSize = window.innerWidth - delta * window.innerWidth ;
    }
    else
    {
        boardSize = window.innerHeight - delta * window.innerHeight;
    }


    kStep = Math.floor(boardSize / side);


    //size of canvas we want to use
    kPixelWidth  = kStep * side + 1 +axisDelta;
    kPixelHeight = kStep * side + 1+axisDelta;

    /*kBoardWidth  = kPixelWidth;
     kBoardHeight = kPixelHeight;*/

    kBoardWidth  = boardSize;
    kBoardHeight = boardSize;


    /*gCanvasElement        = canvasElement;*/
    gCanvasElement.width  = kPixelWidth ;  // + 2*kStep // the kSteps make room for the pallet
    gCanvasElement.height = kPixelHeight ;// + 2*kStep
    /*gCanvasElement.addEventListener("click", vitruviaOnClick, false);
    gDrawingContext       = gCanvasElement.getContext("2d");*/

//    drawPallet();
    drawBoard();
}
// ====================================================================================================================
// fireworks display on correct solution
var particles = [],
    rockets = [],
    MAX_PARTICLES = 400;
var launchInterval, loopInterval;
// init
function initFireWorks(){
    /*fireworks = true;*/
    particles = [];
    rockets = [];
    fireWorksSound.play();
    launchInterval = setInterval(launch, 800);
    loopInterval   = setInterval(loop, 1000 / 50);
}


// update mouse position
$(document).mousemove(function(e) {
    e.preventDefault();
    mousePos = {
        x: e.clientX,
        y: e.clientY
    };
});

// launch more rockets!!!
$(document).mousedown(function(e) {
    for (var i = 0; i < 5; i++) {
        launchFrom(Math.random() * xEnd * 2 / 3 + xEnd / 6);
    }
});

function launch() {
    launchFrom(Math.floor(xEnd*Math.random()));
}

function launchFrom(x) {
    if (rockets.length < 10) {
        var rocket = new Rocket(x);
        rocket.explosionColor = Math.floor(Math.random() * 360 / 10) * 10;
        rocket.vel.y = Math.random() * -3 - 4;
        rocket.vel.x = Math.random() * 6 - 3;
        rocket.size = 8;
        rocket.shrink = 0.999;
        rocket.gravity = 0.01;
        rockets.push(rocket);
    }
}

function loop() {
    // update screen size
    /*if (SCREEN_WIDTH != window.innerWidth) {
        canvas.width = SCREEN_WIDTH = window.innerWidth;
    }
    if (SCREEN_HEIGHT != window.innerHeight) {
        canvas.height = SCREEN_HEIGHT = window.innerHeight;
    }*/

    // clear canvas
    gDrawingContext.fillStyle = "rgba(0, 0, 0, 0.05)";
    gDrawingContext.fillRect(0, 0, xEnd, yEnd);

    var existingRockets = [];

    for ( i = 0; i < rockets.length; i++) {
        // update and render
        rockets[i].update();
        rockets[i].render(gDrawingContext);

        // calculate distance with Pythagoras
        var distance = Math.sqrt(Math.pow(mousePos.x - rockets[i].pos.x, 2) + Math.pow(mousePos.y - rockets[i].pos.y, 2));

        // random chance of 1% if rockets is above the middle
        var randomChance = rockets[i].pos.y < (yEnd * 2 / 3) ? (Math.random() * 100 <= 1) : false;

        /* Explosion rules
         - 80% of screen
         - going down
         - close to the mouse
         - 1% chance of random explosion
         */
        if (rockets[i].pos.y < yEnd / 5 || rockets[i].vel.y >= 0 || distance < 50 || randomChance) {
            rockets[i].explode();
        } else {
            existingRockets.push(rockets[i]);
        }
    }

    rockets = existingRockets;

    var existingParticles = [];

    for (var i = 0; i < particles.length; i++) {
        particles[i].update();

        // render and save particles that can be rendered
        if (particles[i].exists()) {
            particles[i].render(gDrawingContext);
            existingParticles.push(particles[i]);
        }
    }

    // update array with existing particles - old particles should be garbage collected
    particles = existingParticles;

    while (particles.length > MAX_PARTICLES) {
        particles.shift();
    }
}

function Particle(pos) {
    this.pos = {
        x: pos ? pos.x : 0,
        y: pos ? pos.y : 0
    };
    this.vel = {
        x: 0,
        y: 0
    };
    this.shrink = .97;
    this.size = 2;

    this.resistance = 1;
    this.gravity = 0;

    this.flick = false;

    this.alpha = 1;
    this.fade = 0;
    this.color = 0;
}

Particle.prototype.update = function() {
    // apply resistance
    this.vel.x *= this.resistance;
    this.vel.y *= this.resistance;

    // gravity down
    this.vel.y += this.gravity;

    // update position based on speed
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;

    // shrink
    this.size *= this.shrink;

    // fade out
    this.alpha -= this.fade;
};

Particle.prototype.render = function(c) {
    if (!this.exists()) {
        return;
    }

    c.save();

    c.globalCompositeOperation = 'lighter';

    var x = this.pos.x,
        y = this.pos.y,
        r = this.size / 2;

    var gradient = c.createRadialGradient(x, y, 0.1, x, y, r);
    gradient.addColorStop(0.1, "rgba(255,255,255," + this.alpha + ")");
    gradient.addColorStop(0.8, "hsla(" + this.color + ", 100%, 50%, " + this.alpha + ")");
    gradient.addColorStop(1, "hsla(" + this.color + ", 100%, 50%, 0.1)");

    c.fillStyle = gradient;

    c.beginPath();
    c.arc(this.pos.x, this.pos.y, this.flick ? Math.random() * this.size : this.size, 0, Math.PI * 2, true);
    c.closePath();
    c.fill();

    c.restore();
};

Particle.prototype.exists = function() {
    return this.alpha >= 0.1 && this.size >= 1;
};

function Rocket(x) {
    Particle.apply(this, [{
        x: x,
        y: yEnd}]);

    this.explosionColor = 0;
}

Rocket.prototype = new Particle();
Rocket.prototype.constructor = Rocket;

Rocket.prototype.explode = function() {
    var count = Math.random() * 10 + 80;

    for (var i = 0; i < count; i++) {
        var particle = new Particle(this.pos);
        var angle = Math.random() * Math.PI * 2;

        // emulate 3D effect by using cosine and put more particles in the middle
        var speed = Math.cos(Math.random() * Math.PI / 2) * 15;

        particle.vel.x = Math.cos(angle) * speed;
        particle.vel.y = Math.sin(angle) * speed;

        particle.size = 10;

        particle.gravity = 0.2;
        particle.resistance = 0.92;
        particle.shrink = Math.random() * 0.05 + 0.93;

        particle.flick = true;
        particle.color = this.explosionColor;

        particles.push(particle);
    }
};

Rocket.prototype.render = function(c) {
    if (!this.exists()) {
        return;
    }

    c.save();

    c.globalCompositeOperation = 'lighter';

    var x = this.pos.x,
        y = this.pos.y,
        r = this.size / 2;

    var gradient = c.createRadialGradient(x, y, 0.1, x, y, r);
    gradient.addColorStop(0.1, "rgba(255, 255, 255 ," + this.alpha + ")");
    gradient.addColorStop(1, "rgba(0, 0, 0, " + this.alpha + ")");

    c.fillStyle = gradient;

    c.beginPath();
    c.arc(this.pos.x, this.pos.y, this.flick ? Math.random() * this.size / 2 + this.size / 2 : this.size, 0, Math.PI * 2, true);
    c.closePath();
    c.fill();

    c.restore();
    c.font = "30px Comic Sans MS";
    c.fillStyle = "red";
    c.textAlign = "center";
    c.fillText("Congrats!", xEnd/2, yEnd/2);
};
//fireworks can be stopped here
function stopFireWorks() {
    fireworks = false;
    fireWorksSound.pause();
    fireWorksSound.currentTime = 0;
    clearInterval(launchInterval);
    clearInterval(loopInterval);
}

// ================================================================================================================
function toggleCoordinates(pivot){

    var tempLego, tempX, tempY;
    var toggleName = document.getElementById('switch_coordinates').innerHTML;
    if(pivot == 1){
        if(toggleName == "YES"){
            document.getElementById('switch_coordinates').innerHTML ="NO";
            coordinates = false;
        } else {
            document.getElementById('switch_coordinates').innerHTML ="YES";
            coordinates = true;
        }
    }
    if (coordinates){
        clearCanvas();
        drawBoard();
        for (k =0 ;k<userSolution.length;k++){
            if(userSolution[k].lego != "EMPTY") {
                tempLego = legoNameToImage(userSolution[k].lego);
                tempX = userSolution[k].x;
                tempY = userSolution[k].y;
                gDrawingContext.drawImage(tempLego, tempX, tempY, kStep - 1, kStep - 1);
            } else {
                gDrawingContext.fillStyle = fillColor;
                tempX = userSolution[k].x;
                tempY = userSolution[k].y;
                gDrawingContext.fillRect(tempX, tempY ,kStep -1 ,kStep - 1);
            }
        }
        for(var j = 0;j<gridSize;j++){
            for(var k = gridSize - 1; k >= 0; k--){
                gDrawingContext.font = "14px Comic Sans MS";
                gDrawingContext.fillStyle = "black";
                gDrawingContext.textAlign = "center";
                gDrawingContext.fillText("("+j+","+k+")", (j*kStep)+(kStep/2)+axisDelta, ((gridSize-k-1)*kStep)+(kStep/2));
            }
        }

    } else {
        clearCanvas();
        drawBoard();
        for (k =0 ;k<userSolution.length;k++){
            if(userSolution[k].lego != "EMPTY") {
                tempLego = legoNameToImage(userSolution[k].lego);
                tempX = userSolution[k].x;
                tempY = userSolution[k].y;
                gDrawingContext.drawImage(tempLego, tempX, tempY, kStep - 1, kStep - 1);
            } else {
                tempX = userSolution[k].x;
                tempY = userSolution[k].y;
                gDrawingContext.fillStyle = fillColor;
                gDrawingContext.fillRect(tempX , tempY ,kStep -1 ,kStep - 1);
            }
        }
    }
}


