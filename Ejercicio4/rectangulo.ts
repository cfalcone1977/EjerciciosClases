export class Rectangulo {
    public ancho:number;
    public altura:number; 
    public constructor (ancho: number, altura : number){
        this.ancho=ancho;
        this.altura=altura;
    }

    public calcular_area(){
      console.log(`Calculando Area rectangulo de ${this.ancho} x ${this.altura}`);  
      return (this.ancho*this.altura);
    }

    public calcular_perimetro() {
      console.log(`Calculando Perimetro rectangulo de ${this.ancho} x ${this.altura}`);   
      return (2*(this.ancho+this.altura));
    }

    public mostrarCalculoArea(){
        console.log(`El Area es ${this.calcular_area()}`);
    }

    public mostrarCalculoPerimetro(){
        console.log(`El perímetro es ${this.calcular_perimetro()}`);
    }
}