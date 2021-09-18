var startbtn = document.getElementById("start")
var nextbtn = document.getElementById('highScore')
var qcontainerEl = document.getElementById('qcontainer')
var qElement = document.getElementById('question')
var ansElement = document.getElementById ('answerbtn');
var timeleft = 30;

//this function is to make the game start
var qIndex = 0;
var endIndex = questions.length;
var time;
function start(){
    qVisible()
    document.getElementById("gameEnd").display = "none";
    document.getElementById("startDisplay").display="none";
 //timer need to be included somewhere
    time = setInterval(function(){
        timeleft--;
        document.getElementById(timer).textContent = "Time left:" + timeleft;
        qcontainerEl.style.display="block";
    })
}
//this function should set up the next question
function qVisible(){
    document.getElementById('gameEnd').style.display="none";
}
//This to stop display and replay
function replay(){
    qIndex = 0;
    score = 0;
    document.getElementById('gameEnd').style.display="none"
    document.getElementById("startDisplay").style.display ="flex";
    document.getElementById("hsContainer").style.display="none"
}
//this to check answers
var correct;
function ans(answer){
    correct = questions[qIndex].answer
}

// this section will focus on Score 
var score = 0;
function scoreVis(){
    qcontainerEl.style.display="none";
    gameEnd.style.display="flex";

}

function highScore (){
   
}
function hsVis(element){
    document.getElementById("startDisplay").style.display ="none";
    document.getElementById("gameEnd").style.display ="none";
    document.getElementById("hsContainer").style.display ="flex";
    document.getElementById("replay").style.display ="flex";
    document.getElementById("hsBox").style.display ="block";
    highScore();
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