"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cubilete = void 0;
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
var Cubilete = /** @class */ (function (_super) {
    __extends(Cubilete, _super);
    function Cubilete(dados) {
        var _this = _super.call(this) || this;
        _this.arregloDados = dados;
        return _this;
    }
    Cubilete.prototype.lanzarCubilete = function (cantDados) {
        //let puntos:number=0;
        console.log("------------------------------------");
        for (var i = 0; i < cantDados; i = i + 1) {
            this.arregloDados[i] = this.lanzarDado();
            console.log("DADO".concat(i + 1, " = ").concat(this.arregloDados[i]));
            //puntos=puntos+this.arregloDados[i];
        }
        console.log("------------------------------------");
        //return puntos;
    };
    return Cubilete;
}(Dado));
exports.Cubilete = Cubilete;
