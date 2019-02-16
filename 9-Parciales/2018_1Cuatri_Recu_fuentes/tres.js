function mostrar()
{
    var precio;
    var porcentaje;
    var calculo;
    var cantidad;

    precio = parseFloat(prompt("Ingrese su valor"));
    cantidad = parseInt(prompt("Ingrese la cantidad de personas"));
    calculo = precio / cantidad;
    porcentaje = calculo * 10 / 100 + calculo;

    alert("El resultado es $" + porcentaje + " cada uno.");

}
