import express from 'express';
import cors from 'cors';
import pgPromise from 'pg-promise';
import bodyparser from "body-parser";

const app = express();
const PORT = 8080;
const pgp = pgPromise({});

//this is how i port my db over
const db = pgp('postgres://localhost:5432/myblog');

//middle wear  
app.use(cors());
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

//end point for route
app.get('/', (request, response) => {
  response.json({ info: 'Hello! Node.js, Express, and Postgres API' })
})



// GET from table myposts
//this will be under http://localhost:8080/myposts
app.get('/myposts', async function (req, res, next) {

    try {
      const myPosts = await db.any('SELECT * FROM myposts', [true]);
      res.send(myPosts);
    } catch (e) {
      return res.status(400).json({ e });
    }
  });

// POST for myposts
//this data is interacting with my Home and addPost conponents in the front end
app.post("/myposts", async (req,res) => {
  const blogPost = {
    title: req.body.title,
    img: req.body.img,
    body: req.body.body,
  };
  console.log( blogPost);
  try {
    const createBlogPost = await db.one (
      "INSERT INTO myposts(title, img, body) VALUES($1, $2, $3) RETURNING *",
      [blogPost.title, blogPost.img, blogPost.body]
    );
    console.log(createBlogPost);
    res.send(createBlogPost);
  } catch (e) {
    return res.status(400).json( {e} )
  }
});

// GET for my aboutMe section
app.get('/aboutme', async function (req, res, next) {

  try {
    const aboutme = await db.any('SELECT * FROM aboutme', [true]);
    res.send(aboutme);
  } catch (e) {
    return res.status(400).json({ e });
  }
});





  //should populate in console when server is launched
app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));
