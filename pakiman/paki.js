var imagenes = [];
imagenes["cauchin"]= "vaca.png";
imagenes["pokacho"]= "pollo.png";
imagenes["tocinauro"]= "cerdo.png";

class Pakiman
{
  constructor(n,v,a)
  {
    this.imagen = new Image();
    this.nombre = n;
    this.vida = v;
    this.ataque = a;

    this.imagen.src = imagenes[this.nombre];
  }
  hablar()
  {
    alert(this.nombre);
  }
  mostrar()
  {
    document.body.appendChild(this.imagen);
    document.write("<p>");
    document.write("<strong>" + this.nombre + "</strong><br />");
    document.write("Vida :" + this.vida + "<br />");
    document.write("Ataque :" + this.ataque + "<hr />");
    document.write("</p>");
  }

}

var cauchin = new Pakiman("cauchin",100,30);
var pokacho = new Pakiman("pokacho",80,50);
var tocinauro = new Pakiman("tocinauro",120,40);

pokacho.mostrar();
tocinauro.mostrar();
cauchin.mostrar();
