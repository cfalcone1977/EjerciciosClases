import { Alumno, Maestro, Escuela, arregloAlumnos, arregloMaestros } from "./DatosClases";


const escuelaN1=new Escuela(arregloAlumnos,arregloMaestros);
const NuevoAlumno00001=new Alumno("Cristian Falcone",5);
const AlumnoInexistente00002=new Alumno("Juan de los palotes",7);
const MaestroNuevo001= new Maestro("Prof. Fernando Comas");


escuelaN1.conocerNota("Juan Capra");
escuelaN1.conocerNota("Cristian Falcone");
escuelaN1.ListadoAlumnos();
escuelaN1.matricularExpulsar(0,NuevoAlumno00001); // "0" MATRICULAR "1" EXPULSAR
escuelaN1.ListadoAlumnos();
escuelaN1.matricularExpulsar(1,NuevoAlumno00001);
escuelaN1.ListadoAlumnos();
escuelaN1.matricularExpulsar(0,AlumnoInexistente00002);
escuelaN1.matricularExpulsar(0,NuevoAlumno00001);
escuelaN1.ListadoAlumnos();
escuelaN1.ListadoProfesores();
escuelaN1.contratarDespedir(0,MaestroNuevo001);
escuelaN1.ListadoProfesores();
escuelaN1.contratarDespedir(1,{nombre:"Prof. María García"});
escuelaN1.ListadoProfesores();
escuelaN1.contratarDespedir(0,{nombre:"Prof. María García"});
escuelaN1.contratarDespedir(0,{nombre:"Prof. María García"});
