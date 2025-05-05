import * as readlineSync from 'readline-sync';


export function presentacion(jugador1:string,jugador2:string){
 let pausa:string="";
 console.clear();
 console.log("");
 console.log("");
 console.log("");
 console.log("\x1b[37m     ███████████  █████████  ██      ██  █████████  ██████████  ████████  ██         ████████\x1b[0m");
 console.log("\x1b[37m     ██           ██         ███     ██  ██         ██      ██  ██    ██  ██         ██    ██\x1b[0m");
 console.log("\x1b[37m     ██           ██         ██ ██   ██  ██         ██      ██  ██    ██  ██         ██    ██\x1b[0m");
 console.log("\x1b[37m     ██   ██████  █████      ██  ██  ██  █████      ██████████  ████████  ██         ████████\x1b[0m");
 console.log("\x1b[37m     ██       ██  ██         ██   ██ ██  ██         ██  ██      ██    ██  ██         ██    ██\x1b[0m");
 console.log("\x1b[37m     ██       ██  ██         ██    ████  ██         ██    ██    ██    ██  ██         ██    ██\x1b[0m");
 console.log("\x1b[37m     ███████████  █████████  ██      ██  █████████  ██      ██  ██    ██  █████████  ██    ██\x1b[0m");
 console.log("             ");
 console.log("            ");
 console.log("           ");
 console.warn(`           Presiona Enter para que ${jugador1} y ${jugador2} comiencen...`); 
 pausa=readlineSync.question(``); 
}



export function creditos(){
    let pausa:string="";
    console.clear();
    console.log("");
    console.log("");
    console.log("");
    console.log("                      Generala v0.01");
    console.log("                         CREDITOS:");
    console.warn("               Natalia, Jorge, Marcelo y Juan  ");
    console.log("");
    console.log("");
    console.log("            Gracias por utilizar Generala v0.01");
    console.log("                Creada por: Cristian Falcone");
    pausa=readlineSync.question(``); 
   }
