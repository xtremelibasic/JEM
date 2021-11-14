
window.addEventListener("load", () => {
    let translateElement = document.getElementById("google_translate_element");
    let designSquare = document.querySelector(".design-square1");
     if(translateElement.innerHTML === ""){
         designSquare.style.left ="50vw";
         designSquare.style.height = "180vw"
         designSquare.style.transform = "translate(-50%, 0)";
     } else {
         designSquare.style.height = "180vw"
        designSquare.style.transform = "translate(-60%, 0)";
     }
})

//The article modal element
let articleModal = document.getElementById("modal");
let avoidingExclusionArticle = document.getElementById("article1-view-button");
let educatingYourChildArticle = document.getElementById("article2-view-button");
let optionsForEducatingYourChild = document.getElementById("article3-view-button");
let SENArticle = document.getElementById("article4-view-button");
let EHCAArticle = document.getElementById("article5-view-button");
let EHCPArticle = document.getElementById("article6-view-button");
console.log(avoidingExclusionArticle)

function createContactUsModal(){
    articleModal.innerHTML = "";
    if(modal.offsetHeight < 65){
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
function createSENArticle(){
        articleModal.innerHTML = "";
    if(articleModal.offsetHeight < 65){
        articleModal.innerHTML = "";   
        let closeBtn = document.createElement("div");
        closeBtn.innerHTML = "<i class='fas fa-times'></i>";
        closeBtn.classList.add("close");
        articleModal.prepend(closeBtn)
        closeBtn.addEventListener("click", function(){
            articleModal.classList.remove("show");
        })

        let articleModalContent = document.createElement("div");
        articleModalContent.classList.add("content")
        articleModal.append(articleModalContent)

        let heading = document.createElement("h1");
        heading.innerText = "Special Educational Needs (SEN)"
        heading.classList.add("modal-heading");
        modal.prepend(heading);

        articleModal.classList.add("show")

        articleModalContent.innerHTML = "<p>Things you need to know if you think your child has SEN.</p><p>Your child may have a SEN if they are not learning at the same rate as children of their age and or ability. This could be because they have difficulties with:<ul><li>Cognition and learning – the rate at which they learn which could affect one or more aspect of how they learn or where they have difficulty with all areas of the curriculum</li><li>Communication and interaction – how they communicate ideas and interact with others or understand what is being said to them</li><li>Sensory and physical – they could have a disability which prevents them from using the facilities generally provided e.g. gym apparatus</li><li>Social emotional and mental health – which might be caused by social and / or emotional difficulties and leads them to be withdrawn or isolated or displaying challenging, disruptive or disturbing behaviours</li></ul></p><h2>Behaviours that could be of concern</h2><p>Some of the behaviours which might indicate your child has a SEN are<ul><li>Difficulty concentrating for any period of time and/or fidgeting or moving around a lot</li><li>being withdrawn or disengaged with learning</li><li>lacking confidence or having low self esteem</li><li>being anxious</li><li>being disorganised, forgetful</li><li>difficulty doing activities like running, jumping or hopping</li><li>getting their letters mixed up when writing</li><li>not being able to understand the meaning of what they’re being told</li></ul></p><h2>What you can do to support your child</h2><ul><li>If you are worried that your child may have difficulties with their learning you should speak to them about your concerns</li><li>Listen to what your child has to say about the difficulties they are having with learning if they are able to express their thoughts.  Your child might find it hard to explain because they may have difficulties talking about or don’t want to speak about the issue</li><li>Speak to your child’s class teacher and the SEN Co-ordinator (SENCo) about your concerns and ask them what they will do to support your child. Your child does not need to have a formal diagnosis of SEN for this.</li></ul><h2>What support can you expect from your child’s nursery or school</h2><p>The nursery or school must:<ul><li>use their best endeavours to make sure your child gets the support they need to meet any SEN your child may have</li><li>assess your child’s skills, progress and levels of attainment by collecting information they have, you and child provide or which is published nationally by for example the Department for Education (DFE)</li><li>talk to you and your child about their strengths and weaknesses</li><li>Discuss and agree with you and your child the outcomes the child is to achieve to be successful in the different phases of their education and to prepare for adult life</li><li>Discuss and agree with you and your child what they will be doing to support your child in achieving the outcomes agreed</li><li>Take action to remove barriers to your child’s learning</li><li>If they consider your child needs additional support to help their learning, they must put in place support known as SEN support for your child and tell you they are doing this What you can expect if SEN support is provided for your child</li></ul>The SEN support should follow a four-part cycle:<ul><li>Assessing your child’s needs based on the teacher’s experience or through assessment by an educational psychologist, speech and language therapist, an occupational therapist, health professional or other relevant professional</li><li>Planning what adjustments, interventions and support will be put in place as well as the expected impact on progress, development and or behaviour</li><li>Implementation of the agreed SEN support</li><li>Reviewing the effectiveness of the SEN support and adapting it if the child is not making expected progress</li></ul></p><h2>What happens if my child is not making expected progress with the support the school has put in place?</h2><p>If despite the support the school puts in place your child is not making expected progress you or the school can apply to your local authority (The Council) for an <span onclick='createEHCAArticle()' class='article-link'>education, health and care assessment</span> of your child’s needs.</p><p>If the council decides your child has SEN which requires more support than the school is able to put in place it may issue your child an Educational, Health and Care Plan (EHCP)</p>"
    }
}

function createEHCAArticle(){
        articleModal.innerHTML = "";
    if(articleModal.offsetHeight < 65){
        articleModal.innerHTML = "";   
        let closeBtn = document.createElement("div");
        closeBtn.innerHTML = "<i class='fas fa-times'></i>";
        closeBtn.classList.add("close");
        articleModal.prepend(closeBtn)
        closeBtn.addEventListener("click", function(){
            articleModal.classList.remove("show");
        })

        let articleModalContent = document.createElement("div");
        articleModalContent.classList.add("content")
        articleModal.append(articleModalContent)

        let heading = document.createElement("h1");
        heading.innerText = "Education, Health and Care Assessment"
        heading.classList.add("modal-heading");
        modal.prepend(heading);

        articleModal.classList.add("show")

        articleModalContent.innerHTML = "<h2>What is it and how do you get one?</h2><p>An education, health and care needs assessment (EHC needs assessment) is an assessment of your child’s education, health and care needs.</p><p>You or the school can apply to the local council where you live for an EHC needs assessment if you think your child has difficulty with their learning which requires education or training provision that is additional to or different from that made generally for other children of their age and or ability.</p><p>Your local council must:<ul><li>decide whether an assessment is necessary</li><li>consult with you and your child and take into account your views, wishes and feelings.</li><li>Inform you of where you can get advice and information about the EHC assessment process</li><li>tell you that you can send them information to support your application</li><li>consider all information provided in support of your application</li><li>tell you within six weeks whether or not they are going to carry out an EHC needs assessment</li></ul></p><h2>What can you do if the council refuses to carry out an EHC needs assessment?</h2><ul><li>You can ask the council to review its decision or try to come to a resolution through mediation</li><li>Challenge the council’s decision in the Special, Educational Needs and Disability Tribunal</li></ul><h2>What happens if the council decides to carry out an EHC needs assessment?</h2><p>If the council decides to carry out an EHC assessment, they will ask you to provide information to support your application, for example, medical reports and or they may ask you to agree to their professionals assessing your child’s needs.</p><h2>What should you expect once the council has carried out the EHC needs assessment?</h2>After the assessment the council must tell you whether or not they will issue an Education, <span onclick='createEHCPArticle()' class='article-link'>Health and Care Plan (EHC Plan)</span>. The council must tell you the outcome of the assessment within 20 weeks of your application. There are limited circumstances in which the council can extend the 20 weeks for telling you the outcome.</p><p>If the council issues an EHC Plan, the most important thing it will include is a description of your child’s educational (and social care and health care) needs and the support that will be put in place to meet those needs.</p><p>If you are unhappy with the information about your child’s educational needs and / or you think the support the council has included in the EHC Plan is not enough you can ask the council to arrange mediation to try to resolve the dispute. You can also challenge the decision in the SEND tribunal if you can’t resolve it with the council the council through mediation</p><p>If the council decides not to issue an EHC Plan, you can ask the council for mediation to try to resolve the issue. You can also challenge the decision in the SEND tribunal if you can’t resolve it with the council the council through mediation</p>"
    }
}

function createEHCPArticle(){
    articleModal.innerHTML = "";
     if(articleModal.offsetHeight < 65){
        articleModal.innerHTML = "";   
        let closeBtn = document.createElement("div");
        closeBtn.innerHTML = "<i class='fas fa-times'></i>";
        closeBtn.classList.add("close");
        articleModal.prepend(closeBtn)
        closeBtn.addEventListener("click", function(){
            articleModal.classList.remove("show");
        })

        let articleModalContent = document.createElement("div");
        articleModalContent.classList.add("content")
        articleModal.append(articleModalContent)

        let heading = document.createElement("h1");
        heading.innerText = "Education, Health and Care Plan (EHC Plan)"
        heading.classList.add("modal-heading");
        modal.prepend(heading);

        articleModal.classList.add("show")

        articleModalContent.innerHTML = "<h2>What is it?</h2><p>The EHCP is to make special educational provision to meet a child’s SEN over and above what a school is capable of providing through SEN support.</p><h2>What information is in the EHC Plan</h2><p>The EHC Plan must include certain information by law and is sectioned into 11 parts,<ul class='noListType-list'><li>sections A - K</li><li>Section A: sets your’s and your child’s views, interests and aspirations</li><li>Section B: sets out your child’s SEN</li><li>Section C: sets out your child’s health care needs which relate to their SEN</li><li>Section D: sets out your child’s social care needs related to their SEN or disability</li><li>Section E: sets out the  outcomes for your child and identifies the arrangements for setting targets by the nursery or school</li><li>Section F: sets out the special educational provision necessary to meet your child’s needs</li><li>Section G: sets out health provision required by your child’s learning difficulties or disability related to their SEN</li><li>Section H1 & H2: sets out the social care provision which must be made your child if they have a disability and or required by their learning difficulties to meet their SEN</li><li>Section J: sets out details of how any personal budget will support the particular outcomes (if you opt for this)</li><li>Section K: lists the advice and information collected for the EHC needs.</li></ul></p><h2>Why is it important to have an EHC Plan</h2><p>The EHC Plan provides more protection for your child because:<ul><li>it gives you a route to challenge the council if it fails to ensure the provision in the EHC Plan is put place and delivered</li><li>If you are unhappy with what the council says about your child’s needs or the provision needed to meet those needs you can challenge the council’s decision in the SEND tribunal</li><li>You get to choose the school you want your child to go to and the council has to name your choice of school in the EHC Plan unless they consider it’s not suitable for the child or it would be unreasonable use of resources or would have an adverse impact on the education of the child or those they will go to school with. You could even choose an independent school and the council would still have to consider your choice. The council can only refuse your choice of an independent school if to agree to it would be incompatible with the efficient education or training of others or the avoidance of unreasonable public expenditure.</li></ul>If you would like support in asking your council for an EHC Plan please <span onclick='createContactUsModal()' class='article-link'>contact us</span></p>"
    }
}
avoidingExclusionArticle.addEventListener("click", function(){
    if(articleModal.offsetHeight < 10){
        articleModal.innerHTML = "";   
        let closeBtn = document.createElement("div");
        closeBtn.innerHTML = "<i class='fas fa-times'></i>";
        closeBtn.classList.add("close");
        articleModal.prepend(closeBtn)
        closeBtn.addEventListener("click", function(){
            articleModal.classList.remove("show");
        })

        let articleModalContent = document.createElement("div");
        articleModalContent.classList.add("content")
        articleModal.append(articleModalContent)

        let heading = document.createElement("h1");
        heading.innerText = "Avoiding Exclusion - Early Intervention"
        heading.classList.add("modal-heading");
        modal.prepend(heading);

        articleModal.classList.add("show")

        // let articleContent = document.createElement("div");
        articleModalContent.innerHTML = "<p>For many children at risk of exclusion, whether fixed term or permanent, there will usually be a number of warning signs such as frequent detentions, negative behaviour points, regular fixed term exclusions or refusals to go to school. As parents you need to recognise the signs of things going wrong and act as quickly as possible to prevent your child being excluded from school permanently.</p><p>If your child is at risk of exclusion or not enjoying school it means something is wrong.  It might be something that could be fixed with the school. Or it might mean having to review whether the school is the right one for your child, sometimes it won't be and you may have to decide to move on or take the risk that the school will move your child on. The latter takes away yours’ and your child's ability to take control of their education. It is important you and your child have control of their education!</p><p>A child at risk of exclusion may have unmet needs such as special educational needs.  However this might not always be the case sometimes the school is not stretching your child’s intellect enough.  So what can you do if things don't seem to be going right? This is where early intervention comes in.</p><h2>What is early intervention</h2><p>Early intervention refers to the steps you might need to take if your child is at risk of exclusion to prevent them receiving more exclusions or being permanently excluded.</p><h2>Why early intervention is important</h2><p>Early intervention is important because unless you take action, your child is at risk of permanent exclusion, unauthorised absenteeism, being a school refuser, falling into anti-social behaviour patterns and worst case scenario joining the criminal justice system.</p><h2>How early intervention works</h2><p>Early intervention starts with you as the parent, as you have the main responsibility for your child. It's hard to accept that our child is not getting on well in school and the tendency is to blame the child, the school and even yourself. The good news is no one is necessarily to blame! We're all individuals and what might work for one person will not work for another, the same is true for our children. Some learn best sitting in a classroom being taught, others learn best through practical and / or creative learning e.g. using their hands. Finding your child’s learning style will help them achieve their best potential.</p><h3>Things you can do to help your child</h3><ul><li>Get to know your child - it's incredible how little we know about our own children only finding out about them when things begin to go wrong</li><li>Speak to your child -  find out about their learning style, do they like sitting down and reading? Or do they like to move about a lot and /or be practical and creative e.g. using their hands? Do they like to learn on-line or in a face to face situation?</li><li>Get to know the school your child is attending or they will be going to - is it the type of school that sees children as individuals with their own ideas or are all  children treated as a one single group with those who don't fit into that set up being excluded socially? Is it strict on discipline?</li><li>Ask yourself how your child's school supports them - does the school tell them what they must do  and make assumptions about the reasons for your child’s behaviour or does the school invite you and your child to discuss concerns and work with you and your child to understand your child's behaviour and likely reasons for it.</li></ul><h3>Children who have difficulty learning in their school</h3><ul><li>If you think or know your child has difficulty with the way the school teaches so that they need additional or different support with learning in the school’s educational set up, compared to their friends, you should speak to the special educational needs co-ordinator (SENCo) to discuss what support the school can put in place to help. This can be anything from your child receiving regular support from a learning support assistant/ teaching assistant to having regular breaks during lessons to help your child from feeling overwhelmed. A learning support /teaching assistant can help to break down the teaching material to make it more manageable for your child to digest it.</li><li>If your  child has an <span onclick='createEHCPArticle()' class='article-link'>education, health and care plan</span>, (EHCP) check whether the provision detailed in section F of that plan is being delivered. If it isn't, get on to your local authority to find out why and what they will do to ensure the provision is put in place. Don’t accept a local authority telling you it’s the school’s responsibility to put in place the provision in the plan, it is not the school’s responsibility but the local authority’s.</li><li>If your child does not have an education health and care plan you may need to make a request to your local authority for one, (for more information <span onclick='createSENArticle()' class='article-link'>see our page on special educational needs</span>)</li><li>Consider whether the school can meet your child's academic ability - is your child telling you they are bored of the work given? Or that they are finishing their work too quickly? Is your child progressing but still getting detentions? These could be signs your child's school is not meeting their intellectual abilities. You should speak to the class teacher, head of year or head teacher about what they will do to stretch your child. If the school is unable or unwilling to listen, you may need to consider whether  a change of school is necessary or consider alternative options, such as home tuition.<span class='article-link> see Options for educating your child</span></li></ul><br><p>If you would like support in getting early intervention support for your child please <span onclick='createContactUsModal()' class='article-link'>contact us.</span></p>"

        // articleModalContent.append(articleContent)
    }

})

educatingYourChildArticle.addEventListener("click", function(){
    if(articleModal.offsetHeight < 10){
        articleModal.innerHTML = "";   
        let closeBtn = document.createElement("div");
        closeBtn.innerHTML = "<i class='fas fa-times'></i>";
        closeBtn.classList.add("close");
        articleModal.prepend(closeBtn)
        closeBtn.addEventListener("click", function(){
            articleModal.classList.remove("show");
        })

        let articleModalContent = document.createElement("div");
        articleModalContent.classList.add("content")
        articleModal.append(articleModalContent)

        let heading = document.createElement("h1");
        heading.innerText = "Options for Educating Your Child"
        heading.classList.add("modal-heading");
        modal.prepend(heading);

        articleModal.classList.add("show")

        articleModalContent.innerHTML = "<p>The law says that parents must provide education for their child(ren) which is suitable for their age, ability, aptitude and special educational needs.</p><p>Most children are educated in state funded schools and academies and you may choose to send your one of these. </p><p>If your child has been permanently excluded from school or is at high risk of exclusion, this could be an indicator that state funded education is not working for them. You might therefore want to consider alternatives to state funded education.</p><p>Parents have the  right to elect to educate their children outside of a state funded school.  For more information <a href='downloadableFiles/EHE_guidance_for_parentsafterconsultationv2.2.pdf' target='_blank'> see DFE Elective Home Education for Parents </a></p><h2>What are some of the alternatives to state funded education?</h2><h3>Independent schools</h3><p>Independent schools are, as their name suggests, independent of the state. This means they charge fees for educating your child. Not all independent schools are expensive and unaffordable, so it is always worth doing your homework.</p><p>Many independent schools offer discounted fees, known as bursaries, or scholarships, which means you may not have to pay tuition fees.</p><p>You might also be able to get funding from certain charities to fund some or all of the tuition fees.</p><p>It’s not just tuition fees to think about though, you will also have to pay for uniform, certain equipment, extra-curricular activities and other costs which may be necessary for your child to attend the school. Again you might be able to get funding from charities for this.</p><h3>Home tuition</h3><p>Home tuition entails not sending your child to a school and instead tutoring them at home. This doesn’t mean you have to actually tutor them at home if this would be difficult. There are many tuition services offering tutoring in the home or at one of their bases or even in the community.  There are also organisations that provide advice and support for parents who choose to tutor their child(ren) at home.</p><h3>Online tuition</h3><p>Home tuition can be face to face or on-line. Many tutoring services now offer online tuition.</p><h3>Flexi schooling</h3><p>Flexi Schooling is an arrangement between the parent and school where your child is registered at a school but attends on a part time basis. For the rest of the time, you decide how your child will be educated whether at home or through other tuition arrangements. </p><p>You will need to get the agreement of the head teacher / principal of the school at which your child is registered as otherwise it would be unlawful for your child to be absent from school without authorised consent.</p><h2>What you need to think about if you are considering alternatives to state funded education</h2><ul><li>your child(ren)’s views on any decision about their education. Children often have ideas about how they learn best and what works for them.</li><li>whether removing your child(ren) from state funded education is a realistic option for you. Educating your child independently can be expensive and take up a great deal of time especially if you are going to educate them yourself.</li><li>the local education authority will want to know that you are providing a suitable education for your child if they’re not in school so you will need to be able to show them on request what arrangements you have in place. If you fail to provide information that satisfies them the education you are providing is suitable they can force you to send your child to a school and if you refuse prosecute you which could lead to you having to pay a fine or even go to prison.</li></ul>"
    }
})

optionsForEducatingYourChild.addEventListener("click", function(){
    if(articleModal.offsetHeight < 10){
        articleModal.innerHTML = "";   
        let closeBtn = document.createElement("div");
        closeBtn.innerHTML = "<i class='fas fa-times'></i>";
        closeBtn.classList.add("close");
        articleModal.prepend(closeBtn)
        closeBtn.addEventListener("click", function(){
            articleModal.classList.remove("show");
        })

        let articleModalContent = document.createElement("div");
        articleModalContent.classList.add("content")
        articleModal.append(articleModalContent)

        let heading = document.createElement("h1");
        heading.innerText = "School Exclusions"
        heading.classList.add("modal-heading");
        modal.prepend(heading);

        articleModal.classList.add("show")

        articleModalContent.innerHTML = "<p>Exclusion from school is when your child has been asked not to go into school for a period of time or at all. This is an external exclusion.  Exclusion can also be where your child has to go into isolation at school. This is known as an internal exclusion.</p><p>A child can only be excluded for a breach of,  (i.e. not following), the school’s behaviour policy and it is reasonable and fair to exclude the child.</p><p>Only the head teacher /principal  (or a person acting as a headteacher / principal) can exclude your child from school. If any other member of staff excludes your child this is unlawful.</p><p>The head teacher / principal must tell you in writing within a reasonable time of your child’s exclusion, the reason for it and your rights to challenge it, if appropriate. If they fail to tell you in writing this is known as 'off rolling' and is not allowed.</p><p>The head teacher /principal must follow the statutory guidance on schools’ exclusion when making any decision on exclusion.  The statutory guidance gives information on the process the head-teacher/principal must follow. If the head teacher / principal fails to follow the process or the principles in the statutory guidance this could be a reason to challenge their decision.</p><h2>what are the different types of exclusions</h2><p>There are two main types of exclusion:<ul><li>fixed term – temporary – can be up to 45 days in a school year (from September to July)</li><li>permanent</li><li>internal exclusion / isolation units</li></ul></p><h3>Fixed term exclusion</h3><p> A fixed term exclusion is when a child is excluded for a short period of time for a breach of the behaviour policy and the head teacher thinks that the child will not repeat the behaviour or can learn from the behaviour resulting in the exclusion.</p><p>The school must tell you how long your child is excluded for and if appropriate about your right to challenge the exclusion.<p>If a fixed term exclusion is issued there should always be a reintegration meeting when your child returns to school. The reintegration meeting is the opportunity for you, your child and the school to discuss the school’s expectations from your child on returning to school and what if any support will be put in place to avoid more exclusions.</p><h3>Permanent exclusion</h3><p>Permanent exclusion is when your child is told they cannot return to the school unless the governors decide they should be allowed back.</p><p>Your child can be excluded permanently only if they have breached (i.e. failed to follow) the school’s behaviour policy in a serious way for a one off incident or persistently.</p><p> Permanent exclusion should be the last resort. It should only happen if there are no alternatives to exclusion e.g. transferring the child to another school (known as a managed move), or giving the child the chance to improve their behaviour by attending an <span class='article-link' target='_blank' >alternative provision for support with managing their behaviour.</p><p>The school’s governing body’s disciplinary committee (GBDC) must review the decision to exclude your child permanently within 15 school days of the decision to exclude. </p><h3>Internal isolation/exclusion/</h3><p>This involves removing your child to a separate room from their main  classroom which instead of sending them home or excluding them. It offers short-term teaching and support programmes tailored to the needs of pupils who need help in improving their behaviour, attendance or attitude to learning.</p><h2>What must the headteacher/principal do when they decide to exclude your child</h2><p>When the headteacher/principal decides to exclude your child, whether for a fixed term or permanently, they must:<ul><li>tell you without delay of the exclusion and the reason for it in writing and</li><li>provide you with the following information:<ul><li>the reason(s) for the exclusion;</li><li>the period of a fixed-period exclusion or, if the exclusion is permanent</li><li>the fact that you have the right to make representations about the exclusion to the governing board and how your child may be involved in this;</li><li>your right to attend the GBDC, to be represented at that meeting and to take a friend with you (permanent exclusions and fixed term exclusions of more than 15 days in a school term)</li><li>that your child must not be in a public place during school hours while they are excluded</li><li>tell you what arrangements will be made for your child’s education during the period of exclusion.</li></ul><li>inform the governing body and the local authority of their decision if the exclusion is permanent, or for more than five school days, or if it would mean your child missing national exams or tests.</li></ul></p><h2>What can you do if your child has been excluded permanently</h2><p>If a decision is made to permanently exclude your child: <ul><li>Ask  the head teacher to reconsider the decision before informing the governors and council and consider alternatives to exclusion</li><li>You can make representations either in writing or in person to the governors when they review the decision, usually known as the Governing Body Disciplinary Committee (GBDC)meeting.</li><li>Ensure the school is providing education for the first five days from the date of the exclusion</li><li>Contact the local authority to find out what arrangements will be made for your child’s education from day 6 of the exclusion</li><li>Make a request to an Independent Review Panel to review the GBDC’s decision if they agree with (i.e. uphold) the headteacher’s /principal’s decision</li></ul></p><h2>What should you expect from the governing body</h2><p>The school’s governing body must:<ul><li>review the decision to exclude and consider reinstatement if your child has been:<ul><li>excluded permanently</li><li>excluded for a fixed term which would bring the total number of exclusions to more than 15 days in a term</li><li>excluded at a time which would mean they would miss a national test or exam</li></ul></li><li>Arrange the meeting to review the decision to exclude and invite you, the head teacher/principal and local authority, if it is a maintained school.</li><li>consider the your child’s interests and circumstances and those of others in the school when reviewing the decision</li><li>consider any representations made by you and the headteacher/principal</li><li>provide you with the evidence the headteacher/principal has relied on to exclude your child</li><li>ensure accurate notes/minutes of the meeting are taken. You have the  right to ask for a copy of the minutes</li><li>Send you written notification of their decision without delay following the review meeting<li></ul>(The governing body will usually give  this role to the GBDC)</p><h2>What are my rights to make representations to the GBDC</h2><p>You have the right to make representations to the GBDC in writing or in person. You can make the representations yourself or ask another person to do this for you.</p><p>The GBDC must consider whether the decision to exclude your child was reasonable, lawful and that the correct procedure was followed.  You should ensure your representations focus on these points. For example, if the headteacher/principal did not write to you about the exclusion but instead told you to take your child home this would be a failure to follow the procedure. Or the headteacher/principal excluded your child permanently for fighting with another child but only excluded that child for a short fixed term period. You should tell this to the GBDC and they should make a decision to reinstate your child.</p><p>Your representations can also address issues outside of school that may be affecting your child.</p><p>If the governing body decides to uphold the decision to exclude and not reinstate your child, they must notify you of this in writing without delay and provide you with the following information:<ul><li>The fact that it is permanent and</li><li>Notice of your right to ask for the decision to be reviewed by an Independent Review Panel. They must also tell you: <ol><li>the date by which you must make an application for a review (i.e. 15 school  days from the date on which notice in writing of the GBDC’s decision  is given; </li><li>where and to whom you should send your application for a review and your written evidence; </li><li>that your application should set out the reasons for requesting a review and that, where appropriate, this should include a reference to how the pupil’s  SEN are considered to be relevant to the exclusion; </li><li>that, regardless of whether your child has  recognised SEN, you have the right to require the local authority/academy trust to appoint an SEN  expert to advise the review panel; </li><li>that you may, at your own expense, appoint someone to make written  and/or oral representations to the panel.  </li><li>That, in addition to the right to apply for an independent review panel, if you believe that there has been unlawful discrimination in relation to the exclusion that you may make a claim under the Equality Act 2010 to the First-tier Tribunal  (Special Educational Needs and Disability) in the case of disability discrimination,  or the County Court, in the case of other forms of discrimination. </li></ol></li></ul></p><h2>What rights do I have challenge the GBDC’s decision</h2><p>If the GBDC agrees with the decision to exclude all is not lost. You can ask for an <span class='article-link'>Independent Review Panel (IRP)</span> to review the governing body’s decision. </p><p>The council or the academy trust , if your child was at an academy, must make arrangements for the IRP to review the decision. </p><p>You can ask for a review by an IRP even if you did not make representations at the GBDC’s meeting. <p>You must send your application for a review to the name and address given in the GBDC’s decision letter within 15 days from the date of the letter telling you of their decision.  In your application you should explain in full why you think the GBDC’s decision is wrong and ask for a SEN expert.</p><p>You can expect the review by the IRP to take place within 15 days from the date of your application.</p><p>If you would like support following your child’s exclusion please <span class='contactUs'>contact us<span></p><p>There is Government Guidance on school exclusions for schools and parents:<br><a href='downloadableFiles/Exclusion_Stat_guidance_Web_version (5).pdf'target='_blank' class='article-link'>Department for Education (DfE) – Exclusion from maintained schools, academies and pupil referral units (PRUs) in England (as at Sept 2017 including more recent updates to take account of the 2020 coronavirus pandemic)</a></p>";
    }
})

SENArticle.addEventListener("click", function(){
    if(articleModal.offsetHeight < 10){
        
    }
})


EHCAArticle.addEventListener("click", () => {
    createEHCAArticle();
})

EHCPArticle.addEventListener("click", function(){
   createEHCPArticle();
})
