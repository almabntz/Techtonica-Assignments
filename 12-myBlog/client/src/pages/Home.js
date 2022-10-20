import React, { useEffect, useState } from 'react';
import AddPost from './AddPost';
import BlogCard from './blogCard';


const Home = () => {
    const [allPosts, setAllPosts] = useState([]);
    const [newPost, setNewPost] = useState({
        Title: "",
        Img: "",
        Body: ""
      });
  

//fetch from DB
//this is my GET request
const getPost = async () => {
    const response = await fetch ('http://localhost:8080/myposts');
    const myBlogPosts = await response.json ();
    setAllPosts(myBlogPosts)    
};
useEffect(() => {
    getPost();
}, [allPosts]);


// This data is acting from the parent, "Home.js"
//my addPost page will be the child that will have
// the form for the data
//POST for post 
const addNewPost = async (newPost) => {
    console.log(newPost)
    const response = await fetch ("http://localhost:8080/myposts", { //My DB is myBlogs, myposts is a table in that DB
        method: "POST", 
        headers: { "Content-Type" : "application/json" },//this is telling JSON to intake my data and post it
        body: JSON.stringify(newPost),
    })
    const data = await response.json ();
    console.log(data); //this is data from the new post
    //call function to render what new data is being passed in, 
    //backend and front end are
    //not working in sync. The second call OUTSIDE of useeffect 
    //will show user a seemless update
    // VVVV
    getPost();
};

//const [allPosts, setAllPosts] = useState([]);

//still need to create DELETE logic 
const deleteBlog = (deleteId) => {
return fetch(`http://localhost:8080/myposts/${deleteId}`, {
    method: "DELETE"
}).then((response) =>{
    if(response.ok){
        getPost();
        }
    })
};

return (
	<div>
        
    <div> 
    {allPosts.map((myPosts, index) => {
          return (
            <BlogCard 
            key={index}
            myPosts2= {myPosts} 
            deleteBlog= {deleteBlog} />
           
          );
        })}
    </div>
        <AddPost newPost={newPost} setNewPost={setNewPost} addNewPost ={addNewPost} />
	</div>
);
};

export default Home;