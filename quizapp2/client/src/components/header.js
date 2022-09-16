const Header = (props) => {
  let message;
  if (props.user) {
    message = `Welcome, ${props.user}! Lets Test Your Videogame Smarts!`;
  } else {
    message = `Welcome To My Quiz App, Techtonica!`;
  }

  return (
    <div className={"textHeader"}>
      <h1>{message}</h1>
    </div>
  );
};

export default Header;
