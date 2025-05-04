"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cubilete = exports.Dado = void 0;
var Dado = /** @class */ (function () {
    function Dado() {
        this.VDA = 0;
        this.VDA = (Math.floor(Math.random() * 6)) + 1;
    }
    Dado.prototype.lanzarDado = function () {
        this.VDA = (Math.floor(Math.random() * 6)) + 1;
        return (this.VDA);
    };
    return Dado;
}());
exports.Dado = Dado;
var Cubilete = /** @class */ (function () {
    function Cubilete(dados) {
        this.arregloDados = dados;
    }
    Cubilete.prototype.lanzarCubilete = function (cantDados) {
        //let puntos:number=0;
        console.log("------------------------------------");
        for (var i = 0; i < cantDados; i = i + 1) {
            this.arregloDados[i].VDA = this.arregloDados[i].lanzarDado();
            console.log("DADO".concat(i + 1, " = ").concat(this.arregloDados[i].VDA));
            //puntos=puntos+this.arregloDados[i];
        }
        console.log("------------------------------------");
        //return puntos;
    };
    return Cubilete;
}());
exports.Cubilete = Cubilete;
