const operacion = document.getElementById('operacion');
const display = document.getElementById('resultado');
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
const btnBkS = document.getElementById('backspace');
const btnResult = document.getElementById('solve');

let resultado = 0;
let aux = 0;

function agregarADisplay(elemento){
    let valor = parseInt(elemento.textContent);
    if(evaluaOverflow())
        display.value += valor;
}

function evaluaOverflow(){ //evalúa que no se superen los 10 caracteres de ingreso
    return display.value.length<10;
}

function LastCharReview(simbolo){
    let char = operacion.textContent;
    
    char = char.slice(-1);
    const op=['+','-','/','x'];
    if(op.includes(char))
        return executeLCh0();
    else{
        if(char == '=')
            return executeLCh1();
        else 
            return executeLCh2(simbolo);
    }
}

function reemplazo(elemento){
    let char = operacion.textContent.slice(-1);
    operacion.textContent = operacion.textContent.replaceAll(char,elemento.textContent);
}

function agregarAOperacion(operatoria){
    operacion.textContent = resultado +' '+ operatoria;
}


function executeLCh0(){
    resultado= display.value;
}

function executeLCh1(){
    
}

function executeLCh2(){

}


function preparaDisplay(){

}

function suma(a,b){
    return a+b;
}

function resta(a,b){
    return a-b;
}

function multiplicacion(a,b){
    return a*b;
}

function division(a,b){  //realiza división entera? 
    return a/b;
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

btnBkS.addEventListener("click",()=> {  
    let value = display.value;
    let largo = value.length;
    if(largo>0){
        value = value.slice(0, largo-1);
        display.value=value;
    }
});

btnSuma.addEventListener("click",()=>{
    LastCharReview(btnSuma.textContent); 
    agregarAOperacion(btnSuma.textContent);
    preparaDisplay();
});
btnDiv.addEventListener("click",()=>{});
btnMul.addEventListener("click",()=>{});
btnResta.addEventListener("click",()=>{});
btnResult.addEventListener("click",()=>{});


/* -- Borra todo resultado, no importa dónde se encuentre el cursor -- */
document.addEventListener("keydown",(e)=>{
    if(e.key==='Escape'){
        display.value='';
        operacion.textContent='';
        display.focus();
        resultado = 0;
        aux = 0;
    }

});

display.addEventListener('input',()=> {
    if(display.value.length >= 10){
        display.value = display.value.slice(0,10); //no se produce el mismo efecto con los botones
    }
});


//QUEDA PENDIENTE DE TERMINAR