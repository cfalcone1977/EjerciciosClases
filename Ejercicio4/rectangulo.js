"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangulo = void 0;
var Rectangulo = /** @class */ (function () {
    function Rectangulo(ancho, altura) {
        this.ancho = ancho;
        this.altura = altura;
    }
    Rectangulo.prototype.calcular_area = function () {
        console.log("Calculando Area rectangulo de ".concat(this.ancho, " x ").concat(this.altura));
        return (this.ancho * this.altura);
    };
    Rectangulo.prototype.calcular_perimetro = function () {
        console.log("Calculando Perimetro rectangulo de ".concat(this.ancho, " x ").concat(this.altura));
        return (2 * (this.ancho + this.altura));
    };
    Rectangulo.prototype.mostrarCalculoArea = function () {
        console.log("El Area es ".concat(this.calcular_area()));
    };
    Rectangulo.prototype.mostrarCalculoPerimetro = function () {
        console.log("El per\u00EDmetro es ".concat(this.calcular_perimetro()));
    };
    return Rectangulo;
}());
exports.Rectangulo = Rectangulo;
