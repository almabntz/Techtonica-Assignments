import "./App.css";
import Header from "./components/header";
import Users from "./components/users";
// import Events from "./components/Events";
import Footer from "./components/footer";

import calendar from "./calendar.png";
import "./App.css";

function App() {
  return (
    <div className="App">
     <Header />
      <main>
        <div className="user-and-events">
         <Users />
          <section className="event-management">
            <h2>Event Management</h2>
            <div>
              <h3>All Events</h3>
              <ul id="events-list">
                {/* Display all Events here */}
                <li>...</li>
              </ul>

              <h3>Add Event</h3>
              <form id="add-event" action="#">
                <fieldset>
                  <label>Name</label>
                  <input
                    type="text"
                    id="add-event-name"
                    placeholder="Virtual corgi meetup"
                  />
                </fieldset>
                {/* Add more form fields here */}
                <input type="submit" />
              </form>
            </div>
          </section>
        </div>

        <div>
          <h3>Delete Event</h3>
          <form id="delete-event" action="#">
            <fieldset>
              <label>Event ID</label>
              <input type="number" min="1" id="delete-event-id" />
            </fieldset>
            <input type="submit" />
          </form>
        </div>

        <aside className="search-toolbar">
          <div>
            <h3>Find Events</h3>
            <form id="search" action="#">
              <fieldset>
                <label htmlFor="date-search">Date</label>
                <input type="text" id="date-search" placeholder="YYYY-MM-DD" />
              </fieldset>
              <fieldset>
                <label htmlFor="category-search">Category</label>
                <input type="text" id="category-search" />
              </fieldset>

              <input type="submit" value="Search" />
            </form>
          </div>
        </aside>
      </main>

      <footer>
        <div>
          Star Calendar favicon made by
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>
          Find your own on
          <a href="https://www.flaticon.com/" title="Flaticon">
            FlatIcon.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;