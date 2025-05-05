import { Persona } from './persona';
import { Generala } from './juegoGenerala';
import { Cubilete, Dado } from './cubilete';
import { presentacion, creditos } from './presycred';

const jug1=new Persona("Cristian","Falcone",26134695,new Date(1977,10,7),"Cypher");
const jug2=new Persona("Natalia","Tutora",33333333,new Date(2000,10,7),"Naty");


const dado1=new Dado;
const dado2=new Dado;
const dado3=new Dado;
const dado4=new Dado;
const dado5=new Dado;

const cubilete=new Cubilete([dado1,dado2,dado3,dado4,dado5])

const tirada1=new Generala(cubilete);
presentacion(jug1.nickname,jug2.nickname);
tirada1.multiplayer(4,jug1,jug2);

creditos();