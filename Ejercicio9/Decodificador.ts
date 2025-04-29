export class Decodificador{
  private canalOperativo:number=3;
  private onOffDECO:boolean=false;
  
  public PowerOnOffDeco(){
     this.onOffDECO=!this.onOffDECO; 
  }

  public infoDecodificador(canal:number){
    if (this.onOffDECO){
          console.log("------DECODIFICADOR-------");
          if (canal===this.canalOperativo){
                            console.warn(`Canal en uso ${this.canalOperativo}`);
                            console.warn("        ACTIVADO");
                                        } else{
                                            console.warn("       DESACTIVADO");
                                            console.log(`Esta en canal ${canal}`);
                                            console.log(`Para activar use canal: ${this.canalOperativo}`);
                                              }
          console.log("---------------------------");
    }

  }
}
