"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libro = void 0;
var readlineSync = require("readline-sync");
var Libro = /** @class */ (function () {
    function Libro(titulo, autor, paginas, isbn) {
        this.Titulo = titulo;
        this.Autor = autor;
        this.NroPaginas = paginas;
        this.ISBN = isbn;
    }
    Libro.prototype.cargarLibro = function () {
        console.warn("-----------------INGRESO LIBRO------------------");
        this.Titulo = readlineSync.question("Ingrese TITULO:      ");
        this.Autor = readlineSync.question("Ingrese AUTOR:       ");
        this.NroPaginas = readlineSync.questionInt("Ingrese Nro PAGINAS: ");
        this.ISBN = readlineSync.question("Ingrese ISBN:        ");
    };
    Libro.prototype.informarDatosLibro = function () {
        console.warn("-------------DATOS LIBRO---------------");
        console.log("  Titulo: ".concat(this.Titulo));
        console.log("   Autor: ".concat(this.Autor));
        console.log(" Paginas: ".concat(this.NroPaginas));
        console.log("    ISBN: ".concat(this.ISBN));
        console.warn("---------------------------------------");
    };
    return Libro;
}());
exports.Libro = Libro;
