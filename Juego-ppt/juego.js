// colors = require("colors")
// prompt = require('prompt-sync')();

// class Persona {
//     constructor(nombre, edad) {
//       this.nombre = nombre;
//       this.edad = edad;
//     }

//     saludar() {
//       console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
//     }
//   }

//   const persona1 = new Persona(prompt("Ingresa Un Nombre: "), parseInt(prompt("Ingrese su edad: ")));

//   if(persona1.edad >= 18) {
//     console.log("                            INICIAR.......\n".underline)
//     console.log(`                      BIENVENIDO ${persona1.nombre}\n                              DISFRUTA EL JUEGO..`.magenta)
//     console.log(`\n
//                     | Datos| Nombre | Edad |
//                     |Nombre|  ${persona1.nombre}  |   ${persona1.edad} |`.green)
//   }else if(persona1.edad >= 15) {
//     console.log(`Te dejare pasar por esta vez`.grey)
//     console.log(`\nSolo puedes ver esta |Parte| `.blue)
//     console.log(`| Tú Nombre: | ${persona1.nombre} | Edad: | ${persona1.edad} |\n\n`.cyan)
//   }else{
//     console.log("Eres Muy menor no puedes entrar a la red ni a la appp")
//   }
//   let l = console.log;
//   let puntos = 0;
//   function juego(seleccion) {
//     let opciones = ["piedra", "papel", "tijera"];
//     let bot = opciones[Math.floor(Math.random() * opciones.length)];
//     if(seleccion === bot) {
//         l(` !Empate¡ \n ${seleccion} y ${bot} Son Iguales. ||Puentos: ${puntos}`);
//     }
//     else if(seleccion == "piedra") {
//         if(bot == "papel") {
//             l(`     JUEGOS TERMINADO....`);
//             l(` !Peldiste oe¡ 🤣`.red);
//             l(` |Puntos|
//                 |${puntos--}`);
//         }else if(seleccion == "tijera") {
//             l(`  !Victooria¡  `.green)
//             l(` |Puntos|`.magenta)
//             l(` |  ${puntos++}|`.magenta)
//         }
//     else if(seleccion == "papel") {
//         if(bot == "tijera") {
//             l(`     JUEGOS TERMINADO....`)
//             l(` !Peldiste pa¡ 🤣`.red)
//             l(` |Puntos|
//                 |${puntos--}`);
//         }
//         if(bot == "piedra") {
//             l(`  !Victooria¡  `.green)
//             l(` |Puntos|`.magenta)
//             l(` |  ${puntos++}|`.magenta)
//         }
//     }
//     else if(seleccion == "tijera") {
//         if(bot == "piedra") {
//             l(`     JUEGOS TERMINADO....`)
//             l(` !Peldiste pa¡ 🤣`.red)
//             l(` |Puntos|
//                 |${puntos--}`);
//         }
//         if(bot == "papel") {
//             l(`  !Victooria¡  `.green)
//             l(` |Puntos|`.magenta)
//             l(` |  ${puntos++}|`.magenta)
//         }
//     }else{
//       l(` Eliga una opcion valida.`.green)
//     }
//     }
//   }
// let opcion = prompt(" Eliga una opcion: tijera, piedra, papel: ")
// juego(opcion)
// let seguir = prompt("Quieres Seguir: si o no: ");

// if (seguir == "si"){
// let opcion = prompt(" Eliga una opcion: tijera, piedra, papel: ")
//   juego(opcion)
// }else{
//   console.log("Juego Finalizado.")
// }

const colors = require("colors");
const prompt = require("prompt-sync")();

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

const persona1 = new Persona(
  prompt("Ingresa Un Nombre: "),
  parseInt(prompt("Ingrese su edad: "))
)
if (persona1.edad >= 18) {
  console.log("                            INICIAR.......\n".underline);
  console.log(
    `                      BIENVENIDO ${persona1.nombre}\n                              DISFRUTA EL JUEGO..`
      .magenta
  );
  console.log(
    `\n 
                    | Datos| Nombre | Edad |
                    |Nombre|  ${persona1.nombre}  |   ${persona1.edad} |\n\n`.green
  );
} else if (persona1.edad >= 15) {
  console.log(`Te dejare pasar por esta vez`.grey);
  console.log(`\nSolo puedes ver esta |Parte| `.blue);
  console.log(
    `| Tú Nombre: | ${persona1.nombre} | Edad: | ${persona1.edad} |\n\n`.cyan
  );
} else {
  console.log("Eres Muy menor no puedes entrar a la red ni a la appp")
  setTimeout(function() {
    console.clear();
  }, 5000); 
}

let puntos = 0; //

function juego(seleccion) {
  let opciones = ["tijera", "piedra", "papel"];

  let bot = opciones[Math.floor(Math.random() * opciones.length)];

  if (seleccion === bot) {
    console.log(
      ` !Empate¡ \n ${seleccion} y ${bot} Son Iguales. ||Puntos: ${puntos}`
    );
  } else if (seleccion == "piedra") {
    if (bot == "papel") {
      console.log(`     JUEGOS TERMINADO....`);
      console.log(` !Peldiste oe¡ 🤣`.red);
      console.log(` |Puntos| ${--puntos}`);
    } else if (bot == "tijera") {
      console.log(`  !Victooria¡  `.green);
      console.log(` |Puntos|`.magenta);
      console.log(` |  ${++puntos}|`.magenta);
    }
  } else if (seleccion == "papel") {
    if (bot == "tijera") {
      console.log(`     JUEGOS TERMINADO....`);
      console.log(` !Peldiste pa¡ 🤣`.red);
      console.log(` |Puntos|
                |${--puntos}`);
    } else if (bot == "piedra") {
      console.log(`  !Victooria¡  `.green);
      console.log(` |Puntos|`.magenta);
      console.log(` |  ${++puntos}|`.magenta);
    }
  } else if (seleccion == "tijera") {
    if (bot == "piedra") {
      console.log(`     JUEGOS TERMINADO....`);
      console.log(` !Peldiste pa¡ 🤣`.red);
      console.log(` |Puntos|
                |${--puntos}`);
    } else if (bot == "papel") {
      console.log(`  !Victooria¡  `.green);
      console.log(` |Puntos|`.magenta);
      console.log(` |  ${++puntos}|`.magenta);
    }
  } else {
    console.log(`Elige una opción válida.`.green);
  }
}

let opcion = prompt(" Elige una opción: tijera, piedra, papel: ");
juego(opcion);
while (true) {
  let seguir = prompt("¿Quieres Seguir? si o no: ");

  if (seguir == "si") {
    let opcion = prompt(" Elige una opción: tijera, piedra, papel: ");
    juego(opcion);
    continue;
  } else {
    console.log("Juego Finalizado.");
    break;
  }
}
