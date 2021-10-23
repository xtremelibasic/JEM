let ourServices = document.getElementById("our-services");
let pricing = document.getElementById("pricing");
let servicesContent = document.getElementById("services-content");

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
    requestServiceBtn3.innerHTML = "Request Service"
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
    requestServiceBtn4.setAttribute("type", "button");
    requestServiceBtn4.classList.add("btn");
    requestServiceBtn4.innerHTML = "Request Service";
    service4Container.append(requestServiceBtn4);


    servicesContent.append(service1Container);
    servicesContent.append(service2Container);
    servicesContent.append(service3Container);
    servicesContent.append(service4Container);
}

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
    requestServiceBtn3.innerHTML = "Request Service"
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