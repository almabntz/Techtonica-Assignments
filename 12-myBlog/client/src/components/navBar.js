import React from "react";

  
const Navbar = ({setView}) => {
  return (
    //This is being imported to App.JS and passing this data so that they appear as buttons
    //this piece of code is also the part the user sees as the "Nav bar" that they intereact with
    <div className="wrap">
    <div className="navbar-container">
      <div className="navbar-btn" onClick={() => setView("home")}>
        <h2>Home</h2>
      </div>
      <div className="navbar-btn" onClick={() => setView("aboutMe")}>
        <h2>About Me</h2>
      </div>
      <div className="navbar-btn" onClick={() => setView("favorite")}>
        <h2>Favorites</h2>
      </div>
      <div className="navbar-btn" onClick={() => setView("addPost")}>
        <h2>+ Add Post</h2>
      </div>
    </div>
    </div>
  );
};
  
export default Navbar;