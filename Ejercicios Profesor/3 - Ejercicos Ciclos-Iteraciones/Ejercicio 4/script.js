let i
let total=''

let numero = parseInt(prompt("Ingrese un numero"));
for(i = numero; i > 0;  i--)
{
   total += i + ", ";
}
total += i;  
alert(total);