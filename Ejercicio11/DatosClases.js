"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arregloMaestros = exports.arregloAlumnos = exports.Escuela = exports.Maestro = exports.Alumno = void 0;
var Alumno = /** @class */ (function () {
    function Alumno(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    }
    return Alumno;
}());
exports.Alumno = Alumno;
var Maestro = /** @class */ (function () {
    function Maestro(nombre) {
        this.nombre = nombre;
    }
    return Maestro;
}());
exports.Maestro = Maestro;
var Escuela = /** @class */ (function () {
    function Escuela(listaEstudiantes, listaDocentes) {
        this.arregloEstudiantes = listaEstudiantes;
        this.arregloProfesores = listaDocentes;
    }
    Escuela.prototype.buscarAlumno = function (nombre) {
        for (var i = 0; i < this.arregloEstudiantes.length; i = i + 1) {
            if (this.arregloEstudiantes[i].nombre === nombre) {
                return i;
            }
        }
        return -1;
    };
    Escuela.prototype.buscarprofesor = function (nombre) {
        for (var i = 0; i < this.arregloProfesores.length; i = i + 1) {
            if (this.arregloProfesores[i].nombre === nombre) {
                return i;
            }
        }
        return -1;
    };
    Escuela.prototype.conocerNota = function (nombre) {
        var posicion = (this.buscarAlumno(nombre));
        if (posicion != -1) {
            console.log("-----------------------------");
            console.log("".concat(this.arregloEstudiantes[posicion].nombre, "  Nota: ").concat(this.arregloEstudiantes[posicion].nota));
            console.warn(this.arregloEstudiantes[posicion].nota >= 7 ? "APROBADO" : "DESAPROBADO");
            console.log("-----------------------------");
        }
        else {
            console.log("-----------------------------");
            console.warn("EL ALUMNO NO EXISTE");
            console.log("-----------------------------");
        }
    };
    Escuela.prototype.ListadoAlumnos = function () {
        console.warn(" LISTADO DE ALUMNOS");
        console.table(this.arregloEstudiantes);
    };
    Escuela.prototype.ListadoProfesores = function () {
        console.warn(" LISTADO DE PROFESORES");
        console.table(this.arregloProfesores);
    };
    Escuela.prototype.matricularExpulsar = function (accion, alumno) {
        var posicion = this.buscarAlumno(alumno.nombre);
        if (posicion === -1 && accion === 0) {
            this.arregloEstudiantes.push(alumno);
        }
        else if (posicion != -1 && (accion === 1)) {
            this.arregloEstudiantes.splice(posicion, 1);
        }
        else if ((posicion === -1) && (accion === 1)) {
            console.log("----------------------------------");
            console.warn(" ALUMNO INEXISTENTE");
            console.log("----------------------------------");
        }
        else if ((posicion != -1) && (accion === 0)) {
            console.log("----------------------------------");
            console.warn(" ALUMNO YA EXISTENTE");
            console.log("----------------------------------");
        }
        if (accion != 0 && accion != 1) {
            console.log("----------------------------------");
            console.warn(" MATRICULAR/EXPULSAR INEXISTENTE");
            console.log("----------------------------------");
        }
    };
    Escuela.prototype.contratarDespedir = function (accion, docente) {
        var posicion = this.buscarprofesor(docente.nombre);
        if (posicion === -1 && accion === 0) {
            this.arregloProfesores.push(docente);
        }
        else if (posicion != -1 && (accion === 1)) {
            this.arregloProfesores.splice(posicion, 1);
        }
        else if ((posicion === -1) && (accion === 1)) {
            console.log("----------------------------------");
            console.warn(" DOCENTE INEXISTENTE");
            console.log("----------------------------------");
        }
        else if ((posicion != -1) && (accion === 0)) {
            console.log("----------------------------------");
            console.warn(" DOCENTE YA EXISTENTE");
            console.log("----------------------------------");
        }
        if (accion != 0 && accion != 1) {
            console.log("----------------------------------");
            console.warn(" CONTRATAR/DESPEDIR INEXISTENTE");
            console.log("----------------------------------");
        }
    };
    return Escuela;
}());
exports.Escuela = Escuela;
exports.arregloAlumnos = [
    { nombre: "Juan Capra", nota: 8 },
    { nombre: "María Traverso", nota: 5 },
    { nombre: "Pedro Soriano", nota: 9 },
    { nombre: "Ana Falcone", nota: 7 },
    { nombre: "Carlos Vismara", nota: 4 },
    { nombre: "Luisa Calamari", nota: 10 },
    { nombre: "Diego Alvarez", nota: 6 },
    { nombre: "Sofía Popuolo", nota: 3 },
    { nombre: "Javier Maresca", nota: 8 },
    { nombre: "Valentina Duarte", nota: 9 },
];
exports.arregloMaestros = [
    { nombre: "Prof. Juan Pérez" },
    { nombre: "Prof. María García" },
    { nombre: "Prof. Carlos Rodríguez" },
    { nombre: "Prof. Ana Martínez" }
];
//----------------------PRUEBAS DESCARTADAS
/*conocerNota(nombre:string){
   let ingresa:boolean=false;
   this.arregloEstudiantes.forEach(alumno=>{
               if (alumno.nombre===nombre){
                         ingresa=true;
                         console.log("-----------------------------");
                         console.log(`${nombre}  Nota: ${alumno.nota}`);
                         console.warn(alumno.nota>=7?`APROBADO`:`DESAPROBADO`);
                         console.log("-----------------------------");
               }
   })
 if (!ingresa){
    console.log("-----------------------------");
    console.warn(`EL ALUMNO NO EXISTE`);
    console.log("-----------------------------");
              }
 }

  ListadoAlumnos(profesor:string){
    let ingreso:boolean=false;
    this.arregloProfesores.forEach(docente=>{
         if (docente.nombre===profesor){
                               ingreso=true
                               console.table(this.arregloEstudiantes);
                                       }
    })
  if (!ingreso){
    console.log("-----------------------------");
    console.warn(`EL DOCENTE NO EXISTE`);
    console.log("-----------------------------");
               }
 }*/
