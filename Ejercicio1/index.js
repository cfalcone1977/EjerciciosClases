"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Camioneta_1 = require("./Camioneta");
var sisTraccion1 = new Camioneta_1.Traccion(false, 0, "P", false, true, false, false);
var fordF100 = new Camioneta_1.Camioneta("ford", "V8", "AT100", true, sisTraccion1); //false,0,"P",false,true,false,false); //(onOff:boolean, velocidad:number, modocaja:string, freno:boolean,simple:boolean,alta:boolean,baja:boolean)
//(fabricante:string, tipoMotor:string, modeloCaja: string, AT:boolean, powerOnOff:boolean, velocidad:number,modocaja:string, freno:boolean,simple:boolean,alta:boolean,baja:boolean)
fordF100.infoEstado();
fordF100.cajaUp();
fordF100.infoEstado();
fordF100.PresionoFreno();
fordF100.cajaUp();
fordF100.infoEstado();
fordF100.cajaUp();
fordF100.infoEstado();
fordF100.cajaDown();
fordF100.cajaDown();
fordF100.infoEstado();
fordF100.startStopBoton();
fordF100.infoEstado();
fordF100.PresionoFreno();
fordF100.cajaUp();
fordF100.cajaUp();
fordF100.cajaUp();
fordF100.infoEstado();
fordF100.SueltoFreno();
for (var i = 0; i < 25; i = i + 1) {
    fordF100.aceleraUp();
}
fordF100.infoEstado();
fordF100.PresionoFreno();
for (var i = 0; i < 25; i = i + 1) {
    fordF100.acelerarDown();
}
fordF100.infoEstado();
fordF100.cajaDown();
fordF100.cajaDown();
fordF100.cajaDown();
fordF100.startStopBoton();
fordF100.infoEstado();
console.log(fordF100);
fordF100.startStopBoton();
//fordF100.activarDobletraccionAlta();
fordF100.infoEstado();
fordF100.cajaUp();
fordF100.cajaUp();
fordF100.cajaUp();
fordF100.SueltoFreno();
for (var i = 0; i < 25; i = i + 1) {
    fordF100.aceleraUp();
}
fordF100.PresionoFreno();
for (var i = 0; i < 15; i = i + 1) {
    fordF100.acelerarDown();
}
fordF100.SueltoFreno();
fordF100.activarDobletraccionAlta();
fordF100.infoEstado();
