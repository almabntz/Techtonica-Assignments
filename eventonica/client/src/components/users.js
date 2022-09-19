import React from "react";
import {useState} from 'react';


//EXAMPLE USERS
const marlin = { name: "Marlin", email: "marlin@gmail.com", id: "1" };
const nemo = { name: "Nemo", email: "nemo@gmail.com", id: "2" };
const dory = { name: "Dory", email: "dory@gmail.com", id: "3" };




//User management
const Users = () => {
    const [users, setUsers] = useState([marlin, nemo, dory]); // use state for users

    
const handleSubmit = (e) => {
    e.preventDefault();
  //   const newUser = { id: id, name: name, email: email };
  //   setUsers([...users, newUser]);
  };
  
  return (
    <section className="user-management">
      <h2>User Management</h2>

      <ul id="users-list">
        {/* display all existing Users here */}
        {users.map((user, index) => {
            return (
                <li key= {index}>
                Name: {user.name}, E-mail: {user.email}
                </li>
            );
        })}
      </ul>

      <div>
        <h3>Add User</h3>
        <form id="add-user" action="#" onSubmit={handleSubmit} >
          <fieldset>
            <label>Name</label>
            <input type="text" id="add-user-name" />
          </fieldset>
          {/* Add more form fields here */}
          <input type="submit" value="Add" />
        </form>
      </div>

      <div>
<h3>Delete User</h3>
<form id="delete-user" action="#">
  <fieldset>
    <label>User ID</label>
    <input type="text" id="delete-user-id" />
  </fieldset>
  <input type="submit" />
</form>
</div>

      
    </section>
  );
};

export default Users;
