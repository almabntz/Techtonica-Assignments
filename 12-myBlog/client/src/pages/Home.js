import React, { useEffect, useState } from 'react';
import AddPost from './AddPost';
import BlogCard from './blogCard';

const Home = () => {
    const [createPost, setCreatePost] = useState([]);
  
  

//fetch from DB
//this is my GET request
const getPost = async () => {
    const response = await fetch ('http://localhost:8080/myposts'); //My DB is myBlogs, myposts is a table in that DB
    const myPosts = await response.json ();
    setCreatePost(myPosts)
};
useEffect(() => {
    getPost();
}, [createPost]);



// This data is acting from the parent, "Home.js"
//my addPost page will be the child that will have the form for the data
//ADD for post 
const addNewPost = async (newPost) => {
    console.log(newPost)
    const response = await fetch ("http://localhost:8080/myposts", { //My DB is myBlogs, myposts is a table in that DB
        method: "POST", 
        headers: { "Content-Type" : "application/json" },//this is telling JSON to intake my data and post it
        body: JSON.stringify(newPost),
    })
    const data = await response.json ();
    console.log(data); //this is data from the new post
};


//still need to create DELETE logic 


return (
	<div>
       
    <div> 
    {createPost.map((myPosts, index) => {
          return (
            <BlogCard
                myPosts2= {myPosts}
            />
          );
        })}
    </div>
        <AddPost savePost={addNewPost} />
	</div>
);
};

export default Home;