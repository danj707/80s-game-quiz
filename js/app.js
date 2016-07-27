//////////////////////////////////
//Function and obj definitions
//////////////////////////////////

var quizArr = [

    {
        qnum: 1,
        qtext: "What 80's dungeon crawler, exploration game was this music from?",
        qchoices: ['Pac Man', 'Zelda', 'Pole Position', 'Super Mario', 'Tron', 'Donkey Kong'],
        qmusic: "zelda.mp3",
        qcorrect: 2
        },
    {
        qnum: 2,
        qtext: "What classic arcade racer was this music from?",
        qchoices: ['Pac Man', 'Zelda', 'Pole Position', 'Super Mario', 'Tron', 'Donkey Kong'],
        qmusic: "poleposition.mp3",
        qcorrect: 3
        },
    {
        qnum: 3,
        qtext: "What 80s game ate up the arcade world?",
        qchoices: ['Pac Man', 'Zelda', 'Pole Position', 'Super Mario', 'Tron', 'Donkey Kong'],
        qmusic: "pacman.mp3",
        qcorrect: 1
        },
    {
        qnum: 4,
        qtext: "What game is this music from?",
        qchoices: ['Pac Man', 'Zelda', 'Pole Position', 'Super Mario', 'Tron', 'Donkey Kong'],
        qmusic: "supermario.mp3",
        qcorrect: 4
        },
    {
        qnum: 5,
        qtext: "Name the game associated with this music, it's a classic and even had a movie!",
        qchoices: ['Pac Man', 'Zelda', 'Pole Position', 'Super Mario', 'Tron', 'Donkey Kong'],
        qmusic: "tron.mp3",
        qcorrect: 5
        },
    {
        qnum: 6,
        qtext: "Save the princess, hurry!  What music is this from?",
        qchoices: ['Pac Man', 'Zelda', 'Pole Position', 'Super Mario', 'Tron', 'Donkey Kong'],
        qmusic: "donkeykong.mp3",
        qcorrect: 6
        }
    ];

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

    $('.quiz_header').hide();
    $('.quizrow').hide();
    $('.submitrow').hide();

    $(".play").click(function () {
        readyPlayerOne(quizArr);
    });

});

function readyPlayerOne(quizArr) {
    $('.instructions').hide(); // hide the instructions
    $('.quiz_header').show(); // show the quiz header, question number, music, etc
    $('.quizrow').show(); // shows the quiz rows, answers, text, etc
    $('.submitrow').show(); // show the submit button

    var questionNumbers = quizArr.length;

    for (i = 0; i < questionNumbers; i++) {
        console.log(quizArr[i].qtext);
    };



    //var questionText = quizArr[questionNumbers].qtext;



};
