/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
let perimetro;
let largo;
let ancho;
let alambre;

largo = parseInt(document.getElementById("txtIdLargo").value);
ancho = parseInt(document.getElementById("txtIdAncho").value);

perimetro = largo + ancho;

alambre = perimetro * 3;

alert(alambre)

}


function Circulo () 
{
let radio;
let diametro;
let circunferencia;
let alambre;

radio = parseInt(document.getElementById("txtIdRadio").value);

diametro = radio * 2

circunferencia = (3,14 * diametro);

alambre = circunferencia * 3;

alert(alambre)
	
}


function Materiales () 
{
const BOLSA_CEMENTO = 2;
const BOLSA_CAL = 3;	
let largo;
let ancho;
let area;
let cemento;
let cal;

largo = parseInt(document.getElementById("txtIdLargo").value);
ancho = parseInt(document.getElementById("txtIdAncho").value);

area = largo * ancho;

cemento = area * BOLSA_CEMENTO
cal = area * BOLSA_CAL

alert("se necesita/n " + cemento + " bolsa/s de cemento" + " y " + cal + " de cal")	

}