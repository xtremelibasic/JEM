window.addEventListener("load", () => {
    let translateElement = document.getElementById("google_translate_element");
    let designSquare = document.querySelector(".design-square1");
     if(translateElement.innerHTML === ""){
         designSquare.style.height = "145vw";
         designSquare.style.maxHeight = "145vw";
         designSquare.style.minHeight = "145vw";
         designSquare.style.left ="50vw";
         designSquare.style.height = "200vw"
         designSquare.style.transform = "translate(-50%, 0)";
     } else {
         designSquare.style.height = "145vw";
         designSquare.style.maxHeight = "145vw";
         designSquare.style.minHeight = "145vw";
        designSquare.style.transform = "translate(-59%, 0)";
     }
})

let ourServices = document.getElementById("our-services");
let pricing = document.getElementById("pricing");
let servicesContent = document.getElementById("services-content");

// function createTrainingsModal(serviceName){
//     if(modal.offsetHeight < 10){
//         modal.innerHTML = "";   
//         let closeBtn = document.createElement("div");
//         closeBtn.innerHTML = "<i class='fas fa-times'></i>";
//         closeBtn.classList.add("close");
//         modal.prepend(closeBtn)
//         closeBtn.addEventListener("click", function(){
//             modal.classList.remove("show");
//         })

//         let modalContent = document.createElement("div");
//         modalContent.classList.add("content");
//         modal.append(modalContent)

//         let heading = document.createElement("h1");
//         heading.innerText = "Trainings"
//         heading.classList.add("modal-heading");
//         modal.prepend(heading);

//         let trainingsContainer = document.createElement("div");

//         modalContent.append(contactForm)
//          modal.classList.add("trainingsContainer")
//     }
// }

function createContactUsModal(){
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
        modalContent.classList.add("content");
        modal.append(modalContent)

        let heading = document.createElement("h1");
        heading.innerText = "Contact Us"
        heading.classList.add("modal-heading");
        modal.prepend(heading);

        let contactForm = document.createElement("form");
        contactForm.classList.add("content-contact-Us");
        contactForm.setAttribute("action", "https://formsubmit.co/amandanwadukwe@gmail.com");
        contactForm.setAttribute("method", "POST");

        let nameLabel = document.createElement("label");
        nameLabel.innerText = "Name";
        nameLabel.setAttribute("for", "nameInput");
        contactForm.append(nameLabel);

        let nameInput = document.createElement("input");
        nameInput.setAttribute("required", "");
        nameInput.setAttribute("type", "text");
        nameInput.setAttribute("id", "nameInput");
        nameInput.setAttribute("name", "nameInput")
        contactForm.append(nameInput)

        let breakTag = document.createElement("br");
        contactForm.append(breakTag)

        let emailLabel = document.createElement("label");
        emailLabel.innerText = "Email";
        emailLabel.setAttribute("for", "emailInput");
        contactForm.append(emailLabel)

        let emailInput = document.createElement("input")
        nameInput.setAttribute("required", "");
        emailInput.setAttribute("type", "email");
        emailInput.setAttribute("id", "emailInput");
        emailInput.setAttribute("name", "emailInput");
        contactForm.append(emailInput)

        let breakTag2 = document.createElement("br");
        contactForm.append(breakTag2)

        let subjectLabel = document.createElement("label");
        subjectLabel.innerText = "Subject";
        subjectLabel.setAttribute("for", "subjectInput")
        contactForm.append(subjectLabel)

        let breakTag3 = document.createElement("br");
        contactForm.append(breakTag3)

        let subjectInput = document.createElement("input");
        subjectInput.value = "Service Order Placement";
        subjectInput.setAttribute("id", "subjectInput");
        subjectInput.setAttribute("type", "text");
        subjectInput.setAttribute("name", "subjectInput")
        contactForm.append(subjectInput);

        let messageLabel = document.createElement("label");
        messageLabel.setAttribute("for", "messageTextArea")
        messageLabel.innerText = "Message"
        contactForm.append(messageLabel)

        let breakTag4 = document.createElement("br");
        contactForm.append(breakTag4)

        let messageTextArea = document.createElement("textarea")
        messageTextArea.setAttribute("id", "messageTextArea");
        messageTextArea.setAttribute("name", "messageTextArea")
        contactForm.append(messageTextArea)

        let breakTag5 = document.createElement("br");
        contactForm.append(breakTag5)


        let sendMessageBtn = document.createElement("button");
        sendMessageBtn.setAttribute("type", "submit");
        sendMessageBtn.innerHTML = "Send Message"
        sendMessageBtn.classList.add("btn");
        contactForm.append(sendMessageBtn)

        let statusMessage = document.createElement("span");
        statusMessage.classList.add("output_message");
        contactForm.append(statusMessage)

        modalContent.append(contactForm)
         modal.classList.add("show")
    }
}

window.onload = () => {
    servicesContent.innerHTML = "";

    pricing.style.borderBottom = "none"
    ourServices.style.borderBottom = "5px solid var(--primaryColour)"
    
    let service1Container = document.createElement("div");
    service1Container.classList.add("service-container")
    let serviceTitle = document.createElement("h1");
    serviceTitle.innerHTML = "Advice";
    service1Container.append(serviceTitle);
    let serviceSummary = document.createElement("p");
    serviceSummary.innerHTML = "We offer telephone and face to face advice on issues to do with exclusions and related matters.<br>We ask you to provide us with some general information, by completing our standard request for advice form, about your situation to help us understand what you want from our service and how you want to achieve it.";
    service1Container.append(serviceSummary);
    let requestServiceBtn1 = document.createElement("button");
    requestServiceBtn1.onclick = createAdviceRequestForm;
    requestServiceBtn1.setAttribute("type", "button");
    requestServiceBtn1.classList.add("btn");
    requestServiceBtn1.innerHTML = "Request Service";
    service1Container.append(requestServiceBtn1);


    let service2Container = document.createElement("div");
    service2Container.classList.add("service-container")
    let service2Title = document.createElement("h1");
    service2Title.innerHTML = "Advocacy";
    service2Container.append(service2Title);
    let service2Summary = document.createElement("p");
    service2Summary.innerHTML = "We advocate for parents in two ways depending on what you want.<br>Passive support - We sit beside you at meetings to do with your child while you argue your case.  This can include advising you how to make representations at review meetings with governing body disciplinary committees (GBDC), independent review panels (IRPs), or writing letters to local authorities. Sometimes all parents need is someone by their side not to be their voice.<br>Active support - We speak on your behalf at meetings to do with your child.  We seek to persuade and influence outcomes for your child using the law and or practical solutions. This includes representing your case at  GBDC meetings, IRPs and in some cases the special educational needs tribunal. We collate and prepare the evidence for your case. We draft documents.  Anything we do on your behalf will be with your agreement.";
    service2Container.append(service2Summary);
    let requestServiceBtn2 = document.createElement("button");
    // requestServiceBtn2.onclick = createContactUsModal("Advocacy");
    requestServiceBtn2.addEventListener("click", () => {
        console.log("clicked")
        createContactUsModal();
    })
   requestServiceBtn2.setAttribute("id", "onload-request-Advocacy-btn")
    requestServiceBtn2.setAttribute("type", "button");
    requestServiceBtn2.classList.add("btn");
    requestServiceBtn2.innerHTML = "Request Service"
    service2Container.append(requestServiceBtn2)
    
    
    let service3Container = document.createElement("div");
    service3Container.classList.add("service-container")
    let service3Title = document.createElement("h1");
    service3Title.innerHTML = "Training";
    service3Container.append(service3Title);
    let service3Summary = document.createElement("p");
    service3Summary.innerHTML = "We offer general and bespoke training on all exclusion and education related topics for community groups, governing bodies, schools, local authorities.  Our training is practical and interactive.  We don’t recite the law, we explain it. We have provided training on the exclusions process up to and including making representations to GBDC and IRPs, SEND law and appealing to SEND Tribunals, elective home education to name a few.";
    service3Container.append(service3Summary);
    let requestServiceBtn3 = document.createElement("button");
    requestServiceBtn3.setAttribute("type", "button");
    requestServiceBtn3.classList.add("btn");
    requestServiceBtn3.innerHTML = "View Training videos"
    service3Container.append(requestServiceBtn3)


    let service4Container = document.createElement("div");
    service4Container.classList.add("service-container")
    let service4Title = document.createElement("h1");
    service4Title.innerHTML = "Parent Forums";
    service4Container.append(service4Title);
    let service4Summary = document.createElement("p");
    service4Summary.innerHTML = "We regularly run forums for parents and community groups on topics they want to explore.  Our forums give participants the chance to talk about their concerns, share knowledge and experiences.  They encourage participants to knowledge share and bring people together, so they know they are not alone.";
    service4Container.append(service4Summary);
    let requestServiceBtn4 = document.createElement("button");
    requestServiceBtn4.addEventListener("click", () => {
        createContactUsModal();
    })
    requestServiceBtn4.setAttribute("type", "button");
    requestServiceBtn4.classList.add("btn");
    requestServiceBtn4.innerHTML = "Request Service";
    service4Container.append(requestServiceBtn4);


    servicesContent.append(service1Container);
    servicesContent.append(service2Container);
    servicesContent.append(service3Container);
    servicesContent.append(service4Container);
}

// document.getElementById("onload-request-Advocacy-btn").addEventListener("click", () => {})

ourServices.addEventListener("click", () => {
    servicesContent.innerHTML = "";

    pricing.style.borderBottom = "none"
    ourServices.style.borderBottom = "5px solid var(--primaryColour)"
    
    let service1Container = document.createElement("div");
    service1Container.classList.add("service-container")
    let serviceTitle = document.createElement("h1");
    serviceTitle.innerHTML = "Advice";
    service1Container.append(serviceTitle);
    let serviceSummary = document.createElement("p");
    serviceSummary.innerHTML = "We offer telephone and face to face advice on issues to do with exclusions and related matters.<br>We ask you to provide us with some general information, by completing our standard request for advice form, about your situation to help us understand what you want from our service and how you want to achieve it.";
    service1Container.append(serviceSummary);
    let requestServiceBtn1 = document.createElement("button");
    requestServiceBtn1.setAttribute("type", "button");
    requestServiceBtn1.classList.add("btn");
    requestServiceBtn1.innerHTML = "Request Service";
    service1Container.append(requestServiceBtn1);


    let service2Container = document.createElement("div");
    service2Container.classList.add("service-container")
    let service2Title = document.createElement("h1");
    service2Title.innerHTML = "Advocacy";
    service2Container.append(service2Title);
    let service2Summary = document.createElement("p");
    service2Summary.innerHTML = "We advocate for parents in two ways depending on what you want.<br>Passive support - We sit beside you at meetings to do with your child while you argue your case.  This can include advising you how to make representations at review meetings with governing body disciplinary committees (GBDC), independent review panels (IRPs), or writing letters to local authorities. Sometimes all parents need is someone by their side not to be their voice.<br>Active support - We speak on your behalf at meetings to do with your child.  We seek to persuade and influence outcomes for your child using the law and or practical solutions. This includes representing your case at  GBDC meetings, IRPs and in some cases the special educational needs tribunal. We collate and prepare the evidence for your case. We draft documents.  Anything we do on your behalf will be with your agreement.";
    service2Container.append(service2Summary);
    let requestServiceBtn2 = document.createElement("button");
    requestServiceBtn2.addEventListener("click", () => {
        createContactUsModal();
    })
    requestServiceBtn2.setAttribute("type", "button");
    requestServiceBtn2.classList.add("btn");
    requestServiceBtn2.innerHTML = "Request Service"
    service2Container.append(requestServiceBtn2)
    
    
    let service3Container = document.createElement("div");
    service3Container.classList.add("service-container")
    let service3Title = document.createElement("h1");
    service3Title.innerHTML = "Training";
    service3Container.append(service3Title);
    let service3Summary = document.createElement("p");
    service3Summary.innerHTML = "We offer general and bespoke training on all exclusion and education related topics for community groups, governing bodies, schools, local authorities.  Our training is practical and interactive.  We don’t recite the law, we explain it. We have provided training on the exclusions process up to and including making representations to GBDC and IRPs, SEND law and appealing to SEND Tribunals, elective home education to name a few.";
    service3Container.append(service3Summary);
    let requestServiceBtn3 = document.createElement("button");
    requestServiceBtn3.setAttribute("type", "button");
    requestServiceBtn3.classList.add("btn");
    requestServiceBtn3.innerHTML = "View Training videos"
    service3Container.append(requestServiceBtn3);
    // requestServiceBtn3.addEventListener("click", () => {
    //     console.log("clicked")
    //     createComingSoonModal;
    // })


    let service4Container = document.createElement("div");
    service4Container.classList.add("service-container")
    let service4Title = document.createElement("h1");
    service4Title.innerHTML = "Parent forums";
    service4Container.append(service4Title);
    let service4Summary = document.createElement("p");
    service4Summary.innerHTML = "We regularly run forums for parents and community groups on topics they want to explore.  Our forums give participants the chance to talk about their concerns, share knowledge and experiences.  They encourage participants to knowledge share and bring people together, so they know they are not alone.";
    service4Container.append(service4Summary);
    let requestServiceBtn4 = document.createElement("button");
    requestServiceBtn4.addEventListener("click", () => {
        createContactUsModal("Forum");
    })
    requestServiceBtn4.setAttribute("type", "button");
    requestServiceBtn4.classList.add("btn");
    requestServiceBtn4.innerHTML = "Request Service";
    service4Container.append(requestServiceBtn4);

    
    servicesContent.append(service1Container);
    servicesContent.append(service2Container);
    servicesContent.append(service3Container);
    servicesContent.append(service4Container);
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
pricing.addEventListener("click", () => {
    servicesContent.innerHTML = "";

    pricing.style.borderBottom = "5px solid var(--primaryColour)";
    ourServices.style.borderBottom = "none";

    let price1 = document.createElement("p");
    price1.classList.add("price");
    price1.innerHTML = "First 1 hour consultation <b>Free</b>"
    servicesContent.append(price1)

    let price2 = document.createElement("p");
    price2.classList.add("price");
    price2.innerHTML = "Subsequent consultations/advice Attending meetings drafting letters <b>£60 per hour (or part thereof)</b>"
    servicesContent.append(price2)

    let price3 = document.createElement("p");
    price3.classList.add("price");
    price3.innerHTML = "Representation at Governors Disciplinary Committee Review Meeting or Independent Review Panel Meeting and preparation <b>£400 plus travel expenses</b>"
    servicesContent.append(price3)

    let price4 = document.createElement("p");
    price4.classList.add("price");
    price4.innerHTML = "Representation at Governors Disciplinary Committee Review Meeting and Independent Review Panel Meeting <b>£650 plus travel expenses</b>"
    servicesContent.append(price4)

    let price5 = document.createElement("p");
    price5.classList.add("price");
    price5.innerHTML = "Drafting written submissions for GBDC/IRPa only <b>£180</b>"
    servicesContent.append(price5)

    let disclaimer = document.createElement("p");
    disclaimer.classList.add("disclaimer");
    disclaimer.innerHTML = "<b>If you are on a low income and or receive social welfare benefits we can discuss other arrangements to help you.</b>";
    servicesContent.append(disclaimer)
})

function createAdviceRequestForm(){
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
        modalContent.classList.add("rights-and-law-content");
        modalContent.style.marginBottom = "4rem";
        modal.append(modalContent)

        let heading = document.createElement("h1");
        heading.innerText = "Request for advice  form"
        heading.classList.add("modal-heading");
        modal.prepend(heading);

        let adviceFormContent = document.createElement("div");
        modalContent.append(adviceFormContent);

        let disclaimer = document.createElement("div");
        disclaimer.innerHTML = "<p>All information provided to us is kept confidential. We will only use your data for the purpose for which it has been collected and keep it for as long as is strictly necessary. If you do not want us to keep your data, please tell us and we will delete it.</p><p><b>Tell us about your situation - (we ask you to complete this form before the consultation to help us understand the issues your child is experiencing and what service you might want from us).</b></p>";
        adviceFormContent.append(disclaimer);

        let questions = document.createElement("form");
        questions.setAttribute("action", "https://formsubmit.co/amandanwadukwe@gmail.com");
        questions.setAttribute("method", "POST");
        questions.innerHTML = "<input required type='radio' id='fixed-term' name='type-of-exclusion' value='A fixed term'><label for='fixed-term'>The child has been excluded for a fixed term</label>&nbsp;&nbsp;&nbsp;<input name='type-of-exclusion' type='radio' id='permanently' value='Permanently'><label for='permanently'>The child has been excluded Permanently</label><br>&nbsp;<br><input required name='letter-from-HT' type='radio' id='letter-from-HT' value='I have received a letter from the head teacher informing me of the exclusion and the reasons for it'><label for='letter-from-HT'>I have received a letter from the head teacher informing me of the exclusion and the reasons for it</label><br><input name='letter-from-HT' type='radio' id='no-letter-from-HT' value='I have not received a letter from the head teacher informing me of the exclusion and the reasons for it'><label for='no-letter-from-HT'>I have <b>not</b> received a letter from the head teacher informing me of the exclusion and the reasons for it</label><br>&nbsp;<br><label for='days-excluded-for'><b>Fixed term exclusion:</b><br>How many days (including half days) has the child been excluded in the last:</label><br><input required type='number' min='0' id='days-excluded-for' name='days-excluded-for'><br><input required name='exclusion-period' type='radio' id='term' value='Term'><label for='term-exclusion'>Term</label><br><input name='exclusion-period' type='radio' id='two-terms' value='Two terms'><label for='two-term-exclusion'>Two terms</label><br><input name='exclusion-period' type='radio' id='school year' value='School year'><label for='school-year'>School year</label><br>&nbsp;<br><p><b>Permanent exclusion</b><br>What reason was given for the exclusion?</p><input required name='reason-for-exclusion' type='radio' id='one-off-serious-incident' value='One off serious incident'><label for='one-off-serious-incident'>One off serious incident</label>&nbsp;&nbsp;<input name='reason-for-exclusion' type='radio' id='persistent-disruptive-behaviour' value='Persistent disruptive behaviour '><label for='persistent-disruptive-behaviour'>Persistent disruptive behaviour </label><br><br></p><p>Do you intend to make representation at the Governors Disciplinary Review Meeting/independent review panel?</p><input required name='representation-at-GDR' type='radio' id='yes-to-representation' value='Yes I would like representation at the Governors Disciplinary Review Meeting/independent review panel'><label for='yes-to-representation'>Yes</label>&nbsp;<input name='representation-at-GDR' type='radio' id='no-to-representation' value='No I do not need representation at the Governors Disciplinary Review Meeting/independent review panel'><label for='no-to-representation'>No</label><br><br><p>What support would you want from us?</p><input name='support-needed' type='checkbox' id='advice' value='Advice'><label for='advice'>Advice</label>&nbsp;<input name='support-needed' type='checkbox' id='representation' value='Representation'><label for='representation'>Representation</label>&nbsp;<input name='support-needed' type='checkbox' id='other' value='Other'><label for='other'>Other</label><br><br><label for='other-support-needed'>Please tell us if you require any other support:</label><br><textarea type='text' name='Other-support-needed'></textarea><br><br><br><p><b>About the child</b></p><br><label for='age-of-child'>How old is the child?</label>&nbsp;<input required type='number' min='0' max='16' name='age-of-child' id='age-of-child'><br><br><p> How is the child’s progress at school?</p><input required name='progress-at-school' type='radio' id='good' value='Good'><label for='good'>Good</label>&nbsp;<input name='progress-at-school' type='radio' id='not-so-good' value='Not so good'><label for='not-so-good'>Not so good</label>&nbsp;<input name='progress-at-school' type='radio' id='learning-difficulty' value='Difficulties with learning '><label for='learning-difficulty'>Difficulties with learning </label><br><br><label for='learning-difficulty-description'>If the child has any difficulty with their learning, please say briefly what these are</label><br><textarea type='text' name='learning-difficulty-description' id='learning-difficulty-description'></textarea><br><br><label for='previous-learning-support'>Tell us about any support that has been offered to the child to support their learning and being in school</label><br><textarea type='text' name='previous-learning-support' id='previous-learning-support'></textarea><br><br><p>Has the child been identified as needing additional support with their learning?</p><input required name='identified-as-needing-additional-support' type='radio' id='identified' value='Identifies as needing additional support'><label for='identified'>Yes</label>&nbsp;<input name='identified-as-needing-additional-support' type='radio' id='not-identified' value='Identifies as needing additional support'><label for='not-identified'>No</label><br><br><p>Does the child have an EHC plan?</p><input required name='has-ehcp' type='radio' id='has-ehcp' value='Has EHCP'><label for='has-ehcp'>Yes</label>&nbsp;<input name='has-ehcp' type='radio' id='no-ehcp' value='Does not have EHCP'><label for='no-ehcp'>No</label><br><br><br><p><b>About the child’s school</b></p><br><p>What type of school does the child attend?</p><input required name='school-type' type='radio' id='academy' value='Academy'><label for='academy'>Academy</label>&nbsp;<input name='school-type' type='radio' id='lammm' value='Local authority maintained mainstream'><label for='lamm'>Local authority maintained mainstream</label>&nbsp;<input name='school-type' type='radio' id='special-school' value='Special school'><label for='special-school'>Special school</label>&nbsp;<input name='school-type' type='radio' id='independent-school' value='Independent School'><label for='independent-school'>Independent school</label><br><p>Are you aware of the school’s behaviour (and other) policies?</p><input required name='awareness-of-school-behaviour-policies' type='radio' id='aware' value='I am aware of the School's behaviour policies'><label for='aware'>Yes</label>&nbsp;<input name='awareness-of-school-behaviour-policies' type='radio' id='not-aware' value='No, I am not aware of the School's behaviour policies'><label for='not-aware'>No</label><br><br><label for='previous-contact-with-school'>Tell us what contact you have had with the school before this exclusion</label><br><textarea name='previous-contact-with-school' id='previous-contact-with-school'></textarea><br><br><label for='other-information'>Use this space to tell us anything more you think is important about your child’s situation</label><br><textarea id='other-information' name='other-information'></textarea><br><br><br><p><b>So we can contact you please give us:<b></p><label for='client-name'>Your name:</label><input required type='text' name='client-name' id='client-name'><br><br><p>Contact Details</p><label for='mobile-number'>Phone</label>&nbsp;<input type='tel' name='mobile-number' id='mobile-number'><br><br><label for='email'>email</label>&nbsp;<input required type='email' name='email' id='email'><br><br><br><button type='submit' class='btn'>Submit Form</button>";
        adviceFormContent.append(questions);

        let textAreas = Array.from(document.querySelectorAll("textarea"));
        textAreas.map(textarea => {
            textarea.style.width = "80%";
        })

        modal.classList.add("show")
    }
}