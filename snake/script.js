const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controls = document.querySelectorAll(".controls i");

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 5;
let velocityX = 0, velocityY = 0;
let snakeBody = [[snakeX, snakeY]]; // Initialize the snake body with a starting segment
let setIntervalid;
let score = 0;

let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `En iyi Puan: ${highScore}`;

const updateFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
};

const handleGameOver = () => {
    clearInterval(setIntervalid);
    alert("Kaybettin! Tekrar oynamak için tamam tuşuna bas...");
    location.reload();
};

const changeDirection = (e) => {
    if (e.key === "ArrowUp" && velocityY !== 1) {
        velocityX = 0;
        velocityY = -1;
    } else if (e.key === "ArrowDown" && velocityY !== -1) {
        velocityX = 0;
        velocityY = 1;
    } else if (e.key === "ArrowLeft" && velocityX !== 1) {
        velocityX = -1;
        velocityY = 0;
    } else if (e.key === "ArrowRight" && velocityX !== -1) {
        velocityX = 1;
        velocityY = 0;
    }
};

// Butonlarla yön değiştirme
controls.forEach(button => 
    button.addEventListener("click", () => changeDirection({ key: button.dataset.key }))
);

const initGame = () => {
    if (gameOver) return handleGameOver();
    
    let html = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

    if (snakeX === foodX && snakeY === foodY) {
        updateFoodPosition();
        score++;
        highScore = score >= highScore ? score : highScore;
        localStorage.setItem("high-score", highScore);
        scoreElement.innerText = `Puan: ${score}`;
        highScoreElement.innerText = `En iyi Puan: ${highScore}`;
    }

    snakeX += velocityX;
    snakeY += velocityY;

    // Yılanın gövdesini güncelle
    snakeBody.unshift([snakeX, snakeY]); 
    if (snakeBody.length > score + 1) snakeBody.pop(); // Ensure the initial segment is kept

    // Duvara çarpma kontrolü
    if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
        gameOver = true;
    }

    // Yılanın kendine çarpma kontrolü
    for (let i = 1; i < snakeBody.length; i++) {
        if (snakeBody[i][0] === snakeX && snakeBody[i][1] === snakeY) {
            gameOver = true;
        }
    }

    // Yılanı ekrana çizme
    snakeBody.forEach((part, index) => {
        html += `<div class="${index === 0 ? "head" : "body"}" style="grid-area: ${part[1]} / ${part[0]}"></div>`;
    });

    playBoard.innerHTML = html;
};

updateFoodPosition();
setIntervalid = setInterval(initGame, 100);
document.addEventListener("keyup", changeDirection);