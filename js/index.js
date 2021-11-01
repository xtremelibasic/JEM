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
