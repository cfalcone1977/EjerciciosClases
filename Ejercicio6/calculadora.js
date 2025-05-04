"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
var Calculadora = /** @class */ (function () {
    function Calculadora(n1, n2) {
        this.numero1 = n1;
        this.numero2 = n2;
    }
    Calculadora.prototype.sumar = function () {
        var resultado = this.numero1 + this.numero2;
        return resultado;
    };
    Calculadora.prototype.restar = function () {
        var resultado = this.numero1 - this.numero2;
        return resultado;
    };
    Calculadora.prototype.multiplicar = function () {
        var resultado = this.numero1 * this.numero2;
        if (this.numero1 === 0 || this.numero2 === 0) {
            console.warn("CUALQUIER NUMERO POR 0(cero) es 0(cero)!!!");
            return resultado;
        }
        else {
            return resultado;
        }
    };
    Calculadora.prototype.dividir = function () {
        var resultado = this.numero1 / this.numero2;
        if (this.numero2 != 0) {
            return resultado;
        }
        else {
            console.warn("NO ES POSIBLE DIVIDIR POR 0(cero)!!!");
            return resultado;
        }
    };
    Calculadora.prototype.mostrarResultado = function (resultado, operacion) {
        operacion = operacion.toUpperCase();
        if (this.numero1 === 0 && this.numero2 === 0 && operacion === "DIVIDIR") {
            console.log("---------------------------------------------");
            console.log("NO ES POSIBLE REALIZAR ESTA OPERACION");
            console.log("---------------------------------------------");
        }
        else {
            console.log("---------------------------------------------");
            console.log("Numero1: ".concat(this.numero1, " | Numero2: ").concat(this.numero2));
            console.log("Resultado ".concat(operacion, ": ").concat(resultado));
            console.log("---------------------------------------------");
        }
    };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
