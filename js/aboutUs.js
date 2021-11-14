
window.addEventListener("load", () => {
    let translateElement = document.getElementById("google_translate_element");
    let designSquare = document.querySelector(".design-square1");
     if(translateElement.innerHTML === ""){
         designSquare.style.height = "230vw";
         designSquare.style.maxHeight = "230vw";
         designSquare.style.minHeight = "230vw";

         designSquare.style.left ="50vw";
         designSquare.style.transform = "translate(-50%, 0)";
     } else {
         designSquare.style.height = "238vw";
         designSquare.style.maxHeight = "238vw";
         designSquare.style.minHeight = "238vw";
designSquare.style.transform = "translate(-61%, 0)";
     }
})

