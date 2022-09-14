import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import bodyParser from "body-parser";

const app = express();
const PORT = 9090;

//config cors middleware
app.use(cors());

//middleware
app.use(bodyParser.json());

//end point for the route
app.get("/", (req, res) => {
  res.json("Hello from server");
});

//Get request for the Games API
app.get("/api/game", cors(), async (req, res) => {

  const url = 'https://opentdb.com/api.php?amount=20&category=15&difficulty=easy&type=multiple';
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    
   //error response
    res.send(data);
  } catch (err) {
    console.error("Fetch error: ", err);
  }
});


app.listen(PORT, () =>
  console.log(`Hello world! Server running on Port http://localhost:${PORT}`)
);
