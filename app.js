const quizData = [
    {
        question: "What is the capital of France?",
        optionA: "Berlin",
        optionB: "Madrid",
        optionC: "Paris",
        optionD: "Lisbon",
        answer: "C" // Correct option
    },
    {
        question: "Which language is used for web development?",
        optionA: "Python",
        optionB: "JavaScript",
        optionC: "C++",
        optionD: "Java",
        answer: "B"
    },
    {
        question: "What does HTML stand for?",
        optionA: "Hyper Text Markup Language",
        optionB: "Home Tool Markup Language",
        optionC: "Hyperlinks and Text Markup Language",
        optionD: "Hyperlinking Text Mark Language",
        answer: "A"
    },
    {
        question: "Which planet is known as the Red Planet?",
        optionA: "Earth",
        optionB: "Mars",
        optionC: "Jupiter",
        optionD: "Saturn",
        answer: "B"
    },
    {
        question: "What is the largest ocean on Earth?",
        optionA: "Atlantic Ocean",
        optionB: "Indian Ocean",
        optionC: "Arctic Ocean",
        optionD: "Pacific Ocean",
        answer: "D"
    },
    {
        question: "Who wrote 'Hamlet'?",
        optionA: "Charles Dickens",
        optionB: "J.K. Rowling",
        optionC: "William Shakespeare",
        optionD: "Mark Twain",
        answer: "C"
    },
    {
        question: "What is the speed of light?",
        optionA: "300,000 km/s",
        optionB: "150,000 km/s",
        optionC: "250,000 km/s",
        optionD: "350,000 km/s",
        answer: "A"
    },
    {
        question: "Who painted the Mona Lisa?",
        optionA: "Vincent van Gogh",
        optionB: "Leonardo da Vinci",
        optionC: "Pablo Picasso",
        optionD: "Claude Monet",
        answer: "B"
    },
    {
        question: "What is the smallest planet in our solar system?",
        optionA: "Venus",
        optionB: "Mars",
        optionC: "Mercury",
        optionD: "Neptune",
        answer: "C"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        optionA: "Oxygen",
        optionB: "Gold",
        optionC: "Silver",
        optionD: "Iron",
        answer: "A"
    }
];

const quiz = document.querySelector('#quiz');
const answersEls = document.querySelectorAll('.answer');
const questionEl = document.querySelector('#question');
const aText = document.querySelector('#a-text');
const bText = document.querySelector('#b-text');
const cText = document.querySelector('#c-text');
const dText = document.querySelector('#d-text');
const submitBtn = document.querySelector('#submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    aText.innerText = currentQuizData.optionA;
    bText.innerText = currentQuizData.optionB;
    cText.innerText = currentQuizData.optionC;
    dText.innerText = currentQuizData.optionD;
}

function deselectAnswers() {
    answersEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answersEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer === quizData[currentQuiz].answer.toLowerCase()) {
        score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `<h2>You answered ${score} out of ${quizData.length} questions correctly.</h2>
        <button onclick="location.reload()">Reload</button>`;
    }
});
















        // submitBtn.addEventListener('click', () => {
        //     const answer = getSelected();
        //     if (answer) {
        //         if (answer.toUpperCase() === quizData[currentQuiz].answer) {
        //             score++;
        //         }
        //         currentQuiz++;
        //         if (currentQuiz < quizData.length) {
        //             loadQuiz();
        //         } else {
        //             quiz.innerHTML = `<h2>You answered ${score} out of ${quizData.length} questions correctly.</h2>`;
        //         }
        //     }
        // });