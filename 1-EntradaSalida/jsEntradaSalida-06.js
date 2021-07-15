/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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
