import { Persona } from './persona';
import { Generala } from './juegoGenerala';

const jug1=new Persona("Cristian","Falcone",26134695,new Date(1977,10,7),"Cypher");
const jug2=new Persona("Natalia","Tutora",33333333,new Date(2000,10,7),"Naty");
const tirada1=new Generala([0,0,0,0,0]);
tirada1.multiplayer(4,jug1,jug2);