const operacion = document.getElementById('operacion');
const resultado = document.getElementById('resultado');
const btn0 = document.getElementById('cero');
const btn1 = document.getElementById('uno');
const btn2 = document.getElementById('dos');
const btn3 = document.getElementById('tres');
const btn4 = document.getElementById('cuatro');
const btn5 = document.getElementById('cinco');
const btn6 = document.getElementById('seis');
const btn7 = document.getElementById('siete');
const btn8 = document.getElementById('ocho');
const btn9 = document.getElementById('nueve');
const btnSuma = document.getElementById('suma');
const btnResta = document.getElementById('resta');
const btnDiv = document.getElementById('division');
const btnMul = document.getElementById('multiplicacion');
const btnDot = document.getElementById('dot');
const btnResult = document.getElementById('solve');

let valores;

function agregarADisplay(elemento){
    let valor = isNaN(elemento.textContent) ? elemento.textContent : parseFloat(elemento.textContent);
    resultado.value += valor;

}



btn0.addEventListener("click",()=> {agregarADisplay(btn0)});
btn1.addEventListener("click",()=> {agregarADisplay(btn1)});
btn2.addEventListener("click",()=> {agregarADisplay(btn2)});
btn3.addEventListener("click",()=> {agregarADisplay(btn3)});

btn4.addEventListener("click",()=> {agregarADisplay(btn4)});
btn5.addEventListener("click",()=> {agregarADisplay(btn5)});
btn6.addEventListener("click",()=> {agregarADisplay(btn6)});
btn7.addEventListener("click",()=> {agregarADisplay(btn7)});
btn8.addEventListener("click",()=> {agregarADisplay(btn8)});
btn9.addEventListener("click",()=> {agregarADisplay(btn9)});
btnDot.addEventListener("click",()=> {agregarADisplay(btnDot)});
// btnSuma.addEventListener("click",);
// btnDiv.addEventListener("click",);
// btnMul.addEventListener("click",);
// btnResult.addEventListener("click",);


