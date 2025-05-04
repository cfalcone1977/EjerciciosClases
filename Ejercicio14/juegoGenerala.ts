import * as readlineSync from 'readline-sync';
import { Persona } from "./persona";
import { Cubilete } from "./cubilete";

export class Generala extends Cubilete{
  dados:number[];
  
  constructor(dados:number[]){
      super(dados);
      this.dados=dados;
  }

  ordenarDados(dadosD:number[]):number[]{
     let aux:number=0;
     for (let i = 0; i < dadosD.length; i=i+1) {
        for (let i2 = 0; i2 < dadosD.length; i2=i2+1) {
              if (dadosD[i]<dadosD[i2]){
                                     aux=dadosD[i2];
                                     dadosD[i2]=dadosD[i];
                                     dadosD[i]=aux;    
                                       }
            
        }        
     }
     return dadosD;
  }


  puntosObtenidos(dados:number[]):number{
    let dO:number[]=this.ordenarDados(dados);
    let puntos:number=0
    if (((dO[0]<dO[1]) && (dO[1]===dO[0]+1)) && ((dO[1]<dO[2]) && (dO[2]===((dO[1])+1))) && ((dO[2]<dO[3])&&(dO[3]===dO[2]+1)) && ((dO[3]<dO[4])&&(dO[4]===dO[3]+1))){
        console.warn("  ESCALERA");
        return 20;
    } 
    if (((dO[0]===dO[1]) && (dO[1]===dO[2]) && (dO[2]!=dO[3]) && (dO[3]===dO[4])) || ((dO[0]===dO[1]) && (dO[1]!=dO[2]) && (dO[2]===dO[3]) && (dO[3]===dO[4]))){
        console.warn("  FULL");
        return 30;        
    }  
    if (((dO[0]===dO[1]) && (dO[1]===dO[2]) && (dO[2]===dO[3]) && (dO[3]!=dO[4]))  || ((dO[0]!=dO[1]) && (dO[1]===dO[2]) && (dO[2]===dO[3]) && (dO[3]===dO[4]))){
        console.warn("  POKER");
        return 40;        
    }
    if (((dO[0]===dO[1]) && (dO[1]===dO[2]) && (dO[2]===dO[3]) && (dO[3]===dO[4]))){
        console.warn("  GENERALA");
        return 50;        
    }
    return 0;
    }

  jugarLanzarDados(cantidadTiros:number,jugador:Persona):number{
    let puntaje:number=0;
    for (let tiradas = 1; tiradas <= cantidadTiros; tiradas=tiradas+1) {
        this.lanzarCubilete(5);
        puntaje=puntaje+this.puntosObtenidos(this.dados);
    }
    console.log("----------------PUNTOS--------------------");
    console.warn(` Puntaje obtenido por ${jugador.nickname}: ${puntaje}`);
    console.log("------------------------------------------");   
    return puntaje;
  }
  mostrarResultados(J1:Persona,J2:Persona,P1:number,P2:number,J3?:Persona,J4?:Persona,P3?:number,P4?:number){
     let pausa:string="";
     console.log("╔══════════════════════════════════════════════════════════╗");
     console.log("║                RESULTADO JUEGO GENERALA                  ║");
     console.log("║                                                          ║");   
     console.log("║     Puntaje:                                             ║");  
     console.log(`║          ${J1.nickname.padStart(10)}: ${P1.toLocaleString().padStart(3)}                                 ║`);
     console.log(`║          ${J2.nickname.padStart(10)}: ${P2.toLocaleString().padStart(3)}                                 ║`);
     if (J3){
         console.log(`║          ${J3.nickname.padStart(10)}: ${P3?.toLocaleString().padStart(3)}                                 ║`); 
            }
     if (J4){
         console.log(`║          ${J4.nickname.padStart(10)}: ${P4?.toLocaleString().padStart(3)}                                 ║`); 
            } 
     console.log("║                                                          ║"); 
     if (P1>P2){
               console.log(`║     EL GANADOR ES: ${J1.nickname.toUpperCase().padStart(10)}                            ║`);   
               }
     if (P1<P2){
                console.log(`║     EL GANADOR ES: ${J2.nickname.toUpperCase().padStart(10)}                            ║`);   
                }
     if (P1===P2){
                console.log(`║     EXISTE UN EMPATE ENTRE: ${J1.nickname.toUpperCase().padStart(10)} y ${J2.nickname.toUpperCase().padStart(10)}      ║`);                      
               }          
     console.log("╚══════════════════════════════════════════════════════════╝");
if (P1===P2){
        pausa=readlineSync.question("Presiona Enter para DESEMPATATAR...");  
       }                       
  }

  multiplayer(CT:number,J1:Persona,J2:Persona,J3?:Persona,J4?:Persona){
    let empate:boolean=true;
    while (empate){
     let P1,P2,P3,P4:number=0;
     P1=this.jugarLanzarDados(CT,J1);
     P2=this.jugarLanzarDados(CT,J2);
     if (J3){
           P3=this.jugarLanzarDados(CT,J3);   
            }
     if (J4){
           P4=this.jugarLanzarDados(CT,J4);
            } 
    this.mostrarResultados(J1,J2,P1,P2);
    if (P1===P2){
                 empate=true;
                } else empate=false;
  }
}
}


//const jug1=new Persona("Cristian","Falcone",26134695,new Date(1977,10,7),"Cypher");
//const jug2=new Persona("Natalia","Tutora",33333333,new Date(2000,10,7),"Naty");
//const tirada1=new Generala(jug1,[0,0,0,0,0]);

//tirada1.jugarLanzarDados(4,jug1);
//tirada1.jugarLanzarDados(4,jug2);
//tirada1.multiplayer(4,jug1,jug2);






/// PRIMERA PRUEBA PARA CONTROLAR PUNTOS
/*puntosObtenidos(dados:number[]){
     let contador:number[];
         contador=[1,1,1,1,1];
         let InCantElem:number=0;
         let acu:number=0;
     for (let i = 0; i < dados.length; i=i+1) {
         for (let i2 = 0; i2 < dados.length; i2=i2+1) {
            if (i!=i2){
                      if (dados[i]===dados[i2]){
                        dados.splice(i2,1);
                        i2=i2-1;
                        contador[i]=contador[i]+1;
                      }
            
         }
            
         }
     }
   for (let i = 0; i < contador.length; i=i+1) {
        acu=acu+contador[i];
        if (acu<=5){
                   InCantElem=InCantElem+1;
                   }
    
   }
   contador.splice(InCantElem,(5-InCantElem));
   console.log(contador);
  }*/

/* NO HACE FALTA jugador 
export class Generala extends Cubilete{
  //jugador:Persona;
  dados:number[];
  
  constructor(dados:number[]){
      super(dados);
      //this.jugador=jugador;
      this.dados=dados;
  }*/