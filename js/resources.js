window.addEventListener("load", () => {
    let translateElement = document.getElementById("google_translate_element");
    translateElement.style.position = "absolute";
     translateElement.style.top = "5.4vw";
     translateElement.style.left = "17vw";
     translateElement.style.zIndex = "100";
    let designSquare = document.querySelector(".design-square1");

     if(translateElement.innerHTML === ""){
         designSquare.style.left ="50vw";
         designSquare.style.height = "385vw"
         designSquare.style.transform = "translate(-50%, 0)";
     } else {
         designSquare.style.height = "385vw";
        designSquare.style.transform = "translate(-60%, 0)";
     }
})