export class Auto{
     marca: string; 
     modelo:string;
     motor:string;
     chasis:string;
     patente:string;
  constructor(fabricante:string,tipo:string,motor:string,chasis:string,patente:string){
          this.marca=fabricante;
          this.modelo=tipo;
          this.motor=motor;
          this.chasis=chasis;
          this.patente=patente;        
  }
}

export let arrayAutos: Auto [] = [
    {marca:"Toyota", modelo: "Corolla", motor: "1.8L", chasis: "JT1234567890", patente: "AB123CD"},
    { marca: "Honda", modelo: "Civic", motor: "1.5L Turbo", chasis: "JH1234567891", patente: "EF456GH" },
    { marca: "Ford", modelo: "Mustang", motor: "5.0L V8", chasis: "1FA678901234", patente: "IJ789KL" },
    { marca: "Chevrolet", modelo: "Cruze", motor: "1.4L Turbo", chasis: "1G1PC5SE4F7123456", patente: "LM012NO" },
    { marca: "Volkswagen", modelo: "Golf", motor: "2.0L TSI", chasis: "WVWZZZ1KZPW987654", patente: "OP345QR" },
    { marca: "Nissan", modelo: "Sentra", motor: "1.6L", chasis: "JN1AZ5CP2M012345", patente: "RS678TU" },
    { marca: "Hyundai", modelo: "Elantra", motor: "2.0L", chasis: "KMH53KCD7H012345", patente: "VW901XY" },
    { marca: "Kia", modelo: "Sportage", motor: "2.4L", chasis: "KNMJC81P0G012345", patente: "ZA234BC" },
    { marca: "Mazda", modelo: "3", motor: "2.5L", chasis: "JM1BL13C2M012345", patente: "DE567FA" },
    { marca: "Subaru", modelo: "Impreza", motor: "2.0L AWD", chasis: "JF1GJ7KP4G012345", patente: "GB890HI" },
  ];

  