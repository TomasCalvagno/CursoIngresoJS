/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let primerNumero;
	let segundoNumero;
	let suma;

	primerNumero = parseInt(document.getElementById("txtIdNumeroUno").value);
	segundoNumero = parseInt(document.getElementById("txtIdNumeroDos").value);
	
	suma = primerNumero + segundoNumero;

	alert("la suma es " + suma);	

}

function restar()
{
	let primerNumero;
	let segundoNumero;
	let resta; 

	primerNumero = parseInt(document.getElementById("txtIdNumeroUno").value);
	segundoNumero = parseInt(document.getElementById("txtIdNumeroDos").value);
 
    resta = primerNumero - segundoNumero;

	alert("la resta es " + resta);

}

function multiplicar()
{ 
	let primerNumero;
	let segundoNumero;
	let multiplicacion;

	primerNumero = parseInt(document.getElementById("txtIdNumeroUno").value);
	segundoNumero = parseInt(document.getElementById("txtIdNumeroDos").value);

    multiplicacion = primerNumero * segundoNumero;
 
	alert("la multiplicación es " + multiplicacion);

}

function dividir()
{
	let primerNumero;
	let segundoNumero;
	let division;

	primerNumero = parseInt(document.getElementById("txtIdNumeroUno").value);
	segundoNumero = parseInt(document.getElementById("txtIdNumeroDos").value);

    division = primerNumero / segundoNumero;

    alert("la división es " + division);

}

