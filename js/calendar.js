
//Today's Date
let today = new Date();
let time = today.getTime();

//begining of the year
let beginningOfYear = new Date(2021,00,01);
let timeOfBeginning = beginningOfYear.getTime();

let passedDays = Math.ceil((time - timeOfBeginning) / 86400000) - 1;

var dt = new Date();
dt.setDate(dt.getDate() - passedDays)

console.log(dt)

let arrayOfDays = [];
let daysAsString = [];
let daysStripped = [];
for(let i = 0; i < 365; i++){
    let newPassedDays = passedDays - i;
    arrayOfDays[i] = new Date();
    arrayOfDays[i].setDate(arrayOfDays[i].getDate() - newPassedDays)
}

let january = ["", "","",""];
let february = [];
let march = [];
let april = ["","",""];
let may = ["", "","","",""];
let june = [""];
let july = ["","",""];
let august = ["", "","","","",""];
let september = ["",""];
let october = ["","","",""];
let november = [];
let december = ["",""];

let daysOfTheWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let arrayOfMonths = [january,february,march,april,may,june,july,august,september,october,november,december];

arrayOfDays.forEach((day) => {
    daysAsString.push(day.toString().slice(0,15));

})
daysAsString.forEach((day,index) => {
    daysStripped.push(day.slice(0,15))
    if(index < 31){
        january.push(day);
    } else if(index >= 31 && index < 59){
        february.push(day)
    } else if(index >= 59 && index < 90){
        march.push(day);
    } else if(index >= 90 && index < 120){
        april.push(day)
    } else if(index >= 120 && index < 151){
        may.push(day)
    } else if(index >= 151 && index < 181){
        june.push(day)
    } else if(index >= 181 && index < 212){
        july.push(day)
    } else if (index >= 121 && index < 243){
        august.push(day)
    } else if(index >= 243 && index < 273){
        september.push(day)
    } else if(index >= 273 && index < 304){
        october.push(day)
    } else if(index >= 304 && index < 334){
        november.push(day)
    } else {
        december.push(day)
    }
})

let calendarContainer = document.getElementById("calendar-container");
let calendar = document.getElementById("calendar");
arrayOfMonths.forEach((month,index) => {
    
    let monthDiv = document.createElement("div");
    monthDiv.classList.add("month")
    calendar.append(monthDiv)
    let monthName = document.createElement("h2");
    let monthDetails = document.createElement("div");
    monthDetails.classList.add("month-details");
    monthDiv.append(monthDetails)

    for(let i =6; i >=  0; i--){
        let dayName = document.createElement("div");
        dayName.classList.add("dayName");
        dayName.classList.add("day");
        dayName.innerText = daysOfTheWeek[i];
        monthDetails.prepend(dayName);
    }
    
    month.forEach(day => {
        monthName.innerHTML = day.slice(3,8) + " " + day.slice(10,15);
        monthDiv.prepend(monthName);
        
        let date = document.createElement("div");
        date.classList.add("day");
        if(today.toString().slice(0,15) === day){
            date.classList.add("today")
        }
        monthDetails.append(date);
        let dateLabel = document.createElement("p");
        dateLabel.innerText = day.slice(8,10);
        date.appendChild(dateLabel);
        date.addEventListener("mouseover", function(){
            date.style.transform = "scale(1.5)"
        })
        date.addEventListener("mouseout", function(){
            date.style.transform = "scale(1)"
        })
    })
    
})

let backBtn = document.getElementById("backChevron");
let frontBtn = document.getElementById("forwardChevron");

let translateUnits = 0;
let addUnits = 360;
function slideForward(){
    if(translateUnits <= 2900){
        translateUnits += addUnits;
        calendar.style.transform = `translate(-${translateUnits}px)`;
        calendar.style.transition = "transform 1s linear";
    }
}
function slideBackward(){
    translateUnits -= addUnits;
    calendar.style.transform = `translate(-${translateUnits}px)`;
    calendar.style.transition = "transform 1s linear";
}
backBtn.addEventListener("click", slideBackward);
frontBtn.addEventListener("click", slideForward);