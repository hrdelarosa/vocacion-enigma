import { createPool } from "mysql2/promise";

// export const connection = createPool({
//   host: "localhost",
//   user: "root",
//   password: "191102",
//   port: 3306,
//   database: "bd_vocacion_enigma",
// });

export const connection = createPool({
  host: "viaduct.proxy.rlwy.net",
  user: "root",
  password: "MnCxZqDeLYoKKlyDBuPMBJCtZqrUbSdC",
  port: 26245,
  database: "railway",
})
