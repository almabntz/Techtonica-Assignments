import { useState } from "react";

//The prop created in the parent on line 36 is being called here!!
const DeleteUser = ({ deleteUser }) => {
  const [id, setId] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    deleteUser(id);
  };
  return (
    <div>
      <h3>Delete User</h3>
      <form id="delete-user" action="#" onSubmit={handleSubmit}>
        <fieldset>
          <label>User ID</label>
          <input
            type="text"
            id="delete-user-id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </fieldset>
        <input type="submit" />
      </form>
    </div>
  );
};

export default DeleteUser;
