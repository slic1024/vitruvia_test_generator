/**
 * Created by San on 1/24/2017.
 */

// =====================================================================================================================
// Exercises Solutions are loaded here
var exercises = [];
var currentExerciseId=1;
var currentConceptId=1;
var fireworks = false;
var numberOfQuestions = 1;
var selectedTestConcepts = [];
var selectedQuestions = [];
var formArea = true;
var loadQuestions = true;
var finishTest = false;
var correctScore = 0;
var incorrectScore = 0;
currentQuestion = -1;
var questionLogs = [];
var minutes = 0;
var seconds = 0;


var timeStarted = false;


function QuestionLog(questionInfo, correctOrIncorrect , timeTaken){
    this.questionInfo = questionInfo;
    this.correctOrIncorrect = correctOrIncorrect;
    this.timeTaken = timeTaken;

}
function Exercise(concept_id, exercise_id, array_length, exerciseDetails, solution){
    this.concept_id = concept_id;
    this.exercise_id = exercise_id;
    this.array_length = array_length;
    this.exerciseDetails = exerciseDetails;
    this.solution = solution;
}
function SolutionCell(x,y,lego){
    this.x = x;
    this.y = y;
    this.lego = lego;
}
function TestConcept(testConceptId,testExerciseId){
    this.testConceptId = testConceptId;
    this.testExerciseId = testExerciseId;
}

// =====================================================================================================================
// ------------------------------------------------- Begin Vitruvia Concepts -------------------------------------------
// =====================================================================================================================


// =====================================================================================================================
// ------------------------------------------------- End Vitruvia Concepts -------------------------------------------
// =====================================================================================================================




// =====================================================================================================================
function endTest(){
    var x = document.getElementById("questions");
    var y = document.getElementById("formArea");
    var z = document.getElementById("resultInformation");
    var questionHeading = document.getElementById("questionNumber");
    var summary = document.getElementById('summary');
    var tempSummary = "";
    x.style.display = 'none';
    y.style.display = 'none';
    z.style.display = 'block';
    questionHeading.style.display = 'none';
    /*document.getElementById("resultHeading").innerText = "Test Finished!";
    document.getElementById("results").innerText = "You have answered " + correctScore +"/" +numberOfQuestions + " correctly";*/
    tempSummary += "<p style = 'font-size: 30px;'>Test Finished!</p>";
    tempSummary += "<p style = 'font-size: 28px;'>You have answered "+correctScore+ "/"+numberOfQuestions +" correctly</p>";
    tempSummary += "<table class='table table-striped'>" +"<thead>" +"<tr>" +"<th style ='font-size: 24px;'>Summary</th>" + "</tr>" + "</thead>" +"<tbody>";
    for(var i = 0; i< questionLogs.length; i++){
        tempSummary += "<tr>" + "<td style ='font-size: 20px;'>"+"Question "+ i+"</td>"+
            "<td style ='font-size: 20px;'>"+questionLogs[i].questionInfo+"</td>"+
            "<td style ='font-size: 20px;'>"+questionLogs[i].correctOrIncorrect+"</td>" +
            "<td style ='font-size: 20px;'>"+questionLogs[i].timeTaken+"</td>" +
            "</tr>";
    }
    tempSummary += "</tbody>" + "</table>";
    tempSummary += '<button class = "btn-lg" onclick="location.reload();">Restart Test</button>';
    summary.innerHTML = tempSummary;
}
// ====================================================================================================================
function startAndStopTimer(startOrStop){
    if(timeStarted){
        return;
    }
    var timer = setInterval(function(){
        seconds++;
        if(seconds ==60){
            seconds = 0;
            minutes++;
        }
        document.getElementById("time").innerText = minutes + "m:" + seconds +"s";
    },1000);
    if(startOrStop == "stop"){
        minutes = 0;
        seconds = 0;
        clearInterval(timer);
    }
}
// ====================================================================================================================
function stopTimer(){

}
// ====================================================================================================================
// =====================================================================================
function loadExercise(concept_id,exercise_id) {

    var x = document.getElementById("questions");
    var y = document.getElementById("formArea");
    var z = document.getElementById("resultInformation");

    minutes = 0;
    seconds = 0;

    z.style.display = 'none';
    currentQuestion++;
    if(formArea) {
        y.style.display = 'block';
        x.style.display = 'none';
        formArea = false;
    }
    else {
        x.style.display = 'block';
        y.style.display = 'none';
    }
    if(x.style.display === 'block'){
        document.getElementById('questionNumber').innerText = "Question: " + currentQuestion + "/" + numberOfQuestions
        + " Correct: " + correctScore + " Incorrect: " + incorrectScore + " Remaining: " +(numberOfQuestions - correctScore - incorrectScore -1);
    }
    if(fireworks){
        stopFireWorks();
    }
    /*if(currentQuestion == (numberOfQuestions)){
        finishTest = true;
        document.getElementById('next_exercise').onclick = function(){endTest();};
    }*/
    currentExerciseId = parseInt(exercise_id);
    currentConceptId = parseInt(concept_id);
    for(var i=0; i<exercises.length;i++){
        if (exercises[i].concept_id == currentConceptId && exercises[i].exercise_id == currentExerciseId) {
            document.getElementById("Exercise").innerHTML = exercises[i].exerciseDetails;
            if(gameLoaded){
                updateGame(exercises[i].array_length);
            } else {
                initGame(exercises[i].array_length);
            }
        }
    }
    startAndStopTimer("start");
    timeStarted = true;
}
// ======================================================================================================================
function checkSolution() {
    var cellCount = 0;
    var solutionLength;
    var initialFinalLength = finalUserSolution.length;
    if(fireworks){
        stopFireWorks();
        nextExercise();
        return;
    }
    generateUserSolution();
    initialFinalLength = finalUserSolution.length;
    for (var i=initialFinalLength - 1; i>=0;i--){
        if(finalUserSolution[i].lego ==  "EMPTY"){
            finalUserSolution.splice(i,1);
        }
    }
    for(i=0; i<exercises.length;i++){
        if (exercises[i].concept_id == currentConceptId && exercises[i].exercise_id == currentExerciseId) {
            solutionLength = exercises[i].solution.length;
            if(exercises[i].solution.length == finalUserSolution.length){
                for(var j=0; j<finalUserSolution.length;j++){
                    for(var k = 0; k<finalUserSolution.length; k++){
                        if (exercises[i].solution[j].x == finalUserSolution[k].x && exercises[i].solution[j].y == finalUserSolution[k].y && exercises[i].solution[j].lego == finalUserSolution[k].lego) {
                            cellCount++;
                        }
                    }
                }
            } else {
                clearCanvas();
                incorrect = true;
                gDrawingContext.font = "30px Comic Sans MS";
                gDrawingContext.fillStyle = "red";
                gDrawingContext.textAlign = "center";
                gDrawingContext.fillText("Incorrect!", xEnd/2, yEnd/2);
                incorrectScore++;
                questionLogs.push(new QuestionLog(document.getElementById('questionInfo').innerText,
                    "Incorrect", minutes + "m:" + seconds +"s"));
                setTimeout(function(){
                    if(currentQuestion == (numberOfQuestions)){
                        finishTest = true;
                        endTest();
                    } else {
                    loadExercise(selectedQuestions[currentQuestion].testConceptId,selectedQuestions[currentQuestion].testExerciseId);}
                    }, 1500);
                return;
            }
        }
    }
    if (cellCount == solutionLength){
        /*initFireWorks();*/
        clearCanvas();
        fireworks = true;
        gDrawingContext.font = "30px Comic Sans MS";
        gDrawingContext.fillStyle = "green";
        gDrawingContext.textAlign = "center";
        gDrawingContext.fillText("Correct!", xEnd/2, yEnd/2);
        correctScore++;
        questionLogs.push(new QuestionLog(document.getElementById('questionInfo').innerText,
        "Correct", minutes + "m:" + seconds +"s"));
        setTimeout(function(){
            if(currentQuestion == (numberOfQuestions)){
                finishTest = true;
                endTest();
            } else {
                loadExercise(selectedQuestions[currentQuestion].testConceptId,selectedQuestions[currentQuestion].testExerciseId);}
        }, 1500);
    } else {
        clearCanvas();
        incorrect = true;
        gDrawingContext.font = "30px Comic Sans MS";
        gDrawingContext.fillStyle = "red";
        gDrawingContext.textAlign = "center";
        gDrawingContext.fillText("Incorrect!", xEnd/2, yEnd/2);
        incorrectScore++;
        questionLogs.push(new QuestionLog(document.getElementById('questionInfo').innerText,
            "Incorrect", minutes + "m:" + seconds +"s"));
        setTimeout(function(){
            if(currentQuestion == (numberOfQuestions)){
                finishTest = true;
                endTest();
            } else {
                loadExercise(selectedQuestions[currentQuestion].testConceptId,selectedQuestions[currentQuestion].testExerciseId);}
        }, 1500);
    }
}
// ===================================================================================================================
function toggleSolution() {
    var a = document.getElementById("toggle_solution");
    var tempLego, tempX, tempY;
    if(a.value == "Show Solution"){
        a.value = "Hide Solution";
        for(i=0; i<exercises.length;i++){
            if (exercises[i].concept_id == currentConceptId && exercises[i].exercise_id == currentExerciseId){
                drawBoard();
                for ( var k = 0 ;k<exercises[i].solution.length; k++){
                    tempLego = legoNameToImage(exercises[i].solution[k].lego);
                    tempX = exercises[i].solution[k].x;
                    tempY = exercises[i].solution[k].y;
                    tempX = tempX *kStep +1;
                    tempY = (gridSize -1 -tempY)* kStep +1;
                    gDrawingContext.drawImage(tempLego,tempX + axisDelta,tempY,kStep -1 ,kStep - 1);
                }
            }
        }
    } else {
        a.value = "Show Solution";
        drawBoard();
        for (k =0 ;k<userSolution.length;k++){
            tempLego = legoNameToImage(userSolution[k].lego);
            tempX = userSolution[k].x;
            tempY = userSolution[k].y;
            gDrawingContext.drawImage(tempLego,tempX,tempY,kStep -1 ,kStep - 1);
        }
        if(coordinates){
            toggleCoordinates(0);
        }
    }
}
// ==================================================================================================================
function nextExerciseIdExists() {
    for(i=0; i<exercises.length;i++){
        if (exercises[i].concept_id == currentConceptId && exercises[i].exercise_id == (currentExerciseId+1)){
            currentExerciseId++;
            return true;
        }
    }
    return false;
}
// ===================================================================================================================
function nextConceptIdExists() {
    for(i=0; i<exercises.length;i++){
        if (exercises[i].concept_id == (currentConceptId + 1) && exercises[i].exercise_id == 1){
            currentConceptId++;
            currentExerciseId = 1;
            return true;
        }
    }
    return false;
}
// ===================================================================================================================
function addSelectedConcept(id){
    selectedTestConcepts.push(id);
}
// ===================================================================================================================
function changeNumberOfQuestions(){
    var x = document.getElementById("numberOfQuestions");
    var y = x.options[x.selectedIndex].text;
    numberOfQuestions = parseInt(y);
}
// ================================
function numberOfExercisesInConcept(conceptId){
    var numberOfExercises = 0;
    for(var i = 0; i< exercises.length; i++){
        if(exercises[i].concept_id == conceptId){
            numberOfExercises++;
        }
    }
    return numberOfExercises;
}
// ===================================================================================================================
function startTest(){
    var numberOfConcepts = selectedTestConcepts.length;
    var totalNumberOfQuestions = 0;
    var randomConcept = 0;
    var randomQuestion;
    var numberOfQuestionsInRandomConcept;
    if(selectedTestConcepts.length == 0){
        alert("select atleast one concept");
        return;
    }
    for(var p = 0; p < numberOfConcepts; p ++){
        totalNumberOfQuestions = totalNumberOfQuestions + numberOfExercisesInConcept(selectedTestConcepts[p]);
    }
    if(numberOfQuestions > totalNumberOfQuestions){
        numberOfQuestions = totalNumberOfQuestions;
    }
    for(var x = 0; x< numberOfQuestions; x++){
        if(randomConcept == selectedTestConcepts.length){
            randomConcept = 0;
        }
        //randomConcept = Math.floor(Math.random(selectedTestConcepts.length));
        numberOfQuestionsInRandomConcept = numberOfExercisesInConcept(selectedTestConcepts[randomConcept]);
        randomQuestion = Math.floor(Math.random()*numberOfQuestionsInRandomConcept) + 1;
        selectedQuestions.push(new TestConcept(selectedTestConcepts[randomConcept],randomQuestion));
        randomConcept++;
    }
    loadExercise(selectedQuestions[0].testConceptId,selectedQuestions[0].testExerciseId);
}
// ===================================================================================================================
function nextExercise(){
    if(fireworks){
        stopFireWorks();
    }
    if(nextExerciseIdExists()){
        /*var tempExerciseLink = document.createElement('a');
        tempExerciseLink.href = "#concepts/"+currentConceptId+"/"+currentExerciseId;
        document.body.appendChild(tempExerciseLink);
        tempExerciseLink.click();*/
        loadExercise(currentConceptId,currentExerciseId);

    }else if(nextConceptIdExists()){
         /*tempExerciseLink = document.createElement('a');
        tempExerciseLink.href = "#concepts/"+currentConceptId+"/"+currentExerciseId;
        document.body.appendChild(tempExerciseLink);
        tempExerciseLink.click();*/
         loadExercise(currentExerciseId,currentConceptId);

    } else {
        clearCanvas();
        gDrawingContext.font = "30px Comic Sans MS";
        gDrawingContext.fillStyle = "red";
        gDrawingContext.textAlign = "center";
        gDrawingContext.fillText("This is the end", xEnd/2, yEnd/2);
    }
}