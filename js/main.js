

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