export class Calculadora{
 numero1:number;
 numero2:number;   

 constructor (n1:number,n2:number){
    this.numero1=n1;
    this.numero2=n2;
 }
 
 sumar():number{
  const resultado:number=this.numero1+this.numero2;
  return resultado;
 }
 restar():number{
    const resultado:number=this.numero1-this.numero2;
    return resultado;
   }
 multiplicar():number{
   const resultado:number=this.numero1*this.numero2;
   if (this.numero1===0 || this.numero2===0){
                         console.warn("CUALQUIER NUMERO POR 0(cero) es 0(cero)!!!");
                         return resultado;
                        } else {
                          return resultado;
                        }
 }
 dividir():number{
   const resultado:number=this.numero1/this.numero2;
   if (this.numero2!=0 ){
   return resultado;
              } else {
                   console.warn("NO ES POSIBLE DIVIDIR POR 0(cero)!!!");
                   return resultado;
                     }
 }

 mostrarResultado(resultado:number,operacion:string){
    operacion=operacion.toUpperCase();
    if (this.numero1===0 && this.numero2===0 && operacion==="DIVIDIR") {
                                                console.log("---------------------------------------------");
                                                console.log(`NO ES POSIBLE REALIZAR ESTA OPERACION`);
                                                console.log("---------------------------------------------");  
                                                   } else {
                                                        console.log("---------------------------------------------");
                                                        console.log(`Numero1: ${this.numero1} | Numero2: ${this.numero2}`);
                                                        console.log(`Resultado ${operacion}: ${resultado}`);
                                                        console.log("---------------------------------------------");    
                                                          }
 }
}
                    


