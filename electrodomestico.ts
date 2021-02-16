// export enum Consumo {A = "A", B = "B", C = "C", D="D",E="E",F="F"}
// export enum Colores {blanco = "blanco", negro = "negro", rojo = "rojo", azul = "azul", gris = "gris"}

export class Electrodomestico{
    //Atributos
    protected precioBase: number;
    protected color: string;
    protected consumoEnergetico: string;
    protected peso: number

    //Constructor
    constructor (consumo: string, color: string){
        this.color = this.comprobarColor(color)
        this.consumoEnergetico = this.comprobarConsumoEnergetico(consumo)
        this.peso = 5
        this.precioBase = this.precioFinal()

    }

    //Metodos Getter y Setter
    public getPrecioBase(): number{
        return this.precioBase
    }

    public getColor(): string{
        return this.color
    }

    public getConsumoEnergetico():string{
        return this.consumoEnergetico
    }

    public getPeso():number{
        return this.peso
    }

    public setPrecioBase(precioBase: number){
        this.precioBase = precioBase
    }

    public setColor(color:string){
        this.color = color
    }

    public setConsumo(consumoEnergetico: string){
        this.consumoEnergetico = consumoEnergetico
    }

    public setPeso(peso:number){
        this.peso = peso
    }

    //Metodos Públicos
    public precioFinal(): number{
        let price: number = 100
        let z  = this.consumoEnergetico;
        
        switch (this.consumoEnergetico){
            case "A":
                price += 100
                break;
            case "B":
                price += 80
                break;
            case "C":
                price += 60
                break
            case "D":
                price += 50
                break;
            case "E": 
                price += 30
                break;
            case "F":
                price += 10
                break;
        }

        if (this.peso < 20){
            price += 10
        }
        else if (this.peso < 50){
            price += 50
        }
        else if (this.peso < 80){
            price += 80
        }
        else{
            price += 100
        }

        return price
    }



    //Metodos Privados
    private comprobarConsumoEnergetico(letra: string): string{
        let letras: string[] = ["A","B","C","D","E","F"]
        
        if (letras.includes(letra.toUpperCase())){
            return letra
        }
        else{
            return "F"
        }
    }

    private comprobarColor(color: string): string{
        let colores: string[] = ["blanco", "negro", "rojo", "azul", "gris"]

        if (colores.includes(color.toLowerCase())){
            return color
        }
        else {
            return "blanco"
        }
    }
}