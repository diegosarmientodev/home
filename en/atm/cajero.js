var imagenes = [];
imagenes[0] = "cien.jpg";
imagenes[1] = "cincuenta.jpg";
imagenes[2] = "veinte.jpg";
imagenes[3] = "diez.jpg";
imagenes[4] = "cinco.jpg";
imagenes[5] = "dos.jpg";
imagenes[6] = "uno.jpg";

//billete
var a = 100;
var q = 50;
var c = 20;
var d = 10;
var p = 5;
var f = 2;
var g = 1;


//cantidad de billetes
var h = 5;
var i = 2;
var j = 1;
//ecuacion saldo
var aa = a*h;
var aq = q*h;
var ac = c*i;
var ad = d*i;
var ap = p*i;
var af = f*i;
var ag = g*j;
var balance = aa+aq+ac+ad+ap+af+ag;


class Billete {
  constructor(v, m, nombre) {
    this.value = v;
    this.cantidad = m;
    this.nombre = nombre;
    this.imagen = new Image();
    this.imagen.src = imagenes[this.nombre];

  }
  mostrar0a(){
    foto0a.innerHTML = "<img src="+imagenes[this.nombre]+">"
  }
  mostrar0b(){
    foto0b.innerHTML = "<img src="+imagenes[this.nombre]+">"
  }
  mostrar0c(){
    foto0c.innerHTML = "<img src="+imagenes[this.nombre]+">"
  }
  mostrar0d(){
    foto0d.innerHTML = "<img src="+imagenes[this.nombre]+">"
  }
  mostrar0e(){
    foto0e.innerHTML = "<img src="+imagenes[this.nombre]+">"
  }
  mostrar1a(){
    foto1a.innerHTML = "<img src="+imagenes[this.nombre]+">"
  }
  mostrar1b(){
    foto1b.innerHTML = "<img src="+imagenes[this.nombre]+">"
  }
  mostrar1c(){
    foto1c.innerHTML = "<img src="+imagenes[this.nombre]+">"
  }
  mostrar1d(){
    foto1d.innerHTML = "<img src="+imagenes[this.nombre]+">"
  }
  mostrar1e(){
    foto1e.innerHTML = "<img src="+imagenes[this.nombre]+">"
  }
  mostrar2a(){
    foto2a.innerHTML = "<img src="+imagenes[this.nombre]+">"
  }
  mostrar2b(){
    foto2b.innerHTML = "<img src="+imagenes[this.nombre]+">"
  }
  mostrar3a(){
    foto3a.innerHTML = "<img src="+imagenes[this.nombre]+">"
  }
  mostrar3b(){
    foto3b.innerHTML = "<img src="+imagenes[this.nombre]+">"
  }
  mostrar4a(){
    foto4a.innerHTML = "<img src="+imagenes[this.nombre]+">"
  }
  mostrar4b(){
    foto4b.innerHTML = "<img src="+imagenes[this.nombre]+">"
  }
  mostrar5a(){
    foto5a.innerHTML = "<img src="+imagenes[this.nombre]+">"
  }
  mostrar5b(){
    foto5b.innerHTML = "<img src="+imagenes[this.nombre]+">"
  }
  mostrar6(){
    foto6.innerHTML = "<img src="+imagenes[this.nombre]+">"
  }
}

function entregarDinero() {
    var t = document.getElementById("dinero");
    var dinero = parseInt(t.value);
    for (var bi of  caja) {
      if (dinero > 0) {
        div = Math.floor(dinero / bi.value);
        if (div > bi.cantidad) {
          papeles = bi.cantidad
        }
        else {
          papeles = div;
        }
        entregado.push(new Billete(bi.value, papeles,));
        dinero = dinero - (bi.value * papeles);
        restart();

      }
    }
    if (dinero > 0) {
      resultado.innerHTML = "Soy un cajero malo, he sido malo y no puedo darte esa cantidad :(";

    }
    else  {
      resultado.innerHTML = resultado.innerHTML + "<br/>";
      for(var e of entregado){

          if (e.cantidad > 0) {
          resultado.innerHTML = resultado.innerHTML + e.cantidad + " bill(s) of $" + e.value + "<br/>" + "<br/>";
          balance = balance - (e.value*e.cantidad);
          if (e.value == caja[0].value && balance > 0 && e.cantidad == 1 || e.value*e.cantidad == 500 || e.value*e.cantidad == 400 || e.value*e.cantidad == 300|| e.value*e.cantidad == 200|| e.value*e.cantidad == 100) {
            caja[0].mostrar0a();
          }
          if (e.value == caja[0].value && balance > 0 && e.cantidad == 2 || e.value*e.cantidad == 500 || e.value*e.cantidad == 400 || e.value*e.cantidad == 300|| e.value*e.cantidad == 200) {
            caja[0].mostrar0b();
          }
          if (e.value == caja[0].value && balance > 0 && e.cantidad == 3 || e.value*e.cantidad == 500 || e.value*e.cantidad == 400 || e.value*e.cantidad == 300) {
            caja[0].mostrar0c();
          }
          if (e.value == caja[0].value && balance > 0 && e.cantidad == 4 || e.value*e.cantidad == 500 || e.value*e.cantidad == 400) {
            caja[0].mostrar0d();
          }
          if (e.value == caja[0].value && balance > 0 && e.cantidad == 5) {
            caja[0].mostrar0e();
          }
          if (e.value == caja[1].value && balance > 0 && e.value*e.cantidad >= 50) {
            caja[1].mostrar1a();
          }
          if (e.value == caja[1].value && balance > 0 && e.value*e.cantidad >= 100) {
            caja[1].mostrar1b();
          }
          if (e.value == caja[1].value && balance > 0 && e.value*e.cantidad >= 150) {
            caja[1].mostrar1c();
          }
          if (e.value == caja[1].value && balance > 0 && e.value*e.cantidad >= 200) {
            caja[1].mostrar1d();
          }
          if (e.value == caja[1].value && balance > 0 && e.value*e.cantidad >= 250) {
            caja[1].mostrar1e();
          }
          if (e.value == caja[2].value && balance > 0 && e.cantidad == 1 || e.value*e.cantidad == 40) {
            caja[2].mostrar2a();
          }
          if (e.value == caja[2].value && balance > 0 && e.cantidad == 2) {
            caja[2].mostrar2b();
          }
          if (e.value == caja[3].value && balance > 0 && e.cantidad == 1 || e.value/2 == 5) {
            caja[3].mostrar3a();
          }
          if (e.value == caja[3].value && balance > 0 && e.cantidad == 2) {
            caja[3].mostrar3b();
          }
          if (e.value == caja[4].value && balance > 0 && e.cantidad == 1 || e.value*2 == 10) {
            caja[4].mostrar4a();
          }
          if (e.value == caja[4].value && balance > 0 && e.cantidad == 2) {
            caja[4].mostrar4b();
          }
          if (e.value == caja[5].value && balance > 0 && e.cantidad == 1 || e.value*e.cantidad == 4) {
            caja[5].mostrar5a();
          }
          if (e.value == caja[5].value && balance > 0 && e.cantidad == 2) {
            caja[5].mostrar5b();
          }
          if (e.value == caja[6].value && balance > 0 && e.value/e.cantidad == 1) {
            caja[6].mostrar6();
            }
            console.log(e.cantidad, e.value);
        }
        if (balance < 0 || t > balance) {
          resultado.innerHTML = "No hay suficiente $<br/>"
          balance = balance + (e.value*e.cantidad);
        }

      }
      entregado.length = entregado.length - entregado.length;
      balance
      saldito();
    }

}

function restart() {
  resultado.innerHTML="";
  foto0a.innerHTML="";
  foto0b.innerHTML="";
  foto0c.innerHTML="";
  foto0d.innerHTML="";
  foto0e.innerHTML="";
  foto1a.innerHTML="";
  foto1b.innerHTML="";
  foto1c.innerHTML="";
  foto1d.innerHTML="";
  foto1e.innerHTML="";
  foto2a.innerHTML="";
  foto2b.innerHTML="";
  foto3a.innerHTML="";
  foto3b.innerHTML="";
  foto4a.innerHTML="";
  foto4b.innerHTML="";
  foto5a.innerHTML="";
  foto5b.innerHTML="";
  foto6.innerHTML="";
}


var caja = [];
var entregado = [];
caja.push(new Billete(a, h, 0));
caja.push(new Billete(q, h, 1));
caja.push(new Billete(c, i, 2));
caja.push(new Billete(d, i, 3));
caja.push(new Billete(p, i, 4));
caja.push(new Billete(f, i, 5));
caja.push(new Billete(g, j, 6));

var div = 0;
var papeles = 0;


function saldito(){
saldo.innerHTML = "Tu saldo es " + balance;

}


console.log(a,q,c,d,p,f,g,h,i,j,aa,aq,ac,ad,ap,af,ag)

var saldo = document.getElementById("saldo");
var resultado = document.getElementById("resultado");
var foto0a = document.getElementById("foto0a");
var foto0b = document.getElementById("foto0b");
var foto0c = document.getElementById("foto0c");
var foto0d = document.getElementById("foto0d");
var foto0e = document.getElementById("foto0e");
var foto1a = document.getElementById("foto1a");
var foto1b = document.getElementById("foto1b");
var foto1c = document.getElementById("foto1c");
var foto1d = document.getElementById("foto1d");
var foto1e = document.getElementById("foto1e");
var foto2a = document.getElementById("foto2a");
var foto2b = document.getElementById("foto2b");
var foto3a = document.getElementById("foto3a");
var foto3b = document.getElementById("foto3b");
var foto4a = document.getElementById("foto4a");
var foto4b = document.getElementById("foto4b");
var foto5a = document.getElementById("foto5a");
var foto5b = document.getElementById("foto5b");
var foto6 = document.getElementById("foto6");
var boton = document.getElementById("boton");
var b = document.getElementById("botoncito");
var button = document.getElementById("button");

boton.addEventListener("click", entregarDinero);
b.addEventListener("click", restart);
button.addEventListener("click", saldito);
