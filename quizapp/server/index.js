import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import bodyParser from "body-parser";

const app = express();
const PORT = 9000;

app.use(cors());

//middleware
app.use(bodyParser.json());

//route for the index
app.get("/", (req, res) => {
  res.json("Hello from server");
});

app.post("/api/questions", (req, res) => {
  const numQs = req.body.numQs;
  const URL = "https://opentdb.com/api.php?";
  //the object keys need to match the trivia API values
  fetch(
    URL +
      new URLSearchParams({
        amount: numQs,
        //goes to server and parsing server response as JSON and returns it as JSON to my website
      })
  )
    .then((response) => response.json())
    .then((data) => res.json(data));
});

app.listen(PORT, () =>
  console.log(`Hello world! Server running on Port http://localhost:${PORT}`)
);
