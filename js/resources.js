window.addEventListener("load", () => {
    let translateElement = document.getElementById("google_translate_element");
    let designSquare = document.querySelector(".design-square1");
     if(translateElement.innerHTML === ""){
         designSquare.style.left ="50vw";
         designSquare.style.height = "412vw"
         designSquare.style.transform = "translate(-50%, 0)";
     } else {
         designSquare.style.height = "412vw"
        designSquare.style.transform = "translate(-59%, 0)";
     }
})