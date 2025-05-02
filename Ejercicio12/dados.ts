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
    console.log("------------------------------------"); 
    for (let i = 0; i <cantDados; i=i+1) {
        this.arregloDados[i]=this.lanzarDado();
        console.log(`DADO${i+1} = ${this.arregloDados[i]}`);    
    }
    console.log("------------------------------------"); 
  }

}


/*  VERSION SOLO IMPRIMIBLE EN PANTALLA
class Dado{
    VDA:number=0;
    constructor(){
        this.VDA=(Math.floor(Math.random()*6))+1;
    }
    lanzarDado(){
        this.VDA=(Math.floor(Math.random()*6))+1;
        this.ValorActualDado();
    }
    ValorActualDado(){
        console.log(`El dado fue lanzado, su valor es: ${this.VDA}`);
    }
}

class Cubilete extends Dado{
  lanzarCubilete(cantDados:number){
   console.log("------------------------------------"); 
    for (let i = 0; i <cantDados; i=i+1) {
        console.log(`DADO${i+1}`);
        this.lanzarDado();        
    }
   console.log("------------------------------------");
  }
}*/