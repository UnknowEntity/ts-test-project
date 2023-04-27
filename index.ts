import express from "express";
import dotenv from "dotenv";

dotenv.config();

let app = express();
const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`[SERVER]: Application Started at: http://localhost:${port}`)
);
