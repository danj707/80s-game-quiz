//////////////////////////////////
//Function and obj definitions
//////////////////////////////////

var quizArr = [

    {
        qnum: 1,
        qtext: "What 80's dungeon crawler, exploration game was this music from?",
        qchoices: ['Pac Man', 'Zelda', 'Pole Position', 'Super Mario', 'Tron', 'Donkey Kong'],
        qmusic: "audio/zelda.mp3",
        qcorrect: 2
        },
    {
        qnum: 2,
        qtext: "What classic arcade racer was this music from?",
        qchoices: ['Pac Man', 'Zelda', 'Pole Position', 'Super Mario', 'Tron', 'Donkey Kong'],
        qmusic: "audio/poleposition.mp3",
        qcorrect: 3
        },
    {
        qnum: 3,
        qtext: "What 80s game ate up the arcade world?",
        qchoices: ['Pac Man', 'Zelda', 'Pole Position', 'Super Mario', 'Tron', 'Donkey Kong'],
        qmusic: "audio/pacman.mp3",
        qcorrect: 1
        },
    {
        qnum: 4,
        qtext: "What game is this music from?",
        qchoices: ['Pac Man', 'Zelda', 'Pole Position', 'Super Mario', 'Tron', 'Donkey Kong'],
        qmusic: "audio/supermario.mp3",
        qcorrect: 4
        },
    {
        qnum: 5,
        qtext: "Name the game associated with this music, it's a classic and even had a movie!",
        qchoices: ['Pac Man', 'Zelda', 'Pole Position', 'Super Mario', 'Tron', 'Donkey Kong'],
        qmusic: "audio/tron.mp3",
        qcorrect: 5
        },
    {
        qnum: 6,
        qtext: "Save the princess, hurry!  What music is this from?",
        qchoices: ['Pac Man', 'Zelda', 'Pole Position', 'Super Mario', 'Tron', 'Donkey Kong'],
        qmusic: "audio/donkeykong.mp3",
        qcorrect: 6
        }
    ];


var currentQuestion = 0; //start out at array position 0
var questionNumbers = quizArr.length; //dynamically changes how long the quiz can be

function readyPlayerOne(quizArr) {
    $('.instructions').hide(); // hide the instructions
    $('.quiz_header').show(); // show the quiz header, question number, music, etc
    $('.quizrow').show(); // shows the quiz rows, answers, text, etc
    $('.submitrow').show(); // show the submit button
    $('form#quizform').show();

    //question content at top for whichever question we are on
    $("p.questiontext").html(quizArr[currentQuestion].qtext);
    $("audio").replaceWith('<audio class="audio" src="' + quizArr[currentQuestion].qmusic + '"controls="controls"></audio>');

    currentQuestion++; //move onto the next question next time func called

    var answers;

    questionText = quizArr[currentQuestion].qtext;
    $("h2").html("Question #" + currentQuestion + " of " + questionNumbers); //set the question numbers

    //for each question, starting at array pos 0, iterate, getting question answers, building and displaying in rows
    for (var i = 0; i < questionNumbers; i++) {

        answer = quizArr[i].qchoices[i];

        var text1 = '<div class="quizrow">' +
            '<div class="checkbox">' +
            '<input type="radio" class="radio" name="chose" value="' +
            answer +
            '"></input>' +
            '</div><div class="answer">' +
            answer +
            '</div>';

        var submit = '<div class="submitrow">' +
            '<input type="submit" value="Make a Guess!">' +
            '</div>';

        $("form#quizform").append(text1); //adds the answers and radio buttons
    };

    // $("form#quizform").html(submit); //adds the submit button at the bottom

};

$(document).ready(function () {

    //    //modal box stuff
    //    /*--- Display information modal box ---*/
    //    $(".instructions").click(function () {
    //        $(".overlay").fadeIn(1000);
    //    });

    //    /*--- Hide information modal box ---*/
    //    $("a.close").click(function () {
    //        $(".overlay").fadeOut(1000);
    //    });

    $(".new").click(function () {
        location.reload(); //reload the page on new game click
    });

    //show the game instructions on load
    $('.quiz_header').hide();
    $('.quizrow').hide();
    $('.submitrow').hide();
    $('form#quizform').hide();

    $(".play").click(function () {
        readyPlayerOne(quizArr);
    });

    $("form").submit(function () {
        event.preventDefault();
        console.log("user chose:" + $("input[class='radio']:checked").val());
    });



});
