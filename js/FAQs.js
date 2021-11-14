window.addEventListener("load", () => {
    let translateElement = document.getElementById("google_translate_element");
    let designSquare = document.querySelector(".design-square1");
     if(translateElement.innerHTML === ""){
         designSquare.style.height = "105vw";
         designSquare.style.maxHeight = "105vw";
         designSquare.style.minHeight = "105vw";
         designSquare.style.left ="50vw";
         designSquare.style.height = "200vw"
         designSquare.style.transform = "translate(-50%, 0)";
     } else {
         designSquare.style.height = "105vw";
         designSquare.style.maxHeight = "105vw";
         designSquare.style.minHeight = "105vw";
        designSquare.style.transform = "translate(-59%, 0)";
     }
})

let questions = document.querySelectorAll(".question img");
let answers = document.querySelectorAll(".answer");

let questionExpandBtnArray = Array.from(questions);
let answersArray = Array.from(answers);

questionExpandBtnArray.map((expandBtn,index) => {
    expandBtn.addEventListener("click", () => {
        answersArray[index].classList.toggle("show");
    })
})