const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const dynamicText = document.querySelector('#dynamic-text');
const dynamicHeader = document.querySelector('#dynamic-header');
const btnGroup = document.querySelector('.btn-container');

// Dynamic text on button click, '3 steps' section
const header1 = "1. Request An Estimate";
const header2 = "2. Pick A Date";
const header3 = "3. Sit Back & Enjoy The Magic!";

const text1 = "Wondering how much it will cost to restore your property? Simply click the \"Free Estimate\" button and contact us with the service that best suits your needs. We will provide a quote or follow up within one business day for your convenience. If we need to assess your property in person to provide an accurate estimate, we'll arrange a time that works best for you. Army of Two Service Group is an excellent choice for affordable and professional exterior cleaning, we will save you time and money 100% satisfaction guaranteed.";
const text2 = "Ready to get started? After you've approved our quote we will schedule a date and secure your spot as one of our clients. We'll give you a call to arrange a time that is most convenient for you. It's that easy to get your home looking brand new!";
const text3 = "Relax and enjoy your afternoon as our friendly professionals work their magic. We give you the peace of mind knowing that your property is in good hands. Our equipment allows us to get the job done as safely and efficiently as possible, so you don't have to worry about climbing a ladder or working with chemicals.";

//initial values
dynamicText.textContent = text1;
dynamicHeader.textContent = header1;
btn1.classList.add("active-btn");

function writeText(elementID) {
    switch(elementID) {
        case "btn1":
            dynamicHeader.textContent = header1;
            dynamicText.textContent = text1;
            break;
        case "btn2":
            dynamicHeader.textContent = header2;
            dynamicText.textContent = text2;
            break;
        case "btn3":
            dynamicHeader.textContent = header3;
            dynamicText.textContent = text3;
            break;
        default:
            console.log("switch statement error");
    }
}

let buttons = [btn1, btn2, btn3];

for (const element of buttons) {
    element.addEventListener('click', (e) => {
        writeText(e.target.id);
        toggleStyle(e);
    });
    
}

//toggle button styling
let prevButton = btn1;

function toggleStyle (e) {
    e.target.classList.add("active-btn");
    
    if (prevButton !== e.target) {
        prevButton.classList.remove("active-btn");
    }

    prevButton = e.target;
}