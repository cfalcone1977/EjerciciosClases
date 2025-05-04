export class Dado{
    VDA:number=0;
    constructor(){
        this.VDA=(Math.floor(Math.random()*6))+1;
    }
    lanzarDado():number{
        this.VDA=(Math.floor(Math.random()*6))+1;
        return (this.VDA);
    }
}

export class Cubilete{

  arregloDados: Dado[];

  constructor (dados:Dado[]){
        this.arregloDados=dados;

  }
  lanzarCubilete(cantDados:number){
    //let puntos:number=0;
    console.log("------------------------------------"); 
    for (let i = 0; i <cantDados; i=i+1) {
        this.arregloDados[i].VDA=this.arregloDados[i].lanzarDado();
        console.log(`DADO${i+1} = ${this.arregloDados[i].VDA}`);    
        //puntos=puntos+this.arregloDados[i];
    }
    console.log("------------------------------------"); 
    //return puntos;
  }

}