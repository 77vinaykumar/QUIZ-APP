// Quizdata
const quizData = [
    [
        // pipes And Cisterns
        {
            num: 1,
            question: 'Two inlet pipes a and b together can fill a tank in 24min, and it takes 6 min more then one leak is developed in the tank. find the time taken by leak alone to empty the tank.',
            options: [
                '8 hours',
                '4 hours',
                '2 hours',
                '10 hours'
            ],
            answer: '2 hours',
        },
        {
            num: 2,
            question: '  A cistern has two taps attached to it. Tap B can empty the cistern in 45 minutes. But Tap A can fill the cistern in just 30 minutes. Rohit started both taps unknowingly but realized his mistake after 30 minutes. He immediately closed Tap B. Now after this, in how much time will the cistern be filled?',
            options: [
                '10 minutes',
                '30 minutes',
                '25 minutes',
                '20 minutes',
            ],
            answer: '20 minutes',
        },
        {
            num: 3,
            question: ' Pipe R can empty a full tank in 30 hours. But two pipes P and Q can fill a tank in 15 hours and 10 hours respectively. Ram unknowingly opened all three taps. After 2 hours Shyam realized it and closed Pipe R. Due to this mistake how much time more would it take to fill the tank?',
            options: [
                '34 minutes',
                '44 minutes',
                '29 minutes',
                '24 minutes',
            ],
            answer: '24 minutes',
        },
        {
            num: 4,
            question: 'There is a leak at the bottom of a cistern. Due to this it takes 8 hours to fill the cistern. Had there not been a leak, it would take one hour less to fill the cistern. How much time does it take for the leak to completely empty the cistern?',
            options: [
                '66 hours',
                '89 hours',
                '56 hours',
                '44 hours',
            ],
            answer: '56 hours',
        },
        {
            num: 5,
            question: 'A substantial tanker can be filled by two pipes A and B in an hour and 40 minutes separately. How long will it take to fill the tanker from unfilled state if B is utilized for a fraction of the time and A and B fill it together for the other half?',
            options: [
                '15 min',
                '20 min',
                '25 min',
                '30 min',
            ],
            answer: '30 min',
        },
        {
            num: 6,
            question: 'A storage has a hole which would exhaust it in 8 hours. A tap is transformed on which concedes 6 liters a moment into the reservoir and it is currently purged in 12 hours. What number of liters does the reservoir hold?',
            options: [
                '7580 ltr',
                '1580 ltr',
                '5080 ltr',
                '8640 ltr',
            ],
            answer: '8640 ltr',
        },
        {
            num: 7,
            question: 'Two pipes A and B can ill a tank in 36 hours and 45 hours respectively. If both the pipes are opened simultaneously, how much time will be taken to fill the tank?',
            options: [
                '10 hours',
                '15 hours',
                '20 hours',
                '12 hours',
            ],
            answer: '20 hours',
        },
        {
            num: 8,
            question: 'Tap P alone fills a cistern in 2 hours; while tap Q alone fills the same cistern in 3 hours. A new tap R is attached to the bottom of the cistern which can empty the completely filled cistern in 6 hours. Sunny started all three taps together at 9am. When will the tank be full?',
            options: [
                ' 10.45 am',
                ' 10.35 am',
                '10.30 am',
                ' 9.55 am',
            ],
            answer: '10.30 am',
        },
        {
            num: 9,
            question: 'Taps A, B and C are connected to a water tank and the rate of flow of water is 42 ltr/hr, 56 ltr/hr and 48 ltr/hr respectively. A and ill fill the tank while tap C empties the tank. If the three taps are opened simultaneously, the tank gets filled up completely in 16 hours. What is the capacity of the tank?',
            options: [
                '800 ltr',
                '650 ltr',
                '700 ltr',
                '200 ltr',
            ],
            answer: '800 ltr',
        },
        {
            num: 10,
            question: 'A substantial tanker can be filled by two pipes A and B in an hour and 40 minutes separately. How long will it take to fill the tanker from unfilled state if B is utilized for a fraction of the time and A and B fill it together for the other half?',
            options: [
                '15 min',
                '20 min',
                '25 min',
                '30 min',
            ],
            answer: '30 min',
        },
    ],
    [
        // probability
        {
            num: 1,
            question: 'Tickets numbered 1 to 20 are mixed up and then a ticket is drawn at random. What is the probability that the ticket drawn has a number which is a multiple of 3 or 5?',
            options: [
                '20',
                '9/20',
                '9/21',
                '9'
            ],
            answer: '9/20',
        },
        {
            num: 2,
            question: 'Which of the following are possible samples spaces for tossing 2 coins?',
            options: [
                'TT,HH,TH,HT',
                'T, H',
                'H, T, H, T',
                'T, H',

            ],
            answer: 'TT,HH,TH,HT',
        },
        {
            num: 3,
            question: 'A bag contains 2 red, 3 green and 2 blue balls. Two balls are drawn at random. What is the probability that none of the balls drawn is blue?',
            options: [
                '15/22',
                '1/4',
                '10/21',
                '11/18',
            ],
            answer: '10/21',
        },
        {
            num: 4,
            question: 'Which of these cannot be considered a probability of an outcome?',
            options: [
                '0.60',
                '0.20',
                '0.80',
                '0.00'
            ],
            answer: '0.80',
        },
        {
            num: 5,
            question: 'Roll a die one time. Find P(rolling a 4).',
            options: [
                '1/4',
                '1/56',
                '1/6',
                '1/7',
            ],
            answer: '1/6',
        },
        {
            num: 6,
            question: 'In a box, there are 8 red, 7 blue and 6 green balls. One ball is picked up randomly. What is the probability that it is neither red nor green?',
            options: [
                '1/4',
                '1/56',
                '1/16',
                '1/3',
            ],
            answer: '1/3',
        },
        {
            num: 7,
            question: 'What is the probability of getting a sum 9 from two throws of a dice?',
            options: [
                '1/9',
                '1',
                '1/6',
                '5/12',
            ],
            answer: '1/9',
        },
        {
            num: 8,
            question: 'Roll a die one time. Find P(a number greater than 3 or odd).',
            options: [
                '1/4',
                '5/6',
                '16',
                '12',
            ],
            answer: '5/6',
        },
        {
            num: 9,
            question: 'Three unbiased coins are tossed. What is the probability of getting at most two heads?',
            options: [
                '1/4',
                '7/8',
                '6/9',
                '1/2',
            ],
            answer: '7/8',
        },
        {
            num: 10,
            question: 'Roll a die one time. Find P(even number).',
            options: [
                '1/4',
                '1/56',
                '1/6',
                '1/2',
            ],
            answer: '1/2',
        },
    ],
    [
        // Problems On Age
        {
            num: 1,
            question: 'Tickets numbered 1 to 20 are mixed up and then a ticket is drawn at random. What is the probability that the ticket drawn has a number which is a multiple of 3 or 5?',
            options: [
                '20',
                '9/20',
                '9/21',
                '9'
            ],
            answer: '9/20',
        },
        {
            num: 2,
            question: 'Which of the following are possible samples spaces for tossing 2 coins?',
            options: [
                'TT,HH,TH,HT',
                'T, H',
                'H, T, H, T',
                'T, H',

            ],
            answer: 'TT,HH,TH,HT',
        },
        {
            num: 3,
            question: 'A bag contains 2 red, 3 green and 2 blue balls. Two balls are drawn at random. What is the probability that none of the balls drawn is blue?',
            options: [
                '15/22',
                '1/4',
                '10/21',
                '11/18',
            ],
            answer: '10/21',
        },
        {
            num: 4,
            question: 'Which of these cannot be considered a probability of an outcome?',
            options: [
                '0.60',
                '0.20',
                '0.80',
                '0.00'
            ],
            answer: '0.80',
        },
        {
            num: 5,
            question: 'Roll a die one time. Find P(rolling a 4).',
            options: [
                '1/4',
                '1/56',
                '1/6',
                '1/7',
            ],
            answer: '1/6',
        },
        {
            num: 6,
            question: 'In a box, there are 8 red, 7 blue and 6 green balls. One ball is picked up randomly. What is the probability that it is neither red nor green?',
            options: [
                '1/4',
                '1/56',
                '1/16',
                '1/3',
            ],
            answer: '1/3',
        },
        {
            num: 7,
            question: 'What is the probability of getting a sum 9 from two throws of a dice?',
            options: [
                '1/9',
                '1',
                '1/6',
                '5/12',
            ],
            answer: '1/9',
        },
        {
            num: 8,
            question: 'Roll a die one time. Find P(a number greater than 3 or odd).',
            options: [
                '1/4',
                '5/6',
                '16',
                '12',
            ],
            answer: '5/6',
        },
        {
            num: 9,
            question: 'Three unbiased coins are tossed. What is the probability of getting at most two heads?',
            options: [
                '1/4',
                '7/8',
                '6/9',
                '1/2',
            ],
            answer: '7/8',
        },
        {
            num: 10,
            question: 'Roll a die one time. Find P(even number).',
            options: [
                '1/4',
                '1/56',
                '1/6',
                '1/2',
            ],
            answer: '1/2',
        },
    ],
    [
        // Profit And Loss
        {
            num: 1,
            question: 'Tickets numbered 1 to 20 are mixed up and then a ticket is drawn at random. What is the probability that the ticket drawn has a number which is a multiple of 3 or 5?',
            options: [
                '20',
                '9/20',
                '9/21',
                '9'
            ],
            answer: '9/20',
        },
        {
            num: 2,
            question: 'Which of the following are possible samples spaces for tossing 2 coins?',
            options: [
                'TT,HH,TH,HT',
                'T, H',
                'H, T, H, T',
                'T, H',

            ],
            answer: 'TT,HH,TH,HT',
        },
        {
            num: 3,
            question: 'A bag contains 2 red, 3 green and 2 blue balls. Two balls are drawn at random. What is the probability that none of the balls drawn is blue?',
            options: [
                '15/22',
                '1/4',
                '10/21',
                '11/18',
            ],
            answer: '10/21',
        },
        {
            num: 4,
            question: 'Which of these cannot be considered a probability of an outcome?',
            options: [
                '0.60',
                '0.20',
                '0.80',
                '0.00'
            ],
            answer: '0.80',
        },
        {
            num: 5,
            question: 'Roll a die one time. Find P(rolling a 4).',
            options: [
                '1/4',
                '1/56',
                '1/6',
                '1/7',
            ],
            answer: '1/6',
        },
        {
            num: 6,
            question: 'In a box, there are 8 red, 7 blue and 6 green balls. One ball is picked up randomly. What is the probability that it is neither red nor green?',
            options: [
                '1/4',
                '1/56',
                '1/16',
                '1/3',
            ],
            answer: '1/3',
        },
        {
            num: 7,
            question: 'What is the probability of getting a sum 9 from two throws of a dice?',
            options: [
                '1/9',
                '1',
                '1/6',
                '5/12',
            ],
            answer: '1/9',
        },
        {
            num: 8,
            question: 'Roll a die one time. Find P(a number greater than 3 or odd).',
            options: [
                '1/4',
                '5/6',
                '16',
                '12',
            ],
            answer: '5/6',
        },
        {
            num: 9,
            question: 'Three unbiased coins are tossed. What is the probability of getting at most two heads?',
            options: [
                '1/4',
                '7/8',
                '6/9',
                '1/2',
            ],
            answer: '7/8',
        },
        {
            num: 10,
            question: 'Roll a die one time. Find P(even number).',
            options: [
                '1/4',
                '1/56',
                '1/6',
                '1/2',
            ],
            answer: '1/2',
        },
    ]
];

// Connect with HTML

// Homepage content
let userName;
const user_name_btn = document.getElementById("user_name_btn");
const user_name_input = document.getElementById("user_name_input");
const pipesAndCisterns = document.getElementById("prod1");
const probability = document.getElementById("prod2");
const ProblemsOnAge = document.getElementById("prod3");
const ProfitAndLoss = document.getElementById("prod4");
const home_page = document.querySelector(".home_page");

// Rulespage content
const rules_page = document.querySelector(".rules_page");
const rules_next = document.getElementById("rules_next");
const rules_back = document.getElementById("rules_back");

// Quizpage content
const quiz_page = document.querySelector(".quiz_page");
let topic = document.querySelector(".topic");
const result_page = document.querySelector(".result_page")
const quiz_question = document.querySelector("#question");
const optionList = document.querySelector(".quiz_options");
const timer = document.querySelector("#timer");
const nextQuestionBtn = document.getElementById("next_Question");
let question_num = document.querySelector("#question_num");
const total_question = document.getElementById("total_question");
let currentquestion = 0;


// Resultpage content
const goToResultBtn = document.querySelector(".goToResults");
const correctAnswer = quiz_page.querySelector(".score");
const inCorrectAnswer = result_page.querySelector("#inCorrect");
const correct = result_page.querySelector('#correct');
const attempt = result_page.querySelector("#attempt");
const tQ = result_page.querySelector("#tQ");
const percentage = result_page.querySelector("#percentage");
const timeTaken = result_page.querySelector("#timeTaken");
let timeValue = 10;
let timeStartHere;
let playerName = document.querySelector("#playerName");
let score = 0;
let wrongAnswer = 0;
let countVAl;
let totalTime;
let countStart = 0;
let tot;
const startAgainBtn = result_page.querySelector("#startAgain");
const homeBtn = result_page.querySelector('#home');


// Name function
noname();

function noname() {
    user_name_btn.addEventListener("click", () => {
        userName = user_name_input.value;
        playerName.innerHTML = userName;
    });
    if (userName == undefined) {
        userName = "No name";
        playerName.innerHTML = userName;
    };

};


// Catogories
pipesAndCisterns.addEventListener("click", () => {
    countVAl = 0;
    topic.innerHTML = "Pipes and Cisterns";
    homeToRules();
    rulesToQuiz();
});

probability.addEventListener("click", () => {
    countVAl = 1;
    topic.innerHTML = "Probability";
    homeToRules();
    rulesToQuiz();
});
ProblemsOnAge.addEventListener("click", () => {
    countVAl = 2;
    topic.innerHTML = "Problems on age";
    homeToRules();
    rulesToQuiz();
});

ProfitAndLoss.addEventListener("click", () => {
    countVAl = 3;
    topic.innerHTML = "Profit and loss";
    homeToRules();
    rulesToQuiz();
});


// Home to rules function
function homeToRules() {
    home_page.classList.add("hidden");
    rules_page.classList.add("active");
}

// Rules to quiz and rules to home function
function rulesToQuiz() {
    rules_next.addEventListener("click", () => {
        rules_page.classList.remove("active");
        quiz_page.classList.add("active");
        questionToResul();
    });
    rules_back.addEventListener("click", () => {
        home_page.classList.remove("hidden");
        rules_page.classList.remove("active");
    });
};


// Quiz to result function
function questionToResul() {
    buttonInterchangeAgain();
    setTimer(timeValue);
    totTime(countStart);
    getQuestion();
    nextQuestionBtn.addEventListener("click", () => {
        nextQues();
    });
    goToResultBtn.addEventListener("click", () => {
        clearInterval(timeStartHere);
        clearInterval(totalTime);
        quiz_page.classList.remove("active");
        result_page.classList.add("active");
        result();
    });
}


// Getting question here
function getQuestion() {
    let data = quizData[countVAl];
    let currentQuizData = data[currentquestion];

    // Getting pagination here
    pagination();

    quiz_question.innerHTML = `<h3>${currentQuizData.question}</h3>`;

    let optionTag = '<div class="option">' + currentQuizData.options[0] + '<span></span></div>'
        + '<div class="option">' + currentQuizData.options[1] + '<span></span></div>'
        + '<div class="option">' + currentQuizData.options[2] + '<span></span></div>'
        + '<div class="option">' + currentQuizData.options[3] + '<span></span></div>';

    optionList.innerHTML = optionTag


    // Add attributes to all option
    const option = optionList.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");

    };

    // pagination function
    function pagination() {
        total_question.innerHTML = data.length;
        question_num.innerHTML = currentQuizData.num;
    };

};

// Check answer and disable option
function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswerForQuiz = quizData[countVAl][currentquestion].answer;
    let selectOneAns = optionList.children.length;
    if (userAnswer == correctAnswerForQuiz) {
        score++;
        correctAnswer.innerHTML = score;
        answer.classList.remove("option");
        answer.classList.add("correct");
    } else {
        wrongAnswer++;
        answer.classList.remove("option");
        answer.classList.add("wrong");
        for (let i = 0; i < selectOneAns; i++) {
            if (optionList.children[i].textContent == correctAnswerForQuiz) {
                optionList.children[i].setAttribute("class", "correct");
            }

        }
    };

    // Add classList disable
    for (let i = 0; i < selectOneAns; i++) {
        optionList.children[i].classList.add("disable");
    }
};

// Total timer function
function totTime(count) {
    totalTime = setInterval(totalTimeStarts, 1000);
    function totalTimeStarts() {
        count++;
        tot = count;
    };
};

// Next question function
function nextQues() {
    if (currentquestion < quizData[countVAl].length - 1) {
        clearInterval(timeStartHere);
        currentquestion++;;
        getQuestion();
        setTimer(timeValue);
        if (currentquestion === quizData[countVAl].length - 1) {
            buttonInterchange();
        };
    };
    
};

// Timer for each question
function setTimer(time) {
    timeStartHere = setInterval(timeStart, 1000);
    function timeStart() {
        timer.innerHTML = time;
        if (time < 10) {
            timer.innerHTML = '0' + time;
        };
        if (time == 0) {
            if (currentquestion >= quizData[countVAl].length - 1) {
                end();
            } else {
                clearInterval(timeStartHere);
                currentquestion++;
                getQuestion();
                setTimer(timeValue);
            }

        };
        time--;
    };
};


// button interchange here
function buttonInterchange() {
    nextQuestionBtn.classList.add("hidden");
    goToResultBtn.classList.add("active");
};

// button interchange here
function buttonInterchangeAgain() {
    nextQuestionBtn.classList.remove("hidden");
    goToResultBtn.classList.remove("active");
};

// End function here
function end() {
    quiz_page.classList.remove("active");
    result_page.classList.add("active");
    result();
};

// Result function here
function result() {
    // Incorrect answer
    inCorrectAnswer.innerHTML = wrongAnswer;
    if (wrongAnswer < 10) {
        inCorrectAnswer.innerHTML = `0${wrongAnswer}`;
    };

    // Correct answer
    correct.innerHTML = score;
    if (score < 10) {
        correct.innerHTML = `0${score}`;
    };

    // Attemt question
    if ((score + wrongAnswer) < 10) {
        attempt.innerHTML = `0${score + wrongAnswer}`;
    } else {
        attempt.innerHTML = score + wrongAnswer;
    }

    // Total question
    if (quizData[countVAl].length < 10) {
        tQ.innerHTML = `0${quizData[countVAl].length}`;
    } else {
        tQ.innerHTML = quizData[countVAl].length;
    };

    // Percentage 
    let per = `${(score / quizData[countVAl].length) * 100}%`;
    percentage.innerHTML = per;

    // Total time taken
    if (tot < 10) {
        timeTaken.innerHTML = `0${tot}`;
    } else {
        timeTaken.innerHTML = tot;
    };
};

// startAgain function
startAgainBtn.addEventListener("click", () => {
    location.reload();
});

// homeBtn function
homeBtn.addEventListener("click", () => {
    location.reload();
});
