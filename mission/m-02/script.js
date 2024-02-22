
let playerWinCount = 0;
let computerWinCount = 0;
let totalGameCount = 0;
let resultMessage = '';
let errorMsg = '';
let isStart = false, isFinished = false;
const rockSissorPaper = ['sissor', 'rock', 'paper'];

const playerWincountSection = document.getElementById('user-score');
const computerWincountSection = document.getElementById('computer-score');

const gameCountInputSection = document.querySelector('.input-game-count');
const remainingGameCountSection = document.querySelector('.remaining-game');
const gameErrorMsgSection = document.querySelector('.error-message');
const resultMessageSection = document.querySelector('.result');
const restartBtnSection = document.querySelector('.restart-btn-section');

const updateScoreView = () => {
  playerWincountSection.innerHTML = `
    <b>플레이어</b>
    <p>${playerWinCount}</p>
  `
  computerWincountSection.innerHTML = `
    <b>컴퓨터</b>
    <p>${computerWinCount}</p>
  `
}

const showErrorMessage = (message) => {
  errorMsg = message;
  gameErrorMsgSection.innerHTML = `${errorMsg}`
  gameErrorMsgSection.style.display = 'flex';
}


const gameStartBtn = document.getElementById('game-start-btn').addEventListener('click', () => {
  const userInputGameCount = document.getElementById('total-game-count').value;
  document.getElementById('total-game-count').value = '';
  isStart = true;
  if(isNaN(userInputGameCount)) {
    showErrorMessage('숫자만 입력 가능합니다.');
    return ;
  }else {
    totalGameCount = parseInt(userInputGameCount, 10)
    gameErrorMsgSection.style.display = 'none';
    resultMessageSection.style.display = 'block';
    remainingGameCountSection.style.display = 'flex';
    remainingGameCountSection.innerHTML = `
      <b>남은 횟수 :</b> 
      <p>${totalGameCount}</p>
    `
    gameCountInputSection.style.display = 'none';
  };
})

const clickOption = (userChoose) => {
  if (!isStart) {
    showErrorMessage('게임 시작을 해주세요');
    return ;
  }
  
  if(totalGameCount === 0 && isFinished) {
    showErrorMessage('게임 횟수를 모두 사용했습니다.');
    return ;
  }
  totalGameCount -= 1;
  remainingGameCountSection.innerHTML = `
      <b>남은 횟수 :</b> 
      <p>${totalGameCount}</p>
    `
  const computerChoose = Math.floor(Math.random() * 3);
  
  if (userChoose === computerChoose) {
    resultMessage = 'DRAW';
  } else {
    switch (userChoose) {
      case 0 : {
        if(computerChoose === 1) {
          resultMessage = 'YOU LOSE';
        } else if(computerChoose === 2) {
          resultMessage = 'YOU WIN';
        }
        break;
      }
  
      case 1 : {
        if(computerChoose === 0) {
          resultMessage = 'YOU WIN';
        } else if(computerChoose === 2) {
          resultMessage = 'YOU LOSE';
        }
        break;
      }
  
      case 2: {
        if(computerChoose === 0) {
          resultMessage = 'YOU LOSE';
        } else if(computerChoose === 1) {
          resultMessage = 'YOU WIN';
        }
        break;
      }
      default: break;
    }
  }
  const resultClassMap = {
    'YOU WIN': () => {
      if (resultMessageSection.classList.contains('lose')) resultMessageSection.classList.remove('lose');
      if (resultMessageSection.classList.contains('draw')) resultMessageSection.classList.remove('draw');
      resultMessageSection.classList.add('win');
    },
    'YOU LOSE': () => {
      if (resultMessageSection.classList.contains('win')) resultMessageSection.classList.remove('win');
      if (resultMessageSection.classList.contains('draw')) resultMessageSection.classList.remove('draw');
      resultMessageSection.classList.add('lose');
    },
    'DRAW': () => {
      if (resultMessageSection.classList.contains('lose')) resultMessageSection.classList.remove('lose');
      if (resultMessageSection.classList.contains('win')) resultMessageSection.classList.remove('win');
      resultMessageSection.classList.add('draw');
    },
  }
  if(totalGameCount > 0 )  {
    resultMessage.includes('YOU WIN')? playerWinCount += 1 : computerWinCount += 1;
    updateScoreView();
    resultMessageSection.innerHTML = `${resultMessage}`;
  } else {
    isFinished = true;
    if (playerWinCount === computerWinCount) resultMessage = 'DRAW';
    else playerWinCount > computerWinCount ? resultMessage = 'YOU WIN' : resultMessage = 'YOU LOSE';
    resultMessageSection.innerHTML = `
      Final Result: ${resultMessage}
    `;
    restartBtnSection.style.display = 'flex';
  }
  resultClassMap[resultMessage]();
}

const restartGame = () => {
  isStart = false;
  isFinished = false;
  resultMessageSection.innerHTML = '';
  errorMsg = '';
  gameErrorMsgSection.innerHTML = `${errorMsg}`
  playerWinCount = 0;
  computerWinCount = 0;
  updateScoreView();

  gameCountInputSection.style.display = 'flex';
  remainingGameCountSection.style.display = 'none'; 
  resultMessageSection.style.display = 'none';
  restartBtnSection.style.display = 'none';
}
updateScoreView();