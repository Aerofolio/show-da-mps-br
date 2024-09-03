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
        const answersListDiv = document.getElementById('answer-list');
        for (let answerDiv = answersListDiv.children[0]; !utils.isNullOrEmpty(answerDiv); answerDiv = answerDiv.nextElementSibling) {
            answerDiv.onclick = function () {
                for (let unselectedAnswer = answersListDiv.children[0]; !utils.isNullOrEmpty(unselectedAnswer); unselectedAnswer = unselectedAnswer.nextElementSibling) {
                    const answerIcon = unselectedAnswer.getElementsByTagName('i')[0];
                    answerIcon.classList.replace(stylesClasses.selectedIcon, stylesClasses.unselectedIcon);
                    unselectedAnswer.classList.remove(stylesClasses.selectedAnswer);
                }

                const answerIcon = answerDiv.getElementsByTagName('i')[0];
                answerIcon.classList.replace(stylesClasses.unselectedIcon, stylesClasses.selectedIcon);
                answerDiv.classList.add(stylesClasses.selectedAnswer);
            }
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
    answeredQuestions: [],
    getRandomQuestion: function () {
        const notAnsweredQuestions = questionsList.filter(x => !this.answeredQuestions.some(y => y == x.id));
        const randomQuestionIndex = utils.randomIntFromInterval(0, notAnsweredQuestions.length -1);
        
        if(notAnsweredQuestions.length <= 0) console.error('Error: There is no questions left to answer.');

        return notAnsweredQuestions[randomQuestionIndex];    
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
const game = {
    start: function () {
        const invisbleDivsIds = ['contentNewGame', 'contentEndGame'];
        const visibleDivs = ['contentGame'];

        invisbleDivsIds.forEach(x => presentation.setVisible(x, false));
        visibleDivs.forEach(x => presentation.setVisible(x, true));
        //get random question
        //set question on screen
    }
};

/********** Start **********/
startup.start();