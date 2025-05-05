export class Persona{
    public nombre:string;
    public apellido:string;
    private documento:number;
    private nacimiento:Date=new Date;
    public nickname:string;
    constructor(nom:string, apel:string, doc:number,fnac:Date,nick:string){
       this.nombre=nom;
       this.apellido=apel;
       this.documento=doc;
       this.nacimiento=fnac;
       this.nickname=nick;
    }
    public cumplirAños(){   ///Se trata solo de un metodo para ser usado cuando la persona cumpla años, sin condicion!
       console.warn("Feliz Cumpleaños!!!, que pases un excelente día!");
    }
 
    public esMayor(){     //Se trata de un metodo que determina cuantos años tiene la persona  si es mayor de edad o no!. 
      let edad:number=((((((Number(new Date())-Number(this.nacimiento))/1000)/60)/60)/24)/365);
      edad=Math.floor(edad);
      if (edad>=18){
           console.log(`SI, usted ya es mayor de edad, tiene ${edad} años!`);
         } else{
                console.log(`CUIDADO!!, usted es menor de edad, tiene ${edad} años!`);
               }
    }
 }