const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const path = require('path');


app.use(express.static("assets"));
app.listen(3000, () => {
console.log("El servidor está inicializado en el puerto 3000");
});

app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));

app.engine(
"handlebars",
exphbs.engine({
layoutsDir: __dirname + "/views",
partialsDir: __dirname + "/views/componentes/",
})
);
app.set("view engine", "handlebars");

app.get('/', (req, res) => {
  res.render("Inicio", {
    layout: "Inicio",
    tarjetas: ["banana", "cebollas", "lechuga", "papas", "pimenton", "tomate"],
  });
});
