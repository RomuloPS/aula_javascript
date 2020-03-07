
/*
//AULA 1 PARTE 1
var nome = "Romulo Saraiva";
var n1 = 26;
var n2 = 10;
var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + n + " anos");

//alert(n+n2);

console.log(nome);
console.log(n1+n2);
console.log(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());


//alert(frase.toUpperCase());

//AULA 1 PARTE 2
var lista =["maça","pêra","banana"];
//lista.pop();
lista.push("uva");
console.log(lista);
//alert(lista[1]);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.toString()[0]);
console.log(lista.join(" - "));

var fruta = {nome:"Maçã", cor:"Vermelha"};
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);

var frutas = [{nome:"Maçã", cor:"Vermelha"},{nome:"Uva", cor:"Roxa"}];
console.log(frutas);
console.log(frutas[1].nome);
console.log(frutas[1].cor);

//AULA 1 PARTE 3


var n3 = prompt("Qual sua idade");

if(n3>=18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};


var count1 = 0;
while (count1 <= 5){
    console.log(count1);
    //alert(count);
    count1++;
}

var count2;
for (count2 = 0; count2<=5; count2++){
    console.log(count2);
}


var d = new Date();

console.log(d);
console.log(d.getDate());
console.log(d.getMonth()+1);
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
*/


//AULA 2

function clicou(){
    //alert("Obrigado por clicar!");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!<b>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://www.google.com");
    //window.location.href = "https://www.novelupdates.com"
}

function trocar(elemento){
    //alert("trocar texto");
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    elemento.innerHTML = "Obrigado por passar o mouse!";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse";
    elemento.innerHTML = "Passe o mouse";
}