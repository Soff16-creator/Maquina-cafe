
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


let productoSeleccionado = "";   // "espresso", "americano", "capuchino", "latte" o "te"
let mensaje = "";                // texto que muestra la máquina como precios y demás 


let maquinaEncendida = true;
let hayInsumos = true;






if (nivelCafe >= cafeEspresso && nivelVasos >= 1) {
    mensaje = "la máquina está lista para preparar un espresso";

}
else {
    hayInsumos = false;
    mensaje = "La máquina no tiene insumos suficientes para preparar un espresso";
}





if (nivelCafe >= cafeCapuchino && nivelVasos >= 1 nivelcafe >= lecheCapuchino) {
    mensaje = "la máquina está lista para preparar un capuchino";
}

else {
    hayInsumos = false;
    mensaje = "La máquina no tiene insumos suficientes para preparar un capuchino";
}





if (nivelCafe >= cafeAmericano && nivelVasos >= 1) {
    mensaje = "la máquina está lista para preparar un americano";

}
else {
    hayInsumos = false;
    mensaje = "La máquina no tiene insumos suficientes para preparar un americano";
}





if (nivelCafe >= cafeLatte && nivelVasos >= 1  nivelLeche >= lecheLatte) {
    mensaje = "la máquina está lista para preparar un latte";

}
else {
    hayInsumos = false;
    mensaje = "La máquina no tiene insumos suficientes para preparar un latte";
}





if (nivelTe >= teTe && nivelVasos >= 1) {
    mensaje = "la máquina está lista para preparar un te";

}
else {
    hayInsumos = false;
    mensaje = "La máquina no tiene insumos suficientes para preparar un te";
}




let menu = promt("Seleccione un producto del menu:")

switch (productoSeleccionado) {
    
    case "espresso":
        nivelCafe = nivelCafe - cafeEspresso;
        nivelVasos--;
        mensaje = "Preparando Espresso"
        
        if (saldo >= precio_Espresso){

        }
    break;

    case "americano":
        nivelCafe = nivelCafe - cafeAmericano;
        nivelVasos--;
        mensaje = "Preparando Americano"
    break;

    case "capuchino":
        nivelCafe = nivelCafe - cafeCapuchino;
        nivelLeche = nivelLeche - lecheCapuchino;
        nivelAzucar = nivelAzucar - azucarCapuchino;
        nivelVasos--;
        mensaje = "Preparando Capuchino"
    break;

    case "latte":
        nivelTe = nivelTe - te_Te;
        nivelAzucar = nivelAzucar - azucarTe;
        mensaje = "Preparando Te"
    break;

    default:
        mensaje = "Opción no válidad"
    break;
}




nivelCafe = nivelCafe - cafeEspresso;
nivelVasos--;


nivelCafe = nivelCafe - cafeAmericano;
nivelVasos--;


nivelCafe = nivelCafe - cafeCapuchino;
nivelLeche = nivelLeche - lecheCapuchino;
nivelAzucar = nivelAzucar - azucarCapuchino;
nivelVasos--;


nivelCafe = nivelcafe - cafe_Latte;
nivelLeche = nivelLeche - lecheLatte;
nivelAzucar = nivelAzucar - azucarLatte;
nivelVasos--;


nivelTe = nivelTe - teTe;
nivelAzucar = nivelAzucar - azucarTe;






// Simulación de compra



// La persona mete un billete de 5000, el capuchino vale 4500
saldo = saldo + 5000;
 
// La persona presiona el botón del capuchino
productoSeleccionado = "capuchino";
 
// Cambio = lo que pagó menos lo que cuesta
cambio = saldo - precioCapuchino;
 
// La máquina gasta lo que lleva un capuchino
nivelCafe = nivelCafe - cafeCapuchino;
nivelLeche = nivelLeche - lecheCapuchino;
nivelVasos = nivelVasos - 1;
 
// El saldo ya se gastó
saldo = 0;
 
// Mensaje
mensaje = "Disfrute su " + productoSeleccionado + ". Cambio: $" + cambio;
 
console.log(mensaje);
console.log("Café:", nivelCafe);
console.log("Agua:", nivelAgua);
console.log("Leche:", nivelLeche);
console.log("Azúcar:", nivelAzucar);
console.log("Vasos:", nivelVasos);
 