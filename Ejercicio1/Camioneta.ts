export class Traccion{
    onOff:boolean=false;
    velocidad:number=0;
    modocaja:string="P";
    freno:boolean=false;  
    simple:boolean=true;
    alta:boolean=false;
    baja:boolean=false;
    constructor (onOff:boolean, velocidad:number, modocaja:string, freno:boolean,simple:boolean,alta:boolean,baja:boolean){
              this.onOff=onOff;
              this.velocidad=velocidad;
              this.modocaja=modocaja;
              this.freno=freno;
              this.simple=simple;
              this.alta=alta;
              this.baja=baja;
    }
  traccionSimple(onOff:boolean,velocidad:number,simple:boolean,alta:boolean,baja:boolean,modocaja:string,freno:boolean):boolean{
    if ((onOff) && (this.velocidad<=40) && (alta) && (!baja)) {
                                       this.simple=true;
                                       this.alta=false;
    return this.simple;                                
    }
   return false;
  }  
  activarDobleAlta(onOff:boolean,velocidad:number,simple:boolean,baja:boolean,modocaja:string,freno:boolean):boolean{
      console.log(onOff);
      console.log(velocidad);
      console.log(simple);
      console.log(baja);            
      if ((onOff) && (velocidad<=40) && (simple) && (!baja)){
                            this.alta=true;
       return this.alta;                     
      }
      if ((baja) && (velocidad===0) && (freno)){
                          this.baja=false;
                          this.alta=true;
       return this.alta;                  
      }
    return false;  
  }
  activarDobleBaja(onOff:boolean,velocidad:number,simple:boolean,alta:boolean,baja:boolean,modocaja:string,freno:boolean):boolean{
      if ((velocidad===0) && ((modocaja==="N")||(modocaja==="P")) && ((alta)||(simple)) && (freno)){
              this.alta=false;
              this.baja=true;
    return baja;
      }
   return false;
  }
  
  }

export class Camioneta{
    // valores irrelevantes en la logica
    private marca: string; 
    private motor:string;
    private caja:string;
    private velocidadMaxima:number=180;
    
    // valores que permiten realizar acciones, pertenecen a la logica del objeto
    private cajaAT: boolean;
    private modoCaja: string="P";
    private freno:boolean=false;
    private velocidad:number=0;
    private powerOnOff: boolean=false;
    public dobleTraccion: Traccion;  //(onOff:boolean, velocidad:number, modocaja:string, freno:boolean,simple:boolean,alta:boolean,baja:boolean)
    private traccionSimple:boolean=true;
    private activar4x4H: boolean=false;
    private activar4x4B: boolean=false;
    constructor (fabricante:string, tipoMotor:string, modeloCaja: string, AT:boolean,dobleTraccion:Traccion){ //powerOnOff:boolean, velocidad:number,modocaja:string, freno:boolean,simple:boolean,alta:boolean,baja:boolean){
           this.marca=fabricante;
           this.motor=tipoMotor;
           this.caja=modeloCaja;
           this.cajaAT=AT;    
           this.dobleTraccion=dobleTraccion; //new Traccion//(powerOnOff,velocidad,modocaja,freno,simple,alta,baja)   
    }
    activarDobletraccionAlta(){
        this.activar4x4H=this.dobleTraccion.activarDobleAlta(this.powerOnOff,this.velocidad,this.traccionSimple,this.activar4x4B,this.modoCaja,this.freno);
        if (this.activar4x4H){
                               this.traccionSimple=false;
                                          }
    }
    public startStopBoton():void {
      if ((this.velocidad===0) && (this.modoCaja==="P") && (this.freno)){
                                                    this.powerOnOff=!this.powerOnOff;          
                                                    }   
    }
    public PresionoFreno(){
      this.freno=true;
    } 
    public SueltoFreno(){
        this.freno=false;
      } 
    public infoEstado():void {
       console.log(`----------------------------`); 
       console.log(`---${this.marca} ${this.motor} ${this.caja}---`);
       console.log(`----------------------------`);
       console.log(`PowerOnOff: ${this.powerOnOff}`);
       console.log(`ModoCaja:   ${this.modoCaja}`);
       console.log(`Freno:      ${this.freno}`)
       console.log(`Velocidad:  ${this.velocidad}`)
       if (this.traccionSimple){
        console.warn(`TranccionSimple:  ${this.traccionSimple}`)
             }
       if (this.activar4x4H){
        console.warn(`DobleAlta:  ${this.activar4x4H}`)
             }
       console.log(`----------------------------`);
    }
    public cajaUp(){
      if ((this.modoCaja==="P") && (this.velocidad===0) && (this.freno)) {
                                                           this.modoCaja="R";
                        
                          } else if ((this.modoCaja==="R") && (this.velocidad===0) && (this.freno)) {
                            this.modoCaja="N";
                          } else if ((this.modoCaja==="N") && (this.velocidad===0) && (this.freno)) {
                            this.modoCaja="D";
                          }                           
                          
    }
    public cajaDown(){
        if ((this.modoCaja==="D") && (this.velocidad===0) && (this.freno=true)) {
            this.modoCaja="N";
                          } else if ((this.modoCaja==="N") && (this.velocidad===0) && (this.freno=true)) {
                            this.modoCaja="R";
                          } else if ((this.modoCaja==="R") && (this.velocidad===0) && (this.freno=true)) {
                            this.modoCaja="P";
                          }                           
    }
    public aceleraUp(){
        if ((this.powerOnOff) && (!this.freno) && (this.modoCaja==="D") && (this.velocidad<this.velocidadMaxima)){
             this.velocidad = this.velocidad + 10;
        }
    }
    public acelerarDown(){
        if ((this.powerOnOff) && (this.freno) && (this.modoCaja==="D") && (this.velocidad>0)){
            this.velocidad = this.velocidad - 10;
       }        
    }
}