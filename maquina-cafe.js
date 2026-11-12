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






function verificarInsumos(productoSeleccionado, saldo) {
    if (nivelCafe >= cafeEspresso && nivelVasos >= 1) return true;
    if (nivelCafe >= cafeCapuchino && nivelVasos >= 1 && nivelLeche >= lecheCapuchino) return true;
    if (nivelCafe >= cafeAmericano && nivelVasos >= 1) return true;
    if (nivelCafe >= cafeLatte && nivelVasos >= 1 && nivelLeche >= lecheLatte) return true;
    if (nivelTe >= teTe && nivelVasos >= 1) return true;
    return false;
}







function verificarSaldo(precio) {
    saldo = parseInt(prompt("El valor es $" + precio + " Ingrese el dinero:"));

    while (saldo < precio) {
        alert("Saldo insuficiente. Debe ingresar los $" + precio + " completos.");
        saldo = parseInt(prompt("Ingrese los $" + precio + " completos:"));
    }

    cambio = saldo - precio;
    if (cambio > 0) {
        entregarCambio(cambio);
    }

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
    } else {
       alert("No hay suficiente cambio para devolver. Por favor, contacte al administrador.");
        return false;
    }
}






productoSeleccionado = prompt("Seleccione un producto del menú (espresso, americano, capuchino, latte, te):").toLowerCase();

switch (productoSeleccionado) {
    
    case "espresso":
        
        verificarSaldo(precioEspresso);

        nivelCafe = nivelCafe - cafeEspresso;
        nivelVasos--;
        mensaje = "Preparando Espresso. Su cambio es: $" + cambio;
    
    break;

    case "americano":
        
        verificarSaldo(precioAmericano);
        
        nivelCafe = nivelCafe - cafeAmericano;
        nivelVasos--;
        mensaje = "Preparando Americano. Su cambio es: $" + cambio;
    break;

    case "capuchino":

        verificarSaldo(precioCapuchino);

        nivelCafe = nivelCafe - cafeCapuchino;
        nivelLeche = nivelLeche - lecheCapuchino;
        nivelAzucar = nivelAzucar - azucarCapuchino;
        nivelVasos--;
        mensaje = "Preparando Capuchino. Su cambio es: $" + cambio;
    break;

    case "latte":

        verificarSaldo(precioLatte);

        nivelCafe = nivelCafe - cafeLatte;
        nivelLeche = nivelLeche - lecheLatte;
        nivelAzucar = nivelAzucar - azucarLatte;
        nivelVasos--;
        mensaje = "Preparando Latte. Su cambio es: $" + cambio;
    break;

    case "te":

        verificarSaldo(precioTe);
        
        nivelTe = nivelTe - teTe;
        nivelAzucar = nivelAzucar - azucarTe;
        nivelVasos--;
        mensaje = "Preparando Te. Su cambio es: $" + cambio;
    break;

    default:
        mensaje = "Opción no válida "
    break;
}





alert(mensaje);
 
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






 