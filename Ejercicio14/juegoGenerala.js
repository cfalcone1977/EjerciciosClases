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
        var pausa = "";
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
        pausa = readlineSync.question("Presiona Enter TERMINAR!.");
    };
    return Generala;
}());
exports.Generala = Generala;
