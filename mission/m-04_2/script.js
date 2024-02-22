class Quiz {
  constructor(question, answer, options){
    this.question = question;
    this.answer = answer;
    this.options = options;
  }
}

const QuizArray = [
  {question: '3 + 10 = ?',
    answer: 13,
    options: [310, 13, 14, 103]
  },
  {question: '5 * 9 = ?',
    answer: 45,
    options: [40, 45, 50, 55]
  },
  {question: '7 * 7 + 100 = ?',
    answer: 149,
    options: [49100, 149, 49, 300]
  }
]

const QuizBox = document.querySelector('.quiz-container');
let currentQuestion = 0;
let quiz;

const generateQuiz = (idx) => {
  quiz = QuizArray[idx];
  QuizBox.innerHTML =`
    <main class='quiz'>
      <header class='question'>
        ${quiz.question}
      </header>
      <section class='options'>
        ${quiz.options.map(option => 
          `<button class='option' onclick='selectAnswer("${option}")'>${option}</button>`).join('')
        }
      </section>
    </main>
  `
}

const selectAnswer = (answer) => {
  const body = document.getElementsByTagName('body');
  const options = document.querySelectorAll('.option');
  options.forEach(option => String(quiz.answer) === option.innerText ? option.classList.add('correct') : option.classList.add('incorrect'));
  console.log(options);
  if (quiz.answer === parseInt(answer, 10)){
    body[0].classList.add('correct');
  } else {
    body[0].classList.add('incorrect');
  }   
  

  if(currentQuestion < QuizArray.length - 1) {
    const quizBox = document.querySelector('.quiz');
  
    const btnSection = document.createElement('section');
    btnSection.classList.add('btn-section');
    const nextBtn = document.createElement('button');
    nextBtn.classList.add('next');
    nextBtn.innerText = '다음 문제';
    nextBtn.addEventListener('click', nextQuestion);
    
    btnSection.appendChild(nextBtn);
    quizBox.appendChild(btnSection);
  }
  
}

const nextQuestion = () => {
  const body = document.getElementsByTagName('body');
  if (body[0].classList.contains('correct')) {
    body[0].classList.remove('correct');
  } else if(body[0].classList.contains('incorrect')) {
    body[0].classList.remove('incorrect');
  }
  
  generateQuiz(++currentQuestion);

}

generateQuiz(currentQuestion);