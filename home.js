const body = document.querySelector("body");
const input = document.getElementById("colorPicker");
const colorCode = document.getElementById("colorCode");
const colorRGB = document.getElementById("colorRGB");
var c, d, e;


setColor();
input.addEventListener("input", setColor);


function setColor() {
    body.style.backgroundColor = input.value;
    colorCode.innerHTML = input.value;  
    colorRGB.innerHTML = convertRGB(colorCode.innerHTML);
}

function convertRGB(a){
    c = a.slice(1,3);
    d = a.slice(3,5);
    e = a.slice(5);
    return "(" + parseInt(c, 16)+","+parseInt(d, 16)+","+parseInt(e, 16)+")"; 
}
