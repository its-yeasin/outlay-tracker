import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(process.cwd(), ".env"),
});

export const configs = {
  port: process.env.PORT || 3000,
  database_url: process.env.DATABASE_URL || "",
};
