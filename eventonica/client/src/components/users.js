import React from "react";
import { useState } from "react";
import DeleteUser from "./DeleteUser";

//EXAMPLE USERS TO TEST RENDER
const marlin = { name: "Marlin", email: "marlin@gmail.com", id: "1" };
const nemo = { name: "Nemo", email: "nemo@gmail.com", id: "2" };
const dory = { name: "Dory", email: "dory@gmail.com", id: "3" };

//User management
const Users = () => {
  const [users, setUsers] = useState([marlin, nemo, dory]); // use state for TEST users
  const [newUser, setNewUser] = useState({ name: "", email: "", id: "" });
  const set = (name) => {
    return ({ target: { value } }) => {
      setNewUser((originalValues) => ({
        ...originalValues,
        [name]: value,
      }));
    };
  };

  //EVENT HANDLER for incoming data from form
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, newUser]);
    setNewUser({ name: "", email: "", id: "" });
  };

  //DELETE USER FUNCTION
  //1. create logic that will delete a user inside the parent. 
  //2. using props route that info into the child, the 'Delete User' component
  //3. return that data thats been modified in the child component (deleteUser) and return it to the parent (users) 
  //User is the parent, DeleteUser is the child

  // This is the logic that will delete user ID, 'deleteId' is my prop!
  const deleteUser = (deleteId) => {
    const newUsers = users.filter((i) => i.id !== deleteId);
    setUsers(newUsers);
  };
  return (
    <section className="user-management">
      <h2>User Management</h2>

      <ul id="users-list">
        {/* display all existing Users here */}
        {users.map((user, index) => {
          return (
            <li key={index}>
              Name: {user.name}, E-mail: {user.email}
            </li>
          );
        })}
      </ul>

      <div>
        <h3>Add User</h3>
        <form id="add-user" action="#" onSubmit={handleSubmit}>
          <fieldset>
            <label>Name</label>
            <input
              type="text"
              id="add-user-name"
              name="name"
              value={newUser.name} // changes the name
              onChange={set("name")} // handlechange function
            />
            <label>E-mail</label>
            <input
              type="text"
              id="add-user-email"
              name="email"
              value={newUser.email} // changes the email
              onChange={set("email")} // handlechange function
            />
            <label>Id</label>
            <input
              type="text"
              id="add-user-id"
              value={newUser.id}
              onChange={set("id")}
            />
          </fieldset>
          {/* Add more form fields here */}
          <input type="submit" value="Add" />
        </form>
      </div>
      <DeleteUser deleteUser={deleteUser} />
    </section>
  );
};

export default Users;
