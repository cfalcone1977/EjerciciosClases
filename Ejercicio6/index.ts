import { Calculadora } from "./calculadora";

const Calcular = new Calculadora(18,-1);
let resultado:number=0;

resultado=Calcular.sumar();
Calcular.mostrarResultado(resultado,"sumar");