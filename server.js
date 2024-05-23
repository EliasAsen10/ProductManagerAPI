const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/products", async function (req, res) {
  res.send([{ name: "Zahnbürste" }, { name: "Lego" }]);
});

app.listen(3000, () => console.log("Example REST gestartet"));
