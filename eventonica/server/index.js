import express from 'express'; 
import cors from 'cors'; 
import pgPromise from 'pg-promise';


//importing express
const app = express(); 
//this is my port!!!
const PORT = 8080;
//pg promise instance
const pgp = pgPromise({});

const db = pgp('postgres://localhost:5432/eventonica');

// Cors middleware 
app.use(cors());

/* GET users listing. */

app.get('/users', async function (req, res, next) {

    try {
      const users = await db.any('SELECT * FROM users', [true]);
      res.send(users);
    } catch (e) {
      return res.status(400).json({ e });
    }
  });
 //posts from form 
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
   //delete portion
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
  
  







app.listen(PORT, () => { console.log(`Hola this server is running on port ${PORT}`) });
app.get('/', (req, res) => { res.json('Hello from Techtonica'); })