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
    },
    setQuestionsIds: function () {
        let answerId = 0;
        questionsList.forEach((question, index) => {
            question.id = index;
                question.answers.forEach(answer => answer.id = answerId++);
        });
    }
};

/********** Utils **********/
const utils = {
    randomIntFromInterval: (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
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

/********** Start **********/
startup.start();