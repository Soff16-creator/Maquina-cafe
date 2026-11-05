
const precio_Espresso = 3000;
const precio_Americano = 3500;
const precio_Capuchino = 4500;
const precio_Latte = 5000;
const precio_Te = 2500;


const capacidad_Cafe = 1000;     // gr
const capacidad_Te = 300;        // gr  
const capacidad_Leche = 3000;    // ml
const capacidad_Azucar = 500;    // gr
const capacidad_Vasos = 100;     // unidades


const cafe_Espresso = 8;        // gr
const agua_Espresso = 30;       // ml

const cafe_Americano = 8;       // gr
const agua_Americano = 150;     // ml

const cafe_Capuchino = 8;       // gr
const agua_Capuchino = 30;      // ml
const leche_Capuchino = 120;    // ml
const azucar_Capuchino = 5;     // gr

const cafe_Latte = 8;           // gr
const agua_Latte = 30;          // ml
const leche_Latte = 200;        // ml
const azucar_Latte = 5;         // gr

const te_Te = 2;                // gr
const agua_Te = 200;            // ml
const azucar_Te = 5;            // gr



let saldo = 0;                  // $ ingresado por el usuario
let cambio = 0;                 // $ devolver


let nivelCafe = capacidad_Cafe;       // gr
let nivelTe = capacidad_Te;           // gr    
let nivelLeche = capacidad_Leche;     // ml
let nivelAzucar = capacidad_Azucar;   // gr
let nivelVasos = capacidad_Vasos;     // unidades


let monedas1000 = 30;   // unidades
let monedas500 = 30;    // unidades
let monedas200 = 30;    // unidades


let billetes2000 = 20;    // unidades
let billetes5000 = 20;    // unidades
let billetes10000 = 20;   // unidades
let billetes20000 = 20;   // unidades


let productoSeleccionado = "";   // "espresso", "americano", "capuchino", "latte" o "te"
let mensaje = "";                // texto que muestra la máquina como precios y demás 


let maquinaEncendida = true;
let hayInsumos = true;






if (nivelCafe >= cafe_Espresso && nivelVasos >= 1) {
    mensaje = "la máquina está lista para preparar un espresso";

}
else {
    hayInsumos = false;
    mensaje = "La máquina no tiene insumos suficientes para preparar un espresso";
}





if (nivelCafe >= cafe_Capuchino && nivelVasos >= 1 nivelcafe >= leche_Capuchino) {
    mensaje = "la máquina está lista para preparar un capuchino";

}
else {
    hayInsumos = false;
    mensaje = "La máquina no tiene insumos suficientes para preparar un capuchino";
}





if (nivelCafe >= cafe_Americano && nivelVasos >= 1) {
    mensaje = "la máquina está lista para preparar un americano";

}
else {
    hayInsumos = false;
    mensaje = "La máquina no tiene insumos suficientes para preparar un americano";
}





if (nivelCafe >= cafe_Latte && nivelVasos >= 1  nivelLeche >= leche_Latte) {
    mensaje = "la máquina está lista para preparar un latte";

}
else {
    hayInsumos = false;
    mensaje = "La máquina no tiene insumos suficientes para preparar un latte";
}





if (nivelTe >= te_Te && nivelVasos >= 1) {
    mensaje = "la máquina está lista para preparar un te";

}
else {
    hayInsumos = false;
    mensaje = "La máquina no tiene insumos suficientes para preparar un te";
}




switch (productoSeleccionado) {
    
    case "espresso":
        nivelCafe = nivelCafe - cafe_Espresso;
        nivelVasos--;
    break;

    case "americano":
        nivelCafe = nivelCafe - cafe_Americano;
        nivelVasos--;
    break;

    case "capuchino":
        nivelCafe = nivelCafe - cafe_Capuchino;
        nivelLeche = nivelLeche - leche_Capuchino;
        nivelAzucar = nivelAzucar - azucar_Capuchino;
        nivelVasos--;
    break;

    case "latte":
        nivelTe = nivelTe - te_Te;
        nivelAzucar = nivelAzucar - azucar_Te;
    break;

    default:
        mensaje = "Opción no válidad"
    break;
}




nivelCafe = nivelCafe - cafe_Espresso;
nivelVasos--;


nivelCafe = nivelCafe - cafe_Americano;
nivelVasos--;


nivelCafe = nivelCafe - cafe_Capuchino;
nivelLeche = nivelLeche - leche_Capuchino;
nivelAzucar = nivelAzucar - azucar_Capuchino;
nivelVasos--;


nivelCafe = nivelcafe - cafe_Latte;
nivelLeche = nivelLeche - leche_Latte;
nivelAzucar = nivelAzucar - azucar_Latte;
nivelVasos--;


nivelTe = nivelTe - te_Te;
nivelAzucar = nivelAzucar - azucar_Te;






// Simulación de compra



// La persona mete un billete de 5000, el capuchino vale 4500
saldo = saldo + 5000;
 
// La persona presiona el botón del capuchino
productoSeleccionado = "capuchino";
 
// Cambio = lo que pagó menos lo que cuesta
cambio = saldo - precio_Capuchino;
 
// La máquina gasta lo que lleva un capuchino
nivelCafe = nivelCafe - cafe_Capuchino;
nivelLeche = nivelLeche - leche_Capuchino;
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
 