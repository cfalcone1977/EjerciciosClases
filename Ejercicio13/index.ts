 import { Libro, arregloLibros, GestorLibros } from "./librosDatos";


const ManejoLibros = new GestorLibros(arregloLibros);
const libro1 = {autor: "NuevoGeorge Orwell", titulo: "N1984", genero: "NCiencia Ficcion", tipo:"Nuevonovela", paginas:195, activo:true, isbn:"N978-0451524935"};
const libro2 = {autor: "Cristian Falcone", titulo: "Naranjito", genero: "Infantil", tipo:"Cuento", paginas:222, activo:true, isbn:"NCOF-207420"};
const libroaModificar ={autor: "Autor_Modificado", titulo: "Titulo_Modificado", genero: "Genero_Modificado", tipo:"Tipo_Modificado", paginas:158, activo:true, isbn:"978-0743273565"}


//ManejoLibros.insertarLibro(libro1);

//ManejoLibros.buscarLibroAutor("Gabriel García Márquez"); 

//ManejoLibros.insertarLibro(libro2);        

//ManejoLibros.eliminarLibro(1);

ManejoLibros.mostrarbiblioteca();

ManejoLibros.modificarLibro(libroaModificar); //**EL LIBRO A MODIFICAR DEBE POSEE CAMPO ISBN DE LIBRO EXISTENTE, el resto de los campos seran modificados*/

ManejoLibros.eliminarLibro("978-0060927611");

ManejoLibros.eliminarLibro("978-0141439518");

ManejoLibros.eliminarLibro("978-0307474728");

ManejoLibros.eliminarLibro("978-0307390134");

ManejoLibros.mostrarbiblioteca();//UTILICE ARGUMENTO "T" PARA INCLUIR BAJA LOGICA EN EL LISTADO

//ManejoLibros.insertarLibro(libro2);     






