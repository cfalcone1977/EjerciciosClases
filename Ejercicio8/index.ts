import { CuentaBancaria } from "./Ctacte";

const CtaCteBancaria = new CuentaBancaria("15200141/7",0);

CtaCteBancaria.mostrarSaldo("15200141/7");
CtaCteBancaria.incrementarSaldo("15200141/7",15500);
CtaCteBancaria.incrementarSaldo("15200141/7",50000);
CtaCteBancaria.mostrarSaldo("15200141/7");
CtaCteBancaria.disminuirSaldo("15200141/7",100000);
CtaCteBancaria.disminuirSaldo("15200141/7",14500);
CtaCteBancaria.mostrarSaldo("15200141/7");
