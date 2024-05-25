document.addEventListener("DOMContentLoaded", function() {


const buttonSalvaNome = document.getElementById("buttonSalvaNome").addEventListener("click", ()=>{
    const inputSalvarNome = document.getElementById("inputSalvarNome").value
    const nomeSalvo = document.getElementById("nomeSalvo")

    nomeSalvo.innerHTML = `${inputSalvarNome}`
    
})
    

const somar = document.getElementById("somar");
const diminuir = document.getElementById("diminuir");
const multiplicar = document.getElementById("multiplicar");
const dividir = document.getElementById("dividir");
const resultadoFinal = document.getElementById("resultado");
let soma;

somar.addEventListener("click", function(){
    const nmr1 = Number(document.getElementById("input-1").value);
    const nmr2 = Number(document.getElementById("input-2").value);
    soma = nmr1 + nmr2;
    resultadoFinal.innerText=`${soma}`;
})

diminuir.addEventListener("click", function(){
    const nmr1 = Number(document.getElementById("input-1").value);
    const nmr2 = Number(document.getElementById("input-2").value);
    soma = nmr1 - nmr2;
    resultadoFinal.innerText=`${soma}`;
})

multiplicar.addEventListener("click", function(){
    const nmr1 = Number(document.getElementById("input-1").value);
    const nmr2 = Number(document.getElementById("input-2").value);
    soma = nmr1 * nmr2;
    resultadoFinal.innerText=`${soma}`;
})

dividir.addEventListener("click", function(){
    const nmr1 = Number(document.getElementById("input-1").value);
    const nmr2 = Number(document.getElementById("input-2").value);
    soma = nmr1 / nmr2;
    resultadoFinal.innerText=`${soma}`;
})
})






