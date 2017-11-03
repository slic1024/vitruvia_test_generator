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
var score = 0;
currentQuestion = -1;
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
// Concept 1
exercises.push(new Exercise(1,1,6,
    "<h3>Concept 1 Demo 1</h3>" +
    "<p>Put a 1x1 GREEN brick in the cells whose locations are:</p>" +
    "<p>(0,0), (5,1), (1,2), (4,3), (2,4), (3,5)</p>",
    [   new SolutionCell(0,0,"GREEN"),
        new SolutionCell(5,1,"GREEN"),
        new SolutionCell(1,2,"GREEN"),
        new SolutionCell(4,3,"GREEN"),
        new SolutionCell(2,4,"GREEN"),
        new SolutionCell(3,5,"GREEN")]
));
exercises.push(new Exercise(1,2,6,
    "<h3>Concept 1 Exercise 1</h3>" +
    "<p>Put a 1x1 RED brick in the cells whose locations are:</p>" +
    "<p>(0,0), (5,0), (5,5), (0,5)</p>",
     [   new SolutionCell(0,0,"RED"),
         new SolutionCell(0,5,"RED"),
         new SolutionCell(5,0,"RED"),
         new SolutionCell(5,5,"RED")]
));
exercises.push(new Exercise(1,3,6,
    "<h3>Concept 1 Exercise 2</h3>" +
    "<p>Put a 1x1 YELLOW brick in the cells whose locations are:</p>" +
    "<p>(0,0), (1,1), (2,2), (3,3), (4,4), (5,5)</p>",
    [   new SolutionCell(0,0,"YELLOW"),
        new SolutionCell(1,1,"YELLOW"),
        new SolutionCell(2,2,"YELLOW"),
        new SolutionCell(3,3,"YELLOW"),
        new SolutionCell(4,4,"YELLOW"),
        new SolutionCell(5,5,"YELLOW")]
));
exercises.push(new Exercise(1,4,5,
    "<h3>Concept 1 Exercise 3</h3>" +
    "<p>Put a 1x1 GRAY brick in the cells whose locations are:</p>" +
    "<p>(2,0), (3,0), (2,1), (3,1)</p>",
    [   new SolutionCell(2,0,"GRAY"),
        new SolutionCell(3,0,"GRAY"),
        new SolutionCell(2,1,"GRAY"),
        new SolutionCell(3,1,"GRAY")]
));
exercises.push(new Exercise(1,5,5,
    "<h3>Concept 1 Exercise 4</h3>" +
    "<p>Put a 1x1 BLUE brick in the cells whose locations are:</p>" +
    "<p>(0,0), (0,1), (0,2), (0,3), (0,4) </p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(0,4,"BLUE")]
));
exercises.push(new Exercise(1,6,5,
    "<h3>Concept 1 Exercise 5</h3>" +
    "<p>Put a 1x1 GREEN brick in the cells whose locations are:</p>" +
    "<p>(0,0), (0,1), (0,2), (0,3), (1,0), (1,1), (1,2), (1,3)</p>",
    [   new SolutionCell(0,0,"GREEN"),
        new SolutionCell(0,1,"GREEN"),
        new SolutionCell(0,2,"GREEN"),
        new SolutionCell(0,3,"GREEN"),
        new SolutionCell(1,0,"GREEN"),
        new SolutionCell(1,1,"GREEN"),
        new SolutionCell(1,2,"GREEN"),
        new SolutionCell(1,3,"GREEN")]
));
exercises.push(new Exercise(1,7,5,
    "<h3>Concept 1 Exercise 6</h3>" +
    "<p>Put a red brick in the cells whose locations are:</p>" +
    "<p>(2,0), (3,1), (4,2), (3,3), (2,4), (1,3),(0,2), (1,1)</p>",
    [   new SolutionCell(2,0,"RED"),
        new SolutionCell(3,1,"RED"),
        new SolutionCell(4,2,"RED"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(2,4,"RED"),
        new SolutionCell(1,3,"RED"),
        new SolutionCell(0,2,"RED"),
        new SolutionCell(1,1,"RED")]
));
exercises.push(new Exercise(1,8,5,
    "<h3>Concept 1 Exercise 7</h3>" +
    "<p>Put a YELLOW brick in the cells whose locations are:</p>" +
    "<p>(0,4), (1,3), (2,2), (3,1), (4,0), (0,0), (1,1), (3,3), (4,4)</p>",
    [   new SolutionCell(0,4,"YELLOW"),
        new SolutionCell(1,3,"YELLOW"),
        new SolutionCell(2,2,"YELLOW"),
        new SolutionCell(3,1,"YELLOW"),
        new SolutionCell(4,0,"YELLOW"),
        new SolutionCell(0,0,"YELLOW"),
        new SolutionCell(1,1,"YELLOW"),
        new SolutionCell(3,3,"YELLOW"),
        new SolutionCell(4,4,"YELLOW")]
));
exercises.push(new Exercise(1,9,6,
    "<h3>Concept 1 Exercise 8</h3>" +
    "<p>Put a BLUE brick in the cells whose locations are:</p>" +
    "<p>(0,3), (1,3), (2,3),(3,3), (4,3), (5,3),(1,4), (2,5), (3,5),(4,4)</p>",
    [   new SolutionCell(0,3,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(5,3,"BLUE"),
        new SolutionCell(1,4,"BLUE"),
        new SolutionCell(2,5,"BLUE"),
        new SolutionCell(3,5,"BLUE"),
        new SolutionCell(4,4,"BLUE")]
));
exercises.push(new Exercise(1,10,5,
    "<h3>Concept 1 Exercise 9</h3>" +
    "<p>Put a GREEN brick in the cells whose locations are:</p>" +
    "<p>(0,1), (1,1), (2,1), (0,2), (1,2), (2,2)</p>",
    [   new SolutionCell(0,1,"GREEN"),
        new SolutionCell(1,1,"GREEN"),
        new SolutionCell(2,1,"GREEN"),
        new SolutionCell(0,2,"GREEN"),
        new SolutionCell(1,2,"GREEN"),
        new SolutionCell(2,2,"GREEN")]
));
exercises.push(new Exercise(1,11,5,
    "<h3>Concept 1 Exercise 10</h3>" +
    "<p>Put a GRAY brick in the cells whose locations are:</p>" +
    "<p>(3,0), (3,1), (3,2), (3,3), (4,0), (4,1), (4,2), (4,3)</p>",
    [   new SolutionCell(3,0,"GRAY"),
        new SolutionCell(3,1,"GRAY"),
        new SolutionCell(3,2,"GRAY"),
        new SolutionCell(3,3,"GRAY"),
        new SolutionCell(4,0,"GRAY"),
        new SolutionCell(4,1,"GRAY"),
        new SolutionCell(4,2,"GRAY"),
        new SolutionCell(4,3,"GRAY")]
));
// Concept 2
exercises.push(new Exercise(2,1,6,
    "<h3>Concept 2 Demo 1</h3>" +
    "<p>Consider the following function: f(x,z) = x + z = 5." +
    " Put a 1x1 BLUE brick in every cell where the expression x + z = 5 evaluates to true.</p>",
    [   new SolutionCell(0,5,"BLUE"),
        new SolutionCell(1,4,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(4,1,"BLUE"),
        new SolutionCell(5,0,"BLUE")]
));
exercises.push(new Exercise(2,2,5,
    "<h3>Concept 2 Demo 2</h3>" +
    "<p>Consider the following function:</p>" +
    "<p>f(x,z) = x = 2.</p>" +
    "<p>Put a 1x1 RED brick in every cell where the expression x = 2 evaluates to true.</p>",
    [   new SolutionCell(2,0,"RED"),
        new SolutionCell(2,1,"RED"),
        new SolutionCell(2,2,"RED"),
        new SolutionCell(2,3,"RED"),
        new SolutionCell(2,4,"RED")]
));
exercises.push(new Exercise(2,3,6,
    "<h3>Concept 2 Exercise 1</h3>" +
    "<p>Consider the following function: f(x,z) = x < z." +
    " Put a 1x1 BLUE brick in every cell where the expression x < z evaluates to true." +
    " For example, 1 < 2 evaluates to true, so the cell at location (1,2) should have a BLUE tile. " +
    "In contrast, 2 < 2 evaluates to false, so the cell at location (2,2) should not have a BLUE tile (i.e., should be empty).</p>",
    [   new SolutionCell(0,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(0,4,"BLUE"),
        new SolutionCell(0,5,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(1,4,"BLUE"),
        new SolutionCell(1,5,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(2,5,"BLUE"),
        new SolutionCell(3,4,"BLUE"),
        new SolutionCell(3,5,"BLUE"),
        new SolutionCell(4,5,"BLUE")]
));
exercises.push(new Exercise(2,4,5,
    "<h3>Concept 2 Exercise 2</h3>" +
    "<p>In SML, the mod operator is used to get the remainder of an integer division. " +
    "For example, 2 mod 2 = 0, 3 mod 2 = 1, and 4 mod 2 = 0.</p>" +
    "<p>Consider the following function: </p>"+
    "<p>    f(x,z) = (x + z) mod 2 = 0</p>"+
    "<p>which evaluates to true when x+z is an even number and evaluates to false when x+z is an odd number.</p>"+
    "<p>Put a 1x1 BLUE brick in every cell for which f(x,z) evaluates to true.</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(0,4,"BLUE"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(4,0,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(4,4,"BLUE")]
));
exercises.push(new Exercise(2,5,7,
    "<h3>Concept 2 Exercise 3</h3>" +
    "<p>Consider the following function: </p>"+
    "<p>    f(x,z) = (x + z) mod 3 = 0</p>"+
    "<p>which evaluates to true when x+z is a multiple of 3.</p>"+
    "<p>Put a 1x1 GREEN brick in every cell for which f(x,z) evaluates to true.</p>",
    [   new SolutionCell(0,0,"GREEN"),
        new SolutionCell(0,3,"GREEN"),
        new SolutionCell(0,6,"GREEN"),
        new SolutionCell(1,2,"GREEN"),
        new SolutionCell(1,5,"GREEN"),
        new SolutionCell(2,1,"GREEN"),
        new SolutionCell(2,4,"GREEN"),
        new SolutionCell(3,0,"GREEN"),
        new SolutionCell(3,3,"GREEN"),
        new SolutionCell(3,6,"GREEN"),
        new SolutionCell(4,2,"GREEN"),
        new SolutionCell(4,5,"GREEN"),
        new SolutionCell(5,1,"GREEN"),
        new SolutionCell(5,4,"GREEN"),
        new SolutionCell(6,0,"GREEN"),
        new SolutionCell(6,3,"GREEN"),
        new SolutionCell(6,6,"GREEN")]
));
exercises.push(new Exercise(2,6,5,
    "<h3>Concept 2 Exercise 4</h3>" +
    "<p>In SML, the multiplication operator is denoted by the * symbol. Consider the following function:</p>" +
    "<p>f(x,z) = (x*x + z) mod 2 = 0</p>"+
    "<p>which evaluates to true when x*x+z is an even number and evaluates to false when x*x+z is an odd number.</p>"+
    "<p>Put a 1x1 BLUE brick in every cell for which f(x,z) evaluates to true.</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(0,4,"BLUE"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(4,0,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(4,4,"BLUE")]
));
exercises.push(new Exercise(2,7,7,
    "<h3>Concept 2 Exercise 5</h3>" +
    "<p>In SML, the multiplication operator is denoted by the * symbol. Consider the following function:</p>" +
    "<p>f(x,z) = (x*z) mod 3 = 0</p>"+
    "<p>which evaluates to true when x*z is a multiple of 3 and evaluates to false when x*z is not a multiple of 3.</p>"+
    "<p>Put a 1x1 BLUE brick in every cell for which f(x,z) evaluates to true.</p>",
    [   new SolutionCell(0,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(0,4,"BLUE"),
        new SolutionCell(0,5,"BLUE"),
        new SolutionCell(0,6,"BLUE"),
        new SolutionCell(0,0,"BLUE"),
        new SolutionCell(1,0,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(1,6,"BLUE"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(2,6,"BLUE"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(3,4,"BLUE"),
        new SolutionCell(3,5,"BLUE"),
        new SolutionCell(3,6,"BLUE"),
        new SolutionCell(3,0,"BLUE"),
        new SolutionCell(4,0,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(4,6,"BLUE"),
        new SolutionCell(5,0,"BLUE"),
        new SolutionCell(5,3,"BLUE"),
        new SolutionCell(5,6,"BLUE"),
        new SolutionCell(6,0,"BLUE"),
        new SolutionCell(6,1,"BLUE"),
        new SolutionCell(6,2,"BLUE"),
        new SolutionCell(6,3,"BLUE"),
        new SolutionCell(6,4,"BLUE"),
        new SolutionCell(6,5,"BLUE"),
        new SolutionCell(6,6,"BLUE")]
));
exercises.push(new Exercise(2,8,7,
    "<h3>Concept 2 Exercise 6</h3>" +
    "<p>Consider the following function:</p>" +
    "<p>f(x,z) = (x - z) mod 3 = 0</p>"+
    "<p>which evaluates to true when x - z is a multiple of 3 and evaluates to false otherwise.</p>"+
    "<p>Put a 1x1 RED brick in every cell for which f(x,z) evaluates to true.</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(2,2,"RED"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(4,4,"RED"),
        new SolutionCell(5,5,"RED"),
        new SolutionCell(6,6,"RED"),
        new SolutionCell(0,3,"RED"),
        new SolutionCell(1,4,"RED"),
        new SolutionCell(2,5,"RED"),
        new SolutionCell(3,6,"RED"),
        new SolutionCell(0,6,"RED"),
        new SolutionCell(3,0,"RED"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(4,1,"RED"),
        new SolutionCell(5,2,"RED"),
        new SolutionCell(6,3,"RED"),
        new SolutionCell(6,0,"RED")]
));

// Concept 3
exercises.push(new Exercise(3,1,5,
    "<h3>Concept 3 Demo 1</h3>" +
    "<p>Put a 1x1 RED brick at location (0,0).</p>",
    [   new SolutionCell(0,0,"RED")]
));
exercises.push(new Exercise(3,2,5,
    "<h3>Concept 3 Demo 2</h3>" +
    "<p>Put a 2x2 RED brick at location (3,2).</p>",
    [   new SolutionCell(3,2,"RED"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(4,2,"RED"),
        new SolutionCell(4,3,"RED")]
));
exercises.push(new Exercise(3,3,5,
    "<h3>Concept 3 Demo 3</h3>" +
    "<p>Put a 4x2 YELLOW brick at location (0,2).</p>",
    [   new SolutionCell(0,2,"YELLOW"),
        new SolutionCell(1,2,"YELLOW"),
        new SolutionCell(2,2,"YELLOW"),
        new SolutionCell(3,2,"YELLOW"),
        new SolutionCell(0,3,"YELLOW"),
        new SolutionCell(1,3,"YELLOW"),
        new SolutionCell(2,3,"YELLOW"),
        new SolutionCell(3,3,"YELLOW")]
));
exercises.push(new Exercise(3,4,5,
    "<h3>Concept 3 Demo 4</h3>" +
    "<p>Put a 2x3 GRAY brick at location (1,0)</p>",
    [   new SolutionCell(1,0,"GRAY"),
        new SolutionCell(1,1,"GRAY"),
        new SolutionCell(1,2,"GRAY"),
        new SolutionCell(2,0,"GRAY"),
        new SolutionCell(2,1,"GRAY"),
        new SolutionCell(2,2,"GRAY")]
));
exercises.push(new Exercise(3,5,5,
    "<h3>Concept 3 Exercise 1</h3>" +
    "<p>Put a 3x2 YELLOW brick at location (1,2).</p>",
    [   new SolutionCell(1,2,"YELLOW"),
        new SolutionCell(1,3,"YELLOW"),
        new SolutionCell(2,2,"YELLOW"),
        new SolutionCell(2,3,"YELLOW"),
        new SolutionCell(3,2,"YELLOW"),
        new SolutionCell(3,3,"YELLOW")]
));
exercises.push(new Exercise(3,6,6,
    "<h3>Concept 3 Exercise 2</h3>" +
    "<p>Put a 2x4 GRAY brick at location (4,1).</p>",
    [   new SolutionCell(4,1,"GRAY"),
        new SolutionCell(4,2,"GRAY"),
        new SolutionCell(4,3,"GRAY"),
        new SolutionCell(4,4,"GRAY"),
        new SolutionCell(5,1,"GRAY"),
        new SolutionCell(5,2,"GRAY"),
        new SolutionCell(5,3,"GRAY"),
        new SolutionCell(5,4,"GRAY")]
));
exercises.push(new Exercise(3,7,6,
    "<h3>Concept 3 Exercise 3</h3>" +
    "<p>Put a 4x2 BLUE brick at location (1,3).</p>",
    [   new SolutionCell(1,3,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(1,4,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(3,4,"BLUE"),
        new SolutionCell(4,4,"BLUE")]
));
exercises.push(new Exercise(3,8,5,
    "<h3>Concept 3 Exercise 4</h3>" +
    "<p>Put a 2x3 RED brick at location (2,2).</p>",
    [   new SolutionCell(2,2,"RED"),
        new SolutionCell(2,3,"RED"),
        new SolutionCell(2,4,"RED"),
        new SolutionCell(3,2,"RED"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(3,4,"RED")]
));
exercises.push(new Exercise(3,9,5,
    "<h3>Concept 3 Exercise 5</h3>" +
    "<p>Put a 2x1 GREEN brick at location (3,0).</p>",
    [   new SolutionCell(3,0,"GREEN"),
        new SolutionCell(4,0,"GREEN")]
));
exercises.push(new Exercise(3,10,5,
    "<h3>Concept 3 Exercise 6</h3>" +
    "<p>Put a 1x2 BLUE brick at location (2,1).</p>",
    [   new SolutionCell(2,1,"BLUE"),
        new SolutionCell(2,2,"BLUE")]
));
exercises.push(new Exercise(3,11,5,
    "<h3>Concept 3 Exercise 7</h3>" +
    "<p>Put a 4x2 YELLOW brick at location (0,3).</p>",
    [   new SolutionCell(0,3,"YELLOW"),
        new SolutionCell(1,3,"YELLOW"),
        new SolutionCell(2,3,"YELLOW"),
        new SolutionCell(3,3,"YELLOW"),
        new SolutionCell(0,4,"YELLOW"),
        new SolutionCell(1,4,"YELLOW"),
        new SolutionCell(2,4,"YELLOW"),
        new SolutionCell(3,4,"YELLOW")]
));
exercises.push(new Exercise(3,12,5,
    "<h3>Concept 3 Exercise 8</h3>" +
    "<p>Put a 2x2 GRAY brick at location (1,1).</p>",
    [   new SolutionCell(1,1,"GRAY"),
        new SolutionCell(1,2,"GRAY"),
        new SolutionCell(2,1,"GRAY"),
        new SolutionCell(2,1,"GRAY")]
));
exercises.push(new Exercise(3,13,5,
    "<h3>Concept 3 Exercise 9</h3>" +
    "<p>Put a 2x1 BLUE brick at location (3,4).</p>",
    [   new SolutionCell(3,4,"BLUE"),
        new SolutionCell(4,4,"BLUE")]
));
exercises.push(new Exercise(3,14,5,
    "<h3>Concept 3 Exercise 10</h3>" +
    "<p>Put a 2x3 RED brick at location (3,2).</p>",
    [   new SolutionCell(3,2,"RED"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(3,4,"RED"),
        new SolutionCell(4,2,"RED"),
        new SolutionCell(4,3,"RED"),
        new SolutionCell(4,4,"RED")]
));
// Concept 4
exercises.push(new Exercise(4,1,8,
    "<h3>Concept 4 Demo 1</h3>" +
    "<p>Put a 4x2 RED brick at location (0,0).</p>"+
    "<p>Put a 4x2 BLUE brick at location (4,0).</p>"+
    "<p>Put a 2x2 BLUE brick at location (0,2).</p>"+
    "<p>Put a 4x2 YELLOW brick at location (2,2).</p>"+
    "<p>Put a 2x2 RED brick at location (6,2).</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(2,0,"RED"),
        new SolutionCell(3,0,"RED"),
        new SolutionCell(4,0,"BLUE"),
        new SolutionCell(5,0,"BLUE"),
        new SolutionCell(6,0,"BLUE"),
        new SolutionCell(7,0,"BLUE"),
        new SolutionCell(0,1,"RED"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(2,1,"RED"),
        new SolutionCell(3,1,"RED"),
        new SolutionCell(4,1,"BLUE"),
        new SolutionCell(5,1,"BLUE"),
        new SolutionCell(6,1,"BLUE"),
        new SolutionCell(7,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(2,2,"YELLOW"),
        new SolutionCell(3,2,"YELLOW"),
        new SolutionCell(4,2,"YELLOW"),
        new SolutionCell(5,2,"YELLOW"),
        new SolutionCell(6,2,"RED"),
        new SolutionCell(7,2,"RED"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(2,3,"YELLOW"),
        new SolutionCell(3,3,"YELLOW"),
        new SolutionCell(4,3,"YELLOW"),
        new SolutionCell(5,3,"YELLOW"),
        new SolutionCell(6,3,"RED"),
        new SolutionCell(7,3,"RED")]
));
exercises.push(new Exercise(4,2,5,
    "<h3>Concept 4 Exercise 1</h3>" +
    "<p>Put a 1x1 RED brick at location (0,0). </p>"+
    "<p>Put a 1x1 RED brick at location (1,0).</p>"+
    "<p>Put a 2x1 BLUE brick at location (0,1).</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(1,1,"BLUE")]
));
exercises.push(new Exercise(4,3,5,
    "<h3>Concept 4 Exercise 2</h3>" +
    "<p>Put a 1x1 YELLOW brick at location (0,0). </p>"+
    "<p>Put a 1x1 YELLOW brick at location (0,1).</p>"+
    "<p>Put a 1x2 BLUE brick at location (1,1).</p>",
    [   new SolutionCell(0,0,"YELLOW"),
        new SolutionCell(0,1,"YELLOW"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(1,1,"BLUE")]
));
exercises.push(new Exercise(4,4,5,
    "<h3>Concept 4 Exercise 3</h3>" +
    "<p>Put a 1x1 RED brick at location (0,0). </p>"+
    "<p>Put a 1x1 RED brick at location (1,0).</p>"+
    "<p>Put a 1x1 RED brick at location (0,1). </p>"+
    "<p>Put a 1x1 RED brick at location (1,1).</p>"+
    "<p>Put a 2x2 BLUE brick at location (2,2).</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(0,1,"RED"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(3,3,"BLUE")]
));
exercises.push(new Exercise(4,5,5,
    "<h3>Concept 4 Exercise 4</h3>" +
    "<p>Put a 1x1 RED brick at location (0,0). </p>"+
    "<p>Put a 1x1 RED brick at location (1,0).</p>"+
    "<p>Put a 1x1 RED brick at location (0,1). </p>"+
    "<p>Put a 1x1 RED brick at location (1,1).</p>"+
    "<p>Put a 1x1 RED brick at location (0,2).</p>"+
    "<p>Put a 1x1 RED brick at location (1,2).</p>"+
    "<p>Put a 2x3 WHITE brick at location (2,0).</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(0,1,"RED"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(0,2,"RED"),
        new SolutionCell(1,2,"RED"),
        new SolutionCell(2,0,"WHITE"),
        new SolutionCell(2,1,"WHITE"),
        new SolutionCell(2,2,"WHITE"),
        new SolutionCell(3,0,"WHITE"),
        new SolutionCell(3,1,"WHITE"),
        new SolutionCell(3,2,"WHITE")]
));
exercises.push(new Exercise(4,6,6,
    "<h3>Concept 4 Exercise 5</h3>" +
    "<p>Put a 1x1 YELLOW brick at location (0,0). </p>"+
    "<p>Put a 1x1 YELLOW brick at location (1,0).</p>"+
    "<p>Put a 1x1 YELLOW brick at location (2,0). </p>"+
    "<p>Put a 1x1 YELLOW brick at location (0,1).</p>"+
    "<p>Put a 1x1 YELLOW brick at location (1,1). </p>"+
    "<p>Put a 1x1 YELLOW brick at location (2,1).</p>"+
    "<p>Put a 3x2 GRAY brick at location (3,2).</p>",
    [   new SolutionCell(0,0,"YELLOW"),
        new SolutionCell(1,0,"YELLOW"),
        new SolutionCell(2,0,"YELLOW"),
        new SolutionCell(0,1,"YELLOW"),
        new SolutionCell(1,1,"YELLOW"),
        new SolutionCell(2,1,"YELLOW"),
        new SolutionCell(3,2,"GRAY"),
        new SolutionCell(4,2,"GRAY"),
        new SolutionCell(5,2,"GRAY"),
        new SolutionCell(3,3,"GRAY"),
        new SolutionCell(4,3,"GRAY"),
        new SolutionCell(5,3,"GRAY")]
));
exercises.push(new Exercise(4,7,5,
    "<h3>Concept 4 Exercise 6</h3>" +
    "<p>Put a 1x1 YELLOW brick at location (0,0). </p>"+
    "<p>Put a 1x1 YELLOW brick at location (1,0).</p>"+
    "<p>Put a 1x1 YELLOW brick at location (2,0). </p>"+
    "<p>Put a 1x1 YELLOW brick at location (3,0). </p>"+
    "<p>Put a 1x1 YELLOW brick at location (0,1).</p>"+
    "<p>Put a 1x1 YELLOW brick at location (1,1). </p>"+
    "<p>Put a 1x1 YELLOW brick at location (2,1).</p>"+
    "<p>Put a 1x1 YELLOW brick at location (3,1).</p>"+
    "<p>Put a 4x2 GREEN brick at location (0,2). </p>",
    [   new SolutionCell(0,0,"YELLOW"),
        new SolutionCell(1,0,"YELLOW"),
        new SolutionCell(2,0,"YELLOW"),
        new SolutionCell(3,0,"YELLOW"),
        new SolutionCell(0,1,"YELLOW"),
        new SolutionCell(1,1,"YELLOW"),
        new SolutionCell(2,1,"YELLOW"),
        new SolutionCell(3,1,"YELLOW"),
        new SolutionCell(0,2,"GREEN"),
        new SolutionCell(1,2,"GREEN"),
        new SolutionCell(2,2,"GREEN"),
        new SolutionCell(3,2,"GREEN"),
        new SolutionCell(0,3,"GREEN"),
        new SolutionCell(1,3,"GREEN"),
        new SolutionCell(2,3,"GREEN"),
        new SolutionCell(3,3,"GREEN")]
));
exercises.push(new Exercise(4,8,5,
    "<h3>Concept 4 Exercise 7</h3>" +
    "<p>Put a 1x1 BLUE brick at location (0,0).</p>"+
    "<p>Put a 1x1 BLUE brick at location (1,0).</p>"+
    "<p>Put a 1x1 BLUE brick at location (0,1).</p>"+
    "<p>Put a 1x1 BLUE brick at location (1,1).</p>"+
    "<p>Put a 1x1 BLUE brick at location (0,2).</p>"+
    "<p>Put a 1x1 BLUE brick at location (1,2).</p>"+
    "<p>Put a 1x1 BLUE brick at location (0,3).</p>"+
    "<p>Put a 1x1 BLUE brick at location (1,3).</p>"+
    "<p>Put a 2x4 GRAY brick at location (2,1).</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(1,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(2,1,"GRAY"),
        new SolutionCell(2,2,"GRAY"),
        new SolutionCell(2,3,"GRAY"),
        new SolutionCell(2,4,"GRAY"),
        new SolutionCell(3,1,"GRAY"),
        new SolutionCell(3,2,"GRAY"),
        new SolutionCell(3,3,"GRAY"),
        new SolutionCell(3,4,"GRAY")]
));
exercises.push(new Exercise(4,9,5,
    "<h3>Concept 4 Exercise 8</h3>" +
    "<p>Put a 2x2 RED brick at location (0,0)</p>"+
    "<p>Put a 2x2 RED brick at location (2,2)</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(0,1,"RED"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(2,2,"RED"),
        new SolutionCell(2,3,"RED"),
        new SolutionCell(3,2,"RED"),
        new SolutionCell(3,3,"RED")]
));
exercises.push(new Exercise(4,10,6,
    "<h3>Concept 4 Exercise 9</h3>" +
    "<p>Put a 2x2 RED brick at location (0,0)</p>"+
    "<p>Put a 2x2 RED brick at location (2,2)</p>"+
    "<p>Put a 2x2 RED brick at location (4,4)</p>"+
    "<p>Put a 2x2 BLUE brick at location (0,4)</p>"+
    "<p>Put a 2x2 BLUE brick at location (4,0)</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(0,1,"RED"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(2,2,"RED"),
        new SolutionCell(2,3,"RED"),
        new SolutionCell(3,2,"RED"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(4,4,"RED"),
        new SolutionCell(5,4,"RED"),
        new SolutionCell(4,5,"RED"),
        new SolutionCell(5,5,"RED"),
        new SolutionCell(4,0,"BLUE"),
        new SolutionCell(4,1,"BLUE"),
        new SolutionCell(5,0,"BLUE"),
        new SolutionCell(5,1,"BLUE"),
        new SolutionCell(0,4,"BLUE"),
        new SolutionCell(0,5,"BLUE"),
        new SolutionCell(1,4,"BLUE"),
        new SolutionCell(1,5,"BLUE")]
));
exercises.push(new Exercise(4,11,6,
    "<h3>Concept 4 Exercise 10</h3>" +
    "<p>Put a 2x1 BLUE brick at location (2,5)</p>"+
    "<p>Put a 2x1 BLUE brick at location (1,4)</p>"+
    "<p>Put a 2x1 BLUE brick at location (3,4)</p>"+
    "<p>Put a 2x1 BLUE brick at location (0,3)</p>"+
    "<p>Put a 2x1 YELLOW brick at location (2,3)</p>"+
    "<p>Put a 2x1 BLUE brick at location (4,3)</p>",
    [   new SolutionCell(0,3,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(2,3,"YELLOW"),
        new SolutionCell(3,3,"YELLOW"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(5,3,"BLUE"),
        new SolutionCell(1,4,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(3,4,"BLUE"),
        new SolutionCell(4,4,"BLUE"),
        new SolutionCell(2,5,"BLUE"),
        new SolutionCell(3,5,"BLUE")]
));
exercises.push(new Exercise(4,12,5,
    "<h3>Concept 4 Exercise 11</h3>" +
    "<p>Put a 1x2 BLUE brick at location (0,0)</p>"+
    "<p>Put a 1x2 BLUE brick at location (0,2)</p>"+
    "<p>Put a 2x1 RED brick at location (0,4)</p>"+
    "<p>Put a 2x1 RED brick at location (2,4)</p>"+
    "<p>Put a 1x2 BLUE brick at location (4,3)</p>"+
    "<p>Put a 1x2 BLUE brick at location (4,1)</p>"+
    "<p>Put a 2x1 RED brick at location (2,1)</p>"+
    "<p>Put a 1x1 YELLOW brick at location (2,2)</p>",
    [   new SolutionCell(0,4,"RED"),
        new SolutionCell(1,4,"RED"),
        new SolutionCell(2,4,"RED"),
        new SolutionCell(3,4,"RED"),
        new SolutionCell(4,4,"BLUE"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(4,1,"BLUE"),
        new SolutionCell(0,0,"BLUE"),
        new SolutionCell(2,1,"RED"),
        new SolutionCell(3,1,"RED"),
        new SolutionCell(2,2,"YELLOW")]
));
exercises.push(new Exercise(4,13,8,
    "<h3>Concept 4 Exercise 12</h3>" +
    "<p>Put a 3x2 RED brick at location (0,0)</p>"+
    "<p>Put a 3x2 RED brick at location (0,3)</p>"+
    "<p>Put a 4x2 RED brick at location (4,0)</p>"+
    "<p>Put a 4x2 RED brick at location (4,3)</p>"+
    "<p>Put an 8x1 WHITE brick a location (0,2)</p>"+
    "<p>Put a 1x2 WHITE brick at location (3,0)</p>"+
    "<p>Put a 1x2 WHITE brick at location (3,3)</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(2,0,"RED"),
        new SolutionCell(3,0,"WHITE"),
        new SolutionCell(4,0,"RED"),
        new SolutionCell(5,0,"RED"),
        new SolutionCell(6,0,"RED"),
        new SolutionCell(7,0,"RED"),
        new SolutionCell(0,1,"RED"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(2,1,"RED"),
        new SolutionCell(3,1,"WHITE"),
        new SolutionCell(4,1,"RED"),
        new SolutionCell(5,1,"RED"),
        new SolutionCell(6,1,"RED"),
        new SolutionCell(7,1,"RED"),
        new SolutionCell(0,2,"WHITE"),
        new SolutionCell(1,2,"WHITE"),
        new SolutionCell(2,2,"WHITE"),
        new SolutionCell(3,2,"WHITE"),
        new SolutionCell(4,2,"WHITE"),
        new SolutionCell(5,2,"WHITE"),
        new SolutionCell(6,2,"WHITE"),
        new SolutionCell(7,2,"WHITE"),
        new SolutionCell(0,3,"RED"),
        new SolutionCell(1,3,"RED"),
        new SolutionCell(2,3,"RED"),
        new SolutionCell(3,3,"WHITE"),
        new SolutionCell(4,3,"RED"),
        new SolutionCell(5,3,"RED"),
        new SolutionCell(6,3,"RED"),
        new SolutionCell(7,3,"RED"),
        new SolutionCell(0,4,"RED"),
        new SolutionCell(1,4,"RED"),
        new SolutionCell(2,4,"RED"),
        new SolutionCell(3,4,"WHITE"),
        new SolutionCell(4,4,"RED"),
        new SolutionCell(5,4,"RED"),
        new SolutionCell(6,4,"RED"),
        new SolutionCell(7,4,"RED")]
));
//CONCEPT 5
exercises.push(new Exercise(5,1,5,
    "<h3>Concept 5 Demo 1</h3>" +
    "<p>Execute the following Level 1 function call by putting a brick at the appropriate location.</p>"+
"<p>put2D_2x1_BLUE(2,4);</p>",
    [   new SolutionCell(2,4,"BLUE"),
        new SolutionCell(3,4,"BLUE")]
));
exercises.push(new Exercise(5,2,5,
    "<h3>Concept 5 Exercise 1</h3>" +
    "<p>Execute the following Level 1 function call by putting a brick at the appropriate location.</p>"+
    "<p>put2D_4x2_RED(0,0);</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(2,0,"RED"),
        new SolutionCell(3,0,"RED"),
        new SolutionCell(0,1,"RED"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(2,1,"RED"),
        new SolutionCell(3,1,"RED")]
));
exercises.push(new Exercise(5,3,6,
    "<h3>Concept 5 Exercise 2</h3>" +
    "<p>Execute the following Level 1 function call by putting a brick at the appropriate location.</p>"+
    "<p>put2D_2x3_GREEN(1,3);</p>",
    [   new SolutionCell(1,3,"GREEN"),
        new SolutionCell(2,3,"GREEN"),
        new SolutionCell(1,4,"GREEN"),
        new SolutionCell(2,4,"GREEN"),
        new SolutionCell(1,5,"GREEN"),
        new SolutionCell(2,5,"GREEN")]
));
exercises.push(new Exercise(5,4,5,
    "<h3>Concept 5 Exercise 3</h3>" +
    "<p>Execute the following Level 1 function call by putting a brick at the appropriate location.</p>"+
    "<p>put2D_2x2_YELLOW(3,2);</p>",
    [   new SolutionCell(3,2,"YELLOW"),
        new SolutionCell(3,3,"YELLOW"),
        new SolutionCell(4,2,"YELLOW"),
        new SolutionCell(4,3,"YELLOW")]
));
exercises.push(new Exercise(5,5,5,
    "<h3>Concept 5 Exercise 4</h3>" +
    "<p>Execute the following Level 1 function call by putting a brick at the appropriate location.</p>"+
    "<p>put2D_2x4_YELLOW(3,1);</p>",
    [   new SolutionCell(3,2,"YELLOW"),
        new SolutionCell(3,3,"YELLOW"),
        new SolutionCell(3,1,"YELLOW"),
        new SolutionCell(3,4,"YELLOW"),
        new SolutionCell(4,2,"YELLOW"),
        new SolutionCell(4,3,"YELLOW"),
        new SolutionCell(4,1,"YELLOW"),
        new SolutionCell(4,4,"YELLOW")]
));
exercises.push(new Exercise(5,6,5,
    "<h3>Concept 5 Exercise 5</h3>" +
    "<p>Execute the following Level 1 function call by putting a brick at the appropriate location.</p>"+
    "<p>put2D_1x2_GRAY(3,1);</p>",
    [   new SolutionCell(3,1,"GRAY"),
        new SolutionCell(3,2,"GRAY")]
));
exercises.push(new Exercise(5,7,5,
    "<h3>Concept 5 Exercise 6</h3>" +
    "<p>Execute the following Level 1 function call by putting a brick at the appropriate location.</p>"+
    "<p>put2D_2x1_BLUE(3,4);</p>",
    [   new SolutionCell(3,4,"BLUE"),
        new SolutionCell(4,4,"BLUE")]
));
exercises.push(new Exercise(5,8,5,
    "<h3>Concept 5 Exercise 7</h3>" +
    "<p>Execute the following Level 1 function call by putting a brick at the appropriate location.</p>"+
    "<p>put2D_3x2_RED(2,3);</p>",
    [   new SolutionCell(2,3,"RED"),
        new SolutionCell(2,4,"RED"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(3,4,"RED"),
        new SolutionCell(4,3,"RED"),
        new SolutionCell(4,4,"RED")]
));
exercises.push(new Exercise(5,9,5,
    "<h3>Concept 5 Exercise 8</h3>" +
    "<p>Execute the following Level 1 function call by putting a brick at the appropriate location.</p>"+
    "<p>put2D_4x2_GREEN(1,2);</p>",
    [   new SolutionCell(1,2,"GREEN"),
        new SolutionCell(2,2,"GREEN"),
        new SolutionCell(3,2,"GREEN"),
        new SolutionCell(4,2,"GREEN"),
        new SolutionCell(1,3,"GREEN"),
        new SolutionCell(2,3,"GREEN"),
        new SolutionCell(3,3,"GREEN"),
        new SolutionCell(4,3,"GREEN")]
));
exercises.push(new Exercise(5,10,5,
    "<h3>Concept 5 Exercise 9</h3>" +
    "<p>Execute the following Level 1 function call by putting a brick at the appropriate location.</p>"+
    "<p>put2D_2x2_YELLOW(0,3);</p>",
    [   new SolutionCell(0,3,"YELLOW"),
        new SolutionCell(1,3,"YELLOW"),
        new SolutionCell(0,4,"YELLOW"),
        new SolutionCell(1,4,"YELLOW")]
));
exercises.push(new Exercise(5,11,5,
    "<h3>Concept 5 Exercise 10</h3>" +
    "<p>Execute the following Level 1 function call by putting a brick at the appropriate location.</p>"+
    "<p>put2D_2x4_GRAY(1,1);</p>",
    [   new SolutionCell(1,1,"GRAY"),
        new SolutionCell(1,2,"GRAY"),
        new SolutionCell(1,3,"GRAY"),
        new SolutionCell(1,4,"GRAY"),
        new SolutionCell(2,1,"GRAY"),
        new SolutionCell(2,2,"GRAY"),
        new SolutionCell(2,3,"GRAY"),
        new SolutionCell(2,4,"GRAY")]
));
// Concept 6
exercises.push(new Exercise(6,1,5,
    "<h3>Concept 6 Demo 1</h3>" +
    "<p>Fibonacci Squares: 1x1 + 1x1 + 2x2 + 3x3.</p>"+
    "<p>Execute the following Level 1 program by placing bricks at the appropriate locations.</p>"+
    "<p>put2D_1x1_RED(0,0);</p>"+
    "<p>put2D_1x1_RED(1,0);</p>"+
    "<p>put2D_2x2_WHITE(0,1);</p>"+
    "<p>put2D_2x3_BLUE(2,0);</p>"+
    "<p>put2D_1x2_BLUE(4,0);</p>"+
    "<p>put2D_1x1_BLUE(4,2);</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(1,1,"WHITE"),
        new SolutionCell(0,1,"WHITE"),
        new SolutionCell(0,2,"WHITE"),
        new SolutionCell(1,2,"WHITE"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(3,0,"BLUE"),
        new SolutionCell(4,0,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(4,1,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(4,2,"BLUE")]
));
exercises.push(new Exercise(6,2,5,
    "<h3>Concept 6 Exercise 1</h3>" +
    "<p>Execute the following Level 1 program by placing bricks at the appropriate locations.</p>"+
    "<p>put2D_2x4_RED(0,0);</p>"+
    "<p>put2D_2x4_WHITE(2,0);</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(2,0,"WHITE"),
        new SolutionCell(3,0,"WHITE"),
        new SolutionCell(0,1,"RED"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(2,1,"WHITE"),
        new SolutionCell(3,1,"WHITE"),
        new SolutionCell(0,2,"RED"),
        new SolutionCell(1,2,"RED"),
        new SolutionCell(2,2,"WHITE"),
        new SolutionCell(3,2,"WHITE"),
        new SolutionCell(0,3,"RED"),
        new SolutionCell(1,3,"RED"),
        new SolutionCell(2,3,"WHITE"),
        new SolutionCell(3,3,"WHITE")]
));
exercises.push(new Exercise(6,3,5,
    "<h3>Concept 6 Exercise 2</h3>" +
    "<p>Execute the following Level 1 program by placing bricks at the appropriate locations.</p>"+
    "<p>put2D_2x2_RED(0,0); </p>"+
    "<p>put2D_2x2_RED(2,2);</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(0,1,"RED"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(2,2,"RED"),
        new SolutionCell(3,2,"RED"),
        new SolutionCell(2,3,"RED"),
        new SolutionCell(3,3,"RED")]
));
exercises.push(new Exercise(6,4,6,
    "<h3>Concept 6 Exercise 3</h3>" +
    "<p>Execute the following Level 1 program by placing bricks at the appropriate locations.</p>"+
    "<p>put2D_2x2_RED(0,0);</p>"+
    "<p>put2D_2x2_RED(2,2);</p>"+
    "<p>put2D_2x2_RED(4,4);</p>"+
    "<p>put2D_2x2_BLUE(0,4);</p>"+
    "<p>put2D_2x2_BLUE(4,0);</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(0,1,"RED"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(2,2,"RED"),
        new SolutionCell(3,2,"RED"),
        new SolutionCell(2,3,"RED"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(4,4,"RED"),
        new SolutionCell(5,4,"RED"),
        new SolutionCell(4,5,"RED"),
        new SolutionCell(5,5,"RED"),
        new SolutionCell(4,0,"BLUE"),
        new SolutionCell(5,0,"BLUE"),
        new SolutionCell(4,1,"BLUE"),
        new SolutionCell(5,1,"BLUE"),
        new SolutionCell(0,4,"BLUE"),
        new SolutionCell(1,4,"BLUE"),
        new SolutionCell(0,5,"BLUE"),
        new SolutionCell(1,5,"BLUE")]
));
exercises.push(new Exercise(6,5,5,
    "<h3>Concept 6 Exercise 4</h3>" +
    "<p>Execute the following Level 1 program by placing bricks at the appropriate locations.</p>"+
    "<p>put2D_2x2_RED(0,0);</p>"+
    "<p>put2D_3x2_RED(2,0);</p>"+
    "<p>put2D_2x3_RED(3,2);</p>"+
    "<p>put2D_3x2_RED(0,3);</p>"+
    "<p>put2D_2x1_RED(0,2);</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(2,0,"RED"),
        new SolutionCell(3,0,"RED"),
        new SolutionCell(4,0,"RED"),
        new SolutionCell(0,1,"RED"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(2,1,"RED"),
        new SolutionCell(3,1,"RED"),
        new SolutionCell(4,1,"RED"),
        new SolutionCell(0,2,"RED"),
        new SolutionCell(1,2,"RED"),
        new SolutionCell(3,2,"RED"),
        new SolutionCell(4,2,"RED"),
        new SolutionCell(0,3,"RED"),
        new SolutionCell(1,3,"RED"),
        new SolutionCell(2,3,"RED"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(4,3,"RED"),
        new SolutionCell(0,4,"RED"),
        new SolutionCell(1,4,"RED"),
        new SolutionCell(2,4,"RED"),
        new SolutionCell(3,4,"RED"),
        new SolutionCell(4,4,"RED")]
));
exercises.push(new Exercise(6,6,8,
    "<h3>Concept 6 Exercise 5</h3>" +
    "<p>Execute the following Level 1 program by placing bricks at the appropriate locations.</p>"+
    "<p>put2D_2x1_WHITE(0,0);</p>"+
"<p>put2D_2x1_WHITE(1,1);</p>"+
"<p>put2D_2x1_WHITE(2,2);</p>"+
"<p>put2D_2x1_WHITE(3,3);</p>"+
"<p>put2D_2x1_WHITE(4,4);</p>"+
"<p>put2D_2x1_WHITE(5,5);</p>"+
"<p>put2D_2x1_WHITE(6,6);</p>"+
"<p>put2D_1x1_WHITE(7,7);</p>"+
"<p>put2D_1x1_WHITE(0,1);</p>"+
"<p>put2D_1x1_WHITE(1,2);</p>"+
"<p>put2D_1x1_WHITE(2,3);</p>"+
"<p>put2D_1x1_WHITE(3,4);</p>"+
"<p>put2D_1x1_WHITE(4,5);</p>"+
"<p>put2D_1x1_WHITE(5,6);</p>"+
"<p>put2D_1x1_WHITE(6,7);</p>",
    [   new SolutionCell(0,0,"WHITE"),
        new SolutionCell(1,0,"WHITE"),
        new SolutionCell(0,1,"WHITE"),
        new SolutionCell(1,1,"WHITE"),
        new SolutionCell(1,2,"WHITE"),
        new SolutionCell(2,1,"WHITE"),
        new SolutionCell(2,2,"WHITE"),
        new SolutionCell(2,3,"WHITE"),
        new SolutionCell(3,2,"WHITE"),
        new SolutionCell(3,3,"WHITE"),
        new SolutionCell(3,4,"WHITE"),
        new SolutionCell(4,3,"WHITE"),
        new SolutionCell(4,4,"WHITE"),
        new SolutionCell(4,5,"WHITE"),
        new SolutionCell(5,4,"WHITE"),
        new SolutionCell(5,5,"WHITE"),
        new SolutionCell(6,5,"WHITE"),
        new SolutionCell(5,6,"WHITE"),
        new SolutionCell(6,6,"WHITE"),
        new SolutionCell(7,6,"WHITE"),
        new SolutionCell(6,7,"WHITE"),
        new SolutionCell(7,7,"WHITE")]
));
exercises.push(new Exercise(6,7,8,
    "<h3>Concept 6 Exercise 6</h3>" +
    "<p>Execute the following Level 1 program by placing bricks at the appropriate locations.</p>"+
    "<p>put2D_4x2_BLUE(0,0);</p>"+
   "<p>put2D_4x2_BLUE(4,0);</p>"+
   "<p>put2D_3x2_BLUE(1,2);</p>"+
   "<p>put2D_3x2_BLUE(4,2);</p>"+
   "<p>put2D_4x2_BLUE(2,4);</p>"+
   "<p>put2D_2x2_BLUE(3,6);</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(1,0,"BLUE"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(3,0,"BLUE"),
        new SolutionCell(4,0,"BLUE"),
        new SolutionCell(5,0,"BLUE"),
        new SolutionCell(6,0,"BLUE"),
        new SolutionCell(7,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(4,1,"BLUE"),
        new SolutionCell(5,1,"BLUE"),
        new SolutionCell(6,1,"BLUE"),
        new SolutionCell(7,1,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(5,2,"BLUE"),
        new SolutionCell(6,2,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(5,3,"BLUE"),
        new SolutionCell(6,3,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(3,4,"BLUE"),
        new SolutionCell(4,4,"BLUE"),
        new SolutionCell(5,4,"BLUE"),
        new SolutionCell(2,5,"BLUE"),
        new SolutionCell(3,5,"BLUE"),
        new SolutionCell(4,5,"BLUE"),
        new SolutionCell(5,5,"BLUE"),
        new SolutionCell(3,6,"BLUE"),
        new SolutionCell(4,6,"BLUE"),
        new SolutionCell(3,7,"BLUE"),
        new SolutionCell(4,7,"BLUE")]
));
exercises.push(new Exercise(6,8,8,
    "<h3>Concept 6 Exercise 7</h3>" +
    "<p>Execute the following Level 1 program by placing bricks at the appropriate locations.</p>"+
    "<p>put2D_2x2_BLUE(1,5);</p>"+
    "<p>put2D_2x2_BLUE(5,5);</p>"+
    "<p>put2D_2x1_GRAY(3,3);</p>"+
    "<p>put2D_2x1_RED(1,1);</p>"+
    "<p>put2D_2x1_RED(3,1);</p>"+
    "<p>put2D_2x1_RED(5,1);</p>"+
    "<p>put2D_1x1_RED(1,2);</p>"+
    "<p>put2D_1x1_RED(6,2);</p>",
    [   new SolutionCell(1,1,"RED"),
        new SolutionCell(2,1,"RED"),
        new SolutionCell(3,1,"RED"),
        new SolutionCell(4,1,"RED"),
        new SolutionCell(5,1,"RED"),
        new SolutionCell(6,1,"RED"),
        new SolutionCell(1,2,"RED"),
        new SolutionCell(6,2,"RED"),
        new SolutionCell(1,5,"BLUE"),
        new SolutionCell(2,5,"BLUE"),
        new SolutionCell(1,6,"BLUE"),
        new SolutionCell(2,6,"BLUE"),
        new SolutionCell(5,5,"BLUE"),
        new SolutionCell(6,5,"BLUE"),
        new SolutionCell(5,6,"BLUE"),
        new SolutionCell(6,6,"BLUE"),
        new SolutionCell(3,3,"GRAY"),
        new SolutionCell(4,3,"GRAY")]
));
exercises.push(new Exercise(6,9,9,
    "<h3>Concept 6 Exercise 8</h3>" +
    "<p>Execute the following Level 1 program by placing bricks at the appropriate locations.</p>"+
    "<p>put2D_1x1_RED(2,8);</p>"+
    "<p>put2D_1x1_RED(6,8);</p>"+
    "<p>put2D_2x1_RED(1,7);</p>"+
    "<p>put2D_1x1_RED(3,7);</p>"+
    "<p>put2D_2x1_RED(5,7);</p>"+
    "<p>put2D_1x1_RED(7,7);</p>"+
    "<p>put2D_2x1_RED(0,6);</p>"+
    "<p>put2D_2x1_RED(2,6);</p>"+
    "<p>put2D_2x1_RED(4,6);</p>"+
    "<p>put2D_2x1_RED(6,6);</p>"+
    "<p>put2D_1x1_RED(8,6);</p>"+
    "<p>put2D_2x1_RED(1,5);</p>"+
    "<p>put2D_2x1_RED(3,5);</p>"+
    "<p>put2D_2x1_RED(5,5);</p>"+
    "<p>put2D_1x1_RED(7,5);</p>"+
    "<p>put2D_2x1_RED(2,4);</p>"+
    "<p>put2D_2x1_RED(4,4);</p>"+
    "<p>put2D_1x1_RED(6,4);</p>"+
    "<p>put2D_2x1_RED(3,3);</p>"+
    "<p>put2D_1x1_RED(5,3);</p>"+
    "<p>put2D_1x1_RED(4,2);</p>",
    [   new SolutionCell(4,2,"RED"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(4,3,"RED"),
        new SolutionCell(5,3,"RED"),
        new SolutionCell(2,4,"RED"),
        new SolutionCell(3,4,"RED"),
        new SolutionCell(4,4,"RED"),
        new SolutionCell(5,4,"RED"),
        new SolutionCell(6,4,"RED"),
        new SolutionCell(1,5,"RED"),
        new SolutionCell(2,5,"RED"),
        new SolutionCell(3,5,"RED"),
        new SolutionCell(4,5,"RED"),
        new SolutionCell(5,5,"RED"),
        new SolutionCell(6,5,"RED"),
        new SolutionCell(7,5,"RED"),
        new SolutionCell(0,6,"RED"),
        new SolutionCell(1,6,"RED"),
        new SolutionCell(2,6,"RED"),
        new SolutionCell(3,6,"RED"),
        new SolutionCell(4,6,"RED"),
        new SolutionCell(5,6,"RED"),
        new SolutionCell(6,6,"RED"),
        new SolutionCell(7,6,"RED"),
        new SolutionCell(8,6,"RED"),
        new SolutionCell(1,7,"RED"),
        new SolutionCell(2,7,"RED"),
        new SolutionCell(3,7,"RED"),
        new SolutionCell(5,7,"RED"),
        new SolutionCell(6,7,"RED"),
        new SolutionCell(7,7,"RED"),
        new SolutionCell(2,8,"RED"),
        new SolutionCell(6,8,"RED")]
));
//Concept 7
exercises.push(new Exercise(7,1,7,
    "<h3>Concept 7 Demo 1</h3>" +
    "<p>In Bricklayer, it is possible to permit (or forbid) the contents of a cell to be overwritten." +
    " Assuming overwriting is permitted," +
    " execute the following Level 1 program by placing bricks at the appropriate locations.</p>"+
    "<p>put2D_3x2_RED (0 ,0);</p>"+
    "<p>put2D_3x2_WHITE (2 ,1);</p>"+
    "<p>put2D_3x2_BLUE (4 ,2);</p>",
    [   new SolutionCell(0,1,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(0,0,"RED"),
        new SolutionCell(2,0,"RED"),
        new SolutionCell(2,1,"WHITE"),
        new SolutionCell(2,2,"WHITE"),
        new SolutionCell(3,1,"WHITE"),
        new SolutionCell(3,2,"WHITE"),
        new SolutionCell(4,1,"WHITE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(5,2,"BLUE"),
        new SolutionCell(5,3,"BLUE"),
        new SolutionCell(6,2,"BLUE"),
        new SolutionCell(6,3,"BLUE")]
));
exercises.push(new Exercise(7,2,5,
    "<h3>Concept 7 Demo 2</h3>" +
    "<p>In Bricklayer, it is possible to permit (or forbid) the contents of a cell to be overwritten." +
    " Assuming overwriting is permitted," +
    " execute the following Level 1 program by placing bricks at the appropriate locations.</p>"+
    "<p>put2D_2x2_GREEN(0,0);</p>"+
    "<p>put2D_2x2_RED(1,1);</p>"+
    "<p>put2D_2x2_BLUE(2,2);</p>"+
    "<p>put2D_2x2_YELLOW(3,3);</p>"+
    "<p>put2D_1x1_EMPTY(4,4);</p>",
    [   new SolutionCell(0,1,"GREEN"),
        new SolutionCell(1,0,"GREEN"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(1,2,"RED"),
        new SolutionCell(0,0,"GREEN"),
        new SolutionCell(2,1,"RED"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(3,3,"YELLOW"),
        new SolutionCell(4,3,"YELLOW"),
        new SolutionCell(3,4,"YELLOW")]
));
exercises.push(new Exercise(7,3,5,
    "<h3>Concept 7 Exercise 1</h3>" +
    "<p>In Bricklayer, it is possible to permit (or forbid) the contents of a cell to be overwritten." +
    " Assuming overwriting is permitted," +
    " execute the following Level 1 program by placing bricks at the appropriate locations.</p>"+
    "<p>put2D_4x2_RED(0,0);</p>"+
    "<p>put2D_4x2_WHITE(1,1);</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(2,0,"RED"),
        new SolutionCell(3,0,"RED"),
        new SolutionCell(0,1,"RED"),
        new SolutionCell(1,1,"WHITE"),
        new SolutionCell(2,1,"WHITE"),
        new SolutionCell(3,1,"WHITE"),
        new SolutionCell(4,1,"WHITE"),
        new SolutionCell(1,2,"WHITE"),
        new SolutionCell(2,2,"WHITE"),
        new SolutionCell(3,2,"WHITE"),
        new SolutionCell(4,2,"WHITE")]
));
exercises.push(new Exercise(7,4,5,
    "<h3>Concept 7 Exercise 2</h3>" +
    "<p>In Bricklayer, it is possible to permit (or forbid) the contents of a cell to be overwritten." +
    " Assuming overwriting is permitted," +
    " execute the following Level 1 program by placing bricks at the appropriate locations.</p>"+
    "<p>put2D_4x2_GREEN(0,0);</p>"+
    "<p>put2D_4x2_EMPTY(1,1);</p>",
    [   new SolutionCell(0,0,"GREEN"),
        new SolutionCell(1,0,"GREEN"),
        new SolutionCell(2,0,"GREEN"),
        new SolutionCell(3,0,"GREEN"),
        new SolutionCell(0,1,"GREEN")]
));
exercises.push(new Exercise(7,5,4,
    "<h3>Concept 7 Exercise 3</h3>" +
    "<p>In Bricklayer, it is possible to permit (or forbid) the contents of a cell to be overwritten." +
    " Assuming overwriting is permitted," +
    " execute the following Level 1 program by placing bricks at the appropriate locations.</p>"+
    "<p>put2D_4x2_GRAY(0,0);</p>"+
    "<p>put2D_4x2_GRAY(0,2);</p>"+
    "<p>put2D_2x2_WHITE(1,1);</p>",
    [   new SolutionCell(0,0,"GRAY"),
        new SolutionCell(1,0,"GRAY"),
        new SolutionCell(2,0,"GRAY"),
        new SolutionCell(3,0,"GRAY"),
        new SolutionCell(0,1,"GRAY"),
        new SolutionCell(1,1,"WHITE"),
        new SolutionCell(2,1,"WHITE"),
        new SolutionCell(3,1,"GRAY"),
        new SolutionCell(0,2,"GRAY"),
        new SolutionCell(1,2,"WHITE"),
        new SolutionCell(2,2,"WHITE"),
        new SolutionCell(3,2,"GRAY"),
        new SolutionCell(0,3,"GRAY"),
        new SolutionCell(1,3,"GRAY"),
        new SolutionCell(2,3,"GRAY"),
        new SolutionCell(3,3,"GRAY")]
));
exercises.push(new Exercise(7,6,7,
    "<h3>Concept 7 Exercise 4</h3>" +
    "<p>In Bricklayer, it is possible to permit (or forbid) the contents of a cell to be overwritten." +
    " Assuming overwriting is permitted," +
    " execute the following Level 1 program by placing bricks at the appropriate locations.</p>"+
    "<p>put2D_4x2_GRAY(0,0);</p>"+
"<p>put2D_4x2_GRAY(0,2);</p>"+
"<p>put2D_3x2_GRAY(4,0);</p>"+
"<p>put2D_3x2_GRAY(4,2);</p>"+
"<p>put2D_2x2_EMPTY(1,0);</p>"+
"<p>put2D_2x2_EMPTY(4,0);</p>"+
"<p>put2D_2x1_EMPTY(1,3);</p>"+
"<p>put2D_2x1_EMPTY(4,3);</p>",
    [   new SolutionCell(0,0,"GRAY"),
        new SolutionCell(0,1,"GRAY"),
        new SolutionCell(0,2,"GRAY"),
        new SolutionCell(0,3,"GRAY"),
        new SolutionCell(1,2,"GRAY"),
        new SolutionCell(2,2,"GRAY"),
        new SolutionCell(3,0,"GRAY"),
        new SolutionCell(3,1,"GRAY"),
        new SolutionCell(3,2,"GRAY"),
        new SolutionCell(3,3,"GRAY"),
        new SolutionCell(4,2,"GRAY"),
        new SolutionCell(5,2,"GRAY"),
        new SolutionCell(6,0,"GRAY"),
        new SolutionCell(6,1,"GRAY"),
        new SolutionCell(6,2,"GRAY"),
        new SolutionCell(6,3,"GRAY")]
));
exercises.push(new Exercise(7,7,6,
    "<h3>Concept 7 Exercise 5</h3>" +
    "<p>In Bricklayer, it is possible to permit (or forbid) the contents of a cell to be overwritten." +
    " Assuming overwriting is permitted," +
    " execute the following Level 1 program by placing bricks at the appropriate locations.</p>"+
    "<p>put2D_3x2_YELLOW(0,4);</p>"+
"<p>put2D_3x2_YELLOW(3,4);</p>"+
"<p>put2D_3x2_YELLOW(0,2);</p>"+
"<p>put2D_3x2_YELLOW(3,2);</p>"+
"<p>put2D_3x2_YELLOW(0,0);</p>"+
"<p>put2D_3x2_YELLOW(3,0);</p>"+
"<p>put2D_1x1_GRAY(0,0);</p>"+
"<p>put2D_1x1_GRAY(1,1);</p>"+
"<p>put2D_1x1_GRAY(2,2);</p>"+
"<p>put2D_1x1_GRAY(3,3);</p>"+
"<p>put2D_1x1_GRAY(4,4);</p>"+
"<p>put2D_1x1_GRAY(5,5);</p>",
    [   new SolutionCell(0,0,"GRAY"),
        new SolutionCell(1,0,"YELLOW"),
        new SolutionCell(2,0,"YELLOW"),
        new SolutionCell(3,0,"YELLOW"),
        new SolutionCell(4,0,"YELLOW"),
        new SolutionCell(5,0,"YELLOW"),
        new SolutionCell(0,1,"YELLOW"),
        new SolutionCell(1,1,"GRAY"),
        new SolutionCell(2,1,"YELLOW"),
        new SolutionCell(3,1,"YELLOW"),
        new SolutionCell(4,1,"YELLOW"),
        new SolutionCell(5,1,"YELLOW"),
        new SolutionCell(0,2,"YELLOW"),
        new SolutionCell(1,2,"YELLOW"),
        new SolutionCell(2,2,"GRAY"),
        new SolutionCell(3,2,"YELLOW"),
        new SolutionCell(4,2,"YELLOW"),
        new SolutionCell(5,2,"YELLOW"),
        new SolutionCell(0,3,"YELLOW"),
        new SolutionCell(1,3,"YELLOW"),
        new SolutionCell(2,3,"YELLOW"),
        new SolutionCell(3,3,"GRAY"),
        new SolutionCell(4,3,"YELLOW"),
        new SolutionCell(5,3,"YELLOW"),
        new SolutionCell(0,4,"YELLOW"),
        new SolutionCell(1,4,"YELLOW"),
        new SolutionCell(2,4,"YELLOW"),
        new SolutionCell(3,4,"YELLOW"),
        new SolutionCell(4,4,"GRAY"),
        new SolutionCell(5,4,"YELLOW"),
        new SolutionCell(0,5,"YELLOW"),
        new SolutionCell(1,5,"YELLOW"),
        new SolutionCell(2,5,"YELLOW"),
        new SolutionCell(3,5,"YELLOW"),
        new SolutionCell(4,5,"YELLOW"),
        new SolutionCell(5,5,"GRAY")]
));
exercises.push(new Exercise(7,8,7,
    "<h3>Concept 7 Exercise 6</h3>" +
    "<p>In Bricklayer, it is possible to permit (or forbid) the contents of a cell to be overwritten." +
    " Assuming overwriting is permitted," +
    " execute the following Level 1 program by placing bricks at the appropriate locations.</p>"+
    "<p>put2D_4x2_RED(0,0);</p>"+
"<p>put2D_3x2_RED(4,0);</p>"+
"<p>put2D_4x2_RED(0,2);</p>"+
"<p>put2D_3x2_RED(4,2);</p>"+
"<p>put2D_4x2_RED(0,4);</p>"+
"<p>put2D_3x2_RED(4,4);</p>"+
"<p>put2D_4x2_RED(0,5);</p>"+
"<p>put2D_3x2_RED(4,5);</p>"+
"<p>put2D_1x2_BLUE(1,2);</p>"+
"<p>put2D_1x2_BLUE(1,4);</p>"+
"<p>put2D_2x1_BLUE(2,2);</p>"+
"<p>put2D_2x1_BLUE(3,4);</p>"+
"<p>put2D_1x2_BLUE(5,1);</p>"+
"<p>put2D_1x2_BLUE(5,3);</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(2,0,"RED"),
        new SolutionCell(3,0,"RED"),
        new SolutionCell(4,0,"RED"),
        new SolutionCell(5,0,"RED"),
        new SolutionCell(6,0,"RED"),
        new SolutionCell(0,1,"RED"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(2,1,"RED"),
        new SolutionCell(3,1,"RED"),
        new SolutionCell(4,1,"RED"),
        new SolutionCell(5,1,"BLUE"),
        new SolutionCell(6,1,"RED"),
        new SolutionCell(0,2,"RED"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(4,2,"RED"),
        new SolutionCell(5,2,"BLUE"),
        new SolutionCell(6,2,"RED"),
        new SolutionCell(0,3,"RED"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(2,3,"RED"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(4,3,"RED"),
        new SolutionCell(5,3,"BLUE"),
        new SolutionCell(6,3,"RED"),
        new SolutionCell(0,4,"RED"),
        new SolutionCell(1,4,"BLUE"),
        new SolutionCell(2,4,"RED"),
        new SolutionCell(3,4,"BLUE"),
        new SolutionCell(4,4,"BLUE"),
        new SolutionCell(5,4,"BLUE"),
        new SolutionCell(6,4,"RED"),
        new SolutionCell(0,5,"RED"),
        new SolutionCell(1,5,"BLUE"),
        new SolutionCell(2,5,"RED"),
        new SolutionCell(3,5,"RED"),
        new SolutionCell(4,5,"RED"),
        new SolutionCell(5,5,"RED"),
        new SolutionCell(6,5,"RED"),
        new SolutionCell(0,6,"RED"),
        new SolutionCell(1,6,"RED"),
        new SolutionCell(2,6,"RED"),
        new SolutionCell(3,6,"RED"),
        new SolutionCell(4,6,"RED"),
        new SolutionCell(5,6,"RED"),
        new SolutionCell(6,6,"RED")]
));
exercises.push(new Exercise(7,9,7,
    "<h3>Concept 7 Exercise 7</h3>" +
    "<p>In Bricklayer, it is possible to permit (or forbid) the contents of a cell to be overwritten." +
    " Assuming overwriting is permitted," +
    " execute the following Level 1 program by placing bricks at the appropriate locations.</p>"+
    "<p>put2D_4x2_RED(0,0);</p>"+
"<p>put2D_3x2_RED(4,0);</p>"+
"<p>put2D_4x2_RED(0,2);</p>"+
"<p>put2D_3x2_RED(4,2);</p>"+
"<p>put2D_4x2_RED(0,4);</p>"+
"<p>put2D_3x2_RED(4,4);</p>"+
"<p>put2D_4x2_RED(0,5);</p>"+
"<p>put2D_3x2_RED(4,5);</p>"+
"<p>put2D_1x1_WHITE(0,1);</p>"+
"<p>put2D_1x1_WHITE(1,2);</p>"+
"<p>put2D_1x1_WHITE(2,3);</p>"+
"<p>put2D_1x1_WHITE(3,4);</p>"+
"<p>put2D_1x1_WHITE(4,3);</p>"+
"<p>put2D_1x1_WHITE(5,2);</p>"+
"<p>put2D_1x1_WHITE(6,1);</p>"+
"<p>put2D_1x1_WHITE(0,5);</p>"+
"<p>put2D_1x1_WHITE(1,4);</p>"+
"<p>put2D_1x1_WHITE(2,3);</p>"+
"<p>put2D_1x1_WHITE(3,2);</p>"+
"<p>put2D_1x1_WHITE(4,3);</p>"+
"<p>put2D_1x1_WHITE(5,4);</p>"+
"<p>put2D_1x1_WHITE(6,5);</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(2,0,"RED"),
        new SolutionCell(3,0,"RED"),
        new SolutionCell(4,0,"RED"),
        new SolutionCell(5,0,"RED"),
        new SolutionCell(6,0,"RED"),
        new SolutionCell(0,1,"WHITE"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(2,1,"RED"),
        new SolutionCell(3,1,"RED"),
        new SolutionCell(4,1,"RED"),
        new SolutionCell(5,1,"RED"),
        new SolutionCell(6,1,"WHITE"),
        new SolutionCell(0,2,"RED"),
        new SolutionCell(1,2,"WHITE"),
        new SolutionCell(2,2,"RED"),
        new SolutionCell(3,2,"WHITE"),
        new SolutionCell(4,2,"RED"),
        new SolutionCell(5,2,"WHITE"),
        new SolutionCell(6,2,"RED"),
        new SolutionCell(0,3,"RED"),
        new SolutionCell(1,3,"RED"),
        new SolutionCell(2,3,"WHITE"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(4,3,"WHITE"),
        new SolutionCell(5,3,"RED"),
        new SolutionCell(6,3,"RED"),
        new SolutionCell(0,4,"RED"),
        new SolutionCell(1,4,"WHITE"),
        new SolutionCell(2,4,"RED"),
        new SolutionCell(3,4,"WHITE"),
        new SolutionCell(4,4,"RED"),
        new SolutionCell(5,4,"WHITE"),
        new SolutionCell(6,4,"RED"),
        new SolutionCell(0,5,"WHITE"),
        new SolutionCell(1,5,"RED"),
        new SolutionCell(2,5,"RED"),
        new SolutionCell(3,5,"RED"),
        new SolutionCell(4,5,"RED"),
        new SolutionCell(5,5,"RED"),
        new SolutionCell(6,5,"WHITE"),
        new SolutionCell(0,6,"RED"),
        new SolutionCell(1,6,"RED"),
        new SolutionCell(2,6,"RED"),
        new SolutionCell(3,6,"RED"),
        new SolutionCell(4,6,"RED"),
        new SolutionCell(5,6,"RED"),
        new SolutionCell(6,6,"RED")]
));
// Concept 8
exercises.push(new Exercise(8,1,5,
    "<h3>Concept 8 Demo 1</h3>" +
    "<p>On paper, write a program consisting of a sequence of function calls." +
    " When you are finished, hand your program to a classmate to execute." +
    " Verify that the execution is correct.</p>",
    [   new SolutionCell(0,0,"EMPTY")]
));
exercises.push(new Exercise(8,2,6,
    "<h3>Concept 8 Exercise 1</h3>" +
    "<p>On paper, write a program consisting of a sequence of function calls." +
    " When you are finished, hand your program to a classmate to execute." +
    " Verify that the execution is correct.</p>",
    [   new SolutionCell(0,0,"EMPTY")]
));
exercises.push(new Exercise(8,3,5,
    "<h3>Concept 8 Exercise 2</h3>" +
    "<p>1. Take two pieces of paper containing programs and combine them and execute the result." +
    " Assume overwriting is permitted.</p>"+
    "<p>2. The reverse the order of the pages (i.e., programs) and execute the result.</p>",
    [   new SolutionCell(0,0,"EMPTY")]
));
//Concept 9
exercises.push(new Exercise(9,1,7,
    "<h3>Concept 9 Demo 1</h3>" +
    "<p>In the exercises folder you will find a file named vitruvia_09_demo_01.pdf.</p>"+
    "<p>The structure is the flag of Denmark." +
    " Assuming the lower left corner of the flag is at cell (0,0), what bricks need to be placed to complete the flag?</p>",
    [   new SolutionCell(3,3,"RED"),
        new SolutionCell(4,3,"RED"),
        new SolutionCell(5,2,"WHITE"),
        new SolutionCell(6,2,"WHITE")]
));
exercises.push(new Exercise(9,2,8,
    "<h3>Concept 9 Exercise 1</h3>" +
    "<p>In the exercises folder you will find a file named vitruvia_09_01.pdf." +
    " The structure is the flag of Germany which consists of a BLACK horizontal stripe at the top," +
    " followed by a RED horizontal stripe in the middle," +
    " and a YELLOW horizontal stripe at the bottom. Assuming the lower left corner of the flag is at cell (0,0)," +
    " what bricks need to be placed to complete the flag?</p>",
    [   new SolutionCell(0,1,"YELLOW"),
        new SolutionCell(1,3,"RED"),
        new SolutionCell(5,1,"YELLOW"),
        new SolutionCell(5,2,"RED")]
));
exercises.push(new Exercise(9,3,8,
    "<h3>Concept 9 Exercise 2</h3>" +
    "<p>In the exercises folder you will find a file named vitruvia_09_02.pdf." +
    " The structure is the flag of France which is a BLUE stripe followed by a WHITE stripe followed by a RED stripe." +
    " Assuming the lower left corner of the flag is at cell (0,0)," +
    " what bricks need to be placed to complete the flag?</p>",
    [   new SolutionCell(1,1,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(2,1,"WHITE"),
        new SolutionCell(2,2,"WHITE")]
));
// Concept 10
exercises.push(new Exercise(10,1,8,
    "<h3>Concept 10 Demo 1</h3>" +
    "<p>fun redBackground() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>put2D_3x2_RED(0,0);</p>"+
    "<p style='text-indent: 4em;'>put2D_3x2_RED(0,3);</p>"+
    "<p style='text-indent: 4em;'>put2D_4x2_RED(4,0);</p>"+
    "<p style='text-indent: 4em;'>put2D_4x2_RED(4,3)</p>"+
    "<p style='text-indent: 2em;'>);</p>"+
"<p>fun whiteHorizontalStripe() =</p>"+
"<p style='text-indent: 2em;'>(</p>"+
"<p style='text-indent: 4em;'>                put2D_2x1_WHITE(0,2);</p>"+
"<p style='text-indent: 4em;'>put2D_2x1_WHITE(2,2);</p>"+
"<p style='text-indent: 4em;'> put2D_2x1_WHITE(4,2);</p>"+
"<p style='text-indent: 4em;'> put2D_2x1_WHITE(6,2)</p>"+
"<p style='text-indent: 2em;'> )</p>"+
"<p> fun whiteVerticalStripe() =</p>"+
"<p style='text-indent: 2em;'>(</p>"+
"<p style='text-indent: 4em;'>put2D_1x2_WHITE(3,3);</p>"+
"<p style='text-indent: 4em;'> put2D_1x2_WHITE(3,0)</p>"+
"<p style='text-indent: 2em;'>  );</p>"+
"<p>(* this can be further structured *)</p>"+
"<p>redBackground();</p>"+
"<p>whiteHorizontalStripe();</p>"+
"<p>whiteVerticalStripe();  </p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(2,0,"RED"),
        new SolutionCell(3,0,"WHITE"),
        new SolutionCell(4,0,"RED"),
        new SolutionCell(5,0,"RED"),
        new SolutionCell(6,0,"RED"),
        new SolutionCell(7,0,"RED"),
        new SolutionCell(0,1,"RED"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(2,1,"RED"),
        new SolutionCell(3,1,"WHITE"),
        new SolutionCell(4,1,"RED"),
        new SolutionCell(5,1,"RED"),
        new SolutionCell(6,1,"RED"),
        new SolutionCell(7,1,"RED"),
        new SolutionCell(0,2,"WHITE"),
        new SolutionCell(1,2,"WHITE"),
        new SolutionCell(2,2,"WHITE"),
        new SolutionCell(3,2,"WHITE"),
        new SolutionCell(4,2,"WHITE"),
        new SolutionCell(5,2,"WHITE"),
        new SolutionCell(6,2,"WHITE"),
        new SolutionCell(7,2,"WHITE"),
        new SolutionCell(0,3,"RED"),
        new SolutionCell(1,3,"RED"),
        new SolutionCell(2,3,"RED"),
        new SolutionCell(3,3,"WHITE"),
        new SolutionCell(4,3,"RED"),
        new SolutionCell(5,3,"RED"),
        new SolutionCell(6,3,"RED"),
        new SolutionCell(7,3,"RED"),
        new SolutionCell(0,4,"RED"),
        new SolutionCell(1,4,"RED"),
        new SolutionCell(2,4,"RED"),
        new SolutionCell(3,4,"WHITE"),
        new SolutionCell(4,4,"RED"),
        new SolutionCell(5,4,"RED"),
        new SolutionCell(6,4,"RED"),
        new SolutionCell(7,4,"RED")]
));
exercises.push(new Exercise(10,2,5,
    "<h3>Concept 10 Exercise 1</h3>" +
    "<p>Evaluate the following program.</p>"+
    "<p>fun f() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>put2D_2x2_GREEN (0,0)</p>"+
    "<p style='text-indent: 2em;'>);</p>"+
    "<p>f();</p>",
    [   new SolutionCell(0,0,"GREEN"),
        new SolutionCell(1,0,"GREEN"),
        new SolutionCell(1,1,"GREEN"),
        new SolutionCell(0,1,"GREEN")]
));
exercises.push(new Exercise(10,3,6,
"<h3>Concept 10 Exercise 2</h3>" +
    "<p>Evaluate the following program.</p>"+
    "<p>fun france() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>put2D_2x4_BLUE (0,0);</p>"+
    "<p style='text-indent: 4em;'>put2D_2x4_WHITE (2,0);</p>"+
    "<p style='text-indent: 4em;'>put2D_2x4_RED (4,0) (* note there is no semicolon *)</p>"+
    "<p style='text-indent: 2em;'>);</p>"+
    "<p>france();</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(1,0,"BLUE"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(2,0,"WHITE"),
        new SolutionCell(2,1,"WHITE"),
        new SolutionCell(2,2,"WHITE"),
        new SolutionCell(2,3,"WHITE"),
        new SolutionCell(3,0,"WHITE"),
        new SolutionCell(3,1,"WHITE"),
        new SolutionCell(3,2,"WHITE"),
        new SolutionCell(3,3,"WHITE"),
        new SolutionCell(4,0,"RED"),
        new SolutionCell(4,1,"RED"),
        new SolutionCell(4,2,"RED"),
        new SolutionCell(4,3,"RED"),
        new SolutionCell(5,0,"RED"),
        new SolutionCell(5,1,"RED"),
        new SolutionCell(5,2,"RED"),
        new SolutionCell(5,3,"RED")]
));
exercises.push(new Exercise(10,4,5,
    "<h3>Concept 10 Exercise 3</h3>" +
    "<p>Evaluate the following program.</p>"+
    "<p>fun yellow() = put2D_2x2_YELLOW(0,0);</p>"+
    "<p>fun blue() = put2D_2x2_BLUE(1,1);</p>"+
    "<p>fun thing() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>yellow();</p>"+
    "<p style='text-indent: 4em;'>blue()</p>"+
    "<p style='text-indent: 2em;'>);</p>"+
    "<p>thing();</p>",
    [   new SolutionCell(1,1,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(0,0,"YELLOW"),
        new SolutionCell(0,1,"YELLOW"),
        new SolutionCell(1,0,"YELLOW")]
));
exercises.push(new Exercise(10,5,5,
    "<h3>Concept 10 Exercise 4</h3>" +
    "<p>Evaluate the following program.</p>"+
    "<p>fun yellow() = put2D_2x2_YELLOW(0,0);</p>"+
    "<p>fun blue() = put2D_2x2_BLUE(1,1);</p>"+
    "<p>fun thing() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>blue();</p>"+
    "<p style='text-indent: 4em;'>yellow()</p>"+
    "<p style='text-indent: 2em;'>);</p>"+
    "<p>thing();</p>",
    [   new SolutionCell(0,0,"YELLOW"),
        new SolutionCell(0,1,"YELLOW"),
        new SolutionCell(1,1,"YELLOW"),
        new SolutionCell(1,0,"YELLOW"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(2,2,"BLUE")]
));
exercises.push(new Exercise(10,6,5,
    "<h3>Concept 10 Exercise 5</h3>" +
    "<p>Evaluate the following program.</p>"+
    "<p>fun yellow() = put2D_2x2_YELLOW(0,0);</p>"+
    "<p>fun blue() = put2D_2x2_BLUE(0,1);</p>"+
    "<p>fun red() = put2D_2x2_RED(1,1);</p>"+
    "<p>fun thing() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>blue();</p>"+
    "<p style='text-indent: 4em;'>red();</p>"+
    "<p style='text-indent: 4em;'>yellow()</p>"+
    "<p style='text-indent: 2em;'>);</p>"+
    "<p>thing();</p>",
    [   new SolutionCell(0,0,"YELLOW"),
        new SolutionCell(0,1,"YELLOW"),
        new SolutionCell(1,1,"YELLOW"),
        new SolutionCell(1,0,"YELLOW"),
        new SolutionCell(2,1,"RED"),
        new SolutionCell(1,2,"RED"),
        new SolutionCell(2,2,"RED"),
        new SolutionCell(0,2,"BLUE")]
));
exercises.push(new Exercise(10,7,5,
    "<h3>Concept 10 Exercise 6</h3>" +
    "<p>Evaluate the following program.</p>"+
    "<p>fun gray() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>put2D_4x2_GRAY(0,0);</p>"+
    "<p style='text-indent: 4em;'>put2D_4x2_GRAY(0,2)</p>"+
    "<p style='text-indent: 2em;'>);</p>"+
    "<p>fun blue() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_BLUE(0,0);</p>"+
    "<p style='text-indent: 4em;'>put2D_2x2_BLUE(1,1);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_BLUE(3,3)</p>"+
    "<p style='text-indent: 2em;'>);</p>"+
    "<p>fun grayAndBlue() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'> gray();</p>"+
    "<p style='text-indent: 4em;'>blue()</p>"+
    "<p style='text-indent: 2em;'>);</p>"+
    "<p>grayAndBlue();</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,1,"GRAY"),
        new SolutionCell(0,2,"GRAY"),
        new SolutionCell(0,3,"GRAY"),
        new SolutionCell(1,0,"GRAY"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(1,3,"GRAY"),
        new SolutionCell(2,0,"GRAY"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(2,3,"GRAY"),
        new SolutionCell(3,0,"GRAY"),
        new SolutionCell(3,1,"GRAY"),
        new SolutionCell(3,2,"GRAY"),
        new SolutionCell(3,3,"BLUE")]
));
exercises.push(new Exercise(10,8,5,
    "<h3>Concept 10 Exercise 7</h3>" +
    "<p>Evaluate the following program.</p>"+
    "<p>fun red() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>put2D_4x2_RED(0,0);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x2_RED(4,0);</p>"+
    "<p style='text-indent: 4em;'>put2D_4x2_RED(0,2);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x2_RED(4,2);</p>"+
    "<p style='text-indent: 4em;'>put2D_2x1_RED(0,4);</p>"+
    "<p style='text-indent: 4em;'>put2D_2x1_RED(2,4);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_RED(4,4)</p>"+
    "<p style='text-indent: 2em;'>);</p>"+
    "<p>fun white() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>put2D_2x1_WHITE(2,2);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_WHITE(2,3);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_WHITE(1,2);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_WHITE(2,1)</p>"+
    "<p style='text-indent: 2em;'>);</p>"+
    "<p>fun flag() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>red();</p>"+
    "<p style='text-indent: 4em;'>white()</p>"+
    "<p style='text-indent: 2em;'>);</p>"+
    "<p>flag();</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(0,1,"RED"),
        new SolutionCell(0,2,"RED"),
        new SolutionCell(0,3,"RED"),
        new SolutionCell(0,4,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(1,2,"WHITE"),
        new SolutionCell(1,3,"RED"),
        new SolutionCell(1,4,"RED"),
        new SolutionCell(2,0,"RED"),
        new SolutionCell(2,1,"WHITE"),
        new SolutionCell(2,2,"WHITE"),
        new SolutionCell(2,3,"WHITE"),
        new SolutionCell(2,4,"RED"),
        new SolutionCell(3,0,"RED"),
        new SolutionCell(3,1,"RED"),
        new SolutionCell(3,2,"WHITE"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(3,4,"RED"),
        new SolutionCell(4,0,"RED"),
        new SolutionCell(4,1,"RED"),
        new SolutionCell(4,2,"RED"),
        new SolutionCell(4,3,"RED"),
        new SolutionCell(4,4,"RED")]
));
exercises.push(new Exercise(10,9,6,
    "<h3>Concept 10 Exercise 8</h3>" +
    "<p>Evaluate the following program.</p>"+
    "<p>fun red()   = put2D_2x4_RED(4,0)</p>"+
    "<p>fun white() = put2D_2x4_WHITE(2,0)</p>"+
    "<p>fun green() = put2D_2x4_GREEN(0,0)</p>"+
    "<p>fun flagOfItaly() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>green();</p>"+
    "<p style='text-indent: 4em;'>white();</p>"+
    "<p style='text-indent: 4em;'>red()</p>"+
    "<p style='text-indent: 2em;'>);</p>"+
    "<p>flagOfItaly();</p>",
    [   new SolutionCell(0,0,"GREEN"),
        new SolutionCell(0,1,"GREEN"),
        new SolutionCell(0,2,"GREEN"),
        new SolutionCell(0,3,"GREEN"),
        new SolutionCell(1,0,"GREEN"),
        new SolutionCell(1,1,"GREEN"),
        new SolutionCell(1,2,"GREEN"),
        new SolutionCell(1,3,"GREEN"),
        new SolutionCell(2,0,"WHITE"),
        new SolutionCell(2,1,"WHITE"),
        new SolutionCell(2,2,"WHITE"),
        new SolutionCell(2,3,"WHITE"),
        new SolutionCell(3,0,"WHITE"),
        new SolutionCell(3,1,"WHITE"),
        new SolutionCell(3,2,"WHITE"),
        new SolutionCell(3,3,"WHITE"),
        new SolutionCell(4,0,"RED"),
        new SolutionCell(4,1,"RED"),
        new SolutionCell(4,2,"RED"),
        new SolutionCell(4,3,"RED"),
        new SolutionCell(5,0,"RED"),
        new SolutionCell(5,1,"RED"),
        new SolutionCell(5,2,"RED"),
        new SolutionCell(5,3,"RED")]
));
exercises.push(new Exercise(10,10,8,
    "<h3>Concept 10 Exercise 9</h3>" +
    "<p>Evaluate the following program.</p>"+
    "<p>fun horizontalRed()   =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>put2D_4x2_RED(0,0);</p>"+
    "<p style='text-indent: 4em;'>put2D_4x2_RED(4,0)</p>"+
    "<p style='text-indent: 2em;'>);</p>"+
    "<p>fun horizontalWhite() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>put2D_4x2_WHITE(0,4);</p>"+
    "<p style='text-indent: 4em;'>put2D_4x2_WHITE(4,4)</p>"+
    "<p style='text-indent: 2em;'>);</p>"+
    "<p>fun horizontalBlue()  =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>put2D_4x2_BLUE(0,2);</p>"+
    "<p style='text-indent: 4em;'>put2D_4x2_BLUE(4,2)</p>"+
    "<p style='text-indent: 2em;'>);</p>"+
    "<p>fun flagOfRussia() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>horizontalWhite();</p>"+
    "<p style='text-indent: 4em;'>horizontalBlue();</p>"+
    "<p style='text-indent: 4em;'>horizontalRed()</p>"+
    "<p style='text-indent: 2em;'>);</p>"+
    "<p>flagOfRussia();</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(2,0,"RED"),
        new SolutionCell(3,0,"RED"),
        new SolutionCell(4,0,"RED"),
        new SolutionCell(5,0,"RED"),
        new SolutionCell(6,0,"RED"),
        new SolutionCell(7,0,"RED"),
        new SolutionCell(0,1,"RED"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(2,1,"RED"),
        new SolutionCell(3,1,"RED"),
        new SolutionCell(4,1,"RED"),
        new SolutionCell(5,1,"RED"),
        new SolutionCell(6,1,"RED"),
        new SolutionCell(7,1,"RED"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(5,2,"BLUE"),
        new SolutionCell(6,2,"BLUE"),
        new SolutionCell(7,2,"BLUE"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(5,3,"BLUE"),
        new SolutionCell(6,3,"BLUE"),
        new SolutionCell(7,3,"BLUE"),
        new SolutionCell(0,4,"WHITE"),
        new SolutionCell(1,4,"WHITE"),
        new SolutionCell(2,4,"WHITE"),
        new SolutionCell(3,4,"WHITE"),
        new SolutionCell(4,4,"WHITE"),
        new SolutionCell(5,4,"WHITE"),
        new SolutionCell(6,4,"WHITE"),
        new SolutionCell(7,4,"WHITE"),
        new SolutionCell(0,5,"WHITE"),
        new SolutionCell(1,5,"WHITE"),
        new SolutionCell(2,5,"WHITE"),
        new SolutionCell(3,5,"WHITE"),
        new SolutionCell(4,5,"WHITE"),
        new SolutionCell(5,5,"WHITE"),
        new SolutionCell(6,5,"WHITE"),
        new SolutionCell(7,5,"WHITE")]
));
// Concept 11
exercises.push(new Exercise(11,1,5,
    "<h3>Concept 11 Demo 1</h3>" +
    "<p>Execute the following Level 1 program by placing bricks at the appropriate locations. </p>"+
    "<p>put2D_1x1_YELLOW(0,0);</p>"+
    "<p>incOffset2D(1,3);</p>"+
    "<p>put2D_4x2_BLUE(0,0);</p>",
    [   new SolutionCell(0,0,"YELLOW"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(1,4,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(3,4,"BLUE"),
        new SolutionCell(4,4,"BLUE")]
));
exercises.push(new Exercise(11,2,5,
    "<h3>Concept 11 Demo 2</h3>" +
    "<p>Execute the following Level 1 program by placing bricks at the appropriate locations. </p>"+
    "<p>put2D_2x1_RED(0,0);</p>"+
    "<p>incOffset2D(1,1);</p>"+
    "<p>put2D_2x1_WHITE(0,0);</p>"+
    "<p>incOffset2D(1,1);</p>"+
    "<p>put2D_2x1_BLUE(0,0);</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(1,1,"WHITE"),
        new SolutionCell(2,1,"WHITE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(3,2,"BLUE")]
));
exercises.push(new Exercise(11,3,5,
    "<h3>Concept 11 Demo 3</h3>" +
    "<p>Execute the following Level 1 program by placing bricks at the appropriate locations. </p>"+
    "<p>put2D_2x1_RED(0,0);</p>"+
    "<p>setOffset2D(1,1);</p>"+
    "<p>put2D_2x1_WHITE(0,0);</p>"+
    "<p>setOffset2D(2,2);</p>"+
    "<p>put2D_2x1_BLUE(0,0);</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(1,1,"WHITE"),
        new SolutionCell(2,1,"WHITE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(3,2,"BLUE")]
));
exercises.push(new Exercise(11,4,6,
    "<h3>Concept 11 Demo 4</h3>" +
    "<p>Execute the following program by placing bricks at the appropriate locations.</p>"+
"<p>put2D_2x1_RED(0,0);</p>"+
"<p>incOffset2D(1,1);</p>"+
"<p>put2D_2x1_WHITE(0,0);</p>"+
"<p>incOffset2D(1,1);</p>"+
"<p>put2D_2x1_BLUE(0,0);</p>"+
"<p>incOffset2D(1,~1);</p>"+
"<p>put2D_2x1_WHITE(0,0);</p>"+
"<p>incOffset2D(1,~1);</p>"+
"<p>put2D_2x1_RED(0,0);</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(1,1,"WHITE"),
        new SolutionCell(2,1,"WHITE"),
        new SolutionCell(3,1,"WHITE"),
        new SolutionCell(4,1,"WHITE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(4,0,"RED"),
        new SolutionCell(5,0,"RED")]
));
exercises.push(new Exercise(11,5,6,
    "<h3>Concept 11 Demo 5</h3>" +
    "<p>Execute the following program by placing bricks at the appropriate locations.</p>"+
    "<p>fun star() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>put2D_2x1_WHITE(0,1);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_WHITE(2,1);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_WHITE(1,0);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_WHITE(1,2);</p>"+
    "<p style='text-indent: 2em;'>);</p>"+
    "<p>fun stars() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>star();</p>"+
    "<p style='text-indent: 4em;'>incOffset2D(3,3);</p>"+
    "<p style='text-indent: 4em;'>star()</p>"+
    "<p style='text-indent: 2em;'>);</p>"+
    "<p>stars();</p>",
    [   new SolutionCell(1,1,"WHITE"),
        new SolutionCell(0,1,"WHITE"),
        new SolutionCell(1,0,"WHITE"),
        new SolutionCell(2,1,"WHITE"),
        new SolutionCell(1,2,"WHITE"),
        new SolutionCell(4,4,"WHITE"),
        new SolutionCell(3,4,"WHITE"),
        new SolutionCell(4,3,"WHITE"),
        new SolutionCell(5,4,"WHITE"),
        new SolutionCell(4,5,"WHITE")]
));
exercises.push(new Exercise(11,6,5,
    "<h3>Concept 11 Demo 6</h3>" +
    "<p>Execute the following program by placing bricks at the appropriate locations.</p>"+
    "<p>fun head() =</p>"+
"<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>incOffset2D(1,4);</p>"+
    "<p style='text-indent: 4em;'>put2D_2x1_YELLOW(0,0);</p>"+
    "<p style='text-indent: 4em;'>decOffset2D(1,4)</p>"+
"<p style='text-indent: 2em;'>)</p>"+
    "<p>fun body() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>incOffset2D(0,2);</p>"+
    "<p style='text-indent: 4em;'>put2D_4x2_RED(0,0);</p>"+
    "<p style='text-indent: 4em;'>decOffset2D(0,2)</p>"+
"<p style='text-indent: 2em;'>)</p>"+
    "<p>fun legs() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>put2D_1x2_BLUE(0,0);</p>"+
    "<p style='text-indent: 4em;'>incOffset2D(3,0);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x2_BLUE(0,0);</p>"+
    "<p style='text-indent: 4em;'>decOffset2D(3,0)</p>"+
"<p style='text-indent: 2em;'>)</p>"+
    "<p>fun person() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>head();</p>"+
    "<p style='text-indent: 4em;'>body();</p>"+
    "<p style='text-indent: 4em;'>legs()</p>"+
"<p style='text-indent: 2em;'>);</p>"+
"<p>person();</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(3,0,"BLUE"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(0,2,"RED"),
        new SolutionCell(1,2,"RED"),
        new SolutionCell(2,2,"RED"),
        new SolutionCell(3,2,"RED"),
        new SolutionCell(0,3,"RED"),
        new SolutionCell(1,3,"RED"),
        new SolutionCell(2,3,"RED"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(1,4,"YELLOW"),
        new SolutionCell(2,4,"YELLOW")]
));
exercises.push(new Exercise(11,7,6,
    "<h3>Concept 11 Exercise 1</h3>" +
    "<p>Execute the following program by placing bricks at the appropriate locations.</p>"+
    "<p>put2D_2x2_BLUE(0,0);</p>"+
    "<p>incOffset2D(0,4);</p>"+
    "<p>put2D_2x2_BLUE(0,0);</p>"+
    "<p>incOffset2D(4,0);</p>"+
    "<p>put2D_2x2_BLUE(0,0);</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(1,0,"BLUE"),
        new SolutionCell(1,0,"BLUE"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(0,4,"BLUE"),
        new SolutionCell(1,4,"BLUE"),
        new SolutionCell(0,5,"BLUE"),
        new SolutionCell(1,5,"BLUE"),
        new SolutionCell(4,4,"BLUE"),
        new SolutionCell(5,4,"BLUE"),
        new SolutionCell(4,5,"BLUE"),
        new SolutionCell(5,5,"BLUE")]
));
exercises.push(new Exercise(11,8,6,
    "<h3>Concept 11 Exercise 2</h3>" +
    "<p>Execute the following program by placing bricks at the appropriate locations.</p>"+
    "<p>put2D_2x2_GREEN(0,0);</p>"+
    "<p>incOffset2D(0,4);</p>"+
    "<p>put2D_2x2_GREEN(0,0);</p>"+
    "<p>incOffset2D(4,0);</p>"+
    "<p>put2D_2x2_GREEN(0,0);</p>"+
    "<p>decOffset2D(0,4);</p>"+
    "<p>put2D_2x2_GREEN(0,0);</p>",
    [   new SolutionCell(0,0,"GREEN"),
        new SolutionCell(1,0,"GREEN"),
        new SolutionCell(1,0,"GREEN"),
        new SolutionCell(1,1,"GREEN"),
        new SolutionCell(0,4,"GREEN"),
        new SolutionCell(1,4,"GREEN"),
        new SolutionCell(0,5,"GREEN"),
        new SolutionCell(1,5,"GREEN"),
        new SolutionCell(4,4,"GREEN"),
        new SolutionCell(5,4,"GREEN"),
        new SolutionCell(4,5,"GREEN"),
        new SolutionCell(5,5,"GREEN"),
        new SolutionCell(4,0,"GREEN"),
        new SolutionCell(5,0,"GREEN"),
        new SolutionCell(4,1,"GREEN"),
        new SolutionCell(5,1,"GREEN")]
));
exercises.push(new Exercise(11,9,6,
    "<h3>Concept 11 Exercise 3</h3>" +
    "<p>Execute the following program by placing bricks at the appropriate locations.</p>"+
    "<p>put2D_2x2_YELLOW(0,0);</p>"+
    "<p>incOffset2D(0,4);</p>"+
    "<p>put2D_2x2_GREEN(0,0);</p>"+
    "<p>incOffset2D(4,0);</p>"+
    "<p>put2D_2x2_RED(0,0);</p>"+
    "<p>decOffset2D(0,4);</p>"+
    "<p>put2D_2x2_GRAY(0,0);</p>"+
    "<p>incOffset2D(~2,2);</p>"+
    "<p>put2D_2x2_BLUE(0,0);</p>",
    [   new SolutionCell(0,0,"YELLOW"),
        new SolutionCell(1,0,"YELLOW"),
        new SolutionCell(1,0,"YELLOW"),
        new SolutionCell(1,1,"YELLOW"),
        new SolutionCell(0,4,"GREEN"),
        new SolutionCell(1,4,"GREEN"),
        new SolutionCell(0,5,"GREEN"),
        new SolutionCell(1,5,"GREEN"),
        new SolutionCell(4,4,"RED"),
        new SolutionCell(5,4,"RED"),
        new SolutionCell(4,5,"RED"),
        new SolutionCell(5,5,"RED"),
        new SolutionCell(4,0,"GRAY"),
        new SolutionCell(5,0,"GRAY"),
        new SolutionCell(4,1,"GRAY"),
        new SolutionCell(5,1,"GRAY"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(3,2,"BLUE")]
));
exercises.push(new Exercise(11,10,5,
    "<h3>Concept 11 Exercise 4</h3>" +
    "<p>Execute the following program by placing bricks at the appropriate locations.</p>"+
    "<p>put2D_1x1_RED(0,0);</p>"+
    "<p>setOffset2D(3,3);</p>"+
    "<p>put2D_2x2_BLUE(~1,~2);</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(3,1,"BLUE")]
));
exercises.push(new Exercise(11,11,6,
    "<h3>Concept 11 Exercise 5</h3>" +
    "<p>Execute the following program by placing bricks at the appropriate locations.</p>"+
    "<p>fun xGray() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_GRAY(0,2);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_GRAY(2,2);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_GRAY(0,0);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_GRAY(2,0);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_GRAY(1,1)</p>"+
    "<p style='text-indent: 2em;'>)</p>"+
    "<p>fun xBlue() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_BLUE(0,2);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_BLUE(2,2);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_BLUE(0,0);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_BLUE(2,0);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_BLUE(1,1)</p>"+
    "<p style='text-indent: 2em;'>)</p>"+
    "<p>fun xs() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>incOffset2D(1,1);</p>"+
    "<p style='text-indent: 4em;'>xGray();</p>"+
    "<p style='text-indent: 4em;'>incOffset2D(2,1);</p>"+
    "<p style='text-indent: 4em;'>xBlue();</p>"+
    "<p style='text-indent: 4em;'>decOffset2D(3,2)</p>"+
    "<p style='text-indent: 2em;'>)</p>"+
    "<p>xs();</p>"+
    "<p>put2D_1x1_RED(0,0);</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,1,"GRAY"),
        new SolutionCell(2,2,"GRAY"),
        new SolutionCell(3,3,"GRAY"),
        new SolutionCell(1,3,"GRAY"),
        new SolutionCell(3,1,"GRAY"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(5,4,"BLUE"),
        new SolutionCell(5,2,"BLUE"),
        new SolutionCell(3,4,"BLUE")]
));
exercises.push(new Exercise(11,12,6,
    "<h3>Concept 11 Exercise 6</h3>" +
    "<p>Execute the following program by placing bricks at the appropriate locations.</p>"+
    "<p>fun left() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>put2D_2x1_BLUE(0,2);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_BLUE(0,1);</p>"+
    "<p style='text-indent: 4em;'>put2D_2x1_BLUE(0,0)</p>"+
    "<p style='text-indent: 2em;'>)</p>"+
    "<p>fun right() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>put2D_2x1_YELLOW(0,2);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_YELLOW(1,1);</p>"+
    "<p style='text-indent: 4em;'>put2D_2x1_YELLOW(0,0)</p>"+
    "<p style='text-indent: 2em;'>)</p>"+
    "<p>fun pattern() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>left();</p>"+
    "<p style='text-indent: 4em;'>incOffset2D(1,1);</p>"+
    "<p style='text-indent: 4em;'>right();</p>"+
    "<p style='text-indent: 4em;'>decOffset2D(1,1)</p>"+
    "<p style='text-indent: 2em;'>)</p>"+
    "<p>pattern();</p>"+
    "<p>setOffset2D(3,0);</p>"+
    "<p>pattern();</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(1,0,"BLUE"),
        new SolutionCell(3,0,"BLUE"),
        new SolutionCell(4,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(1,1,"YELLOW"),
        new SolutionCell(2,1,"YELLOW"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(4,1,"YELLOW"),
        new SolutionCell(5,1,"YELLOW"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(2,2,"YELLOW"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(5,2,"YELLOW"),
        new SolutionCell(1,3,"YELLOW"),
        new SolutionCell(2,3,"YELLOW"),
        new SolutionCell(4,3,"YELLOW"),
        new SolutionCell(5,3,"YELLOW")]
));
exercises.push(new Exercise(11,13,6,
    "<h3>Concept 11 Exercise 7</h3>" +
    "<p>Execute the following program by placing bricks at the appropriate locations.</p>"+
    "<p>fun left() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>put2D_2x1_BLUE(0,2);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_BLUE(0,1);</p>"+
    "<p style='text-indent: 4em;'>put2D_2x1_BLUE(0,0)</p>"+
    "<p style='text-indent: 2em;'>)</p>"+
    "<p>fun right() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>put2D_2x1_YELLOW(0,2);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_YELLOW(1,1);</p>"+
    "<p style='text-indent: 4em;'>put2D_2x1_YELLOW(0,0)</p>"+
    "<p style='text-indent: 2em;'>)</p>"+
    "<p>fun top() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>put2D_1x2_GREEN(0,0);</p>"+
    "<p style='text-indent: 4em;'>put2D_2x1_GREEN(1,1);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x2_GREEN(3,0)</p>"+
    "<p style='text-indent: 2em;'>)</p>"+
    "<p>fun bottom() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>put2D_1x2_GREEN(0,0);</p>"+
    "<p style='text-indent: 4em;'>put2D_2x1_GREEN(1,0);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x2_GREEN(3,0)</p>"+
    "<p style='text-indent: 2em;'>)</p>"+
    "<p>fun smallPattern() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>left();</p>"+
    "<p style='text-indent: 4em;'>incOffset2D(1,1);</p>"+
    "<p style='text-indent: 4em;'>right();</p>"+
    "<p style='text-indent: 4em;'>decOffset2D(1,1)</p>"+
    "<p style='text-indent: 2em;'>)</p>"+
    "<p>fun pattern() =</p>"+
"<p style='text-indent: 2em;'>(</p>"+
"<p style='text-indent: 4em;'>put2D_2x1_RED(0,0);</p>"+
"<p style='text-indent: 4em;'>incOffset2D(0,1);</p>"+
"<p style='text-indent: 4em;'>smallPattern();</p>"+
"<p style='text-indent: 4em;'>incOffset2D(3,0); (* offset = (3,1) *)</p>"+
"<p style='text-indent: 4em;'>smallPattern();</p>"+
"<p style='text-indent: 4em;'>incOffset2D(~3,3); (* offset = (0,4) *)</p>"+
"<p style='text-indent: 4em;'>top();</p>"+
"<p style='text-indent: 4em;'>incOffset2D(2,~4); (* offset = (2,0) *)</p>"+
"<p style='text-indent: 4em;'>bottom();</p>"+
"<p style='text-indent: 4em;'>decOffset2D(2,0);</p>"+
"<p style='text-indent: 4em;'>put2D_2x1_RED(4,5)</p>"+
"<p style='text-indent: 2em;'>);</p>"+
    "<p>pattern();</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(2,0,"GREEN"),
        new SolutionCell(3,0,"GREEN"),
        new SolutionCell(4,0,"GREEN"),
        new SolutionCell(5,0,"GREEN"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(2,1,"GREEN"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(4,1,"BLUE"),
        new SolutionCell(5,1,"GREEN"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(1,2,"YELLOW"),
        new SolutionCell(2,2,"YELLOW"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(4,2,"YELLOW"),
        new SolutionCell(5,2,"YELLOW"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(2,3,"YELLOW"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(5,3,"YELLOW"),
        new SolutionCell(0,4,"GREEN"),
        new SolutionCell(1,4,"YELLOW"),
        new SolutionCell(2,4,"YELLOW"),
        new SolutionCell(3,4,"GREEN"),
        new SolutionCell(4,4,"YELLOW"),
        new SolutionCell(5,4,"YELLOW"),
        new SolutionCell(0,5,"GREEN"),
        new SolutionCell(1,5,"GREEN"),
        new SolutionCell(2,5,"GREEN"),
        new SolutionCell(3,5,"GREEN"),
        new SolutionCell(4,5,"RED"),
        new SolutionCell(5,5,"RED")]
));
//Concept 12
exercises.push(new Exercise(12,1,5,
    "<h3>Concept 12 Demo 1</h3>" +
    "<p>Execute the following program by placing bricks at the appropriate locations.</p>"+
    "<p>fun myPut(x,z) = put2D_4x2_RED(x,z);</p>"+
    "<p>myPut(0,1);</p>",
    [   new SolutionCell(0,1,"RED"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(2,1,"RED"),
        new SolutionCell(3,1,"RED"),
        new SolutionCell(0,2,"RED"),
        new SolutionCell(1,2,"RED"),
        new SolutionCell(2,2,"RED"),
        new SolutionCell(3,2,"RED")]
));
exercises.push(new Exercise(12,2,5,
    "<h3>Concept 12 Demo 2</h3>" +
    "<p>Execute the following program by placing bricks at the appropriate locations.</p>"+
    "<p>fun myPut(x,z) =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_GREEN(x,z);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_GREEN(x+3,z+3))</p>"+
    "<p style='text-indent: 2em;'>)</p>"+
    "<p>setOffset2D(1,1);</p>"+
    "<p>put2D_1x1_BLUE(0,0);</p>"+
    "<p>setOffset2D(2,2);</p>"+
    "<p>put2D_1x1_RED(0,0);</p>"+
    "<p>setOffset2D(0,0);</p>"+
    "<p>myPut(0,0);</p>",
    [   new SolutionCell(0,0,"GREEN"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(2,2,"RED"),
        new SolutionCell(3,3,"GREEN")]
));
exercises.push(new Exercise(12,3,5,
    "<h3>Concept 12 Demo 3</h3>" +
    "<p>Execute the following program by placing bricks at the appropriate locations.</p>"+
    "<p>fun design1() =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_RED(0,0);</p>"+
"<p style='text-indent: 4em;'>incOffset2D(4,0);</p>"+
"<p style='text-indent: 4em;'>put2D_1x1_RED(0,0);</p>"+
"<p style='text-indent: 4em;'>incOffset2D(0,4);</p>"+
"<p style='text-indent: 4em;'>put2D_1x1_RED(0,0);</p>"+
"<p style='text-indent: 4em;'>decOffset2D(4,0);</p>"+
"<p style='text-indent: 4em;'>put2D_1x1_RED(0,0)</p>"+
    "<p style='text-indent: 2em;'>)</p>"+
    "<p>fun design2(x,z) =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_YELLOW(x,z);</p>"+
"<p style='text-indent: 4em;'>put2D_1x1_YELLOW(x+2,z);</p>"+
"<p style='text-indent: 4em;'>put2D_1x1_YELLOW(x+2,z+2);</p>"+
"<p style='text-indent: 4em;'>put2D_1x1_YELLOW(x,z+2)</p>"+
    "<p style='text-indent: 2em;'>)</p>"+
    "<p>design1();</p>"+
    "<p>setOffset2D(0,0);</p>"+
    "<p>design2(1,1);</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,1,"YELLOW"),
        new SolutionCell(3,1,"YELLOW"),
        new SolutionCell(4,0,"RED"),
        new SolutionCell(0,4,"RED"),
        new SolutionCell(1,3,"YELLOW"),
        new SolutionCell(3,3,"YELLOW"),
        new SolutionCell(4,4,"RED")]
));
exercises.push(new Exercise(12,4,6,
    "<h3>Concept 12 Demo 4</h3>" +
    "<p>Execute the following program by placing bricks at the appropriate locations.</p>"+
    "<p>fun put2D_6x2_RED(x,z) =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
   "<p style='text-indent: 4em;'>put2D_3x2_RED(x,z);</p>"+
    "<p style='text-indent: 4em;'>put2D_3x2_RED(x +3,z)</p>"+
    "<p style='text-indent: 2em;'>)</p>"+
    "<p>put2D_6x2_RED(0,0);</p>"+
    "<p>put2D_6x2_RED(0,3);</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(2,0,"RED"),
        new SolutionCell(3,0,"RED"),
        new SolutionCell(4,0,"RED"),
        new SolutionCell(5,0,"RED"),
        new SolutionCell(0,1,"RED"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(2,1,"RED"),
        new SolutionCell(3,1,"RED"),
        new SolutionCell(4,1,"RED"),
        new SolutionCell(5,1,"RED"),
        new SolutionCell(0,3,"RED"),
        new SolutionCell(1,3,"RED"),
        new SolutionCell(2,3,"RED"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(4,3,"RED"),
        new SolutionCell(5,3,"RED"),
        new SolutionCell(0,4,"RED"),
        new SolutionCell(1,4,"RED"),
        new SolutionCell(2,4,"RED"),
        new SolutionCell(3,4,"RED"),
        new SolutionCell(4,4,"RED"),
        new SolutionCell(5,4,"RED")]
));
exercises.push(new Exercise(12,5,6,
    "<h3>Concept 12 Demo 5</h3>" +
    "<p>Execute the following program by placing bricks at the appropriate locations.</p>"+
    "<p>fun put2D_6x2_RED_on_Row_Zero x =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>put2D_3x2_RED(x  ,0);</p>"+
    "<p style='text-indent: 4em;'>put2D_3x2_RED(x+3,0)</p>"+
    "<p style='text-indent: 2em;'>)</p>"+
    "<p>put2D_6x2_RED_on_Row_Zero 0;</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(2,0,"RED"),
        new SolutionCell(3,0,"RED"),
        new SolutionCell(4,0,"RED"),
        new SolutionCell(5,0,"RED"),
        new SolutionCell(0,1,"RED"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(2,1,"RED"),
        new SolutionCell(3,1,"RED"),
        new SolutionCell(4,1,"RED"),
        new SolutionCell(5,1,"RED")]
));
exercises.push(new Exercise(12,6,6,
    "<h3>Concept 12 Exercise 1</h3>" +
    "<p>Execute the following program by placing bricks at the appropriate locations.</p>"+
    "<p>fun mysteryPiece(x,z) =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>put2D_2x2_BLUE(x,z);</p>"+
    "<p style='text-indent: 4em;'>put2D_2x2_BLUE(x+2,z+2)</p>"+
    "<p style='text-indent: 2em;'>)</p>"+
    "<p>mysteryPiece(2,0);</p>"+
    "<p>mysteryPiece(0,2);</p>",
    [   new SolutionCell(2,0,"BLUE"),
        new SolutionCell(3,0,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(5,2,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(5,3,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(3,4,"BLUE"),
        new SolutionCell(2,5,"BLUE"),
        new SolutionCell(3,5,"BLUE")]
));
exercises.push(new Exercise(12,7,7,
    "<h3>Concept 12 Exercise 2</h3>" +
    "<p>Execute the following program by placing bricks at the appropriate locations.</p>"+
    "<p>fun mysteryPiece(x,z) =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_RED(x,z+1);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_RED(x+2,z+1);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x2_BLUE(x+1,z);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_BLUE(x+1,z+2)</p>"+
    "<p style='text-indent: 2em;'>)</p>"+
    "<p>mysteryPiece(0,0);</p>"+
    "<p>mysteryPiece(4,0);</p>",
    [   new SolutionCell(1,0,"BLUE"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(0,1,"RED"),
        new SolutionCell(2,1,"RED"),
        new SolutionCell(5,0,"BLUE"),
        new SolutionCell(5,1,"BLUE"),
        new SolutionCell(5,2,"BLUE"),
        new SolutionCell(4,1,"RED"),
        new SolutionCell(6,1,"RED")]
));
exercises.push(new Exercise(12,8,5,
    "<h3>Concept 12 Exercise 3</h3>" +
    "<p>Execute the following program by placing bricks at the appropriate locations.</p>"+
    "<p>fun mystery v =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_GREEN (v   ,v);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_GREEN (v+1 ,v+1);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_YELLOW(v+1 ,v);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_YELLOW(v   ,v+1)</p>"+
    "<p style='text-indent: 2em;'>)</p>"+
    "<p>mystery 0;</p>"+
    "<p>mystery 3;</p>",
    [   new SolutionCell(0,0,"GREEN"),
        new SolutionCell(0,1,"YELLOW"),
        new SolutionCell(1,0,"YELLOW"),
        new SolutionCell(1,1,"GREEN"),
        new SolutionCell(3,3,"GREEN"),
        new SolutionCell(3,4,"YELLOW"),
        new SolutionCell(4,3,"YELLOW"),
        new SolutionCell(4,4,"GREEN")]
));
exercises.push(new Exercise(12,9,5,
    "<h3>Concept 12 Exercise 4</h3>" +
    "<p>Execute the following program by placing bricks at the appropriate locations.</p>"+
    "<p>fun mystery v =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_BLUE(v   ,0);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_BLUE(v   ,1);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_BLUE(v   ,2);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x1_BLUE(v   ,3)</p>"+
    "<p style='text-indent: 2em;'>)</p>"+
    "<p>mystery 0;</p>"+
    "<p>mystery 2;</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(2,3,"BLUE")]
));
exercises.push(new Exercise(12,10,7,
    "<h3>Concept 12 Exercise 5</h3>" +
    "<p>fun f v =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>put2D_1x2_BLUE(v,v);</p>"+
    "<p style='text-indent: 4em;'>put2D_1x2_BLUE(v,v+2)</p>"+
    "<p style='text-indent: 2em;'>)</p>"+
    "<p>fun g v =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>put2D_2x1_RED(v,v);</p>"+
    "<p style='text-indent: 4em;'>put2D_2x1_RED(v+2,v)</p>"+
    "<p style='text-indent: 2em;'>)</p>"+
    "<p>fun mystery(x,z) =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>f x;</p>"+
    "<p style='text-indent: 4em;'>g z</p>"+
    "<p style='text-indent: 2em;'>)</p>"+
    "<p>mystery(0, 1);</p>"+
    "<p>incOffset2D(2,2);</p>"+
    "<p>mystery(0, 1);</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(2,5,"BLUE"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(2,1,"RED"),
        new SolutionCell(3,1,"RED"),
        new SolutionCell(4,1,"RED"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(4,3,"RED"),
        new SolutionCell(5,3,"RED"),
        new SolutionCell(6,3,"RED")]
));
// Concept 13
exercises.push(new Exercise(13,1,7,
    "<h3>Concept 13 Demo 1</h3>" +
    "<p>Idea: radius*radius >= x*x + z*z</p>"+
"<p>Formula: radius >= sqrt( sq(x-centerX) + sq(z-centerZ) )</p>"+
"<p>Note: We will round to the nearest integer.</p>"+
"<p>3 >= sqrt( sq(~3) + sq(~1)) true</p>"+
"<p>3 >= sqrt( sq(~3) + sq(0) ) true</p>"+
"<p>3 >= sqrt( sq(~3) + sq(1) ) true</p>"+
"<p>3 >= sqrt( sq(~3) + sq(2) ) false</p>"+
"<p>3 >= sqrt( sq(~3) + sq(3) ) false</p>"+
"<p>Execute the following function calls.</p>"+
"<p>circleXZ 3 BLUE (3,3);</p>"+
"<p>put2D_1x1_WHITE(3,3);</p>",
    [   new SolutionCell(2,0,"BLUE"),
        new SolutionCell(3,0,"BLUE"),
        new SolutionCell(4,0,"BLUE"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(4,1,"BLUE"),
        new SolutionCell(5,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(5,2,"BLUE"),
        new SolutionCell(6,2,"BLUE"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(3,3,"WHITE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(5,3,"BLUE"),
        new SolutionCell(6,3,"BLUE"),
        new SolutionCell(0,4,"BLUE"),
        new SolutionCell(1,4,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(3,4,"BLUE"),
        new SolutionCell(4,4,"BLUE"),
        new SolutionCell(5,4,"BLUE"),
        new SolutionCell(6,4,"BLUE"),
        new SolutionCell(1,5,"BLUE"),
        new SolutionCell(2,5,"BLUE"),
        new SolutionCell(3,5,"BLUE"),
        new SolutionCell(4,5,"BLUE"),
        new SolutionCell(5,5,"BLUE"),
        new SolutionCell(2,6,"BLUE"),
        new SolutionCell(3,6,"BLUE"),
        new SolutionCell(4,6,"BLUE")]
));
//Concept 14
exercises.push(new Exercise(14,1,5,
    "<h3>Concept 14 Demo 1</h3>" +
    "<p>Execute the following function by putting bricks in the proper cells.</p>"+
    "<p>put2D (4,2) RED (0,0);</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(2,0,"RED"),
        new SolutionCell(3,0,"RED"),
        new SolutionCell(0,1,"RED"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(2,1,"RED"),
        new SolutionCell(3,1,"RED")]
));
exercises.push(new Exercise(14,2,5,
    "<h3>Concept 14 Demo 2</h3>" +
    "<p>Execute the following function by putting bricks in the proper cells.</p>"+
    "<p>put2D (4,4) BLUE (0,1);</p>",
    [   new SolutionCell(0,1,"BLUE"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(0,4,"BLUE"),
        new SolutionCell(1,4,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(3,4,"BLUE")]
));
exercises.push(new Exercise(14,3,5,
    "<h3>Concept 14 Exercise 1</h3>" +
    "<p>Execute the following function by putting bricks in the proper cells.</p>"+
    "<p>put2D (4,1) YELLOW (0,0);</p>",
    [   new SolutionCell(0,0,"YELLOW"),
        new SolutionCell(1,0,"YELLOW"),
        new SolutionCell(2,0,"YELLOW"),
        new SolutionCell(3,0,"YELLOW")]
));
exercises.push(new Exercise(14,4,5,
    "<h3>Concept 14 Exercise 2</h3>" +
    "<p>Execute the following function by putting bricks in the proper cells.</p>"+
    "<p>put2D (4,3) GREEN (0,1);</p>",
    [   new SolutionCell(0,1,"GREEN"),
        new SolutionCell(1,1,"GREEN"),
        new SolutionCell(2,1,"GREEN"),
        new SolutionCell(3,1,"GREEN"),
        new SolutionCell(0,2,"GREEN"),
        new SolutionCell(1,2,"GREEN"),
        new SolutionCell(2,2,"GREEN"),
        new SolutionCell(3,2,"GREEN"),
        new SolutionCell(0,3,"GREEN"),
        new SolutionCell(1,3,"GREEN"),
        new SolutionCell(2,3,"GREEN"),
        new SolutionCell(3,3,"GREEN")]
));
exercises.push(new Exercise(14,5,5,
    "<h3>Concept 14 Exercise 3</h3>" +
    "<p>Execute the following function by putting bricks in the proper cells.</p>"+
    "<p>put2D (4,4) GREEN (0,0);</p>"+
    "<p>put2D (4,4) BLUE  (1,1);</p>",
    [   new SolutionCell(0,0,"GREEN"),
        new SolutionCell(1,0,"GREEN"),
        new SolutionCell(2,0,"GREEN"),
        new SolutionCell(3,0,"GREEN"),
        new SolutionCell(0,1,"GREEN"),
        new SolutionCell(0,2,"GREEN"),
        new SolutionCell(0,3,"GREEN"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(4,1,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(1,4,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(3,4,"BLUE"),
        new SolutionCell(4,4,"BLUE")]
));
exercises.push(new Exercise(14,6,7,
    "<h3>Concept 14 Exercise 4</h3>" +
    "<p>Execute the following function by putting bricks in the proper cells.</p>"+
    "<p>put2D (7,5) RED (0,0);</p>"+
    "<p>put2D (7,1) WHITE (0,2);</p>"+
    "<p>put2D (1,5) WHITE (3,0);</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(2,0,"RED"),
        new SolutionCell(3,0,"WHITE"),
        new SolutionCell(4,0,"RED"),
        new SolutionCell(5,0,"RED"),
        new SolutionCell(6,0,"RED"),
        new SolutionCell(0,1,"RED"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(2,1,"RED"),
        new SolutionCell(3,1,"WHITE"),
        new SolutionCell(4,1,"RED"),
        new SolutionCell(5,1,"RED"),
        new SolutionCell(6,1,"RED"),
        new SolutionCell(0,2,"WHITE"),
        new SolutionCell(1,2,"WHITE"),
        new SolutionCell(2,2,"WHITE"),
        new SolutionCell(3,2,"WHITE"),
        new SolutionCell(4,2,"WHITE"),
        new SolutionCell(5,2,"WHITE"),
        new SolutionCell(6,2,"WHITE"),
        new SolutionCell(0,3,"RED"),
        new SolutionCell(1,3,"RED"),
        new SolutionCell(2,3,"RED"),
        new SolutionCell(3,3,"WHITE"),
        new SolutionCell(4,3,"RED"),
        new SolutionCell(5,3,"RED"),
        new SolutionCell(6,3,"RED"),
        new SolutionCell(0,4,"RED"),
        new SolutionCell(1,4,"RED"),
        new SolutionCell(2,4,"RED"),
        new SolutionCell(3,4,"WHITE"),
        new SolutionCell(4,4,"RED"),
        new SolutionCell(5,4,"RED"),
        new SolutionCell(6,4,"RED")]
));
exercises.push(new Exercise(14,7,7,
    "<h3>Concept 14 Exercise 5</h3>" +
    "<p>Execute the following function by putting bricks in the proper cells.</p>"+
    "<p>put2D (7,5) YELLOW (0,0);</p>"+
    "<p>put2D (5,3) BLUE (1,1);</p>"+
    "<p>put2D (3,1) WHITE (2,2);</p>",
    [   new SolutionCell(0,0,"YELLOW"),
        new SolutionCell(1,0,"YELLOW"),
        new SolutionCell(2,0,"YELLOW"),
        new SolutionCell(3,0,"YELLOW"),
        new SolutionCell(4,0,"YELLOW"),
        new SolutionCell(5,0,"YELLOW"),
        new SolutionCell(6,0,"YELLOW"),
        new SolutionCell(0,1,"YELLOW"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(4,1,"BLUE"),
        new SolutionCell(5,1,"BLUE"),
        new SolutionCell(6,1,"YELLOW"),
        new SolutionCell(0,2,"YELLOW"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(2,2,"WHITE"),
        new SolutionCell(3,2,"WHITE"),
        new SolutionCell(4,2,"WHITE"),
        new SolutionCell(5,2,"BLUE"),
        new SolutionCell(6,2,"YELLOW"),
        new SolutionCell(0,3,"YELLOW"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(5,3,"BLUE"),
        new SolutionCell(6,3,"YELLOW"),
        new SolutionCell(0,4,"YELLOW"),
        new SolutionCell(1,4,"YELLOW"),
        new SolutionCell(2,4,"YELLOW"),
        new SolutionCell(3,4,"YELLOW"),
        new SolutionCell(4,4,"YELLOW"),
        new SolutionCell(5,4,"YELLOW"),
        new SolutionCell(6,4,"YELLOW")]
));exercises.push(new Exercise(14,8,9,
    "<h3>Concept 14 Exercise 6</h3>" +
    "<p>put2D (9,9) BLUE (0,0);</p>"+
    "<p>put2D (9,3) WHITE (0,3);</p>"+
    "<p>put2D (3,9) WHITE (3,0);</p>"+
    "<p>put2D (9,1) RED (0,4);</p>"+
    "<p>put2D (1,9) RED (4,0);</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(1,0,"BLUE"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(3,0,"WHITE"),
        new SolutionCell(4,0,"RED"),
        new SolutionCell(5,0,"WHITE"),
        new SolutionCell(6,0,"BLUE"),
        new SolutionCell(7,0,"BLUE"),
        new SolutionCell(8,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(3,1,"WHITE"),
        new SolutionCell(4,1,"RED"),
        new SolutionCell(5,1,"WHITE"),
        new SolutionCell(6,1,"BLUE"),
        new SolutionCell(7,1,"BLUE"),
        new SolutionCell(8,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(3,2,"WHITE"),
        new SolutionCell(4,2,"RED"),
        new SolutionCell(5,2,"WHITE"),
        new SolutionCell(6,2,"BLUE"),
        new SolutionCell(7,2,"BLUE"),
        new SolutionCell(8,2,"BLUE"),
        new SolutionCell(0,3,"WHITE"),
        new SolutionCell(1,3,"WHITE"),
        new SolutionCell(2,3,"WHITE"),
        new SolutionCell(3,3,"WHITE"),
        new SolutionCell(4,3,"RED"),
        new SolutionCell(5,3,"WHITE"),
        new SolutionCell(6,3,"WHITE"),
        new SolutionCell(7,3,"WHITE"),
        new SolutionCell(8,3,"WHITE"),
        new SolutionCell(0,4,"RED"),
        new SolutionCell(1,4,"RED"),
        new SolutionCell(2,4,"RED"),
        new SolutionCell(3,4,"RED"),
        new SolutionCell(4,4,"RED"),
        new SolutionCell(5,4,"RED"),
        new SolutionCell(6,4,"RED"),
        new SolutionCell(7,4,"RED"),
        new SolutionCell(8,4,"RED"),
        new SolutionCell(0,5,"WHITE"),
        new SolutionCell(1,5,"WHITE"),
        new SolutionCell(2,5,"WHITE"),
        new SolutionCell(3,5,"WHITE"),
        new SolutionCell(4,5,"RED"),
        new SolutionCell(5,5,"WHITE"),
        new SolutionCell(6,5,"WHITE"),
        new SolutionCell(7,5,"WHITE"),
        new SolutionCell(8,5,"WHITE"),
        new SolutionCell(0,6,"BLUE"),
        new SolutionCell(1,6,"BLUE"),
        new SolutionCell(2,6,"BLUE"),
        new SolutionCell(3,6,"WHITE"),
        new SolutionCell(4,6,"RED"),
        new SolutionCell(5,6,"WHITE"),
        new SolutionCell(6,6,"BLUE"),
        new SolutionCell(7,6,"BLUE"),
        new SolutionCell(8,6,"BLUE"),
        new SolutionCell(0,7,"BLUE"),
        new SolutionCell(1,7,"BLUE"),
        new SolutionCell(2,7,"BLUE"),
        new SolutionCell(3,7,"WHITE"),
        new SolutionCell(4,7,"RED"),
        new SolutionCell(5,7,"WHITE"),
        new SolutionCell(6,7,"BLUE"),
        new SolutionCell(7,7,"BLUE"),
        new SolutionCell(8,7,"BLUE"),
        new SolutionCell(0,8,"BLUE"),
        new SolutionCell(1,8,"BLUE"),
        new SolutionCell(2,8,"BLUE"),
        new SolutionCell(3,8,"WHITE"),
        new SolutionCell(4,8,"RED"),
        new SolutionCell(5,8,"WHITE"),
        new SolutionCell(6,8,"BLUE"),
        new SolutionCell(7,8,"BLUE"),
        new SolutionCell(8,8,"BLUE")]
));
// Concept 15
exercises.push(new Exercise(15,1,5,
    "<h3>Concept 15 Demo 1</h3>" +
    "<p>Execute the following function by putting bricks in the proper cells.</p>"+
    "<p>lineXZ (0,0) (4,4) RED;</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(2,2,"RED"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(4,4,"RED")]
));
exercises.push(new Exercise(15,2,6,
    "<h3>Concept 15 Demo 2</h3>" +
    "<p>Execute the following function by putting bricks in the proper cells.</p>"+
    "<p>lineXZ (0,0) (5,1) BLUE;</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(1,0,"BLUE"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(4,1,"BLUE"),
        new SolutionCell(5,1,"BLUE")]
));
exercises.push(new Exercise(15,3,6,
    "<h3>Concept 15 Exercise 1</h3>" +
    "<p>Execute the following function by putting bricks in the proper cells.</p>"+
    "<p>lineXZ (0,0) (1,5) GREEN;</p>",
    [   new SolutionCell(0,0,"GREEN"),
        new SolutionCell(0,1,"GREEN"),
        new SolutionCell(0,2,"GREEN"),
        new SolutionCell(1,3,"GREEN"),
        new SolutionCell(1,4,"GREEN"),
        new SolutionCell(1,5,"GREEN")]
));
exercises.push(new Exercise(15,4,6,
    "<h3>Concept 15 Exercise 2</h3>" +
    "<p>Execute the following function by putting bricks in the proper cells.</p>"+
    "<p>lineXZ (0,0) (0,5) BLUE;</p>"+
"<p>lineXZ (0,0) (1,5) BLUE;</p>"+
"<p>lineXZ (0,0) (5,5) BLUE;</p>"+
"<p>lineXZ (0,0) (5,1) BLUE;</p>"+
"<p>lineXZ (0,0) (5,0) BLUE;</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(0,4,"BLUE"),
        new SolutionCell(0,5,"BLUE"),
        new SolutionCell(1,0,"BLUE"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(1,4,"BLUE"),
        new SolutionCell(1,5,"BLUE"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(3,0,"BLUE"),
        new SolutionCell(4,0,"BLUE"),
        new SolutionCell(5,0,"BLUE"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(4,1,"BLUE"),
        new SolutionCell(5,1,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(4,4,"BLUE"),
        new SolutionCell(5,5,"BLUE")]
));
//Concept 16
exercises.push(new Exercise(16,1,5,
    "<h3>Concept 16 Demo 1</h3>" +
    "<p>Execute the following function by putting bricks in the proper cells.</p>"+
    "<p>put2D (4,2) RED (3,4);</p>",
    [   new SolutionCell(3,4,"RED"),
        new SolutionCell(4,4,"RED")]
));
exercises.push(new Exercise(16,2,5,
    "<h3>Concept 16 Demo 2</h3>" +
    "<p>Execute the following function by putting bricks in the proper cells.</p>"+
    "<p>put2D (4,2) BLUE (~3,4);</p>",
    [new SolutionCell(0,4,"BLUE")]
));
exercises.push(new Exercise(16,3,5,
    "<h3>Concept 16 Exercise 1</h3>" +
    "<p>Execute the following function by putting bricks in the proper cells.</p>"+
    "<p>put2D (2,2) BLUE (4,4);</p>",
    [new SolutionCell(4,4,"BLUE")]
));
exercises.push(new Exercise(16,4,5,
    "<h3>Concept 16 Exercise 2</h3>" +
    "<p>Execute the following function by putting bricks in the proper cells.</p>"+
    "<p>put2D (2,4) GREEN (3,3);</p>",
    [   new SolutionCell(3,3,"GREEN"),
        new SolutionCell(4,4,"GREEN"),
        new SolutionCell(3,4,"GREEN"),
        new SolutionCell(4,3,"GREEN")]
));
exercises.push(new Exercise(16,5,5,
    "<h3>Concept 16 Exercise 3</h3>" +
    "<p>Execute the following function by putting bricks in the proper cells.</p>"+
    "<p>put2D (4,1) RED (5,3);</p>",
    [   new SolutionCell(0,0,"EMPTY")]
));
//Concept 17
exercises.push(new Exercise(17,1,7,
    "<h3>Concept 17 Demo 1</h3>" +
    "<p>build2D(7,7);</p>"+
    "<p>put2D (1,1) YELLOW (0,0);</p>"+
    "<p>setMySpace2D (1,1) (4,4);</p>"+
    "<p>put2D (5,5) BLUE (0,0);</p>",
    [   new SolutionCell(0,0,"YELLOW"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(4,1,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(1,4,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(3,4,"BLUE"),
        new SolutionCell(4,4,"BLUE")]
));
exercises.push(new Exercise(17,2,7,
    "<h3>Concept 17 Demo 2</h3>" +
    "<p>build2D(7,7);</p>"+
    "<p>setMySpace2D (0,0) (5,5);</p>"+
    "<p>put2D (6,6) BLUE   (0,0);</p>"+
    "<p>put2D (1,1) YELLOW (0,0);</p>"+
    "<p>put2D (1,1) YELLOW (4,4);</p>",
    [   new SolutionCell(0,0,"YELLOW"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(4,1,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(1,4,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(3,4,"BLUE"),
        new SolutionCell(4,4,"YELLOW"),
        new SolutionCell(1,0,"BLUE"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(3,0,"BLUE"),
        new SolutionCell(4,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(0,4,"BLUE")]
));
exercises.push(new Exercise(17,3,7,
    "<h3>Concept 17 Demo 3</h3>" +
    "<p>build2D(7,7);</p>"+
    "<p>put2D (1,1) GREEN (6,6);</p>"+
    "<p>setMySpace2D (0,0) (4,4);</p>"+
    "<p>put2D (4,4) RED (0,0);</p>"+
    "<p>setMySpace2D (2,2) (4,4);</p>"+
    "<p>put2D (4,4) BLUE (0,0);</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(0,1,"RED"),
        new SolutionCell(0,2,"RED"),
        new SolutionCell(0,3,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(1,2,"RED"),
        new SolutionCell(1,3,"RED"),
        new SolutionCell(2,0,"RED"),
        new SolutionCell(2,1,"RED"),
        new SolutionCell(3,0,"RED"),
        new SolutionCell(3,1,"RED"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(2,5,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(3,4,"BLUE"),
        new SolutionCell(3,5,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(4,4,"BLUE"),
        new SolutionCell(4,5,"BLUE"),
        new SolutionCell(5,2,"BLUE"),
        new SolutionCell(5,3,"BLUE"),
        new SolutionCell(5,4,"BLUE"),
        new SolutionCell(5,5,"BLUE"),
        new SolutionCell(6,6,"GREEN")]
));
exercises.push(new Exercise(17,4,7,
    "<h3>Concept 17 Demo 4</h3>" +
    "<p>build2D(7,7);</p>"+
    "<p>setMySpace2D (0,0) (3,5);</p>"+
"<p>put2D (10,10) RED (0,0);</p>"+
"<p>setMySpace2D (3,0) (3,4);</p>"+
"<p>put2D (10,10) BLUE (0,0);</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(0,1,"RED"),
        new SolutionCell(0,2,"RED"),
        new SolutionCell(0,3,"RED"),
        new SolutionCell(0,4,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(1,2,"RED"),
        new SolutionCell(1,3,"RED"),
        new SolutionCell(1,4,"RED"),
        new SolutionCell(2,0,"RED"),
        new SolutionCell(2,1,"RED"),
        new SolutionCell(2,2,"RED"),
        new SolutionCell(2,3,"RED"),
        new SolutionCell(2,4,"RED"),
        new SolutionCell(3,0,"BLUE"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(4,0,"BLUE"),
        new SolutionCell(4,1,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(5,0,"BLUE"),
        new SolutionCell(5,1,"BLUE"),
        new SolutionCell(5,2,"BLUE"),
        new SolutionCell(5,3,"BLUE")]
));
//Concept 18
exercises.push(new Exercise(18,1,6,
    "<h3>Concept 18 Demo 1</h3>" +
    "<p>fun f(x,z) = put2D (2,2) BLUE (x,z)</p>"+
    "<p>fun g(x,z) = put2D (2,2) GREEN (x,z)</p>"+
    "<p>fun thing1(x,z) =</p>"+
    "<p style='text-indent: 2em;'>(</p>"+
    "<p style='text-indent: 4em;'>f(x,z);</p>"+
    "<p style='text-indent: 4em;'>g(x+2,z+2)</p>"+
    "<p style='text-indent: 2em;'>)</p>"+
    "<p>fun thing2(x,z) =</p>"+
    "<p style='text-indent: 2em;'>let</p>"+
    "<p style='text-indent: 4em;'>fun f(x,z) = put2D (2,2) RED (x,z)</p>"+
    "<p style='text-indent: 2em;'>in</p>"+
    "<p style='text-indent: 4em;'>f(x,z);</p>"+
    "<p style='text-indent: 4em;'>g(x+2,z+2)</p>"+
    "<p style='text-indent: 2em;'>end;</p>"+
    "<p>thing1(0,2);</p>"+
    "<p>thing2(2,0);</p>",
    [   new SolutionCell(2,0,"RED"),
        new SolutionCell(2,1,"RED"),
        new SolutionCell(3,0,"RED"),
        new SolutionCell(3,1,"RED"),
        new SolutionCell(2,4,"GREEN"),
        new SolutionCell(2,5,"GREEN"),
        new SolutionCell(3,4,"GREEN"),
        new SolutionCell(3,5,"GREEN"),
        new SolutionCell(4,2,"GREEN"),
        new SolutionCell(4,3,"GREEN"),
        new SolutionCell(5,2,"GREEN"),
        new SolutionCell(5,3,"GREEN"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(1,3,"BLUE")]
));
// Concept 19
exercises.push(new Exercise(19,1,5,
    "<h3>Concept 19 Demo 1</h3>" +
    "<p>Assume that the XZ plane shown has y value of 0. Evaluate the following function call.</p>"+
    "<p>put (4,1,2) BLUE (0,0,0);</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(1,0,"BLUE"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(3,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(3,1,"BLUE")]
));
exercises.push(new Exercise(19,2,5,
    "<h3>Concept 19 Exercise 1</h3>" +
    "<p>Assume that the XZ plane shown has y value of 0. Evaluate the following function call.</p>"+
    "<p>put (2,1,3) RED (1,0,2);</p>",
    [   new SolutionCell(1,2,"RED"),
        new SolutionCell(2,2,"RED"),
        new SolutionCell(1,3,"RED"),
        new SolutionCell(2,3,"RED"),
        new SolutionCell(1,4,"RED"),
        new SolutionCell(2,4,"RED")]
));
exercises.push(new Exercise(19,3,5,
    "<h3>Concept 19 Exercise 2</h3>" +
    "<p>Assume that the XZ plane shown has y value of 0. Evaluate the following function call.</p>"+
    "<p>put (4,1,1) BLUE (0,0,4);</p>",
    [   new SolutionCell(0,4,"BLUE"),
        new SolutionCell(1,4,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(3,4,"BLUE")]
));
exercises.push(new Exercise(19,4,5,
    "<h3>Concept 19 Exercise 3</h3>" +
    "<p>Assume that the XZ plane shown has y value of 0. Evaluate the following function call.</p>"+
    "<p>put (2,1,3) GREEN (0,5,0);</p>",
    [   new SolutionCell(0,0,"GREEN"),
        new SolutionCell(1,0,"GREEN"),
        new SolutionCell(0,1,"GREEN"),
        new SolutionCell(1,1,"GREEN"),
        new SolutionCell(0,2,"GREEN"),
        new SolutionCell(1,2,"GREEN")]
));
//Concept 20
exercises.push(new Exercise(20,1,4,
    "<h3>Concept 20 Demo 1</h3>" +
    "<p>A brick function is a function that takes a 3D coordinate as its input and returns a brick." +
    " What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>"+
    "<p>fun f(x,y,z) = BLUE</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(1,0,"BLUE"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(3,0,"BLUE"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(3,3,"BLUE")]
));
exercises.push(new Exercise(20,2,6,
    "<h3>Concept 20 Demo 2</h3>" +
    "<p>A brick function is a function that takes a 3D coordinate as its input and returns a brick." +
    " What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>"+
    "<p>fun f(x,y,z) = if x = 3 then BLUE else RED</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(0,1,"RED"),
        new SolutionCell(0,2,"RED"),
        new SolutionCell(0,3,"RED"),
        new SolutionCell(0,4,"RED"),
        new SolutionCell(0,5,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(1,2,"RED"),
        new SolutionCell(1,3,"RED"),
        new SolutionCell(1,4,"RED"),
        new SolutionCell(1,5,"RED"),
        new SolutionCell(2,0,"RED"),
        new SolutionCell(2,1,"RED"),
        new SolutionCell(2,2,"RED"),
        new SolutionCell(2,3,"RED"),
        new SolutionCell(2,4,"RED"),
        new SolutionCell(2,5,"RED"),
        new SolutionCell(3,0,"BLUE"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(3,4,"BLUE"),
        new SolutionCell(3,5,"BLUE"),
        new SolutionCell(4,0,"RED"),
        new SolutionCell(4,1,"RED"),
        new SolutionCell(4,2,"RED"),
        new SolutionCell(4,3,"RED"),
        new SolutionCell(4,4,"RED"),
        new SolutionCell(4,5,"RED"),
        new SolutionCell(5,0,"RED"),
        new SolutionCell(5,1,"RED"),
        new SolutionCell(5,2,"RED"),
        new SolutionCell(5,3,"RED"),
        new SolutionCell(5,4,"RED"),
        new SolutionCell(5,5,"RED")]
));
exercises.push(new Exercise(20,3,6,
    "<h3>Concept 20 Exercise 1 </h3>" +
    "<p>A brick function is a function that takes a 3D coordinate as its input and returns a brick." +
    " What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>"+
    "<p>fun f(x,y,z) = if z = 3 then RED else EMPTY</p>",
    [   new SolutionCell(0,3,"RED"),
        new SolutionCell(1,3,"RED"),
        new SolutionCell(2,3,"RED"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(4,3,"RED"),
        new SolutionCell(5,3,"RED")]
));
exercises.push(new Exercise(20,4,6,
    "<h3>Concept 20 Exercise 2 </h3>" +
    "<p>A brick function is a function that takes a 3D coordinate as its input and returns a brick." +
    " What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>"+
    "<p>fun f(x,y,z) = if x = z then GREEN else EMPTY</p>",
    [   new SolutionCell(0,0,"GREEN"),
        new SolutionCell(1,1,"GREEN"),
        new SolutionCell(2,2,"GREEN"),
        new SolutionCell(3,3,"GREEN"),
        new SolutionCell(4,4,"GREEN"),
        new SolutionCell(5,5,"GREEN")]
));
exercises.push(new Exercise(20,5,6,
    "<h3>Concept 20 Exercise 3 </h3>" +
    "<p>A brick function is a function that takes a 3D coordinate as its input and returns a brick." +
    " What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>"+
    "<p>fun f(x,y,z) = if x < z then YELLOW else EMPTY</p>",
    [   new SolutionCell(0,5,"YELLOW"),
        new SolutionCell(1,5,"YELLOW"),
        new SolutionCell(2,5,"YELLOW"),
        new SolutionCell(3,5,"YELLOW"),
        new SolutionCell(4,5,"YELLOW"),
        new SolutionCell(0,4,"YELLOW"),
        new SolutionCell(1,4,"YELLOW"),
        new SolutionCell(2,4,"YELLOW"),
        new SolutionCell(3,4,"YELLOW"),
        new SolutionCell(0,3,"YELLOW"),
        new SolutionCell(1,3,"YELLOW"),
        new SolutionCell(2,3,"YELLOW"),
        new SolutionCell(0,2,"YELLOW"),
        new SolutionCell(1,2,"YELLOW"),
        new SolutionCell(0,1,"YELLOW")]
));
exercises.push(new Exercise(20,6,6,
    "<h3>Concept 20 Exercise 4 </h3>" +
    "<p>A brick function is a function that takes a 3D coordinate as its input and returns a brick." +
    " What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>"+
    "<p>fun f(x,y,z) = if x + z = 5 then BLUE else EMPTY</p>",
    [   new SolutionCell(0,5,"BLUE"),
        new SolutionCell(1,4,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(4,1,"BLUE"),
        new SolutionCell(5,0,"BLUE")]
));
exercises.push(new Exercise(20,7,6,
    "<h3>Concept 20 Exercise 5 </h3>" +
    "<p>A brick function is a function that takes a 3D coordinate as its input and returns a brick." +
    " What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>"+
    "<p>fun f(x,y,z) = if x + z > 5 then RED else EMPTY</p>",
    [   new SolutionCell(1,5,"RED"),
        new SolutionCell(2,5,"RED"),
        new SolutionCell(3,5,"RED"),
        new SolutionCell(4,5,"RED"),
        new SolutionCell(5,5,"RED"),
        new SolutionCell(2,4,"RED"),
        new SolutionCell(3,4,"RED"),
        new SolutionCell(4,4,"RED"),
        new SolutionCell(5,4,"RED"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(4,3,"RED"),
        new SolutionCell(5,3,"RED"),
        new SolutionCell(4,2,"RED"),
        new SolutionCell(5,2,"RED"),
        new SolutionCell(5,1,"RED")]
));
exercises.push(new Exercise(20,8,6,
    "<h3>Concept 20 Exercise 6 </h3>" +
    "<p>A brick function is a function that takes a 3D coordinate as its input and returns a brick." +
    " What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>"+
    "<p>fun f(x,y,z) = if (x + z) mod 2 = 0 then GRAY else WHITE</p>",
    [   new SolutionCell(0,0,"GRAY"),
        new SolutionCell(1,1,"GRAY"),
        new SolutionCell(2,2,"GRAY"),
        new SolutionCell(3,3,"GRAY"),
        new SolutionCell(4,4,"GRAY"),
        new SolutionCell(5,5,"GRAY"),
        new SolutionCell(2,0,"GRAY"),
        new SolutionCell(3,1,"GRAY"),
        new SolutionCell(4,2,"GRAY"),
        new SolutionCell(5,3,"GRAY"),
        new SolutionCell(4,0,"GRAY"),
        new SolutionCell(5,1,"GRAY"),
        new SolutionCell(0,2,"GRAY"),
        new SolutionCell(1,3,"GRAY"),
        new SolutionCell(2,4,"GRAY"),
        new SolutionCell(3,5,"GRAY"),
        new SolutionCell(0,4,"GRAY"),
        new SolutionCell(1,5,"GRAY"),
        new SolutionCell(5,0,"WHITE"),
        new SolutionCell(0,5,"WHITE"),
        new SolutionCell(0,3,"WHITE"),
        new SolutionCell(1,4,"WHITE"),
        new SolutionCell(2,5,"WHITE"),
        new SolutionCell(0,1,"WHITE"),
        new SolutionCell(1,2,"WHITE"),
        new SolutionCell(2,3,"WHITE"),
        new SolutionCell(3,4,"WHITE"),
        new SolutionCell(4,5,"WHITE"),
        new SolutionCell(1,0,"WHITE"),
        new SolutionCell(2,1,"WHITE"),
        new SolutionCell(3,2,"WHITE"),
        new SolutionCell(4,3,"WHITE"),
        new SolutionCell(5,4,"WHITE"),
        new SolutionCell(3,0,"WHITE"),
        new SolutionCell(4,1,"WHITE"),
        new SolutionCell(5,2,"WHITE")]
));
exercises.push(new Exercise(20,9,6,
    "<h3>Concept 20 Exercise 7 </h3>" +
    "<p>A brick function is a function that takes a 3D coordinate as its input and returns a brick." +
    " What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>"+
    "<p>fun f(x,y,z) = if x + z mod 2 = 0 then BLUE else YELLOW</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(1,0,"YELLOW"),
        new SolutionCell(2,0,"YELLOW"),
        new SolutionCell(3,0,"YELLOW"),
        new SolutionCell(4,0,"YELLOW"),
        new SolutionCell(5,0,"YELLOW"),
        new SolutionCell(0,1,"YELLOW"),
        new SolutionCell(1,1,"YELLOW"),
        new SolutionCell(2,1,"YELLOW"),
        new SolutionCell(3,1,"YELLOW"),
        new SolutionCell(4,1,"YELLOW"),
        new SolutionCell(5,1,"YELLOW"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(1,2,"YELLOW"),
        new SolutionCell(2,2,"YELLOW"),
        new SolutionCell(3,2,"YELLOW"),
        new SolutionCell(4,2,"YELLOW"),
        new SolutionCell(5,2,"YELLOW"),
        new SolutionCell(0,3,"YELLOW"),
        new SolutionCell(1,3,"YELLOW"),
        new SolutionCell(2,3,"YELLOW"),
        new SolutionCell(3,3,"YELLOW"),
        new SolutionCell(4,3,"YELLOW"),
        new SolutionCell(5,3,"YELLOW"),
        new SolutionCell(0,4,"BLUE"),
        new SolutionCell(1,4,"YELLOW"),
        new SolutionCell(2,4,"YELLOW"),
        new SolutionCell(3,4,"YELLOW"),
        new SolutionCell(4,4,"YELLOW"),
        new SolutionCell(5,4,"YELLOW"),
        new SolutionCell(0,5,"YELLOW"),
        new SolutionCell(1,5,"YELLOW"),
        new SolutionCell(2,5,"YELLOW"),
        new SolutionCell(3,5,"YELLOW"),
        new SolutionCell(4,5,"YELLOW"),
        new SolutionCell(5,5,"YELLOW")]
));
exercises.push(new Exercise(20,10,6,
    "<h3>Concept 20 Exercise 8 </h3>" +
    "<p>A brick function is a function that takes a 3D coordinate as its input and returns a brick." +
    " What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>"+
    "<p>fun f(x,y,z) = if x mod 2 = 0 then BLUE else EMPTY</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(0,4,"BLUE"),
        new SolutionCell(0,5,"BLUE"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(2,5,"BLUE"),
        new SolutionCell(4,0,"BLUE"),
        new SolutionCell(4,1,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(4,4,"BLUE"),
        new SolutionCell(4,5,"BLUE")]
));
exercises.push(new Exercise(20,11,6,
    "<h3>Concept 20 Exercise 9 </h3>" +
    "<p>A brick function is a function that takes a 3D coordinate as its input and returns a brick." +
    " What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>"+
    "<p>fun f(x,y,z) = if (x + z) mod 3 = 0 then BLUE else EMPTY</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(3,0,"BLUE"),
        new SolutionCell(1,5,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(5,1,"BLUE"),
        new SolutionCell(4,5,"BLUE"),
        new SolutionCell(5,4,"BLUE")]
));
exercises.push(new Exercise(20,12,6,
    "<h3>Concept 20 Exercise 10</h3>" +
    "<p>A brick function is a function that takes a 3D coordinate as its input and returns a brick." +
    " What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>"+
    "<p>fun f(x,y,z) = if (x + z) mod 3 = 0 then EMPTY else GREEN</p>",
    [   new SolutionCell(0,1,"GREEN"),
        new SolutionCell(0,2,"GREEN"),
        new SolutionCell(0,4,"GREEN"),
        new SolutionCell(0,5,"GREEN"),
        new SolutionCell(1,0,"GREEN"),
        new SolutionCell(1,1,"GREEN"),
        new SolutionCell(1,3,"GREEN"),
        new SolutionCell(1,4,"GREEN"),
        new SolutionCell(2,0,"GREEN"),
        new SolutionCell(2,2,"GREEN"),
        new SolutionCell(2,3,"GREEN"),
        new SolutionCell(2,5,"GREEN"),
        new SolutionCell(3,1,"GREEN"),
        new SolutionCell(3,2,"GREEN"),
        new SolutionCell(3,4,"GREEN"),
        new SolutionCell(3,5,"GREEN"),
        new SolutionCell(4,0,"GREEN"),
        new SolutionCell(4,1,"GREEN"),
        new SolutionCell(4,3,"GREEN"),
        new SolutionCell(4,4,"GREEN"),
        new SolutionCell(5,0,"GREEN"),
        new SolutionCell(5,2,"GREEN"),
        new SolutionCell(5,3,"GREEN"),
        new SolutionCell(5,5,"GREEN")]
));
exercises.push(new Exercise(20,13,6,
    "<h3>Concept 20 Exercise 11</h3>" +
    "<p>A brick function is a function that takes a 3D coordinate as its input and returns a brick." +
    " What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>"+
    "<p>fun f(x,y,z) = if x mod 3 + z mod 2 = 0 then RED else EMPTY</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(0,2,"RED"),
        new SolutionCell(0,4,"RED"),
        new SolutionCell(3,0,"RED"),
        new SolutionCell(3,2,"RED"),
        new SolutionCell(3,4,"RED")]
));
exercises.push(new Exercise(20,14,6,
    "<h3>Concept 20 Exercise 12</h3>" +
    "<p>A brick function is a function that takes a 3D coordinate as its input and returns a brick." +
    " What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>"+
    "<p>fun f(x,y,z) = if x mod 3 + z mod 2 = 1 then GREEN else EMPTY</p>",
    [   new SolutionCell(0,1,"GREEN"),
        new SolutionCell(0,3,"GREEN"),
        new SolutionCell(0,5,"GREEN"),
        new SolutionCell(1,0,"GREEN"),
        new SolutionCell(1,2,"GREEN"),
        new SolutionCell(1,4,"GREEN"),
        new SolutionCell(3,1,"GREEN"),
        new SolutionCell(3,3,"GREEN"),
        new SolutionCell(3,5,"GREEN"),
        new SolutionCell(4,0,"GREEN"),
        new SolutionCell(4,2,"GREEN"),
        new SolutionCell(4,4,"GREEN")]
));
exercises.push(new Exercise(20,15,6,
    "<h3>Concept 20 Exercise 13</h3>" +
    "<p>A brick function is a function that takes a 3D coordinate as its input and returns a brick." +
    " What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>"+
    "<p>fun f(x,y,z) = if x div 3 = 0 then GREEN else YELLOW</p>",
    [   new SolutionCell(0,0,"GREEN"),
        new SolutionCell(1,0,"GREEN"),
        new SolutionCell(2,0,"GREEN"),
        new SolutionCell(3,0,"YELLOW"),
        new SolutionCell(4,0,"YELLOW"),
        new SolutionCell(5,0,"YELLOW"),
        new SolutionCell(0,1,"GREEN"),
        new SolutionCell(1,1,"GREEN"),
        new SolutionCell(2,1,"GREEN"),
        new SolutionCell(3,1,"YELLOW"),
        new SolutionCell(4,1,"YELLOW"),
        new SolutionCell(5,1,"YELLOW"),
        new SolutionCell(0,2,"GREEN"),
        new SolutionCell(1,2,"GREEN"),
        new SolutionCell(2,2,"GREEN"),
        new SolutionCell(3,2,"YELLOW"),
        new SolutionCell(4,2,"YELLOW"),
        new SolutionCell(5,2,"YELLOW"),
        new SolutionCell(0,3,"GREEN"),
        new SolutionCell(1,3,"GREEN"),
        new SolutionCell(2,3,"GREEN"),
        new SolutionCell(3,3,"YELLOW"),
        new SolutionCell(4,3,"YELLOW"),
        new SolutionCell(5,3,"YELLOW"),
        new SolutionCell(0,4,"GREEN"),
        new SolutionCell(1,4,"GREEN"),
        new SolutionCell(2,4,"GREEN"),
        new SolutionCell(3,4,"YELLOW"),
        new SolutionCell(4,4,"YELLOW"),
        new SolutionCell(5,4,"YELLOW"),
        new SolutionCell(0,5,"GREEN"),
        new SolutionCell(1,5,"GREEN"),
        new SolutionCell(2,5,"GREEN"),
        new SolutionCell(3,5,"YELLOW"),
        new SolutionCell(4,5,"YELLOW"),
        new SolutionCell(5,5,"YELLOW")]
));
exercises.push(new Exercise(20,16,6,
    "<h3>Concept 20 Exercise 14</h3>" +
    "<p>A brick function is a function that takes a 3D coordinate as its input and returns a brick." +
    " What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>"+
    "<p>fun f(x,y,z) = if (x + z div 3) mod 2 = 0 then GREEN else YELLOW</p>",
    [   new SolutionCell(0,0,"GREEN"),
        new SolutionCell(0,1,"GREEN"),
        new SolutionCell(0,2,"GREEN"),
        new SolutionCell(0,3,"YELLOW"),
        new SolutionCell(0,4,"YELLOW"),
        new SolutionCell(0,5,"YELLOW"),
        new SolutionCell(1,0,"YELLOW"),
        new SolutionCell(1,1,"YELLOW"),
        new SolutionCell(1,2,"YELLOW"),
        new SolutionCell(1,3,"GREEN"),
        new SolutionCell(1,4,"GREEN"),
        new SolutionCell(1,5,"GREEN"),
        new SolutionCell(2,0,"GREEN"),
        new SolutionCell(2,1,"GREEN"),
        new SolutionCell(2,2,"GREEN"),
        new SolutionCell(2,3,"YELLOW"),
        new SolutionCell(2,4,"YELLOW"),
        new SolutionCell(2,5,"YELLOW"),
        new SolutionCell(3,0,"YELLOW"),
        new SolutionCell(3,1,"YELLOW"),
        new SolutionCell(3,2,"YELLOW"),
        new SolutionCell(3,3,"GREEN"),
        new SolutionCell(3,4,"GREEN"),
        new SolutionCell(3,5,"GREEN"),
        new SolutionCell(4,0,"GREEN"),
        new SolutionCell(4,1,"GREEN"),
        new SolutionCell(4,2,"GREEN"),
        new SolutionCell(4,3,"YELLOW"),
        new SolutionCell(4,4,"YELLOW"),
        new SolutionCell(4,5,"YELLOW"),
        new SolutionCell(5,0,"YELLOW"),
        new SolutionCell(5,1,"YELLOW"),
        new SolutionCell(5,2,"YELLOW"),
        new SolutionCell(5,3,"GREEN"),
        new SolutionCell(5,4,"GREEN"),
        new SolutionCell(5,5,"GREEN")]
));
exercises.push(new Exercise(20,17,6,
    "<h3>Concept 20 Exercise 15</h3>" +
    "<p>A brick function is a function that takes a 3D coordinate as its input and returns a brick." +
    " What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>"+
    "<p>fun f(x,y,z) = if ((x + z) div 3) mod 2 = 0 then GREEN else YELLOW</p>",
    [   new SolutionCell(0,0,"GREEN"),
        new SolutionCell(0,1,"GREEN"),
        new SolutionCell(0,2,"GREEN"),
        new SolutionCell(0,3,"YELLOW"),
        new SolutionCell(0,4,"YELLOW"),
        new SolutionCell(0,5,"YELLOW"),
        new SolutionCell(1,0,"GREEN"),
        new SolutionCell(1,1,"GREEN"),
        new SolutionCell(1,2,"YELLOW"),
        new SolutionCell(1,3,"YELLOW"),
        new SolutionCell(1,4,"YELLOW"),
        new SolutionCell(1,5,"GREEN"),
        new SolutionCell(2,0,"GREEN"),
        new SolutionCell(2,1,"YELLOW"),
        new SolutionCell(2,2,"YELLOW"),
        new SolutionCell(2,3,"YELLOW"),
        new SolutionCell(2,4,"GREEN"),
        new SolutionCell(2,5,"GREEN"),
        new SolutionCell(3,0,"YELLOW"),
        new SolutionCell(3,1,"YELLOW"),
        new SolutionCell(3,2,"YELLOW"),
        new SolutionCell(3,3,"GREEN"),
        new SolutionCell(3,4,"GREEN"),
        new SolutionCell(3,5,"GREEN"),
        new SolutionCell(4,0,"YELLOW"),
        new SolutionCell(4,1,"YELLOW"),
        new SolutionCell(4,2,"GREEN"),
        new SolutionCell(4,3,"GREEN"),
        new SolutionCell(4,4,"GREEN"),
        new SolutionCell(4,5,"YELLOW"),
        new SolutionCell(5,0,"YELLOW"),
        new SolutionCell(5,1,"GREEN"),
        new SolutionCell(5,2,"GREEN"),
        new SolutionCell(5,3,"GREEN"),
        new SolutionCell(5,4,"YELLOW"),
        new SolutionCell(5,5,"YELLOW")]
));
exercises.push(new Exercise(20,18,6,
    "<h3>Concept 20 Exercise 16</h3>" +
    "<p>A brick function is a function that takes a 3D coordinate as its input and returns a brick." +
    " What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>"+
    "<p>fun f(x,y,z) = if x div 3 = z div 3  then GREEN else YELLOW</p>",
    [   new SolutionCell(0,0,"GREEN"),
        new SolutionCell(0,1,"GREEN"),
        new SolutionCell(0,2,"GREEN"),
        new SolutionCell(0,3,"YELLOW"),
        new SolutionCell(0,4,"YELLOW"),
        new SolutionCell(0,5,"YELLOW"),
        new SolutionCell(1,0,"GREEN"),
        new SolutionCell(1,1,"GREEN"),
        new SolutionCell(1,2,"GREEN"),
        new SolutionCell(1,3,"YELLOW"),
        new SolutionCell(1,4,"YELLOW"),
        new SolutionCell(1,5,"YELLOW"),
        new SolutionCell(2,0,"GREEN"),
        new SolutionCell(2,1,"GREEN"),
        new SolutionCell(2,2,"GREEN"),
        new SolutionCell(2,3,"YELLOW"),
        new SolutionCell(2,4,"YELLOW"),
        new SolutionCell(2,5,"YELLOW"),
        new SolutionCell(3,0,"YELLOW"),
        new SolutionCell(3,1,"YELLOW"),
        new SolutionCell(3,2,"YELLOW"),
        new SolutionCell(3,3,"GREEN"),
        new SolutionCell(3,4,"GREEN"),
        new SolutionCell(3,5,"GREEN"),
        new SolutionCell(4,0,"YELLOW"),
        new SolutionCell(4,1,"YELLOW"),
        new SolutionCell(4,2,"YELLOW"),
        new SolutionCell(4,3,"GREEN"),
        new SolutionCell(4,4,"GREEN"),
        new SolutionCell(4,5,"GREEN"),
        new SolutionCell(5,0,"YELLOW"),
        new SolutionCell(5,1,"YELLOW"),
        new SolutionCell(5,2,"YELLOW"),
        new SolutionCell(5,3,"GREEN"),
        new SolutionCell(5,4,"GREEN"),
        new SolutionCell(5,5,"GREEN")]
));
//Concept 21
exercises.push(new Exercise(21,1,4,
    "<h3>Concept 21 Demo 1</h3>" +
    "<p>Nesting conditional expressions makes it possible to express conditions made up of multiple parts." +
    " What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>"+
    "<p>fun f(x,y,z) = if x = 0 then </p>" +
    "<p style='text-indent: 2em;'>if z = 0 then BLUE else EMPTY </p>" +
    "<p style='text-indent: 4em;'>else EMPTY</p>",
    [   new SolutionCell(0,0,"BLUE")]
));
exercises.push(new Exercise(21,2,4,
    "<h3>Concept 21 Demo 2</h3>" +
    "<p>SML defines the Boolean operator 'andalso' as follows:.</p>"+
    "<p>e1 andalso e2 = if e1 then e2 else false</p>" +
    "<p>In other words, the Boolean operator 'andalso' can be used to combine two Boolean expressions. " +
    "An expression (e1 andalso e2) evaluates to true if and only if e1 evaluates to true and e2 evaluates to true. " +
    "Otherwise, (e1 andalso e2)  evaluates to false.</p>"+
    "<p>What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>" +
    "<p>fun f(x,y,z) = if x = 0 andalso z = 0 then BLUE else EMPTY</p>",
    [   new SolutionCell(0,0,"BLUE")]
));
exercises.push(new Exercise(21,3,6,
    "<h3>Concept 21 Demo 3</h3>" +
    "<p>Nesting conditional expressions makes it possible to express conditions made up of multiple parts." +
    " What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>"+
    "<p>fun f(x,y,z) = if x < 3 then</p>" +
    "<p style='text-indent: 2em;'>if z < 3 then BLUE else RED</p>" +
    "<p style='text-indent: 4em;'>else RED;</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(0,3,"RED"),
        new SolutionCell(0,4,"RED"),
        new SolutionCell(0,5,"RED"),
        new SolutionCell(1,0,"BLUE"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(1,3,"RED"),
        new SolutionCell(1,4,"RED"),
        new SolutionCell(1,5,"RED"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(2,3,"RED"),
        new SolutionCell(2,4,"RED"),
        new SolutionCell(2,5,"RED"),
        new SolutionCell(3,0,"RED"),
        new SolutionCell(3,1,"RED"),
        new SolutionCell(3,2,"RED"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(3,4,"RED"),
        new SolutionCell(3,5,"RED"),
        new SolutionCell(4,0,"RED"),
        new SolutionCell(4,1,"RED"),
        new SolutionCell(4,2,"RED"),
        new SolutionCell(4,3,"RED"),
        new SolutionCell(4,4,"RED"),
        new SolutionCell(4,5,"RED"),
        new SolutionCell(5,0,"RED"),
        new SolutionCell(5,1,"RED"),
        new SolutionCell(5,2,"RED"),
        new SolutionCell(5,3,"RED"),
        new SolutionCell(5,4,"RED"),
        new SolutionCell(5,5,"RED")]
));
exercises.push(new Exercise(21,4,6,
    "<h3>Concept 21 Demo 4</h3>" +
    "<p>SML defines the Boolean operator 'andalso' as follows:.</p>"+
    "<p>e1 andalso e2 = if e1 then e2 else false</p>" +
    "<p>What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>" +
    "<p>fun f(x,y,z) = if x < 3 andalso z < 3 then BLUE else RED</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(0,3,"RED"),
        new SolutionCell(0,4,"RED"),
        new SolutionCell(0,5,"RED"),
        new SolutionCell(1,0,"BLUE"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(1,3,"RED"),
        new SolutionCell(1,4,"RED"),
        new SolutionCell(1,5,"RED"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(2,3,"RED"),
        new SolutionCell(2,4,"RED"),
        new SolutionCell(2,5,"RED"),
        new SolutionCell(3,0,"RED"),
        new SolutionCell(3,1,"RED"),
        new SolutionCell(3,2,"RED"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(3,4,"RED"),
        new SolutionCell(3,5,"RED"),
        new SolutionCell(4,0,"RED"),
        new SolutionCell(4,1,"RED"),
        new SolutionCell(4,2,"RED"),
        new SolutionCell(4,3,"RED"),
        new SolutionCell(4,4,"RED"),
        new SolutionCell(4,5,"RED"),
        new SolutionCell(5,0,"RED"),
        new SolutionCell(5,1,"RED"),
        new SolutionCell(5,2,"RED"),
        new SolutionCell(5,3,"RED"),
        new SolutionCell(5,4,"RED"),
        new SolutionCell(5,5,"RED")]
));
exercises.push(new Exercise(21,5,6,
    "<h3>Concept 21 Exercise 1</h3>" +
    "<p>Nesting conditional expressions makes it possible to express conditions made up of multiple parts." +
    " What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>"+
    "<p>fun f(x,y,z) = if 2 <= x then</p>" +
    "<p style='text-indent: 2em;'>if x <= 4 then BLUE else EMPTY</p>" +
    "<p style='text-indent: 4em;'>else EMPTY;</p>",
    [   new SolutionCell(2,0,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(2,5,"BLUE"),
        new SolutionCell(3,0,"BLUE"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(3,4,"BLUE"),
        new SolutionCell(3,5,"BLUE"),
        new SolutionCell(4,0,"BLUE"),
        new SolutionCell(4,1,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(4,4,"BLUE"),
        new SolutionCell(4,5,"BLUE")]
));
exercises.push(new Exercise(21,6,6,
    "<h3>Concept 21 Exercise 2</h3>" +
    "<p>SML defines the Boolean operator 'andalso' as follows:.</p>"+
    "<p>e1 andalso e2 = if e1 then e2 else false</p>" +
    "<p>What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>" +
    "<p>fun f(x,y,z) = if 2 <= x andalso x <= 4 then BLUE else EMPTY</p>",
    [   new SolutionCell(2,0,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(2,5,"BLUE"),
        new SolutionCell(3,0,"BLUE"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(3,4,"BLUE"),
        new SolutionCell(3,5,"BLUE"),
        new SolutionCell(4,0,"BLUE"),
        new SolutionCell(4,1,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(4,4,"BLUE"),
        new SolutionCell(4,5,"BLUE")]
));
exercises.push(new Exercise(21,7,6,
    "<h3>Concept 21 Exercise 3</h3>" +
    "<p>Nesting conditional expressions makes it possible to express conditions made up of multiple parts." +
    " What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>"+
    "<p>fun f(x,y,z) = if x >= z then</p>" +
    "<p style='text-indent: 2em;'>if x <= 2*z then BLUE else EMPTY</p>" +
    "<p style='text-indent: 4em;'>else EMPTY;</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(5,3,"BLUE"),
        new SolutionCell(4,4,"BLUE"),
        new SolutionCell(5,4,"BLUE"),
        new SolutionCell(5,5,"BLUE")]
));
exercises.push(new Exercise(21,8,6,
    "<h3>Concept 21 Exercise 4</h3>" +
    "<p>SML defines the Boolean operator 'andalso' as follows:.</p>"+
    "<p>e1 andalso e2 = if e1 then e2 else false</p>" +
    "<p>What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>" +
    "<p>fun f(x,y,z) = if x >= z andalso x <= 2*z then BLUE else EMPTY</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(5,3,"BLUE"),
        new SolutionCell(4,4,"BLUE"),
        new SolutionCell(5,4,"BLUE"),
        new SolutionCell(5,5,"BLUE")]
));
exercises.push(new Exercise(21,9,6,
    "<h3>Concept 21 Exercise 5</h3>" +
    "<p>Nesting conditional expressions makes it possible to express conditions made up of multiple parts." +
    " What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>"+
    "<p>fun f(x,y,z) = if x >= z div 2 then</p>" +
    "<p style='text-indent: 2em;'>if x <= 2*z then BLUE else EMPTY</p>" +
    "<p style='text-indent: 4em;'>else EMPTY;</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(2,5,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(3,4,"BLUE"),
        new SolutionCell(3,5,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(4,4,"BLUE"),
        new SolutionCell(4,5,"BLUE"),
        new SolutionCell(5,3,"BLUE"),
        new SolutionCell(5,4,"BLUE"),
        new SolutionCell(5,5,"BLUE")]
));
exercises.push(new Exercise(21,10,6,
    "<h3>Concept 21 Exercise 6</h3>" +
    "<p>SML defines the Boolean operator 'andalso' as follows:.</p>"+
    "<p>e1 andalso e2 = if e1 then e2 else false</p>" +
    "<p>What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>" +
    "<p>fun f(x,y,z) = if x >= z div 2 andalso x <= 2*z then BLUE else EMPTY</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(2,5,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(3,4,"BLUE"),
        new SolutionCell(3,5,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(4,4,"BLUE"),
        new SolutionCell(4,5,"BLUE"),
        new SolutionCell(5,3,"BLUE"),
        new SolutionCell(5,4,"BLUE"),
        new SolutionCell(5,5,"BLUE")]
));
exercises.push(new Exercise(21,11,6,
    "<h3>Concept 21 Exercise 7</h3>" +
    "<p>Nesting conditional expressions makes it possible to express conditions made up of multiple parts." +
    " What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>"+
    "<p>fun f(x,y,z) = if x <= 3 then</p>" +
    "<p style='text-indent: 2em;'>if z <= 3 then GREEN else EMPTY</p>" +
    "<p style='text-indent: 4em;'>else YELLOW</p>",
    [   new SolutionCell(0,0,"GREEN"),
        new SolutionCell(0,1,"GREEN"),
        new SolutionCell(0,2,"GREEN"),
        new SolutionCell(0,3,"GREEN"),
        new SolutionCell(1,0,"GREEN"),
        new SolutionCell(1,1,"GREEN"),
        new SolutionCell(1,2,"GREEN"),
        new SolutionCell(1,3,"GREEN"),
        new SolutionCell(2,0,"GREEN"),
        new SolutionCell(2,1,"GREEN"),
        new SolutionCell(2,2,"GREEN"),
        new SolutionCell(2,3,"GREEN"),
        new SolutionCell(3,0,"GREEN"),
        new SolutionCell(3,1,"GREEN"),
        new SolutionCell(3,2,"GREEN"),
        new SolutionCell(3,3,"GREEN"),
        new SolutionCell(4,0,"YELLOW"),
        new SolutionCell(4,1,"YELLOW"),
        new SolutionCell(4,2,"YELLOW"),
        new SolutionCell(4,3,"YELLOW"),
        new SolutionCell(4,4,"YELLOW"),
        new SolutionCell(4,5,"YELLOW"),
        new SolutionCell(5,0,"YELLOW"),
        new SolutionCell(5,1,"YELLOW"),
        new SolutionCell(5,2,"YELLOW"),
        new SolutionCell(5,3,"YELLOW"),
        new SolutionCell(5,4,"YELLOW"),
        new SolutionCell(5,5,"YELLOW")]
));
exercises.push(new Exercise(21,12,6,
    "<h3>Concept 21 Exercise 8</h3>" +
    "<p>SML defines the Boolean operator 'andalso' as follows:.</p>"+
    "<p>e1 andalso e2 = if e1 then e2 else false</p>" +
    "<p>What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>" +
    "<p>fun f(x,y,z) = if x <= 3 andalso z <= 3 then GREEN</p>"+
    "<p style='text-indent: 2em;'>else if x > 3 then YELLOW</p>" +
    "<p style='text-indent: 4em;'>else EMPTY</p>",
    [   new SolutionCell(0,0,"GREEN"),
        new SolutionCell(0,1,"GREEN"),
        new SolutionCell(0,2,"GREEN"),
        new SolutionCell(0,3,"GREEN"),
        new SolutionCell(1,0,"GREEN"),
        new SolutionCell(1,1,"GREEN"),
        new SolutionCell(1,2,"GREEN"),
        new SolutionCell(1,3,"GREEN"),
        new SolutionCell(2,0,"GREEN"),
        new SolutionCell(2,1,"GREEN"),
        new SolutionCell(2,2,"GREEN"),
        new SolutionCell(2,3,"GREEN"),
        new SolutionCell(3,0,"GREEN"),
        new SolutionCell(3,1,"GREEN"),
        new SolutionCell(3,2,"GREEN"),
        new SolutionCell(3,3,"GREEN"),
        new SolutionCell(4,0,"YELLOW"),
        new SolutionCell(4,1,"YELLOW"),
        new SolutionCell(4,2,"YELLOW"),
        new SolutionCell(4,3,"YELLOW"),
        new SolutionCell(4,4,"YELLOW"),
        new SolutionCell(4,5,"YELLOW"),
        new SolutionCell(5,0,"YELLOW"),
        new SolutionCell(5,1,"YELLOW"),
        new SolutionCell(5,2,"YELLOW"),
        new SolutionCell(5,3,"YELLOW"),
        new SolutionCell(5,4,"YELLOW"),
        new SolutionCell(5,5,"YELLOW")]
));
exercises.push(new Exercise(21,13,6,
    "<h3>Concept 21 Exercise 9</h3>" +
    "<p>Nesting conditional expressions makes it possible to express conditions made up of multiple parts." +
    " What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>"+
    "<p>fun f(x,y,z) = if x <= 3 then</p>" +
    "<p style='text-indent: 2em;'>if z > 2 then GREEN else YELLOW</p>" +
    "<p style='text-indent: 4em;'>else BLUE</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(0,4,"BLUE"),
        new SolutionCell(0,5,"BLUE"),
        new SolutionCell(1,0,"BLUE"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(1,4,"BLUE"),
        new SolutionCell(1,5,"BLUE"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(2,5,"BLUE"),
        new SolutionCell(3,0,"YELLOW"),
        new SolutionCell(3,1,"YELLOW"),
        new SolutionCell(3,2,"YELLOW"),
        new SolutionCell(3,3,"GREEN"),
        new SolutionCell(3,4,"GREEN"),
        new SolutionCell(3,5,"GREEN"),
        new SolutionCell(4,0,"BLUE"),
        new SolutionCell(4,1,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(4,4,"BLUE"),
        new SolutionCell(4,5,"BLUE"),
        new SolutionCell(5,0,"BLUE"),
        new SolutionCell(5,1,"BLUE"),
        new SolutionCell(5,2,"BLUE"),
        new SolutionCell(5,3,"BLUE"),
        new SolutionCell(5,4,"BLUE"),
        new SolutionCell(5,5,"BLUE")]
));
exercises.push(new Exercise(21,14,6,
    "<h3>Concept 21 Exercise 10</h3>" +
    "<p>SML defines the Boolean operator 'andalso' as follows:.</p>"+
    "<p>e1 andalso e2 = if e1 then e2 else false</p>" +
    "<p>What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>" +
    "<p>fun f(x,y,z) = if x = 3 andalso z > 2 then GREEN</p>"+
    "<p style='text-indent: 2em;'>else if x <> 3 then BLUE</p>" +
    "<p style='text-indent: 4em;'>else YELLOW</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(0,4,"BLUE"),
        new SolutionCell(0,5,"BLUE"),
        new SolutionCell(1,0,"BLUE"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(1,4,"BLUE"),
        new SolutionCell(1,5,"BLUE"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(2,5,"BLUE"),
        new SolutionCell(3,0,"YELLOW"),
        new SolutionCell(3,1,"YELLOW"),
        new SolutionCell(3,2,"YELLOW"),
        new SolutionCell(3,3,"GREEN"),
        new SolutionCell(3,4,"GREEN"),
        new SolutionCell(3,5,"GREEN"),
        new SolutionCell(4,0,"BLUE"),
        new SolutionCell(4,1,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(4,4,"BLUE"),
        new SolutionCell(4,5,"BLUE"),
        new SolutionCell(5,0,"BLUE"),
        new SolutionCell(5,1,"BLUE"),
        new SolutionCell(5,2,"BLUE"),
        new SolutionCell(5,3,"BLUE"),
        new SolutionCell(5,4,"BLUE"),
        new SolutionCell(5,5,"BLUE")]
));
exercises.push(new Exercise(21,15,6,
    "<h3>Concept 21 Exercise 11</h3>" +
    "<p>What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>" +
    "<p>fun f(x,y,z) = if x >= 3 then</p>"+
    "<p style='text-indent: 4em;'>if z >= 3 then BLUE </p>" +
    "<p style='text-indent: 4em;'>else RED</p>"+
    "<p style='text-indent: 2em;'>else if z >= 3 then YELLOW</p>" +
    "<p style='text-indent: 4em;'>else GREEN</p>",
    [   new SolutionCell(0,0,"GREEN"),
        new SolutionCell(0,1,"GREEN"),
        new SolutionCell(0,2,"GREEN"),
        new SolutionCell(0,3,"YELLOW"),
        new SolutionCell(0,4,"YELLOW"),
        new SolutionCell(0,5,"YELLOW"),
        new SolutionCell(1,0,"GREEN"),
        new SolutionCell(1,1,"GREEN"),
        new SolutionCell(1,2,"GREEN"),
        new SolutionCell(1,3,"YELLOW"),
        new SolutionCell(1,4,"YELLOW"),
        new SolutionCell(1,5,"YELLOW"),
        new SolutionCell(2,0,"GREEN"),
        new SolutionCell(2,1,"GREEN"),
        new SolutionCell(2,2,"GREEN"),
        new SolutionCell(2,3,"YELLOW"),
        new SolutionCell(2,4,"YELLOW"),
        new SolutionCell(2,5,"YELLOW"),
        new SolutionCell(3,0,"RED"),
        new SolutionCell(3,1,"RED"),
        new SolutionCell(3,2,"RED"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(3,4,"BLUE"),
        new SolutionCell(3,5,"BLUE"),
        new SolutionCell(4,0,"RED"),
        new SolutionCell(4,1,"RED"),
        new SolutionCell(4,2,"RED"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(4,4,"BLUE"),
        new SolutionCell(4,5,"BLUE"),
        new SolutionCell(5,0,"RED"),
        new SolutionCell(5,1,"RED"),
        new SolutionCell(5,2,"RED"),
        new SolutionCell(5,3,"BLUE"),
        new SolutionCell(5,4,"BLUE"),
        new SolutionCell(5,5,"BLUE")]
));
//Concept 22
exercises.push(new Exercise(22,1,6,
    "<h3>Concept 22 Demo 1</h3>" +
    "<p>Nesting conditional expressions makes it possible to express conditions made up of multiple parts." +
    "What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>" +
    "<p>fun f(x,y,z) = if x = 0 then BLUE </p>"+
    "<p style='text-indent: 2em;'>else if z = 0 then BLUE </p>" +
    "<p style='text-indent: 4em;'>else EMPTY </p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(0,4,"BLUE"),
        new SolutionCell(0,5,"BLUE"),
        new SolutionCell(1,0,"BLUE"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(3,0,"BLUE"),
        new SolutionCell(4,0,"BLUE"),
        new SolutionCell(5,0,"BLUE")]
));
exercises.push(new Exercise(22,2,6,
    "<h3>Concept 22 Demo 2</h3>" +
    "<p>SML defines the Boolean operator 'orelse' as follows:.</p>"+
    "<p>e1 orelse e2 = if e1 then true else e2</p>" +
    "<p>In other words, the Boolean operator 'orelse' can be used to combine two Boolean expressions." +
    " An expression (e1 orelse e2) evaluates to true if and only if e1 evaluates to true or e2 evaluates to true." +
    " Otherwise, (e1 orelse e2)  evaluates to false.</p>"+
    "<p>What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>" +
    "<p>fun f(x,y,z) = if x = 0 orelse z = 0 then BLUE else EMPTY</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(0,4,"BLUE"),
        new SolutionCell(0,5,"BLUE"),
        new SolutionCell(1,0,"BLUE"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(3,0,"BLUE"),
        new SolutionCell(4,0,"BLUE"),
        new SolutionCell(5,0,"BLUE")]
));
exercises.push(new Exercise(22,3,6,
    "<h3>Concept 22 Demo 3</h3>" +
    "<p>Nesting conditional expressions makes it possible to express conditions made up of multiple parts." +
    "What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>" +
    "<p>fun f(x,y,z) = if x < 3 then BLUE</p>"+
    "<p style='text-indent: 2em;'>else if z < 3 then BLUE else RED</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(0,4,"BLUE"),
        new SolutionCell(0,5,"BLUE"),
        new SolutionCell(1,0,"BLUE"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(1,4,"BLUE"),
        new SolutionCell(1,5,"BLUE"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(2,5,"BLUE"),
        new SolutionCell(3,0,"BLUE"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(3,4,"RED"),
        new SolutionCell(3,5,"RED"),
        new SolutionCell(4,0,"BLUE"),
        new SolutionCell(4,1,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(4,3,"RED"),
        new SolutionCell(4,4,"RED"),
        new SolutionCell(4,5,"RED"),
        new SolutionCell(5,0,"BLUE"),
        new SolutionCell(5,1,"BLUE"),
        new SolutionCell(5,2,"BLUE"),
        new SolutionCell(5,3,"RED"),
        new SolutionCell(5,4,"RED"),
        new SolutionCell(5,5,"RED")]
));
exercises.push(new Exercise(22,4,6,
    "<h3>Concept 22 Demo 4</h3>" +
    "<p>SML defines the Boolean operator 'orelse' as follows:.</p>"+
    "<p>e1 orelse e2 = if e1 then true else e2</p>" +
    "<p>What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>" +
    "<p>fun f(x,y,z) = if x < 3 orelse z < 3 then BLUE else RED</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(0,4,"BLUE"),
        new SolutionCell(0,5,"BLUE"),
        new SolutionCell(1,0,"BLUE"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(1,4,"BLUE"),
        new SolutionCell(1,5,"BLUE"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(2,5,"BLUE"),
        new SolutionCell(3,0,"BLUE"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(3,4,"RED"),
        new SolutionCell(3,5,"RED"),
        new SolutionCell(4,0,"BLUE"),
        new SolutionCell(4,1,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(4,3,"RED"),
        new SolutionCell(4,4,"RED"),
        new SolutionCell(4,5,"RED"),
        new SolutionCell(5,0,"BLUE"),
        new SolutionCell(5,1,"BLUE"),
        new SolutionCell(5,2,"BLUE"),
        new SolutionCell(5,3,"RED"),
        new SolutionCell(5,4,"RED"),
        new SolutionCell(5,5,"RED")]
));
exercises.push(new Exercise(22,5,7,
    "<h3>Concept 22 Exercise 1</h3>" +
    "<p>SML defines the Boolean operator 'orelse' as follows:.</p>"+
    "<p>e1 orelse e2 = if e1 then true else e2</p>" +
    "<p>What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>" +
    "<p>fun f(x,y,z) = if x = 3 orelse z = 3 then WHITE else RED</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(0,1,"RED"),
        new SolutionCell(0,2,"RED"),
        new SolutionCell(0,3,"WHITE"),
        new SolutionCell(0,4,"RED"),
        new SolutionCell(0,5,"RED"),
        new SolutionCell(0,6,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(1,2,"RED"),
        new SolutionCell(1,3,"WHITE"),
        new SolutionCell(1,4,"RED"),
        new SolutionCell(1,5,"RED"),
        new SolutionCell(1,6,"RED"),
        new SolutionCell(2,0,"RED"),
        new SolutionCell(2,1,"RED"),
        new SolutionCell(2,2,"RED"),
        new SolutionCell(2,3,"WHITE"),
        new SolutionCell(2,4,"RED"),
        new SolutionCell(2,5,"RED"),
        new SolutionCell(2,6,"RED"),
        new SolutionCell(3,0,"WHITE"),
        new SolutionCell(3,1,"WHITE"),
        new SolutionCell(3,2,"WHITE"),
        new SolutionCell(3,3,"WHITE"),
        new SolutionCell(3,4,"WHITE"),
        new SolutionCell(3,5,"WHITE"),
        new SolutionCell(3,6,"WHITE"),
        new SolutionCell(4,0,"RED"),
        new SolutionCell(4,1,"RED"),
        new SolutionCell(4,2,"RED"),
        new SolutionCell(4,3,"WHITE"),
        new SolutionCell(4,4,"RED"),
        new SolutionCell(4,5,"RED"),
        new SolutionCell(4,6,"RED"),
        new SolutionCell(5,0,"RED"),
        new SolutionCell(5,1,"RED"),
        new SolutionCell(5,2,"RED"),
        new SolutionCell(5,3,"WHITE"),
        new SolutionCell(5,4,"RED"),
        new SolutionCell(5,5,"RED"),
        new SolutionCell(5,6,"RED"),
        new SolutionCell(6,0,"RED"),
        new SolutionCell(6,1,"RED"),
        new SolutionCell(6,2,"RED"),
        new SolutionCell(6,3,"WHITE"),
        new SolutionCell(6,4,"RED"),
        new SolutionCell(6,5,"RED"),
        new SolutionCell(6,6,"RED")]
));
exercises.push(new Exercise(22,6,6,
    "<h3>Concept 22 Exercise 2</h3>" +
    "<p>SML defines the Boolean operator 'orelse' as follows:.</p>"+
    "<p>e1 orelse e2 = if e1 then true else e2</p>" +
    "<p>What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>" +
    "<p>fun f(x,y,z) = if x = z orelse z = 5 - x then WHITE else RED</p>",
    [   new SolutionCell(0,0,"WHITE"),
        new SolutionCell(0,1,"RED"),
        new SolutionCell(0,2,"RED"),
        new SolutionCell(0,3,"RED"),
        new SolutionCell(0,4,"RED"),
        new SolutionCell(0,5,"WHITE"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(1,1,"WHITE"),
        new SolutionCell(1,2,"RED"),
        new SolutionCell(1,3,"RED"),
        new SolutionCell(1,4,"WHITE"),
        new SolutionCell(1,5,"RED"),
        new SolutionCell(2,0,"RED"),
        new SolutionCell(2,1,"RED"),
        new SolutionCell(2,2,"WHITE"),
        new SolutionCell(2,3,"WHITE"),
        new SolutionCell(2,4,"RED"),
        new SolutionCell(2,5,"RED"),
        new SolutionCell(3,0,"RED"),
        new SolutionCell(3,1,"RED"),
        new SolutionCell(3,2,"WHITE"),
        new SolutionCell(3,3,"WHITE"),
        new SolutionCell(3,4,"RED"),
        new SolutionCell(3,5,"RED"),
        new SolutionCell(4,0,"RED"),
        new SolutionCell(4,1,"WHITE"),
        new SolutionCell(4,2,"RED"),
        new SolutionCell(4,3,"RED"),
        new SolutionCell(4,4,"WHITE"),
        new SolutionCell(4,5,"RED"),
        new SolutionCell(5,0,"WHITE"),
        new SolutionCell(5,1,"RED"),
        new SolutionCell(5,2,"RED"),
        new SolutionCell(5,3,"RED"),
        new SolutionCell(5,4,"RED"),
        new SolutionCell(5,5,"WHITE")]
));
exercises.push(new Exercise(22,7,7,
    "<h3>Concept 22 Exercise 3</h3>" +
    "<p>Nesting conditional expressions makes it possible to express conditions made up of multiple parts." +
    "What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>" +
    "<p>fun f(x,y,z) = if z < x then GREEN</p>"+
    "<p style='text-indent: 2em;'>else if z < 6 - x then GREEN else YELLOW</p>",
    [   new SolutionCell(0,0,"GREEN"),
        new SolutionCell(0,1,"GREEN"),
        new SolutionCell(0,2,"GREEN"),
        new SolutionCell(0,3,"GREEN"),
        new SolutionCell(0,4,"GREEN"),
        new SolutionCell(0,5,"GREEN"),
        new SolutionCell(0,6,"YELLOW"),
        new SolutionCell(1,0,"GREEN"),
        new SolutionCell(1,1,"GREEN"),
        new SolutionCell(1,2,"GREEN"),
        new SolutionCell(1,3,"GREEN"),
        new SolutionCell(1,4,"GREEN"),
        new SolutionCell(1,5,"YELLOW"),
        new SolutionCell(1,6,"YELLOW"),
        new SolutionCell(2,0,"GREEN"),
        new SolutionCell(2,1,"GREEN"),
        new SolutionCell(2,2,"GREEN"),
        new SolutionCell(2,3,"GREEN"),
        new SolutionCell(2,4,"YELLOW"),
        new SolutionCell(2,5,"YELLOW"),
        new SolutionCell(2,6,"YELLOW"),
        new SolutionCell(3,0,"GREEN"),
        new SolutionCell(3,1,"GREEN"),
        new SolutionCell(3,2,"GREEN"),
        new SolutionCell(3,3,"YELLOW"),
        new SolutionCell(3,4,"YELLOW"),
        new SolutionCell(3,5,"YELLOW"),
        new SolutionCell(3,6,"YELLOW"),
        new SolutionCell(4,0,"GREEN"),
        new SolutionCell(4,1,"GREEN"),
        new SolutionCell(4,2,"GREEN"),
        new SolutionCell(4,3,"GREEN"),
        new SolutionCell(4,4,"YELLOW"),
        new SolutionCell(4,5,"YELLOW"),
        new SolutionCell(4,6,"YELLOW"),
        new SolutionCell(5,0,"GREEN"),
        new SolutionCell(5,1,"GREEN"),
        new SolutionCell(5,2,"GREEN"),
        new SolutionCell(5,3,"GREEN"),
        new SolutionCell(5,4,"GREEN"),
        new SolutionCell(5,5,"YELLOW"),
        new SolutionCell(5,6,"YELLOW"),
        new SolutionCell(6,0,"GREEN"),
        new SolutionCell(6,1,"GREEN"),
        new SolutionCell(6,2,"GREEN"),
        new SolutionCell(6,3,"GREEN"),
        new SolutionCell(6,4,"GREEN"),
        new SolutionCell(6,5,"GREEN"),
        new SolutionCell(6,6,"YELLOW")]
));
exercises.push(new Exercise(22,8,7,
    "<h3>Concept 22 Exercise 4</h3>" +
    "<p>SML defines the Boolean operator 'orelse' as follows:.</p>"+
    "<p>e1 orelse e2 = if e1 then true else e2</p>" +
    "<p>What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>" +
    "<p>fun f(x,y,z) = if z < x orelse z < 6 - x then GREEN </p>"+
    "<p style='text-indent: 2em;'>else YELLOW</p>",
    [   new SolutionCell(0,0,"GREEN"),
        new SolutionCell(0,1,"GREEN"),
        new SolutionCell(0,2,"GREEN"),
        new SolutionCell(0,3,"GREEN"),
        new SolutionCell(0,4,"GREEN"),
        new SolutionCell(0,5,"GREEN"),
        new SolutionCell(0,6,"YELLOW"),
        new SolutionCell(1,0,"GREEN"),
        new SolutionCell(1,1,"GREEN"),
        new SolutionCell(1,2,"GREEN"),
        new SolutionCell(1,3,"GREEN"),
        new SolutionCell(1,4,"GREEN"),
        new SolutionCell(1,5,"YELLOW"),
        new SolutionCell(1,6,"YELLOW"),
        new SolutionCell(2,0,"GREEN"),
        new SolutionCell(2,1,"GREEN"),
        new SolutionCell(2,2,"GREEN"),
        new SolutionCell(2,3,"GREEN"),
        new SolutionCell(2,4,"YELLOW"),
        new SolutionCell(2,5,"YELLOW"),
        new SolutionCell(2,6,"YELLOW"),
        new SolutionCell(3,0,"GREEN"),
        new SolutionCell(3,1,"GREEN"),
        new SolutionCell(3,2,"GREEN"),
        new SolutionCell(3,3,"YELLOW"),
        new SolutionCell(3,4,"YELLOW"),
        new SolutionCell(3,5,"YELLOW"),
        new SolutionCell(3,6,"YELLOW"),
        new SolutionCell(4,0,"GREEN"),
        new SolutionCell(4,1,"GREEN"),
        new SolutionCell(4,2,"GREEN"),
        new SolutionCell(4,3,"GREEN"),
        new SolutionCell(4,4,"YELLOW"),
        new SolutionCell(4,5,"YELLOW"),
        new SolutionCell(4,6,"YELLOW"),
        new SolutionCell(5,0,"GREEN"),
        new SolutionCell(5,1,"GREEN"),
        new SolutionCell(5,2,"GREEN"),
        new SolutionCell(5,3,"GREEN"),
        new SolutionCell(5,4,"GREEN"),
        new SolutionCell(5,5,"YELLOW"),
        new SolutionCell(5,6,"YELLOW"),
        new SolutionCell(6,0,"GREEN"),
        new SolutionCell(6,1,"GREEN"),
        new SolutionCell(6,2,"GREEN"),
        new SolutionCell(6,3,"GREEN"),
        new SolutionCell(6,4,"GREEN"),
        new SolutionCell(6,5,"GREEN"),
        new SolutionCell(6,6,"YELLOW")]
));
exercises.push(new Exercise(22,9,7,
    "<h3>Concept 22 Exercise 5</h3>" +
    "<p>What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>" +
    "<p>fun f(x,y,z) =      if z >= x + 3 then GREEN</p>"+
    "<p style='text-indent: 2em;'>else if z >= 9 - x then GREEN </p>"+
    "<p style='text-indent: 2em;'>else EMPTY</p>",
    [   new SolutionCell(0,3,"GREEN"),
        new SolutionCell(0,4,"GREEN"),
        new SolutionCell(0,5,"GREEN"),
        new SolutionCell(0,6,"GREEN"),
        new SolutionCell(1,4,"GREEN"),
        new SolutionCell(1,5,"GREEN"),
        new SolutionCell(1,6,"GREEN"),
        new SolutionCell(2,5,"GREEN"),
        new SolutionCell(2,6,"GREEN"),
        new SolutionCell(3,6,"GREEN"),
        new SolutionCell(4,5,"GREEN"),
        new SolutionCell(4,6,"GREEN"),
        new SolutionCell(5,4,"GREEN"),
        new SolutionCell(5,5,"GREEN"),
        new SolutionCell(5,6,"GREEN"),
        new SolutionCell(6,3,"GREEN"),
        new SolutionCell(6,4,"GREEN"),
        new SolutionCell(6,5,"GREEN"),
        new SolutionCell(6,6,"GREEN")]
));
exercises.push(new Exercise(22,10,7,
    "<h3>Concept 22 Exercise 6</h3>" +
    "<p>What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>" +
    "<p>fun f(x,y,z) = if z <= 3 - x orelse z <= x - 3  then RED</p>"+
    "<p style='text-indent: 2em;'>else EMPTY</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(0,1,"RED"),
        new SolutionCell(0,2,"RED"),
        new SolutionCell(0,3,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(1,2,"RED"),
        new SolutionCell(2,0,"RED"),
        new SolutionCell(2,1,"RED"),
        new SolutionCell(3,0,"RED"),
        new SolutionCell(4,0,"RED"),
        new SolutionCell(4,1,"RED"),
        new SolutionCell(5,0,"RED"),
        new SolutionCell(5,1,"RED"),
        new SolutionCell(5,2,"RED"),
        new SolutionCell(6,0,"RED"),
        new SolutionCell(6,1,"RED"),
        new SolutionCell(6,2,"RED"),
        new SolutionCell(6,3,"RED")]
));
exercises.push(new Exercise(22,11,6,
    "<h3>Concept 22 Exercise 7</h3>" +
    "<p>What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>" +
    "<p>fun f(x,y,z) = if x <= z div 2 orelse x >= 2*z then BLUE </p>"+
    "<p style='text-indent: 2em;'>else EMPTY</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(0,4,"BLUE"),
        new SolutionCell(0,5,"BLUE"),
        new SolutionCell(1,0,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(1,4,"BLUE"),
        new SolutionCell(1,5,"BLUE"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(2,5,"BLUE"),
        new SolutionCell(3,0,"BLUE"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(4,0,"BLUE"),
        new SolutionCell(4,1,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(5,0,"BLUE"),
        new SolutionCell(5,1,"BLUE"),
        new SolutionCell(5,2,"BLUE")]
));
exercises.push(new Exercise(22,12,6,
    "<h3>Concept 22 Exercise 8</h3>" +
    "<p>What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>" +
    "<p>fun f(x,y,z) = if x < 2 orelse x > 3 then BLUE</p>"+
    "<p style='text-indent: 2em;'>else EMPTY</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(0,4,"BLUE"),
        new SolutionCell(0,5,"BLUE"),
        new SolutionCell(1,0,"BLUE"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(1,4,"BLUE"),
        new SolutionCell(1,5,"BLUE"),
        new SolutionCell(4,0,"BLUE"),
        new SolutionCell(4,1,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(4,4,"BLUE"),
        new SolutionCell(4,5,"BLUE"),
        new SolutionCell(5,0,"BLUE"),
        new SolutionCell(5,1,"BLUE"),
        new SolutionCell(5,2,"BLUE"),
        new SolutionCell(5,3,"BLUE"),
        new SolutionCell(5,4,"BLUE"),
        new SolutionCell(5,5,"BLUE")]
));
/*exercises.push(new Exercise(22,12,6,
    "<h3>Concept 22 Exercise 8</h3>" +
    "<p>What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>" +
    "<p>fun f(x,y,z) = if x < 2 orelse x > 3 then</p>"+
    "<p style='text-indent: 4em;'>if z < 2 orelse z > 3 then GREEN</p>"+
    "<p style='text-indent: 4em;'>else EMPTY</p>"+
    "<p style='text-indent: 2em;'>else EMPTY</p>",
    [   new SolutionCell(0,0,"GREEN"),
        new SolutionCell(0,1,"GREEN"),
        new SolutionCell(0,4,"GREEN"),
        new SolutionCell(0,5,"GREEN"),
        new SolutionCell(1,0,"GREEN"),
        new SolutionCell(1,1,"GREEN"),
        new SolutionCell(1,4,"GREEN"),
        new SolutionCell(1,5,"GREEN"),
        new SolutionCell(4,0,"GREEN"),
        new SolutionCell(4,1,"GREEN"),
        new SolutionCell(4,4,"GREEN"),
        new SolutionCell(4,5,"GREEN"),
        new SolutionCell(5,0,"GREEN"),
        new SolutionCell(5,1,"GREEN"),
        new SolutionCell(5,4,"GREEN"),
        new SolutionCell(5,5,"GREEN")]
));*/
exercises.push(new Exercise(22,13,6,
    "<h3>Concept 22 Exercise 9</h3>" +
    "<p>What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>" +
    "<p>fun f(x,y,z) = if x < 2 orelse x > 3 then</p>"+
    "<p style='text-indent: 4em;'>if z < 2 orelse z > 3 then GREEN</p>"+
    "<p style='text-indent: 4em;'>else EMPTY</p>"+
    "<p style='text-indent: 2em;'>else EMPTY</p>",
    [   new SolutionCell(0,0,"GREEN"),
        new SolutionCell(0,1,"GREEN"),
        new SolutionCell(0,4,"GREEN"),
        new SolutionCell(0,5,"GREEN"),
        new SolutionCell(1,0,"GREEN"),
        new SolutionCell(1,1,"GREEN"),
        new SolutionCell(1,4,"GREEN"),
        new SolutionCell(1,5,"GREEN"),
        new SolutionCell(4,0,"GREEN"),
        new SolutionCell(4,1,"GREEN"),
        new SolutionCell(4,4,"GREEN"),
        new SolutionCell(4,5,"GREEN"),
        new SolutionCell(5,0,"GREEN"),
        new SolutionCell(5,1,"GREEN"),
        new SolutionCell(5,4,"GREEN"),
        new SolutionCell(5,5,"GREEN")]
));
exercises.push(new Exercise(22,14,6,
    "<h3>Concept 22 Exercise 10</h3>" +
    "<p>What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>" +
    "<p>fun f(x,y,z) = if z > x + 2 orelse z < x - 2 then RED</p>"+
    "<p style='text-indent: 2em;'>else EMPTY</p>",
    [   new SolutionCell(0,3,"RED"),
        new SolutionCell(0,4,"RED"),
        new SolutionCell(0,5,"RED"),
        new SolutionCell(1,4,"RED"),
        new SolutionCell(1,5,"RED"),
        new SolutionCell(2,5,"RED"),
        new SolutionCell(3,0,"RED"),
        new SolutionCell(4,0,"RED"),
        new SolutionCell(4,1,"RED"),
        new SolutionCell(5,0,"RED"),
        new SolutionCell(5,1,"RED"),
        new SolutionCell(5,2,"RED")]
));
exercises.push(new Exercise(22,15,6,
    "<h3>Concept 22 Exercise 11</h3>" +
    "<p>What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>" +
    "<p>fun f(x,y,z) = if z > x + 2 orelse z < x - 2 then YELLOW</p>"+
    "<p style='text-indent: 4em;'>else if z < 3 - x orelse z > 7 - x then BLUE</p>"+
    "<p style='text-indent: 4em;'>else EMPTY</p>",
    [   new SolutionCell(0,3,"YELLOW"),
        new SolutionCell(0,4,"YELLOW"),
        new SolutionCell(0,5,"YELLOW"),
        new SolutionCell(1,4,"YELLOW"),
        new SolutionCell(1,5,"YELLOW"),
        new SolutionCell(2,5,"YELLOW"),
        new SolutionCell(3,0,"YELLOW"),
        new SolutionCell(4,0,"YELLOW"),
        new SolutionCell(4,1,"YELLOW"),
        new SolutionCell(5,0,"YELLOW"),
        new SolutionCell(5,1,"YELLOW"),
        new SolutionCell(5,2,"YELLOW"),
        new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(1,0,"BLUE"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(3,5,"BLUE"),
        new SolutionCell(4,4,"BLUE"),
        new SolutionCell(4,5,"BLUE"),
        new SolutionCell(5,3,"BLUE"),
        new SolutionCell(5,4,"BLUE"),
        new SolutionCell(5,5,"BLUE")]
));
exercises.push(new Exercise(22,16,6,
    "<h3>Concept 22 Exercise 12</h3>" +
    "<p>What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>" +
    "<p>fun f(x,y,z) = if z > x + 2 orelse z < x - 2 then YELLOW</p>"+
    "<p style='text-indent: 4em;'>else if z > 3 - x orelse z < 7 - x then BLUE</p>"+
    "<p style='text-indent: 4em;'>else EMPTY</p>" +
    "<p>Can this code be improved?</p>",
    [   new SolutionCell(0,3,"YELLOW"),
        new SolutionCell(0,4,"YELLOW"),
        new SolutionCell(0,5,"YELLOW"),
        new SolutionCell(1,4,"YELLOW"),
        new SolutionCell(1,5,"YELLOW"),
        new SolutionCell(2,5,"YELLOW"),
        new SolutionCell(3,0,"YELLOW"),
        new SolutionCell(4,0,"YELLOW"),
        new SolutionCell(4,1,"YELLOW"),
        new SolutionCell(5,0,"YELLOW"),
        new SolutionCell(5,1,"YELLOW"),
        new SolutionCell(5,2,"YELLOW"),
        new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(1,0,"BLUE"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(3,4,"BLUE"),
        new SolutionCell(3,5,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(4,4,"BLUE"),
        new SolutionCell(4,5,"BLUE"),
        new SolutionCell(5,3,"BLUE"),
        new SolutionCell(5,4,"BLUE"),
        new SolutionCell(5,5,"BLUE")]
));
exercises.push(new Exercise(22,17,6,
    "<h3>Concept 22 Exercise 13</h3>" +
    "<p>What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>" +
    "<p>fun f(x,y,z) = if z > x + 2 orelse z < x - 2 then YELLOW</p>"+
    "<p style='text-indent: 4em;'>else BLUE</p>",
    [   new SolutionCell(0,3,"YELLOW"),
        new SolutionCell(0,4,"YELLOW"),
        new SolutionCell(0,5,"YELLOW"),
        new SolutionCell(1,4,"YELLOW"),
        new SolutionCell(1,5,"YELLOW"),
        new SolutionCell(2,5,"YELLOW"),
        new SolutionCell(3,0,"YELLOW"),
        new SolutionCell(4,0,"YELLOW"),
        new SolutionCell(4,1,"YELLOW"),
        new SolutionCell(5,0,"YELLOW"),
        new SolutionCell(5,1,"YELLOW"),
        new SolutionCell(5,2,"YELLOW"),
        new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(1,0,"BLUE"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(3,4,"BLUE"),
        new SolutionCell(3,5,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(4,4,"BLUE"),
        new SolutionCell(4,5,"BLUE"),
        new SolutionCell(5,3,"BLUE"),
        new SolutionCell(5,4,"BLUE"),
        new SolutionCell(5,5,"BLUE")]
));
exercises.push(new Exercise(22,18,7,
    "<h3>Concept 22 Exercise 14</h3>" +
    "<p>What is the result of applying the brick function f to the following matrix of cells." +
    " Assume that the y value for all cell positions is 0.</p>" +
    "<p>fun f(x,y,z) = if x mod 2 = 0 orelse z mod 2 = 0 then BLUE</p>"+
    "<p style='text-indent: 4em;'>else EMPTY</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(0,4,"BLUE"),
        new SolutionCell(0,5,"BLUE"),
        new SolutionCell(0,6,"BLUE"),
        new SolutionCell(1,0,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(1,4,"BLUE"),
        new SolutionCell(1,6,"BLUE"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(2,5,"BLUE"),
        new SolutionCell(2,6,"BLUE"),
        new SolutionCell(3,0,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(3,4,"BLUE"),
        new SolutionCell(3,6,"BLUE"),
        new SolutionCell(4,0,"BLUE"),
        new SolutionCell(4,1,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(4,4,"BLUE"),
        new SolutionCell(4,5,"BLUE"),
        new SolutionCell(4,6,"BLUE"),
        new SolutionCell(5,0,"BLUE"),
        new SolutionCell(5,2,"BLUE"),
        new SolutionCell(5,4,"BLUE"),
        new SolutionCell(5,6,"BLUE"),
        new SolutionCell(6,0,"BLUE"),
        new SolutionCell(6,1,"BLUE"),
        new SolutionCell(6,2,"BLUE"),
        new SolutionCell(6,3,"BLUE"),
        new SolutionCell(6,4,"BLUE"),
        new SolutionCell(6,5,"BLUE"),
        new SolutionCell(6,6,"BLUE")]
));
// Concept 23
exercises.push(new Exercise(23,1,7,
    "<h3>Concept 23 Demo 1 </h3>" +
    "<p>The access function lets you inspect the contents of a cell." +
    " Placing the IDENTITY brick at a cell will leave the contents of the cell unchanged. </p>" +
"<p>What is the result of executing the following Bricklayer code?</p>" +
    "<p>fun f(x,y,z) = if x = 3 then BLUE else EMPTY;</p>"+
    "<p>fun g(x,y,z) = if z = 3 then</p>"+
    "<p style='text-indent: 4em;'>if access(x,y,z) = BLUE then RED</p>"+
    "<p style='text-indent: 4em;'>else GREEN</p>"+
    "<p style='text-indent: 2em;'>else IDENTITY;</p>"+
    "<p>traverseWithin (0,0,0) (size,0,size) f;</p>"+
    "<p>traverseWithin (0,0,0) (size,0,size) g;</p>",
    [   new SolutionCell(3,0,"BLUE"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(3,4,"BLUE"),
        new SolutionCell(3,5,"BLUE"),
        new SolutionCell(3,6,"BLUE"),
        new SolutionCell(0,3,"GREEN"),
        new SolutionCell(1,3,"GREEN"),
        new SolutionCell(2,3,"GREEN"),
        new SolutionCell(4,3,"GREEN"),
        new SolutionCell(5,3,"GREEN"),
        new SolutionCell(6,3,"GREEN")]
));
exercises.push(new Exercise(23,2,4,
    "<h3>Concept 23 Exercise 1 </h3>" +
    "<p>The access function lets you inspect the contents of a cell." +
    " Placing the IDENTITY brick at a cell will leave the contents of the cell unchanged. </p>" +
    "<p>What is the result of executing the following Bricklayer code?</p>" +
    "<p>fun f(x,y,z) = if (x+z) mod 2 = 0 then BLUE else YELLOW;</p>"+
    "<p>fun g(x,y,z) = if access(x,y,z) = BLUE then RED else IDENTITY;</p>"+
    "<p>traverseWithin (0,0,0) (3,0,3) f;</p>"+
    "<p>traverseWithin (0,0,0) (3,0,3) g;</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(0,1,"YELLOW"),
        new SolutionCell(0,2,"RED"),
        new SolutionCell(0,3,"YELLOW"),
        new SolutionCell(1,0,"YELLOW"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(1,2,"YELLOW"),
        new SolutionCell(1,3,"RED"),
        new SolutionCell(2,0,"RED"),
        new SolutionCell(2,1,"YELLOW"),
        new SolutionCell(2,2,"RED"),
        new SolutionCell(2,3,"YELLOW"),
        new SolutionCell(3,0,"YELLOW"),
        new SolutionCell(3,1,"RED"),
        new SolutionCell(3,2,"YELLOW"),
        new SolutionCell(3,3,"RED")]
));
exercises.push(new Exercise(23,3,4,
    "<h3>Concept 23 Exercise 2 </h3>" +
    "<p>The access function lets you inspect the contents of a cell." +
    " Placing the IDENTITY brick at a cell will leave the contents of the cell unchanged. </p>" +
    "<p>What is the result of executing the following Bricklayer code?</p>" +
    "<p>fun f(x,y,z) = if (x+z) mod 2 = 0 then BLUE else YELLOW;;</p>"+
    "<p>fun g(x,y,z) = if access(x,y,z) = BLUE then</p>"+
    "<p style='text-indent: 4em;'>if z > 1 then RED else IDENTITY</p>"+
    "<p style='text-indent: 2em;'>else IDENTITY;</p>"+
    "<p>traverseWithin (0,0,0) (3,0,3) f;</p>"+
    "<p>traverseWithin (0,0,0) (3,0,3) g;</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,1,"YELLOW"),
        new SolutionCell(0,2,"RED"),
        new SolutionCell(0,3,"YELLOW"),
        new SolutionCell(1,0,"YELLOW"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(1,2,"YELLOW"),
        new SolutionCell(1,3,"RED"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(2,1,"YELLOW"),
        new SolutionCell(2,2,"RED"),
        new SolutionCell(2,3,"YELLOW"),
        new SolutionCell(3,0,"YELLOW"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(3,2,"YELLOW"),
        new SolutionCell(3,3,"RED")]
));
exercises.push(new Exercise(23,4,4,
    "<h3>Concept 23 Exercise 3 </h3>" +
    "<p>The access function lets you inspect the contents of a cell." +
    " Placing the IDENTITY brick at a cell will leave the contents of the cell unchanged. </p>" +
    "<p>What is the result of executing the following Bricklayer code?</p>" +
    "<p>fun f(x,y,z) = if x mod 2 = 0 then BLUE else YELLOW;</p>"+
    "<p>fun g(x,y,z) = if access(x,y,z) = BLUE then</p>"+
    "<p style='text-indent: 4em;'>if z > 1 then RED else IDENTITY</p>"+
    "<p style='text-indent: 2em;'>else IDENTITY;</p>"+
    "<p>traverseWithin (0,0,0) (3,0,3) f;</p>"+
    "<p>traverseWithin (0,0,0) (3,0,3) g;</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(0,2,"RED"),
        new SolutionCell(0,3,"RED"),
        new SolutionCell(1,0,"YELLOW"),
        new SolutionCell(1,1,"YELLOW"),
        new SolutionCell(1,2,"YELLOW"),
        new SolutionCell(1,3,"YELLOW"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(2,2,"RED"),
        new SolutionCell(2,3,"RED"),
        new SolutionCell(3,0,"YELLOW"),
        new SolutionCell(3,1,"YELLOW"),
        new SolutionCell(3,2,"YELLOW"),
        new SolutionCell(3,3,"YELLOW")]
));
exercises.push(new Exercise(23,5,5,
    "<h3>Concept 23 Exercise 4 </h3>" +
    "<p>The access function lets you inspect the contents of a cell." +
    " Placing the IDENTITY brick at a cell will leave the contents of the cell unchanged. </p>" +
    "<p>What is the result of executing the following Bricklayer code?</p>" +
    "<p>fun f(x,y,z) = if x mod 2 = 0 orelse z mod 2 = 0 then BLUE else YELLOW;</p>"+
    "<p>fun g(x,y,z) = if access(x,y,z) = BLUE then</p>"+
    "<p style='text-indent: 4em;'>if z > 1 then RED else IDENTITY</p>"+
    "<p style='text-indent: 2em;'>else IDENTITY;</p>"+
    "<p>traverseWithin (0,0,0) (4,0,4) f;</p>"+
    "<p>traverseWithin (0,0,0) (4,0,4) g;</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(0,2,"RED"),
        new SolutionCell(0,3,"RED"),
        new SolutionCell(0,4,"RED"),
        new SolutionCell(1,0,"BLUE"),
        new SolutionCell(1,1,"YELLOW"),
        new SolutionCell(1,2,"RED"),
        new SolutionCell(1,3,"YELLOW"),
        new SolutionCell(1,4,"RED"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(2,1,"BLUE"),
        new SolutionCell(2,2,"RED"),
        new SolutionCell(2,3,"RED"),
        new SolutionCell(2,4,"RED"),
        new SolutionCell(3,0,"BLUE"),
        new SolutionCell(3,1,"YELLOW"),
        new SolutionCell(3,2,"RED"),
        new SolutionCell(3,3,"YELLOW"),
        new SolutionCell(3,4,"RED"),
        new SolutionCell(4,0,"BLUE"),
        new SolutionCell(4,1,"BLUE"),
        new SolutionCell(4,2,"RED"),
        new SolutionCell(4,3,"RED"),
        new SolutionCell(4,4,"RED")]
));
exercises.push(new Exercise(23,6,5,
    "<h3>Concept 23 Exercise 5 </h3>" +
    "<p>The access function lets you inspect the contents of a cell." +
    " Placing the IDENTITY brick at a cell will leave the contents of the cell unchanged. </p>" +
    "<p>What is the result of executing the following Bricklayer code?</p>" +
    "<p>fun f(x,y,z) = if x mod 3 = 0  orelse z mod 3 = 0 then BLUE else YELLOW;</p>"+
    "<p>fun g(x,y,z) = if access(x,y,z) = BLUE then</p>"+
    "<p style='text-indent: 4em;'>if z > 1 then RED else EMPTY</p>"+
    "<p style='text-indent: 2em;'>else IDENTITY;</p>"+
    "<p>traverseWithin (0,0,0) (4,0,4) f;</p>"+
    "<p>traverseWithin (0,0,0) (4,0,4) g;</p>",
    [   new SolutionCell(0,2,"RED"),
        new SolutionCell(0,3,"RED"),
        new SolutionCell(0,4,"RED"),
        new SolutionCell(1,1,"YELLOW"),
        new SolutionCell(1,2,"YELLOW"),
        new SolutionCell(1,3,"RED"),
        new SolutionCell(1,4,"YELLOW"),
        new SolutionCell(2,1,"YELLOW"),
        new SolutionCell(2,2,"YELLOW"),
        new SolutionCell(2,3,"RED"),
        new SolutionCell(2,4,"YELLOW"),
        new SolutionCell(3,2,"RED"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(3,4,"RED"),
        new SolutionCell(4,1,"YELLOW"),
        new SolutionCell(4,2,"YELLOW"),
        new SolutionCell(4,3,"RED"),
        new SolutionCell(4,4,"YELLOW")]
));
exercises.push(new Exercise(23,7,7,
    "<h3>Concept 23 Exercise 6 </h3>" +
    "<p>The access function lets you inspect the contents of a cell." +
    " Placing the IDENTITY brick at a cell will leave the contents of the cell unchanged. </p>" +
    "<p>What is the result of executing the following Bricklayer code?</p>" +
    "<p>fun f(x,y,z) = if ( x + z ) div 3 mod 3 = 0 then BLUE else YELLOW;</p>"+
    "<p>fun g(x,y,z) = if x = z then</p>"+
    "<p style='text-indent: 4em;'>if access(x,y,z) = YELLOW then RED</p>"+
    "<p style='text-indent: 4em;'>else EMPTY</p>"+
    "<p style='text-indent: 2em;'>else IDENTITY;</p>"+
    "<p>traverseWithin (0,0,0) (6,0,6) f;</p>"+
    "<p>traverseWithin (0,0,0) (6,0,6) g;</p>",
    [   new SolutionCell(0,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(0,3,"YELLOW"),
        new SolutionCell(0,4,"YELLOW"),
        new SolutionCell(0,5,"YELLOW"),
        new SolutionCell(0,6,"YELLOW"),
        new SolutionCell(1,0,"BLUE"),
        new SolutionCell(1,2,"YELLOW"),
        new SolutionCell(1,3,"YELLOW"),
        new SolutionCell(1,4,"YELLOW"),
        new SolutionCell(1,5,"YELLOW"),
        new SolutionCell(1,6,"YELLOW"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(2,1,"YELLOW"),
        new SolutionCell(2,2,"RED"),
        new SolutionCell(2,3,"YELLOW"),
        new SolutionCell(2,4,"YELLOW"),
        new SolutionCell(2,5,"YELLOW"),
        new SolutionCell(2,6,"YELLOW"),
        new SolutionCell(3,0,"YELLOW"),
        new SolutionCell(3,1,"YELLOW"),
        new SolutionCell(3,2,"YELLOW"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(3,4,"YELLOW"),
        new SolutionCell(3,5,"YELLOW"),
        new SolutionCell(3,6,"BLUE"),
        new SolutionCell(4,0,"YELLOW"),
        new SolutionCell(4,1,"YELLOW"),
        new SolutionCell(4,2,"YELLOW"),
        new SolutionCell(4,3,"YELLOW"),
        new SolutionCell(4,4,"RED"),
        new SolutionCell(4,5,"BLUE"),
        new SolutionCell(4,6,"BLUE"),
        new SolutionCell(5,0,"YELLOW"),
        new SolutionCell(5,1,"YELLOW"),
        new SolutionCell(5,2,"YELLOW"),
        new SolutionCell(5,3,"YELLOW"),
        new SolutionCell(5,4,"BLUE"),
        new SolutionCell(5,6,"BLUE"),
        new SolutionCell(6,0,"YELLOW"),
        new SolutionCell(6,1,"YELLOW"),
        new SolutionCell(6,2,"YELLOW"),
        new SolutionCell(6,3,"BLUE"),
        new SolutionCell(6,4,"BLUE"),
        new SolutionCell(6,5,"BLUE"),
        new SolutionCell(6,6,"RED")]
));
exercises.push(new Exercise(23,8,7,
    "<h3>Concept 23 Exercise 7 </h3>" +
    "<p>The access function lets you inspect the contents of a cell." +
    " Placing the IDENTITY brick at a cell will leave the contents of the cell unchanged. </p>" +
    "<p>What is the result of executing the following Bricklayer code?</p>" +
    "<p>fun f(x,y,z) = if ( x + z ) div 3 mod 3 = 0 then BLUE</p>"+
    "<p style='text-indent: 4em;'>else if ( x + z ) div 3 mod 3 = 1 then YELLOW</p>"+
    "<p style='text-indent: 4em;'>else GREEN;</p>"+
    "<p>fun g(x,y,z) = if x = z orelse x = z+1 then</p>"+
    "<p style='text-indent: 4em;'>if access(x,y,z) = BLUE then RED</p>"+
    "<p style='text-indent: 4em;'>else IDENTITY</p>"+
    "<p style='text-indent: 2em;'>else EMPTY;</p>"+
    "<p>traverseWithin (0,0,0) (6,0,6) f;</p>"+
    "<p>traverseWithin (0,0,0) (6,0,6) g;</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,0,"RED"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(2,1,"YELLOW"),
        new SolutionCell(2,2,"YELLOW"),
        new SolutionCell(3,2,"YELLOW"),
        new SolutionCell(3,3,"GREEN"),
        new SolutionCell(4,3,"GREEN"),
        new SolutionCell(4,4,"GREEN"),
        new SolutionCell(5,4,"RED"),
        new SolutionCell(5,5,"RED"),
        new SolutionCell(6,5,"RED"),
        new SolutionCell(6,6,"YELLOW")]
));
// =====================================================================================================================
function endTest(){
    var x = document.getElementById("questions");
    var y = document.getElementById("formArea");
    var z = document.getElementById("resultInformation");
    var questionHeading = document.getElementById("questionNumber");
    x.style.display = 'none';
    y.style.display = 'none';
    z.style.display = 'block';
    questionHeading.style.display = 'none';
    document.getElementById("resultHeading").innerText = "Test Finished!";
    document.getElementById("results").innerText = "You have answered " + score +"/" +numberOfQuestions + " correctly";
}
function loadExercise(concept_id,exercise_id) {

    var x = document.getElementById("questions");
    var y = document.getElementById("formArea");
    var z = document.getElementById("resultInformation");
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
        document.getElementById('questionNumber').innerText = "Question" + currentQuestion + "/" + numberOfQuestions;
    }
    if(fireworks){
        stopFireWorks();
    }
    if(currentQuestion == (numberOfQuestions)){
        finishTest = true;
        document.getElementById('next_exercise').onclick = function(){endTest();};
    }
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
                incorrectSound.play();
            }
        }
    }
    if (cellCount == solutionLength){
        initFireWorks();
        score++;
    } else {
        clearCanvas();
        incorrect = true;
        gDrawingContext.font = "30px Comic Sans MS";
        gDrawingContext.fillStyle = "red";
        gDrawingContext.textAlign = "center";
        gDrawingContext.fillText("Incorrect!", xEnd/2, yEnd/2);
        incorrectSound.play();
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
function startTest(){
    var numberOfConcepts = selectedTestConcepts.length;
    var totalNumberOfQuestions = 0;
    var randomConcept;
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
        randomConcept = Math.floor(Math.random(selectedTestConcepts.length));
        numberOfQuestionsInRandomConcept = numberOfExercisesInConcept(selectedTestConcepts[randomConcept]);
        randomQuestion = Math.floor(Math.random()*numberOfQuestionsInRandomConcept) + 1;
        selectedQuestions.push(new TestConcept(selectedTestConcepts[randomConcept],randomQuestion));
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