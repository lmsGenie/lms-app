/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as path from "path";
import express from "express";

const app = express();

app.use("/assets", express.static(path.join(__dirname, "assets")));

app.get("/api", (req, res) => {
  res.send({ message: "Welcome to server!" });
});

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on("error", console.error);
