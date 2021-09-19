var startbtn = document.getElementById("start")
var nextbtn = document.getElementById('highScore')
var qcontainerEl = document.getElementById('qContainer')
var qElement = document.getElementById('question')
var ansElement = document.getElementById ('answerbtn');
var timeleft = 30;
//Variable with Questions
var questions = [
    {
        question: "What is the correct way to connect script?",
            optA:" script src='script.js'></script>",
            optB:" style src='script.js'></style>",
            optC:" link src='script.js'></link>",
            optD:"connect src='script.js'></connect>",
            answer:"a"
    },
    {
        question: "What is the correct way to connect stylesheet?",
            optA:"connect href='style.css' rel=stylesheet>",
            optB:"link href=style.css rel='stylesheet'>",
            optC:"link href='style.css' rel='stylesheet'>",
            optD:"link rel=stylesheet>",
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
//this function is to make the game start
var qIndex = 0;
var endIndex = questions.length;
var time;
var score =0;
var correct;
function start(){
    qVisible()
    document.getElementById("gameEnd").style.display = "none";
    document.getElementById("startDisplay").style.display="none";
 //timer need to be included somewhere
    time = setInterval(function(){
        timeleft--;
        document.getElementById("timer").textContent = "Time left:" + timeleft;
        if(timeleft === 0){
           scoreVis(); 
           delInterval(time);
            
        }
    },1000);
        qcontainerEl.style.display="block";
}
//this function should set up questions
function qVisible(){
    document.getElementById('gameEnd').style.display="none";
    if (qIndex === endIndex){
        return scoreVis();
    }
    var theQuestion = questions[qIndex];
    qElement.innerHTML = "<p>" + theQuestion.question + "</p>";
    document.getElementById("a").innerHTML = theQuestion.optA;
    document.getElementById("b").innerHTML = theQuestion.optB;
    document.getElementById("c").innerHTML = theQuestion.optC;
    document.getElementById("d").innerHTML = theQuestion.optD;
}
//This to stop display and replay
function replay(){
    qIndex = 0;
    score = 0;
    document.getElementById('gameEnd').style.display="none"
    document.getElementById("startDisplay").style.display ="flex";
    document.getElementById("hsContainer").style.display="none";
    timeleft= 30;
}
//this to check answers

function ans(answer){
    correct = questions[qIndex].answer
    if(answer === correct && qIndex !== endIndex){
        score++;
        alert("You got that RIGHT!!");
        qIndex++;
        qVisible();
    } else if (answer !== correct && qIndex !== endIndex){
        alert("You got that WRONG!");
        qIndex++;
        qVisible();
    } else{scoreVis();}
}

// this section will focus on Score 
function scoreVis(){
    qcontainerEl.style.display="none";
    gameEnd.style.display="flex";
    delInterval(time);
    document.getElementById("initials").value = "";
    document.getElementById("finalScore").innerHTML = 
        "You got " + score + " out of " + questions.length + " CORRECT!";
}
document.getElementById("addScore").addEventListener("click", function highscores(){
    if(document.getElementById('initials').value === ""){
        alert("You MUST Input Initials to ADD");
        return false;
    } else{
        var savedHS = JSON.parse(localStorage.getItem("savedHS")) || [];
        var user = document.getElementById("initials").value.trim();
        var userHS = {
            name : user, score: score
        }; 
        document.getElementById("gameEnd").style.display = "none";
        document.getElementById("hsContainer").style.display = "flex";
        document.getElementById("hsBox").style.display = "block";
        document.getElementById("replay").style.display = "flex";
        
        savedHS.push(userHS);
        localStorage.setItem("savedHS", JSON.stringify(savedHS));
        highScore();    
    }
})

function highScore (){
   document.getElementById("hsInitial").innerHTML= "";
   document.getElementById("hScore").innerHTML="";
   var hs = JSON.parse(localStorage.getItem("savedHS")) || [];
   for (i=0; i<hs.length; i++){
       var newName = document.createElement("li");
       var newScore = document.createElement("li");
       newName.textContent = hs[i].name;
       newScore.textContent = hs[i].score;
       document.getElementById("hsInitial").appendChild(newName);
       document.getElementById("hScore").appendChild(newScore);
   }
}
//hides start and end, shows high score
function hsVis(){
    document.getElementById("startDisplay").style.display ="none";
    document.getElementById("gameEnd").style.display ="none";
    document.getElementById("hsContainer").style.display ="flex";
    document.getElementById("replay").style.display ="flex";
    document.getElementById("hsBox").style.display ="block";
    highScore();
}

startbtn.addEventListener("click",start)
//var with all the questions
