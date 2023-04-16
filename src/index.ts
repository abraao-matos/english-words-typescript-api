import express from "express";
import { config } from "dotenv";

config();
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("hello gostoso");
});

app.listen(port, () => console.log(`listening on port ${port}!`));
