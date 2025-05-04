"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arregloLibros = exports.GestorLibros = exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(Autor, Titulo, Genero, Tipo, Paginas, Activo, ISBN) {
        this.autor = Autor;
        this.titulo = Titulo;
        this.genero = Genero;
        this.tipo = Tipo;
        this.paginas = Paginas;
        this.activo = Activo;
        this.isbn = ISBN;
    }
    return Libro;
}());
exports.Libro = Libro;
var GestorLibros = /** @class */ (function () {
    function GestorLibros(arregloLibro) {
        this.arrayLibros = arregloLibro;
    }
    GestorLibros.prototype.buscarLibroAutor = function (BuscarAutor) {
        console.warn("***BUSCANDO LIBRO/S por AUTOR***");
        for (var i = 0; i < this.arrayLibros.length; i = i + 1) {
            if ((this.arrayLibros[i].autor === BuscarAutor) && (this.arrayLibros[i].activo)) {
                this.consultarLibro(this.arrayLibros[i].isbn);
            }
        }
    };
    GestorLibros.prototype.buscarLibroISBN = function (Buscarisbn) {
        for (var i = 0; i < this.arrayLibros.length; i = i + 1) {
            if ((this.arrayLibros[i].isbn === Buscarisbn) && (this.arrayLibros[i].activo)) {
                return i;
            }
            else if ((this.arrayLibros[i].isbn === Buscarisbn) && (!this.arrayLibros[i].activo)) {
                console.warn("LIBRO EXISTE. pero posee BAJA LOGICA ");
                return i;
            }
        }
        return -1;
    };
    GestorLibros.prototype.insertarLibro = function (nuevoLibro) {
        var posicion;
        posicion = this.buscarLibroISBN(nuevoLibro.isbn);
        if (posicion === -1) {
            this.arrayLibros.push(nuevoLibro);
            console.warn("***LIBRO INSERTADO***");
        }
        else {
            console.warn("***LIBRO YA EXISTE. NO ES POSIBLE INSERTAR***");
        }
    };
    GestorLibros.prototype.consultarLibro = function (isbn) {
        var posicion = this.buscarLibroISBN(isbn);
        if (posicion != -1) {
            console.warn(!this.arrayLibros[posicion].activo ? "***LIBRO CON BAJA LOGICA***" : "");
            console.warn("***MOSTRANDO LIBRO***");
            console.log("********************** LIBRO ************************");
            console.log("Titulo: ".concat(this.arrayLibros[posicion].titulo));
            console.log("Autor: ".concat(this.arrayLibros[posicion].autor));
            console.log("Tipo: ".concat(this.arrayLibros[posicion].tipo));
            console.log("Paginas: ".concat(this.arrayLibros[posicion].paginas));
            this.arrayLibros[posicion].activo ? console.log("Activo: ".concat(this.arrayLibros[posicion].activo)) : console.warn("Activo: ".concat(this.arrayLibros[posicion].activo));
            console.log("Genero: ".concat(this.arrayLibros[posicion].genero));
            console.log("ISBN: ".concat(this.arrayLibros[posicion].isbn));
            console.log("*****************************************************");
        }
        else {
            console.warn("***LIBRO INEXISTENTE***");
        }
    };
    GestorLibros.prototype.modificarLibro = function (libroaModificar) {
        var posicion = this.buscarLibroISBN(libroaModificar.isbn);
        if (posicion != -1) {
            this.arrayLibros.splice(posicion, 1, libroaModificar);
            console.warn("***LIBRO MODIFICADO***");
        }
        else {
            console.warn("***LIBRO INEXISTENTE***");
        }
    };
    GestorLibros.prototype.eliminarLibro = function (isbn) {
        var posicion = this.buscarLibroISBN(isbn);
        if (posicion != -1) {
            this.arrayLibros[posicion].activo = false;
            console.warn("***LIBRO ELIMINADO(BAJA LOGICA)**");
        }
        else {
            console.warn("***LIBRO INEXISTENTE**");
        }
    };
    GestorLibros.prototype.mostrarbiblioteca = function (todos) {
        console.warn("***MOSTRANDO BIBLIOTECA***" + (todos === "T" ? "COMPLETA" : ""));
        if (todos === "T") {
            this.arrayLibros.forEach(function (elemento) {
                console.log(elemento.titulo);
                console.log(elemento.autor);
                console.log(elemento.genero);
                console.log(elemento.tipo);
                console.log(elemento.paginas);
                console.log(elemento.activo);
                console.log(elemento.isbn);
                console.log("----------------------------");
            });
        }
        else {
            this.arrayLibros.forEach(function (elemento) {
                if (elemento.activo) {
                    console.log(elemento.titulo);
                    console.log(elemento.autor);
                    console.log(elemento.genero);
                    console.log(elemento.tipo);
                    console.log(elemento.paginas);
                    console.log(elemento.activo);
                    console.log(elemento.isbn);
                    console.log("----------------------------");
                }
            });
        }
    };
    return GestorLibros;
}());
exports.GestorLibros = GestorLibros;
exports.arregloLibros = [
    {
        "autor": "Gabriel García Márquez",
        "titulo": "Cien años de soledad",
        "genero": "Realismo mágico",
        "tipo": "Novela",
        "paginas": 256,
        "activo": true,
        "isbn": "978-0307474728"
    },
    {
        "autor": "George Orwell",
        "titulo": "1984",
        "genero": "Ciencia ficción",
        "tipo": "Novela",
        "paginas": 300,
        "activo": true,
        "isbn": "978-0451524935"
    },
    {
        "autor": "Jane Austen",
        "titulo": "Orgullo y prejuicio",
        "genero": "Romance",
        "tipo": "Novela",
        "paginas": 320,
        "activo": true,
        "isbn": "978-0141439518"
    },
    {
        "autor": "Ernest Hemingway",
        "titulo": "El viejo y el mar",
        "genero": "Aventura",
        "tipo": "Novela",
        "paginas": 280,
        "activo": true,
        "isbn": "978-0684801223"
    },
    {
        "autor": "Harper Lee",
        "titulo": "Matar a un ruiseñor",
        "genero": "Ficción",
        "tipo": "Novela",
        "paginas": 296,
        "activo": true,
        "isbn": "978-0061120084"
    },
    {
        "autor": "F. Scott Fitzgerald",
        "titulo": "El gran Gatsby",
        "genero": "Ficción",
        "tipo": "Novela",
        "paginas": 195,
        "activo": true,
        "isbn": "978-0743273565"
    },
    {
        "autor": "J.R.R. Tolkien",
        "titulo": "El Señor de los Anillos",
        "genero": "Fantasía",
        "tipo": "Novela",
        "paginas": 340,
        "activo": false,
        "isbn": "978-0547928227"
    },
    {
        "autor": "Agatha Christie",
        "titulo": "Asesinato en el Orient Express",
        "genero": "Misterio",
        "tipo": "Novela",
        "paginas": 218,
        "activo": true,
        "isbn": "978-0062073616"
    },
    {
        "autor": "Isabel Allende",
        "titulo": "La casa de los espíritus",
        "genero": "Realismo mágico",
        "tipo": "Novela",
        "paginas": 205,
        "activo": true,
        "isbn": "978-0307390134"
    },
    {
        "autor": "Julio Cortázar",
        "titulo": "Rayuela",
        "genero": "Ficción experimental",
        "tipo": "Novela",
        "paginas": 168,
        "activo": true,
        "isbn": "978-8437609404"
    },
    {
        "autor": "Mario Vargas Llosa",
        "titulo": "La ciudad y los perros",
        "genero": "Ficción",
        "tipo": "Novela",
        "paginas": 251,
        "activo": true,
        "isbn": "978-8466325785"
    },
    {
        "autor": "Jorge Luis Borges",
        "titulo": "Ficciones",
        "genero": "Cuento",
        "tipo": "Antología",
        "paginas": 224,
        "activo": true,
        "isbn": "978-0802130308"
    },
    {
        "autor": "Juan Rulfo",
        "titulo": "Pedro Páramo",
        "genero": "Realismo mágico",
        "tipo": "Novela",
        "paginas": 275,
        "activo": true,
        "isbn": "978-9681600415"
    },
    {
        "autor": "Gabriel García Márquez",
        "titulo": "El amor en los tiempos del cólera",
        "genero": "Romance",
        "tipo": "Novela",
        "paginas": 115,
        "activo": true,
        "isbn": "978-0141032485"
    },
    {
        "autor": "Stephen King",
        "titulo": "It",
        "genero": "Terror",
        "tipo": "Novela",
        "paginas": 302,
        "activo": true,
        "isbn": "978-1501142942"
    },
    {
        "autor": "J.K. Rowling",
        "titulo": "Harry Potter y la piedra filosofal",
        "genero": "Fantasía",
        "tipo": "Novela",
        "paginas": 256,
        "activo": true,
        "isbn": "978-0747532696"
    },
    {
        "autor": "Dan Brown",
        "titulo": "El código Da Vinci",
        "genero": "Misterio",
        "tipo": "Novela",
        "paginas": 266,
        "activo": true,
        "isbn": "978-0385504327"
    },
    {
        "autor": "Stieg Larsson",
        "titulo": "Los hombres que no amaban a las mujeres",
        "genero": "Novela negra",
        "tipo": "Novela",
        "paginas": 299,
        "activo": true,
        "isbn": "978-9788423339644"
    },
    {
        "autor": "Paulo Coelho",
        "titulo": "El alquimista",
        "genero": "Fábula",
        "tipo": "Novela",
        "paginas": 321,
        "activo": true,
        "isbn": "978-0061122415"
    },
    {
        "autor": "Isabel Allende",
        "titulo": "Paula",
        "genero": "Autobiografía",
        "tipo": "No Ficción",
        "paginas": 166,
        "activo": true,
        "isbn": "978-0060927611"
    }
];
