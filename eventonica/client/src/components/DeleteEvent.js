import { useState } from "react";

//lets PASS a prop. This is the child.
//we will need to add coorespondace in the parent later

const DeleteEvent = ({ deleteEvent }) => {
  const [id, setId] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    deleteEvent(id);
  };
  //THIS DIV IS FROM THE STARTER CODE
  return (
    <div>
      <h3>Delete Event</h3>
      <form id="delete-event" action="#" onSubmit={handleSubmit}>
        <fieldset>
          <label>Event ID</label>
          <input
            type="number"
            min="1"
            id="delete-event-id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </fieldset>
        <input type="submit" />
      </form>
    </div>
  );
};

export default DeleteEvent;
