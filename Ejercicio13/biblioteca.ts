 import { Libro, arregloLibros, GestorLibros } from "./librosDatos";


const ManejoLibros = new GestorLibros(arregloLibros);
const libro1 = {autor: "NuevoGeorge Orwell", titulo: "N1984", genero: "NCiencia Ficcion", tipo:"Nuevonovela", paginas:195, activo:true, isbn:"N978-0451524935"};
const libro2 = {autor: "Cristian Falcone", titulo: "Naranjito", genero: "Infantil", tipo:"Cuento", paginas:222, activo:true, isbn:"NCOF-207420"};
const libroModificado ={autor: "Autor_Modificado", titulo: "Titulo_Modificado", genero: "Genero_Modificado", tipo:"Tipo_Modificado", paginas:158, activo:true, isbn:"ISBN_Modificado"}


ManejoLibros.insertarLibro(libro1);

ManejoLibros.buscarLibroAutor("Gabriel García Márquez"); 

ManejoLibros.insertarLibro(libro2);        

ManejoLibros.eliminarLibro(1);

ManejoLibros.mostrarbiblioteca();

ManejoLibros.modificarLibro(libroModificado,0);

ManejoLibros.mostrarbiblioteca();

ManejoLibros.insertarLibro(libro2);     






