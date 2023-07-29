// Questions that will be asked
const Questions = [{
    q: "How is doucument type initialized in HTML5?",
    a: [{ text: "/DOCTYPE HTML", isCorrect: false},
    { text: "/DOCTYPE", isCorrect: false},
    { text: "!DOCTYPE HTML", isCorrect: true},
    { text: "/DOCTYPE HTML", isCorrect: false}
    ]
},
{
    q: "Choose the correct HTML element for the largest heading:",
    a: [{ text: "<heading>", isCorrect: false},
    { text: "<h1>", isCorrect: true},
    { text: "<h2>", isCorrect: false},
    { text: "<head>", isCorrect: false}
    ]
},
{
    q: "What is the correct HTML element for inserting a line break?",
    a: [{ text: "<lb>", isCorrect: false},
    { text: "<br>", isCorrect: true},
    { text: "<break>", isCorrect: false },
    { text: "<span>", isCorrect: false}
    ]
},
{
    q: "What does HTML stand for?",
    a: [{ text: "Home Tool Markup Language", isCorrect: false},
    { text: "Hyper Text Markup Language", isCorrect: true },
    { text: "Hyperlinks and Text Markup Language", isCorrect: false },
    { text: "Hyperlinks Text Makesdown Language", isCorrect: false}
    ]
},
{
    q: "Who is making the Web standards?",
    a: [{ text: "Google", isCorrect: false},
    { text: "Mozilla", isCorrect: false },
    { text: "The World Wide Web Consortium", isCorrect: true },
    { text: "Microsoft", isCorrect: false }
    ]
} 
]
 
let currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}
 
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}