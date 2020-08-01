const body = document.querySelector("body");
const input = document.getElementById("colorPicker");
const colorCode = document.getElementById("colorCode");
const colorRGB = document.getElementById("colorRGB");
<<<<<<< HEAD
const colorHSL = document.getElementById("colorHSL");
var r, g, b;
var numbers;
=======
var c, d, e;

>>>>>>> 634e0035651dfba357d946e723fc2c183a3efa3e

setColor();
input.addEventListener("input", setColor);


function setColor() {
    body.style.backgroundColor = input.value;
    colorCode.innerHTML = input.value;
    numbers = convertRGB(colorCode.innerHTML);
    colorRGB.innerHTML = showString(numbers);  
    numbers = convertHSL(numbers);
    colorHSL.innerHTML = showString(numbers);
}

function convertRGB(a){
<<<<<<< HEAD
    r = a.slice(1,3);
    g = a.slice(3,5);
    b = a.slice(5);
    
    return [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)]; 
}

function showString(a){
    return "("+ a[0] + "," + a[1] + ',' + a[2] + ")";
}


function convertHSL(a){
    r = a[0];
    g = a[1];
    b = a[2];
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    const l = Math.floor((max + min) / ((0xff * 2) / 100))

    if (max === min) return [0, 0, l]
        const d = max - min
        const s = Math.floor((d / (l > 50 ? 0xff * 2 - max - min : max + min)) * 100)

    if (max === r) return [Math.floor(((g - b) / d + (g < b && 6)) * 60), s, l]
        return max === g
            ? [Math.floor(((b - r) / d + 2) * 60), s, l]
            : [Math.floor(((r - g) / d + 4) * 60), s, l]
}
=======
    c = a.slice(1,3);
    d = a.slice(3,5);
    e = a.slice(5);
    return "(" + parseInt(c, 16)+","+parseInt(d, 16)+","+parseInt(e, 16)+")"; 
}
>>>>>>> 634e0035651dfba357d946e723fc2c183a3efa3e
