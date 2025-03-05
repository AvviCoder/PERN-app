import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

// Ensure dotenv loads before using env variables
dotenv.config({ path: "./backend/.env" });

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

// Debug logs
console.log("PGHOST:", PGHOST);
console.log("PGDATABASE:", PGDATABASE);
console.log("PGUSER:", PGUSER);
console.log("PGPASSWORD:", PGPASSWORD);

export const sql = neon(
  `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
);
