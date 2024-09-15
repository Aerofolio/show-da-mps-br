/********** Questions Array **********/
const questionsList = [
    {
        statment: 'O que significa MPS.BR?',
        tip: 'É um modelo de qualidade de processos.',
        answers: [
            {
                description: 'Modelo de Processos de Software Brasileiro',
                correctAnswer: false
            },
            {
                description: 'Metodologia de Processos de Software Brasileiro',
                correctAnswer: false
            },
            {
                description: 'Melhoria de Processos do Software Brasileiro',
                correctAnswer: true
            },
            {
                description: 'Manual de Processos de Software Brasileiro',
                correctAnswer: false
            }
        ]
    },
    {
        statment: 'Qual organização criou o MPS.BR?',
        tip: 'É uma associação para promoção da excelência do software brasileiro.',
        answers: [
            {
                description: 'ABNT',
                correctAnswer: false
            },
            {
                description: 'INMETRO',
                correctAnswer: false
            },
            {
                description: 'Softex',
                correctAnswer: true
            },
            {
                description: 'ANATEL',
                correctAnswer: false
            }
        ]
    },
    {
        statment: 'Em que ano o MPS.BR foi criado?',
        tip: 'Foi no início dos anos 2000',
        answers: [
            {
                description: '2000',
                correctAnswer: false
            },
            {
                description: '2005',
                correctAnswer: false
            },
            {
                description: '2010',
                correctAnswer: false
            },
            {
                description: '2003',
                correctAnswer: true
            },
        ]
    },
    {
        statment: 'Qual é o principal objetivo do MPS.BR?',
        tip: 'Foca na qualidade e eficiência dos processos.',
        answers: [
            {
                description: 'Melhorar a capacidade de desenvolvimento de software',
                correctAnswer: true
            },
            {
                description: 'Reduzir custos de desenvolvimento',
                correctAnswer: false
            },
            {
                description: 'Aumentar a segurança de software',
                correctAnswer: false
            },
            {
                description: 'Melhorar a interface do usuário',
                correctAnswer: false
            }
        ]
    },
    {
        statment: 'Qual ministério apoia o MPS.BR?',
        tip: 'Está relacionado à inovação e tecnologia',
        answers: [
            {
                description: 'Ministério da Educação',
                correctAnswer: false
            },
            {
                description: 'Ministério da Saúde',
                correctAnswer: false
            },
            {
                description: 'Ministério da Ciência, Tecnologia e Inovações (MCTI)',
                correctAnswer: true
            },
            {
                description: 'Ministério do Meio Ambiente',
                correctAnswer: false
            }
        ]
    },
    {
        statment: 'Qual é a relação entre MPS.BR e CMMI?',
        tip: 'Ambos são modelos de maturidade de processos.',
        answers: [
            {
                description: 'São modelos compatíveis',
                correctAnswer: true
            },
            {
                description: 'São modelos concorrentes',
                correctAnswer: false
            },
            {
                description: 'MPS.BR é uma versão do CMMI',
                correctAnswer: false
            },
            {
                description: ' CMMI é uma versão do MPS.BR ',
                correctAnswer: false
            }
        ]
    },
    {
        statment: 'Qual é o nível mais alto de maturidade no MPS.BR?',
        tip: 'É a primeira letra do alfabeto.',
        answers: [
            {
                description: 'Nível 5',
                correctAnswer: false
            },
            {
                description: 'Nível A',
                correctAnswer: true
            },
            {
                description: 'Nível 1',
                correctAnswer: false
            },
            {
                description: 'Nível C',
                correctAnswer: false
            }
        ]
    },
    {
        statment: 'Quantos níveis de maturidade existem no MPS.BR?',
        tip: 'É um número ímpar entre 5 e 10.',
        answers: [
            {
                description: '5',
                correctAnswer: false
            },
            {
                description: '10',
                correctAnswer: false
            },
            {
                description: '3',
                correctAnswer: false
            },
            {
                description: '7',
                correctAnswer: true
            },
        ]
    },
    {
        statment: 'Qual é o nome do modelo de referência do MPS.BR?',
        tip: 'As iniciais são as mesmas do nome do programa.',
        answers: [
            {
                description: 'MR-MPS',
                correctAnswer: true
            },
            {
                description: 'MR-Software',
                correctAnswer: false
            },
            {
                description: 'MR-Processos',
                correctAnswer: false
            },
            {
                description: 'MR-Qualidade',
                correctAnswer: false
            }
        ]
    },
    {
        statment: 'Qual é a principal diferença entre MPS.BR e ISO/IEC 15504?',
        tip: 'Um é um modelo internacional, o outro é nacional.',
        answers: [
            {
                description: 'ISO/IEC 15504 é mais antigo',
                correctAnswer: false
            },
            {
                description: 'MPS.BR é específico para o Brasil',
                correctAnswer: true
            },
            {
                description: 'MPS.BR é mais caro',
                correctAnswer: false
            },
            {
                description: 'ISO/IEC 15504 é mais simples',
                correctAnswer: false
            }
        ]
    },
    {
        statment: 'Qual é a principal vantagem do MPS.BR para pequenas empresas?',
        tip: 'É mais econômico.',
        answers: [
            {
                description: 'Maior complexidade',
                correctAnswer: false
            },
            {
                description: 'Menor flexibilidade',
                correctAnswer: false
            },
            {
                description: 'Custo mais acessível',
                correctAnswer: true
            },
            {
                description: 'Menor suporte técnico',
                correctAnswer: false
            }
        ]
    },
    {
        statment: 'Qual é a instituição responsável pela certificação MPS.BR?',
        tip: 'É a mesma que criou o modelo.',
        answers: [
            {
                description: 'Softex',
                correctAnswer: true
            },
            {
                description: 'ABNT',
                correctAnswer: false
            },
            {
                description: 'INMETRO',
                correctAnswer: false
            },
            {
                description: 'ANATEL',
                correctAnswer: false
            }
        ]
    },
    {
        statment: 'Qual é o principal benefício do MPS.BR para empresas de software?',
        tip: 'Foca na qualidade e eficiência ao longo do tempo.',
        answers: [
            {
                description: 'Redução imediata de custos',
                correctAnswer: false
            },
            {
                description: 'Aumento de lucros',
                correctAnswer: false
            },
            {
                description: 'Expansão internacional',
                correctAnswer: false
            },
            {
                description: 'Melhoria contínua dos processos',
                correctAnswer: true
            },
        ]
    },
    {
        statment: 'Qual é a relação do MPS.BR com a ISO/IEC12207?',
        tip: 'Ambos são modelos de processos de software.',
        answers: [
            {
                description: 'São concorrentes',
                correctAnswer: false
            },
            {
                description: 'São compatíveis',
                correctAnswer: true
            },
            {
                description: 'MPS.BR é uma versão da ISO/IEC 12207',
                correctAnswer: false
            },
            {
                description: 'ISO/IEC 12207 é uma versão do MPS.BR',
                correctAnswer: false
            }
        ]
    },
    {
        statment: 'Qual é o principal objetivo do nível F no MPS.BR?',
        tip: 'Está relacionado à definição e controle de necessidades.',
        answers: [
            {
                description: 'Desenvolvimento de Software',
                correctAnswer: false
            },
            {
                description: 'Gerenciamento de Requisitos',
                correctAnswer: true
            },
            {
                description: 'Testes de Software',
                correctAnswer: false
            },
            {
                description: 'Manutenção de Software',
                correctAnswer: false
            }
        ]
    },
    {
        statment: 'Qual é a principal característica do nível E no MPS.BR?',
        tip: 'Foca na construção e desenvolvimento de software.',
        answers: [
            {
                description: 'Gerenciamento de Projetos',
                correctAnswer: false
            },
            {
                description: 'Testes de Software',
                correctAnswer: false
            },
            {
                description: 'Manutenção de Software',
                correctAnswer: false
            },
            {
                description: 'Engenharia de Software',
                correctAnswer: true
            },
        ]
    },
    {
        statment: 'Qual é a principal diferença entre MPS.BR e CMMI?',
        tip: 'Um é mais econômico e adaptável para empresas menores.',
        answers: [
            {
                description: 'MPS.BR é mais acessível para pequenas empresas',
                correctAnswer: true
            },
            {
                description: 'CMMI é mais simples',
                correctAnswer: false
            },
            {
                description: 'MPS.BR é mais caro',
                correctAnswer: false
            },
            {
                description: 'CMMI é específico para o Brasil',
                correctAnswer: false
            }
        ]
    },
    {
        statment: 'Qual é o principal foco do nível D no MPS.BR?',
        tip: 'Está relacionado à organização e controle de atividades e qualidade.',
        answers: [
            {
                description: 'Desenvolvimento de Software',
                correctAnswer: false
            },
            {
                description: 'Gerenciamento de Projetos e Qualidade',
                correctAnswer: true
            },
            {
                description: 'Testes de Software',
                correctAnswer: false
            },
            {
                description: 'Manutenção de Software',
                correctAnswer: false
            }
        ]
    },
    {
        statment: 'Qual é a principal vantagem do MPS.BR para empresas de software brasileiras?',
        tip: 'É específico para o contexto brasileiro.',
        answers: [
            {
                description: 'Maior complexidade',
                correctAnswer: false
            },
            {
                description: 'Menor flexibilidade',
                correctAnswer: false
            },
            {
                description: 'Adaptação à realidade nacional',
                correctAnswer: true
            },
            {
                description: 'Menor suporte técnico',
                correctAnswer: false
            }
        ]
    },
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
    },
    populateTips: function(selectedQuestion) {
        const helpStudentsText = document.getElementById('helpStudents');
        helpStudentsText.innerText = selectedQuestion.tip;

        const correct = Math.floor(Math.random() * 51) + 50;
        
        let remaining = 100 - correct;

        for (let i = 0; i < selectedQuestion.answers.length; i++) {

            const idDiv = "percentProbabilty" + (i + 1);

            if (selectedQuestion.answers[i].correctAnswer) {
                document.getElementById(idDiv).innerText = correct;
            } else {

                const incorrect = Math.floor(Math.random() * (remaining + 1));
                remaining -= incorrect;

                document.getElementById(idDiv).innerText = incorrect;
            }

        }

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
        this.handleVisibilityTips();
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
        this.handleVisibilityTips();
    },
    handleVisibilityTips: function () {
        const elements = document.getElementsByClassName('number-tips');
        Array.from(elements).forEach(element => {
            element.textContent = this.tipsLeft;
        });
        const  hasTips = this.tipsLeft > 0
        const divsId = ["containerHelpStudents", "containerHelpAudience"];
        divsId.forEach(x => presentation.setVisible(x, hasTips));
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

        question.populateTips(selectedQuestion);

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