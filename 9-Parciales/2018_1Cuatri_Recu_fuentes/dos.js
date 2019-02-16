function mostrar()
{
    var precio;
    var descuento;
    var resultado;

    precio = parseFloat(prompt("Ingrese el valor de su compra"));
    descuento = precio * 10 / 100;
    resultado = descuento * 21 / 100;

    alert("Su valor es de " + resultado);
}
