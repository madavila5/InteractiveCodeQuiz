
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
    qVisible()
    document.getElementById("gameEnd").display = "none";
    document.getElementById("startDisplay").display="none";
 //timer need to be included somewhere

}
//this function should set up the next question
function qVisible(){
  
}
//the reset is not working
function replay(){
    document.getElementById('gameEnd').style.display="none"
}

function ans(answer){

// this section will focus on Score 
function scoreVis(){
    qcontainerEl.style.display="none";
    gameEnd.style.display="flex";

}

function highScore (element,correct){
   
}
function hsVis(element){
    
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