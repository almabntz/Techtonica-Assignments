import express from 'express';
import cors from 'cors';
import pgPromise from 'pg-promise';
import bodyParser from "body-parser";

const app = express();
const PORT = 8080;
const pgp = pgPromise({});

//this is how i port my db over
const db = pgp('postgres://localhost:5432/game');

//middle wear  
app.use(cors());

// GET from players
//this will be under http://localhost:8080/players
app.get('/players', async function (req, res, next) {

    try {
      const players = await db.any('SELECT * FROM players', [true]);
      res.send(players);
    } catch (e) {
      return res.status(400).json({ e });
    }
  });







//end point for route
app.get('/', (request, response) => {
    response.json({ info: 'Hello! Node.js, Express, and Postgres API' })
  })

  //should populate in console when server is launched
app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));
