/********** Questions Array **********/
const questionsList = [
    {
        statment: 'Qual a cor do mar?',
        tip: 'Mesma cor do céu',
        answers: [
            {
                description: 'Azul',
                correctAnswer: true
            },
            {
                description: 'Verde',
                correctAnswer: false
            },
            {
                description: 'Vermelho',
                correctAnswer: false
            },
            {
                description: 'Rosa',
                correctAnswer: false
            }
        ]
    },
    {
        statment: 'Qual o objeto redondo que sai da galinha?',
        tip: 'De onde vem o pintinho',
        answers: [
            {
                description: 'Pedra',
                correctAnswer: false
            },
            {
                description: 'Frango assado',
                correctAnswer: false
            },
            {
                description: 'Ovo',
                correctAnswer: true
            },
            {
                description: 'Pena',
                correctAnswer: false
            }
        ]
    }
]

/********** Startup functions **********/
const startup = {
    start: function () {
        this.setQuestionsIds();
        this.setAnswersEvents();
    },
    setQuestionsIds: function () {
        let answerId = 0;
        questionsList.forEach((question, index) => {
            question.id = index;
                question.answers.forEach(answer => answer.id = answerId++);
        });
    },
    setAnswersEvents: function () {
        const answersListDiv = document.getElementById('answerList');
        for (let answerDiv = answersListDiv.children[0]; !utils.isNullOrEmpty(answerDiv); answerDiv = answerDiv.nextElementSibling) {
            answerDiv.addEventListener('click', () => { question.setSelectedQuestion(answerDiv) });
        }
    }
};

/********** Utils **********/
const utils = {
    randomIntFromInterval: (min, max) => Math.floor(Math.random() * (max - min + 1) + min),
    isNullOrEmpty: (a) => a === null || a === undefined || a === '' || a.length === 0
}

/********** Questions Functions **********/
const question = {
    getRandomQuestion: function () {
        const notAnsweredQuestions = questionsList.filter(x => !player.answeredQuestions.some(y => y == x.id));
        const randomQuestionIndex = utils.randomIntFromInterval(0, notAnsweredQuestions.length -1);
        
        if(notAnsweredQuestions.length <= 0) console.error('Error: There is no questions left to answer.');

        return notAnsweredQuestions[randomQuestionIndex];    
    },
    setSelectedQuestion: function (answerDiv) {
        this.clearSelectedQuestions();

        const answerIcon = answerDiv.getElementsByTagName('i')[0];
        answerIcon.classList.replace(stylesClasses.unselectedIcon, stylesClasses.selectedIcon);
        answerDiv.classList.add(stylesClasses.selectedAnswer);

        player.selectedAnswer = answerDiv.answerId;
    },
    clearSelectedQuestions: function () {
        const answersListDiv = document.getElementById('answerList');
        for (let unselectedAnswer = answersListDiv.children[0]; !utils.isNullOrEmpty(unselectedAnswer); unselectedAnswer = unselectedAnswer.nextElementSibling) {
            const answerIcon = unselectedAnswer.getElementsByTagName('i')[0];
            answerIcon.classList.replace(stylesClasses.selectedIcon, stylesClasses.unselectedIcon);
            unselectedAnswer.classList.remove(stylesClasses.selectedAnswer);
            player.selectedAnswer = undefined;
        }
    }
};

/********** Presentation Functions **********/
const stylesClasses = {
    displayNone: 'd-none',
    selectedAnswer: 'active',
    selectedIcon: 'ph-check-circle',
    unselectedIcon: 'ph-circle'
};

const presentation = {
    setVisible: function (id, visible) {
        const el = document.getElementById(id)
        if (utils.isNullOrEmpty(el)){
            console.error(`Invalid id: ${id}`);
            return;
        }

        if (!visible && !el.classList.contains(stylesClasses.displayNone)){
            el.classList.add(stylesClasses.displayNone);
        } else if (visible && el.classList.contains(stylesClasses.displayNone)){
            el.classList.remove(stylesClasses.displayNone);
        }
    }
};

/********** Game Functions **********/
const player = {
    tipsLeft: 0,
    correctAnswers: 0,
    answeredQuestions: [],
    selectedAnswer: undefined,
    startGame: function () {
        this.tipsLeft = 3;
        this.correctAnswers = 0;
        this.answeredQuestions = [];
        this.selectedAnswer = undefined;
        this.selectedQuestion = undefined;
    },
    answerQuestion: function () {
        if (utils.isNullOrEmpty(this.selectedAnswer)) return;

        if (questionsList.flatMap(x => x.answers).find(x => x.id == this.selectedAnswer).correctAnswer)
            this.correctAnswers++;

        game.nextQuestion();
    }
};

const game = {
    start: function () {
        const invisbleDivsIds = ['contentNewGame', 'contentEndGame'];
        const visibleDivs = ['contentGame'];

        invisbleDivsIds.forEach(x => presentation.setVisible(x, false));
        visibleDivs.forEach(x => presentation.setVisible(x, true));

        player.startGame();
        this.nextQuestion();
    },
    nextQuestion: function () {
        question.clearSelectedQuestions();
        const selectedQuestion = question.getRandomQuestion();
        player.answeredQuestions.push(selectedQuestion.id);

        const questionDiv = document.getElementById('question');
        questionDiv.innerText = selectedQuestion.statment;
        
        const answersListDiv = document.getElementById('answerList');
        for (let i = 0; i < selectedQuestion.answers.length; i++) {
            const answerDiv = answersListDiv.children[i];
            const answerText = answerDiv.getElementsByTagName('span')[0];

            answerText.innerText = selectedQuestion.answers[i].description;
            answerDiv.answerId = selectedQuestion.answers[i].id;
        }
    }
};

/********** Start **********/
startup.start();