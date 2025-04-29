import { RegistroAutomotor } from "./Auto";
import { arrayAutos, Auto } from "./datos";

const auto1=new Auto("Ford","Falcon SP","3.6L","XKP371218","WHI906");
const auto2=new Auto("Ford","Falcon XP","3.7L","XKP371218","WHI906")
const RegistroAutomotor1=new RegistroAutomotor(arrayAutos);
let indiceV1:number;
let indiceV2:number;
RegistroAutomotor1.agregarVehiculo(auto1);
RegistroAutomotor1.mostrarListadoVehiculos();
indiceV1=RegistroAutomotor1.buscarVehiculoPatente("WHI906");
indiceV2=RegistroAutomotor1.buscarVehiculoPatente("RS678TU");
//RegistroAutomotor1.eliminarVehiculo("WHI906");
RegistroAutomotor1.eliminarVehiculo("EF456GH");
RegistroAutomotor1.mostrarListadoVehiculos();
RegistroAutomotor1.eliminarVehiculo("EF45UUU");
RegistroAutomotor1.modificarVehiculo("WHI906",auto2);
RegistroAutomotor1.mostrarListadoVehiculos();