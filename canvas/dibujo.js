var d = document.getElementById('dibujito');
var lienzo = d.getContext("2d");
var x0 =   0;
var y0 =   0;
var lineas = parseInt(prompt("Cuantas líneas deseas dibujar?"));
var colorcito = prompt("Color de lineas");
var l = 0;

for (var  l= 0; l <= lineas; l++)
{
    dibujarLinea(colorcito, 0, x0, y0, 300);
    dibujarLinea(colorcito, x0, 300, 300, 300 - y0);
    dibujarLinea(colorcito, 300, 300 - x0, 300 - y0, 0);
    dibujarLinea(colorcito, 300 - x0, 0, 0, y0);
    x0 = x0 + 10;
    y0 = x0 + 10;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
