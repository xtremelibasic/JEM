let questions = document.querySelectorAll(".question img");
let answers = document.querySelectorAll(".answer");

let questionExpandBtnArray = Array.from(questions);
let answersArray = Array.from(answers);

questionExpandBtnArray.map((expandBtn,index) => {
    expandBtn.addEventListener("click", () => {
        answersArray[index].classList.toggle("show");
    })
})

let news = Array.from(document.querySelectorAll(".news"));
let lastIndex = news.length - 1;
news.map((newsItem,index) => {
    if(index === lastIndex){
        newsItem.style.display = "inline-block"
    } else {
        newsItem.style.display = "none"
    }
    let chevrons = Array.from(document.querySelectorAll('.chevron'));
    let possibleIndexes = [0,1,2,3,4,5,6,7,8,9];
    chevrons.map(chevron => {
        chevron.addEventListener("click", () => {
            if(chevron.classList.contains("previousChevron") || chevron.classList.contains("backChevron")){
                for(let i = 1; i < news.length; i++){
                    if(index === lastIndex-i ){
                        newsItem.style.display = "inline-block"
                    } else {
                        newsItem.style.display = "none"
                    }
                }
            }
           
            if(chevron.classList.contains("nextChevron") || chevron.classList.contains("forwardChevron")){
                console.log("clicked")
                let nextIndex;
                if(newsItem.style.display === "inline-block"){
                        let currentIndex = index;
                        nextIndex = currentIndex + 1;
                }
                if(nextIndex >= news.length){
                   console.log("end of carousel")
                } else {
                    
                    if(index < nextIndex){
                        newsItem.style.display = "none"
                    } else{
                        newsItem.style.display = "inline-block"
                    }
                }
                
            }
        })
    })
    
})


//Call to action
document.getElementById("call-to-action-btn").addEventListener("click", function(){
    createComingSoonModal();
})

function createComingSoonModal(){
    if(modal.offsetHeight < 10){
        modal.innerHTML = "";   
        let closeBtn = document.createElement("div");
        closeBtn.innerHTML = "<i class='fas fa-times'></i>";
        closeBtn.classList.add("close");
        modal.prepend(closeBtn)
        closeBtn.addEventListener("click", function(){
            modal.classList.remove("show");
        })

        let modalContent = document.createElement("div");
        modalContent.innerHTML = "<h2>This feature is coming soon</h2>"
        modalContent.classList.add("content");
        modal.append(modalContent)

        modal.style.width = "20rem";
        modal.style.height = "15rem";
        modal.style.left = "50%";
        modal.style.top = "50%";
        modal.style.transform = "translate(-50%, -50%)";
        modal.style.zIndex = "150";

        modalContent.style.padding = "0";
        modalContent.style.position = "relative";
        modalContent.style.top = "50%";
        modalContent.style.transform = "translate(0, -50%)";

        modal.classList.add("show")
    }
}