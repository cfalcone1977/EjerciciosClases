"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuentaBancaria = void 0;
var CuentaBancaria = /** @class */ (function () {
    function CuentaBancaria(NC, SALDO) {
        this.NroCuenta = NC;
        this.saldoActual = SALDO;
    }
    CuentaBancaria.prototype.incrementarSaldo = function (NC, credito) {
        this.NroCuenta = NC;
        this.saldoActual = this.saldoActual + credito;
    };
    CuentaBancaria.prototype.disminuirSaldo = function (NC, debito) {
        if (debito <= this.saldoActual) {
            this.saldoActual = this.saldoActual - debito;
        }
        else {
            console.warn("Operacion CANCELADA, el monto a debitar supera el saldo...");
        }
    };
    CuentaBancaria.prototype.mostrarSaldo = function (NC) {
        if (NC === this.NroCuenta) {
            console.log("*****************************************");
            console.log("CtaCte Nro.: ".concat(NC, " Saldo: ").concat(this.saldoActual));
            console.log("*****************************************");
        }
    };
    return CuentaBancaria;
}());
exports.CuentaBancaria = CuentaBancaria;
