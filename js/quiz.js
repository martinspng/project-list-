const quizData = [
    {
        question:"which language runs in a web browser?",
        a: "java",
        b: "c",
        c: "phyton",
        d: "javascript",
        correct: "d"
    },
    {
        question:"what does css stands for?",
        a: "central style sheet",
        b: "cascading style sheet",
        c: "cascading simple sheet",
        d: "cars SUV's sailboat",
        correct: "b"  
    },
    {
        question:"what does HTML stands for?",
        a: "hypertext markup language",
        b: "hypertext markdown language",
        c: "hyperloop machine language",
        d: "helicopter terminals motorboats lamborghini's",
        correct: "a"
    },
    {
        question:"what year was javascript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b"
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()


function loadQuiz() {

    deselectAnswer()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswer() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct)
            score++
    }
    currentQuiz++
    if(currentQuiz < quizData)
})