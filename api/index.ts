/*
 * Este módulo contiene las funciones relacionadas a la comunicación con el
 * servidor. Para propósitos de esta prueba, será un dummy con una base de
 * simple. Debería de ser fácilde reemplazar por una conexión real.
 */

/**
 * tipo para porcentajes
 */
type Percentage = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20
  | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30
  | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40
  | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50
  | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60
  | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70
  | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80
  | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90
  | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100;

/**
 * tipos de cobertura
 */
enum Cobertura {
  Terremoto,
  Incendio,
  Robo,
  Perdida,
  Vida,
  Accidente
}

const Cobs = {
  0: "Terremoto",
  1: "Incendio",
  2: "Robo",
  3: "Pérdida",
  4: "Vida",
  5: "Accidente"
}

/**
 * tipos de riesgo
 */
type Riesgo = "bajo" | "medio" | "medio-alto" | "alto"

/**
 * el tipo de las polizas.
 */
type Poliza = {
  // ID
  id: string,
  // Nombre
  nombre: string,
  // Descripción
  descripcion: string,
  // coberturas. tipo y porcentaje.
  coberturas: [Cobertura, Percentage][],
  // Inicio de vigencia
  fecha: Date,
  // periodo de cobertura (en meses)
  periodo: number,
  // precio de la póliza
  precio: number,
  // tipo de riesgo
  riesgo: Riesgo
}

/**
 * retorna los valores que coincidan en cualquiera de los campos.
 */
const busqueda = (cadena: string): Poliza[] => {
  let matches: Poliza[] = []
  for (let row in dummies) {
    if (dummies[row].nombre.includes(cadena)||
      dummies[row].descripcion.includes(cadena)||
      dummies[row].riesgo.includes(cadena)) {
      matches.push(dummies[row]);
      break;
    }
    for (let factor in dummies[row].coberturas) {
      if (Cobs[dummies[row].coberturas[factor][0]].includes(cadena)) {
        matches.push(dummies[row]);
        break;
      }
    }
  }

  return matches;
}

/**
 * modifica los valores de la base de datos.
 */
const modifica = (poliza: Poliza): void => {
  for (let i in dummies) {
    if (dummies[i].id === poliza.id) {
      dummies[i] = poliza;
      break;
    }
  }
}

/**
 * los datos dummy.
 */
let dummies: Poliza[] = [
  {id: "2a4v98a1",
   nombre: "seguro para vehículo",
   descripcion: "Este seguro protege a su vehículo de robo o pérdida.",
   coberturas: [[Cobertura.Robo, 35], [Cobertura.Perdida, 40]],
   fecha: new Date("2020/11/22 15:30:00"),
   periodo: 12,
   precio: 300000,
   riesgo: "medio"
  },
  {id: "642c97bf",
   nombre: "Seguro de edificios",
   descripcion: "Proteja su casa, condominio o negocio de desastres naturales.",
   coberturas: [[Cobertura.Terremoto, 20], [Cobertura.Incendio, 50]],
   fecha: new Date("2020/11/26 17:10:00"),
   periodo: 15,
   precio: 350000,
   riesgo: "medio"
  },
  {id: "124feeg2",
   nombre: "Seguros Comercios Cartagena",
   descripcion: "Recibe protección de ataques a tu local",
   coberturas: [[Cobertura.Robo, 20], [Cobertura.Incendio, 40]],
   fecha: new Date("2020/11/26 17:10:00"),
   periodo: 18,
   precio: 500000,
   riesgo: "medio-alto"
  },
  {id: "4fe2ac89",
   nombre: "Protección trabajo de alto riesgo",
   descripcion: "Protege a los que más quieres",
   coberturas: [[Cobertura.Accidente, 40], [Cobertura.Vida, 40]],
   fecha: new Date("2020/11/20 20:10:00"),
   periodo: 24,
   precio: 1000000,
   riesgo: "alto"
  },
]


export {busqueda, Poliza, modifica, Riesgo, Percentage, Cobertura, Cobs};
