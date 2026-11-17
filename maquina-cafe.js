
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



function verificarSaldo (productoSeleccionado,saldo) {
    if (productoSeleccionado === "espresso" && saldo >= precioEspresso) return true;
    if (productoSeleccionado === "americano" && saldo >= precioAmericano) return true;
    if (productoSeleccionado === "capuchino" && saldo >= precioCapuchino) return true;
    if (productoSeleccionado === "latte" && saldo >= precioLatte) return true;
    if (productoSeleccionado === "te" && saldo >= precioTe) return true;
    return false;
}



productoSeleccionado = prompt("Seleccione un producto del menú (espresso, americano, capuchino, latte, te):").toLowerCase();



switch (productoSeleccionado) {
   
    
    case "espresso":

        saldo =parseInt(prompt("El valor es $" + precioEspresso + " ingrese el dinero"));
        
        nivelCafe = nivelCafe - cafeEspresso;
        nivelVasos--;
        mensaje = "Preparando Espresso"
    
    break;


    case "americano":
        
        saldo =parseInt(prompt("El valor es $" + precioAmericano + " ingrese el dinero"));
        
        nivelCafe = nivelCafe - cafeAmericano;
        nivelVasos--;
        mensaje = "Preparando Americano"
        
    break;


    case "capuchino":

        saldo =parseInt(prompt("El valor es $" + precioCapuchino + " ingrese el dinero"));
        
        nivelCafe = nivelCafe - cafeCapuchino;
        nivelLeche = nivelLeche - lecheCapuchino;
        nivelAzucar = nivelAzucar - azucarCapuchino;
        nivelVasos--;
        mensaje = "Preparando Capuchino"

    break;


    case "latte":

        saldo =parseInt(prompt("El valor es $" + precioLatte + " ingrese el dinero"));
       
        nivelCafe = nivelCafe - cafeLatte;
        nivelLeche = nivelLeche - lecheLatte;
        nivelAzucar = nivelAzucar - azucarLatte;
        nivelVasos--;
        mensaje = "Preparando Latte"

    break;


    case "te":

        saldo =parseInt(prompt("El valor es $" + precioTe + " ingrese el dinero"));
        
        nivelTe = nivelTe - teTe;
        nivelAzucar = nivelAzucar - azucarTe;
        nivelVasos--;
        mensaje = "Preparando Te"

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
 