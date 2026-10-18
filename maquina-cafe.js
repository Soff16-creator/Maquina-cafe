
const PRECIO_ESPRESSO = 3000;
const PRECIO_AMERICANO = 3500;
const PRECIO_CAPUCHINO = 4500;
const PRECIO_LATTE = 5000;
const PRECIO_TE = 2500;


const CAPACIDAD_CAFE = 1000;     // gr
const CAPACIDAD_TE = 300;        // gr
const CAPACIDAD_AGUA = 5000;     // ml
const CAPACIDAD_LECHE = 3000;    // ml
const CAPACIDAD_AZUCAR = 500;    // gr
const CAPACIDAD_VASOS = 100;     // unidades


const CAFE_ESPRESSO = 8;        // gr
const AGUA_ESPRESSO = 30;       // ml

const CAFE_AMERICANO = 8;       // gr
const AGUA_AMERICANO = 150;     // ml

const CAFE_CAPUCHINO = 8;       // gr
const AGUA_CAPUCHINO = 30;      // ml
const LECHE_CAPUCHINO = 120;    // ml
const AZUCAR_CAPUCHINO = 5;     // gr

const CAFE_LATTE = 8;           // gr
const AGUA_LATTE = 30;          // ml
const LECHE_LATTE = 200;        // ml
const AZUCAR_LATTE = 5;         // gr

const TE_TE = 2;                // gr
const AGUA_TE = 200;            // ml
const AZUCAR_TE = 5;            // gr





let saldo = 0;      // $ ingresado por el usuario
let cambio = 0;     // $ devolver


let nivelCafe = CAPACIDAD_CAFE;       // gr
let nivelTe = CAPACIDAD_TE;           // gr
let nivelAgua = CAPACIDAD_AGUA;       // ml
let nivelLeche = CAPACIDAD_LECHE;     // ml
let nivelAzucar = CAPACIDAD_AZUCAR;   // gr
let nivelVasos = CAPACIDAD_VASOS;     // unidades


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


// VSimulación de compra



// La persona mete un billete de 5000, el capuchino vale 4500
saldo = saldo + 5000;
 
// La persona presiona el botón del capuchino
productoSeleccionado = "capuchino";
 
// Cambio = lo que pagó menos lo que cuesta
cambio = saldo - PRECIO_CAPUCHINO;
 
// La máquina gasta lo que lleva un capuchino
nivelCafe = nivelCafe - CAFE_CAPUCHINO;
nivelAgua = nivelAgua - AGUA_CAPUCHINO;
nivelLeche = nivelLeche - LECHE_CAPUCHINO;
nivelAzucar = nivelAzucar - AZUCAR_CAPUCHINO;
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
 