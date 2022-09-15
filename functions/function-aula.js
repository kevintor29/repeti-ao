 /*1 - Criar uma função para calcular a 
porcentagem de um número*/

function exer1() {
    let n1=0,n2=0;
    n1=prompt("ingrese o valor que deseja calcular o porcentagem");
    n2=prompt("ingrese o valor do porcentagem quem deseja calcular");
    return(calcular_porcentagem(n1,n2));
 }
 function calcular_porcentagem(n1,n2) {
    let result=0;
    result=(parseInt(n1)*parseInt(n2))/100;
    return(alert("o resultado é : "+result));
 }

 /*2 - Criar uma função que converta uma temperatura 
de Celsius para Fahrenheit*/

 function exer2(){
     let temperatura=0;
     temperatura=parseFloat(prompt("ingrese un valor de temperatura"));
     return(calacular_celsius(temperatura));
 }
 function calacular_celsius(temperatura){
    let Celsius=0;
     Celsius=(temperatura-32)/1.8;
     return(alert("os graus celsius sao : "+Celsius.toFixed(2)));
 }

/*3 -  Criar uma função que converta uma 
temperatura de Fahrenheit para Celsius*/

 function exer3(){
    let temperatura=0;
    temperatura=parseFloat(prompt("ingrese un valor de temperatura"));
    return(calacular_farenheint(temperatura));
}
function calacular_farenheint(temperatura){
   let Fahrenheit=0;
    Fahrenheit=(temperatura*1.8)+32;
    return(alert("os graus fahrenheit sao : "+Fahrenheit.toFixed(2)));
}

/*4 - Crie uma um programa de saúde, nesse programa 
desenvolva uma função que calcula o imc de pacientes, 
a função deverá receber os  seguintes parâmetros, peso e altura.
*/
function exer4() {
    let peso=0,altura=0;
    peso=parseFloat(prompt("ingrese o peso da pessoa"));
    altura=parseFloat(prompt("ingrese Altura da pessoa"));
    return(calcular_imc(peso,altura));
 }
 function calcular_imc(peso,altura) {
    let imc=0;
    imc=parseFloat(peso)/(parseFloat(altura)*parseFloat(altura));
    return(alert("o imc é : "+imc.toFixed(2)));
 }