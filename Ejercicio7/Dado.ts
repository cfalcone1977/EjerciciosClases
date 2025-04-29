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

const dados = new Dado;


for (let i = 0; i < 50; i=i+1) {
    dados.lanzarDado();    
}
