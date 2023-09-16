const questions = [
  {
    question: "Which of the following in not found in gondar Ethiopia?",
    answers: [
      {
        text: "Fasilides' Castle",
        correct: false
      },
      {
        text: "The Mariam kuskuam church ",
        correct: false
      },
      {
        text: "Emperor Kaleb's Palace",
        correct: true
      },
      {
        text: "Mentewab's Castle",
        correct: false
      }
    ]
  },
  {
    question: "What is the major tourist attraction site in Ethiopia?",
    answers: [
      {
        text: "The castles of Gondar",
        correct: false
      },
      {
        text: "The Blue Nile Falls",
        correct: false
      },
      {
        text: "The Stellea of Axum",
        correct: false
      },
      {
        text: "All",
        correct: true
      }
    ]
  },
  {
    question: "Which of the following in not found in gondar Ethiopia",
    answers: [
      {
        text: "Fasilides' Castle",
        correct: false
      },
      {
        text: "The Mariam kuskuam church ",
        correct: false
      },
      {
        text: "Mentewab's Castle",
        correct: false
      },
      {
        text: "Emperor Kaleb's Palace",
        correct: true
      }
    ]
  },
  {
    question: "Which of the following in not found in gondar Ethiopia",
    answers: [
      {
        text: "Fasilides' Castle",
        correct: false
      },
      {
        text: "The Mariam kuskuam church ",
        correct: false
      },
      {
        text: "Mentewab's Castle",
        correct: false
      },
      {
        text: "Emperor Kaleb's Palace",
        correct: true
      }
    ]
  },
  {
    question: "Which of the following in not found in gondar Ethiopia",
    answers: [
      {
        text: "Fasilides' Castle",
        correct: false
      },
      {
        text: "The Mariam kuskuam church ",
        correct: false
      },
      {
        text: "Mentewab's Castle",
        correct: false
      },
      {
        text: "Emperor Kaleb's Palace",
        correct: true
      }
    ]
  }
];
const questionElement = document.getElementById("question");
const answerbutton = document.getElementById("answer_button");
const nextbutton = document.getElementById("next-btn");
const current = document.getElementById("current");
const currentScore = document.getElementById("currentScore");


let currentQuestionIndex = 0;
let score = 0;
function startQuize() {
  currentQuestionIndex = 0;
  score = 0;
  nextbutton.innerHTML = "Next";
  current.style.display = "block"
  currentScore.style.display = "block"

  showquestion();
}
function showquestion() {
  resrtState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  current.innerHTML = `${questionNo} of ${questions.length} Question`;
  currentScore.innerHTML = `scored ${score} / ${questions.length}`;
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerbutton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerbutton.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextbutton.style.display = "block";
}

function resrtState() {
  nextbutton.style.display = "none";
  while (answerbutton.firstChild) {
    answerbutton.removeChild(answerbutton.firstChild);
  }
}
nextbutton.addEventListener("click", toNext);
function toNext(e) {
  if (currentQuestionIndex < questions.length) {
    if (++currentQuestionIndex < questions.length) {
      showquestion();
    } else {
      resrtState();
      questionElement.innerHTML = `Greet You scored ${score} out of ${questions.length}`;
      nextbutton.innerHTML = "Take the exam again";
      nextbutton.style.display = "block";
      current.style.display = "none";
      currentScore.style.display = "none";
    }
  } else {
    startQuize();
  }
}

startQuize();
