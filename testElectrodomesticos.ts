import { Electrodomestico } from "./electrodomestico";
import { Lavadora } from "./lavadora";
import { Television } from "./television";

let lavadora1: Lavadora = new Lavadora ("A", "rojo", 50)
let lavadoraDefault: Lavadora = new Lavadora("hdah", "hjk", 90)

console.log(lavadora1.getPrecioBase())
console.log(lavadora1.getColor());
console.log(lavadora1.getConsumoEnergetico());
console.log(lavadoraDefault.getPrecioBase());
console.log(lavadoraDefault.getColor());
console.log(lavadoraDefault.getConsumoEnergetico());

let tv1: Television = new Television("j", "negro", 55, true)
let tv2: Television = new Television("F", "negro", 5, true)
let tv3: Television = new Television("F", "negro", 60, false)

console.log(tv1.precioFinal());
console.log(tv2.precioFinal());
console.log(tv3.precioFinal());

let electrodo: Electrodomestico = new Electrodomestico("A","blanco")
let lavadoraD: Lavadora = new Lavadora ("D", "blanco", 10)
let lavadoraB: Lavadora = new Lavadora ("B", "verde", 37)
let tvPlana: Television = new Television ("A", "negro", 65, true)
let tvOld: Television = new Television ("F", "gris", 20, false)

console.log("Array de Electrodomesticos");

let arrayElec: Electrodomestico[] = [lavadora1, lavadoraDefault, tv1, tv2, tv3, electrodo, lavadoraD, lavadoraB, tvPlana, tvOld]

for (let i=0; i<arrayElec.length; i++){
    console.log(arrayElec[i].precioFinal());
}

console.log(lavadora1 instanceof Television);

//Mostrar precio diferenciando por electrodomestico/lavadora/television
let precioElec: number = 0
let precioLava: number = 0
let precioTele: number = 0

for (let i=0; i<arrayElec.length; i++){
    if (arrayElec[i] instanceof Lavadora){
        precioLava += arrayElec[i].precioFinal()
    }
    else if (arrayElec[i] instanceof Television){
        precioTele += arrayElec[i].precioFinal()
    }
    else{
        precioElec += arrayElec[i].precioFinal()
    }
}
let precioTotal: number = precioElec+precioLava+precioTele
console.log(`Precio Televisiones: ${precioTele}\nPrecio Lavadoras: ${precioLava}\nPrecio Electrodomesticos: ${precioElec}\nPrecio total tienda: ${precioTotal}`);


