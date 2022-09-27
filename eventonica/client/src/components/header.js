import calendar from "../calendar.png";

const Header = () => {
  return (
    <header>
      <img src={calendar} alt="Calendar Star Logo" />
      <h1>Eventonica</h1>
      <br></br>
      <aside className="search-toolbar">
          <div>
            <br></br>
            <h3>Find Events</h3>
            <form id="search" action="#">
              <div className="header-search">
              <fieldset>
                <label htmlFor="date-search">Date</label>
                <input type="text" id="date-search" placeholder="YYYY-MM-DD" />
              </fieldset>
              <fieldset>
                <label htmlFor="category-search">Category</label>
                <input type="text" id="category-search" />
              </fieldset>
              </div>
              <input type="submit" value="Search" />
            </form>
          </div>
        </aside>
    </header>
  );
};

export default Header;
