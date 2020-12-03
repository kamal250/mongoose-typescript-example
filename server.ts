import * as http from "http";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import { MongoDB } from "./src/repository/mongoDB/config";

const port = process.env.SERVER_PORT;

http.createServer(app).listen(port, () => {
  console.log("Express server listening on port " + port);
  const mdb = new MongoDB();
});
