let ourServices = document.getElementById("our-services");
let pricing = document.getElementById("pricing");
let servicesContent = document.getElementById("services-content");

function createTrainingsModal(serviceName){
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
        heading.innerText = "Trainings"
        heading.classList.add("modal-heading");
        modal.prepend(heading);

        let trainingsContainer = document.createElement("div");

        modalContent.append(contactForm)
         modal.classList.add("trainingsContainer")
    }
}

function createContactUsModal(serviceName){
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
        messageTextArea.value = `I would like to oder the ${serviceName}.`;
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
    ourServices.style.borderBottom = "5px solid #A91794"
    
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
        createContactUsModal("Advocacy");
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
}

// document.getElementById("onload-request-Advocacy-btn").addEventListener("click", () => {})

ourServices.addEventListener("click", () => {
    servicesContent.innerHTML = "";

    pricing.style.borderBottom = "none"
    ourServices.style.borderBottom = "5px solid #A91794"
    
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
        createContactUsModal("Advocacy");
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
    service3Container.append(requestServiceBtn3)


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

pricing.addEventListener("click", () => {
    servicesContent.innerHTML = "";

    pricing.style.borderBottom = "5px solid #A91794";
    ourServices.style.borderBottom = "none";

    let price1 = document.createElement("p");
    price1.classList.add("price");
    price1.innerHTML = "First 1 hour consultation <b>Free</b>"
    servicesContent.append(price1)

    let price2 = document.createElement("p");
    price2.classList.add("price");
    price2.innerHTML = "Subsequent consultations /advice Attending meetings drafting letters <b>£60 per hour (or part thereof)</b>"
    servicesContent.append(price2)

    let price3 = document.createElement("p");
    price3.classList.add("price");
    price3.innerHTML = "Representation at Governors  Disciplinary Committee Review  Meeting or Independent  Review Panel Meeting and  preparation <b>£400 plus travel expenses</b>"
    servicesContent.append(price3)

    let price4 = document.createElement("p");
    price4.classList.add("price");
    price4.innerHTML = "Representation at Governors  Disciplinary Committee Review  Meeting and Independent  Review Panel Meeting <b>£650 plus travel expenses</b>"
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
        questions.innerHTML = "<label for='fixed-term'>The child has been excluded for a fixed term</label><input type='checkbox' id='fixed-term' name='type-of-exclusion' value='A fixed term'>&nbsp;&nbsp;&nbsp;<label for='permanently'>The child has been excluded Permanently</label><input name='type-of-exclusion' type='checkbox' id='permanently' value='Permanently'><br>&nbsp;<br><label for='letter-from-HT'>I have received a letter from the head teacher informing me of the exclusion and the reasons for it</label><input name='letter-from-HT' type='checkbox' id='letter-from-HT' value='I have received a letter from the head teacher informing me of the exclusion and the reasons for it'><br><label for='no-letter-from-HT'>I have <b>not</b> received a letter from the head teacher informing me of the exclusion and the reasons for it</label><input name='letter-from-HT' type='checkbox' id='no-letter-from-HT' value='I have not received a letter from the head teacher informing me of the exclusion and the reasons for it'><br>&nbsp;<br><button type='submit' class='btn'>Submit Form</button>";
        adviceFormContent.append(questions);


        modal.classList.add("show")
    }
}