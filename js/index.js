let expandBtn1 = document.getElementById("expand-qestion-1");
let answer1 = document.getElementById("answer1")

expandBtn1.addEventListener("click", () => {
    answer1.classList.toggle("show");
})