/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
let primerNumero;
let segundoNumero;
let tercerNumero;
let suma;

primerNumero = parseInt(document.getElementById("txtIdPrecioUno").value);
segundoNumero = parseInt(document.getElementById("txtIdPrecioDos").value);
tercerNumero = parseInt(document.getElementById("txtIdPrecioTres").value);
		
suma = primerNumero + segundoNumero + tercerNumero;

	
alert(suma);	

}

function Promedio () 
{
let primerNumero;
let segundoNumero;
let tercerNumero;
let suma;
let promedio;

primerNumero = parseInt(document.getElementById("txtIdPrecioUno").value);
segundoNumero = parseInt(document.getElementById("txtIdPrecioDos").value);
tercerNumero = parseInt(document.getElementById("txtIdPrecioTres").value);
suma = primerNumero + segundoNumero + tercerNumero;

promedio = suma / 3;

alert(promedio);

}

function PrecioFinal () 
{
let primerNumero;
let segundoNumero;
let tercerNumero;
let suma;
let iva;
let final;

primerNumero = parseInt(document.getElementById("txtIdPrecioUno").value);
segundoNumero = parseInt(document.getElementById("txtIdPrecioDos").value);
tercerNumero = parseInt(document.getElementById("txtIdPrecioTres").value);
suma = primerNumero + segundoNumero + tercerNumero;
iva = suma*(21/100);
final = suma + iva;

alert(final)

}


