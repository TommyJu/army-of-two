const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const dynamicText = document.querySelector('#dynamic-text');

const text1 = "hello";
const text2 = "bye";
const text3 = "see ya";

//initial value
dynamicText.textContent = text1;

function writeText(elementID) {
    switch(elementID) {
        case "btn1":
            dynamicText.textContent = text1;
            break;
        case "btn2":
            dynamicText.textContent = text2;
            break;
        case "btn3":
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
    });
    
}