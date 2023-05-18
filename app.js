const express = require('express');
const db = require("./pkg/db/index");
const akademijaHandler = require("./handlers/akademijaHandler");
const kursHandler = require("./handlers/kursHandler")
const viewHandler = require("./handlers/viewHandler");

const app = express();

app.use(express.json());
app.set("view engine", "ejs");

db.init();

app.route("/akademija").get(akademijaHandler.getAll).post(akademijaHandler.create);

app
.route("/akademija/:id")
.get(akademijaHandler.getOne)
.patch(akademijaHandler.update)
.delete(akademijaHandler.delete);

app
  .route("/kurs")
  .get(kursHandler.getAll)
  .post(kursHandler.create);

app
  .route("/kurs/:id")
  .get(kursHandler.getOne)
  .patch(kursHandler.update)
  .delete(kursHandler.delete);

app.get("/test", viewHandler.getKurs);

app.listen(process.env.PORT, (err) => {
    if (err) {
      return console.log("Could not start service");
    }
    console.log("service started successfully on port 10000");
  });