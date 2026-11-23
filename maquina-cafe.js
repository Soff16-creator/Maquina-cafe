const precioEspresso = 3000;
const precioAmericano = 3500;
const precioCapuchino = 4500;
const precioLatte = 5000;
const precioTe = 2500;


const capacidadCafe = 1000;     // gr
const capacidadTe = 300;        // gr  
const capacidadLeche = 3000;    // ml
const capacidadAzucar = 500;    // gr
const capacidadVasos = 100;     // unidades


const cafeEspresso = 8;        // gr
const aguaEspresso = 30;       // ml

const cafeAmericano = 8;       // gr
const aguaAmericano = 150;     // ml

const cafeCapuchino = 8;       // gr
const aguaCapuchino = 30;      // ml
const lecheCapuchino = 120;    // ml
const azucarCapuchino = 5;     // gr

const cafeLatte = 8;           // gr
const aguaLatte = 30;          // ml
const lecheLatte = 200;        // ml
const azucarLatte = 5;         // gr

const teTe = 2;                // gr
const aguaTe = 200;            // ml
const azucarTe = 5;            // gr



let saldo = 0;                  // $ ingresado por el usuario
let cambio = 0;                 // $ devolver


let nivelCafe = capacidadCafe;       // gr
let nivelTe = capacidadTe;           // gr    
let nivelLeche = capacidadLeche;     // ml
let nivelAzucar = capacidadAzucar;   // gr
let nivelVasos = capacidadVasos;     // unidades


let monedas1000 = 30;   // unidades
let monedas500 = 30;    // unidades
let monedas200 = 30;    // unidades
let monedas100 = 30;   // unidades


let billetes50000 = 20;    // unidades
let billetes20000 = 20;    // unidades
let billetes10000 = 20;   // unidades
let billetes5000 = 20;   // unidades
let billetes2000 = 20;   // unidades


let productoSeleccionado = "espresso, americano, capuchino, latte"; 
let mensaje = "";                // texto que muestra la máquina como precios y demás 


let maquinaEncendida = true;
let hayInsumos = true;

let opcionElegida = 0;
let precioActual = 0;




// --- COnecto con html ---
const pantallaSaldo = document.getElementById("credit");
const formulario = document.getElementById("balance-form");
const inputDinero = document.getElementById("balance-input");
const dispensador = document.getElementById("dispenser");

// --- actualiza la pantalla y stocks ---
function actualizarPantalla() {
  pantallaSaldo.textContent = "$" + saldo;

  const stocks = document.querySelectorAll(".shelf__stock");
  for (let i = 0; i < stocks.length; i++) {
    stocks[i].textContent = "Stock: " + nivelVasos;
  }
}

// --- abonar ---
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  let dinero = parseInt(inputDinero.value);

  if (isNaN(dinero) || dinero <= 0) {
    alert("Ingrese un valor válido");
  } else {
    saldo = saldo + dinero;
    actualizarPantalla();

    if (opcionElegida > 0) {
      verificarSaldo(precioActual);
    }
  }
  inputDinero.value = "";
});



function verificarInsumos(productoSeleccionado, saldo) {
    if (nivelCafe >= cafeEspresso && nivelVasos >= 1) return true;
    if (nivelCafe >= cafeCapuchino && nivelVasos >= 1 && nivelLeche >= lecheCapuchino) return true;
    if (nivelCafe >= cafeAmericano && nivelVasos >= 1) return true;
    if (nivelCafe >= cafeLatte && nivelVasos >= 1 && nivelLeche >= lecheLatte) return true;
    if (nivelTe >= teTe && nivelVasos >= 1) return true;
    return false;
}







function verificarSaldo(precio) {
  if (saldo < precio) {
    dispensador.textContent = "Faltan $" + (precio - saldo);
    return;
  }

  if (opcionElegida === 1) { nivelCafe -= cafeEspresso; dispensador.textContent = "Espresso listo"; }
  if (opcionElegida === 2) { nivelCafe -= cafeAmericano; dispensador.textContent = "Americano listo"; }
  if (opcionElegida === 3) { nivelCafe -= cafeCapuchino; nivelLeche -= lecheCapuchino; nivelAzucar -= azucarCapuchino; dispensador.textContent = "Capuchino listo"; }
  if (opcionElegida === 4) { nivelCafe -= cafeLatte; nivelLeche -= lecheLatte; nivelAzucar -= azucarLatte; dispensador.textContent = "Latte listo"; }
  if (opcionElegida === 5) { nivelTe -= teTe; nivelAzucar -= azucarTe; dispensador.textContent = "Té listo"; }
  nivelVasos--;

  saldo = saldo - precio;
  opcionElegida = 0;
  actualizarPantalla();
}





function entregarCambio(montoCambio) {
    let restante = montoCambio;

   
    while (restante >= 50000 && billetes50000 > 0) {
        restante -= 50000;
        billetes50000--;
    }

    
    while (restante >= 20000 && billetes20000 > 0) {
        restante -= 20000;
        billetes20000--;
    }

   
    while (restante >= 10000 && billetes10000 > 0) {
        restante -= 10000;
        billetes10000--;
    }

    
    while (restante >= 5000 && billetes5000 > 0) {
        restante -= 5000;
        billetes5000--;
    }

   
    while (restante >= 2000 && billetes2000 > 0) {
        restante -= 2000;
        billetes2000--;
    }

  
    while (restante >= 1000 && monedas1000 > 0) {
        restante -= 1000;
        monedas1000--;
    }

    
    while (restante >= 500 && monedas500 > 0) {
        restante -= 500;
        monedas500--;
    }

   
    while (restante >= 200 && monedas200 > 0) {
        restante -= 200;
        monedas200--;
    }

    
    while (restante >= 100 && monedas100 > 0) {
        restante -= 100;
        monedas100--;
    }


    if (restante === 0) {
        return true;
    } 
    
    
    else {
       alert("No hay suficiente cambio para devolver. Por favor, contacte al administrador.");
        return false;
    }
}






function pedirProducto(opcion) {

switch (opcion) {
    
    case 1:
    
    if (nivelCafe >= cafeEspresso && nivelVasos >= 1) {
        opcionElegida = 1;
        precioActual = precioEspresso;
        dispensador.textContent = "Espresso: $" + precioEspresso + ". Ingrese dinero.";

    } else {

        alert("Sin insumos para Espresso");
    }

break;
    
    break;

    case 2:
        
       if (nivelCafe >= cafeAmericano && nivelVasos >= 1) {
        opcionElegida = 2;
        precioActual = precioAmericano;
        dispensador.textContent = "Americano: $" + precioAmericano + ". Ingrese dinero.";

     } else {

        alert("Sin insumos para Americano");
    }
        
        
    break;

    case 3:

        if (nivelCafe >= cafeCapuchino && nivelVasos >= 1 && nivelLeche >= lecheCapuchino) {
            opcionElegida = 3;
            precioActual = precioCapuchino;
            dispensador.textContent = "Capuchino: $" + precioCapuchino + ". Ingrese dinero.";

        } else {
            alert("Sin insumos para Capuchino");
        }

    break;

    case 4:

        if (nivelCafe >= cafeLatte && nivelVasos >= 1 && nivelLeche >= lecheLatte) {
            opcionElegida = 4;
            precioActual = precioLatte;
            dispensador.textContent = "Latte: $" + precioLatte + ". Ingrese dinero.";

        } else {
            alert("Sin insumos para Latte");
        }

    break;

    case 5:

        if (nivelTe >= teTe && nivelVasos >= 1) {
            opcionElegida = 5;
            precioActual = precioTe;
            dispensador.textContent = "Té: $" + precioTe + ". Ingrese dinero.";  

        } else {
            alert("Sin insumos para Té");
        }       
    break;

    default:
        mensaje = "Opción no válida "
    break;

}
}








document.querySelector('[data-select="1"]').addEventListener("click", function () { pedirProducto(1); });
document.querySelector('[data-select="2"]').addEventListener("click", function () { pedirProducto(2); });
document.querySelector('[data-select="3"]').addEventListener("click", function () { pedirProducto(3); });
document.querySelector('[data-select="4"]').addEventListener("click", function () { pedirProducto(4); });
document.querySelector('[data-select="5"]').addEventListener("click", function () { pedirProducto(5); });



function devolverCambio() {
  if (saldo > 0) {
    let sePudo = entregarCambio(saldo);
    if (sePudo === true) {
      pantallaSaldo.textContent = "Cambio: $" + saldo;
      saldo = 0;
    }
  } else {
    alert("No hay cambio para devolver");
  }

  opcionElegida = 0;
  precioActual = 0;
  dispensador.textContent = "";
}

document.querySelector('[data-action="return-change"]').addEventListener("click", devolverCambio);


 
console.log(mensaje);
console.log("Café:", nivelCafe);
console.log("Leche:", nivelLeche);
console.log("Azúcar:", nivelAzucar);
console.log("Vasos:", nivelVasos);
console.log("Billetes $50.000:", billetes50000);
console.log("Billetes $20.000:", billetes20000);
console.log("Billetes $10.000:", billetes10000);
console.log("Billetes $5.000:", billetes5000);
console.log("Billetes $2.000:", billetes2000);
console.log("Monedas $1.000:", monedas1000);
console.log("Monedas $500:", monedas500);
console.log("Monedas $200:", monedas200);
console.log("Monedas $100:", monedas100);






 