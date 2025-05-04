"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generala = void 0;
var readlineSync = require("readline-sync");
var Generala = /** @class */ (function () {
    function Generala(cubilete1) {
        this.cubilete = cubilete1;
    }
    Generala.prototype.ordenarDados = function (dadosD) {
        var aux = 0;
        for (var i = 0; i < dadosD.length; i = i + 1) {
            for (var i2 = 0; i2 < dadosD.length; i2 = i2 + 1) {
                if (dadosD[i].VDA < dadosD[i2].VDA) {
                    aux = dadosD[i2].VDA;
                    dadosD[i2].VDA = dadosD[i].VDA;
                    dadosD[i].VDA = aux;
                }
            }
        }
        return dadosD;
    };
    Generala.prototype.puntosObtenidos = function (dados) {
        var dO = this.ordenarDados(dados);
        var puntos = 0;
        if (((dO[0].VDA < dO[1].VDA) && (dO[1].VDA === dO[0].VDA + 1)) && ((dO[1].VDA < dO[2].VDA) && (dO[2].VDA === ((dO[1].VDA) + 1))) && ((dO[2].VDA < dO[3].VDA) && (dO[3].VDA === dO[2].VDA + 1)) && ((dO[3].VDA < dO[4].VDA) && (dO[4].VDA === dO[3].VDA + 1))) {
            console.warn("  ESCALERA");
            return 20;
        }
        if (((dO[0].VDA === dO[1].VDA) && (dO[1].VDA === dO[2].VDA) && (dO[2].VDA != dO[3].VDA) && (dO[3].VDA === dO[4].VDA)) || ((dO[0].VDA === dO[1].VDA) && (dO[1].VDA != dO[2].VDA) && (dO[2].VDA === dO[3].VDA) && (dO[3].VDA === dO[4].VDA))) {
            console.warn("  FULL");
            return 30;
        }
        if (((dO[0].VDA === dO[1].VDA) && (dO[1].VDA === dO[2].VDA) && (dO[2].VDA === dO[3].VDA) && (dO[3].VDA != dO[4].VDA)) || ((dO[0].VDA != dO[1].VDA) && (dO[1].VDA === dO[2].VDA) && (dO[2].VDA === dO[3].VDA) && (dO[3].VDA === dO[4].VDA))) {
            console.warn("  POKER");
            return 40;
        }
        if (((dO[0].VDA === dO[1].VDA) && (dO[1].VDA === dO[2].VDA) && (dO[2].VDA === dO[3].VDA) && (dO[3].VDA === dO[4].VDA))) {
            console.warn("  GENERALA");
            return 50;
        }
        return 0;
    };
    Generala.prototype.jugarLanzarDados = function (cantidadTiros, jugador) {
        var puntaje = 0;
        for (var tiradas = 1; tiradas <= cantidadTiros; tiradas = tiradas + 1) {
            this.cubilete.lanzarCubilete(5);
            puntaje = puntaje + this.puntosObtenidos(this.cubilete.arregloDados);
        }
        console.log("----------------PUNTOS--------------------");
        console.warn(" Puntaje obtenido por ".concat(jugador.nickname, ": ").concat(puntaje));
        console.log("------------------------------------------");
        return puntaje;
    };
    Generala.prototype.mostrarResultados = function (J1, J2, P1, P2, J3, J4, P3, P4) {
        var pausa = "";
        console.log("╔══════════════════════════════════════════════════════════╗");
        console.log("║                RESULTADO JUEGO GENERALA                  ║");
        console.log("║                                                          ║");
        console.log("║     Puntaje:                                             ║");
        console.log("\u2551          ".concat(J1.nickname.padStart(10), ": ").concat(P1.toLocaleString().padStart(3), "                                 \u2551"));
        console.log("\u2551          ".concat(J2.nickname.padStart(10), ": ").concat(P2.toLocaleString().padStart(3), "                                 \u2551"));
        if (J3) {
            console.log("\u2551          ".concat(J3.nickname.padStart(10), ": ").concat(P3 === null || P3 === void 0 ? void 0 : P3.toLocaleString().padStart(3), "                                 \u2551"));
        }
        if (J4) {
            console.log("\u2551          ".concat(J4.nickname.padStart(10), ": ").concat(P4 === null || P4 === void 0 ? void 0 : P4.toLocaleString().padStart(3), "                                 \u2551"));
        }
        console.log("║                                                          ║");
        if (P1 > P2) {
            console.log("\u2551     EL GANADOR ES: ".concat(J1.nickname.toUpperCase().padStart(10), "                            \u2551"));
        }
        if (P1 < P2) {
            console.log("\u2551     EL GANADOR ES: ".concat(J2.nickname.toUpperCase().padStart(10), "                            \u2551"));
        }
        if (P1 === P2) {
            console.log("\u2551     EXISTE UN EMPATE ENTRE: ".concat(J1.nickname.toUpperCase().padStart(10), " y ").concat(J2.nickname.toUpperCase().padStart(10), "      \u2551"));
        }
        console.log("╚══════════════════════════════════════════════════════════╝");
        if (P1 === P2) {
            pausa = readlineSync.question("Presiona Enter para DESEMPATATAR...");
        }
    };
    Generala.prototype.multiplayer = function (CT, J1, J2, J3, J4) {
        var empate = true;
        while (empate) {
            var P1 = void 0, P2 = void 0, P3 = void 0, P4 = 0;
            P1 = this.jugarLanzarDados(CT, J1);
            P2 = this.jugarLanzarDados(CT, J2);
            if (J3) {
                P3 = this.jugarLanzarDados(CT, J3);
            }
            if (J4) {
                P4 = this.jugarLanzarDados(CT, J4);
            }
            this.mostrarResultados(J1, J2, P1, P2);
            if (P1 === P2) {
                empate = true;
            }
            else
                empate = false;
        }
    };
    return Generala;
}());
exports.Generala = Generala;
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
