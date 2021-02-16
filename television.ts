import { Electrodomestico } from "./electrodomestico";

export class Television extends Electrodomestico{
    //Atributos
    private resolucion: number;
    private sintonizadorTDT: boolean;

    //Constructor
    constructor(consumo:string, color:string, resolucion: number = 20, sintonizadorTDT: boolean = false){
        super (consumo, color);
        this.resolucion = resolucion
        this.sintonizadorTDT = sintonizadorTDT
    }

    //Metodos Getter y Setter
    public getResolucion():number{
        return this.resolucion;
    }

    public getSintonizadorTDT(): boolean{
        return this.sintonizadorTDT;
    }

    public setResolucion(resolucion: number){
        this.resolucion = resolucion
    }

    public setSintonizadorTDT(sintonizadorTDT: boolean){
        this.sintonizadorTDT = sintonizadorTDT
    }

    //Metodo público
    public precioFinal(): number{
        let precioFinal:number = super.precioFinal()

        if (this.resolucion>40){
            precioFinal*=1.30
        }
        if (this.sintonizadorTDT == true){
            precioFinal+=50
        }

        return precioFinal
    }
}