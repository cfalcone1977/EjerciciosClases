class CuentaBancaria{
  NroCuenta:string;
  saldoActual:number;
  constructor(NC:string,SALDO:number){
      this.NroCuenta=NC;
      this.saldoActual=SALDO;
  }
  incrementarSaldo(NC:string,credito:number){
        this.NroCuenta=NC;
        this.saldoActual=this.saldoActual+credito;
  }
  disminuirSaldo(NC:string,debito:number){
    if (debito<=this.saldoActual){
             this.saldoActual=this.saldoActual-debito;
    } else {
         console.warn("Operacion CANCELADA, el monto a debitar supera el saldo...");
           }
  }
 mostrarSaldo(NC:string){
    if (NC===this.NroCuenta){
        console.log("*****************************************");
        console.log(`CtaCte Nro.: ${NC} Saldo: ${this.saldoActual}`);
        console.log("*****************************************");
                            }        
 }
}


const CtaCteBancaria = new CuentaBancaria("15200141/7",0);

CtaCteBancaria.mostrarSaldo("15200141/7");
CtaCteBancaria.incrementarSaldo("15200141/7",15500);
CtaCteBancaria.incrementarSaldo("15200141/7",50000);
CtaCteBancaria.mostrarSaldo("15200141/7");
CtaCteBancaria.disminuirSaldo("15200141/7",100000);
CtaCteBancaria.disminuirSaldo("15200141/7",14500);
CtaCteBancaria.mostrarSaldo("15200141/7");
