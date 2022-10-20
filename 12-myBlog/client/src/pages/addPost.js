import React from "react";

const AddPost = ({addNewPost, setNewPost, newPost}) => {

// incoming data from the form
// this data needs to be passed to my DB for storage
// HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewPost(newPost)  
    setNewPost({
        Title: "",
        Img: "",
        Body: ""
    })
  };

//Save post is created here in the childs logic
// it will need to be passed to parent inside the return statement
// addPost is child. Home is parent.
  return (
    <form className="add-Post-form" onSubmit={handleSubmit} >
      <fieldset>
        <label>Title:</label>
        <input
          type="text"
          id="add-blog-title"
          placeholder="Title your Post"
          required
          value= {newPost.Title}
          onChange={(e) => { setNewPost((prev) => ({ ...prev, Title: e.target.value, })); }}
        />
        <br></br>
        <br></br>
           <label>Image:</label>
        <input
          type="text"
          id="add-blog-image"
          placeholder="Add image here"
          value= {newPost.Img}
          onChange={(e) => { setNewPost((prev) => ({ ...prev, Img: e.target.value, })); }}
        />
          <br></br>
          <br></br>
         <label>Body:</label>
         <br></br>
         <br></br>
        <textarea className="textarea"
          name="postBody"
          placeholder="Add body text to your post"
          required
          value= {newPost.Body}
          onChange={(e) => { setNewPost((prev) => ({ ...prev, Body: e.target.value, })); }}
        />
        <br></br>
        <button type="submit">Post</button>
      </fieldset>
    </form>
  );
};

export default AddPost;