function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");

	while(numero <= 9 && numero >= 0)
	{
		document.getElementById("Numero").value = numero;
		break;
	}


}//FIN DE LA FUNCIÓN