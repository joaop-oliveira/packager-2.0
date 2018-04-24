import express from "express";
import setupMiddware from "./src/middleware/middleware";
import { apiRouter } from "./src/api";
import connect from "./config/db";
// Declare an app from express
const app = express();

setupMiddware(app);
connect();
// console.log(apiRouter);
app.use("/api", apiRouter);
// app.use("/api", function(req, res) {
//   res.send({ ok: true });
// });

export default app;
