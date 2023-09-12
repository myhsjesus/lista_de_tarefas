//um array sem elementos:
let lista = [];
//um array com 7 elementos numéricos:
let numeros = [1,3,5,7,9,11,13];
//3 elementos de vários tipos + vírgula à direita:
let misc = [1.1, true, "mylena",];

//Chamada sem argumentos:
var a = new Array();
//Chamada com um único argumento numérico,
//o qual especifica um comprimento:
var b = new Array(10);
//Especificação explícita de dois ou mais 
//elementoa de array ou de apenas um elemento não
//numérico para o array: 
var c = new Array(5,4,3,2,1, "testing, testing");

//Começa com um array de um elemento
var a = ["world"];
//Lê o elemento 0
var value = a[0];
//Grava o elemento 1
a[1] = 3.14;
//Grava o elemento 2
i = 2;
a[i] = 3;
//Grava o elemento 3
a[i + 1] = "hello";