const operacion = document.getElementById('operacion');
const resultado = document.getElementById('resultado');
const btnBkS = document.getElementById('backspace');
let btnNum = document.querySelectorAll('button'); // selecciona por elemento HTML
const operadores = ['+','-','/','x', '*'];
const numeros = ['1','2','3','4','5','6','7','8','9','0'];



function agregarADisplay(contenido){
    if(evaluaOverflow())
        resultado.value += contenido;
}

function evaluaOverflow(){ //evalúa que no se superen los 10 caracteres de ingreso
    return display.value.length<10;
}

function LastCharReview(simbolo){
    let char = operacion.textContent;
    if(char == '0')                // No hay nada, agrego 0 y la operación
        return 0;
    else{
        char = char.slice(-1);
        if(operadores.includes(char) && resultado.value == '')
            return 1;                   // Hay un operador al final, lo reemplaza
        else{
            if(char == '=')  //coloco en operadores el ultimo resultado, coloco el operando 
                return 2;
            else 
                return 3;  //opero y agrego normalmente
        }
    }
}

Array.from(btnNum).forEach(button => {
    button.addEventListener('click',(e)=>{
        let contenido = e.target.textContent;
        let string=operacion.textContent;
        if(numeros.includes(contenido)){
            agregarADisplay(contenido);
        }else {
            let display = resultado.value;
            if(contenido != '='){
                switch(valueLastChar()){
                    case 0:
                        string =string+contenido;
                        operacion.textContent = string;
                        display = '0';
                        break;
                    case 1: 
                        let char = string[string.length -1];
                        string.replaceAll(char, contenido);
                        operacion.textContent = string;
                        console.log(resultado.value,string);
                        break;
                    case 2:
                        string = display+contenido;
                        operacion.textContent = string;
                        break;
                    case 3:
                        

                }
            }
            else{ 
            }
        }

    })
    
});

btnBkS.addEventListener("click",()=> {  //borra el último caracter 
    let value = resultado.value;
    let largo = value.length;
    if(largo>0){
        value = value.slice(0, largo-1);
        display.value=value;
    }
});

document.addEventListener("keydown",(e)=>{  //controlo la funcionalidad de las teclas para evitar letras u símbolos inesperados 
    resultado.focus();
    const aceptados = ['1','2','3','4','5','6','7','8','9','0','+','-','/','x','*','Backspace'];
    if(e.key==='Escape'){
        resultado.value='';
        resultado.placeholder = '0';
        operacion.textContent='0';
        resultado.focus();
    }else{
        if(aceptados.includes(e.key)){
            if(!evaluaOverflow() && e.key!='Backspace'){
                resultado.blur();
            }
        }
        else{
            e.preventDefault();
        }
    }   
});

// btnSuma.addEventListener("click",()=>{
//     valueLastChar();    
// });
// btnDiv.addEventListener("click",()=>{});
// btnMul.addEventListener("click",()=>{});
// btnResta.addEventListener("click",()=>{});
// btnResult.addEventListener("click",()=>{});
