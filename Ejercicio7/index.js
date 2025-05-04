"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dado_1 = require("./Dado");
var dados = new Dado_1.Dado;
for (var i = 0; i < 50; i = i + 1) {
    dados.lanzarDado();
}
