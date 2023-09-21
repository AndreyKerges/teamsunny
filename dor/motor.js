const questions = [
    {
      question: "Pronomes são elementos que dão sentido ao texto. Qual das alternativas a baixo são pronomes?", 
      answers:[
        {text: "A) História", correct: false},
        {text: "B) Correr", correct: false},
        {text: "C) Fazia", correct: false},
        {text: "D) Oceano", correct: false},
        {text: "E) Eu", correct: true},
        
      ]
    },
    {question: "Um texto divulgado em uma coluna de notícias de um jornal é de qual tipo?", 
    answers:[
      {text: "A) Artigo de opinião", correct: false},
      {text: "B) Notícia", correct: true},
      {text: "C) Romance", correct: false},
      {text: "D) Artigo", correct: false} ]
    },
    {question: "No slogan “ Essa realidade pode mudar COLABORE”, a palavra em destaque é um...", 
    answers:[
      {text: "A) Verbo no imperativo", correct: true},
      {text: "B) Substantivo", correct: false},
      {text: "C) Verbo decomposto", correct: false},
      {text: "D) Pronome imperfeito", correct: false},
      {text: "E) Verbo no infinitivo ", correct: false} ]

    },
    {question: "De acordo com a tabela periódica o número de átomos é representado de qual maneira? ", 
    answers:[
      {text: "A)  Na", correct: false},
      {text: "B)  Z", correct: true},
      {text: "C)  X", correct: false},
      {text: "D)  Y", correct: false},
      {text: "E)  P", correct: false} ]

    },
    {question: "As palavras “sete”, “fome” e “colabore”, podem ser classificadas, correta e respectivamente, nas classes gramaticais", 
    answers:[
      {text: "A) artigo, substantivo e adjetivo", correct: false},
      {text: "B) artigo, adjetivo e substantivo.", correct: false},
      {text: "C) numeral, preposição e verbo.", correct: false},
      {text: "D) numeral, advérbio e conjunção", correct: false},
      {text: "E) numeral, substantivo e verbo.", correct: true} ]

    },
      
];

const questionElement= document.getElementById("question");
const answerButtons= document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
currentQuestionIndex = 0;
score = 0;
nextButton.innerHTML = "Next";
showQuestion();
}


function showQuestion(){
    resetState();
    let currentQuestion = questions [currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1; 
    questionElement.innerHTML = questionNo + ". " + currentQuestion. 
    question;

    currentQuestion.answers.forEach(answer=> {
        const button = document.createElement("button");
        button.innerHTML = answer.text; 
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
});
    }

    function resetState(){
        nextButton.style.display = "none";
        while(answerButtons.firstChild){
           answerButtons.removeChild(answerButtons.firstChild);
        }
    }

    function selectAnswer(e){
        const selectBtn = e.target;
        const isCorrect = selectBtn.dataset.correct ==="true";
        if(isCorrect){
            selectBtn.classList.add("correct");
            score++;
        } else{
            selectBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display = "block";
    }

    function ShowScore(){
        resetState();
        questionElement.innerHTML = `Você pontuou ${score} de ${questions.length}`;
        nextButton.innerHTML = "Jogar novamente";
        nextButton.style.display = "block";
    }


    function handleNextButton(){
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length){
            showQuestion();
        }else{
            ShowScore();
        }
    }

    nextButton.addEventListener("click", ()=>{
        if(currentQuestionIndex < questions.length){
            handleNextButton();
        }else{
            startQuiz();
        }
    });
    startQuiz();

