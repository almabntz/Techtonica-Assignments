const deleteUser = (deleteId) => {
    const newUsers = users.filter((i) => i.id !== deleteId);
    setUsers(newUsers);
  };


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