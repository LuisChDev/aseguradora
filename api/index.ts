/*
 * Este módulo contiene las funciones relacionadas a la comunicación con el
 * servidor. Para propósitos de esta prueba, será un dummy con una base de
 * simple. Debería de ser fácilde reemplazar por una conexión real.
 */

/**
 * retorna los valores que coincidan en caulquiera de los campos.
 */

/**
 * los datos dummy.
 */
let dummies: [
  // Nombre
  string,
  // Descripción
  string,
  // coberturas. tipo y porcentaje.
  [cobertura, percentage][],
  // Inicio de vigencia
  Date,
  // periodo de cobertura (en meses)
  number,
  // precio de la póliza
  number,
  // tipo de riesgo
  ("bajo" | "medio" | "medio-alto" | "alto")
][] = [
  ["seguro para vehículo",
   "Este seguro protege a su vehículo de robo o pérdida.",
   [["Robo", 35], ["Pérdida", 40]],
   new Date("2020/11/22 15:30:00"),
   12,
   300000,
   "medio"
  ],
  ["Seguro de edificios",
   "Proteja su casa, condominio o negocio de desastres naturales.",
   [["Terremoto", 20], ["Incendio", 50]],
   new Date("2020/11/26 17:10:00"),
   15,
   350000,
   "medio"
  ],
  ["Seguros Comercios Cartagena",
   "Recibe protección de ataques a tu local",
   [["Robo", 20], ["Incendio", 40]],
   new Date("2020/11/26 17:10:00"),
   18,
   500000,
   "medio-alto"
  ],

  ["Protección trabajo de alto riesgo",
   "Protege a los que más quieres",
   [["Accidente", 40], ["Vida", 40]],
   new Date("2020/11/20 20:10:00"),
   24,
   1000000,
   "alto"
  ],
]

/**
 * tipos de cobertura
 */
type cobertura = "Terremoto" | "Incendio" | "Robo" | "Pérdida" | "Vida"
  | "Accidente";

/**
 * tipo para porcentajes
 */
type percentage = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20
  | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30
  | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40
  | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50
  | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60
  | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70
  | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80
  | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90
  | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100;
