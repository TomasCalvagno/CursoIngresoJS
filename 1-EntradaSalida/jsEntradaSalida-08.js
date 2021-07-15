/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    let primerNumero;
	let segundoNumero;
	let modulo;

	primerNumero = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	segundoNumero = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	
	modulo = primerNumero % segundoNumero;

	alert("el sobrante es " + modulo);	
}
