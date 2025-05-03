import * as readlineSync from "readline-sync";

export class Libro{
   Titulo:string;
   Autor:string;
   NroPaginas:number;
   ISBN:string;
   constructor(titulo:string,autor:string,paginas:number,isbn:string){
         this.Titulo=titulo;
         this.Autor=autor;
         this.NroPaginas=paginas;
         this.ISBN=isbn;
   }
   cargarLibro(){
      console.warn("-----------------INGRESO LIBRO------------------")
      this.Titulo=readlineSync.question("Ingrese TITULO:      ");
      this.Autor=readlineSync.question("Ingrese AUTOR:       ");
      this.NroPaginas=readlineSync.questionInt("Ingrese Nro PAGINAS: ");
      this.ISBN=readlineSync.question("Ingrese ISBN:        ");
   }

   informarDatosLibro(){
     console.warn("-------------DATOS LIBRO---------------");
     console.log(`  Titulo: ${this.Titulo}`);
     console.log(`   Autor: ${this.Autor}`);
     console.log(` Paginas: ${this.NroPaginas}`);
     console.log(`    ISBN: ${this.ISBN}`);
     console.warn("---------------------------------------");
   }
}

