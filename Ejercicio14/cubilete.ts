class Dado{
    VDA:number=0;
    constructor(){
        this.VDA=(Math.floor(Math.random()*6))+1;
    }
    lanzarDado():number{
        this.VDA=(Math.floor(Math.random()*6))+1;
        return (this.VDA);
    }
}

export class Cubilete extends Dado{

  arregloDados: number[];

  constructor (dados:number[]){
        super();
        this.arregloDados=dados;

  }
  lanzarCubilete(cantDados:number){
    //let puntos:number=0;
    console.log("------------------------------------"); 
    for (let i = 0; i <cantDados; i=i+1) {
        this.arregloDados[i]=this.lanzarDado();
        console.log(`DADO${i+1} = ${this.arregloDados[i]}`);    
        //puntos=puntos+this.arregloDados[i];
    }
    console.log("------------------------------------"); 
    //return puntos;
  }

}
