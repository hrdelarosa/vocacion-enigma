import { createPool } from "mysql2/promise";
import mysql from 'mysql2/promise'

export const connection = createPool({
  host: process.env.MYSQLHOST!,
  user: process.env.MYSQLUSER!,
  password: process.env.MYSQLPORT!,
  port: parseInt(process.env.MYSQLPASSWORD!),
  database: process.env.MYSQLDATABASE!,
})

// export const connection = createPool({
//   host: "viaduct.proxy.rlwy.net",
//   user: "root",
//   password: "MnCxZqDeLYoKKlyDBuPMBJCtZqrUbSdC",
//   port: 26245,
//   database: "railway",
// });
