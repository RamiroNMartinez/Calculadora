// const btnSuma = document.getElementById('suma');
// const btnResta = document.getElementById('resta');
// const btnDiv = document.getElementById('division');
// const btnMul = document.getElementById('multiplicacion');
// const btnResult = document.getElementById('solve');

const operacion = document.getElementById('operacion');
const resultado = document.getElementById('resultado');
const btnBkS = document.getElementById('backspace');
let btnNum = document.querySelectorAll('button'); // selecciona por elemento HTML
const operadores = ['+','-','/','x'];
const numeros = ['1','2','3','4','5','6','7','8','9','0'];

function agregarADisplay(contenido){
    if(evaluaOverflow())
        resultado.value += contenido;
}

function evaluaOverflow(){ //evalúa que no se superen los 10 caracteres de ingreso
    return resultado.value.length<10;
}

function valueLastChar(){
    let char = operacion.textContent;
    if(char.length == 0)
        return 0;
    else{
        char = char.slice(-1);
        if(operadores.includes(char))
            return 1;
        else{
            if(char == '=')
                return 2;
            else 
                return 3;
        }
    }
}

function reemplazo(elemento){
    let char = operacion.textContent.slice(-1);
    operacion.textContent = operacion.textContent.replaceAll(char,elemento.textContent);
}


Array.from(btnNum).forEach(button => {
    button.addEventListener('click',(e)=>{
        let contenido = e.target.textContent;

        if(numeros.includes(contenido)){
            agregarADisplay(contenido);
        }else {

        }

    })
    
});

btnBkS.addEventListener("click",()=> {  //borra el último caracter
    let value = resultado.value;
    let largo = value.length;
    if(largo>0){
        value = value.slice(0, largo-1);
        resultado.value=value;
    }
});

// btnSuma.addEventListener("click",()=>{
//     valueLastChar();    
// });
// btnDiv.addEventListener("click",()=>{});
// btnMul.addEventListener("click",()=>{});
// btnResta.addEventListener("click",()=>{});
// btnResult.addEventListener("click",()=>{});



document.addEventListener("keydown",(e)=>{  //controlo la funcionalidad de las teclas para evitar indicar "error"

    const aceptados = ['1','2','3','4','5','6','7','8','9','0','+','-','/','x','*','Backspace'];
    if(e.key==='Escape'){
        resultado.value='';
        operacion.textContent='';
        resultado.focus();
    }else{
        if(aceptados.includes(e.key)){
            if(!evaluaOverflow()){
                resultado.blur();
            }
        }
        else{
            e.preventDefault();
        }
    }

});

