"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camioneta = exports.Traccion = void 0;
var Traccion = /** @class */ (function () {
    function Traccion(onOff, velocidad, modocaja, freno, simple, alta, baja) {
        this.onOff = false;
        this.velocidad = 0;
        this.modocaja = "P";
        this.freno = false;
        this.simple = true;
        this.alta = false;
        this.baja = false;
        this.onOff = onOff;
        this.velocidad = velocidad;
        this.modocaja = modocaja;
        this.freno = freno;
        this.simple = simple;
        this.alta = alta;
        this.baja = baja;
    }
    Traccion.prototype.traccionSimple = function (onOff, velocidad, simple, alta, baja, modocaja, freno) {
        if ((onOff) && (this.velocidad <= 40) && (alta) && (!baja)) {
            this.simple = true;
            this.alta = false;
            return this.simple;
        }
        return false;
    };
    Traccion.prototype.activarDobleAlta = function (onOff, velocidad, simple, baja, modocaja, freno) {
        console.log(onOff);
        console.log(velocidad);
        console.log(simple);
        console.log(baja);
        if ((onOff) && (velocidad <= 40) && (simple) && (!baja)) {
            this.alta = true;
            return this.alta;
        }
        if ((baja) && (velocidad === 0) && (freno)) {
            this.baja = false;
            this.alta = true;
            return this.alta;
        }
        return false;
    };
    Traccion.prototype.activarDobleBaja = function (onOff, velocidad, simple, alta, baja, modocaja, freno) {
        if ((velocidad === 0) && ((modocaja === "N") || (modocaja === "P")) && ((alta) || (simple)) && (freno)) {
            this.alta = false;
            this.baja = true;
            return baja;
        }
        return false;
    };
    return Traccion;
}());
exports.Traccion = Traccion;
var Camioneta = /** @class */ (function () {
    function Camioneta(fabricante, tipoMotor, modeloCaja, AT, dobleTraccion) {
        this.velocidadMaxima = 180;
        this.modoCaja = "P";
        this.freno = false;
        this.velocidad = 0;
        this.powerOnOff = false;
        this.traccionSimple = true;
        this.activar4x4H = false;
        this.activar4x4B = false;
        this.marca = fabricante;
        this.motor = tipoMotor;
        this.caja = modeloCaja;
        this.cajaAT = AT;
        this.dobleTraccion = dobleTraccion; //new Traccion//(powerOnOff,velocidad,modocaja,freno,simple,alta,baja)   
    }
    Camioneta.prototype.activarDobletraccionAlta = function () {
        this.activar4x4H = this.dobleTraccion.activarDobleAlta(this.powerOnOff, this.velocidad, this.traccionSimple, this.activar4x4B, this.modoCaja, this.freno);
        if (this.activar4x4H) {
            this.traccionSimple = false;
        }
    };
    Camioneta.prototype.startStopBoton = function () {
        if ((this.velocidad === 0) && (this.modoCaja === "P") && (this.freno)) {
            this.powerOnOff = !this.powerOnOff;
        }
    };
    Camioneta.prototype.PresionoFreno = function () {
        this.freno = true;
    };
    Camioneta.prototype.SueltoFreno = function () {
        this.freno = false;
    };
    Camioneta.prototype.infoEstado = function () {
        console.log("----------------------------");
        console.log("---".concat(this.marca, " ").concat(this.motor, " ").concat(this.caja, "---"));
        console.log("----------------------------");
        console.log("PowerOnOff: ".concat(this.powerOnOff));
        console.log("ModoCaja:   ".concat(this.modoCaja));
        console.log("Freno:      ".concat(this.freno));
        console.log("Velocidad:  ".concat(this.velocidad));
        if (this.traccionSimple) {
            console.warn("TranccionSimple:  ".concat(this.traccionSimple));
        }
        if (this.activar4x4H) {
            console.warn("DobleAlta:  ".concat(this.activar4x4H));
        }
        console.log("----------------------------");
    };
    Camioneta.prototype.cajaUp = function () {
        if ((this.modoCaja === "P") && (this.velocidad === 0) && (this.freno)) {
            this.modoCaja = "R";
        }
        else if ((this.modoCaja === "R") && (this.velocidad === 0) && (this.freno)) {
            this.modoCaja = "N";
        }
        else if ((this.modoCaja === "N") && (this.velocidad === 0) && (this.freno)) {
            this.modoCaja = "D";
        }
    };
    Camioneta.prototype.cajaDown = function () {
        if ((this.modoCaja === "D") && (this.velocidad === 0) && (this.freno = true)) {
            this.modoCaja = "N";
        }
        else if ((this.modoCaja === "N") && (this.velocidad === 0) && (this.freno = true)) {
            this.modoCaja = "R";
        }
        else if ((this.modoCaja === "R") && (this.velocidad === 0) && (this.freno = true)) {
            this.modoCaja = "P";
        }
    };
    Camioneta.prototype.aceleraUp = function () {
        if ((this.powerOnOff) && (!this.freno) && (this.modoCaja === "D") && (this.velocidad < this.velocidadMaxima)) {
            this.velocidad = this.velocidad + 10;
        }
    };
    Camioneta.prototype.acelerarDown = function () {
        if ((this.powerOnOff) && (this.freno) && (this.modoCaja === "D") && (this.velocidad > 0)) {
            this.velocidad = this.velocidad - 10;
        }
    };
    return Camioneta;
}());
exports.Camioneta = Camioneta;
