"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nom, apel, doc, fnac, nick) {
        this.nacimiento = new Date;
        this.nombre = nom;
        this.apellido = apel;
        this.documento = doc;
        this.nacimiento = fnac;
        this.nickname = nick;
    }
    Persona.prototype.cumplirAños = function () {
        console.warn("Feliz Cumpleaños!!!, que pases un excelente día!");
    };
    Persona.prototype.esMayor = function () {
        var edad = ((((((Number(new Date()) - Number(this.nacimiento)) / 1000) / 60) / 60) / 24) / 365);
        edad = Math.floor(edad);
        if (edad >= 18) {
            console.log("SI, usted ya es mayor de edad, tiene ".concat(edad, " a\u00F1os!"));
        }
        else {
            console.log("CUIDADO!!, usted es menor de edad, tiene ".concat(edad, " a\u00F1os!"));
        }
    };
    return Persona;
}());
exports.Persona = Persona;
