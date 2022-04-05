const express = require("express");
const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

const app = express();

app.use(cors())
app.use(express.json());

//...
const observationsRouter = require('./observations/observations.router');
app.use("/observations", observationsRouter);
//...

app.use(notFound);
app.use(errorHandler);

module.exports = app;
