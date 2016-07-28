//////////////////////////////////
//Function and obj definitions
//////////////////////////////////

var quizArr = [

    {
        qnum: 1,
        qtext: "What 80's dungeon crawler, exploration game was this music from?",
        qchoices: ['Pac Man', 'Legend of Zelda', 'Pole Position', 'Super Mario', 'Tron', 'Donkey Kong', 'Punch Out'],
        qmusic: "audio/zelda.mp3",
        qfacts: "The Legend of Zelda is a high-fantasy action-adventure video game series created by Japanese game designers Shigeru Miyamoto and Takashi Tezuka.",
        qimage: "images/zelda.png",
        qcorrect: "Legend of Zelda"
        },
    {
        qnum: 2,
        qtext: "What classic arcade racer was this music from?",
        qchoices: ['Pac Man', 'Legend of Zelda', 'Pole Position', 'Super Mario', 'Tron', 'Donkey Kong', 'Punch Out'],
        qmusic: "audio/poleposition.mp3",
        qcorrect: "Pole Position"
        },
    {
        qnum: 3,
        qtext: "What 80s game ate up the arcade world?",
        qchoices: ['Pac Man', 'Legend of Zelda', 'Pole Position', 'Super Mario', 'Tron', 'Donkey Kong', 'Punch Out'],
        qmusic: "audio/pacman.mp3",
        qcorrect: "Pac Man"
        },
    {
        qnum: 4,
        qtext: "What game is this music from?",
        qchoices: ['Pac Man', 'Legend of Zelda', 'Pole Position', 'Super Mario', 'Tron', 'Donkey Kong', 'Punch Out'],
        qmusic: "audio/supermario.mp3",
        qcorrect: "Super Mario"
        },
    {
        qnum: 5,
        qtext: "Name the game associated with this music, it's a classic and even had a movie!",
        qchoices: ['Pac Man', 'Legend of Zelda', 'Pole Position', 'Super Mario', 'Tron', 'Donkey Kong', 'Punch Out'],
        qmusic: "audio/tron.mp3",
        qcorrect: "Tron"
        },
    {
        qnum: 6,
        qtext: "Save the princess, hurry!  What music is this from?",
        qchoices: ['Pac Man', 'Legend of Zelda', 'Pole Position', 'Super Mario', 'Tron', 'Donkey Kong', 'Punch Out'],
        qmusic: "audio/donkeykong.mp3",
        qcorrect: "Donkey Kong"
        },
    {
        qnum: 7,
        qtext: "Don't get your ear bit off, what's this music from?",
        qchoices: ['Pac Man', 'Legend of Zelda', 'Pole Position', 'Super Mario', 'Tron', 'Donkey Kong', 'Punch Out'],
        qmusic: "audio/punchout.mp3",
        qcorrect: "Punch Out"
    }
    ];


var currentQuestion = 0; //start out at array position 0
var questionNumbers = quizArr.length; //dynamically changes how long the quiz can be
var right = 0;
var wrong = 0;

function readyPlayerOne() {
    $('.instructions').hide(); // hide the instructions
    $('.correct').hide();
    $('.quiz_header').show(); // show the quiz header, question number, music, etc
    $('.quizrow').show(); // shows the quiz rows, answers, text, etc
    $('.submitrow').show(); // show the submit button
    $('form#quizform').show();

    //question content at top for whichever question we are on
    $("p.questiontext").html(quizArr[currentQuestion].qtext);
    $("audio").replaceWith('<audio class="audio" src="' + quizArr[currentQuestion].qmusic + '"controls="controls"></audio>');

    var answer;

    questionText = quizArr[currentQuestion].qtext;
    $("h2.questionnum").html("Question #" + (currentQuestion + 1) + " of " + questionNumbers); //set the question numbers
    $("form#quizform").empty();

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
            '<input class="submit" type="submit" value="-> Am I right?">' +
            '</div>';

        if (currentQuestion == 0) {
            $("form#quizform").append(text1); //adds the answers and radio buttons only if it's the first page
        } else {
            $("form#quizform").append(text1); //adds the answers and radio buttons
        }
    };

    $("form#quizform").append(submit); //adds the submit button at the bottom

};

$(document).ready(function () {

    //modal box stuff
    /*--- Display information modal box ---*/
    //    $(".correct").click(function () {
    //        $(".correct").fadeIn(1000);
    //    });
    //
    //    /*--- Display information modal box ---*/
    //    $(".incorrect").click(function () {
    //        $(".incorrect").fadeIn(1000);
    //    });

    /*--- Hide information modal box ---*/
    $("a.close_correct").click(function () {
        $(".correct").fadeOut(1000);
        isGameOver();
    });

    /*--- Hide information modal box ---*/
    $("a.close_incorrect").click(function () {
        $(".incorrect").fadeOut(1000);
        isGameOver();
    });

    $(".new").click(function () {
        location.reload(); //reload the page on new game click
    });

    $(".play").click(function () {
        readyPlayerOne();
    });


    //show the game instructions on load only, hide other stuff
    $('.quiz_header').hide();
    $('.correct').hide();
    $('.incorrect').hide();
    $('.hiscore').hide();
    $('.quizrow').hide();
    $('.submitrow').hide();
    $('form#quizform').hide();

    function isGameOver() {
        if (currentQuestion < questionNumbers) {
            readyPlayerOne();
        } else {
            $('.nav').hide();
            $('.quiz_header').hide();
            $('.correct').hide();
            $('.incorrect').hide();
            $('.quizrow').hide();
            $('.submitrow').hide();
            $('form#quizform').hide();

            $('.hiscore').show();
            $('p.yourscore').html("Your Score: " + right);
        }
    }

    $("form").submit(function () {
        event.preventDefault();
        var userGuess = $("input[class='radio']:checked").val();
        var correctAnswer = quizArr[currentQuestion].qcorrect;
        var facts = quizArr[currentQuestion].qfacts;
        var image = quizArr[currentQuestion].qimage;
        console.log(facts);
        checkGuess(userGuess, correctAnswer);

        function checkGuess(userGuess, correctAnswer) {
            if (userGuess == correctAnswer) {
                $(".correct").fadeIn(1000);
                currentQuestion++;
                right++;
                $('p.right').html("# Right: " + right);
                $('p.gameinfo').html("<img src=" + image + "></p>");
                $('p.gameinfo').append("Facts: <p>" + facts + "</p>");
            } else if (typeof userGuess === 'undefined') {
                $(".incorrect").fadeIn(1000);
                currentQuestion++;
                wrong++;
                $('p.wrong').html("# Wrong: " + wrong);
                $('h2.feedback').html("Maybe you could make a choice next time?");
                $('p.correctanswerwas').html("The correct answer was: " + correctAnswer);
            } else {
                $(".incorrect").fadeIn(1000);
                currentQuestion++;
                wrong++;
                $('p.wrong').html("# Wrong: " + wrong);
                $('p.correctanswerwas').html("The correct answer was: " + correctAnswer);
            }
        };

    });
});
