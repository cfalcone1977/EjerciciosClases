import { Auto, arrayAutos } from "./datos";


export class RegistroAutomotor{
   vehiculosRegistrados:Auto[];
   constructor(arrayAutos:Auto[]) {
       this.vehiculosRegistrados=arrayAutos;
   }

   agregarVehiculo(Nvehiculo:Auto){
          this.vehiculosRegistrados.push(Nvehiculo);
   }
   buscarVehiculoPatente(patente:string):number{
          for (let indice = 0; indice < this.vehiculosRegistrados.length; indice=indice+1) {
               if (this.vehiculosRegistrados[indice].patente===patente){
                                      console.warn("------------VEHICULO ENCONTRADO-------------");
                                      console.table(this.vehiculosRegistrados[indice]);
                                      console.warn("--------------------------------------------");
                                      return indice;
                                          }                               
          }
   return -1;       
   }
   eliminarVehiculo(patente:string){
       let indiceEliminar=this.buscarVehiculoPatente(patente);
       if (indiceEliminar!=-1) {
                               this.vehiculosRegistrados.splice(indiceEliminar,1);
                                 console.warn("----VEHICULO ELIMINADO SATISFACTORIAMENTE------");
                               } else{
                                 console.warn("------------VEHICULO NO ENCONTRADO-------------");
                                 console.warn("        PATENTE NO EXISTE EN REGISTRO");
                                 console.warn("-----------------------------------------------");                               
                               }

   }


   modificarVehiculo(patente:string, vehiculo:Auto){
      const indice:number=this.buscarVehiculoPatente(patente);
      if (indice!=-1){
                 console.warn("--------- El VEHICULO ENCONTRADO -------------");
                 console.table(this.vehiculosRegistrados[indice]);
                 console.warn("----------------------------------------------");                 
                 this.vehiculosRegistrados.splice(indice,1,vehiculo);
                 console.warn("----  SE HA REEMPLAZADO POR EL VEHICULO  -----");
                 console.table(this.vehiculosRegistrados[indice]);
                 console.warn("----------------------------------------------");
                     }


   }

   mostrarListadoVehiculos(){
      this.vehiculosRegistrados.forEach(auto=>{
         console.table(auto);
      })
   }
}







