// This will be your express server 

import express from "express";
import cors from "cors";
import books from "./books.js";
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const PORT = 8080;


// Configuring cors middleware
app.use(cors());


// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// to let the server know what directory are we working on 
const __dirname = path.resolve();
app.use(express.static('client'));


// /api/books

//creates an endpoint for the route `/api/books` that prints all the books 
app.get('/api/books', (req, resp) =>{
    resp.json(books);

})

//this is route
app.get('/', (req, resp) =>{
    // open the index.html file that is in the client folder in your path
    resp.sendFile(path.join(__dirname, 'client', 'index.html'));
})

//route to new book page
app.get('/newbook', (req,res) =>{
    res.sendFile(path.join(__dirname, 'client', 'newbook.html'))
});


//will post new book into collection of books
app.post('/new-book', (req, res) => {
    const book = req.body;
    console.log(book);
    books.push(book);
  
    res.redirect('http://localhost:8080');
    console.log("Book added to database");
    console.log(path.join(__dirname, 'client', 'index.html'));
  })
// const I_LOVE = require ('./config.js');


// console.log("I love",I_LOVE); 

app.listen(PORT, () => console.log(`HOLA! Server running at ${PORT}`));