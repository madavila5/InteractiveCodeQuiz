
const startbtn = document.getElementById("start")
const nextbtn = document.getElementById('next')
const qcontainerEl = document.getElementById('qcontainer')
const qElement = document.getElementById('question')
const ansElement = document.getElementById ('answerbtn');

let qShuffle, qIndex
document.getElementById('start').addEventListener('click', start);
nextbtn.addEventListener('click',()=> {
    qIndex++
    nextQ()
} )

//this function is to make the game start
function start(){
    startbtn.classList.add('hide')
    qShuffle = questions.sort(() => Math.random()-.5)
    qIndex = 0
    document.getElementById('qContainer').classList.remove('hide')
    nextQ()
}
//this function should set up the next question
function nextQ (){
    reset
    qVisible(qShuffle[qIndex])

}

function qVisible(question){
    qElement.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement ('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',ans)
        ansElement.appendChild(button)
    });
}
//deleted section here because it was not working
function reset(){
    clearStatusClass(document.body)
     nextbtn.classList.add('hide')
     while (ansElement.firstChild){
         ansElement.removeChild(ansElement.firstChild)
     }
}// thi function should set up the answer

function ans(){
 const selectbtn= EventTarget
 const correct = selectbtn.dataset.correct
 setStatusClass(document.body, correct)
 Array.from(ansElement.children).forEach (button => {
     setStatusClass(button, button.dataset.correct)
 })
 if (qShuffle.length > qIndex +1){
     nextbtn.classList.remove('hide')
 } else {
     startbtn.innerText = "Restart"
     startbtn.classList.remove('hide')
 }
 nextbtn.classList.remove('hide')
}


function setStatusClass (element,correct){
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}
function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: "What is the correct way to connect script?",
        answer: [
            {text:"<script src='script.js'></script>",correct: true},
            {text:"<style src='script.js'></style>",correct: false},
            {text:"<link src='script.js'></link>",correct: false},
            {text:"connect src='script.js'></connect>",correct: false},
        ]
    },
    {
        question: "What is the correct way to connect stylesheet?",
        answer: [
            {text:"<link href='style.css' rel='stylesheet'>",correct: true},
            {text:"<link href=style.css rel='stylesheet'>",correct: false},
            {text:"<connect href='style.css' rel=stylesheet>",correct: false},
            {text:"<link rel=stylesheet>",correct: false},
        ]
    },
    {
        question: "What does CSS stand for?",
        answer: [
            {text:"Cascading Style Sheet",correct: true},
            {text:"Computer Style Sheet",correct: false},
            {text:"Computer Sample Sheet",correct: false},
            {text:"Cascading Sample Sheet",correct: false},
        ]
    },
    {
        question: "What does HTML stand for?",
        answer: [
            {text:"Hyper Text Markup Language",correct: true},
            {text:"Hyperlink Tag Mark Language",correct: false},
            {text:"Hyper Tag Madeup Language",correct: false},
            {text:"Hyperlink Text Madeup Language",correct: false},
        ]
    },
    {
        question: "What does div tag define?",
        answer: [
            {text:"division",correct: true},
            {text:"divident",correct: false},
            {text:"divice",correct: false},
            {text:"divoid",correct: false},
        ]
    }
]