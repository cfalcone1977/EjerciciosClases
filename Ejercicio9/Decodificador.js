"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Decodificador = void 0;
var Decodificador = /** @class */ (function () {
    function Decodificador() {
        this.canalOperativo = 3;
        this.onOffDECO = false;
    }
    Decodificador.prototype.PowerOnOffDeco = function () {
        this.onOffDECO = !this.onOffDECO;
    };
    Decodificador.prototype.infoDecodificador = function (canal) {
        if (this.onOffDECO) {
            console.log("------DECODIFICADOR-------");
            if (canal === this.canalOperativo) {
                console.warn("Canal en uso ".concat(this.canalOperativo));
                console.warn("        ACTIVADO");
            }
            else {
                console.warn("       DESACTIVADO");
                console.log("Esta en canal ".concat(canal));
                console.log("Para activar use canal: ".concat(this.canalOperativo));
            }
            console.log("---------------------------");
        }
    };
    return Decodificador;
}());
exports.Decodificador = Decodificador;
