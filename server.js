const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
	res.render("index");
})

app.listen(8085);
console.log('Servidor em execução na porta 8085');