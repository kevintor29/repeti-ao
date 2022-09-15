     
  /*1- A prefeitura de uma cidade fez uma pesquisa entre 20 de seus habitantes,
coletando dados sobre o salário e número de filhos. A prefeitura deseja saber:  
a) média do salário da população;
b) média do número de filhos;
c) maior salário;
d) percentual de pessoas com salário até R$100,00.
*/   
     function repetiçao1(){
        
       let salario=0,filhos=0,medias=0,mediaf=0,porcen=0.0,cantidad,maior=0,confirmacion=true;
         for(cantidad=0;cantidad<=20;cantidad++){
            salario=prompt("ingrese o salario da pessoa :"+(cantidad+1));
            
            
            if(salario==undefined)
            {
              alert("Ha pulsado cancelar");
              confirmacion=confirm("deseja fechar o exercicio");
              if(confirmacion==true){return;}
            }else if(salario==""){
              alert("Ha pulsado aceptar con el campo vacio"); 
              confirmacion=confirm("deseja ingresar un valor \nou voce queer sair do exercicio"+
              "\nSi deseja colocar un valor presione (ok)\nSi deseja sair do exercio presione (cancelar)");
              if(confirmacion==true){
                salario=prompt("ingrese o salario da pessoa :"+(cantidad+1));
              }else{
                return;
              }
            }
            filhos=prompt("ingrese a quantidade de filhos que tein a pessoa :"+(cantidad+1));
            if(filhos==undefined)
            {
              alert("Ha pulsado cancelar");
              return;
            }else if(filhos==""){
              alert("o campo esta vacio \nIngrese o valor");
              filhos=prompt("ingrese a quantidade de filhos que tein a pessoa :"+(cantidad+1));
            }
            medias=parseInt(medias)+parseInt(salario);
            mediaf=parseInt(mediaf)+parseInt(filhos);
         if(salario<=100){
          porcen=porcen+1;
         }
          if(salario>maior){
            maior=salario;
          }
        }
        alert("a media dos numeros dos filhos e: "+ (mediaf/20));
        alert("a media dos salarios e: "+ (medias/20));
        alert("o maior salario e: "+maior);
        alert("o porcentagem de pessoa com salarios entre 100 é ="+ (porcen/20)*100+"%")
}
/*2- Desenvolver um sistema que efetue a soma de todos os números ímpares que são
múltiplos de três e que se encontram no conjunto dos números de 1 até 500.
*/
 function repetiçao2(){
    let x=0,soma=0;
    for (x=1;x<=500;x++) {
        if(x %2!=0 && x %3==0){
          soma=x+soma;
        }
    }
    alert("A soma dos multiplos de 3 inpares sao : "+ soma);
 }
 /*3- Elaborar um programa que efetue a leitura sucessiva de valores numéricos e
apresente no final o total do somatório, a média e o total de valores lidos. O programa
deve fazer as leituras dos valores enquanto o usuário estiver fornecendo valores
positivos. Ou seja, o programa deve parar quando o usuário fornecer um valor
negativo.
  */
 function repetiçao3(){
  let novovalor=0,somas=0,media=0;
  while(novovalor>-1){
    somas=parseInt(novovalor)+parseInt(somas);
      novovalor=prompt("ingrese un valor"); 
      if(novovalor>-1){
    media=media+1;
      }
  }
  media=parseInt(somas)/parseInt(media);
      alert("O somatorio dos valores inseridos é : "+somas);
      alert("a media dos valores é : "+media);
 }
 /*4- Obtenha um número digitado pelo usuário e repita a operação de multiplicar ele por
três (imprimindo o novo valor) até que ele seja maior do que 100. Ex.: se o usuário
digita 5, deveremos observar na tela a seguinte sequência: 5 15 45 135.
  */
function repetiçao4(){
  let valor=0;
  valor=prompt("escreva um valor")
  while( valor<=100){
valor=valor*3;
alert(valor);
  }

}
/**Faça um programa que mostre uma contagem na tela de 233 a 456, só que
contando de 3 em 3 quando estiver entre 300 e 400 e de 5 em 5 quando não estiver.
 */
function repetiçao5(){
  let conta=233;
  do{
    if(conta<300||conta>400){
    conta=conta+5;
    alert("de 5 em 5 \n"+conta);
    }else{
      alert(" de 3 em 3 \n"+conta)
     conta=conta+3; 
    }

  }while(conta<456);

}

function repetiçao6(){
let ingreso=0,con=0,som=1;
ingreso=prompt("ingrese um valor")
do{
con=con+1;
som=som+con
}while(con!=ingreso)
alert("a soma é : \n"+(som-1));
}