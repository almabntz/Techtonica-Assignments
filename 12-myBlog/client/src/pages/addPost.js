import { useState } from "react";

const AddPost = (props) => {
  const [post, setPost]  = useState ([]) 
  const [newPost, setNewPost] = useState({
    Title: "",
    Img: "",
    Body: ""
  });


  //create functions that handle the event of the user typing into the form
//   const handleNameChange = (event) => {
//     const name = event.target.value;
//     setPlayer((player) => ({ ...player, name }));
//   };


//----------------------------VVVV  REWRITE THIS PIECE OF CODE TO FIT VVV-------------------------------------
  //function to handle the post request
  // const myPost = async (getMyPost) => {
  //   const response = await fetch("http://localhost:8080/myposts", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(getMyPost),
  //   });
  //   const data = await response.json();
  //   console.log("From the post ", data);
  //   props.myPost(data);
  // };
//---------------------------- ^^^^^ REWRITE THIS PIECE OF CODE TO FIT ^^^^-------------------------------------

// incoming data from the form
// this data needs to be passed to my DB for storage
// HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    props.savePost(newPost)  //savePost is a guarded callback!
    setPost({
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
        />
        <br></br>
        <br></br>
           <label>Image:</label>
        <input
          type="text"
          id="add-blog-image"
          placeholder="Add image here"
          //value={player.Name}  //THIS IS FOR EDIT FEATURE TOUCH BACK LATER
          /*onChange={handleNameChange}*/
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
          //value={values.aboutYou} //BUILT IN CODE FOR EDIT
          //onChange={handleChange}
        />
        <br></br>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
};

export default AddPost;