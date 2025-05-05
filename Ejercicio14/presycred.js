"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.presentacion = presentacion;
exports.creditos = creditos;
var readlineSync = require("readline-sync");
function presentacion(jugador1, jugador2) {
    var pausa = "";
    console.clear();
    console.log("");
    console.log("");
    console.log("");
    console.log("\x1b[37m     ███████████  █████████  ██      ██  █████████  ██████████  ████████  ██         ████████\x1b[0m");
    console.log("\x1b[37m     ██           ██         ███     ██  ██         ██      ██  ██    ██  ██         ██    ██\x1b[0m");
    console.log("\x1b[37m     ██           ██         ██ ██   ██  ██         ██      ██  ██    ██  ██         ██    ██\x1b[0m");
    console.log("\x1b[37m     ██   ██████  █████      ██  ██  ██  █████      ██████████  ████████  ██         ████████\x1b[0m");
    console.log("\x1b[37m     ██       ██  ██         ██   ██ ██  ██         ██  ██      ██    ██  ██         ██    ██\x1b[0m");
    console.log("\x1b[37m     ██       ██  ██         ██    ████  ██         ██    ██    ██    ██  ██         ██    ██\x1b[0m");
    console.log("\x1b[37m     ███████████  █████████  ██      ██  █████████  ██      ██  ██    ██  █████████  ██    ██\x1b[0m");
    console.log("             ");
    console.log("            ");
    console.log("           ");
    console.warn("           Presiona Enter para que ".concat(jugador1, " y ").concat(jugador2, " comiencen..."));
    pausa = readlineSync.question("");
}
function creditos() {
    var pausa = "";
    console.clear();
    console.log("");
    console.log("");
    console.log("");
    console.log("                      Generala v0.01");
    console.log("                         CREDITOS:");
    console.warn("               Natalia, Jorge, Marcelo y Juan  ");
    console.log("");
    console.log("");
    console.log("            Gracias por utilizar Generala v0.01");
    console.log("                Creada por: Cristian Falcone");
    pausa = readlineSync.question("");
}
