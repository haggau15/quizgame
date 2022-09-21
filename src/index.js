import {getRandomQuiz} from "./quizzes";
import * as ReactDOM from "react-dom";
import React from "react";
ReactDOM.render(
    <App>

    </App>,document.getElementById("app")

)
function App()
{
    return <h1>
        Hello
    </h1>
}
function test(id,answer)
{
    if (id===answer)
    {
        alert("Correct");
        displayQuiz();
    } else {
        alert("incorrct try again");
    }
}

function displayQuiz()
{
    const quizDiv = document.getElementById("quizDiv");
    const quiz=getRandomQuiz();
    this.answer=quiz.correctAnswer;
    let html =quiz.question+"<br>";
    html+= "<button id='1' onclick='test(1,answer)'>A: "+quiz.answer1+"</button>";
    html+= "<button id='2' onclick='test(2,answer)'>B: "+quiz.answer2+"</button>"+"<br>";
    html+= "<button id='3' onclick='test(3,answer)'>C: "+quiz.answer3+"</button>";
    html+= "<button id='4' onclick='test(4,answer)'>D: "+quiz.answer4+"</button>"+"<br>";
    quizDiv.innerHTML=html;
}

