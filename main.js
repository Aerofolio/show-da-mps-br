/********** Questions Array **********/
const questions = [
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

const setQuestionsIds = () => {
    let answerId = 0;
    questions.forEach((question, index) => {
        question.id = index;
        question.answers.forEach(answer => answer.id = answerId++);
    });
};

const startup = () => {
    setQuestionsIds();
};

/********** Start **********/
startup();