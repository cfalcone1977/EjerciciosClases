"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persona_1 = require("./persona");
var juegoGenerala_1 = require("./juegoGenerala");
var jug1 = new persona_1.Persona("Cristian", "Falcone", 26134695, new Date(1977, 10, 7), "Cypher");
var jug2 = new persona_1.Persona("Natalia", "Tutora", 33333333, new Date(2000, 10, 7), "Naty");
var tirada1 = new juegoGenerala_1.Generala([0, 0, 0, 0, 0]);
tirada1.multiplayer(4, jug1, jug2);
