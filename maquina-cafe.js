
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