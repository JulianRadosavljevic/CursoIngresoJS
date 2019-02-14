function mostrar()
{
//tomo la edad  

	var edad;
    var estado;
    var estado2;

    edad = parseInt(document.getElementById("edad").value);
	estado = document.getElementById("estadoCivil").value;

    if (edad < 18 && (estado != "Soltero"))
    {
        alert("Es muy pequeño para no ser soltero");

    }

    if (edad >= 18 && (estado == "Soltero"))
    {
        alert("Es soltero y no es menor");

    }


}//FIN DE LA FUNCIÓN