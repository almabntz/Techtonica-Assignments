import { useReducer } from "react";
import { useState } from "react";

//hard codede events to test functionality
const event1 = {
  id: "1",
  name: "Birthday",
  date: "2021-09-01",
  description: "A birthday party for my best friend",
  category: "Celebration",
};

const event2 = {
  id: "2",
  name: "Graduation",
  date: "2021-08-01",
  description: "The class of 2021 graduates from East High",
  category: "Education",
};

const event3 = {
  id: "3",
  name: "JS Study Session",
  date: "2021-10-01",
  description: "A chance to practice Javascript interview questions",
  category: "Education",
};

//REDUCER CODE!----------------------------------------------------------------------------
const reducer = (state, action) => {
  console.log(action, "this is the action");
  switch (action.type) {
    case "editName":
      console.log("logged if the editName action is being dispatched");
      return { ...state, name: action.payload };

    case "editId":
      return { ...state, id: action.payload };

    case "editDescription":
      return { ...state, description: action.payload };

    case "editCategory":
      return { ...state, category: action.payload };

    case "editDate":
      return { ...state, date: action.payload };

    default:
      return state;
  }
};

//-----------------VVVV functionality for events added here VVVV--------------------------------------
const Events = () => {
  //lets map out these hard coded events from the top of my page--------------------------------------
  //use state for events established
  const [events, setEvents] = useState([event1, event2, event3]);

  //lets establish INITIAL STATE for this event form---------------------------------------------------
  const initialState = {
    id: "",
    name: "",
    date: null,
    description: "",
    category: "",
  };

  //this is using useReducer which is imported from react on line 1------------------------------------------
  const [state, dispatch] = useReducer(reducer, initialState);

  //lets create an event handler for when these forms are submitted-------------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, state]);
  };

  //return statement... heres where all the logic i created is being called-------------------------------
  return (
    <section className="event-management">
      <h2>Event Management</h2>
      <div>
        <h3>All Events</h3>
        <ul id="events-list">
          {/* Display all Events here */}
          {/*----------------THIS IS WHERE I RETURN ALL EXISTING EVENTS---------------------------------------*/}
          {events.map((event, index) => {
            return (
              <li key={index}>
                {""}
                Name:{event.name}, Description:{event.description}, Date: {""}{" "}
                {event.date}, Id: {event.id}, Category: {event.category}
              </li>
            );
          })}
          <li>...</li>
        </ul>
        {/*----------------THIS IS WHERE I RETURN ONSUBMIT ADDED EVENTS---------------------------------------*/}
        <h3>Add Event</h3>
        <form id="add-event" action="#" onSubmit={handleSubmit}>
          <fieldset>
            <label>Name</label>
            <input
              type="text"
              id="add-event-name"
              placeholder="Mycology Fungi Meet Up"
              value={state.name}
              onChange={(e) =>
                dispatch({
                  type: "editName",
                  payload: e.target.value,
                })
              }
            />

            <br></br>
            <label>ID:</label>
            <br></br>
            <input
              type="text"
              id="add-event-id"
              placeholder="Event ID"
              value={ state.id }
              onChange={(e) =>
                dispatch({
                  type: "editID",
                  payload: e.target.value,
                })
              }
            />
            <br></br>
            <label>Date:</label>
            <br></br>
            <input
              type="text"
              id="add-event-date"
              placeholder="04/16/2018"
              value={state.date}
              onChange={(e) =>
                dispatch({
                  type: "editDate",
                  payload: e.target.value,
                })
              }
            />

            <br></br>
            <label>Description: </label>
            <br></br>
            <input
              type="text"
              id="add-event-description"
              placeholder="We're talking about Mushrooms!"
              value={state.description}
              onChange={(e) =>
                dispatch({
                  type: "editDescription",
                  payload: e.target.value,
                })
              }
            />

            <br></br>
            <label>Category: </label>
            <br></br>
            <input
              type="text"
              id="add-event-category"
              placeholder="Forging"
              value={state.category}
              onChange={(e) =>
                dispatch({
                  type: "editCategory",
                  payload: e.target.value,
                })
              }
            />
          </fieldset>
          {/* Add more form fields here */}
          <input type="submit" />
        </form>
      </div>
    </section>
  );
};
export default Events;
