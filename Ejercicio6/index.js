"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculadora_1 = require("./calculadora");
var Calcular = new calculadora_1.Calculadora(18, -1);
var resultado = 0;
resultado = Calcular.sumar();
Calcular.mostrarResultado(resultado, "sumar");
