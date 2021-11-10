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
//         introBody.innerHTML = "<strong> Just Education Matters, CIC </strong>jẹ ile-iṣẹ tuntun ti iṣeto ti a ṣeto lati koju awọn aidogba ni eto-ẹkọ ni pataki ni agbegbe awọn imukuro ile-iwe.";
//         importantPrompt.innerHTML = "A ṣe atilẹyin awọn obi lati ṣe atilẹyin fun awọn ọmọ wọn nipa fifun ikẹkọ, imọran, agbawi ati atilẹyin nipa lilo ọna ṣiṣe lati mu awọn abajade eto-ẹkọ dara si fun awọn ọmọde";
//         callToActionMessage.innerHTML = "Itọsọna Ibẹrẹ wa yoo ṣe afihan ọ si alaye bọtini, awọn iṣẹ ti a pese ati awọn olubasọrọ bọtini miiran lati ṣe atilẹyin fun ọ.";
//         callToActionButton.innerHTML = "Bẹrẹ Itọsọna";
//         newsHeading.innerHTML = "Iroyin";
//         FAQHeading.innerHTML = "Awon ibeere ti awon eniyan saaba ma n beere";
//         questionsValuesArray.map((question,index) => {
//            if(index === 0){
//                question.innerHTML = "Kini yoo ṣẹlẹ ti ọmọ mi ko ba ni ilọsiwaju ti a nireti pẹlu atilẹyin ti ile-iwe ti fi sii?"
//            } else if(index === 1){
//                question.innerHTML = "Kini ẹkọ, ilera ati igbelewọn itọju?"
//            } else if (index === 2){
//                question.innerHTML = "Bawo ni MO ṣe gba eto-ẹkọ, ilera ati igbelewọn itọju?"
//            } else if(index === 3){
//                question.innerHTML = "Kini o le ṣe ti igbimọ ba kọ lati ṣe igbelewọn nilo EHC kan?";
//            } else if(index === 4){
//                question.innerHTML = "Kini yoo ṣẹlẹ ti igbimọ ba pinnu lati ṣe igbelewọn awọn iwulo EHC kan?"
//            } else if(index === 5){
//                question.innerHTML = "Kini o yẹ ki o nireti ni kete ti igbimọ ti ṣe igbelewọn awọn iwulo EHC?"
//            }
//         })
//     } else if ( language === "Spanish"){
//         introHeading.innerHTML = "Quienes somos";
//         introBody.innerHTML = "<strong> Just Education Matters, CIC </strong> CIC es una empresa de reciente creación creada para abordar las desigualdades en la educación, especialmente en el ámbito de las exclusiones escolares.";
//         importantPrompt.innerHTML = "Apoyamos a los padres para que apoyen a sus hijos brindándoles capacitación, asesoramiento, defensa y apoyo utilizando un enfoque proactivo para mejorar los resultados educativos de los niños.";
//         callToActionMessage.innerHTML = "Nuestra guía de inicio le indicará información clave, servicios que brindamos y otros contactos clave para ayudarlo.";
//         callToActionButton.innerHTML = "Guía de inicio";
//         newsHeading.innerHTML = "Noticias";
//         FAQHeading.innerHTML = "Preguntas frecuentes";
//         questionsValuesArray.map((question,index) => {
//            if(index === 0){
//                question.innerHTML = "¿Qué sucede si mi hijo no está logrando el progreso esperado con el apoyo que la escuela ha puesto en marcha?"
//            } else if(index === 1){
//                question.innerHTML = "¿Qué es la evaluación de la educación, la salud y la atención?"
//            } else if (index === 2){
//                question.innerHTML = "¿Cómo obtengo una evaluación de educación, salud y atención?"
//            } else if(index === 3){
//                question.innerHTML = "¿Qué puede hacer si el consejo se niega a realizar una evaluación de necesidades de EHC?";
//            } else if(index === 4){
//                question.innerHTML = "¿Qué sucede si el consejo decide realizar una evaluación de necesidades de EHC?"
//            } else if(index === 5){
//                question.innerHTML = "¿Qué debe esperar una vez que el consejo haya realizado la evaluación de necesidades de EHC?"
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
//                question.innerHTML = "¿Maxaa dhacaya haddii ubadkaygu aanu samayn horumar la filayo marka la eego taageerada dugsigu dhigay?"
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
//         introHeading.innerHTML = "من نحن";
//         // introHeading.style.textAlign ="Left";
//         introBody.innerHTML = "<strong> Just Education Matters, CIC </strong> هي شركة تم إنشاؤها حديثًا لمعالجة عدم المساواة في التعليم خاصة في مجال الاستبعاد من المدارس." ;
//         importantPrompt.innerHTML = "نحن ندعم الآباء لدعم أطفالهم من خلال توفير التدريب والمشورة والدعوة والدعم باستخدام نهج استباقي لتحسين النتائج التعليمية للأطفال";
//         callToActionMessage.innerHTML = "سيرشدك دليل البدء الخاص بنا إلى المعلومات الأساسية والخدمات التي نقدمها وجهات الاتصال الرئيسية الأخرى لدعمك.";
//         callToActionButton.innerHTML = "دليل البدء";
//         newsHeading.innerHTML = "موجز الأخبار";
//         FAQHeading.innerHTML = "أسئلة مكررة";
//         questionsValuesArray.map((question,index) => {
//            if(index === 0){
//                question.innerHTML = "ماذا يحدث إذا لم يحرز طفلي التقدم المتوقع في الدعم الذي قدمته المدرسة؟"
//            } else if(index === 1){
//                question.innerHTML = "ما هو التعليم والصحة وتقييم الرعاية؟"
//            } else if (index === 2){
//                question.innerHTML = "كيف أحصل على تقييم تعليمي وصحي ورعاية؟"
//            } else if(index === 3){
//                question.innerHTML = "ماذا يمكنك أن تفعل إذا رفض المجلس إجراء تقييم احتياجات EHC؟";
//            } else if(index === 4){
//                question.innerHTML = "ماذا يحدث إذا قرر المجلس إجراء تقييم لاحتياجات EHC؟"
//            } else if(index === 5){
//                question.innerHTML = "ما الذي يجب أن تتوقعه بمجرد قيام المجلس بإجراء تقييم احتياجات EHC؟"
//            }
//         })
//     } else if(language === "French"){
//         introHeading.innerHTML = "Qui nous sommes" ;
//         introBody.innerHTML = "<strong> Just Education Matters, CIC </strong> est une entreprise nouvellement créée pour lutter contre les inégalités dans l'éducation en particulier dans le domaine des exclusions scolaires.";
//         importantPrompt.innerHTML = "Nous aidons les parents à soutenir leurs enfants en fournissant une formation, des conseils, un plaidoyer et un soutien en utilisant une approche proactive pour améliorer les résultats scolaires des enfants";
//         callToActionMessage.innerHTML = "Notre guide de démarrage vous indiquera les informations clés, les services que nous proposons et d'autres contacts clés pour vous aider.";
//         callToActionButton.innerHTML = "Guide de démarrage";
//         newsHeading.innerHTML = "Fil d'actualité";
//         FAQHeading.innerHTML = "Questions fréquemment posées"
//         questionsValuesArray.map((question,index) => {
//            if(index === 0){
//                question.innerHTML = "Que se passe-t-il si mon enfant ne fait pas les progrès escomptés avec le soutien mis en place par l'école ?"
//            } else if(index === 1){
//                question.innerHTML = "Qu'est-ce que l'évaluation de l'éducation, de la santé et des soins ?"
//            } else if (index === 2){
//                question.innerHTML = "Comment obtenir une évaluation de l'éducation, de la santé et des soins?"
//            } else if(index === 3){
//                question.innerHTML = "Que pouvez-vous faire si le conseil refuse de procéder à une évaluation des besoins EHC ?";
//            } else if(index === 4){
//                question.innerHTML = "Que se passe-t-il si le conseil décide de procéder à une évaluation des besoins EHC ?"
//            } else if(index === 5){
//                question.innerHTML = "À quoi devez-vous vous attendre une fois que le conseil a effectué l'évaluation des besoins en EHC ?"
//            }
//         })
//     } else if(language === "Portuguese") {
//         introHeading.innerHTML = "Quem nós somos";
//         introBody.innerHTML = "<strong> Just Education Matters, o CIC </strong> é uma empresa recém-criada, criada para combater as desigualdades na educação, especialmente na área de exclusão escolar.";
//         importantPrompt.innerHTMl = "Apoiamos os pais para apoiar seus filhos, fornecendo treinamento, aconselhamento, defesa e apoio usando uma abordagem proativa para melhorar os resultados educacionais para as crianças";
//         callToActionMessage.innerHTML = "Nosso guia de início indicará as principais informações, serviços que oferecemos e outros contatos importantes para apoiá-lo.";
//         callToActionButton.innerHTML = "Guia de início";
//         newsHeading.innerHTML = "Notícias";
//         FAQHeading.innerHTML = "perguntas frequentes";
//         questionsValuesArray.map((question,index) => {
//            if(index === 0){
//                question.innerHTML = "O que acontecerá se meu filho não estiver fazendo o progresso esperado com o apoio que a escola oferece?"
//            } else if(index === 1){
//                question.innerHTML = "O que é avaliação de educação, saúde e cuidados?"
//            } else if (index === 2){
//                question.innerHTML = "Como faço para obter uma avaliação de educação, saúde e cuidados?"
//            } else if(index === 3){
//                question.innerHTML = "O que você pode fazer se o conselho se recusar a realizar uma avaliação das necessidades do EHC?";
//            } else if(index === 4){
//                question.innerHTML = "O que acontece se o conselho decidir realizar uma avaliação das necessidades do EHC?"
//            } else if(index === 5){
//                question.innerHTML = "O que você deve esperar depois que o conselho tiver realizado a avaliação das necessidades do EHC?"
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