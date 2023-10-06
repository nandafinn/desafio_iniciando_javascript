/*1. Crie um script que exiba a mensagem 
"Hello World!" em um alerta no navegador.*/

var n = "Hello Word!"
alert(n);



/*2. Crie um script que declare duas variáveis
 e exiba o resultado da soma entre elas. */

var a = 5;
var b= 10;
alert(a + b);



/* 3.03. Crie um script que declare uma variável e 
verifique se o seu valor é um número. 
Se for, exiba a mensagem "É um número", caso contrário,
exiba a mensagem "Não é um número".
 Para saber o tipo de dado você pode usar o operador `typeof`*/

var n = "1"; 

if (typeof n == "string") {
       alert("Não é um número")
}else{
       alert("è um número")  
};
 


/*4. Crie um script que declare uma variável e verifique 
se o seu valor é uma string. Se for, exiba a mensagem
 "É uma string", caso contrário, exiba a mensagem 
 "Não é uma string".*/

var n = "1"; 

if (typeof n == "string") {
       alert("É uma string")
}else{
       alert("Não é uma string")  
};




/*5.Crie um script que declare uma variável e verifique 
se o seu valor é um booleano. Se for, exiba a mensagem 
"É um booleano", caso contrário, exiba a mensagem 
"Não é um booleano".*/

var n = 1; 

if (typeof n == "boolean") {
       alert("É um booleano")
}else{
       alert("Não é um booleano")  
};




/*6. Crie um script que declare duas variáveis 
e exiba o resultado da subtração entre elas.*/

var a = prompt("Digite o primeiro número");
var b = prompt("Digite o segundo número");
calc = (a - b);

alert(`O resultado da subtração é ${calc}`);




/*7. Crie um script que declare duas variáveis 
e exiba o resultado da multiplicação entre elas.*/

var a = prompt("Digite o primeiro número");
var b = prompt("Digite o segundo número");
calc = (a * b);

alert(`O resultado da multiplicação é ${calc}`);




/*8. Crie um script que declare duas variáveis e 
exiba o resultado da divisão entre elas.*/

var a = prompt("Digite o primeiro número");
var b = prompt("Digite o segundo número");
calc = (a / b);

alert(`O resultado da divisão é ${calc}`);




/*9.Crie um script que declare uma variável e 
verifique se o seu valor é um número par. 
Se for, exiba a mensagem "É um número par", 
caso contrário, exiba a mensagem "Não é um número par". */

var x = prompt("Digite um número");

if (x % 2 == 0 ) {
    alert('É um número par: ')			
}else {
    alert('Não é um número par ')
};




/* 10. Crie um script que declare uma variável e
verifique se o seu valor é um número ímpar.
 Se for, exiba a mensagem "É um número ímpar", 
 caso contrário, exiba a mensagem
"Não é um número ímpar". */

var x = prompt("Digite um número");

if (x % 2 == 0 ) {
      alert('Não é um número impar ')			
}else {
      alert('É um número ímpar ')
};

  
