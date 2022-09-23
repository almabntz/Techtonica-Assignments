import express from 'express'; 
import cors from 'cors'; 
import pgPromise from 'pg-promise';
import bodyParser from "body-parser";


//importing express
const app = express(); 
//this is my port!!!
const PORT = 8080;
//pg promise instance
const pgp = pgPromise({});

//this is porting over my whole database 
const db = pgp('postgres://localhost:5432/eventonica');

// Cors middleware 
app.use(cors());

/*---------------------------------------------------------------------------------------------*/

// GET from users
app.get('/users', async function (req, res, next) {

    try {
      const users = await db.any('SELECT * FROM users', [true]);
      res.send(users);
    } catch (e) {
      return res.status(400).json({ e });
    }
  });

 //POST from users 
 app.post("/users", async (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
  };
  console.log(user);
  try {
    const createdUser = await db.one(
      "INSERT INTO users(name, email) VALUES($1, $2) RETURNING *",
      [user.name, user.email]
    );
    console.log(createdUser);
    res.send(createdUser);
  } catch (e) {
    return res.status(400).json({ e });
  }
});


// DELETE from users
app.delete("/users/:id", async (req, res) => {
  // : acts as a placeholder
  const userId = req.params.id;
  console.log(userId);
  try {
    await db.many("DELETE FROM users WHERE id=$1", [userId]);
    res.send({ status: "success" });
  } catch (e) {
    return res.status(400).json({ e });
  }
});

/*------------------------------------------------------------------- */
  //GET events listing
  app.get('/events', async function (req, res, next) {

    try {
      const events = await db.any('SELECT * FROM events');
      res.send(events);
    } catch (e) {
      return res.status(400).json({ e });
    }
  });



//POST events listing
app.post("/events", async (req, res) => {
  const event = {
    name: req.body.eventName,
    date: req.body.date,
    description: req.body.description,
    category: req.body.category,
  };
  console.log(req.body.eventName);
  console.log(event.name);
  try {
    const events = await db.any("SELECT * FROM events", [true]);
    if (events.length === 0) {
      db.any("ALTER SEQUENCE events_id_seq RESTART WITH 1");
    }
    const createdEvent = await db.one(
      "INSERT INTO events(name, date, description, category) VALUES($1, $2, $3, $4) RETURNING *",
      [event.name, event.date, event.description, event.category]
    );
    console.log(createdEvent);
    res.send(createdEvent);
  } catch (e) {
    return res.status(400).json({ e });
  }
});



   //DELETE events listing
   app.delete("/events/:id", async (req, res) => {
    const eventId = req.params.id;
    console.log(req.params.id);
    try {
      await db.many("DELETE FROM events WHERE id=$1", [eventId]);
      res.send({ status: "success" });
    } catch (e) {
      return res.status(400).json({ e });
    }
  });
  







app.listen(PORT, () => { console.log(`Hola this server is running on port ${PORT}`) });
app.get('/', (req, res) => { res.json('Hello from Techtonica'); })