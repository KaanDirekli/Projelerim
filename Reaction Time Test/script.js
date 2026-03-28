const box = document.getElementById("box");
const info = document.getElementById("info");
const result = document.getElementById("result");

let startTime = 0;
let correctKey = "";
let active = false;

function startTest() {
    box.style.display = "none";
    info.textContent = "wait..."
    result.textContent = "";
    active = false;

    const delay = Math.random() * 3000 + 1000;
    setTimeout(() => {
        const isRed = Math.random() < 0.5;

        box.style.background = isRed ? "red" : "blue";
        correctKey = isRed ? "a" : "l";

        box.style.display = "block";
        startTime = Date.now();
        active = true;
        info.textContent = "Press the button!"
    }, delay);
}
document.addEventListener("keydown", (e) => {
    if (!active) return;

    const reactionTime = Date.now() - startTime;

    if (e.key.toLowerCase() === correctKey) {
        result.textContent = `True! Reaction time: ${reactionTime} ms`;

    } else {
        result.textContent = "Wrong key!";
    }

    active = false;
    setTimeout(startText, 2000);
});

startTest();