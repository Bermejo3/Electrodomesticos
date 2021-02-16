import { Electrodomestico } from "./electrodomestico";

export class Lavadora extends Electrodomestico{
    //Atributos
    private carga: number

    //Constructor
    constructor(consumo: string, color: string, carga: number) {
        super (consumo, color);
        this.carga = carga
        this.precioBase = this.precioFinal()
    }

    getCarga():number{
        return this.carga
    }

    setCarga(carga:number){
        this.carga = carga
    }

    precioFinal():number{
        let finalPrice:number = super.precioFinal()
        
        if (this.getCarga() >= 30){
            finalPrice += 50
        }
        return finalPrice
    }
}