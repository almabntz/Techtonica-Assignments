const Header = (props) => {
  let message;
  if (props.user) {
    message = `Welcome, ${props.user} !`;
  } else {
    message = `Welcome!`;
  }

  return (
    <div className={"textHeader"}>
      <h3>{message}</h3>
    </div>
  );
};

export default Header;
