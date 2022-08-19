const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
]

let curQuiz = 0
let score = 0

const quiz = document.getElementById('quiz')
const question = document.querySelector("#question")
const answer_a = document.querySelector("#a_text")
const answer_b = document.querySelector("#b_text")
const answer_c = document.querySelector("#c_text")
const answer_d = document.querySelector("#d_text")
const submit = document.querySelector("#submit")
const radioList = document.querySelectorAll("input[type=radio]")

loadQuiz()
// 加载问题
function loadQuiz() {
  delSelected()
  const curQuizData = quizData[curQuiz]
  question.innerHTML = curQuizData.question
  answer_a.innerText = curQuizData.a
  answer_b.innerHTML = curQuizData.b
  answer_c.innerHTML = curQuizData.c
  answer_d.innerHTML = curQuizData.d

}

function delSelected() {
  radioList.forEach((r, i) => r.checked = false)
}

submit.addEventListener("click", () => {
  let answer = getAnsValue()
  // 没有选择答案
  if (!answer) return
  if (answer === quizData[curQuiz].correct) {
    score++
  }
  curQuiz++
  if (curQuiz < quizData.length) {
    loadQuiz()
  } else {
    quiz.innerHTML = `
    <h2>You answered ${score}/${quizData.length} questions correctly</h2>

    <button onclick="location.reload()">Reload</button>
`
  }
})

function getAnsValue() {
  for (let i = 0; i < radioList.length; i++) {
    if (radioList[i].checked) {
      return radioList[i].id
    }
  }
  return null
}


