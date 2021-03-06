window.addEventListener("load", () => {
     let circle1 = document.querySelector(".design-circle1");
     let circle2 = document.querySelector(".design-circle2");
     let square1 = document.querySelector(".design-square1");
     let square2 = document.querySelector(".design-square2");
     let homepage = document.querySelector(".homepage");
     let primaryNavigation = document.getElementById("primary-navigation");
     console.log(primaryNavigation)
     let translateElement = document.getElementById("google_translate_element");
    translateElement.style.position = "absolute";
     translateElement.style.top = "5.4vw";
     translateElement.style.left = "17vw";
     translateElement.style.zIndex = "100";
    if(translateElement.innerHTML === ""){
        primaryNavigation.top = "-6.25vw";
        primaryNavigation.left = "13vw"
        circle1.style.top = "32.8vw"; 
        circle1.style.left = "-6.25vw";
        circle2.style.top = "32.8vw";
        circle2.style.left = "54.1vw";
        square1.style.top = "0";
        square1.style.left = "50vw";
        square2.style.top = "66.4vw";
        square2.style.left = "50vw";
        square2.style.height = "40vw";
        homepage.style.left = "0vw";
        homepage.style.top = "8vw";
    } else {
        // primaryNavigation.top = "-20vw";
        // primaryNavigation.left = "40vw !important";
        circle1.style.top = "34vw"; 
        circle1.style.left = "-16vw";
        circle2.style.top = "34vw"
        circle2.style.left = "45vw";
        // square1.style.top = "5vw";
        square1.style.left = "41vw";
        square2.style.top = "66vw"
        square2.style.left = "41vw";
        square2.style.height = "21vw";
        homepage.style.top = "9vw";
        homepage.style.left = "-9vw";
    }
    
})
// Index page translation
// let introHeading = document.querySelector(".intro h1");
// let introBody = document.querySelector(".intro p");
// let importantPrompt = document.querySelector(".important-prompt");
// let callToActionMessage = document.querySelector(".call-to-action p");
// let callToActionButton = document.querySelector(".call-to-action button");
// //Should I translate the news section
// let newsHeading = document.querySelector(".news-container h2");
// let newsItem1;
// let FAQHeading = document.querySelector(".faq-container h2");
// let questionsValues = document.querySelectorAll(".question p");
// let questionsValuesArray = Array.from(questionsValues);


// let answersValues = document.querySelectorAll(".answer p");
// let answersValuesArray = Array.from(answersValues);
// answersValuesArray.map(answer => {
//     // console.log(answer.innerHTML)
// })

// setInterval( function(){
//     let language = localStorage.getItem("languagePreference");
//     console.log(language)
//     if(language === "Yoruba"){
//         introHeading.innerHTML = "Tani awa";
//         introBody.innerHTML = "<strong> Just Education Matters, CIC </strong>j??? ile-i?????? tuntun ti i???eto ti a ???eto lati koju aw???n aidogba ni eto-???k??? ni pataki ni agbegbe aw???n imukuro ile-iwe.";
//         importantPrompt.innerHTML = "A ???e atil???yin aw???n obi lati ???e atil???yin fun aw???n ???m??? w???n nipa fifun ik???k???, im???ran, agbawi ati atil???yin nipa lilo ???na ???i???e lati mu aw???n abajade eto-???k??? dara si fun aw???n ???m???de";
//         callToActionMessage.innerHTML = "It???s???na Ib???r??? wa yoo ???e afihan ??? si alaye b???tini, aw???n i?????? ti a pese ati aw???n olubas???r??? b???tini miiran lati ???e atil???yin fun ???.";
//         callToActionButton.innerHTML = "B???r??? It???s???na";
//         newsHeading.innerHTML = "Iroyin";
//         FAQHeading.innerHTML = "Awon ibeere ti awon eniyan saaba ma n beere";
//         questionsValuesArray.map((question,index) => {
//            if(index === 0){
//                question.innerHTML = "Kini yoo ??????l??? ti ???m??? mi ko ba ni il???siwaju ti a nireti p???lu atil???yin ti ile-iwe ti fi sii?"
//            } else if(index === 1){
//                question.innerHTML = "Kini ???k???, ilera ati igbelew???n it???ju?"
//            } else if (index === 2){
//                question.innerHTML = "Bawo ni MO ???e gba eto-???k???, ilera ati igbelew???n it???ju?"
//            } else if(index === 3){
//                question.innerHTML = "Kini o le ???e ti igbim??? ba k??? lati ???e igbelew???n nilo EHC kan?";
//            } else if(index === 4){
//                question.innerHTML = "Kini yoo ??????l??? ti igbim??? ba pinnu lati ???e igbelew???n aw???n iwulo EHC kan?"
//            } else if(index === 5){
//                question.innerHTML = "Kini o y??? ki o nireti ni kete ti igbim??? ti ???e igbelew???n aw???n iwulo EHC?"
//            }
//         })
//     } else if ( language === "Spanish"){
//         introHeading.innerHTML = "Quienes somos";
//         introBody.innerHTML = "<strong> Just Education Matters, CIC </strong> CIC es una empresa de reciente creaci??n creada para abordar las desigualdades en la educaci??n, especialmente en el ??mbito de las exclusiones escolares.";
//         importantPrompt.innerHTML = "Apoyamos a los padres para que apoyen a sus hijos brind??ndoles capacitaci??n, asesoramiento, defensa y apoyo utilizando un enfoque proactivo para mejorar los resultados educativos de los ni??os.";
//         callToActionMessage.innerHTML = "Nuestra gu??a de inicio le indicar?? informaci??n clave, servicios que brindamos y otros contactos clave para ayudarlo.";
//         callToActionButton.innerHTML = "Gu??a de inicio";
//         newsHeading.innerHTML = "Noticias";
//         FAQHeading.innerHTML = "Preguntas frecuentes";
//         questionsValuesArray.map((question,index) => {
//            if(index === 0){
//                question.innerHTML = "??Qu?? sucede si mi hijo no est?? logrando el progreso esperado con el apoyo que la escuela ha puesto en marcha?"
//            } else if(index === 1){
//                question.innerHTML = "??Qu?? es la evaluaci??n de la educaci??n, la salud y la atenci??n?"
//            } else if (index === 2){
//                question.innerHTML = "??C??mo obtengo una evaluaci??n de educaci??n, salud y atenci??n?"
//            } else if(index === 3){
//                question.innerHTML = "??Qu?? puede hacer si el consejo se niega a realizar una evaluaci??n de necesidades de EHC?";
//            } else if(index === 4){
//                question.innerHTML = "??Qu?? sucede si el consejo decide realizar una evaluaci??n de necesidades de EHC?"
//            } else if(index === 5){
//                question.innerHTML = "??Qu?? debe esperar una vez que el consejo haya realizado la evaluaci??n de necesidades de EHC?"
//            }
//         })
//     } else if (language === "Somali"){
//         introHeading.innerHTML = "Yaanu nahay";
//         introBody.innerHTML = "<strong> Just Education Matters, CIC </strong> CIC waa shirkad dhawaan la aasaasay oo loo asaasay inay wax ka qabato sinnaan la'aanta waxbarashada gaar ahaan dhinaca ka-reebitaanka dugsiga.";
//         importantPrompt.innerHTML = "Waxaan ku taageernaa waalidiinta inay taageeraan caruurtooda annagoo siinaya tababar, talo, u doodid iyo taageero iyadoo la adeegsanayo hab firfircoon si loo hagaajiyo natiijooyinka waxbarasho ee carruurta";
//         callToActionMessage.innerHTML = "Hagahayada bilawga ah ayaa ku dhejin doona macluumaadka muhiimka ah, adeegyada aanu bixino iyo xidhiidhada kale ee muhiimka ah si ay kuu taageeraan.";
//         callToActionButton.innerHTML = "Bilow Hagaha";
//         newsHeading.innerHTML = "News Feed";
//         FAQHeading.innerHTML = "Su'aalaha Inta Badan La Isweydiiyo";
//         questionsValuesArray.map((question,index) => {
//            if(index === 0){
//                question.innerHTML = "??Maxaa dhacaya haddii ubadkaygu aanu samayn horumar la filayo marka la eego taageerada dugsigu dhigay?"
//            } else if(index === 1){
//                question.innerHTML = "Waa maxay waxbarashada, caafimaadka iyo qiimaynta daryeelka?"
//            } else if (index === 2){
//                question.innerHTML = "Sideen ku heli karaa qiimayn waxbarasho, caafimaad iyo daryeel?"
//            } else if(index === 3){
//                question.innerHTML = "Maxaad samayn kartaa haddii koonsalku diido inuu sameeyo qiimaynta baahiyaha EHC?";
//            } else if(index === 4){
//                question.innerHTML = "Maxaa dhacaya haddii koonsalku go'aansado inuu sameeyo qiimaynta baahiyaha EHC?"
//            } else if(index === 5){
//                question.innerHTML = "Maxaad filaysaa marka koonsalku sameeyo qiimaynta baahiyaha EHC?"
//            }
//         })
//     } 
//     else if(language === "Arabic"){
//         introHeading.innerHTML = "???? ??????";
//         // introHeading.style.textAlign ="Left";
//         introBody.innerHTML = "<strong> Just Education Matters, CIC </strong> ???? ???????? ???? ?????????????? ???????????? ?????????????? ?????? ???????????????? ???? ?????????????? ???????? ???? ???????? ?????????????????? ???? ??????????????." ;
//         importantPrompt.innerHTML = "?????? ???????? ???????????? ???????? ?????????????? ???? ???????? ?????????? ?????????????? ???????????????? ?????????????? ???????????? ???????????????? ?????? ?????????????? ???????????? ?????????????? ?????????????????? ??????????????";
//         callToActionMessage.innerHTML = "???????????? ???????? ?????????? ?????????? ?????? ?????? ?????????????????? ???????????????? ???????????????? ???????? ???????????? ?????????? ?????????????? ???????????????? ???????????? ??????????.";
//         callToActionButton.innerHTML = "???????? ??????????";
//         newsHeading.innerHTML = "???????? ??????????????";
//         FAQHeading.innerHTML = "?????????? ??????????";
//         questionsValuesArray.map((question,index) => {
//            if(index === 0){
//                question.innerHTML = "???????? ???????? ?????? ???? ???????? ???????? ???????????? ?????????????? ???? ?????????? ???????? ?????????? ????????????????"
//            } else if(index === 1){
//                question.innerHTML = "???? ???? ?????????????? ???????????? ???????????? ????????????????"
//            } else if (index === 2){
//                question.innerHTML = "?????? ???????? ?????? ?????????? ???????????? ???????? ??????????????"
//            } else if(index === 3){
//                question.innerHTML = "???????? ?????????? ???? ???????? ?????? ?????? ???????????? ?????????? ?????????? ???????????????? EHC??";
//            } else if(index === 4){
//                question.innerHTML = "???????? ???????? ?????? ?????? ???????????? ?????????? ?????????? ?????????????????? EHC??"
//            } else if(index === 5){
//                question.innerHTML = "???? ???????? ?????? ???? ???????????? ?????????? ???????? ???????????? ???????????? ?????????? ???????????????? EHC??"
//            }
//         })
//     } else if(language === "French"){
//         introHeading.innerHTML = "Qui nous sommes" ;
//         introBody.innerHTML = "<strong> Just Education Matters, CIC </strong> est une entreprise nouvellement cr????e pour lutter contre les in??galit??s dans l'??ducation en particulier dans le domaine des exclusions scolaires.";
//         importantPrompt.innerHTML = "Nous aidons les parents ?? soutenir leurs enfants en fournissant une formation, des conseils, un plaidoyer et un soutien en utilisant une approche proactive pour am??liorer les r??sultats scolaires des enfants";
//         callToActionMessage.innerHTML = "Notre guide de d??marrage vous indiquera les informations cl??s, les services que nous proposons et d'autres contacts cl??s pour vous aider.";
//         callToActionButton.innerHTML = "Guide de d??marrage";
//         newsHeading.innerHTML = "Fil d'actualit??";
//         FAQHeading.innerHTML = "Questions fr??quemment pos??es"
//         questionsValuesArray.map((question,index) => {
//            if(index === 0){
//                question.innerHTML = "Que se passe-t-il si mon enfant ne fait pas les progr??s escompt??s avec le soutien mis en place par l'??cole ?"
//            } else if(index === 1){
//                question.innerHTML = "Qu'est-ce que l'??valuation de l'??ducation, de la sant?? et des soins ?"
//            } else if (index === 2){
//                question.innerHTML = "Comment obtenir une ??valuation de l'??ducation, de la sant?? et des soins?"
//            } else if(index === 3){
//                question.innerHTML = "Que pouvez-vous faire si le conseil refuse de proc??der ?? une ??valuation des besoins EHC ?";
//            } else if(index === 4){
//                question.innerHTML = "Que se passe-t-il si le conseil d??cide de proc??der ?? une ??valuation des besoins EHC ?"
//            } else if(index === 5){
//                question.innerHTML = "?? quoi devez-vous vous attendre une fois que le conseil a effectu?? l'??valuation des besoins en EHC ?"
//            }
//         })
//     } else if(language === "Portuguese") {
//         introHeading.innerHTML = "Quem n??s somos";
//         introBody.innerHTML = "<strong> Just Education Matters, o CIC </strong> ?? uma empresa rec??m-criada, criada para combater as desigualdades na educa????o, especialmente na ??rea de exclus??o escolar.";
//         importantPrompt.innerHTMl = "Apoiamos os pais para apoiar seus filhos, fornecendo treinamento, aconselhamento, defesa e apoio usando uma abordagem proativa para melhorar os resultados educacionais para as crian??as";
//         callToActionMessage.innerHTML = "Nosso guia de in??cio indicar?? as principais informa????es, servi??os que oferecemos e outros contatos importantes para apoi??-lo.";
//         callToActionButton.innerHTML = "Guia de in??cio";
//         newsHeading.innerHTML = "Not??cias";
//         FAQHeading.innerHTML = "perguntas frequentes";
//         questionsValuesArray.map((question,index) => {
//            if(index === 0){
//                question.innerHTML = "O que acontecer?? se meu filho n??o estiver fazendo o progresso esperado com o apoio que a escola oferece?"
//            } else if(index === 1){
//                question.innerHTML = "O que ?? avalia????o de educa????o, sa??de e cuidados?"
//            } else if (index === 2){
//                question.innerHTML = "Como fa??o para obter uma avalia????o de educa????o, sa??de e cuidados?"
//            } else if(index === 3){
//                question.innerHTML = "O que voc?? pode fazer se o conselho se recusar a realizar uma avalia????o das necessidades do EHC?";
//            } else if(index === 4){
//                question.innerHTML = "O que acontece se o conselho decidir realizar uma avalia????o das necessidades do EHC?"
//            } else if(index === 5){
//                question.innerHTML = "O que voc?? deve esperar depois que o conselho tiver realizado a avalia????o das necessidades do EHC?"
//            }
//         })
//     } else {
//         introHeading.innerHTML = "Who we are";
//         introBody = "<strong> Just Education Matters, o CIC </strong> is a newly established company set up to tackle inequalities in education particularly in the area of school exclusions.";
//         importantPrompt.innerHTML = "We support parents to support their children by providing training, advice, advocacy and support using a proactive approach to improve the educational outcomes for children";
//         callToActionMessage.innerHTML = "Our Start guide will signpost you to key information, services we provide and other key contacts to support you.";
//         callToActionButton.innerHTML = "Start Guide";
//         newsHeading.innerHTML = "News Feed";
//         FAQHeading.innerHTML = "Frequently Asked Questions";
//         questionsValuesArray.map((question,index) => {
//            if(index === 0){
//                question.innerHTML = "What happens if my child is not making expected progress with the support the school has put in place?"
//            } else if(index === 1){
//                question.innerHTML = "What is education, health and care assessment?"
//            } else if (index === 2){
//                question.innerHTML = "How do I get an education, health and care assessment?"
//            } else if(index === 3){
//                question.innerHTML = "What can you do if the council refuses to carry out an EHC needs assessment?";
//            } else if(index === 4){
//                question.innerHTML = "What happens if the council decides to carry out an EHC needs assessment?"
//            } else if(index === 5){
//                question.innerHTML = "What should you expect once the council has carried out the EHC needs assessment?"
//            }
//         })
//     }
// }, 1000)


//FAQ
let questionsImgs = document.querySelectorAll(".question img");
let answers = document.querySelectorAll(".answer");
let answersArray = Array.from(answers);
let questionExpandBtnArray = Array.from(questionsImgs);

questionExpandBtnArray.map((expandBtn,index) => {
    expandBtn.addEventListener("click", () => {
        answersArray[index].classList.toggle("show");
        var imgSrc = expandBtn.src;
        if (imgSrc.indexOf('resources/icons/remove_black_24dp.svg')!=-1) {
            expandBtn.src  = 'resources/icons/add_black_24dp (1).svg';
        }
         else {
          expandBtn.src = 'resources/icons/remove_black_24dp.svg';
       }

    })
})


//News carousel
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
                if(nextIndex >= news.length && nextIndex <= news.length-1){
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

        modal.style.width = "30%";
        modal.style.height = "40%";
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