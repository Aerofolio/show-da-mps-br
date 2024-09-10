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
    },
    {
        statment: 'Você é um robô?',
        tip: '0000111 00111 0111 01111',
        answers: [
            {
                description: 'Sim',
                correctAnswer: false
            },
            {
                description: 'Não',
                correctAnswer: false
            },
            {
                description: 'Não sei',
                correctAnswer: true
            },
            {
                description: 'Bip bop',
                correctAnswer: false
            }
        ]
    },
    {
        statment: 'Qual o celular do ano?',
        tip: 'Marca da maça',
        answers: [
            {
                description: 'Apple',
                correctAnswer: true
            },
            {
                description: 'Samsung',
                correctAnswer: false
            },
            {
                description: 'Xiomi',
                correctAnswer: true
            },
            {
                description: 'Nokia',
                correctAnswer: false
            }
        ]
    },
    {
        statment: 'A opção 3 esta correta',
        tip: 'Quem escreveu a pergunta estava mentindo',
        answers: [
            {
                description: 'Opção 1',
                correctAnswer: true
            },
            {
                description: 'Opção 2',
                correctAnswer: false
            },
            {
                description: 'Opção 3',
                correctAnswer: true
            },
            {
                description: 'Opção 4',
                correctAnswer: false
            }
        ]
    },
    {
        statment: 'Pergunta 6?',
        tip: 'Dica da pergunta 6',
        answers: [
            {
                description: 'Opção 1',
                correctAnswer: true
            },
            {
                description: 'Opção 2',
                correctAnswer: false
            },
            {
                description: 'Opção 3',
                correctAnswer: false
            },
            {
                description: 'Opção 4',
                correctAnswer: true
            }
        ]
    },
    {
        statment: 'Pergunta 7?',
        tip: 'Dica da pergunta 7',
        answers: [
            {
                description: 'Opção 1',
                correctAnswer: true
            },
            {
                description: 'Opção 2',
                correctAnswer: false
            },
            {
                description: 'Opção 3',
                correctAnswer: false
            },
            {
                description: 'Opção 4',
                correctAnswer: true
            }
        ]
    },
    {
        statment: 'Pergunta 8?',
        tip: 'Dica da pergunta 8',
        answers: [
            {
                description: 'Opção 1',
                correctAnswer: true
            },
            {
                description: 'Opção 2',
                correctAnswer: false
            },
            {
                description: 'Opção 3',
                correctAnswer: false
            },
            {
                description: 'Opção 4',
                correctAnswer: true
            }
        ]
    },
    {
        statment: 'Pergunta 9?',
        tip: 'Dica da pergunta 9',
        answers: [
            {
                description: 'Opção 1',
                correctAnswer: true
            },
            {
                description: 'Opção 2',
                correctAnswer: false
            },
            {
                description: 'Opção 3',
                correctAnswer: false
            },
            {
                description: 'Opção 4',
                correctAnswer: true
            }
        ]
    },
    {
        statment: 'Pergunta 10?',
        tip: 'Dica da pergunta 10',
        answers: [
            {
                description: 'Opção 1',
                correctAnswer: true
            },
            {
                description: 'Opção 2',
                correctAnswer: false
            },
            {
                description: 'Opção 3',
                correctAnswer: false
            },
            {
                description: 'Opção 4',
                correctAnswer: true
            }
        ]
    }
]

/********** Startup functions **********/
const startup = {
    start: function () {
        this.setQuestionsIds();
        this.setAnswersEvents();
        this.setLinkHelpEvents();
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
    },
    setLinkHelpEvents: function () {
        const helpStudentsLinks = document.getElementsByClassName(stylesClasses.linkHelp);
        for (let i = 0; i < helpStudentsLinks.length; i++) {
            helpStudentsLinks[i].addEventListener('click', () => { player.decreaseTips() });
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
    },
    setQuestionNumber: function () {
        const answerdQuestionsCount = document.getElementById('answerdQuestionsCount');
        const totalQuestionsCount = document.getElementById('totalQuestionsCount');

        answerdQuestionsCount.innerText = player.answeredQuestions.length;
        totalQuestionsCount.innerText = game.maxNumberOfQuestions;
    },
    setFinalScore: function () {
        const scoreCount = document.getElementById('scoreCount');

        scoreCount.innerText = player.correctAnswers;
    }
};

/********** Presentation Functions **********/
const stylesClasses = {
    displayNone: 'd-none',
    selectedAnswer: 'active',
    selectedIcon: 'ph-check-circle',
    unselectedIcon: 'ph-circle',
    linkHelp: 'link-help'
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
    },
    closeModal: function (modalId) {
        const modalStateCheckbox = document.getElementById(modalId);
        modalStateCheckbox.checked = false;
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

        if (this.answeredQuestions.length < game.maxNumberOfQuestions)
            game.nextQuestion();
        else
            game.end();
    },
    decreaseTips: function () {
        this.tipsLeft--;
    }
};

const game = {
    maxNumberOfQuestions: 10,
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

        const helpStudentsText = document.getElementById('helpStudents');
        helpStudentsText.innerText = selectedQuestion.tip;

        question.setQuestionNumber();
    },
    end: function () {
        const invisbleDivsIds = ['contentNewGame', 'contentGame'];
        const visibleDivs = ['contentEndGame'];

        invisbleDivsIds.forEach(x => presentation.setVisible(x, false));
        visibleDivs.forEach(x => presentation.setVisible(x, true));

        question.setFinalScore();
    }
};

/********** Start **********/
startup.start();