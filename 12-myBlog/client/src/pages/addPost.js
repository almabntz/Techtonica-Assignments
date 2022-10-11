import { useState } from "react";

const AddPost = (props) => {
  const [newPost, setNewPost] = useState({
    Name: "",
    Score: null,
  });

  //create functions that handle the event of the user typing into the form
//   const handleNameChange = (event) => {
//     const name = event.target.value;
//     setPlayer((player) => ({ ...player, name }));
//   };



  //function to handle the post request
//   const postName = async (newPlayer) => {
//     const response = await fetch("http://localhost:3000/players", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newPlayer),
//     });
//     const data = await response.json();
//     console.log("From the post ", data);
//     props.addPlayer(data);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     postName(player);
//   };

  return (
    <form /*onSubmit={handleSubmit}*/>
      <fieldset>
        <label>Name</label>
        <input
          type="text"
          id="add-user-name"
          placeholder="Your Name"
          required
          //value={player.Name}
          /*onChange={handleNameChange}*/
        />
      </fieldset>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddPost;