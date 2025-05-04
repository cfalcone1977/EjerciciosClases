"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Televisor = void 0;
var Televisor = /** @class */ (function () {
    function Televisor(brand) {
        this.volume = 0;
        this.channel = 1;
        this.isOn = false;
        this.isMuted = false; // Si el volumen llega a 0 y damos al boton de bajar volumen
        this.brand = brand;
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
    return Televisor;
}());
exports.Televisor = Televisor;
