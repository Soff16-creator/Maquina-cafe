# Maquina-cafe


### Entradas

| Entrada | Tipo de dato | Unidad |
| :--- | :--- | :--- |
| Saldo | number | $ (COP) |
| Café | number | gr |
| Leche | number | ml |
| Agua | number | ml |
| Azúcar | number | gr |
| Té | number | gr |
| Vaso | number | unidades |
| Producto elegido | string | N/A |



### Inventario de dinero

Lo que la máquina acepta y usa para dar cambio:

| Tipo | ($) |
| :--- | :--- |
| Monedas | 1000, 500, 200 |
| Billetes | 2000, 5000, 10000, 20000 |



### Unidades
$: Pesos colombianos 
gr: Gramos
ml: Miligramos



### SALIDAS

| Salida | Tipo de dato | Descripción |
| :--- | :--- | :--- |
| Café | string | Café preparado y entregado en un vaso |
| Té | string | Té preparado y entregado en un vaso |
| Cambio | number | Dinero devuelto al usuario |
| Mensaje | string | Avisos en pantalla (sin insumos, saldo insuficiente, etc.) |



### Productos y recetas

| Producto | Precio ($) | Café (gr) | Té (gr) | Agua (ml) | Leche (ml) | Azúcar (gr) | Vaso 
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Espresso | 3000 | 8 | 0 | 30 | 0 | 0 | 1 |
| Americano | 3500 | 8 | 0 | 150 | 0 | 0 | 1 |
| Capuchino | 4500 | 8 | 0 | 30 | 120 | 5 | 1 |
| Latte | 5000 | 8 | 0 | 30 | 200 | 5 | 1 |
| Té | 2500 | 0 | 2 | 200 | 0 | 5 | 1 |



### Constantes

| Variable | Tipo | Tipo de dato | Unidad |
| :--- | :--- | :--- | :--- |
| PRECIO_ESPRESSO | const | number | $ |
| PRECIO_AMERICANO | const | number | $ |
| PRECIO_CAPUCHINO | const | number | $ |
| PRECIO_LATTE | const | number | $ |
| PRECIO_TE | const | number | $ |
| CAPACIDAD_CAFE | const | number | gr |
| CAPACIDAD_TE | const | number | gr |
| CAPACIDAD_AGUA | const | number | ml |
| CAPACIDAD_LECHE | const | number | ml |
| CAPACIDAD_AZUCAR | const | number | gr |
| CAPACIDAD_VASOS | const | number | unidades |



### Variables

| Variable | Tipo | Tipo de dato | Unidad |
| :--- | :--- | :--- | :--- |
| saldo | let | number | $ |
| cambio | let | number | $ |
| nivelCafe | let | number | gr |
| nivelTe | let | number | gr |
| nivelAgua | let | number | ml |
| nivelLeche | let | number | ml |
| nivelAzucar | let | number | gr |
| nivelVasos | let | number | unidades |
| monedas1000 | let | number | unidades |
| monedas500 | let | number | unidades |
| monedas200 | let | number | unidades |
| billetes2000 | let | number | unidades |
| billetes5000 | let | number | unidades |
| billetes10000 | let | number | unidades |
| billetes20000 | let | number | unidades |
| productoSeleccionado | let | string | N/A |
| mensaje | let | string | N/A |
| maquinaEncendida | let | boolean | N/A |
| hayInsumos | let | boolean | N/A |




### Reglas de negocio
La máquina solo dispensa un producto si el saldo cubre su precio.
La máquina solo dispensa si hay suficientes insumos (café o té, agua, leche, azúcar) y al menos un vaso.
Cada producto consume exactamente 1 vaso.
La máquina solo recibe las monedas y billetes del inventario (monedas de 1000, 500 y 200; billetes de 2000, 5000, 10000 y 20000).
El cambio solo se entrega con las monedas y billetes que haya en el inventario.
Si se acaba algún insumo, ese producto queda no disponible.





