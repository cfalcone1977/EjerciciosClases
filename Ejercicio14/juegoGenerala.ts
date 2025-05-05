import * as readlineSync from 'readline-sync';
import { Persona } from './persona';
import { Cubilete, Dado } from "./cubilete";

export class Generala{
  private cubilete:Cubilete;
  
  constructor(cubilete1:Cubilete){
      this.cubilete=cubilete1;
  }

  private ordenarDados(dadosD:Dado[]):Dado[]{
     let aux:number=0;
     for (let i = 0; i < dadosD.length; i=i+1) {
        for (let i2 = 0; i2 < dadosD.length; i2=i2+1) {
              if (dadosD[i].VDA<dadosD[i2].VDA){
                                     aux=dadosD[i2].VDA;
                                     dadosD[i2].VDA=dadosD[i].VDA;
                                     dadosD[i].VDA=aux;    
                                       }
            
        }        
     }
     return dadosD;
  }


  private puntosObtenidos(dados:Dado[]):number{
    let dO:Dado[]=this.ordenarDados(dados);
    let puntos:number=0
    if (((dO[0].VDA<dO[1].VDA) && (dO[1].VDA===dO[0].VDA+1)) && ((dO[1].VDA<dO[2].VDA) && (dO[2].VDA===((dO[1].VDA)+1))) && ((dO[2].VDA<dO[3].VDA)&&(dO[3].VDA===dO[2].VDA+1)) && ((dO[3].VDA<dO[4].VDA)&&(dO[4].VDA===dO[3].VDA+1))){
        console.warn("  ESCALERA");
        return 20;
    } 
    if (((dO[0].VDA===dO[1].VDA) && (dO[1].VDA===dO[2].VDA) && (dO[2].VDA!=dO[3].VDA) && (dO[3].VDA===dO[4].VDA)) || ((dO[0].VDA===dO[1].VDA) && (dO[1].VDA!=dO[2].VDA) && (dO[2].VDA===dO[3].VDA) && (dO[3].VDA===dO[4].VDA))){
        console.warn("  FULL");
        return 30;        
    }  
    if (((dO[0].VDA===dO[1].VDA) && (dO[1].VDA===dO[2].VDA) && (dO[2].VDA===dO[3].VDA) && (dO[3].VDA!=dO[4].VDA))  || ((dO[0].VDA!=dO[1].VDA) && (dO[1].VDA===dO[2].VDA) && (dO[2].VDA===dO[3].VDA) && (dO[3].VDA===dO[4].VDA))){
        console.warn("  POKER");
        return 40;        
    }
    if (((dO[0].VDA===dO[1].VDA) && (dO[1].VDA===dO[2].VDA) && (dO[2].VDA===dO[3].VDA) && (dO[3].VDA===dO[4].VDA))){
        console.warn("  GENERALA");
        return 50;        
    }
    return 0;
    }

  private jugarLanzarDados(cantidadTiros:number,jugador:Persona):number{
    let puntaje:number=0;
    for (let tiradas = 1; tiradas <= cantidadTiros; tiradas=tiradas+1) {
        this.cubilete.lanzarCubilete(5);
        puntaje=puntaje+this.puntosObtenidos(this.cubilete.arregloDados);
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

  public multiplayer(CT:number,J1:Persona,J2:Persona,J3?:Persona,J4?:Persona){
    let empate:boolean=true;
    let pausa:string="";
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
 pausa=readlineSync.question("Presiona Enter TERMINAR!.");   
}
}