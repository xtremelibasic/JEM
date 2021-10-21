let expandBtn1 = document.getElementById("expand-qestion-1");
let answer1 = document.getElementById("answer1");
let expandBtn2 = document.getElementById("expand-qestion-2");
let answer2 = document.getElementById("answer2");
let expandBtn3 = document.getElementById("expand-qestion-3");
let answer3 = document.getElementById("answer3");
let expandBtn4 = document.getElementById("expand-qestion-4");
let answer4 = document.getElementById("answer4");
let expandBtn5 = document.getElementById("expand-qestion-5");
let answer5 = document.getElementById("answer5");
let expandBtn6 = document.getElementById("expand-qestion-6");
let answer6 = document.getElementById("answer6")

expandBtn1.addEventListener("click", () => {
    answer1.classList.toggle("show");
})

expandBtn2.addEventListener("click", () => {
    answer2.classList.toggle("show");
})

expandBtn3.addEventListener("click", () => {
    answer3.classList.toggle("show");
})

expandBtn4.addEventListener("click", () => {
    answer4.classList.toggle("show");
})

expandBtn5.addEventListener("click", () => {
    answer5.classList.toggle("show");
})

expandBtn6.addEventListener("click", () => {
    answer6.classList.toggle("show");
})