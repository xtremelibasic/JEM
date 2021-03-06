
let primaryNavigation = document.getElementById("primary-navigation")


//The hamburger menu function
let hamburgerMenu = document.getElementById("hamburger-menu");

hamburgerMenu.addEventListener("click", function(){
    hamburgerMenu.classList.toggle("highlight");
    primaryNavigation.classList.toggle("show");
    

    let primaryNavigationTabs = Array.from(primaryNavigation.children);

    primaryNavigationTabs.map((tab,index) => {
        let delay = index / 20;
        if(primaryNavigation.classList.contains("show")){
            primaryNavigation.style.left = "0px";
            tab.style.animation = `reveal 1s ease  1 ${delay}s normal forwards running`;
            primaryNavigation.style.animation = `reveal 1s ease  1  0s normal forwards running`;
            
        } else {
            tab.style.animation = `conceal 1s ease  1  ${delay}s normal forwards running`;
            primaryNavigation.style.animation = `conceal 1s ease  1  .1s normal forwards running`;
        }
    })
    
})

let homeBtn = document.getElementById("home-btn");
let servicesBtn = document.getElementById("services-btn");
let resourcesBtn = document.getElementById("resources-btn");
let eventsBtn = document.getElementById("events-btn");
let aboutUsBtn = document.getElementById("about-us-btn");
let faqsBtn = document.getElementById("faqBtn");
 let relevantLegislationBtn = document.getElementById("your-rights-and-the-law");
 let contactUsBtn = document.getElementById("contactUsBtn");
 let supportUs = document.getElementById("support-us");
 let healthAndSafety = document.getElementById("health-and-safety");
 let dataProtectionPolicy = document.getElementById("data-protection-policy");
 let safeguardingPolicy = document.getElementById("safeguarding-policy");
 let WhistleblowingPolicy = document.getElementById("whistleblowing-policy");
 let equalityDiversityPolicy = document.getElementById("equality-diversity-policy");



//The modal
let modal = document.getElementById("modal");


//Events modal
let events = Array.from(document.querySelectorAll(".event"));

events.map(event => {
    let registerBtn = event.children.item(2);
    registerBtn.addEventListener("click", function(){
        if(modal.offsetHeight < 1){
            modal.innerHTML = "";   
            let closeBtn = document.createElement("div");
            closeBtn.innerHTML = "<i class='fas fa-times'></i>";
            closeBtn.classList.add("close");
            modal.prepend(closeBtn)
            closeBtn.addEventListener("click", function(){
                modal.classList.remove("show");
            })

            let modalContent = document.createElement("div");
            modalContent.classList.add("content")
            modal.append(modalContent)

            let heading = document.createElement("h1");
            heading.innerText = event.children.item(1).innerHTML.toUpperCase();
            heading.classList.add("modal-heading");
            modal.prepend(heading);
            modalContent.style.maxWidth = "800px";
            modalContent.style.padding = "2rem";

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

            let emailInput = document.createElement("input");
            emailInput.setAttribute("required", "");
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

            let subjectInput = document.createElement("input");
            subjectInput.setAttribute("required", "");
            subjectInput.value = "Event Registration";
            subjectInput.setAttribute("id", "subjectInput");
            subjectInput.setAttribute("type", "text");
            subjectInput.setAttribute("name", "subjectInput")
            contactForm.append(subjectInput);

            let breakTag3 = document.createElement("br");
            contactForm.append(breakTag3)

            let messageLabel = document.createElement("label");
            messageLabel.setAttribute("for", "messageTextArea")
            messageLabel.innerText = "Message"
            contactForm.append(messageLabel)

            let messageTextArea = document.createElement("textarea");
            messageTextArea.setAttribute("required", "");
            messageTextArea.setAttribute("id", "messageTextArea");
            messageTextArea.setAttribute("name", "messageTextArea")
            contactForm.append(messageTextArea)

            let breakTag4 = document.createElement("br");
            contactForm.append(breakTag4)


            let sendMessageBtn = document.createElement("button");
            sendMessageBtn.setAttribute("type", "submit");
            sendMessageBtn.innerHTML = "Register"
            sendMessageBtn.classList.add("btn");
            contactForm.append(sendMessageBtn)

            let statusMessage = document.createElement("span");
            statusMessage.classList.add("output_message");
            contactForm.append(statusMessage);
            modalContent.append(contactForm)
            

            
            modal.classList.add("show")
        }
    })
})


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
        nameInput. setAttribute("required", "");
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
        emailInput.setAttribute("required", "");
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

        let subjectInput = document.createElement("input");
        subjectInput.setAttribute("required", "");
        subjectInput.setAttribute("id", "subjectInput");
        subjectInput.setAttribute("type", "text");
        subjectInput.setAttribute("name", "subjectInput")
        contactForm.append(subjectInput);

        let breakTag3 = document.createElement("br");
        contactForm.append(breakTag3)

        let messageLabel = document.createElement("label");
        messageLabel.setAttribute("for", "messageTextArea")
        messageLabel.innerText = "Message"
        contactForm.append(messageLabel)

        let messageTextArea = document.createElement("textarea");
        messageTextArea.setAttribute("required", "");
        messageTextArea.setAttribute("id", "messageTextArea");
        messageTextArea.setAttribute("name", "messageTextArea")
        contactForm.append(messageTextArea)

        let breakTag4 = document.createElement("br");
        contactForm.append(breakTag4)


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

//Contact Us modal

contactUsBtn.addEventListener("click", ()=>{
   
        createContactUsModal();
        
        //Address Section of the contact form
        let addressDiv = document.createElement("div");
        addressDiv.classList.add("addressDiv");
        let addressIcon = document.createElement("img");
        addressIcon.classList.add("addressIcon");
        addressIcon.src = "resources/icons/place_white_24dp.svg";
        addressIcon.alt = "location icon";
        let addressContent = document.createElement("p");
        addressContent.classList.add("addressContent");
        addressContent.innerHTML = "Just Education Matters CIC,<br>Kemp House,<br> 152-160 City Road,<br>London EC1V 2NX<br>Telephone: 07936 449 834<br>Email: info@justeducationmatters.org<br>Web: www.justeducationmatters.org";
        addressDiv.append(addressContent);
        addressDiv.append(addressIcon);
        modal.append(addressDiv);

        

       
   
})

//Relivant Legislation modal

relevantLegislationBtn.addEventListener("click", () => {
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
        heading.innerText = "Education Law"
        heading.classList.add("modal-heading");
        modal.prepend(heading);

        let educationSection = document.createElement("section");
        modalContent.append(educationSection)

        let educationSectionTitle = document.createElement("h2");
        educationSectionTitle.innerHTML = "Education";
        educationSection.append(educationSectionTitle);
        
        let link1 = document.createElement("a");
        link1.innerHTML = "The School Discipline (Pupil Exclusions and Reviews) (England) Regulations 2012 <br>";
        link1.href = "https://www.legislation.gov.uk/uksi/2012/1033/made";
        link1.setAttribute("target","_blank");
        educationSection.append(link1)

        let link2 = document.createElement("a");
        link2.innerHTML = "School Standards Framework Act <br>";
        link2.href = "https://www.legislation.gov.uk/ukpga/1998/31/contents";
        link2.setAttribute("target","_blank");
        educationSection.append(link2)

        let link3 = document.createElement("a");
        link3.innerHTML = "The Education Act 2002, as Amended by the Education Act 2011 <br>";
        link3.href = "https://www.legislation.gov.uk/ukpga/2002/32/contents";
        link3.setAttribute("target","_blank");
        educationSection.append(link3)

        let link4 = document.createElement("a");
        link4.innerHTML = "The School Discipline (Pupil Exclusions and Reviews) (England) Regulations 2012 <br>";
        link4.href = "https://www.legislation.gov.uk/uksi/2012/1033/contents#:~:text=The%20School%20Discipline%20%28Pupil%20Exclusions%20and%20Reviews%29%20%28England%29,be%20brought%20into%20force%20at%20a%20future%20date.";
        link4.setAttribute("target","_blank");
        educationSection.append(link4)
         
        let link5 = document.createElement("a");
        link5.innerHTML = "The Education and Inspections Act 2006 <br>";
        link5.href = "https://www.legislation.gov.uk/ukpga/2006/40/contents";
        link5.setAttribute("target","_blank");
        educationSection.append(link5)

        let link6 = document.createElement("a");
        link6.innerHTML = "The Education Act 1996 <br>";
        link6.href = "https://www.legislation.gov.uk/ukpga/1996/56/contents";
        link6.setAttribute("target","_blank");
        educationSection.append(link6)

        let link7 = document.createElement("a");
        link7.innerHTML = "The Education (Provision of Full-Time Education for Excluded Pupils) (England) <br>";
        link7.href = "https://www.legislation.gov.uk/uksi/2007/1870/made";
        link7.setAttribute("target","_blank");
        educationSection.append(link7)

        let link8 = document.createElement("a");
        link8.innerHTML = "Regulations 2007, as Amended by the Education (Provision of Full-Time Education for Excluded Pupils) (England) (Amendment) Regulations 2014 <br>";
        link8.href = "https://www.legislation.gov.uk/uksi/2007/1870/made";
        link8.setAttribute("target","_blank");
        educationSection.append(link8)

        let link9 = document.createElement("a");
        link9.innerHTML = "Department for Education (DfE) ??? Exclusion from Maintained Schools, Academies and Pupil Referral Units (PRUs) in England September 2017 <br>";
        link9.href = "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/921405/20170831_Exclusion_Stat_guidance_Web_version.pdf";
        link9.setAttribute("target","_blank");
        educationSection.append(link9)

        let link10 = document.createElement("a");
        link10.innerHTML = "Changes to the School Exclusions Process During the Coronavirus Outbreak <br>";
        link10.href = "https://www.gov.uk/government/publications/school-exclusion/changes-to-the-school-exclusion-process-during-the-coronavirus-outbreak";
        link10.setAttribute("target","_blank");
        educationSection.append(link10)

        let link11 = document.createElement("a");
        link11.innerHTML = "Keeping Children Safe in Education: Statutory Guidance for Schools and Colleges 2021 <br>";
        link11.href = "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1021914/KCSIE_2021_September_guidance.pdf";
        link11.setAttribute("target","_blank");
        educationSection.append(link11)

        let admissionsSection = document.createElement("section");
        modalContent.append(admissionsSection)

        let admissionsSectionTitle = document.createElement("h2");
        admissionsSectionTitle.innerHTML = "Admissions";
        admissionsSection.append(admissionsSectionTitle);

        
        let link12 = document.createElement("a");
        link12.innerHTML = "School Admissions Code Mandatory Requirements and Statutory Guidance for Admission Authorities, Governing Bodies, Local Authorities, Schools Adjudicators and Admission Appeals Panels September 2021";
        link12.href = "https://drive.google.com/open?id=1DuOtjhBlhF07RcA8xwbsu0qgpQ3SFLWN";
        link12.setAttribute("target","_blank");
        admissionsSection.append(link12)

        let link13 = document.createElement("a");
        link13.innerHTML = "School Admission Appeals Code Statutory Guidance for School Leaders, Governing Bodies and Local Authorities February 2012";
        link13.href = "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/275897/school_admission_appeals_code_1_february_2012.pdf";
        link13.setAttribute("target","_blank");
        admissionsSection.append(link13)

        let homeEducationSection = document.createElement("section");
        homeEducationSection.style.width = "100%";
        modalContent.append(homeEducationSection)

        let homeEducationSectionTitle = document.createElement("h2");
        homeEducationSectionTitle.innerHTML = "Home Education";
        homeEducationSection.append(homeEducationSectionTitle);

        let link14 = document.createElement("a");
        link14.innerHTML = "Elective Home Education Departmental Guidance for parents 2019";
        link14.href = "https://drive.google.com/open?id=1TAGFqMFYqeueH_LwG6VKtMVK_sglWprV";
        link14.setAttribute("target","_blank");
        homeEducationSection.append(link14)

        modal.classList.add("show")
   }
})

//Support us modal
function createSupportUsDivs(modalDiv){
    let followUsContainer = document.createElement("div");
    followUsContainer.classList.add("supportUsDivs");
    let followUsTitle = document.createElement("h2");
    followUsTitle.innerHTML = "Follow Us and Share Our Content";
    let followUsParagraph = document.createElement("p");
    followUsParagraph.innerHTML =  "Morbi ultricies hendrerit eros, commodo laoreet diam consectetur eget. Curabitur augue eros, posuere venenatis neque et, fermentum tempus libero. Vivamus lacinia pulvinar massa vitae molestie. Vivamus eleifend ac elit a egestas. Nunc nec lacus non sem sollicitudin cursus quis et enim. Etiam malesuada magna in erat venenatis, sit amet tristique eros euismod. Sed molestie erat a consectetur interdum.";
    let socialMediaLinksContainer = document.createElement("div");
    socialMediaLinksContainer.classList.add("socialMediaLinks")
    socialMediaLinksContainer.innerHTML = "<ul style='display:flex;justify-content:space-evenly'><li><a style='font-size:1.5rem;text-decoration:none' href='https://www.instagram.com/justeducationmatters/?hl=en-gb'><i class='fab fa-instagram-square'></i>&nbsp;Instagram</a></li><li><a style='font-size:1.5rem' href='https://twitter.com/bettaschooldays?s=20'><i class='fab fa-twitter-square'>&nbsp;Twitter</i></a></li></ul>";
    followUsContainer.append(followUsTitle);
    followUsContainer.append(followUsParagraph);
    followUsContainer.append(socialMediaLinksContainer);
    modalDiv.append(followUsContainer);

     let volunteerContainer = document.createElement("div");
    volunteerContainer.classList.add("supportUsDivs");
    let volunteerTitle = document.createElement("h2");
    volunteerTitle.innerHTML = "Volunteer Your Time";
    let volunteerParagraph = document.createElement("p");
    volunteerParagraph.innerHTML =  "Morbi ultricies hendrerit eros, commodo laoreet diam consectetur eget. Curabitur augue eros, posuere venenatis neque et, fermentum tempus libero. Vivamus lacinia pulvinar massa vitae molestie. Vivamus eleifend ac elit a egestas. Nunc nec lacus non sem sollicitudin cursus quis et enim. Etiam malesuada magna in erat venenatis, sit amet tristique eros euismod. Sed molestie erat a consectetur interdum.";
    let contactUsBtn = document.createElement("button");
    contactUsBtn.classList.add("btn")
    contactUsBtn.innerHTML = "Contact Us";

    contactUsBtn.addEventListener("click", () => {
        modal.innerHTML = "";
        createContactUsModal();
        modal.style.padding = "5% 0";
        
    })
    volunteerContainer.append(volunteerTitle);
    volunteerContainer.append(volunteerParagraph);
    volunteerContainer.append(contactUsBtn);
    modalDiv.append(volunteerContainer);
}

//Suppport Us
supportUs.addEventListener("click", () => {
    if(modal.offsetHeight < 10){
        console.log("clicked")
        modal.innerHTML = "";   
        let closeBtn = document.createElement("div");
        closeBtn.innerHTML = "<i class='fas fa-times'></i>";
        closeBtn.classList.add("close");
        modal.prepend(closeBtn)
        closeBtn.addEventListener("click", function(){
            modal.classList.remove("show");
        })

        let modalContent = document.createElement("div");
        modalContent.classList.add("content")
        modal.append(modalContent)

        let heading = document.createElement("h1");
        heading.innerText = "Support Us".toUpperCase()
        heading.classList.add("modal-heading");
        modal.prepend(heading);
        modalContent.style.maxWidth = "800px";
        modalContent.style.padding = "2rem";

        createSupportUsDivs(modalContent);
        modal.classList.add("show");
    }
})

//Health and safety modal

healthAndSafety.addEventListener("click", () => {
    if(modal.offsetHeight < 1){
        modal.innerHTML = "";   
        let closeBtn = document.createElement("div");
        closeBtn.innerHTML = "<i class='fas fa-times'></i>";
        closeBtn.classList.add("close");
        modal.prepend(closeBtn)
        closeBtn.addEventListener("click", function(){
            modal.classList.remove("show");
        })

        let modalContent = document.createElement("div");
        modalContent.classList.add("content")
        modal.append(modalContent)

        let heading = document.createElement("h1");
        heading.innerText = "health and safety policy".toUpperCase()
        heading.classList.add("modal-heading");
        modal.prepend(heading);
        modalContent.style.maxWidth = "800px";
        modalContent.style.padding = "2rem";

        let healthAndSafetyPolicyDiv = document.createElement("div");
        healthAndSafetyPolicyDiv.classList.add("policy");
        healthAndSafetyPolicyDiv.innerHTML = "<h2>GENERAL POLICY STATEMENT</h2><p><strong>JEM CIC, (JEM)</strong>, is committed to establishing and maintaining safe working conditions for its staff. In accordance with the Health and Safety at Work Act, 1974, this policy also covers non-employees (e.g. service users, volunteers, learners, job applicants and visitors). It is JEM???s policy to do all that is reasonable and practicable to prevent personal injury and damage to property, and to protect everyone from foreseeable work hazards, including the public insofar as they come into contact with its premises/services / training. Responsibilities for Health Safety fall to both the Organisation, employees and all who come into contact with our service.</p><br><h2>RESPONSIBILITY OF JEM</h2><p><strong>JEM</strong> has a responsibility, insofar as is reasonably practicable:</p><ul><li>To provide and maintain safe and healthy working conditions, taking account of any statutory requirements.</li><li>To assess the risks to the health, safety and welfare of employees, volunteers, earners and visitors whilst they are on any premises which the organisation may use from time to time to deliver services and to maintain a record of findings as required under the management of Health and Safety at Work Regulations 1999.</li><li>To adopt a systematic approach to safety which identifies priorities and sets objectives whereby risks are eliminated or minimised by the correct selection and design of facilities, equipment and processes.</li><li>To provide information, operational policies and procedures, training, instruction and supervision to enable staff to perform their work safely and efficiently.</li><li>To formally assess any teaching rooms, venues and equipment used for the delivery of programmes, services and training.</li><li>To make available all necessary safety devices and protective equipment and to provide instruction in their use.</li><li>To maintain a constant and continuing interest in health, safety and welfare matters, consulting and involving employees or their representatives wherever possible.</li><li>To liaise with all other employers upon its sites insofar as the activities of these employers affect the health, safety and welfare of the organisation???s staff, volunteers, learners and visitors.</li><li>To assist independent practitioners associated with the organisation to discharge their responsibilities in assessing and providing safe working conditions for the staff, service users, volunteers, learners and other visitors.</li></ul><br><h2>RESPONSIBILITIES OF EMPLOYEES, CONTRACTORS AND VOLUNTEERS</h2><p>All employees, contractors, volunteers and temporary staff have a duty while at work:</p><ul><li>To take reasonable care for the health and safety of themselves and of all other persons who may be affected by their acts or omissions.</li><li>To cooperate with the organisation in ensuring that all statutory and other requirements are complied with.</li><li>To observe the provisions of this Safety Policy and other policies, codes of practice etc., relating to health and safety.</li><li>Not to intentionally interfere with, or misuse, anything provided for health, safety or welfare.</li></ul><br><h2>HEALTH AND SAFETY ORGANISATION</h2><p>Directors are responsible for ensuring that the safety requirements are met for the organisation and overseeing and developing measures to ensure the health and safety at work of all employees as required under the management of Health and Safety at Work Regulations 1992.<br>To ensure that the best possible advice is available to employees at all levels and to obverse and monitor particular Health and Safety activities, the directors have a responsibility to:</p><ol><li>Ensure that the organisation meets its statutory obligations in relation to health and safety including:<ul><li>Risks assessments (including risk assessments for pregnant workers)</li><li>Safe setting up and use of Display Screen Equipment</li><li>Control of Substances Hazardous to Health (COSHH)</li></ul></li><li>To actively promote an improvement in the health and safety of the environment.</li><li>Consider accidents, sickness, incidents and reportable disease statistics and trends, to ensure that unsafe or unhealthy conditions and practices are known and identify opportunities for improvement.</li><li>To be the focal point of efforts to prevent accidents and overcome hazards.</li><li>Ensure that appropriate training and education is in place in relation to health and safety including induction, fire safety, lifting and handling, sharps injuries, etc., and to continually review the attendance levels and effectiveness of such training.</li><li>Regularly review and monitor the effectiveness of the organisation???s Health and Safety Policy. This can be through commissioned audits and review of incidents.</li><li>Consult professional experts where appropriate.</li><li>Be a link with any appropriate inspectors appointed by the Enforcement Authorities and to receive and consider the implications of reports from them.</li></ol><br><h2>SAFETY TRAINING</h2><p>The organisation recognises that instruction and training is crucial to promoting a healthy and safe environment for both staff and visitors. In order that staff can perform their task safely, all staff will be provided with appropriate health and safety training.<br>The organisation recognises the importance of health and safety training and firmly believes that to ensure its health and safety training is effective it must be based on need. Three main criteria have been identified:</p><ul><li>Legal requirements</li><li>Requirements identified following risk assessments</li><li>General health and safety information</li></ul><h3>Legal requirements</h3><p><strong>JEM</strong> has a duty under Section 2 of the Health and Safety at Work Act to provide such information, instruction and training that is necessary to ensure the health and safety at work of its employees.<br>In addition to the general duty, further regulations made under the act also require training to be given to employees. The main regulations are:</p><ul><li>Management of Health and Safety work Regulation 1992</li><li>Personal Protective Equipment Regulations 1992</li><li>Manual Handling Operations Regulations 1992</li><li>Health and Safety (Display Screen Regulations) 1992</li><li>Provision and Use of Work Equipment Regulations 1992</li><li>Work Place (Health, Safety and Welfare) Regulations 1992</li><li>Control of Substances Hazardous to Health Regulations 1992</li><li>Fire Precautions Act 1971</li></ul><h3>Requirements Identified following Risk Assessments</h3><p><strong>JEM</strong> has a duty to carry out a suitable and sufficient assessment of risks under the Management of Health and Safety at Work Regulations 1992 and the Control of Substances Hazardous to Health Regulations 1994 (COSHH).<br><strong>JEM</strong> recognises that much of this training will be a statutory requirement. However, in utilising these methods, the Board will be able to identify particular training needs for staff  and the areas of operation affected.<p><h3>General Health and Safety Information</h3><p>To help to maintain a health and safety culture within the organisation, training will be provided to all staff on a regular basis throughout the year.<br>The topics will be identified by scrutinising the accident reports, policy changes, and the need for refresher training.<br><strong>JEM</strong> is firmly committed to induction training for new staff of which safety instruction and information will play a major part.<br><h4>The Aim of JEM???s Health and Safety Training</h4><p>The aim of JEM is that all staff will be aware of, understand and be able to implement statutory obligations in relation to health and safety, and in particular to the requirements of the job they carry out.</p><h4>Administration of Health and Safety</h4><p>The directors are responsible for ensuring that staff is trained in accordance with the mandatory standards.  Attendance at these training events will be monitored and is mandatory for all appropriate staff.</p><h4>Training Records</h4><p><strong>JEM</strong> will record all training.  This is invaluable in the event of an accident or a civil action and to provide evidence that statutory training has been carried out.</p><br><h2>REMOTE WORKING</h2><p>When staff is working from home, permanently or temporarily, as an employer we will:</p><ul><li>Keep in touch with staff through an agreed arrangement</li><li>Discuss the work activity to be done (and for how long) and how it can be done safely.</li></ul><h3>Lone working without supervision</h3><p>There will always be greater risks for lone workers with no direct supervision or anyone to help them if things go wrong.  We will keep in touch with lone workers, including those working from home, and ensure regular contact to make sure they are healthy and safe.</p><h3>Working with display screen equipment</h3><p>For staff working from home on a long-term basis, the risks associated with using display screen equipment (DSE) must be controlled. This includes doing workstation assessments at home.<br><strong>JEM</strong> will provide staff with advice on completing their own basic assessment at home.<br><strong>JEM</strong> will keep DSE arrangements under review</p><h3>Mental wellbeing</h3><p>Home working can cause work-related stress and affect staff's mental health. Being away from managers and colleagues could make it difficult to get proper support.<br><strong>JEM</strong> will put procedures in place to keep in direct contact with home workers in order to recognise signs of stress as early as possible.<br>There will be an emergency point of contact that staff can get help if they need it.</p></br><h2>POLICIES, GUIDELINES AND CODES OF PRACTICE</h2><p><strong>JEM</strong> will develop, maintain and keep under review such policies, guidelines and codes of practice as are necessary to advise and support the activities of its staff.</p><br><h2>PROVIDERS OF CONTRACTED SERVICES</h2><p><strong>JEM</strong> will ensure that providers of contracted services, and those contractors which are used from time to time have their own Policies, Codes of Practice, Local Rules, etc., which are complementary to those of the organisation.<br>In addition, providers of contracted service will be required to adhere to all the Policies, Guidelines, Codes of Practice and Local Rules of JEM. Managers of contracts will be responsible for monitoring the performance of contractors in this respect to ensure that JEM is not put at risk.<br>This policy will be reviewed by the Board of Directors every three years from the date of creation. <br><br><br>Created: 20 October 2021<br>Review date: 20 October 2024<br>Approved: Board of Directors</p>";
        
        modalContent.append(healthAndSafetyPolicyDiv);
        modal.classList.add("show");
    }
    
})

//Safeguarding policy modal

dataProtectionPolicy.addEventListener("click", () => {
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
        modalContent.classList.add("content")
        modal.append(modalContent)

        let heading = document.createElement("h1");
        heading.innerHTML = "data protection policy".toUpperCase();
        heading.classList.add("modal-heading");
        modal.prepend(heading);
        modalContent.style.maxWidth = "800px";
        modalContent.style.padding = "2rem";

        let definitionsContainer = document.createElement("div");

        let definitionsTitle = document.createElement("h3");
        definitionsTitle.innerHTML = "Definitions";
        definitionsContainer.append(definitionsTitle);

        let definition1 = document.createElement("p");
        definition1.classList.add("policy-table");
        definition1.innerHTML = "<b>Organisation</b> means Just Education Matters CIC, a registered Community Interest Organisation.";
        definitionsContainer.append(definition1);

        let definition2 = document.createElement("p");
        definition2.classList.add("policy-table");
        definition2.innerHTML = "<b>GDPR</b> means the General Data Protection Regulation.";
        definitionsContainer.append(definition2);

        let definition3 = document.createElement("p");
        definition3.classList.add("policy-table");
        definition3.innerHTML = "<b>Responsible Person</b> means Data Protection Lead.";
        definitionsContainer.append(definition3);

        let definition4 = document.createElement("p");
        definition4.classList.add("policy-table");
        definition4.innerHTML = "<b>Register of Systems</b> means a register of all systems or contexts in which personal data is processed by the Organisation.";
        definitionsContainer.append(definition4);
        modalContent.append(definitionsContainer)

        let policyContent = document.createElement("div");
       
        policyContent.innerHTML = "<h3>1. Data protection principles</h3><p>The Organisation is committed to processing data in accordance with its responsibilities under the GDPR.</p><p>Article 5 of the GDPR requires that personal data shall be:<ol><li>processed lawfully, fairly and in a transparent manner in relation to individuals; </li><li>collected for specified, explicit and legitimate purposes and not further processed in a manner that is incompatible with those purposes; further processing for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes shall not be considered to be incompatible with the initial purposes; </li><li>adequate, relevant and limited to what is necessary in relation to the purposes for which they are processed; </li><li>accurate and, where necessary, kept up to date; every reasonable step must be taken to ensure that personal data that are inaccurate, having regard to the purposes for which they are processed, are erased or rectified without delay; </li><li>kept in a form which permits identification of data subjects for no longer than is necessary for the purposes for which the personal data are processed; personal data may be stored for longer periods insofar as the personal data will be processed solely for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes subject to implementation of the appropriate technical and organisational measures required by the GDPR in order to safeguard the rights and freedoms of individuals; </li><li>processed in a manner that ensures appropriate security of the personal data, including protection against unauthorised or unlawful processing and against accidental loss, destruction or damage, using appropriate technical or organisational measures.</li></ol></p> <h3>2. General provisions</h3><ol><li>This policy applies to all personal data processed by the Organisation.</li><li>The Responsible Person shall take responsibility for the Organisation???s ongoing compliance with this policy.</li><li>This policy shall be reviewed at least annually.</li><li>The Organisation shall register with the Information Commissioner???s Office as an organisation that processes personal data.</li></ol><h3>3. Lawful, fair and transparent processing </h3><ol><li>To ensure its processing of data is lawful, fair and transparent, the Organisation shall maintain a Register of Systems.  NTO SELL</li><li>The Register of Systems shall be reviewed at least annually.</li><li>Individuals have the right to access their personal data and any such requests made to the Organisation shall be dealt with in a timely manner.</li></ol> <h3>4. Lawful purposes</h3><ol><li>All data processed by the Organisation must be done on one of the following lawful bases: consent, contract, legal obligation, vital interests, public task or legitimate interests (see ICO guidance for more information).</li><li>The Organisation shall note the appropriate lawful basis in the Register of Systems.</li><li>Where consent is relied upon as a lawful basis for processing data, evidence of opt-in  consent shall be kept with the personal data. </li><li>Where communications are sent to individuals based on their consent, the option for the individual to revoke their consent should be clearly available and systems should be in place to ensure such revocation is reflected accurately in the Organisation???s systems.</li></ol>  <h3>5. Data minimisation</h3><ol><li>The Organisation shall ensure that personal data are adequate, relevant and limited to what is necessary in relation to the purposes for which they are processed. </li><li>The Organisation shall collect the minimum amount of data relevant to the specifics of the work</li></ol><h3>6. Accuracy</h3><ol><li>The Organisation shall take reasonable steps to ensure personal data is accurate.</li><li>Where necessary for the lawful basis on which data is processed, steps shall be put in place to ensure that personal data is kept up to date.</li><li>The Organisation will ensure as far as is reasonably possible that the data collected is provided electronically by the user or verified by them as accurate.</li></ol><h3>7. Archiving / removal</h3><ol><li>To ensure that personal data is kept for no longer than necessary, the Organisation shall put in place an archiving policy for each area in which personal data is processed and review this process annually. </li><li>The archiving policy shall consider what data should/must be retained, for how long, and why.</li></ol><h3>8. Security</h3><ol><li>The Organisation shall ensure that personal data is stored securely using modern software that is kept-up-to-date.</li><li>Access to personal data shall be limited to personnel who need access and appropriate security should be in place to avoid unauthorised sharing of information.</li><li>When personal data is deleted this should be done safely such that the data is irrecoverable.</li><li>Appropriate back-up and disaster recovery solutions shall be in place.</li></ol><h3>9. Breach</h3><p>In the event of a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data, the Organisation shall promptly assess the risk to people???s rights and freedoms and if appropriate report this breach to the ICO (more information on the ICO website).<br>&nbsp;<br>Created: 20 October 2021<br>Review date: 20 October 2022<br>Approved: Board of Directors"
        
        modalContent.append(policyContent)
        modal.classList.add("show");
    }
})

//Safeguarding policy modal

safeguardingPolicy.addEventListener("click", () => {
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
        modalContent.classList.add("content")
        modal.append(modalContent)

        let heading = document.createElement("h1");
        heading.innerHTML = "safeguarding children and<br>young people policy".toUpperCase();
        heading.classList.add("modal-heading");
        modal.prepend(heading);
        modalContent.style.maxWidth = "800px";
        modalContent.style.padding = "2rem";

        let safeguardingPolicyContentDiv = document.createElement("div");
        safeguardingPolicyContentDiv.classList.add("policy");
        
        safeguardingPolicyContentDiv.innerHTML = "<h2>Contents<h2><h3>Introduction<br>&nbsp;<br>Policy<br><ol><li>The Rights of Children and Young People</li><li>Roles and Responsibilities of Staff and Volunteers</li><li>Child Abuse</li><li>Indicators of Abuse</li><li>Bullying</li><li>Who is Responsible for Investigating Incidences of Child Abuse?</li><li>Responding to Disclosure, Suspicions and Allegations</li><li>Keeping Records</li><li>Sharing Information</li><li>Storing Information</li><li>Photography and Filming</li><li>Safe Recruitment and Selection</li><li>Allegations against staff, volunteers and board members</li><br>APPENDIX 1 ??? Image Consent Form<br>APPENDIX 2 ??? Useful contact details</h3><br>&nbsp;<br><h2>Introduction</h2><p>Just Education Matters CIC (JEM) works with young people through a variety of programmes and projects. JEM believes that safeguarding and protecting children from harm should underpin all of our work with young people, to ensure they have positive experiences, not only when engaging with our services but in their daily activities.<br><br><strong>JEM</strong> is required to fulfil its legal duty under Section 11 of the Children Act 2004 and fulfil statutory responsibilities set out in Working Together to Safeguard Children (HM Government 2006). Therefore, safeguarding and promoting the welfare of children must be an integral part of the services offered to all children and young people within JEM.<br><br><strong>JEM</strong>  has a responsibility to continually review and monitor its safeguarding policy and procedures, gaining further advice and information wherever possible. All staff, volunteers and board members should be aware of this policy and procedures in order to understand their individual responsibilities and help promote best practice.<br>Promoting children???s wellbeing and safeguarding them from significant harm depends upon effective information sharing, collaboration between agencies and understanding of the need to work in partnership with children and young people and their families.<br><br>The aim of this policy is to set out the responsibilities of JEM and its employees to safeguard and promote the welfare of children and young people. This guidance outlines what is unlawful and will not be tolerated, and how staff and volunteers can act professionally in all engagement with young people. It also outlines what is and is not appropriate behaviour from staff and volunteers. It is not exhaustive and staff should complete risk assessments for all events involving young people in order to help identify and manage any potential risks.<br>Joan Hall is the Key Safeguarding Officer for JEM and should be the first point of contact in relation to safeguarding issues. <br><br>Annette McCrea is the Deputy Key Safeguarding Officer for JEM and should be contacted immediately if you have urgent concerns about a child and can???t contact the Key Safeguarding Officer.<br><br>Esther Maynard is the Board Level Safeguarding Lead and provides challenge and support to the Key Safeguarding Officer.<br><br>The board has responsibility for JEM Safeguarding Policy, ensuring that this is reviewed and updated regularly and that the Board has effective arrangements and processes in place in order to secure compliance with statutory obligations and guidance.</p><br><h2>Policy</h2><ol><li><h3>The Rights of Children and Young People</h3><p><strong>JEM</strong> is committed to protecting children and young people from harm. JEM believes that:</p><ul><li>The welfare  of the child is paramount and should be a part of all work with children.</li><li>All children and young people have the right to grow up in a caring and safe environment.</li><li>Children and young people have the right to be protected from abuse and neglect and to expect that adults in positions of responsibility will do everything possible to protect that right.</li><li>The protection of children and young people from abuse should be seen as part of the general responsibility of JEM.</li><li>Responsibility for safeguarding children and young people must be shared to ensure that young people will be protected effectively, with all relevant agencies and individuals accepting responsibility and working together.</li><li><strong>JEM</strong>???s child and young people services should be delivered within an ethical and professional framework.</li></ul></li><li><h3>Roles and Responsibilities of JEM Staff, Volunteers and Board Members </h3><p>All staff, volunteers and board members should ensure that safeguarding and promoting the welfare of young people is an integral part of their work.  All staff, volunteers and board members must:</p><ul><li>Treat all young people in a professional and respectful manner.</li><li>Work in an open and transparent way in relation to young people.</li><li>Discuss and/or take advice from the Key Safeguarding Officer about any incident which has given them concern.</li><li>Keep a written record of any concerning incidents.</li><li>Apply the same professional standards to all young people regardless of gender, sexual orientation, ethnicity, disability, gender identity, religion and/or faith and age.</li><li>Not give any personal contact details including home and mobile phone number and personal email addresses to any young person.</li><li>Not enter into any form of sexual or romantic contact with any young person or vulnerable adult that they are working with. This  is inappropriate and may be illegal.</li><li>Be aware that breaches of law and professional guidelines will be taken very seriously and will be dealt with using our policies and procedures.</li><li>Attend regular training on Safeguarding and ensure that they are familiar with the organisation???s Safeguarding policy and procedures.</li></ul><p>The Key Safeguarding Officer is responsible for:</p><ul><li>Making sure all staff, volunteers and trustees are aware of this policy and how to raise safeguarding concerns.</li><li>Ensuring that all staff and volunteers have up to date training and understand the symptoms of abuse and neglect.</li><li>Making referrals and reporting of any concerns to RBKC Children???s Services or to the.</li><li>Monitoring the progress of any children who are the subject of child protection plans.</li><li>Maintaining accurate and secure safeguarding records.</li></ul></li><li><h3>Child Abuse</h3><p>For the purpose of this policy, a child is defined as a person under the age of 18 and also any person aged 18, 19 or 20 who has been in care (since the age of 16) or who has a learning disability (The Children Act 2004).<br>The Children Act 1989 recognises four categories of abuse, i.e. Physical abuse, Emotional abuse,Sexual abuse and Neglect. Definitions of these categories are as follows:</p><h4>Physical Abuse</h4><p>Physically hurting or injuring a child by hitting, shaking, throwing, poisoning, burning, biting, scalding, suffocating, drowning or otherwise causing physical harm. Physical harm may also be caused when a parent or carer feigns the symptoms of, or deliberately causes ill health to a young person whom they are looking after. E.g. fictitious illness by proxy or Munchausen???s syndrome by proxy.</p><h4>Sexual Abuse</h4><p>This is where a child is used by others to meet their own sexual needs. This could include full sexual intercourse, masturbation, oral sex, anal intercourse and fondling. Showing pornographic materials is also a form of sexual abuse. The age of consent for sexual activity is 16 years. Any sexual activity involving persons when one or more of the persons involved is aged 15 or under is unlawful. This is ???underage sex???. Underage sex may involve child abuse, and therefore require a referral to social services and the police.</p><h4>Emotional Abuse</h4><p>The persistent emotional ill-treatment of a young person such as to cause severe and persistent adverse effects on the young person???s emotional development. It may involve conveying to young people that they are worthless, unloved or inadequate. It may involve causing young people to feel frightened or in danger by being constantly yelled at, threatened or taunted which may make the young person very nervous and withdrawn.</p><h4>Neglect</h4><p>This is where a child???s basic physical and psychological needs are not met, which is likely to result in the serious impairment of their health or development (e.g. failure to provide adequate food, shelter and clothing, failing to protect from physical harm or danger, or failure to ensure access to appropriate medical care or treatment). It may also include refusal to give love, affection and attention.<br>&nbsp;<br><b>Abuse can take many forms.  It???s important to recognise that the following are all forms of abuse that may affect children and young people:</b> Bullying, County Lines, Criminal Exploitation, Domestic Abuse, FGM, Grooming, Harmful sexual behaviour, Modern Slavery, Online Abuse, Radicalisation, Sexual Exploitation and Trafficking.</p></li><li><h3>Indicators of Abuse</h3><p>Indications that a young person may be being abused include:<ul><li>Unexplained or suspicious injuries such as bruising, cuts or burns, particularly if situated on a part of the body not normally prone to such injuries.</li><li>Deliberately avoiding social services for fear of the child being received into care.</li><li>An injury for which the explanation seems inconsistent.</li><li>The young person describes what appears to be an abusive act involving him/her.</li><li>Someone else expresses concern about the welfare of another young person.</li><li>Unexplained changes in behaviour.</li><li>Inappropriate sexual awareness</li><li>Engaging in sexually explicit behaviour</li><li>Distrust of adults with whom a close relationship would be expected</li><li>Trouble with making friends</li><li>Displays variations in eating patterns including loss of appetite or overeating</li><li>Becomes increasingly dirty or unkempt.</li></ul><br>This is not an exhaustive list. It is important to remember that each circumstance is unique and that the presence of one or more of these indicators is not necessarily proof that abuse is taking place.<br>Be aware that the signs of abuse and neglect are not always visible.  Persistent challenging behaviour can be an indicator that a child is experiencing abuse or neglect.  So, if a child is frequently seen as being ???naughty???, try to consider what may be causing them to behave in that way and how you can best understand and support the child.</P></li><li><h3>Bullying</h3><p>Abuse can also take place between peers in the form of bullying. Bullying may be seen as deliberately hurtful behaviour where it is difficult for the people being bullied to defend themselves.<br>Bullying can include:<ul><li>Physical (e.g. hitting, kicking and theft)</li><li>Verbal (e.g. name calling, constant teasing, sarcasm, racist or homophobic taunts, threats, graffiti and gestures)</li><li>Emotional (e.g. tormenting, ridiculing, humiliating and ignoring)</li><li>Sexual (e.g. unwanted physical contact or abusive comments)</li></ul><br>Indicators of bullying:<ul><li>Behaviour changes such as reduced concentration, becoming withdrawn, depressed, emotionally unstable, reluctance to go to school.</li><li>Disengagement with activities that were once exciting/fulfilling Physical indicators including headaches, stomach aches, trouble sleeping, bedwetting, bruising, damaged clothes and bingeing, for example on food, cigarettes or alcohol</li></ul></p></li><li><h3>Who is Responsible for Investigating Incidences of Child Abuse?</h3><p>There are only three agencies with the statutory right to undertake a child protection investigation.They are:<ul><li>Local authority social services</li><li>The police</li><li>National Society for the Protection of Children (NSPCC)</li></ul><br><strong>JEM</strong>???s staff and volunteers are not responsible for diagnosing or investigating abuse. Their responsibility is to be aware and alert to signs that might indicate that not all is well with a child or young person. Not all concerns will relate directly to abuse, there may be other explanations given a child???s individual circumstance.<br>There should never be a delay in making a referral if it is felt a child or young person is at risk of significant harm. The decision to make a referral is an individual???s decision, and should never be overruled by another staff member or manager.<br>It is important to remember that our responsibility is to report, not to investigate.</p></li><li><h3>Responding to Disclosure, Suspicions and Allegations</h3><p>Actions to take when responding to disclosure:<br>The person receiving disclosure should:<ul><li>React calmly</li><li>Tell them that they are not to blame and that they are right to tell</li><li>Take what is said seriously<lUse open-ended questions ??? it is very important that you do not appear to be leading the young person in any way</li><li>Keep questions to the absolute minimum to ensure a clear and accurate understanding of what has been said</li><li>Reassure the young person but do not make promises of confidentiality</li><li>Make a full record of what has been said, heard and/or seen as soon as possible</li></ul><br>The person receiving the disclosure should not:<ul><li>Panic</li><li>Demonstrate shock</li><li>Ask for more information</li><li>Speculate or make assumptions</li><li>Make promises or agree to keep secrets</li><li>Approach the alleged abuser</li><li>Make negative comments about the alleged abuser</li></ul></p></li><li><h3>Keeping Records</h3><p>After a child makes a disclosure the next course of action is to record the details of what was saidand any actions taken. It is important that these records are kept securely. Any safeguarding records kept by JEM must be:<ul><li>Typed</li><li>Complete</li><li>Written immediately or within a reasonable time of the disclosure</li><li>Signed and Dated</li><li>Stored safely and confidentially</li><li>Able to distinguish between fact, opinion and third party information</li></ul></p></li><li><h3>Sharing Information</h3><p>Any information disclosed by a child or young person must be treated confidentially and only shared with the Key Safeguarding Officer, other relevant members of staff (on a need to know basis only) and local social services departments.<br>If JEM???s Key Safeguarding Officer decides that information does need to be shared with the local authority, the following should be considered:<ul><li>Explain to the young person what you will share and why, and seek their agreement unless this would put them or others at increased risk.</li><li>Explain to the child???s parent or carer that you are going to make a referral (unless doing so would put the child at risk).</li><li>Where there are concerns of significant harm, their safety and welfare is paramount.  The local authority???s duty line and the police must be informed immediately.</li><li>Seek advice where you are in doubt from the local authority???s duty line.</li><li>Always record the reasons for your decision - whether it is to share information or not.</li></ul></p></li><li><h3>Storing Information</h3><p><strong>JEM</strong> has access to personal information about children and young people through our Youth Services programmes. The following guidelines should be followed when storing this information:<ul><li>No personal data about any young person should be stored publicly.</li><li>Information should be stored confidentially and only those who need to access the information for their work should have access.</li><li>Personal data about children and young people should not be left on your desk when you are out of the office.</li><li>Personal data about children and young people should not be kept for any longer than it is needed and should be disposed of responsibly.</li><li>Under the Freedom of Information Act young people have the right at any time to view any information we hold about them by requesting to view it.</li><li>Mobile phones containing young people???s phone numbers must be locked and password protected.</li></ul></p></li><li><h3>Photography and Filming</h3><p>If <strong>JEM</strong> wants to use photographs or films of children and young people in any external or internal materials, the following guidelines should be followed:<ul><li>Staff must be able to explain clearly to young people how and where their images will be used before the photographs or film are taken. This means that young people must have a genuine and full understanding of where it will appear.</li><li>Individuals must give consent using the JEM Image Consent Form ??? see Appendix 1.</li><li>Consent must be given in order to use the person???s real name attached the photograph or video.</li><li>Consent of the individual must be sought for people over 18.</li><li>If the individual is under 18 the consent must be sought from them as well as a parent, guardian or carer before taking and using photographs or video if the person is under 18.</li><li>Photographs or video should never be taken of young people in one-to-one situations.</li><li>With regard to young people under 18, consent will mean that the photography and/or video can be used for up to two years without confirmation of continued consent being sought.</li></ul><br>In exceptional cases, a child aged 16 or 17 may be able to give consent to partaking in photography or filming without seeking additional consent from a parent, carer or guardian.<br>In these circumstances it is vital that:<ul><li>The materials are only used for internal purposes.</li><li>The child aged 16 or 17 is made fully aware of how and where the photos and/or video will be used and any future implications.</li><li>A framework based on Frasier Guidelines is used to assess the child???s ability to make an informed decision about consenting to being photographed or filmed.</li><li>Where circumstances exist that would make it impossible for a child aged 16 or 17 to gain additional consent these must be assessed on a case by case basis before final authorisation for photography or filming of the child will be sought from the Managing Director. In these circumstances the JEM and all those involved in the decision making should thoroughly assess whether it is in the best interest of the child to be photographed or filmed and whether or not the child is fully capable of making an informed decision.</li><li>The safety and best interests of the child should always underpin any decisions made about when it is appropriate to photograph or video a child aged 16-17.</li>All consent must be given in writing using an appropriate consent form which must be signed by the participant and, if appropriate, a parent/carer/guardian.</li></ul></p></li><li><h3>Safer Recruitment and Selection</h3><p><strong>JEM</strong> will adopt a consistent and thorough process of safer recruitment in order to ensure that all staff, volunteers and board members are suitable.<br><strong>JEM</strong> will take care at every stage of the recruitment process to eliminate candidates who are unsuitable to work with children and young people. This includes:<ul><li>Checking for any unexplained gaps in employment history.</li><li>Checking references carefully.</li><li>Taking great care in the preparation of the person specification to ensure key requirements are tested</li><li>Carrying out DBS checks (although not relying on them solely), and</li><li>Not offering a post until all checks have been completed satisfactorily.</li></ul></p></li><li><h3>Allegations and concerns about staff, volunteers and board members</h3><p>Allegations of abuse or concerns raised against members of staff, volunteers, freelancers or trustees, will always be treated seriously.  Where there is an allegation against a member of staff, a volunteer or a freelancer the Managing Director should be informed immediately and a disciplinary investigation will be carried out. There may also be criminal (police) investigations. Where the allegation concerns the Managing Director or a board member, another member of the board should lead the investigation.<br>The person leading the investigation will pass on all concerns relating to staff to the Local Authority Designated Officer. In the first instance this can be verbal, but should be followed up by a written Childcare Concern.<br>When personnel are asked to leave for safeguarding reasons, the Disclosure and Barring Service must be informed: <a href='https://www.gov.uk/guidance/making-barring-referrals-to-the-dbs' target='_blank'>Here</a></p></li></ol><br><h2>APPENDIX 1</h2><h3>Image Consent Form</h3><p>This consent form is to give permission for JEM to use your image in promotional materials for our projects. This could include your image (photograph or video) being used on materials such as reports, websites, pamphlets, leaflets and/or other materials to promote JEM and the work that we do.<br>The consent will last 2 years and cover worldwide usage, after which time we will make reasonable attempts to contact you to find out whether it is ok to continue to use your image/video. If we cannot get in contact with you using the details you supply above we will assume that we still have your consent to use your image.<br>You can call us any time to withdraw consent or update your contact details.</p><br><form class='content-image-consent'><label for='firstName'>First Name</label><br><input type='text' id='firstName'><br><label for='surname'>Surname</label><br><input type='text' id='surname'><br><label for='dateOfBirth'>Date of Birth</label><br><input type='date' id='dateOfBirth'><br><label for='homeAddress'>Home Address</label><br><input type='text' id='homeAddress'><br><label for='postCode'>Postcode</label><br><input type='text' maxlength='8' id='postCode'><br><label for='mobileNumber'>Mobile Number:</label><br><input type='tel' id='mobileNumber' maxlength='11'><br><label for='homePhoneNumber'>Home Phone Number</label><br><input type='tel' id='homePhoneNumber' maxlength='11'><br><label for='email'>Email Address:</label><br><input type='email' id='email'><br><label for='date'>Date</label><input type='date' id='date'><br><input type='checkbox' id='namePermission'><label for='namePermission'>I give permission for JEM to use your first name in relation to your image/video</label><br><input type='checkbox' id='photoPermission'><label for='photoPermission'>I give permission for JEM to use photographs and/or video of me for their promotional materials</label><br>&nbsp;<br><p>For participants under the age of 18 a parent, carer or guardian will need to sign to give consent in addition to the participant.</p><br><input type='checkbox' id='dependantNamePermission'><label for='dependantNamePermission'>I give permission for JEM to use photographs and/or video of <input type='text' id='dependantName'> (participant name) for their promotional materials.</label><br><label for='guardianDate'>Date</label><input type='date' id='guardianDate'><br>&nbsp;<br><button type='button'>Submit form</button></form><br>&nbsp;<br><h3>Contact Us</h3><p>If you have any questions of wish to contact JEM CIC for any reason our contact details are as follows:<br><b>Address:</b> Just Education Matters CIC, Kemp House, 152-160 City Road, London EC1V 2NX<br><b>Telephone:</b> 07936 449 834<br><b>Email:</b> info@justeducationmatters.org<br><b>Web:</b>www.justeducationmatters.org<br><b>Created:</b> 20 October 2021<br><b>Next review:</b> 20 October 2022<br><b>Approved:</b> Board of Directors<br><h2>Appendix 2</h2><h3>Useful Contacts</h3><h4>JEM???s Safeguarding Person and Deputy</h4><p><b>Key Safeguarding Officer for JEM:</b>  Joan Hall, info@justeducationmatters.org, 07936 449 834<br><b>Deputy Key Safeguarding Officer:</b> Annette McCrea, info@justeducationmatters.org, 07936 449 834 <br><b>Board Level lead:</b> Esther Maynard, info@justeducationmatters.org, 07936 449 834 </p>"
       
        modalContent.append(safeguardingPolicyContentDiv);
        modal.classList.add("show");
    }
})

//Whistleblowing policy modal

WhistleblowingPolicy.addEventListener("click", () => {
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
        modalContent.classList.add("content")
        modal.append(modalContent)

        let heading = document.createElement("h1");
        heading.innerText = "whistleblowing policy".toUpperCase();
        heading.classList.add("modal-heading");
        modal.prepend(heading);
        modalContent.style.maxWidth = "800px";
        modalContent.style.padding = "2rem";

        let whistleBlowingPolicyContentDiv = document.createElement("div");
        whistleBlowingPolicyContentDiv.classList.add("policy");
        whistleBlowingPolicyContentDiv.innerHTML = "<h3>Key Points</h3><p>The Whistleblowing Procedure sets out the framework for dealing with allegations of illegal and improper conduct. </p><p>JEM CIC (JEM) is committed to the highest standards of transparency, probity, integrity and accountability. </p><p>This procedure is intended to provide a means of making serious allegations about standards, conduct, financial irregularity or possible unlawful action in a way that will ensure confidentiality and protect those making such allegations in the reasonable belief that it is in the public interest to do so from being victimised, discriminated against or disadvantaged. </p><p>This procedure does not replace other policies and procedures such as the complaints procedure, the Grievance and Harassment and Bullying Policies and other specifically laid down statutory reporting procedures.</p><p>This procedure is intended to ensure that the company complies with its duty under the Public Interest Disclosure Act 1998. <h3>Scope</h3><p>This procedure applies to all employees, including Associates and contractors.</p><p>This procedure does not replace other policies or procedures. For example, if an employee has a grievance about their working conditions they should use the Grievance Policy or, if they felt that their manager or a colleague was treating them unfavourably, they should use the Harassment and Bullying Policy. Similarly if an employee has a concern about the conduct of a fellow employee in the working environment (e.g. that they are not treating colleagues with respect) they should raise these with their line manager, or if that is not possible, with the Directors.</p><p>This procedure applies to, but is not limited to, allegations about any of the following:<ul><li>Conduct which is an offence or breach of the law</li><li>Alleged miscarriage of justice</li><li>Serious Health and Safety risks </li><li>The unauthorised use of public funds </li><li>Possible fraud and corruption ??? Sexual, physical or verbal abuse, or bullying or intimidation of employees, customers or service users </li><li>Abuse of authority </li><li>Other unethical conduct </li></ul></p><h3>Reporting</h3><p>Contact Details for Reporting: (in writing): The Directors, JEM CIC, Capital Office, Kemp House, 156-160 City Road, EC1V 2NX.</p><p>JEM recognises that the decision to make an allegation can be a difficult one to make. However, whistleblowers who make serious allegations in the reasonable belief that it is in the public interest to do so have nothing to fear because they are doing their duty either to JEM and/or to those for whom JEM or they are providing a service. </p><p>JEM will take appropriate action to protect a whistleblower who makes a serious allegation in the reasonable belief that it is in the public interest to do so from any reprisals, harassment or victimisation.</p><h3>Confidentiality</h3><p>All allegations will be treated in confidence and every effort will be made not to reveal a whistleblower???s identity unless the whistleblower otherwise requests. However, if the matter is subsequently dealt with through other JEM procedures such as the Disciplinary Procedure.</p><p>Similarly, if the allegation results in court proceedings then the whistleblower may have to give evidence in open court if the case is to be successful. </p><p>JEM will not, without the whistleblower???s consent, disclose the identity of a whistleblower to anyone other than a person involved in the investigation/allegation.</p><h3>Anonymous Allegations</h3><p>This procedure encourages whistleblowers to put their name to an allegation wherever possible as anonymous allegations may often be difficult to substantiate/prove.  Allegations made anonymously are much less powerful but anonymous allegations will be considered at the discretion of the Board of Directors.</p><p>In exercising discretion to accept an anonymous allegation the factors to be taken into account: <ul><li>The seriousness of the issue raised</li><li>The credibility of the allegation; and  </li><li>Whether the allegation can realistically be investigated from factors or sources other than the complainant</li></ul></p><h3>Untrue Allegations</h3><p>No disciplinary or other action will be taken against a whistleblower who makes an allegation in the reasonable belief that it is in the public interest to do so even if the allegation is not substantiated by an investigation.  However, disciplinary action may be taken against a whistleblower who makes an allegation without reasonable belief that it is in the public interest to do so (e.g. making an allegation frivolously, maliciously or for personal gain where there is no element of public interest).</p><h3>Procedure for Making an Allegation</h3><p>It is preferable for allegations to be made to an employee???s immediate manager to whom they report.  However, this may depend on the seriousness and sensitivity of the issues involved and who is suspected of the malpractice. For example, if the whistleblower believes that management is involved it would be inappropriate to raise it directly with them.  The whistleblower may then make an allegation directly:<ul><li>to any one of the directors or </li><li>the Board of Directors.</li></ul></p><p>If either of the above receive an allegation they will consider the allegation and may discuss with either the CEO or other Directors.   The line manager (or either/or both) of the above, after consideration, will discuss with the whistleblower and if they wish to proceed, the allegation will be investigated.</p><h3>Allegation</h3><p>Whether a written or oral report is made it is important that relevant information is provided including: <ul><li>The name of the person making the allegation and a contact point. </li><li>The background and history of the allegation (giving relevant dates and names and positions of those who may be in a position to have contributed to the allegation); The specific reason for the allegation. Although someone making an allegation will not be expected to prove the truth of any allegations, they will need to provide information to the person they have reported to, to establish that there are reasonable grounds for the allegation. </li></p><p>Someone making an allegation may be accompanied by another person of their choosing during any meetings or interviews in connection with the allegation. However, if the matter is subsequently dealt with through another procedure the right to be accompanied will at that stage be in accordance with the relevant procedure.</p><h3>Action on receipt of an Allegation</h3><p>The allocated director will record details of the allegation gathering as much information as possible, (within 5 working days of receipt of the allegation) including:<ul><li>The record of the allegation </li><li>The acknowledgement of the allegation</li><li>Any documents supplied by the whistleblower</li></ul></p><p>The investigator will ask the whistleblower for his/her preferred means of communication and contact details and use these for all communications with the whistleblower in order to preserve confidentiality.</p><p>If the allegation relates to fraud, potential fraud or other financial irregularity the Accountant will be informed within 5 working days of receipt of the allegation.  The Accountant will determine whether the allegation should be investigated and the method of investigation. </p><p>If the allegation discloses evidence of a criminal offence it will immediately be reported to the Board of Directors and a decision will be made as to whether to inform the Police. If the allegation concerns suspected harm to children the appropriate authorities will be informed immediately.</p> <p>If the issue is around suspected harm to vulnerable adults, the Vulnerable Adults policy should be referred to.<br>Timetable<ul><li>An acknowledgement of the allegation in writing within10 working days with<ul><li>An indication of how the the line manager/director/Board of Directors propose to deal with the matter </li><li>An estimate of how long it will take to provide a final response </li><li>An indication of whether any initial enquiries have been made </li><li>Information on whistleblower support mechanisms </li><li>Indication whether further investigations will take place and if not, why not </li><li>Where the allegation has been made internally and anonymously, obviously JEM will be unable to communicate what action has been taken.</li></ul></li></ul><h3>Support</h3><p>JEM will take steps to minimise any difficulties which may be experienced as a result of making an allegation.  For instance, if a whistleblower is required to give evidence in criminal or disciplinary proceedings JEM will arrange for them to receive advice about the procedure and advise on the support mechanisms that are available.</p><p/p>JEM accepts that whistleblowers need to be assured that the matter has been properly addressed. Thus, subject to legal constraints, we will inform those making allegations of the outcome of any investigation. </p><h3>Responsibility for the Procedure </h3><p>The Board of Directors have overall responsibility for the operation of this Procedure and for determining the administrative processes to be followed and the format of the records to be kept.</p><h3>Monitoring</h3><p>A Register will record the following details: <ul></li>The name and status (e.g. employee) of the whistleblower </li><li>The date on which the allegation was received </li><li>The nature of the allegation </li><li>Details of the person who received the allegation </li><li>Whether the allegation is to be investigated and, if yes, by whom </li><li>The outcome of the investigation </li><li>Any other relevant details </li></ul></p><p>The Register will be confidential and only available for inspection by the Board of Directors. </p><p>There will be annual reports to the Board of Directors on the operation of the Procedure and on the whistleblowing allegations made during the period covered by the report. The report will be in a form which does not identify whistleblowers.</p><p>This policy will be reviewed by the Board of Directors every three years from the date of its creation.<br>Created: 20 October 2021<br>Review:  20 October 2024<br>Approved: JEM CIC Directors";

        modalContent.append(whistleBlowingPolicyContentDiv);
        modal.classList.add("show");
    }
})

//Equality Diversity policy modal

equalityDiversityPolicy.addEventListener("click", () => {
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
        modalContent.classList.add("content")
        modal.append(modalContent)

        let heading = document.createElement("h1");
        heading.innerText = "equality diversity policy".toUpperCase()
        heading.classList.add("modal-heading");
        modal.prepend(heading);
        modalContent.style.maxWidth = "800px";
        modalContent.style.padding = "2rem";

        let equalityDiversityPolicyContentDiv = document.createElement("div");
        equalityDiversityPolicyContentDiv.classList.add("policy");
        equalityDiversityPolicyContentDiv.innerHTML = "<h2>INTRODUCTION</h2><p>JEM CIC (JEM) aims to be an company that promotes equality and is free from discrimination and harassment, where all staff, directors and stakeholders can fulfil their personal and professional potential in an environment of fairness, dignity and respect. Our service users can expect to receive a service rooted in equality and free of discrimination.</p><p>At JEM we will not discriminate against staff, job applicants, volunteers, service users,  directors or stakeholders because of:</p><ul><li>Race/ethnicity</li><li>Nationality </li><li>Gender</li><li>Gender Reassignment </li><li>Sexual orientation </li><li>Pregnancy and Maternity / (paternity) status</li><li>Marital Status and Civil partnership status</li><li>Religion or Belief </li><li>Disability </li><li>Age </li></ul><p>or any other criterion not relevant to the point at issue.</p><p>JEM will endeavor to ensure, as far as is practicable, that all premises we use are disability friendly.</p><p>We acknowledge that, at present, many community premises are not fully disability friendly. We will make every effort to accommodate those with disabilities and where possible reasonable adjustments will be made, where reasonably practicable to do so.</p><p>This document sets out our policy for equality and diversity in work and service provision in more detail.</p><h2>POLICY STATEMENT</h2><p>JEM is committed to practising equality and diversity in all areas of our work. We believe that we have much to learn and profit from diverse cultures, experiences and perspectives and that diversity will make our organisation more modern and effective.</p><p>The overall aim of this policy to meet the legal requirements of the Equality Act 2010 is to:<ul><li>Eliminate unlawful discrimination , harassment and victimisation </li><li>Ensure that we treat all individuals fairly, with dignity and respect.</li><li>Promote equality of opportunity </li><li>Promote equality of access </li></ul></p><h3>Scope</h3><p>This policy applies to all staff, permanent and fixed term, directors, volunteers, contractors, consultants, agency staff and job applicants.</p><h3>Responsible Person</h3><p>The Director of Operations is responsible for communicating and implementing this policy.</p><h2>RECRUITMENT</h2><p>it is unlawful to discriminate in the recruitment process:-<ul><li>By refusing to employ or engage a person because of their gender, gender reassignment, marital status, race/ethnicity, sexual orientation, religion/beliefs, disability and/or age.</li><li>In employing  or engaging a person on less favourable terms and conditions </li><li>By advertising in a discriminatory way</li><li>By failing to promote, transfer or train because of a person???s gender, gender reassignment, marital status, race/ethnicity, sexual orientation, religion/beliefs, disability and/or age.</li></ul></p><p>All job descriptions will be reviewed before advertisement to ensure that job requirements are stated accurately in the person specification. This should ensure that applicants from under-represented groups are not unfairly excluded. </p><p>The application process will be simple and request only the minimum information for making a decision.  Where applicants need help to complete their application or require information in a different format (for example, large print or on tape), we will make every effort to accommodate this request.  </p><p>Every applicant for employment with us will be considered on the basis of their suitability for the position and their ability to fulfil the requirements of the job. They will be assessed objectively against the person specification.</p><p>Questions about age, gender, marital status, domestic arrangements or marital plans or pregnancy will be asked for monitoring purposes and will be kept separate from the main application.   Job criteria must not unfairly exclude applicants of a particular group.  If there is a Genuine Occupational Requirement needed for a job,  advertisements and job specification will state which part of the Equality Act 2010 this applies to.  </p><p>Applicants who meet the criteria stated on the person specification will be interviewed and considered against the criteria. Interviews must be conducted objectively and consistently, dealing only with an applicant???s suitability to fulfil the requirements of the post.  Where assessments or other selection methods are used, these must provide objective measures of the applicants??? ability to do the job.</p><p>Shortlisting and interview records will be completed and kept for a period of one year, including records of decisions taken and should include information on gender, ethnicity, disability, sexuality and age as a minimum.  Records will be monitored to ensure that no direct or indirect discrimination exists.  All applicants are entitled to request and receive reasons for their non-selection, and this entitlement will be made clear in the documentation sent to them in the information pack.</p><p>We will consider reasonable adjustments and modifications to enable suitable disabled applicants to carry out the duties of the post.</p><h2>PROMOTION AND TRAINING</h2><p>Promotions will be based on ability and potential and all staff or volunteers, who meet the criteria for the post, will be considered equally, objectively and without discrimination.</p><p>Staff responsible for appraising employees, volunteers, and contractors/consultants will be trained in the avoidance of discriminatory and biased assessment. All staff, directors, Advisory Group members, Stakeholders, and Volunteers will be trained on the application of the Equality and Diversity policy.</p><p>We encourage all staff, volunteers and contractors to undertake further development opportunities relevant to their post. Opportunities to attend training courses will be provided to all staff and volunteers on an equal basis in accordance with the individual development needs that have been identified and agreed with the Manager.</p><p>In the event of an employee, volunteer or director becoming disabled either through injury or illness every effort will be made to continue to employ or retain that individual, either in the same or a equally suitable position if at all possible. Arrangements for re-training an employee will be made where necessary.</p><h2>TERMS AND CONDITIONS OF EMPLOYMENT</h2><p>All our policies and procedures will be drafted to take account of equalities and diversity considerations.</p><h3>Pay</h3><p>JEM will ensure, as far as reasonably practicable, that the job evaluation of posts is objective and free from biased assessment and discrimination.</p><h3>Bullying and Harassment </h3><p>JEM has a duty of care to all staff, service users, directors, stakeholders, and volunteers and is committed to providing a safe working environment free from all forms of bullying and harassment. Our policy on Bullying and Harassment sets out how we deal with such complaints and behaviour.</p><h3>Redundancy</h3><p>Selection for redundancies will be conducted in a manner that avoids any discrimination and any selection criteria will be objective and free from biased assessment or discrimination.</p><h3>Evaluation and Monitoring</h3><p>As and when,  the Manager will also provide reports on the gender and ethnic groups applying for and being selected for posts advertised externally and internally. </p><p>The effectiveness of this policy and any training undertaken should be reviewed from time to time.</p><h2>SERVICE USERS</h2><p>JEM does not discriminate against service users  on the grounds of:-<ul><li>Race/ethnicity </li><li>Nationality </li><li>Gender</li><li>Gender Reassignment </li><li>Sexual orientation </li><li>Pregnancy and Maternity </li><li>Marital Status including Civil partnerships </li><li>Religion or Religious Belief </li><li>Disability </li><li>Age </li><li>Being an ex-offender</li></ul></p><p>We will endeavor to ensure, as far as is practicable, that all its premises are disability friendly. Every effort will be made, as far as is reasonable practicable, to accommodate those with disabilities and where possible reasonable adjustments made. </p><p>As an employer and provider of services to the community we accept the responsibility to promote equality and challenge discrimination wherever it occurs. This would involve challenging service users who are behaving inappropriately with regard to practising equality and valuing diversity. </p><h2>CULTURAL AND RELIGIOUS NEEDS </h2><p>JEM recognises that some staff, directors service users, and stakeholders may have particular cultural or religious needs (for example, the need to observe prayer time and other religious rites, special dietary requirements or the need to wear specific clothing).  Whenever it is reasonably practicable, JEM will endeavour to allow these needs to be met. </p><p>Where staff have particular cultural and religious needs that may conflict with work requirements, JEM will positively consider whether it is reasonably practical to vary or adapt these requirements to enable such needs to be met subject to operational contingencies.</p><h2>COMPLAINTS</h2><p>Any employee who has a concern regarding the application of this policy should make use of the Grievance Procedure and any claims of inequality will be thoroughly investigated. </p><p>Any volunteer or contractor/consultant who has a concern regarding the application of this policy should do so in writing to the/Directors who will be responsible for investigating the complaint. The Directors will be responsible for replying to any complaint in writing within 21 working days of the receipt of the complaint from a volunteer or contractor/consultant. A copy of the letter should also be sent to the Board of Directors.</p><p>Any volunteer or contractor/consultant who has a concern regarding the application of this policy which involves JEM should put their complaint in writing to the Directors who will be responsible for appointing an investigating officer to investigate the complaint. The Directors will be responsible for replying to any complaint in writing within 21 working days of the receipt of the complaint from volunteer or contractor/consultant.</p><p>Any complaints by service users about discriminatory behaviour by staff, volunteers and/or contractors/consultants will be thoroughly investigated.</p> <h3>Responsibility</h3> <p>All  staff should make themselves familiar with this policy and undergo training from time to time. </p><p>All volunteers and contractor/consultants should be made aware of this policy on commencing work with JEM.</p><h2>EQUALITY ACT 2010 </h2><p>This Act makes discrimination, harassment and victimisation, (prohibited conduct), because of protected characteristics unlawful in employment, education, service provision and housing. The protected characteristics are Age, Disability, Gender reassignment, marriage and civil partnership, pregnancy and maternity, Race, Religion and Belief, Sexual Orientation. </p><p>Prohibited conduct includes direct discrimination, indirect discrimination, and discrimination arising from a disability, harassment, victimisation and failure to make reasonable adjustments in order to accommodate a person???s disability. Harassment applies to all protected characteristics except for pregnancy and marriage and civil partnership. Employees are able to complain of behaviour that they find offensive even if it is not directed at them. Victimisation applies when an employee is treated badly because they have made a complaint or done something in connection with the Equality Act.  </p><p>This policy will be reviewed by the Board of Directors every three years from the date of its creation.<br>Created: 20 October 2021<br>Review date: 20 October 2024<br>Approved: JEM Board of Directors</p>";

        modalContent.append(equalityDiversityPolicyContentDiv);
        modal.classList.add("show");
    }
})