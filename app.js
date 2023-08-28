// With God's Help
const express = require("express");
const app = express();
const morganLogger = require("./logger/morgan");
const router = require("./router/router");
const cors = require("./helpers/cors");

app.use(morganLogger);
app.use(cors());
app.use(express.json());
app.use(express.text());

app.use("/api", router);

// morgan(":method :url :status :res[content-length] - :response-time ms");

const PORT = 8000;
app.listen(PORT, (error) => {
  if (error) return console.error(error.message);

  console.log("Your Server Is Running on port:", PORT);
});
