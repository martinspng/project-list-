const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('questionContainer')
startButton.addEventListener('click', startGame)
const questionElement = document.getElementById('questions')
const shuffledQuestion, currentQuestionIndex


function startGame() {
console.log('started')
    startButton.classList.add('hide')
    shuffledQuestion = questions.sort(() => Math.random() - .5)
    questionContainerElement.classList.remove('hide')
    setNextQuestion('')
}


function setNextQuestion() {
    showQuestion(shuffledQuestion[currentQuestionIndex])

}

function showQuestion(question){


}

function selectAnswer() {

}

const question = [
    {
        question: 'what is 2 + 2',
        answers:[
            {Text:'4', correct: true},
            {Text:'22', correct: false}
        ]
    }
]








const questions = [
    {
        question: 'what is 2 + 2',
        answers:[
            {Text:'4', correct: true},
            {Text:'22', correct: false}
        ]
    }
]












































































































































































var score=0;
if(document.getElementById('a').checked)
     {
        score++;
     }

     if(document.getElementById('b').checked)
        {
        score++;
        }
    if(document.getElementById('c').checked)
        {
           score++;
        }
    if(document.getElementById('d').checked)
        {
            score++;
        }
    
    document.write("your score is" +score)




































