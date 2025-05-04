"use strict";
//idea general, existe DECODIFICADOR como objeto que pertenece a una clase,
//existe TELEVISOR que que pertenece a una clase extendida de DECODIFICADOR.
//La idea es poder utilizar un decodificador desde el televisor.
//tener en cuenta que el decodificador debe estar encendido y solo se ACTIVA en un canal determinado. 
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
exports.Televisor = void 0;
var Decodificador_1 = require("./Decodificador");
var Televisor = /** @class */ (function (_super) {
    __extends(Televisor, _super);
    function Televisor(brand) {
        var _this = _super.call(this) || this;
        _this.volume = 0;
        _this.channel = 1;
        _this.isOn = false;
        _this.isMuted = false; // Si el volumen llega a 0 y damos al boton de bajar volumen
        _this.brand = brand;
        return _this;
    }
    Televisor.prototype.switchPower = function () {
        this.isOn = !this.isOn;
    };
    Televisor.prototype.muteOnOff = function () {
        this.isMuted = !this.isMuted;
    };
    Televisor.prototype.getTime = function () {
        var fullDate = new Date();
        return "".concat(fullDate.getHours(), ":").concat(fullDate.getMinutes());
    };
    Televisor.prototype.info = function () {
        if (this.isOn === false) {
            return;
        }
        else {
            console.log("\n                Channel: ".concat(this.channel, ";\n                Volume: ").concat(this.volume, ";\n                Hour: ").concat(this.getTime(), ";\n                Mute: ").concat(this.isMuted, ";\n                -----------\n"));
        }
    };
    Televisor.prototype.channelUp = function () {
        if (this.channel === 99) {
            this.channel = 1;
        }
        else {
            this.channel += 1;
        }
    };
    Televisor.prototype.channelDown = function () {
        if (this.isOn) {
            if (this.channel === 1) {
                this.channel = 99;
            }
            else {
                this.channel -= 1;
            }
        }
    };
    Televisor.prototype.selectChannel = function (channelNumber) {
        if (this.isOn) {
            if (channelNumber > 0 && channelNumber <= 99) {
                this.channel = channelNumber;
            }
        }
    };
    Televisor.prototype.volumeUp = function () {
        if (this.isOn) {
            if (this.isMuted) {
                this.isMuted = false;
            }
            else {
                if (this.volume < 100) {
                    this.volume = this.volume + 1;
                }
            }
        }
    };
    Televisor.prototype.volumeDown = function () {
        if (this.isOn) {
            if (this.isMuted) {
                this.isMuted = false;
            }
            else {
                if (this.volume > 0) {
                    this.volume = this.volume - 1;
                }
            }
        }
    };
    Televisor.prototype.consultaDeco = function () {
        this.infoDecodificador(this.channel);
    };
    return Televisor;
}(Decodificador_1.Decodificador));
exports.Televisor = Televisor;
