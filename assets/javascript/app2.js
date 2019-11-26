window.onload = function () {
  let intervalId;
  let timer = 120;
  var correct = 0;
  var incorrect = 0;
  var currentQuestion = 0;
  var currentOptions = 0;
  var allBtns = [];
  var newBtns = [];


  $('.nextQuestion').hide();

  let questionArray = [{
      question: "Who recorded the original version of the song &quot;Hound Dog&quot;?",
      answers: [
        'Willa Mae Big Mama Thornton',
        "Elvis Presley",
        "Carl Perkins",
        "Chuck Berry",
        "Miley Cyrus"
      ],
      correctAnswer: 'Willa Mae Big Mama Thornton'
    },
    {
      question: "Who was marketed by her record company as the &quot;Female Elvis&quot;?",
      answers: [
        "Wanda Jackson",
        "Janis Martin",
        "Patsy Cline",
        "Diana Ross",
        "Miley Cyrus"
      ],
      correctAnswer: "Janis Martin"
    },
    {
      question: "Who sang the 1957 song &quot;Whole Lotta Shakin Goin On&quot;?",
      answers: [
        "Elvis Presley",
        "Jerry Lee Lewis",
        "Gene Vincent",
        "Buddy Holly",
        "Miley Cyrus"
      ],
      correctAnswer: "Jerry Lee Lewis"
    },
    {
      question: "&quot;Rebel-Rouser&quot;, &quot;Cannonball&quot;, and &quot;Because They Are Young&quot; were all hits by which artist?",
      answers: [
        "The Big Bopper",
        "Jerry Lee Lewis",
        "Gene Vincent",
        "Duane Eddy",
        "Miley Cyrus"
      ],
      correctAnswer: "Duane Eddy"
    },

    {
      question: "Who spent three weeks at No.1 in 1957 with &quot;That’ll be the Day&quot;?",
      answers: [
        "Buddy Holly",
        "June Carter",
        "Little Richard",
        "Fats Domino",
        "Miley Cyrus"
      ],
      correctAnswer: "Buddy Holly"
    }
  ];

  var totalQuestions = questionArray.length;
  console.log(totalQuestions);
  //this is your timer.  It is working.  Do not touch it.
  function startTimer() {
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
    timer--;
    $("#countdown").html("<span>" + timer + "<span>");

    if (timer === 0) {
      stopTimer();
    }
  }

  function stopTimer() {
    clearInterval(intervalId);
    // nextQuestion();
  }

  function getQuestions() {
    questionArray[currentQuestion].answers.forEach(function (btn) {
      var displayBtns = '<div class="btn answers" attr="' + btn + '">' + btn + '</div>'
      console.log(btn);
      allBtns.push(displayBtns);
    })


    $("#quiz-area").append("<div class='questions'>" + questionArray[currentQuestion].question + '</div>' + '<div class="options">' + allBtns + '</div><div class="btn next nextQuestion">Next</div>');
    $('.questions').show();
    $("#quiz-area").append("<button id='submit-btn'>Done</button>");
    $('#submit-btn').hide();
    $('#startGame').hide();
    $('.nextQuestion').show();

    $('.nextQuestion').click(function () {
      newBtns = [];
      currentQuestion++;
      currentOptions++;
      questionArray[currentOptions].answers.forEach(function (btn) {
        var displayBtns = '<div class="btn answers">' + btn + '</div>'
        newBtns.push(displayBtns);
      })

      $('.questions').html(questionArray[currentQuestion].question).fadeIn();
      $('.options').html(newBtns).fadeIn();
    });
  }

  function checkScore() {
    //Queston 1
      if ($(this).val() === questionArray[currentQuestion].correctAnswer) {
        correct++;
        console.log("true")
      } else {
        incorrect++;
        console.log()
      }
  }

  function displayResults() {
    $("#quiz-area").empty();
    $("#timer-area").empty();
    $("#quiz-area").append("<h3>Correct:  " + correct + "</h3>");
    $("#quiz-area").append("<h3> Incorrect:  " + incorrect + "</h3>");

    if (correct > incorrect) {
      $("#quiz-area").prepend("<h4>You win, Daddy-o!</h4><br>")
    } else {
      $("#quiz-area").prepend("<h4>You're cruisin' for a bruisin', try again!</h4><br>")
    }
  }

  // Click Events
  $(document).on("click", "#startGame", function () {
    $("#startGame").replaceWith();
    startTimer();
    decrement();
    getQuestions();
  });

 
  $(document).on("click", ".answers", function () {
    console.log("this was clicked")
    console.log(this.val)
    if ($(this).val() === questionArray[currentQuestion].correctAnswer) {
      correct++;
      console.log("true")
    } else {
      incorrect++;
      console.log()
    }
  });
};