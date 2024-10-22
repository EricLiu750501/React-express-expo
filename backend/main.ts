import express from "npm:express@4.18.2";
import data from "./data.json" with { type: "json" };

const app = express();
const port = 8000

console.log("Now is listening 127.0.0.1 port:8000 ...")



app.get("/", (req, res) => {
  res.send("Welcome to the Dinosaur API!");
});

app.get("/api", (req, res) => {
  res.send(data);
});

app.get("/api/:dinosaur", (req, res) => {
  if (req?.params?.dinosaur) {
    const filtered = data.filter(function (item) {
      return item["name"].toLowerCase() === req.params.dinosaur.toLowerCase();
    });
    if (filtered.length === 0) {
      return res.send("No dinosaurs found.");
    } else {
      return res.send(filtered[0]);
    }
  }
});

app.listen(port);