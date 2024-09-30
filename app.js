const operacion = document.getElementById('operacion');
const resultado = document.getElementById('resultado');
const btnBkS = document.getElementById('backspace');
let btnNum = document.querySelectorAll('button'); // selecciona por elemento HTML
const operadores = ['+','-','/','x', '*'];
const numeros = ['1','2','3','4','5','6','7','8','9','0'];
let registroValor;


function agregarADisplay(contenido){
    if(evaluaOverflow())
        resultado.value += contenido;
}

function evaluaOverflow(){ //evalúa que no se superen los 10 caracteres de ingreso
    return (resultado.value.length < 10);
}

function evaluarCeros(value){
    const arrayCero = value== '' ? 0:parseInt(value,10);

    return arrayCero == 0;
}

Array.from(btnNum).forEach(button => {
    button.addEventListener('click',(e)=>{
        let contenido = e.target.textContent;
        let string=operacion.textContent;
        if(numeros.includes(contenido)){
            console.log('numero');
            agregarADisplay(contenido);
        }else {
            console.log('simbolo');
            let display = resultado.value;
            if(contenido == '='){
                console.log('=');
                if(display == '')
                    display = '0';
                if(string=='0' && display != '0')  //verificar esto xq no recuerdo qué hice
                    string = display;
                else
                    string +=display;
                operacion.textContent = string;
                resultado.value='';
                registroValor = eval(string);
                resultado.placeholder = registroValor;
                console.log('caso 1 ');
            }
            else{
                console.log('otro');
                let char = string.slice(-1);
                console.log(char);
                if(evaluarCeros(display) && operadores.includes(char)){
                    string.replaceAll(char,contenido);
                }
                else{
                    
                    string.concat(display);
                    string.replaceAll('x','*');
                    registroValor = eval(string);
                    resultado.value='';
                    resultado.placeholder = registroValor;
                    registroValor+=contenido;
                    operacion.textContent = registroValor;
                }
            } 
                
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
            if(!evaluaOverflow()){
                resultado.blur();
            }
        }
        else{
            e.preventDefault();
        }
    }   
});
