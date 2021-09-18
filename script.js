
var startbtn = document.getElementById("start")
var nextbtn = document.getElementById('highScore')
var qcontainerEl = document.getElementById('qcontainer')
var qElement = document.getElementById('question')
var ansElement = document.getElementById ('answerbtn');

let qShuffle, qIndex
startbtn.addEventListener('click', start);
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
//the reset is not working
function replay(){
    clearStatusClass(document.body)
     nextbtn.classList.add('hide')
     while (ansElement.firstChild){
         ansElement.removeChild(ansElement.firstChild)
     }
}

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
// this section will focus on Score 
function scoreVis()

function highScore (element,correct){
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}
function hsVis(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

startbtn.addEventListener("click",start)
//var with all the questions
var questions = [
    {
        question: "What is the correct way to connect script?",
            optA:"<script src='script.js'></script>",
            optB:"<style src='script.js'></style>",
            optC:"<link src='script.js'></link>",
            optD:"connect src='script.js'></connect>",
            answer:"a"
    },
    {
        question: "What is the correct way to connect stylesheet?",
            optA:"<connect href='style.css' rel=stylesheet>",
            optB:"<link href=style.css rel='stylesheet'>",
            optC:"<link href='style.css' rel='stylesheet'>",
            optD:"<link rel=stylesheet>",
            answer:"c"
    },
    {
        question: "What does CSS stand for?",
            optA:"Computer Sample Sheet",
            optB:"Computer Style Sheet",
            optC:"Cascading Style Sheet",
            optD:"Cascading Sample Sheet",
            answer:"c"
    },
    {
        question: "What does HTML stand for?",
            optA:"Hyperlink Text Madeup Language",
            optB:"Hyperlink Tag Mark Language",
            optC:"Hyper Tag Madeup Language",
            optD:"Hyper Text Markup Language",
            answer:"d"
    },
    {
        question: "What does div tag define?",
            optA:"divident",
            optB:"division",
            optC:"divice",
            optD:"divoid",
            answer:"b"
    }
];