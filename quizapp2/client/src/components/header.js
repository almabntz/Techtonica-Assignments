const Header = (props) => {
  let message;
  if (props.user) {
    message = `Welcome, ${props.user} lets test your videogame smarts!`;
  } else {
    message = `Welcome!`;
  }

  return (
    <div className={"textHeader"}>
      <h1>{message}</h1>
    </div>
  );
};

export default Header;
