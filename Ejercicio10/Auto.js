"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(arrayAutos) {
        this.vehiculosRegistrados = arrayAutos;
    }
    RegistroAutomotor.prototype.agregarVehiculo = function (Nvehiculo) {
        this.vehiculosRegistrados.push(Nvehiculo);
    };
    RegistroAutomotor.prototype.buscarVehiculoPatente = function (patente) {
        for (var indice = 0; indice < this.vehiculosRegistrados.length; indice = indice + 1) {
            if (this.vehiculosRegistrados[indice].patente === patente) {
                console.warn("------------VEHICULO ENCONTRADO-------------");
                console.table(this.vehiculosRegistrados[indice]);
                console.warn("--------------------------------------------");
                return indice;
            }
        }
        return -1;
    };
    RegistroAutomotor.prototype.eliminarVehiculo = function (patente) {
        var indiceEliminar = this.buscarVehiculoPatente(patente);
        if (indiceEliminar != -1) {
            this.vehiculosRegistrados.splice(indiceEliminar, 1);
            console.warn("----VEHICULO ELIMINADO SATISFACTORIAMENTE------");
        }
        else {
            console.warn("------------VEHICULO NO ENCONTRADO-------------");
            console.warn("        PATENTE NO EXISTE EN REGISTRO");
            console.warn("-----------------------------------------------");
        }
    };
    RegistroAutomotor.prototype.modificarVehiculo = function (patente, vehiculo) {
        var indice = this.buscarVehiculoPatente(patente);
        if (indice != -1) {
            console.warn("--------- El VEHICULO ENCONTRADO -------------");
            console.table(this.vehiculosRegistrados[indice]);
            console.warn("----------------------------------------------");
            this.vehiculosRegistrados.splice(indice, 1, vehiculo);
            console.warn("----  SE HA REEMPLAZADO POR EL VEHICULO  -----");
            console.table(this.vehiculosRegistrados[indice]);
            console.warn("----------------------------------------------");
        }
    };
    RegistroAutomotor.prototype.mostrarListadoVehiculos = function () {
        this.vehiculosRegistrados.forEach(function (auto) {
            console.table(auto);
        });
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
