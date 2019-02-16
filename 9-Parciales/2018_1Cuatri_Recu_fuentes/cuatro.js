function mostrar()
{
    var precio;
    var producto;
    var tarjeta;
    var resultado;
    var calculo;

    producto = parseInt(prompt("Cuanta cantidad va a llevar"));
    precio = parseFloat(prompt("Precio del libro"));
    //tarjeta = confirm("Paga con tarjeta?");
    calculo = producto * precio;

    if(producto > 2)
    {
        resultado = calculo * 0.9;
    }

    if(precio > 2000)
    {
        resultado = precio * 0.14;
    }

   /* if(tarjeta)
    {
        resultado = precio * 10 / 100;
    }
*/
    alert("El precio es " + resultado)

    
}
