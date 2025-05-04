"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dado = void 0;
var Dado = /** @class */ (function () {
    function Dado() {
        this.VDA = 0;
        this.VDA = (Math.floor(Math.random() * 6)) + 1;
    }
    Dado.prototype.lanzarDado = function () {
        this.VDA = (Math.floor(Math.random() * 6)) + 1;
        this.ValorActualDado();
    };
    Dado.prototype.ValorActualDado = function () {
        console.log("El dado fue lanzado, su valor es: ".concat(this.VDA));
    };
    return Dado;
}());
exports.Dado = Dado;
